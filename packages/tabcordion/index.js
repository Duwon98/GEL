/* @jsx jsx*/

import React, { Children, Fragment, createRef, forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { jsx } from '@emotion/core';

import ContainerQuery from '../core';
import { AccordionLabel, Pane, TabItem, TabRow } from './styled';

export const Tab = forwardRef(({ index, isSelected, mode, prefix, onClick, ...props }, ref) => {
  return (
    <div ref={ref}>
      {mode === 'accordion' ? (
        <AccordionLabel onClick={onClick} id={`tab-${prefix}-${index}`} isSelected={isSelected}>
          {props.label}
        </AccordionLabel>
      ) : null}
      <Pane hidden={!isSelected} aria-labelledby={`tab-${prefix}-${index}`} isSelected={isSelected}>
        {props.children}
      </Pane>
    </div>
  );
});

let instanceId = 0;

export default class Tabcordion extends React.Component {
  state = {
    activeTabIndex: this.props.initialIndex,
  };
  instancePrefix = this.props.instanceId || 'gel-tabcordion-' + ++instanceId;

  static propTypes = {
    /* An array of TabPanes that can be navigated through */
    children: PropTypes.arrayOf(PropTypes.instanceOf(Tab)),
    /* Define an id prefix for the select components e.g. {your-id}-value */
    instanceId: PropTypes.string,
  };
  static defaultProps = {
    activeTabIndex: 0,
  };

  setActive = activeTabIndex => () => {
    this.setState({ activeTabIndex });
  };

  getElementId = (element: 'group' | 'input' | 'listbox' | 'option') => {
    return `${this.instancePrefix}-${element}`;
  };

  render() {
    const { activeTabIndex } = this.state;

    return (
      <ContainerQuery>
        {({ width }) => {
          const mode = width < 768 ? 'accordion' : 'tabs';
          console.log('mode', mode);

          return (
            <Fragment>
              {mode === 'tabs' ? (
                <TabRow>
                  {Children.map(this.props.children, (child, idx) => (
                    <TabItem onClick={this.setActive(idx)} isSelected={activeTabIndex === idx}>
                      {child.props.label}
                    </TabItem>
                  ))}
                </TabRow>
              ) : null}
              {Children.map(this.props.children, (child, idx) => (
                <Tab
                  {...this.state}
                  {...child.props}
                  key={child.props.label}
                  isSelected={activeTabIndex === idx}
                  index={idx}
                  prefix={this.prefix}
                  index={idx}
                  onClick={this.setActive(idx)}
                  mode={mode}
                />
              ))}
            </Fragment>
          );
        }}
      </ContainerQuery>
    );
  }
}
