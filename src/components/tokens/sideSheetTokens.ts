export const sideSheetEnabledContainer: Record<string, string | number> = {
    "md.comp.side-sheet.docked.modal.container.color": "md.sys.color.surface-container-low",
    "md.comp.side-sheet.docked.standard.container.color": "md.sys.color.surface",
    "md.comp.side-sheet.docked.modal.container.elevation": "md.sys.elevation.level1",
    "md.comp.side-sheet.docked.standard.container.elevation": "md.sys.elevation.level0",
    "md.comp.side-sheet.docked.container.height": "100%",
    "md.comp.side-sheet.docked.container.shape": "md.sys.shape.corner.none",
    "md.comp.side-sheet.detached.container.shape": "md.sys.shape.corner.large",
    "md.comp.side-sheet.docked.container.width": "256dp",
    "md.comp.side-sheet.docked.modal.container.shape": "md.sys.shape.corner.large.start",
};

export const sideSheetEnabledHeadline: Record<string, string | number> = {
    "md.comp.side-sheet.docked.headline.color": "md.sys.color.on-surface-variant",
    "md.comp.side-sheet.docked.headline.font": "md.sys.typescale.title-large.font",
    "md.comp.side-sheet.docked.headline.line.height": "md.sys.typescale.title-large.line-height",
    "md.comp.side-sheet.docked.headline.size": "md.sys.typescale.title-large.size",
    "md.comp.side-sheet.docked.headline.tracking": "md.sys.typescale.title-large.tracking",
    "md.comp.side-sheet.docked.headline.weight": "md.sys.typescale.title-large.weight",
};

export const sideSheetEnabledDivider: Record<string, string | number> = {
    "md.comp.side-sheet.docked.divider.color": "md.sys.color.outline",
};

export const sideSheetHoveredLabelText: Record<string, string | number> = {
    "md.comp.side-sheet.docked.action.hover.label.text.color": "md.sys.color.primary",
};

export const sideSheetHoveredStateLayer: Record<string, string | number> = {
    "md.comp.side-sheet.docked.action.hover.state.layer.color": "md.sys.color.primary",
    "md.comp.side-sheet.docked.action.hover.state.layer.opacity":
        "md.sys.state.hover.state-layer-opacity",
};

export const sideSheetFocusedFocusIndicator: Record<string, string | number> = {
    "md.comp.side-sheet.docked.focus.indicator.color": "md.sys.color.secondary",
    "md.comp.side-sheet.docked.focus.indicator.thickness":
        "md.sys.state.focus-indicator.thickness",
    "md.comp.side-sheet.docked.focus.indicator.offset":
        "md.sys.state.focus-indicator.outer-offset",
};

export const sideSheetFocusedLabelText: Record<string, string | number> = {
    "md.comp.side-sheet.docked.action.focus.label.text.color": "md.sys.color.primary",
};

export const sideSheetFocusedStateLayer: Record<string, string | number> = {
    "md.comp.side-sheet.docked.action.focus.state.layer.color": "md.sys.color.primary",
    "md.comp.side-sheet.docked.action.focus.state.layer.opacity":
        "md.sys.state.focus.state-layer-opacity",
};

export const sideSheetPressedLabelText: Record<string, string | number> = {
    "md.comp.side-sheet.docked.action.pressed.label.text.color": "md.sys.color.primary",
};

export const sideSheetPressedStateLayer: Record<string, string | number> = {
    "md.comp.side-sheet.docked.action.pressed.state.layer.color": "md.sys.color.primary",
    "md.comp.side-sheet.docked.action.pressed.state.layer.opacity":
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

