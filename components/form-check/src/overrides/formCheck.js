/** @jsx jsx */

import { jsx } from '@westpac/core';
import React from 'react';

export const FormCheck = ({ type, name, size, inline, disabled, defaultValue, data, ...rest }) => (
	<div {...rest} />
);

export const formCheckStyles = () => ({});
