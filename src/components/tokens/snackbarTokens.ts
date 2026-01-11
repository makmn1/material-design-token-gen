export const snackbarEnabledContainer: Record<string, string | number> = {
    "md.comp.snackbar.container.color": "md.sys.color.inverse-surface",
    "md.comp.snackbar.container.shadow-color": "md.sys.color.shadow",
    "md.comp.snackbar.container.elevation": "md.sys.elevation.level3",
    "md.comp.snackbar.container.shape": "md.sys.shape.corner.extra-small",
    "md.comp.snackbar.with-single-line.container.height": "48dp",
    "md.comp.snackbar.with-two-lines.container.height": "68dp",
};

export const snackbarEnabledLabelText: Record<string, string | number> = {
    "md.comp.snackbar.action.label-text.type": "md.sys.typescale.label-large",
    "md.comp.snackbar.action.label-text.color": "md.sys.color.inverse-primary",
    "md.comp.snackbar.action.label-text.font": "md.sys.typescale.label-large.font",
    "md.comp.snackbar.action.label-text.line-height": "md.sys.typescale.label-large.line-height",
    "md.comp.snackbar.action.label-text.size": "md.sys.typescale.label-large.size",
    "md.comp.snackbar.action.label-text.tracking": "md.sys.typescale.label-large.tracking",
    "md.comp.snackbar.action.label-text.weight": "md.sys.typescale.label-large.weight",
};

export const snackbarEnabledIcon: Record<string, string | number> = {
    "md.comp.snackbar.icon.color": "md.sys.color.inverse-on-surface",
    "md.comp.snackbar.icon.size": "24dp",
};

export const snackbarEnabledSupportingText: Record<string, string | number> = {
    "md.comp.snackbar.supporting-text.type": "md.sys.typescale.body-medium",
    "md.comp.snackbar.supporting-text.color": "md.sys.color.inverse-on-surface",
    "md.comp.snackbar.supporting-text.font": "md.sys.typescale.body-medium.font",
    "md.comp.snackbar.supporting-text.line-height": "md.sys.typescale.body-medium.line-height",
    "md.comp.snackbar.supporting-text.size": "md.sys.typescale.body-medium.size",
    "md.comp.snackbar.supporting-text.tracking": "md.sys.typescale.body-medium.tracking",
    "md.comp.snackbar.supporting-text.weight": "md.sys.typescale.body-medium.weight",
};

export const snackbarHoveredLabelText: Record<string, string | number> = {
    "md.comp.snackbar.action.hover.label-text.color": "md.sys.color.inverse-primary",
};

export const snackbarHoveredStateLayer: Record<string, string | number> = {
    "md.comp.snackbar.action.hover.state-layer.color": "md.sys.color.inverse-primary",
    "md.comp.snackbar.action.hover.state-layer.opacity": "md.sys.state.hover.state-layer-opacity",
    "md.comp.snackbar.icon.hover.state-layer.color": "md.sys.color.inverse-on-surface",
    "md.comp.snackbar.icon.hover.state-layer.opacity": "md.sys.state.hover.state-layer-opacity",
};

export const snackbarHoveredIcon: Record<string, string | number> = {
    "md.comp.snackbar.icon.hover.icon.color": "md.sys.color.inverse-on-surface",
};

export const snackbarFocusedLabelText: Record<string, string | number> = {
    "md.comp.snackbar.action.focus.label-text.color": "md.sys.color.inverse-primary",
};

export const snackbarFocusedStateLayer: Record<string, string | number> = {
    "md.comp.snackbar.action.focus.state-layer.color": "md.sys.color.inverse-primary",
    "md.comp.snackbar.action.focus.state-layer.opacity": "md.sys.state.focus.state-layer-opacity",
    "md.comp.snackbar.icon.focus.state-layer.color": "md.sys.color.inverse-on-surface",
    "md.comp.snackbar.icon.focus.state-layer.opacity": "md.sys.state.focus.state-layer-opacity",
};

export const snackbarFocusedIcon: Record<string, string | number> = {
    "md.comp.snackbar.icon.focus.icon.color": "md.sys.color.inverse-on-surface",
};

export const snackbarPressedLabelText: Record<string, string | number> = {
    "md.comp.snackbar.action.pressed.label-text.color": "md.sys.color.inverse-primary",
};

export const snackbarPressedStateLayer: Record<string, string | number> = {
    "md.comp.snackbar.action.pressed.state-layer.color": "md.sys.color.inverse-primary",
    "md.comp.snackbar.action.pressed.state-layer.opacity": "md.sys.state.pressed.state-layer-opacity",
    "md.comp.snackbar.icon.pressed.state-layer.color": "md.sys.color.inverse-on-surface",
    "md.comp.snackbar.icon.pressed.state-layer.opacity": "md.sys.state.pressed.state-layer-opacity",
};

export const snackbarPressedIcon: Record<string, string | number> = {
    "md.comp.snackbar.icon.pressed.icon.color": "md.sys.color.inverse-on-surface",
};

export const snackbarTokens: Record<string, string | number> = Object.assign(
    {},
    snackbarEnabledContainer,
    snackbarEnabledLabelText,
    snackbarEnabledIcon,
    snackbarEnabledSupportingText,
    snackbarHoveredLabelText,
    snackbarHoveredStateLayer,
    snackbarHoveredIcon,
    snackbarFocusedLabelText,
    snackbarFocusedStateLayer,
    snackbarFocusedIcon,
    snackbarPressedLabelText,
    snackbarPressedStateLayer,
    snackbarPressedIcon,
);

