export const menuEnabledContainer: Record<string, string | number> = {
    "md.comp.menu.container.color": "md.sys.color.surface-container",
    "md.comp.menu.container.elevation": "md.sys.elevation.level2",
    "md.comp.menu.container.shape": "md.sys.shape.corner.extra-small",
};

export const menuFocusedFocusIndicator: Record<string, string | number> = {
    "md.comp.menu.focus.indicator.color": "md.sys.color.secondary",
    "md.comp.menu.focus.indicator.thickness": "md.sys.state.focus-indicator.thickness",
    "md.comp.menu.focus.indicator.offset": "md.sys.state.focus-indicator.inner-offset",
};

export const menuTokens: Record<string, string | number> = Object.assign(
    {},
    menuEnabledContainer,
    menuFocusedFocusIndicator,
);

