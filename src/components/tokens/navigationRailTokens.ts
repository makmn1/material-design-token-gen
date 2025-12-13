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

    // The tokens for the leading space seem out of date, possibly for the old 80 dp container width size.
    // However, for the new 96 dp Expressive collapsed rail, the leading and trailing space naturally computes to 20 dp.
    // This should be the same in expanded mode too (since they were the same in the 80 dp version).
    // We won't change the original tokens, but we'll introduce these alternatives for users who want to use the Expressive rail sizing.
    // Note we also add convenience tokens here so users can adjust the spacing for labels separately if they want
    // to squeeze in more text by lowering the label spacing independently
    "sm.comp.nav.rail.item.vertical.leading.space": "20dp",
    "sm.comp.nav.rail.item.vertical.trailing.space": "20dp",
    "sm.comp.nav.rail.item.vertical.leading.label.space": "20dp",
    "sm.comp.nav.rail.item.vertical.trailing.label.space": "20dp",
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

    // The tokens for the leading space seem out of date, possibly for the old 80 dp container width size.
    // However, for the new 96 dp Expressive collapsed rail, the leading and trailing space naturally computes to 20 dp.
    // This should be the same in expanded mode too (since they were the same in the 80 dp version).
    // We won't change the original tokens, but we'll introduce these alternatives for users who want to use the Expressive rail sizing
    "sm.comp.nav.rail.item.horizontal.full.width.leading.space": "20dp",
    "sm.comp.nav.rail.item.horizontal.full.width.trailing.space": "20dp",
};

export const navigationRailItemSectionHeader: Record<string, string | number> = {
    // Not from the token table, but it's clearly shown in the measurements section
    // Source: https://m3.material.io/components/navigation-rail/specs#5d3c368a-111d-4476-aa38-212838676b6f
    "sm.comp.nav.rail.expanded.nav.rail.section.header.top.space": "12dp",
    "sm.comp.nav.rail.expanded.nav.rail.section.header.bottom.space": "8dp",

    // Not from the token table but here for convenience if users want to customize the section header styles
    "sm.comp.nav.rail.item.horizontal.section.header.text.font":
        "md.sys.typescale.label-medium.font",
    "sm.comp.nav.rail.item.horizontal.section.header.text.line.height":
        "md.sys.typescale.label-medium.line-height",
    "sm.comp.nav.rail.item.horizontal.section.header.text.size":
        "md.sys.typescale.label-medium.size",
    "sm.comp.nav.rail.item.horizontal.section.header.text.tracking":
        "md.sys.typescale.label-medium.tracking",
    "sm.comp.nav.rail.item.horizontal.section.header.text.weight":
        "md.sys.typescale.label-medium.weight",
};

export const navigationRailDefaults: Record<string, string | number> = {
    // The vertical spacing between miscellaneous items in a navigation rail container (e.g., menu toggle, FAB)
    "sm.comp.nav.rail.container.vertical.space": "16dp"
}

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
    navigationRailItemSectionHeader,
    navigationRailDefaults,
);

