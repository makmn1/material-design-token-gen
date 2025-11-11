export const searchEnabledAvatar: Record<string, string | number> = {
    "md.comp.search.avatar.shape": "md.sys.shape.corner.full",
    "md.comp.search.avatar.size": "30dp",
};

export const searchEnabledContainer: Record<string, string | number> = {
    "md.comp.search.container.color": "md.sys.color.surface-container-high",
    "md.comp.search.container.elevation": "md.sys.elevation.level3",
    "md.comp.search.container.shape": "md.sys.shape.corner.full",
    "md.comp.search.container.height": "56dp",
};

export const searchEnabledLeadingIcon: Record<string, string | number> = {
    "md.comp.search.leading.icon.color": "md.sys.color.on-surface",
};

export const searchEnabledTrailingIcon: Record<string, string | number> = {
    "md.comp.search.trailing.icon.color": "md.sys.color.on-surface-variant",
};

export const searchEnabledSupportingText: Record<string, string | number> = {
    "md.comp.search.supporting.text.color": "md.sys.color.on-surface-variant",
    "md.comp.search.supporting.text.font": "md.sys.typescale.body-large.font",
    "md.comp.search.supporting.text.line.height": "md.sys.typescale.body-large.line-height",
    "md.comp.search.supporting.text.size": "md.sys.typescale.body-large.size",
    "md.comp.search.supporting.text.weight": "md.sys.typescale.body-large.weight",
    "md.comp.search.supporting.text.tracking": "md.sys.typescale.body-large.tracking",
};

export const searchEnabledInputText: Record<string, string | number> = {
    "md.comp.search.input.text.color": "md.sys.color.on-surface",
    "md.comp.search.input.text.font": "md.sys.typescale.body-large.font",
    "md.comp.search.input.text.line.height": "md.sys.typescale.body-large.line-height",
    "md.comp.search.input.text.size": "md.sys.typescale.body-large.size",
    "md.comp.search.input.text.weight": "md.sys.typescale.body-large.weight",
    "md.comp.search.input.text.tracking": "md.sys.typescale.body-large.tracking",
};

export const searchHoveredStateLayer: Record<string, string | number> = {
    "md.comp.search.hover.state.layer.color": "md.sys.color.on-surface",
    "md.comp.search.hover.state.layer.opacity": "md.sys.state.hover.state-layer-opacity",
};

export const searchHoveredSupportingText: Record<string, string | number> = {
    "md.comp.search.hover.supporting.text.color": "md.sys.color.on-surface-variant",
};

export const searchPressedStateLayer: Record<string, string | number> = {
    "md.comp.search.pressed.state.layer.color": "md.sys.color.on-surface",
    "md.comp.search.pressed.state.layer.opacity": "md.sys.state.pressed.state-layer-opacity",
};

export const searchPressedSupportingText: Record<string, string | number> = {
    "md.comp.search.pressed.supporting.text.color": "md.sys.color.on-surface-variant",
};

export const searchFocusedIndicator: Record<string, string | number> = {
    "md.comp.search.focus.indicator.color": "md.sys.color.secondary",
    "md.comp.search.focus.indicator.thickness": "md.sys.state.focus-indicator.thickness",
    "md.comp.search.focus.indicator.offset": "md.sys.state.focus-indicator.outer-offset",
};

export const searchTokens: Record<string, string | number> = Object.assign(
    {},
    searchEnabledAvatar,
    searchEnabledContainer,
    searchEnabledLeadingIcon,
    searchEnabledTrailingIcon,
    searchEnabledSupportingText,
    searchEnabledInputText,
    searchHoveredStateLayer,
    searchHoveredSupportingText,
    searchPressedStateLayer,
    searchPressedSupportingText,
    searchFocusedIndicator,
);

