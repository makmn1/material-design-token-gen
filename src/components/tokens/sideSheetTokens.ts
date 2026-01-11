export const sideSheetEnabledContainer: Record<string, string | number> = {
    "md.comp.sheet.side.docked.modal.container.color": "md.sys.color.surface-container-low",
    "md.comp.sheet.side.docked.standard.container.color": "md.sys.color.surface",
    "md.comp.sheet.side.docked.modal.container.elevation": "md.sys.elevation.level1",
    "md.comp.sheet.side.docked.standard.container.elevation": "md.sys.elevation.level0",
    "md.comp.sheet.side.docked.container.height": "100%",
    "md.comp.sheet.side.docked.container.shape": "md.sys.shape.corner.none",
    "md.comp.sheet.side.detached.container.shape": "md.sys.shape.corner.large",
    "md.comp.sheet.side.docked.container.width": "256dp",
    "md.comp.sheet.side.docked.modal.container.shape": "md.sys.shape.corner.large.start",
};

export const sideSheetEnabledHeadline: Record<string, string | number> = {
    "md.comp.sheet.side.docked.headline.color": "md.sys.color.on-surface-variant",
    "md.comp.sheet.side.docked.headline.font": "md.sys.typescale.title-large.font",
    "md.comp.sheet.side.docked.headline.line-height": "md.sys.typescale.title-large.line-height",
    "md.comp.sheet.side.docked.headline.size": "md.sys.typescale.title-large.size",
    "md.comp.sheet.side.docked.headline.tracking": "md.sys.typescale.title-large.tracking",
    "md.comp.sheet.side.docked.headline.weight": "md.sys.typescale.title-large.weight",
    "md.comp.sheet.side.docked.headline.type": "md.sys.typescale.title-large",
};

export const sideSheetEnabledDivider: Record<string, string | number> = {
    "md.comp.sheet.side.docked.divider.color": "md.sys.color.outline",
};

export const sideSheetHoveredLabelText: Record<string, string | number> = {
    "md.comp.sheet.side.docked.action.hover.label-text.color": "md.sys.color.primary",
};

export const sideSheetHoveredStateLayer: Record<string, string | number> = {
    "md.comp.sheet.side.docked.action.hover.state-layer.color": "md.sys.color.primary",
    "md.comp.sheet.side.docked.action.hover.state-layer.opacity":
        "md.sys.state.hover.state-layer-opacity",
};

export const sideSheetFocusedFocusIndicator: Record<string, string | number> = {
    "md.comp.sheet.side.docked.focus.indicator.color": "md.sys.color.secondary",
    "md.comp.sheet.side.docked.focus.indicator.thickness":
        "md.sys.state.focus-indicator.thickness",
    "md.comp.sheet.side.docked.focus.indicator.outline.offset":
        "md.sys.state.focus-indicator.outer-offset",
};

export const sideSheetFocusedLabelText: Record<string, string | number> = {
    "md.comp.sheet.side.docked.action.focus.label-text.color": "md.sys.color.primary",
};

export const sideSheetFocusedStateLayer: Record<string, string | number> = {
    "md.comp.sheet.side.docked.action.focus.state-layer.color": "md.sys.color.primary",
    "md.comp.sheet.side.docked.action.focus.state-layer.opacity":
        "md.sys.state.focus.state-layer-opacity",
};

export const sideSheetPressedLabelText: Record<string, string | number> = {
    "md.comp.sheet.side.docked.action.pressed.label-text.color": "md.sys.color.primary",
};

export const sideSheetPressedStateLayer: Record<string, string | number> = {
    "md.comp.sheet.side.docked.action.pressed.state-layer.color": "md.sys.color.primary",
    "md.comp.sheet.side.docked.action.pressed.state-layer.opacity":
        "md.sys.state.pressed.state-layer-opacity",
};

export const sideSheetTokens: Record<string, string | number> = Object.assign(
    {},
    sideSheetEnabledContainer,
    sideSheetEnabledHeadline,
    sideSheetEnabledDivider,
    sideSheetHoveredLabelText,
    sideSheetHoveredStateLayer,
    sideSheetFocusedFocusIndicator,
    sideSheetFocusedLabelText,
    sideSheetFocusedStateLayer,
    sideSheetPressedLabelText,
    sideSheetPressedStateLayer,
);

