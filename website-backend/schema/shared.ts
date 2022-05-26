import { list, graphql, BaseFields } from '@keystone-6/core';
import { cloudinaryImage } from '@keystone-6/cloudinary';
import fs from 'fs';
import path from 'path';
import slugify from 'slugify';
import { Lists } from '.keystone/types';
import {
  text,
  password,
  select,
  checkbox,
  relationship,
  json,
  virtual,
} from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';
import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } from '../config';
import * as mainComponentBlocks from '../admin/component-blocks/main';
import * as relatedInfoComponentBlocks from '../admin/component-blocks/related-info';
import { fieldType } from '@keystone-6/core/types';
import { Prisma } from '.prisma/client';

const inlineMarks = {
  bold: true,
  italic: true,
  strikethrough: true,
  underline: true,
  code: true,
} as const;

const mainDocumentConfig = {
  formatting: {
    blockTypes: true,
    listTypes: true,
    inlineMarks,
  },
  componentBlocks: mainComponentBlocks.componentBlocks,
  ui: { views: require.resolve('../admin/component-blocks/main') },
  links: true,
  dividers: true,
} as const;

function preloadPackages () {
  const cwd = process.cwd();
  const packages: {
    path: string;
    unscopedName: string;
    name: string;
    version: string;
    description?: string;
    dependencies?: Record<string, unknown>;
    author?: string;
  }[] = [];

  for (const item of fs.readdirSync(path.join(cwd, '../components'))) {
    let content;
    try {
      content = fs.readFileSync(path.join(cwd, `../components/${item}/package.json`), 'utf-8');
    } catch (err: any) {
      if (err.code === 'ENOENT') {
      console.error('missing', item)
        continue;
      }
      throw err;
    }
    const pkg = JSON.parse(content);
    packages.push({ ...pkg, path: item, unscopedName: pkg.name.split('/').reverse()[0] });
  }

  return {
    packages,
    packagesMap: new Map<string | null, typeof packages[number]>(
			packages.map((pkg) => [pkg.unscopedName.replace('-', '_'), pkg])
		)
  }
}

export function formatURL (url: string) {
  const result = url
    .split('/')
    .map((d) => slugify(d))
    .join('/');

  if (result.charAt(0) !== '/') return `/${result}`;
  return result;
}

export function pageFields(listKey: string): BaseFields<Lists.Page.TypeInfo> {
  const { packages, packagesMap } = preloadPackages()
    return {
      pageTitle: text({ validation: { isRequired: true } }),
      url: text({
        hooks: {
          resolveInput: ({ item, resolvedData }) => {
            if (resolvedData.url) {
              return formatURL(resolvedData.url)
            }
            if (item && item?.url !== '') {
              return item.url;
            }
            if (resolvedData.packageName) {
              return `/components/${slugify(resolvedData.packageName).toLowerCase()}`;
            }
            if (resolvedData.pageTitle) {
              return `/components/${slugify(resolvedData.pageTitle).toLowerCase()}`;
            }

            return undefined;
          },
        },
      }),
      packageName: select({
        options: packages.map((pkg) => ({
          value: pkg.unscopedName.replace('-', '_'),
          label: pkg.unscopedName,
        })),
      }),
      version: virtual({
        field: graphql.field({
          type: graphql.String,
          resolve: ({ code, design, accessibility, ...rest }) => {
            return packagesMap.get(rest.packageName)?.version;
          },
        }),
      }),
      description: virtual({
        field: graphql.field({
          type: graphql.String,
          resolve: (item) => packagesMap.get(item.packageName)?.description,
        }),
      }),
      isOrphaned: virtual({
        field: graphql.field({
          type: graphql.Boolean,
          resolve(item) {
            if (!item.packageName) {
              return false;
            }
            return !packagesMap.has(item.packageName);
          },
        }),
      }),
      author: virtual({
        field: graphql.field({
          type: graphql.String,
          resolve: (item) => packagesMap.get(item.packageName)?.author,
        }),
      }),
      requires: virtual({
        field: graphql.field({
          type: graphql.String,
          resolve(item) {
            if (!item.packageName) {
              return null;
            }
            const component = packagesMap.get(item.packageName);
            if (!component?.dependencies) {
              return null;
            }
            return (
              Object.keys(component.dependencies)
                .filter((key) => key.includes('@westpac/'))
                .join(', ') || ''
            );
          },
        }),
      }),
      designOld: json({
        ui: {
          itemView: { fieldMode: 'hidden' },
          createView: { fieldMode: 'hidden' },
          listView: { fieldMode: 'hidden' },
        },
      }),
      design: document(mainDocumentConfig),
      hideAccessibilityTab: checkbox(),
      accessibilityOld: json({
        ui: {
          itemView: { fieldMode: 'hidden' },
          createView: { fieldMode: 'hidden' },
          listView: { fieldMode: 'hidden' },
        },
      }),
      accessibility: document(mainDocumentConfig),
      hideCodeTab: checkbox(),
      codeOld: json({
        ui: {
          itemView: { fieldMode: 'hidden' },
          createView: { fieldMode: 'hidden' },
          listView: { fieldMode: 'hidden' },
        },
      }),
      code: document(mainDocumentConfig),
      relatedPages: relationship({ ref: listKey, many: true }),
      relatedInfoOld: json({
        ui: {
          itemView: { fieldMode: 'hidden' },
          createView: { fieldMode: 'hidden' },
          listView: { fieldMode: 'hidden' },
        },
      }),
      relatedInfo: document({
        formatting: {
          inlineMarks,
        },
        componentBlocks: relatedInfoComponentBlocks.componentBlocks,
        ui: {
          views: require.resolve('../admin/component-blocks/related-info'),
        },
        links: true,
      }),
    };
  }
