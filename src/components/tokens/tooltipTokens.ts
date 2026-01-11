export const tooltipPlainEnabledContainer: Record<string, string | number> = {
    "md.comp.plain-tooltip.container.color": "md.sys.color.inverse-surface",
    "md.comp.plain-tooltip.container.shape": "md.sys.shape.corner.extra-small",
};

export const tooltipPlainEnabledSupportingText: Record<string, string | number> = {
    "md.comp.plain-tooltip.supporting-text.font": "md.sys.typescale.body-small.font",
    "md.comp.plain-tooltip.supporting-text.line-height": "md.sys.typescale.body-small.line-height",
    "md.comp.plain-tooltip.supporting-text.size": "md.sys.typescale.body-small.size",
    "md.comp.plain-tooltip.supporting-text.weight": "md.sys.typescale.body-small.weight",
    "md.comp.plain-tooltip.supporting-text.tracking": "md.sys.typescale.body-small.tracking",
    "md.comp.plain-tooltip.supporting-text.type": "md.sys.typescale.body-small",
    "md.comp.plain-tooltip.supporting-text.color": "md.sys.color.inverse-on-surface",
};

export const tooltipRichEnabledContainer: Record<string, string | number> = {
    "md.comp.rich-tooltip.container.color": "md.sys.color.surface-container",
    "md.comp.rich-tooltip.container.elevation": "md.sys.elevation.level2",
    "md.comp.rich-tooltip.container.shadow-color": "md.sys.color.shadow",
    "md.comp.rich-tooltip.container.shape": "md.sys.shape.corner.medium",
};

export const tooltipRichEnabledLabelText: Record<string, string | number> = {
    "md.comp.rich-tooltip.action.label-text.font": "md.sys.typescale.label-large.font",
    "md.comp.rich-tooltip.action.label-text.line-height": "md.sys.typescale.label-large.line-height",
    "md.comp.rich-tooltip.action.label-text.size": "md.sys.typescale.label-large.size",
    "md.comp.rich-tooltip.action.label-text.weight": "md.sys.typescale.label-large.weight",
    "md.comp.rich-tooltip.action.label-text.tracking": "md.sys.typescale.label-large.tracking",
    "md.comp.rich-tooltip.action.label-text.type": "md.sys.typescale.label-large",
    "md.comp.rich-tooltip.action.label-text.color": "md.sys.color.primary",
};

export const tooltipRichEnabledSubhead: Record<string, string | number> = {
    "md.comp.rich-tooltip.subhead.font": "md.sys.typescale.title-small.font",
    "md.comp.rich-tooltip.subhead.line-height": "md.sys.typescale.title-small.line-height",
    "md.comp.rich-tooltip.subhead.size": "md.sys.typescale.title-small.size",
    "md.comp.rich-tooltip.subhead.weight": "md.sys.typescale.title-small.weight",
    "md.comp.rich-tooltip.subhead.tracking": "md.sys.typescale.title-small.tracking",
    "md.comp.rich-tooltip.subhead.type": "md.sys.typescale.title-small",
    "md.comp.rich-tooltip.subhead.color": "md.sys.color.on-surface-variant",
};

export const tooltipRichEnabledSupportingText: Record<string, string | number> = {
    "md.comp.rich-tooltip.supporting-text.font": "md.sys.typescale.body-medium.font",
    "md.comp.rich-tooltip.supporting-text.line-height": "md.sys.typescale.body-medium.line-height",
    "md.comp.rich-tooltip.supporting-text.size": "md.sys.typescale.body-medium.size",
    "md.comp.rich-tooltip.supporting-text.weight": "md.sys.typescale.body-medium.weight",
    "md.comp.rich-tooltip.supporting-text.tracking": "md.sys.typescale.body-medium.tracking",
    "md.comp.rich-tooltip.supporting-text.type": "md.sys.typescale.body-medium",
    "md.comp.rich-tooltip.supporting-text.color": "md.sys.color.on-surface-variant",
};

export const tooltipRichHoveredLabelText: Record<string, string | number> = {
    "md.comp.rich-tooltip.action.hover.label-text.color": "md.sys.color.primary",
};

export const tooltipRichHoveredStateLayer: Record<string, string | number> = {
    "md.comp.rich-tooltip.action.hover.state-layer.color": "md.sys.color.primary",
    "md.comp.rich-tooltip.action.hover.state-layer.opacity": "md.sys.state.hover.state-layer-opacity",
};

export const tooltipRichFocusedLabelText: Record<string, string | number> = {
    "md.comp.rich-tooltip.action.focus.label-text.color": "md.sys.color.primary",
};

export const tooltipRichFocusedStateLayer: Record<string, string | number> = {
    "md.comp.rich-tooltip.action.focus.state-layer.color": "md.sys.color.primary",
    "md.comp.rich-tooltip.action.focus.state-layer.opacity": "md.sys.state.focus.state-layer-opacity",
};

export const tooltipRichPressedLabelText: Record<string, string | number> = {
    "md.comp.rich-tooltip.action.pressed.label-text.color": "md.sys.color.primary",
};

export const tooltipRichPressedStateLayer: Record<string, string | number> = {
    "md.comp.rich-tooltip.action.pressed.state-layer.color": "md.sys.color.primary",
    "md.comp.rich-tooltip.action.pressed.state-layer.opacity": "md.sys.state.pressed.state-layer-opacity",
};

export const tooltipTokens: Record<string, string | number> = Object.assign(
    {},
    tooltipPlainEnabledContainer,
    tooltipPlainEnabledSupportingText,
    tooltipRichEnabledContainer,
    tooltipRichEnabledLabelText,
    tooltipRichEnabledSubhead,
    tooltipRichEnabledSupportingText,
    tooltipRichHoveredLabelText,
    tooltipRichHoveredStateLayer,
    tooltipRichFocusedLabelText,
    tooltipRichFocusedStateLayer,
    tooltipRichPressedLabelText,
    tooltipRichPressedStateLayer,
);

