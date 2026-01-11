export const carouselEnabledOutline: Record<string, string | number> = {
  "md.comp.carousel-item.with-outline.outline.color": "md.sys.color.outline",
  "md.comp.carousel-item.with-outline.outline.width": "1dp",
};

export const carouselEnabledContainer: Record<string, string | number> = {
  "md.comp.carousel-item.container.color": "md.sys.color.surface",
  "md.comp.carousel-item.container.elevation": "md.sys.elevation.level0",
  "md.comp.carousel-item.container.shadow-color": "md.sys.color.shadow",
  "md.comp.carousel-item.container.shape": "md.sys.shape.corner.extra-large",
};

export const carouselHoverContainer: Record<string, string | number> = {
  "md.comp.carousel-item.hover.container.elevation": "md.sys.elevation.level1",
};

export const carouselHoverStateLayer: Record<string, string | number> = {
  "md.comp.carousel-item.hover.state-layer.color": "md.sys.color.on-surface",
  "md.comp.carousel-item.hover.state-layer.opacity": "md.sys.state.hover.state-layer-opacity",
};

export const carouselHoverOutline: Record<string, string | number> = {
  "md.comp.carousel-item.with-outline.hover.outline.color": "md.sys.color.outline",
};

export const carouselFocusFocusIndicator: Record<string, string | number> = {
  "md.comp.carousel-item.focus.indicator.color": "md.sys.color.secondary",
  "md.comp.carousel-item.focus.indicator.thickness": "md.sys.state.focus-indicator.thickness",
  "md.comp.carousel-item.focus.indicator.outline.offset": "md.sys.state.focus-indicator.outer-offset",
};

export const carouselFocusOutline: Record<string, string | number> = {
  "md.comp.carousel-item.with-outline.focus.outline.color": "md.sys.color.on-surface",
};

export const carouselFocusContainer: Record<string, string | number> = {
  "md.comp.carousel-item.focus.container.elevation": "md.sys.elevation.level0",
};

export const carouselFocusStateLayer: Record<string, string | number> = {
  "md.comp.carousel-item.focus.state-layer.color": "md.sys.color.on-surface",
  "md.comp.carousel-item.focus.state-layer.opacity": "md.sys.state.focus.state-layer-opacity",
};

export const carouselPressedOutline: Record<string, string | number> = {
  "md.comp.carousel-item.with-outline.pressed.outline.color": "md.sys.color.outline",
};

export const carouselPressedContainer: Record<string, string | number> = {
  "md.comp.carousel-item.pressed.container.elevation": "md.sys.elevation.level0",
};

export const carouselPressedStateLayer: Record<string, string | number> = {
  "md.comp.carousel-item.pressed.state-layer.color": "md.sys.color.on-surface",
  "md.comp.carousel-item.pressed.state-layer.opacity": "md.sys.state.pressed.state-layer-opacity",
};

export const carouselDisabledContainer: Record<string, string | number> = {
  "md.comp.carousel-item.disabled.container.elevation": "md.sys.elevation.level0",
  "md.comp.carousel-item.disabled.container.opacity": 0.38,
  "md.comp.carousel-item.disabled.container.color": "md.sys.color.surface",
};

export const carouselDisabledOutline: Record<string, string | number> = {
  "md.comp.carousel-item.with-outline.disabled.outline.color": "md.sys.color.outline",
  "md.comp.carousel-item.with-outline.disabled.outline.opacity": 0.12,
};

export const carouselTokens: Record<string, string | number> = Object.assign(
  {},
  carouselEnabledOutline,
  carouselEnabledContainer,
  carouselHoverContainer,
  carouselHoverStateLayer,
  carouselHoverOutline,
  carouselFocusFocusIndicator,
  carouselFocusOutline,
  carouselFocusContainer,
  carouselFocusStateLayer,
  carouselPressedOutline,
  carouselPressedContainer,
  carouselPressedStateLayer,
  carouselDisabledContainer,
  carouselDisabledOutline,
);

