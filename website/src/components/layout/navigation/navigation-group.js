/** @jsx jsx */

import { jsx, useBrand, useInstanceId } from '@westpac/core';
import { AddIcon, RemoveIcon } from '@westpac/icon';
import { useState, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { useSpring, animated } from 'react-spring';
import useMeasure from 'react-use-measure';
import { NavigationItem, StyledItem } from './navigation-item';

export const NavigationGroup = ({ title, isBlockOpen, level, children }) => {
	const { COLORS, PACKS } = useBrand();
	const [isOpen, setIsOpen] = useState(isBlockOpen);
	const [measureRef, { height }] = useMeasure({ polyfill: ResizeObserver });
	const [initial, setInitial] = useState(true);
	const [instanceId, setInstanceId] = useState();

	const handleButtonClick = () => {
		if (initial) {
			setInitial(false);
		}
		setIsOpen((currentState) => !currentState);
	};

	useEffect(() => {
		setInstanceId(`nav-group-${useInstanceId()}`);
	}, []);

	const animate = useSpring({
		to: {
			height: !isOpen ? 0 : height,
			overflow: 'hidden',
		},
		immediate: initial,
	});

	return (
		<NavigationItem>
			<StyledItem
				tag="button"
				level={level}
				onClick={handleButtonClick}
				aria-expanded={isOpen}
				aria-controls={instanceId}
				css={{
					display: 'flex',
					width: '100%',
					justifyContent: 'space-between',
					cursor: 'pointer',
					border: 0,
					background: 'transparent',
					':focus': {
						outlineOffset: `-${PACKS.focus.outlineWidth}`,
					},
				}}
			>
				<span>{title}</span>
				{isOpen ? (
					<RemoveIcon size="small" color={COLORS.muted} />
				) : (
					<AddIcon size="small" color={COLORS.muted} />
				)}
			</StyledItem>
			<animated.div style={animate} id={instanceId} aria-hidden={!isOpen}>
				<div ref={measureRef}>{children}</div>
			</animated.div>
		</NavigationItem>
	);
};
