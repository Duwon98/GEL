import React from 'react';
import { GEL } from '../../components/core';
import defaultBrand from '../../brands/WBC';

export default function({ children }) {
	return <GEL brand={defaultBrand}>{children}</GEL>;
}
