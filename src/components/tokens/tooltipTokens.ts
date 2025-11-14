export const tooltipPlainEnabledContainer: Record<string, string | number> = {
    "md.comp.tooltip.plain.container.color": "md.sys.color.inverse-surface",
    "md.comp.tooltip.plain.container.shape": "md.sys.shape.corner.extra-small",
    "md.comp.tooltip.plain.container.width": "200dp",
};

export const tooltipPlainEnabledSupportingText: Record<string, string | number> = {
    "md.comp.tooltip.plain.supporting.text.font": "md.sys.typescale.body-small.font",
    "md.comp.tooltip.plain.supporting.text.line.height": "md.sys.typescale.body-small.line-height",
    "md.comp.tooltip.plain.supporting.text.size": "md.sys.typescale.body-small.size",
    "md.comp.tooltip.plain.supporting.text.weight": "md.sys.typescale.body-small.weight",
    "md.comp.tooltip.plain.supporting.text.tracking": "md.sys.typescale.body-small.tracking",
    "md.comp.tooltip.plain.supporting.text.color": "md.sys.color.inverse-on-surface",
};

export const tooltipRichEnabledContainer: Record<string, string | number> = {
    "md.comp.tooltip.rich.container.color": "md.sys.color.surface-container",
    "md.comp.tooltip.rich.container.elevation": "md.sys.elevation.level2",
    "md.comp.tooltip.rich.container.shadow.color": "md.sys.color.shadow",
    "md.comp.tooltip.rich.container.shape": "md.sys.shape.corner.medium",
    "md.comp.tooltip.rich.container.width": "320dp",
};

export const tooltipRichEnabledLabelText: Record<string, string | number> = {
    "md.comp.tooltip.rich.action.label.text.font": "md.sys.typescale.label-large.font",
    "md.comp.tooltip.rich.action.label.text.line.height": "md.sys.typescale.label-large.line-height",
    "md.comp.tooltip.rich.action.label.text.size": "md.sys.typescale.label-large.size",
    "md.comp.tooltip.rich.action.label.text.weight": "md.sys.typescale.label-large.weight",
    "md.comp.tooltip.rich.action.label.text.tracking": "md.sys.typescale.label-large.tracking",
    "md.comp.tooltip.rich.action.label.text.color": "md.sys.color.primary",
};

export const tooltipRichEnabledSubhead: Record<string, string | number> = {
    "md.comp.tooltip.rich.subhead.font": "md.sys.typescale.title-small.font",
    "md.comp.tooltip.rich.subhead.line.height": "md.sys.typescale.title-small.line-height",
    "md.comp.tooltip.rich.subhead.size": "md.sys.typescale.title-small.size",
    "md.comp.tooltip.rich.subhead.weight": "md.sys.typescale.title-small.weight",
    "md.comp.tooltip.rich.subhead.tracking": "md.sys.typescale.title-small.tracking",
    "md.comp.tooltip.rich.subhead.color": "md.sys.color.on-surface-variant",
};

export const tooltipRichEnabledSupportingText: Record<string, string | number> = {
    "md.comp.tooltip.rich.supporting.text.font": "md.sys.typescale.body-medium.font",
    "md.comp.tooltip.rich.supporting.text.line.height": "md.sys.typescale.body-medium.line-height",
    "md.comp.tooltip.rich.supporting.text.size": "md.sys.typescale.body-medium.size",
    "md.comp.tooltip.rich.supporting.text.weight": "md.sys.typescale.body-medium.weight",
    "md.comp.tooltip.rich.supporting.text.tracking": "md.sys.typescale.body-medium.tracking",
    "md.comp.tooltip.rich.supporting.text.color": "md.sys.color.on-surface-variant",
};

export const tooltipRichHoveredLabelText: Record<string, string | number> = {
    "md.comp.tooltip.rich.action.hover.label.text.color": "md.sys.color.primary",
};

export const tooltipRichHoveredStateLayer: Record<string, string | number> = {
    "md.comp.tooltip.rich.action.hover.state.layer.color": "md.sys.color.primary",
    "md.comp.tooltip.rich.action.hover.state.layer.opacity": "md.sys.state.hover.state-layer-opacity",
};

export const tooltipRichFocusedLabelText: Record<string, string | number> = {
    "md.comp.tooltip.rich.action.focus.label.text.color": "md.sys.color.primary",
};

export const tooltipRichFocusedStateLayer: Record<string, string | number> = {
    "md.comp.tooltip.rich.action.focus.state.layer.color": "md.sys.color.primary",
    "md.comp.tooltip.rich.action.focus.state.layer.opacity": "md.sys.state.focus.state-layer-opacity",
};

export const tooltipRichPressedLabelText: Record<string, string | number> = {
    "md.comp.tooltip.rich.action.pressed.label.text.color": "md.sys.color.primary",
};

export const tooltipRichPressedStateLayer: Record<string, string | number> = {
    "md.comp.tooltip.rich.action.pressed.state.layer.opacity": "md.sys.state.pressed.state-layer-opacity",
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

