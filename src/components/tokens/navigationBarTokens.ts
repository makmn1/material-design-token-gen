export const navigationBarCommonColorEnabled: Record<string, string | number> = {
    "md.comp.nav-bar.container.elevation": "md.sys.elevation.level2",
    "md.comp.nav-bar.container.shadow-color": "md.sys.color.shadow",
    "md.comp.nav-bar.container.color": "md.sys.color.surface-container",
    "md.comp.nav-bar.item.active.indicator.color": "md.sys.color.secondary-container",
    "md.comp.nav-bar.item.active.label-text.color": "md.sys.color.secondary",
    "md.comp.nav-bar.item.inactive.label-text.color": "md.sys.color.on-surface-variant",
    "md.comp.nav-bar.item.active.icon.color": "md.sys.color.on-secondary-container",
    "md.comp.nav-bar.item.inactive.icon.color": "md.sys.color.on-surface-variant",
};

export const navigationBarCommonColorHovered: Record<string, string | number> = {
    "md.comp.nav-bar.item.active.hovered.state-layer.color": "md.sys.color.on-secondary-container",
    "md.comp.nav-bar.item.active.hovered.state-layer.opacity":
        "md.sys.state.hover.state-layer-opacity",
    "md.comp.nav-bar.item.inactive.hovered.state-layer.color": "md.sys.color.on-secondary-container",
};

export const navigationBarCommonColorFocused: Record<string, string | number> = {
    "md.comp.nav-bar.item.active.focused.state-layer.color": "md.sys.color.on-secondary-container",
    "md.comp.nav-bar.item.active.focused.state-layer.opacity":
        "md.sys.state.focus.state-layer-opacity",
    "md.comp.nav-bar.item.inactive.focused.state-layer.color": "md.sys.color.on-secondary-container",
};

export const navigationBarCommonColorPressed: Record<string, string | number> = {
    "md.comp.nav-bar.item.active.pressed.state-layer.color": "md.sys.color.on-secondary-container",
    "md.comp.nav-bar.item.active.pressed.state-layer.opacity":
        "md.sys.state.pressed.state-layer-opacity",
    "md.comp.nav-bar.item.inactive.pressed.state-layer.color":
        "md.sys.color.on-secondary-container",
};

export const navigationBarCommonNavItem: Record<string, string | number> = {
    "md.comp.nav-bar.item.between-space": 0,
    "md.comp.nav-bar.item.active-indicator.shape": "md.sys.shape.corner.full",
    "md.comp.nav-bar.item.active-indicator.icon-label-space": "4dp",
    "md.comp.nav-bar.item.icon.size": "24dp",
};

export const navigationBarCommonContainer: Record<string, string | number> = {
    "md.comp.nav-bar.container.height": "64dp",
    "md.comp.nav-bar.container.shape": "md.sys.shape.corner.none",
};

export const navigationBarItemVertical: Record<string, string | number> = {
    "md.comp.nav-bar.item.vertical.label-text.font": "md.sys.typescale.label-medium.font",
    "md.comp.nav-bar.item.vertical.label-text.line-height":
        "md.sys.typescale.label-medium.line-height",
    "md.comp.nav-bar.item.vertical.label-text.size": "md.sys.typescale.label-medium.size",
    "md.comp.nav-bar.item.vertical.label-text.tracking": "md.sys.typescale.label-medium.tracking",
    "md.comp.nav-bar.item.vertical.label-text.weight": "md.sys.typescale.label-medium.weight",
    "md.comp.nav-bar.item.vertical.active-indicator.height": "32dp",
    "md.comp.nav-bar.item.vertical.active-indicator.width": "56dp",
    "md.comp.nav-bar.item.vertical.container.between-space": "6dp",
    "md.comp.nav-bar.item.vertical.active-indicator.icon-label-space": "4dp",
};

export const navigationBarItemHorizontal: Record<string, string | number> = {
    "md.comp.nav-bar.item.horizontal.label-text.font": "md.sys.typescale.label-medium.font",
    "md.comp.nav-bar.item.horizontal.label-text.line-height":
        "md.sys.typescale.label-medium.line-height",
    "md.comp.nav-bar.item.horizontal.label-text.size": "md.sys.typescale.label-medium.size",
    "md.comp.nav-bar.item.horizontal.label-text.tracking":
        "md.sys.typescale.label-medium.tracking",
    "md.comp.nav-bar.item.horizontal.label-text.weight": "md.sys.typescale.label-medium.weight",
    "md.comp.nav-bar.item.horizontal.active-indicator.height": "40dp",
    "md.comp.nav-bar.item.horizontal.active-indicator.leading-space": "16dp",
    "md.comp.nav-bar.item.horizontal.active-indicator.trailing-space": "16dp",
    "md.comp.nav-bar.item.horizontal.active-indicator.icon-label-space": "4dp",
};

export const navigationBarTokens: Record<string, string | number> = Object.assign(
    {},
    navigationBarCommonColorEnabled,
    navigationBarCommonColorHovered,
    navigationBarCommonColorFocused,
    navigationBarCommonColorPressed,
    navigationBarCommonNavItem,
    navigationBarCommonContainer,
    navigationBarItemVertical,
    navigationBarItemHorizontal,
);

