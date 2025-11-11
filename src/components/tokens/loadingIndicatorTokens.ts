export const loadingIndicatorCommonColor: Record<string, string | number> = {
    "md.comp.loading-indicator.active.indicator.color": "md.sys.color.primary",
    "md.comp.loading-indicator.contained.container.color": "md.sys.color.primary-container",
    "md.comp.loading-indicator.contained.active.indicator.color":
        "md.sys.color.on-primary-container",
};

export const loadingIndicatorCommonSize: Record<string, string | number> = {
    "md.comp.loading-indicator.container.width": "38dp",
    "md.comp.loading-indicator.container.height": "48dp",
    "md.comp.loading-indicator.active.indicator.size": "48dp",
};

export const loadingIndicatorCommonShape: Record<string, string | number> = {
    "md.comp.loading-indicator.container.shape": "md.sys.shape.corner.full",
};

export const loadingIndicatorTokens: Record<string, string | number> = Object.assign(
    {},
    loadingIndicatorCommonColor,
    loadingIndicatorCommonSize,
    loadingIndicatorCommonShape,
);

