export const navigationRailItemCommon: Record<string, string | number> = {
    "md.comp.nav.rail.item.icon.size": "24dp",
    "md.comp.nav.rail.item.active.indicator.shape": "md.sys.shape.corner.full",
    "md.comp.nav.rail.item.active.indicator.leading.space": "16dp",
    "md.comp.nav.rail.item.active.indicator.icon.label.space": "8dp",
    "md.comp.nav.rail.item.active.indicator.trailing.space": "16dp",
    "md.comp.nav.rail.item.container.height": "64dp",
    "md.comp.nav.rail.item.short.container.height": "56dp",
    "md.comp.nav.rail.item.container.shape": "md.sys.shape.corner.none",
    "md.comp.nav.rail.item.container.vertical.space": "6dp",
    "md.comp.nav.rail.item.header.space.minimum": "40dp",
};

export const navigationRailColorEnabled: Record<string, string | number> = {
    "md.comp.nav.rail.item.active.indicator.color": "md.sys.color.secondary-container",
    "md.comp.nav.rail.item.active.label.text.color": "md.sys.color.secondary",
    "md.comp.nav.rail.item.inactive.label.text.color": "md.sys.color.on-surface-variant",
    "md.comp.nav.rail.item.active.icon.color": "md.sys.color.on-secondary-container",
    "md.comp.nav.rail.item.inactive.icon.color": "md.sys.color.on-surface-variant",
};

export const navigationRailColorHovered: Record<string, string | number> = {
    "md.comp.nav.rail.item.active.hovered.state.layer.color": "md.sys.color.on-secondary-container",
    "md.comp.nav.rail.item.active.hovered.state.layer.opacity":
        "md.sys.state.hover.state-layer-opacity",
    "md.comp.nav.rail.item.inactive.hovered.state.layer.color":
        "md.sys.color.on-secondary-container",
};

export const navigationRailColorFocused: Record<string, string | number> = {
    "md.comp.nav.rail.item.active.focused.state.layer.color": "md.sys.color.on-secondary-container",
    "md.comp.nav.rail.item.active.focused.state.layer.opacity":
        "md.sys.state.focus.state-layer-opacity",
    "md.comp.nav.rail.item.inactive.focused.state.layer.color":
        "md.sys.color.on-secondary-container",
};

export const navigationRailColorPressed: Record<string, string | number> = {
    "md.comp.nav.rail.item.active.pressed.state.layer.color": "md.sys.color.on-secondary-container",
    "md.comp.nav.rail.item.active.pressed.state.layer.opacity":
        "md.sys.state.pressed.state-layer-opacity",
    "md.comp.nav.rail.item.inactive.pressed.state.layer.color":
        "md.sys.color.on-secondary-container",
};

export const navigationRailCollapsed: Record<string, string | number> = {
    "md.comp.nav.rail.collapsed.container.width": "96dp",
    "md.comp.nav.rail.collapsed.narrow.container.width": "80dp",
    "md.comp.nav.rail.collapsed.container.elevation": "md.sys.elevation.level0",
    "md.comp.nav.rail.collapsed.container.shape": "md.sys.shape.corner.none",
    "md.comp.nav.rail.collapsed.container.color": "md.sys.color.surface",
    "md.comp.nav.rail.collapsed.item.vertical.space": "4dp",
    "md.comp.nav.rail.collapsed.item.top.space": "44dp",
};

export const navigationRailExpanded: Record<string, string | number> = {
    "md.comp.nav.rail.expanded.container.width.minimum": "220dp",
    "md.comp.nav.rail.expanded.container.width.maximum": "360dp",
    "md.comp.nav.rail.expanded.top.space": "44dp",
    "md.comp.nav.rail.expanded.container.elevation": "md.sys.elevation.level0",
    "md.comp.nav.rail.expanded.modal.container.elevation": "md.sys.elevation.level2",
    "md.comp.nav.rail.expanded.container.color": "md.sys.color.surface",
    "md.comp.nav.rail.expanded.modal.container.color": "md.sys.color.surface-container",
    "md.comp.nav.rail.expanded.container.shape": "md.sys.shape.corner.none",
    "md.comp.nav.rail.expanded.modal.container.shape": "md.sys.shape.corner.large",
};

export const navigationRailItemVertical: Record<string, string | number> = {
    "md.comp.nav.rail.item.vertical.active.indicator.height": "32dp",
    "md.comp.nav.rail.item.vertical.active.indicator.width": "56dp",
    "md.comp.nav.rail.item.vertical.label.text.font": "md.sys.typescale.label-medium.font",
    "md.comp.nav.rail.item.vertical.label.text.line.height":
        "md.sys.typescale.label-medium.line-height",
    "md.comp.nav.rail.item.vertical.label.text.size": "md.sys.typescale.label-medium.size",
    "md.comp.nav.rail.item.vertical.label.text.tracking": "md.sys.typescale.label-medium.tracking",
    "md.comp.nav.rail.item.vertical.label.text.weight": "md.sys.typescale.label-medium.weight",
    "md.comp.nav.rail.item.vertical.icon.label.space": "4dp",
    "md.comp.nav.rail.item.vertical.leading.space": "16dp",
    "md.comp.nav.rail.item.vertical.trailing.space": "16dp",
};

export const navigationRailItemHorizontal: Record<string, string | number> = {
    "md.comp.nav.rail.item.horizontal.label.text.font": "md.sys.typescale.label-medium.font",
    "md.comp.nav.rail.item.horizontal.label.text.line.height":
        "md.sys.typescale.label-medium.line-height",
    "md.comp.nav.rail.item.horizontal.label.text.size": "md.sys.typescale.label-medium.size",
    "md.comp.nav.rail.item.horizontal.label.text.tracking":
        "md.sys.typescale.label-medium.tracking",
    "md.comp.nav.rail.item.horizontal.label.text.weight": "md.sys.typescale.label-medium.weight",
    "md.comp.nav.rail.item.horizontal.active.indicator.height": "56dp",
    "md.comp.nav.rail.item.horizontal.full.width.leading.space": "16dp",
    "md.comp.nav.rail.item.horizontal.full.width.trailing.space": "16dp",
    "md.comp.nav.rail.item.horizontal.icon.label.space": "8dp",
};

export const navigationRailTokens: Record<string, string | number> = Object.assign(
    {},
    navigationRailItemCommon,
    navigationRailColorEnabled,
    navigationRailColorHovered,
    navigationRailColorFocused,
    navigationRailColorPressed,
    navigationRailCollapsed,
    navigationRailExpanded,
    navigationRailItemVertical,
    navigationRailItemHorizontal,
);

