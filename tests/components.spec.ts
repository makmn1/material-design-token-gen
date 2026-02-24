import { describe, it, expect } from "vitest";
import {generateComponentTokens} from "../src/components/components";

const ALL_COMPONENTS = [
    "button",
    "app-bar",
    "badge",
    "button-group",
    "fab",
    "extended-fab",
    "fab-menu",
    "icon-button",
    "split-button",
    "card",
    "carousel",
    "checkbox",
    "chip",
    "date-picker",
    "time-picker",
    "dialog",
    "divider",
    "list",
    "loading-indicator",
    "progress-indicator",
    "menu",
    "navigation-bar",
    "navigation-rail",
    "radio-button",
    "search",
    "bottom-sheet",
    "side-sheet",
    "slider",
    "snackbar",
    "switch",
    "tabs",
    "text-field",
    "toolbar",
    "tooltip",
] as const;

type ComponentName = typeof ALL_COMPONENTS[number];

interface ComponentTestData {
    name: ComponentName;
    key: string;
    sampleTokens: Array<{ key: string; expected: string | number }>;
}

const COMPONENT_TEST_DATA: ComponentTestData[] = [
    {
        name: "button",
        key: "button",
        sampleTokens: [
            { key: "md.comp.button.container.color", expected: "md.sys.color.primary" },
            { key: "md.comp.button.disabled.container.color", expected: "md.sys.color.on-surface" },
            { key: "md.comp.button.hovered.state-layer.color", expected: "md.sys.color.on-primary" },
            { key: "md.comp.button.focused.state-layer.color", expected: "md.sys.color.on-primary" },
            { key: "md.comp.button.pressed.state-layer.color", expected: "md.sys.color.on-primary" },
            { key: "md.comp.button.filled.container.color", expected: "md.sys.color.primary" },
            { key: "md.comp.button.filled.disabled.container.color", expected: "md.sys.color.on-surface" },
            { key: "md.comp.button.elevated.container.color", expected: "md.sys.color.surface-container-low" },
            { key: "md.comp.button.elevated.hovered.state-layer.color", expected: "md.sys.color.primary" },
            { key: "md.comp.button.tonal.container.color", expected: "md.sys.color.secondary-container" },
            { key: "md.comp.button.tonal.hovered.state-layer.color", expected: "md.sys.color.on-secondary-container" },
            { key: "md.comp.button.outlined.outline.color", expected: "md.sys.color.outline-variant" },
            { key: "md.comp.button.outlined.hovered.state-layer.color", expected: "md.sys.color.on-surface-variant" },
            { key: "md.comp.button.text.label-text.color", expected: "md.sys.color.primary" },
            { key: "md.comp.button.text.disabled.container.color", expected: "md.sys.color.on-surface" },
            { key: "md.comp.button.xsmall.container.height", expected: "2rem" },
            { key: "md.comp.button.small.container.height", expected: "2.5rem" },
            { key: "md.comp.button.medium.container.height", expected: "3.5rem" },
            { key: "md.comp.button.large.container.height", expected: "6rem" },
            { key: "md.comp.button.xlarge.container.height", expected: "8.5rem" },
        ],
    },
    {
        name: "app-bar",
        key: "app-bar",
        sampleTokens: [
            { key: "md.comp.app-bar.container.color", expected: "md.sys.color.surface" },
            { key: "md.comp.app-bar.container.elevation", expected: "md.sys.elevation.level0" },
            { key: "md.comp.app-bar.on-scroll.container.elevation", expected: "md.sys.elevation.level2" },
            { key: "md.comp.app-bar.title.color", expected: "md.sys.color.on-surface" },
            { key: "md.comp.app-bar.icon-button-space", expected: 0 },
            { key: "md.comp.app-bar.leading-space", expected: "0.25rem" },
            { key: "md.comp.app-bar.container.shape", expected: "md.sys.shape.corner.none" },
            { key: "md.comp.app-bar.avatar.size", expected: "2rem" },
            { key: "md.comp.app-bar.small.container.height", expected: "4rem" },
            { key: "md.comp.app-bar.small.title.font", expected: "md.sys.typescale.title-large.font" },
            { key: "md.comp.app-bar.medium-flexible.container.height", expected: "7rem" },
            { key: "md.comp.app-bar.medium-flexible.title.size", expected: "md.sys.typescale.headline-medium.size" },
            { key: "md.comp.app-bar.large-flexible.container.height", expected: "7.5rem" },
            { key: "md.comp.app-bar.large-flexible.title.font", expected: "md.sys.typescale.display-small.font" },
            { key: "md.comp.app-bar.search.container.color", expected: "md.sys.color.surface-container" },
            { key: "md.comp.app-bar.small.search.container.height", expected: "3.5rem" },
        ],
    },
    {
        name: "badge",
        key: "badge",
        sampleTokens: [
            { key: "md.comp.badge.color", expected: "md.sys.color.error" },
            { key: "md.comp.badge.shape", expected: "md.sys.shape.corner.full" },
            { key: "md.comp.badge.size", expected: "0.375rem" },
            { key: "md.comp.badge.large.color", expected: "md.sys.color.error" },
            { key: "md.comp.badge.large.shape", expected: "md.sys.shape.corner.full" },
            { key: "md.comp.badge.large.size", expected: "1rem" },
            { key: "md.comp.badge.large.label-text.color", expected: "md.sys.color.on-error" },
            { key: "md.comp.badge.large.label-text.type", expected: "md.sys.typescale.label-small" },
            { key: "md.comp.badge.large.label-text.font", expected: "md.sys.typescale.label-small.font" },
            { key: "md.comp.badge.large.label-text.line-height", expected: "md.sys.typescale.label-small.line-height" },
            { key: "md.comp.badge.large.label-text.size", expected: "md.sys.typescale.label-small.size" },
            { key: "md.comp.badge.large.label-text.tracking", expected: "md.sys.typescale.label-small.tracking" },
            { key: "md.comp.badge.large.label-text.weight", expected: "md.sys.typescale.label-small.weight" },
        ],
    },
    {
        name: "button-group",
        key: "button-group",
        sampleTokens: [
            { key: "md.comp.button-group.standard.xsmall.container.height", expected: "2rem" },
            { key: "md.comp.button-group.standard.xsmall.between-space", expected: "1.125rem" },
            { key: "md.comp.button-group.standard.xsmall.pressed.item.width.motion.spring.dampening", expected: "md.sys.motion.spring.fast.spatial.damping" },
            { key: "md.comp.button-group.standard.xsmall.pressed.item.width.multiplier", expected: "15%" },
            { key: "md.comp.button-group.standard.small.container.height", expected: "2.5rem" },
            { key: "md.comp.button-group.standard.medium.container.height", expected: "3.5rem" },
            { key: "md.comp.button-group.standard.large.container.height", expected: "6rem" },
            { key: "md.comp.button-group.standard.xlarge.container.height", expected: "8.5rem" },
            { key: "md.comp.button-group.connected.xsmall.container.height", expected: "2rem" },
            { key: "md.comp.button-group.connected.xsmall.between-space", expected: "0.125rem" },
            { key: "md.comp.button-group.connected.xsmall.container.shape", expected: "md.sys.shape.corner.full" },
            { key: "md.comp.button-group.connected.xsmall.inner-corner.corner-size", expected: "md.sys.shape.corner-value.small" },
            { key: "md.comp.button-group.connected.xsmall.pressed.inner-corner.corner-size", expected: "md.sys.shape.corner-value.extra-small" },
            { key: "md.comp.button-group.connected.xsmall.selected.inner-corner.corner-size", expected: "9999rem" },
            { key: "md.comp.button-group.connected.large.inner-corner.corner-size", expected: "md.sys.shape.corner-value.large" },
            { key: "md.comp.button-group.connected.xlarge.inner-corner.corner-size", expected: "md.sys.shape.corner-value.large-increased" },
        ],
    },
    {
        name: "fab",
        key: "fab",
        sampleTokens: [
            { key: "md.comp.fab.container.height", expected: "3.5rem" },
            { key: "md.comp.fab.container.width", expected: "3.5rem" },
            { key: "md.comp.fab.icon.size", expected: "1.5rem" },
            { key: "md.comp.fab.container.shape", expected: "md.sys.shape.corner.large" },
            { key: "md.comp.fab.medium.container.height", expected: "5rem" },
            { key: "md.comp.fab.large.container.height", expected: "6rem" },
            { key: "md.comp.fab.primary-container.container.color", expected: "md.sys.color.primary-container" },
            { key: "md.comp.fab.primary-container.container.elevation", expected: "md.sys.elevation.level3" },
            { key: "md.comp.fab.primary-container.focused.state-layer.opacity", expected: "md.sys.state.focus.state-layer-opacity" },
            { key: "md.comp.fab.secondary-container.pressed.state-layer.opacity", expected: "md.sys.state.pressed.state-layer-opacity" },
            { key: "md.comp.fab.primary.container.color", expected: "md.sys.color.primary" },
            { key: "md.comp.fab.primary.focused.container.elevation", expected: "md.sys.elevation.level3" },
            { key: "md.comp.fab.secondary.hovered.container.elevation", expected: "md.sys.elevation.level4" },
            { key: "md.comp.fab.tertiary.pressed.container.elevation", expected: "md.sys.elevation.level3" },
            { key: "sm.comp.fab.primary.focus-ring.indicator.color", expected: "md.sys.color.primary" },
            { key: "sm.comp.fab.secondary.focus-ring.indicator.thickness", expected: "md.sys.state.focus-indicator.thickness" },
            { key: "sm.comp.fab.primary.focus-ring.outline.offset", expected: "md.sys.state.focus-indicator.outer-offset" },
        ],
    },
    {
        name: "extended-fab",
        key: "extended-fab",
        sampleTokens: [
            { key: "md.comp.extended-fab.small.container.height", expected: "3.5rem" },
            { key: "md.comp.extended-fab.small.label-text.font", expected: "md.sys.typescale.body-large.font" },
            { key: "md.comp.extended-fab.small.icon.size", expected: "1.5rem" },
            { key: "md.comp.extended-fab.small.container.shape", expected: "md.sys.shape.corner.large" },
            { key: "md.comp.extended-fab.medium.container.height", expected: "5rem" },
            { key: "md.comp.extended-fab.large.container.height", expected: "6rem" },
            { key: "md.comp.extended-fab.primary-container.container.color", expected: "md.sys.color.primary-container" },
            { key: "md.comp.extended-fab.primary-container.container.elevation", expected: "md.sys.elevation.level3" },
            { key: "md.comp.extended-fab.primary-container.hovered.container.elevation", expected: "md.sys.elevation.level4" },
            { key: "md.comp.extended-fab.primary-container.focused.state-layer.opacity", expected: "md.sys.state.focus.state-layer-opacity" },
            { key: "md.comp.extended-fab.secondary-container.pressed.state-layer.opacity", expected: "md.sys.state.pressed.state-layer-opacity" },
            { key: "md.comp.extended-fab.primary.container.color", expected: "md.sys.color.primary" },
            { key: "md.comp.extended-fab.primary.hovered.container.elevation", expected: "md.sys.elevation.level4" },
            { key: "md.comp.extended-fab.secondary.focused.container.elevation", expected: "md.sys.elevation.level3" },
            { key: "md.comp.extended-fab.tertiary.pressed.container.elevation", expected: "md.sys.elevation.level3" },
            { key: "sm.comp.extended-fab.primary.focus-ring.indicator.color", expected: "md.sys.color.primary" },
            { key: "sm.comp.extended-fab.secondary.focus-ring.indicator.thickness", expected: "md.sys.state.focus-indicator.thickness" },
            { key: "sm.comp.extended-fab.primary.focus-ring.outline.offset", expected: "md.sys.state.focus-indicator.outer-offset" },
        ],
    },
    {
        name: "fab-menu",
        key: "fab-menu",
        sampleTokens: [
            { key: "md.comp.fab-menu.close-button.container.height", expected: "3.5rem" },
            { key: "md.comp.fab-menu.close-button.container.width", expected: "3.5rem" },
            { key: "md.comp.fab-menu.close-button.icon.size", expected: "1.25rem" },
            { key: "md.comp.fab-menu.close-button.container.shape", expected: "md.sys.shape.corner.full" },
            { key: "md.comp.fab-menu.menu-item.container.height", expected: "3.5rem" },
            { key: "md.comp.fab-menu.menu-item.label-text.font", expected: "md.sys.typescale.body-large.font" },
            { key: "md.comp.fab-menu.menu-item.icon.size", expected: "1.5rem" },
            { key: "md.comp.fab-menu.primary.close-button.container.color", expected: "md.sys.color.primary" },
            { key: "md.comp.fab-menu.primary.close-button.hovered.container.elevation", expected: "md.sys.elevation.level4" },
            { key: "md.comp.fab-menu.primary.close-button.focused.state-layer.opacity", expected: "md.sys.state.focus.state-layer-opacity" },
            { key: "md.comp.fab-menu.secondary.close-button.pressed.icon.color", expected: "md.sys.color.on-secondary" },
            { key: "md.comp.fab-menu.primary-container.list-item.container.color", expected: "md.sys.color.primary-container" },
            { key: "md.comp.fab-menu.primary-container.list-item.hovered.container.elevation", expected: "md.sys.elevation.level4" },
            { key: "md.comp.fab-menu.secondary-container.list-item.focused.container.elevation", expected: "md.sys.elevation.level3" },
            { key: "md.comp.fab-menu.tertiary-container.list-item.pressed.label-text.color", expected: "md.sys.color.on-tertiary-container" },
            { key: "sm.comp.fab-menu.primary.list-item.focus-ring.indicator.color", expected: "md.sys.color.primary" },
            { key: "sm.comp.fab-menu.secondary.list-item.focus-ring.indicator.thickness", expected: "md.sys.state.focus-indicator.thickness" },
            { key: "sm.comp.fab-menu.primary.close-button.focus-ring.indicator.color", expected: "md.sys.color.primary" },
            { key: "sm.comp.fab-menu.secondary.close-button.focus-ring.outline.offset", expected: "md.sys.state.focus-indicator.outer-offset" },
        ],
    },
    {
        name: "icon-button",
        key: "icon-button",
        sampleTokens: [
            { key: "md.comp.icon-button.container.height", expected: "2.5rem" },
            { key: "md.comp.icon-button.icon.size", expected: "1.5rem" },
            { key: "md.comp.icon-button.container.color", expected: "md.sys.color.primary" },
            { key: "md.comp.icon-button.unselected.container.color", expected: "md.sys.color.surface-container" },
            { key: "md.comp.icon-button.disabled.container.opacity", expected: 0.1 },
            { key: "md.comp.icon-button.disabled.icon.opacity", expected: 0.38 },
            { key: "md.comp.icon-button.hovered.state-layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.icon-button.filled.container.color", expected: "md.sys.color.primary" },
            { key: "md.comp.icon-button.tonal.selected.container.color", expected: "md.sys.color.secondary" },
            { key: "md.comp.icon-button.outlined.selected.container.color", expected: "md.sys.color.inverse-surface" },
            { key: "md.comp.icon-button.xsmall.container.height", expected: "2rem" },
            { key: "md.comp.icon-button.small.outlined.outline.width", expected: "0.0625rem" },
            { key: "md.comp.icon-button.medium.container.shape.square", expected: "md.sys.shape.corner.large" },
            { key: "md.comp.icon-button.large.icon.size", expected: "2rem" },
            { key: "md.comp.icon-button.xlarge.outlined.outline.width", expected: "0.1875rem" },
        ],
    },
    {
        name: "split-button",
        key: "split-button",
        sampleTokens: [
            { key: "md.comp.split-button.xsmall.container.height", expected: "2rem" },
            { key: "md.comp.split-button.xsmall.between-space", expected: "0.125rem" },
            { key: "md.comp.split-button.xsmall.container.shape", expected: "md.sys.shape.corner.full" },
            { key: "md.comp.split-button.xsmall.inner-corner.corner-size", expected: "md.sys.shape.corner-value.extra-small" },
            { key: "md.comp.split-button.xsmall.outer-corner.corner-size", expected: "9999rem" },
            { key: "md.comp.split-button.small.container.height", expected: "2.5rem" },
            { key: "md.comp.split-button.small.leading-button.leading-space", expected: "1rem" },
            { key: "md.comp.split-button.small.trailing-button.icon.size", expected: "1.375rem" },
            { key: "md.comp.split-button.medium.container.height", expected: "3.5rem" },
            { key: "md.comp.split-button.medium.leading-button.trailing-space", expected: "1.5rem" },
            { key: "md.comp.split-button.medium.trailing-button.leading-space", expected: "0.9375rem" },
            { key: "md.comp.split-button.large.container.height", expected: "6rem" },
            { key: "md.comp.split-button.large.trailing-button.icon.size", expected: "2.375rem" },
            { key: "md.comp.split-button.large.inner-corner.hovered.corner-size", expected: "md.sys.shape.corner-value.large-increased" },
            { key: "md.comp.split-button.xlarge.container.height", expected: "8.5rem" },
            { key: "md.comp.split-button.xlarge.trailing-button.inner-corner.selected.corner-size", expected: "9999rem" },
        ],
    },
    {
        name: "card",
        key: "card",
        sampleTokens: [
            { key: "md.comp.elevated-card.container.color", expected: "md.sys.color.surface-container-low" },
            { key: "md.comp.elevated-card.container.elevation", expected: "md.sys.elevation.level1" },
            { key: "md.comp.elevated-card.icon.size", expected: "1.5rem" },
            { key: "md.comp.elevated-card.disabled.container.opacity", expected: 0.38 },
            { key: "md.comp.elevated-card.hover.container.elevation", expected: "md.sys.elevation.level2" },
            { key: "md.comp.elevated-card.hover.state-layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.elevated-card.focus.indicator.color", expected: "md.sys.color.secondary" },
            { key: "md.comp.elevated-card.pressed.state-layer.opacity", expected: "md.sys.state.pressed.state-layer-opacity" },
            { key: "md.comp.elevated-card.dragged.container.elevation", expected: "md.sys.elevation.level4" },
            { key: "md.comp.filled-card.container.color", expected: "md.sys.color.surface-container-highest" },
            { key: "md.comp.filled-card.container.elevation", expected: "md.sys.elevation.level0" },
            { key: "md.comp.filled-card.disabled.container.color", expected: "md.sys.color.surface-variant" },
            { key: "md.comp.filled-card.focus.indicator.thickness", expected: "md.sys.state.focus-indicator.thickness" },
            { key: "md.comp.outlined-card.container.color", expected: "md.sys.color.surface" },
            { key: "md.comp.outlined-card.outline.width", expected: "0.0625rem" },
            { key: "md.comp.outlined-card.outline.color", expected: "md.sys.color.outline-variant" },
            { key: "md.comp.outlined-card.disabled.outline.opacity", expected: 0.12 },
            { key: "md.comp.outlined-card.hover.outline.color", expected: "md.sys.color.outline-variant" },
            { key: "md.comp.outlined-card.focus.outline.color", expected: "md.sys.color.on-surface" },
            { key: "md.comp.outlined-card.dragged.outline.color", expected: "md.sys.color.outline-variant" },
        ],
    },
    {
        name: "carousel",
        key: "carousel",
        sampleTokens: [
            { key: "md.comp.carousel-item.with-outline.outline.color", expected: "md.sys.color.outline" },
            { key: "md.comp.carousel-item.with-outline.outline.width", expected: "0.0625rem" },
            { key: "md.comp.carousel-item.container.color", expected: "md.sys.color.surface" },
            { key: "md.comp.carousel-item.container.elevation", expected: "md.sys.elevation.level0" },
            { key: "md.comp.carousel-item.container.shape", expected: "md.sys.shape.corner.extra-large" },
            { key: "md.comp.carousel-item.hover.container.elevation", expected: "md.sys.elevation.level1" },
            { key: "md.comp.carousel-item.hover.state-layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.carousel-item.focus.indicator.color", expected: "md.sys.color.secondary" },
            { key: "md.comp.carousel-item.focus.indicator.outline.offset", expected: "md.sys.state.focus-indicator.outer-offset" },
            { key: "md.comp.carousel-item.with-outline.focus.outline.color", expected: "md.sys.color.on-surface" },
            { key: "md.comp.carousel-item.pressed.state-layer.opacity", expected: "md.sys.state.pressed.state-layer-opacity" },
            { key: "md.comp.carousel-item.disabled.container.opacity", expected: 0.38 },
            { key: "md.comp.carousel-item.with-outline.disabled.outline.opacity", expected: 0.12 },
            { key: "sm.comp.carousel.main-axis.leading-space", expected: 0 },
            { key: "sm.comp.carousel.main-axis.trailing-space", expected: 0 },
            { key: "sm.comp.carousel.cross-axis.leading-space", expected: 0 },
            { key: "sm.comp.carousel.cross-axis.trailing-space", expected: 0 },
            { key: "sm.comp.carousel.container.cursor", expected: "pointer" },
            { key: "sm.carousel.masked-fraction", expected: 0 },
            { key: "sm.carousel.masked-percentage", expected: "0%" },
            { key: "sm.carousel.mask-start-fraction", expected: 0 },
            { key: "sm.carousel.mask-start-percentage", expected: "0%" },
        ],
    },
    {
        name: "checkbox",
        key: "checkbox",
        sampleTokens: [
            { key: "md.comp.checkbox.container.size", expected: "1.125rem" },
            { key: "md.comp.checkbox.container.shape", expected: "0.125rem" },
            { key: "md.comp.checkbox.unselected.outline.color", expected: "md.sys.color.on-surface-variant" },
            { key: "md.comp.checkbox.unselected.outline.width", expected: "0.125rem" },
            { key: "md.comp.checkbox.selected.container.color", expected: "md.sys.color.primary" },
            { key: "md.comp.checkbox.selected.outline.width", expected: 0 },
            { key: "md.comp.checkbox.selected.icon.color", expected: "md.sys.color.on-primary" },
            { key: "md.comp.checkbox.state-layer.size", expected: "2.5rem" },
            { key: "md.comp.checkbox.unselected.disabled.container.opacity", expected: 0.38 },
            { key: "md.comp.checkbox.selected.disabled.container.opacity", expected: 0.38 },
            { key: "md.comp.checkbox.selected.hover.state-layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.checkbox.error.hover.state-layer.color", expected: "md.sys.color.error" },
            { key: "md.comp.checkbox.focus.indicator.color", expected: "md.sys.color.secondary" },
            { key: "md.comp.checkbox.focus.indicator.thickness", expected: "md.sys.state.focus-indicator.thickness" },
            { key: "md.comp.checkbox.selected.focus.container.color", expected: "md.sys.color.primary" },
            { key: "md.comp.checkbox.unselected.focus.state-layer.opacity", expected: "md.sys.state.focus.state-layer-opacity" },
            { key: "md.comp.checkbox.unselected.pressed.state-layer.color", expected: "md.sys.color.primary" },
            { key: "md.comp.checkbox.selected.pressed.state-layer.opacity", expected: "md.sys.state.pressed.state-layer-opacity" },
            { key: "md.comp.checkbox.error.pressed.state-layer.color", expected: "md.sys.color.error" },
        ],
    },
    {
        name: "chip",
        key: "chip",
        sampleTokens: [
            { key: "md.comp.assist-chip.container.height", expected: "2rem" },
            { key: "md.comp.assist-chip.elevated.container.shadow-color", expected: "md.sys.color.shadow" },
            { key: "md.comp.assist-chip.hover.state-layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.assist-chip.focus.indicator.outline.offset", expected: "md.sys.state.focus-indicator.outer-offset" },
            { key: "md.comp.assist-chip.pressed.state-layer.opacity", expected: "md.sys.state.pressed.state-layer-opacity" },
            { key: "md.comp.assist-chip.dragged.state-layer.opacity", expected: "md.sys.state.dragged.state-layer-opacity" },
            { key: "md.comp.filter-chip.container.height", expected: "2rem" },
            { key: "md.comp.filter-chip.flat.unselected.outline.width", expected: "0.0625rem" },
            { key: "md.comp.filter-chip.flat.selected.outline.width", expected: 0 },
            { key: "md.comp.filter-chip.elevated.container.shadow-color", expected: "md.sys.color.shadow" },
            { key: "md.comp.filter-chip.selected.hover.state-layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.filter-chip.selected.dragged.state-layer.opacity", expected: "md.sys.state.dragged.state-layer-opacity" },
            { key: "md.comp.input-chip.with-avatar.avatar.size", expected: "1.5rem" },
            { key: "md.comp.input-chip.with-trailing-icon.trailing-icon.size", expected: "1.125rem" },
            { key: "md.comp.input-chip.with-trailing-icon.selected.hover.trailing-icon.color", expected: "md.sys.color.on-secondary-container" },
            { key: "md.comp.input-chip.with-trailing-icon.unselected.pressed.trailing-icon.color", expected: "md.sys.color.on-surface-variant" },
            { key: "md.comp.input-chip.with-trailing-icon.disabled.trailing-icon.opacity", expected: 0.38 },
            { key: "md.comp.suggestion-chip.container.height", expected: "2rem" },
            { key: "md.comp.suggestion-chip.with-leading-icon.hover.leading-icon.color", expected: "md.sys.color.primary" },
            { key: "md.comp.suggestion-chip.pressed.state-layer.opacity", expected: "md.sys.state.pressed.state-layer-opacity" },
            { key: "md.comp.suggestion-chip.dragged.state-layer.opacity", expected: "md.sys.state.dragged.state-layer-opacity" },
        ],
    },
    {
        name: "date-picker",
        key: "date-picker",
        sampleTokens: [
            { key: "md.comp.date-picker.docked.container.color", expected: "md.sys.color.surface-container-high" },
            { key: "md.comp.date-picker.docked.container.width", expected: "22.5rem" },
            { key: "md.comp.date-picker.docked.menu-button.label-text.color", expected: "md.sys.color.on-surface-variant" },
            { key: "md.comp.date-picker.docked.date.unselected.outside-month.label-text.opacity", expected: 0.38 },
            { key: "md.comp.date-picker.docked.menu-button.icon.size", expected: "1.125rem" },
            { key: "md.comp.date-picker.docked.date.hover.state-layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.date-picker.docked.menu.list-item.selected.pressed.leading-icon.color", expected: "md.sys.color.on-surface-variant" },
            { key: "md.comp.date-picker.modal.container.height", expected: "32.75rem" },
            { key: "md.comp.date-picker.modal.range-selection.active-indicator.container.color", expected: "md.sys.color.secondary-container" },
            { key: "md.comp.date-picker.modal.range-selection.month.subhead.font", expected: "md.sys.typescale.title-small.font" },
            { key: "md.comp.date-picker.modal.range-selection.date.in-range.hover.state-layer.color", expected: "md.sys.color.on-primary-container" },
            { key: "md.comp.date-picker.modal.year-selection.year.hover.state-layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.date-input.modal.container.width", expected: "20.5rem" },
            { key: "md.comp.date-input.modal.header.headline.font", expected: "md.sys.typescale.headline-large.font" },
            { key: "md.comp.date-input.modal.header.supporting-text.tracking", expected: "md.sys.typescale.label-large.tracking" },
        ],
    },
    {
        name: "time-picker",
        key: "time-picker",
        sampleTokens: [
            { key: "md.comp.time-picker.container.color", expected: "md.sys.color.surface-container-high" },
            { key: "md.comp.time-picker.clock-dial.container.size", expected: "16rem" },
            { key: "md.comp.time-picker.time-selector.24h-vertical.container.width", expected: "7.125rem" },
            { key: "md.comp.time-picker.period-selector.outline.width", expected: "0.0625rem" },
            { key: "md.comp.time-picker.clock-dial.selector.track.container.width", expected: "0.125rem" },
            { key: "md.comp.time-picker.period-selector.hover.state-layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.time-picker.period-selector.focus.state-layer.opacity", expected: "md.sys.state.focus.state-layer-opacity" },
            { key: "md.comp.time-picker.period-selector.pressed.state-layer.opacity", expected: "md.sys.state.pressed.state-layer-opacity" },
            { key: "md.comp.time-picker.period-selector.unselected.pressed.label-text.color", expected: "md.sys.color.on-surface-variant" },
            { key: "md.comp.time-input.container.shape", expected: "md.sys.shape.corner.extra-large" },
            { key: "md.comp.time-input.time-input-field.container.width", expected: "6rem" },
            { key: "md.comp.time-input.period-selector.container.height", expected: "4.5rem" },
            { key: "md.comp.time-input.focus.indicator.outline.offset", expected: "md.sys.state.focus-indicator.outer-offset" },
            { key: "md.comp.time-input.time-input-field.focus.outline.width", expected: "0.125rem" },
            { key: "md.comp.time-input.period-selector.pressed.state-layer.opacity", expected: "md.sys.state.pressed.state-layer-opacity" },
        ],
    },
    {
        name: "dialog",
        key: "dialog",
        sampleTokens: [
            { key: "md.comp.dialog.container.color", expected: "md.sys.color.surface-container-high" },
            { key: "md.comp.dialog.headline.font", expected: "md.sys.typescale.headline-small.font" },
            { key: "md.comp.dialog.supporting-text.weight", expected: "md.sys.typescale.body-medium.weight" },
            { key: "md.comp.dialog.action.hover.state-layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.dialog.action.focus.state-layer.opacity", expected: "md.sys.state.focus.state-layer-opacity" },
            { key: "md.comp.dialog.action.pressed.state-layer.opacity", expected: "md.sys.state.pressed.state-layer-opacity" },
            { key: "md.comp.full-screen-dialog.container.shape", expected: "md.sys.shape.corner.none" },
            { key: "md.comp.full-screen-dialog.header.container.height", expected: "3.5rem" },
            { key: "md.comp.full-screen-dialog.header.action.label-text.font", expected: "md.sys.typescale.label-large.font" },
            { key: "md.comp.full-screen-dialog.header.headline.tracking", expected: "md.sys.typescale.title-large.tracking" },
            { key: "md.comp.full-screen-dialog.header.action.hover.state-layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.full-screen-dialog.header.action.focus.state-layer.opacity", expected: "md.sys.state.focus.state-layer-opacity" },
            { key: "md.comp.full-screen-dialog.header.action.pressed.state-layer.opacity", expected: "md.sys.state.pressed.state-layer-opacity" },
        ],
    },
    {
        name: "divider",
        key: "divider",
        sampleTokens: [
            { key: "md.comp.divider.thickness", expected: "0.0625rem" },
            { key: "md.comp.divider.color", expected: "md.sys.color.outline-variant" },
        ],
    },
    {
        name: "list",
        key: "list",
        sampleTokens: [
            { key: "md.comp.list.list-item.container.color", expected: "md.sys.color.surface" },
            { key: "md.comp.list.list-item.selected.container.color", expected: "md.sys.color.secondary-container" },
            { key: "md.comp.list.list-item.three-line.container.height", expected: "5.5rem" },
            { key: "md.comp.list.list-item.one-line.container.height", expected: "3.5rem" },
            { key: "md.comp.list.list-item.leading-space", expected: "1rem" },
            { key: "md.comp.list.list-item.trailing-space", expected: "1rem" },
            { key: "md.comp.list.list-item.leading-video.width", expected: "6.25rem" },
            { key: "md.comp.list.list-item.small.leading-video.height", expected: "3.5rem" },
            { key: "md.comp.list.list-item.large.leading-video.height", expected: "4rem" },
            { key: "md.comp.list.list-item.leading-icon.size", expected: "1.5rem" },
            { key: "md.comp.list.list-item.trailing-icon.color", expected: "md.sys.color.on-surface-variant" },
            { key: "md.comp.list.list-item.unselected.trailing-icon.color", expected: "md.sys.color.on-surface" },
            { key: "md.comp.list.divider.leading-space", expected: "1rem" },
            { key: "md.comp.list.list-item.leading-avatar.size", expected: "2.5rem" },
            { key: "md.comp.list.list-item.leading-image.width", expected: "3.5rem" },
            { key: "md.comp.list.list-item.trailing-supporting-text.font", expected: "md.sys.typescale.label-small.font" },
            { key: "md.comp.list.list-item.disabled.label-text.opacity", expected: 0.38 },
            { key: "md.comp.list.list-item.disabled.state-layer.opacity", expected: 0.1 },
            { key: "md.comp.list.list-item.hover.leading-icon.icon.color", expected: "md.sys.color.on-surface-variant" },
            { key: "md.comp.list.list-item.selected.hover.state-layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.list.focus.indicator.thickness", expected: "md.sys.state.focus-indicator.thickness" },
            { key: "md.comp.list.list-item.pressed.state-layer.opacity", expected: "md.sys.state.pressed.state-layer-opacity" },
            { key: "md.comp.list.list-item.dragged.container.elevation", expected: "md.sys.elevation.level4" },
            { key: "md.comp.list.list-item.dragged.state-layer.opacity", expected: "md.sys.state.dragged.state-layer-opacity" },
        ],
    },
    {
        name: "loading-indicator",
        key: "loading-indicator",
        sampleTokens: [
            { key: "md.comp.loading-indicator.active-indicator.color", expected: "md.sys.color.primary" },
            { key: "md.comp.loading-indicator.contained.container.color", expected: "md.sys.color.primary-container" },
            { key: "md.comp.loading-indicator.contained.active-indicator.color", expected: "md.sys.color.on-primary-container" },
            { key: "md.comp.loading-indicator.active-indicator.size", expected: "2.375rem" },
            { key: "md.comp.loading-indicator.container.height", expected: "3rem" },
            { key: "md.comp.loading-indicator.container.width", expected: "3rem" },
            { key: "md.comp.loading-indicator.container.shape", expected: "md.sys.shape.corner.full" },
        ],
    },
    {
        name: "progress-indicator",
        key: "progress-indicator",
        sampleTokens: [
            { key: "md.comp.progress-indicator.active-indicator.color", expected: "md.sys.color.primary" },
            { key: "md.comp.progress-indicator.track.color", expected: "md.sys.color.secondary-container" },
            { key: "md.comp.progress-indicator.stop-indicator.shape", expected: "md.sys.shape.corner.full" },
            { key: "md.comp.progress-indicator.linear.height", expected: "0.25rem" },
            { key: "md.comp.progress-indicator.linear.with-wave.height", expected: "0.625rem" },
            { key: "md.comp.progress-indicator.linear.stop-indicator.trailing-space", expected: 0 },
            { key: "md.comp.progress-indicator.linear.active-indicator.wave.amplitude", expected: "0.1875rem" },
            { key: "md.comp.progress-indicator.circular.size", expected: "2.5rem" },
            { key: "md.comp.progress-indicator.circular.active-indicator.wave.amplitude", expected: "0.1rem" },
        ],
    },
    {
        name: "menu",
        key: "menu",
        sampleTokens: [
            { key: "md.comp.menu.container.color", expected: "md.sys.color.surface-container" },
            { key: "md.comp.menu.container.elevation", expected: "md.sys.elevation.level2" },
            { key: "md.comp.menu.container.shape", expected: "md.sys.shape.corner.extra-small" },
            { key: "md.comp.menu.container.shadow-color", expected: "md.sys.color.shadow" },
            { key: "md.comp.menus.menu-item.focus.indicator.color", expected: "md.sys.color.secondary" },
            { key: "md.comp.menus.menu-item.focus.indicator.thickness", expected: "md.sys.state.focus-indicator.thickness" },
            { key: "md.comp.menus.menu-item.focus.indicator.outline.offset", expected: "md.sys.state.focus-indicator.inner-offset" },
            { key: "md.comp.menus.menu-item.label-text.font", expected: "md.sys.typescale.label-large.font" },
            { key: "md.comp.menus.container.shape", expected: "md.sys.shape.corner.large" },
            { key: "md.comp.menus.menu-item.height", expected: "2.75rem" },
            { key: "md.comp.menus.standard.menu-item.label-text.color", expected: "md.sys.color.on-surface" },
            { key: "md.comp.menus.standard.menu-item.selected.container.color", expected: "md.sys.color.tertiary-container" },
            { key: "md.comp.menus.vibrant.menu-item.label-text.color", expected: "md.sys.color.on-tertiary-container" },
        ],
    },
    {
        name: "navigation-bar",
        key: "navigation-bar",
        sampleTokens: [
            { key: "md.comp.nav-bar.container.elevation", expected: "md.sys.elevation.level2" },
            { key: "md.comp.nav-bar.container.color", expected: "md.sys.color.surface-container" },
            { key: "md.comp.nav-bar.item.active.label-text.color", expected: "md.sys.color.secondary" },
            { key: "md.comp.nav-bar.item.inactive.label-text.color", expected: "md.sys.color.on-surface-variant" },
            { key: "md.comp.nav-bar.item.active.hovered.state-layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.nav-bar.item.active-indicator.icon-label-space", expected: "0.25rem" },
            { key: "md.comp.nav-bar.item.icon.size", expected: "1.5rem" },
            { key: "md.comp.nav-bar.item.between-space", expected: 0 },
            { key: "md.comp.nav-bar.container.height", expected: "4rem" },
            { key: "md.comp.nav-bar.item.vertical.active-indicator.height", expected: "2rem" },
            { key: "md.comp.nav-bar.item.vertical.active-indicator.width", expected: "3.5rem" },
            { key: "md.comp.nav-bar.item.vertical.container.between-space", expected: "0.375rem" },
            { key: "md.comp.nav-bar.item.horizontal.active-indicator.height", expected: "2.5rem" },
            { key: "md.comp.nav-bar.item.horizontal.active-indicator.leading-space", expected: "1rem" },
            { key: "md.comp.nav-bar.item.horizontal.active-indicator.icon-label-space", expected: "0.25rem" },
        ],
    },
    {
        name: "navigation-rail",
        key: "navigation-rail",
        sampleTokens: [
            { key: "md.comp.nav-rail.item.icon.size", expected: "1.5rem" },
            { key: "md.comp.nav-rail.item.active-indicator.shape", expected: "md.sys.shape.corner.full" },
            { key: "md.comp.nav-rail.item.active-indicator.leading-space", expected: "1rem" },
            { key: "md.comp.nav-rail.item.active-indicator.icon-label-space", expected: "0.5rem" },
            { key: "md.comp.nav-rail.item.container.height", expected: "4rem" },
            { key: "md.comp.nav-rail.item.short.container.height", expected: "3.5rem" },
            { key: "md.comp.nav-rail.item.container.vertical-space", expected: "0.375rem" },
            { key: "md.comp.nav-rail.item.header-space-minimum", expected: "2.5rem" },
            { key: "md.comp.nav-rail.item.active.indicator.color", expected: "md.sys.color.secondary-container" },
            { key: "md.comp.nav-rail.item.active.hovered.state-layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.nav-rail.collapsed.container.width", expected: "6rem" },
            { key: "md.comp.nav-rail.collapsed.narrow.container.width", expected: "5rem" },
            { key: "md.comp.nav-rail.collapsed.container.elevation", expected: "md.sys.elevation.level0" },
            { key: "md.comp.nav-rail.collapsed.item.vertical-space", expected: "0.25rem" },
            { key: "md.comp.nav-rail.collapsed.top-space", expected: "2.75rem" },
            { key: "md.comp.nav-rail.expanded.container.width.minimum", expected: "13.75rem" },
            { key: "md.comp.nav-rail.expanded.container.width.maximum", expected: "22.5rem" },
            { key: "md.comp.nav-rail.expanded.modal.container.shape", expected: "md.sys.shape.corner.large" },
            { key: "md.comp.nav-rail.item.vertical.active-indicator.height", expected: "2rem" },
            { key: "md.comp.nav-rail.item.vertical.active-indicator.width", expected: "3.5rem" },
            { key: "md.comp.nav-rail.item.vertical.icon-label-space", expected: "0.25rem" },
            { key: "md.comp.nav-rail.item.horizontal.active-indicator.height", expected: "3.5rem" },
            { key: "md.comp.nav-rail.item.horizontal.full-width.leading-space", expected: "1rem" },
            { key: "md.comp.nav-rail.item.horizontal.icon-label-space", expected: "0.5rem" },
            { key: "sm.comp.nav.rail.item.vertical.leading.space", expected: "1.25rem" },
            { key: "sm.comp.nav.rail.item.vertical.trailing.space", expected: "1.25rem" },
            { key: "sm.comp.nav.rail.item.horizontal.full.width.leading.space", expected: "1.25rem" },
            { key: "sm.comp.nav.rail.expanded.nav.rail.section.header.top.space", expected: "0.75rem" },
            { key: "sm.comp.nav.rail.item.horizontal.section-header-text.font", expected: "md.sys.typescale.label-medium.font" },
            { key: "sm.comp.nav.rail.container.vertical.space", expected: "1rem" },
        ],
    },
    {
        name: "radio-button",
        key: "radio-button",
        sampleTokens: [
            { key: "md.comp.radio-button.selected.icon.color", expected: "md.sys.color.primary" },
            { key: "md.comp.radio-button.unselected.icon.color", expected: "md.sys.color.on-surface-variant" },
            { key: "md.comp.radio-button.icon.size", expected: "1.25rem" },
            { key: "md.comp.radio-button.state-layer.size", expected: "2.5rem" },
            { key: "md.comp.radio-button.disabled.selected.icon.color", expected: "md.sys.color.on-surface" },
            { key: "md.comp.radio-button.disabled.selected.icon.opacity", expected: 0.38 },
            { key: "md.comp.radio-button.disabled.unselected.icon.opacity", expected: 0.38 },
            { key: "md.comp.radio-button.selected.hover.state-layer.color", expected: "md.sys.color.primary" },
            { key: "md.comp.radio-button.unselected.hover.state-layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.radio-button.selected.focus.icon.color", expected: "md.sys.color.primary" },
            { key: "md.comp.radio-button.unselected.focus.state-layer.color", expected: "md.sys.color.on-surface" },
            { key: "md.comp.radio-button.selected.pressed.state-layer.color", expected: "md.sys.color.on-surface" },
            { key: "md.comp.radio-button.unselected.pressed.state-layer.opacity", expected: "md.sys.state.pressed.state-layer-opacity" },
        ],
    },
    {
        name: "search",
        key: "search",
        sampleTokens: [
            { key: "md.comp.search-bar.avatar.shape", expected: "md.sys.shape.corner.full" },
            { key: "md.comp.search-bar.avatar.size", expected: "1.875rem" },
            { key: "md.comp.search-bar.container.color", expected: "md.sys.color.surface-container-high" },
            { key: "md.comp.search-bar.container.elevation", expected: "md.sys.elevation.level3" },
            { key: "md.comp.search-bar.container.height", expected: "3.5rem" },
            { key: "md.comp.search-bar.leading-icon.color", expected: "md.sys.color.on-surface" },
            { key: "md.comp.search-bar.trailing-icon.color", expected: "md.sys.color.on-surface-variant" },
            { key: "md.comp.search-bar.supporting-text.font", expected: "md.sys.typescale.body-large.font" },
            { key: "md.comp.search-bar.supporting-text.tracking", expected: "md.sys.typescale.body-large.tracking" },
            { key: "md.comp.search-bar.supporting-text.type", expected: "md.sys.typescale.body-large" },
            { key: "md.comp.search-bar.input-text.font", expected: "md.sys.typescale.body-large.font" },
            { key: "md.comp.search-bar.input-text.type", expected: "md.sys.typescale.body-large" },
            { key: "md.comp.search-bar.hover.state-layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.search-bar.pressed.state-layer.opacity", expected: "md.sys.state.pressed.state-layer-opacity" },
            { key: "md.comp.search-bar.focus.indicator.color", expected: "md.sys.color.secondary" },
            { key: "md.comp.search-bar.focus.indicator.thickness", expected: "md.sys.state.focus-indicator.thickness" },
            { key: "md.comp.search-bar.focus.indicator.outline.offset", expected: "md.sys.state.focus-indicator.outer-offset" },
            { key: "md.comp.search-view.container.color", expected: "md.sys.color.surface-container-high" },
            { key: "md.comp.search-view.full-screen.container.shape", expected: "md.sys.shape.corner.none" },
            { key: "md.comp.search-view.docked.container.shape", expected: "md.sys.shape.corner.extra-large" },
            { key: "md.comp.search-view.container.elevation", expected: "md.sys.elevation.level3" },
            { key: "md.comp.search-view.full-screen.header.container.height", expected: "4.5rem" },
            { key: "md.comp.search-view.docked.header.container.height", expected: "3.5rem" },
            { key: "md.comp.search-view.header.leading-icon.color", expected: "md.sys.color.on-surface" },
            { key: "md.comp.search-view.header.trailing-icon.color", expected: "md.sys.color.on-surface-variant" },
            { key: "md.comp.search-view.divider.color", expected: "md.sys.color.outline" },
            { key: "md.comp.search-view.header.supporting-text.type", expected: "md.sys.typescale.body-large" },
            { key: "md.comp.search-view.header.input-text.type", expected: "md.sys.typescale.body-large" },
        ],
    },
    {
        name: "bottom-sheet",
        key: "bottom-sheet",
        sampleTokens: [
            { key: "md.comp.sheet.bottom.docked.container.color", expected: "md.sys.color.surface-container-low" },
            { key: "md.comp.sheet.bottom.docked.modal.container.elevation", expected: "md.sys.elevation.level1" },
            { key: "md.comp.sheet.bottom.docked.standard.container.elevation", expected: "md.sys.elevation.level1" },
            { key: "md.comp.sheet.bottom.docked.container.shape", expected: "md.sys.shape.corner.extra-large.top" },
            { key: "md.comp.sheet.bottom.docked.minimized.container.shape", expected: "md.sys.shape.corner.none" },
            { key: "md.comp.sheet.bottom.docked.drag-handle.color", expected: "md.sys.color.on-surface-variant" },
            { key: "md.comp.sheet.bottom.docked.drag-handle.width", expected: "2rem" },
            { key: "md.comp.sheet.bottom.docked.drag-handle.height", expected: "0.25rem" },
            { key: "md.comp.sheet.bottom.focus.indicator.color", expected: "md.sys.color.secondary" },
            { key: "md.comp.sheet.bottom.focus.indicator.thickness", expected: "md.sys.state.focus-indicator.thickness" },
            { key: "md.comp.sheet.bottom.focus.indicator.outline.offset", expected: "md.sys.state.focus-indicator.outer-offset" },
        ],
    },
    {
        name: "side-sheet",
        key: "side-sheet",
        sampleTokens: [
            { key: "md.comp.sheet.side.docked.modal.container.color", expected: "md.sys.color.surface-container-low" },
            { key: "md.comp.sheet.side.docked.standard.container.color", expected: "md.sys.color.surface" },
            { key: "md.comp.sheet.side.docked.modal.container.elevation", expected: "md.sys.elevation.level1" },
            { key: "md.comp.sheet.side.docked.standard.container.elevation", expected: "md.sys.elevation.level0" },
            { key: "md.comp.sheet.side.docked.container.height", expected: "100%" },
            { key: "md.comp.sheet.side.docked.container.width", expected: "16rem" },
            { key: "md.comp.sheet.side.docked.modal.container.shape", expected: "md.sys.shape.corner.large.start" },
            { key: "md.comp.sheet.side.docked.headline.font", expected: "md.sys.typescale.title-large.font" },
            { key: "md.comp.sheet.side.docked.headline.tracking", expected: "md.sys.typescale.title-large.tracking" },
            { key: "md.comp.sheet.side.docked.headline.type", expected: "md.sys.typescale.title-large" },
            { key: "md.comp.sheet.side.docked.divider.color", expected: "md.sys.color.outline" },
            { key: "md.comp.sheet.side.docked.action.hover.label-text.color", expected: "md.sys.color.primary" },
            { key: "md.comp.sheet.side.docked.action.hover.state-layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.sheet.side.docked.focus.indicator.thickness", expected: "md.sys.state.focus-indicator.thickness" },
            { key: "md.comp.sheet.side.docked.focus.indicator.outline.offset", expected: "md.sys.state.focus-indicator.outer-offset" },
            { key: "md.comp.sheet.side.docked.action.focus.label-text.color", expected: "md.sys.color.primary" },
            { key: "md.comp.sheet.side.docked.action.focus.state-layer.opacity", expected: "md.sys.state.focus.state-layer-opacity" },
            { key: "md.comp.sheet.side.docked.action.pressed.label-text.color", expected: "md.sys.color.primary" },
            { key: "md.comp.sheet.side.docked.action.pressed.state-layer.opacity", expected: "md.sys.state.pressed.state-layer-opacity" },
        ],
    },
    {
        name: "slider",
        key: "slider",
        sampleTokens: [
            { key: "md.comp.slider.stop-indicator.size", expected: "0.25rem" },
            { key: "md.comp.slider.stop-indicator.color-selected", expected: "md.sys.color.on-primary" },
            { key: "md.comp.slider.active.track.height", expected: "1rem" },
            { key: "md.comp.slider.active.track.inner-corner.corner-size", expected: "0.125rem 0.125rem" },
            { key: "md.comp.slider.active.track.color", expected: "md.sys.color.primary" },
            { key: "md.comp.slider.track.elevation", expected: "md.sys.elevation.level0" },
            { key: "md.comp.slider.handle.height", expected: "2.75rem" },
            { key: "md.comp.slider.handle.elevation", expected: "md.sys.elevation.level1" },
            { key: "md.comp.slider.handle.shadow-color", expected: "md.sys.color.shadow" },
            { key: "md.comp.slider.disabled.active.track.opacity", expected: 0.38 },
            { key: "md.comp.slider.hover.handle.color", expected: "md.sys.color.primary" },
            { key: "md.comp.slider.focus.handle.color", expected: "md.sys.color.primary" },
            { key: "md.comp.slider.focus.handle.width", expected: "0.125rem" },
            { key: "md.comp.slider.value-indicator.label.label-text.font", expected: "md.sys.typescale.label-large.font" },
            { key: "md.comp.slider.xsmall.active.track.shape.leading", expected: "0.5rem" },
            { key: "md.comp.slider.small.active.track.height", expected: "1.5rem" },
            { key: "md.comp.slider.medium.icon.size", expected: "1.5rem" },
            { key: "md.comp.slider.large.inactive.track.height", expected: "3.5rem" },
            { key: "md.comp.slider.large.active.handle.height", expected: "4.25rem" },
            { key: "md.comp.slider.xlarge.icon.size", expected: "2rem" },
        ],
    },
    {
        name: "snackbar",
        key: "snackbar",
        sampleTokens: [
            { key: "md.comp.snackbar.container.color", expected: "md.sys.color.inverse-surface" },
            { key: "md.comp.snackbar.container.shadow-color", expected: "md.sys.color.shadow" },
            { key: "md.comp.snackbar.container.elevation", expected: "md.sys.elevation.level3" },
            { key: "md.comp.snackbar.with-single-line.container.height", expected: "3rem" },
            { key: "md.comp.snackbar.with-two-lines.container.height", expected: "4.25rem" },
            { key: "md.comp.snackbar.action.label-text.type", expected: "md.sys.typescale.label-large" },
            { key: "md.comp.snackbar.action.label-text.font", expected: "md.sys.typescale.label-large.font" },
            { key: "md.comp.snackbar.action.label-text.tracking", expected: "md.sys.typescale.label-large.tracking" },
            { key: "md.comp.snackbar.icon.size", expected: "1.5rem" },
            { key: "md.comp.snackbar.supporting-text.type", expected: "md.sys.typescale.body-medium" },
            { key: "md.comp.snackbar.supporting-text.weight", expected: "md.sys.typescale.body-medium.weight" },
            { key: "md.comp.snackbar.action.hover.state-layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.snackbar.icon.hover.state-layer.color", expected: "md.sys.color.inverse-on-surface" },
            { key: "md.comp.snackbar.action.focus.state-layer.opacity", expected: "md.sys.state.focus.state-layer-opacity" },
            { key: "md.comp.snackbar.icon.focus.state-layer.color", expected: "md.sys.color.inverse-on-surface" },
            { key: "md.comp.snackbar.action.pressed.state-layer.opacity", expected: "md.sys.state.pressed.state-layer-opacity" },
            { key: "md.comp.snackbar.icon.pressed.state-layer.color", expected: "md.sys.color.inverse-on-surface" },
        ],
    },
    {
        name: "switch",
        key: "switch",
        sampleTokens: [
            { key: "md.comp.switch.selected.icon.color", expected: "md.sys.color.on-primary-container" },
            { key: "md.comp.switch.track.height", expected: "2rem" },
            { key: "md.comp.switch.track.width", expected: "3.25rem" },
            { key: "md.comp.switch.track.outline.width", expected: "0.125rem" },
            { key: "md.comp.switch.selected.track.color", expected: "md.sys.color.primary" },
            { key: "md.comp.switch.unselected.handle.height", expected: "1rem" },
            { key: "md.comp.switch.pressed.handle.width", expected: "1.75rem" },
            { key: "md.comp.switch.state-layer.size", expected: "2.5rem" },
            { key: "md.comp.switch.disabled.selected.icon.opacity", expected: 0.38 },
            { key: "md.comp.switch.disabled.track.opacity", expected: 0.12 },
            { key: "md.comp.switch.selected.hover.state-layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.switch.focus.indicator.thickness", expected: "md.sys.state.focus-indicator.thickness" },
            { key: "md.comp.switch.unselected.focus.state-layer.color", expected: "md.sys.color.on-surface" },
            { key: "md.comp.switch.selected.pressed.handle.color", expected: "md.sys.color.primary-container" },
        ],
    },
    {
        name: "tabs",
        key: "tabs",
        sampleTokens: [
            { key: "md.comp.primary-navigation-tab.container.color", expected: "md.sys.color.surface" },
            { key: "md.comp.primary-navigation-tab.container.height", expected: "3rem" },
            { key: "md.comp.primary-navigation-tab.with-icon-and-label-text.container.height", expected: "4rem" },
            { key: "md.comp.primary-navigation-tab.with-label-text.active.label-text.color", expected: "md.sys.color.primary" },
            { key: "md.comp.primary-navigation-tab.with-icon.icon.size", expected: "1.5rem" },
            { key: "md.comp.primary-navigation-tab.active-indicator.height", expected: "0.1875rem" },
            { key: "md.comp.primary-navigation-tab.inactive.hover.state-layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.primary-navigation-tab.focus.indicator.thickness", expected: "md.sys.state.focus-indicator.thickness" },
            { key: "md.comp.primary-navigation-tab.inactive.pressed.state-layer.color", expected: "md.sys.color.primary" },
            { key: "md.comp.secondary-navigation-tab.container.shadow-color", expected: "md.sys.color.shadow" },
            { key: "md.comp.secondary-navigation-tab.active-indicator.height", expected: "0.125rem" },
            { key: "md.comp.secondary-navigation-tab.hover.state-layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.secondary-navigation-tab.focus.indicator.outline.offset", expected: "md.sys.state.focus-indicator.inner-offset" },
            { key: "md.comp.secondary-navigation-tab.pressed.state-layer.opacity", expected: "md.sys.state.pressed.state-layer-opacity" },
            { key: "sm.comp.tabs.primary.padding.between.inline.icon.and.text", expected: "0.125rem" },
            { key: "sm.comp.tabs.secondary.padding.between.inline.icon.and.text", expected: "0.5rem" },
            { key: "sm.comp.tabs.tab.padding.start", expected: "0.75rem" },
            { key: "sm.comp.tabs.active.indicator.minimum.length", expected: "1.5rem" },
            { key: "sm.comp.tabs.primary.navigation.active.indicator.color", expected: "md.sys.color.primary" },
            { key: "sm.comp.tabs.active.indicator.animation.ease.standard", expected: "cubic-bezier(.2, 0, 0, 1)" },
            { key: "sm.comp.tabs.active.indicator.animation.duration", expected: "400ms" },
            { key: "sm.comp.tabs.active.indicator.animation.fade.duration", expected: "150ms" },
            { key: "sm.comp.tabs.primary.navigation.active.indicator.shape", expected: "0.1875rem" },
            { key: "sm.comp.tabs.focus.ring.shape", expected: "md.sys.shape.corner-value.medium" },
            { key: "sm.comp.tabs.focus.ring.active.indicator.spacing", expected: "0.0625rem" },
            { key: "sm.comp.tabs.panel.animation.easing", expected: "cubic-bezier(0.2, 0, 0, 1)" },
            { key: "sm.comp.tabs.panel.animation.duration.milliseconds", expected: 400 },
        ],
    },
    {
        name: "text-field",
        key: "text-field",
        sampleTokens: [
            { key: "md.comp.filled-text-field.container.color", expected: "md.sys.color.surface-container-highest" },
            { key: "md.comp.filled-text-field.container.shape", expected: "md.sys.shape.corner.extra-small.top" },
            { key: "md.comp.filled-text-field.label-text.tracking", expected: "md.sys.typescale.body-large.tracking" },
            { key: "md.comp.filled-text-field.label-text.populated.line-height", expected: "md.sys.typescale.body-small.line-height" },
            { key: "md.comp.filled-text-field.leading-icon.size", expected: "1.5rem" },
            { key: "md.comp.filled-text-field.active-indicator.height", expected: "0.0625rem" },
            { key: "md.comp.filled-text-field.supporting-text.weight", expected: "md.sys.typescale.body-small.weight" },
            { key: "md.comp.filled-text-field.input-text.prefix.color", expected: "md.sys.color.on-surface-variant" },
            { key: "md.comp.filled-text-field.caret.color", expected: "md.sys.color.primary" },
            { key: "md.comp.filled-text-field.disabled.container.opacity", expected: 0.04 },
            { key: "md.comp.filled-text-field.disabled.leading-icon.opacity", expected: 0.38 },
            { key: "md.comp.filled-text-field.hover.state-layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.filled-text-field.focus.active-indicator.height", expected: "0.125rem" },
            { key: "md.comp.filled-text-field.error.supporting-text.color", expected: "md.sys.color.error" },
            { key: "md.comp.filled-text-field.error.focus.caret.color", expected: "md.sys.color.error" },
            { key: "md.comp.filled-text-field.error.hover.state-layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
        ],
    },
    {
        name: "toolbar",
        key: "toolbar",
        sampleTokens: [
            { key: "md.comp.toolbar.standard.container.color", expected: "md.sys.color.surface-container" },
            { key: "md.comp.toolbar.standard.selected.button.container.color", expected: "md.sys.color.secondary-container" },
            { key: "md.comp.toolbar.standard.selected.icon.color", expected: "md.sys.color.on-secondary-container" },
            { key: "md.comp.toolbar.standard.container.shape", expected: "md.sys.shape.corner.full" },
            { key: "md.comp.toolbar.standard.disabled.icon.opacity", expected: 0.38 },
            { key: "md.comp.toolbar.standard.hovered.state-layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.toolbar.standard.selected.focused.state-layer.color", expected: "md.sys.color.on-secondary-container" },
            { key: "md.comp.toolbar.standard.selected.pressed.icon.color", expected: "md.sys.color.on-secondary-container" },
            { key: "md.comp.toolbar.vibrant.container.color", expected: "md.sys.color.primary-container" },
            { key: "md.comp.toolbar.vibrant.selected.icon.color", expected: "md.sys.color.on-surface" },
            { key: "md.comp.toolbar.vibrant.hovered.state-layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.toolbar.vibrant.selected.focused.state-layer.color", expected: "md.sys.color.on-surface" },
            { key: "md.comp.toolbar.vibrant.pressed.state-layer.opacity", expected: "md.sys.state.pressed.state-layer-opacity" },
            { key: "md.comp.toolbar.docked.container.height", expected: "4rem" },
            { key: "md.comp.toolbar.docked.container.max-spacing", expected: "2rem" },
            { key: "md.comp.toolbar.floating.horizontal.container.height", expected: "4rem" },
            { key: "md.comp.toolbar.floating.vertical.container.external-space", expected: "1.5rem" },
            { key: "md.comp.toolbar.floating.container.elevation", expected: "md.sys.elevation.level3" },
            { key: "md.comp.toolbar.floating.fab.standard.container.color", expected: "md.sys.color.secondary-container" },
            { key: "md.comp.toolbar.floating.fab.container.width", expected: "3.5rem" },
            { key: "md.comp.toolbar.floating.fab.medium.container.height", expected: "5rem" },
        ],
    },
    {
        name: "tooltip",
        key: "tooltip",
        sampleTokens: [
            { key: "md.comp.plain-tooltip.container.color", expected: "md.sys.color.inverse-surface" },
            { key: "md.comp.plain-tooltip.container.shape", expected: "md.sys.shape.corner.extra-small" },
            { key: "md.comp.plain-tooltip.supporting-text.font", expected: "md.sys.typescale.body-small.font" },
            { key: "md.comp.plain-tooltip.supporting-text.weight", expected: "md.sys.typescale.body-small.weight" },
            { key: "md.comp.plain-tooltip.supporting-text.color", expected: "md.sys.color.inverse-on-surface" },
            { key: "md.comp.rich-tooltip.container.elevation", expected: "md.sys.elevation.level2" },
            { key: "md.comp.rich-tooltip.container.shadow-color", expected: "md.sys.color.shadow" },
            { key: "md.comp.rich-tooltip.action.label-text.tracking", expected: "md.sys.typescale.label-large.tracking" },
            { key: "md.comp.rich-tooltip.subhead.color", expected: "md.sys.color.on-surface-variant" },
            { key: "md.comp.rich-tooltip.supporting-text.size", expected: "md.sys.typescale.body-medium.size" },
            { key: "md.comp.rich-tooltip.action.hover.state-layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.rich-tooltip.action.focus.state-layer.color", expected: "md.sys.color.primary" },
            { key: "md.comp.rich-tooltip.action.pressed.state-layer.opacity", expected: "md.sys.state.pressed.state-layer-opacity" },
        ],
    },
];

describe("generateComponentTokens()", () => {
    it.each(COMPONENT_TEST_DATA)(
        "loads all $name token groups correctly (representative sample)",
        ({ key: componentKey, sampleTokens }) => {
            const tokens = generateComponentTokens();
            const componentTokens = tokens[componentKey as keyof typeof tokens];

            expect(componentTokens).toBeDefined();

            for (const { key: tokenKey, expected } of sampleTokens) {
                expect(componentTokens[tokenKey]).toBe(expected);
            }
        }
    );

    it.each(COMPONENT_TEST_DATA)(
        "excludes $name tokens when component is in excludes array",
        ({ name, key }) => {
            const tokens = generateComponentTokens({ excludes: [name] });
            expect(tokens).not.toHaveProperty(name);

            // Verify all other components are still present
            const otherComponents = ALL_COMPONENTS.filter((c) => c !== name);
            for (const component of otherComponents) {
                expect(tokens).toHaveProperty(component);
            }
        }
    );

    it("excludes all components when all are in excludes array", () => {
        const tokens = generateComponentTokens({ excludes: [...ALL_COMPONENTS] });
        expect(Object.keys(tokens).length).toBe(0);
        for (const component of ALL_COMPONENTS) {
            expect(tokens).not.toHaveProperty(component);
        }
    });

    it("converts dp to rem when webUnits is true (default)", () => {
        const tokens = generateComponentTokens();

        expect(tokens.button["md.comp.button.container.height"]).toBe("2.5rem");
        expect(tokens.button["md.comp.button.icon.size"]).toBe("1.25rem");
        expect(tokens.button["md.comp.button.leading-space"]).toBe("1.5rem");
        expect(tokens.button["md.comp.button.icon-label-space"]).toBe("0.5rem");
    });

    it("leaves dp strings untouched when webUnits is false", () => {
        const tokens = generateComponentTokens({ webUnits: false });

        expect(tokens.button["md.comp.button.container.height"]).toBe("40dp");
        expect(tokens.button["md.comp.button.icon.size"]).toBe("20dp");
        expect(tokens.button["md.comp.button.leading-space"]).toBe("24dp");
        expect(tokens.button["md.comp.button.icon-label-space"]).toBe(
            "8dp"
        );
    });

    it("respects custom unit option (px)", () => {
        const tokens = generateComponentTokens({
            unit: "px",
            webUnits: true,
        });

        expect(tokens.button["md.comp.button.container.height"]).toBe("40px");
        expect(tokens.button["md.comp.button.icon.size"]).toBe("20px");
        expect(tokens.button["md.comp.button.leading-space"]).toBe("24px");
    });

    it("does not convert non-dp strings", () => {
        const tokens = generateComponentTokens({ webUnits: true });

        expect(tokens.button["md.comp.button.container.color"]).toBe(
            "md.sys.color.primary"
        );
        expect(tokens.button["md.comp.button.container.elevation"]).toBe(
            "md.sys.elevation.level0"
        );
        expect(tokens.button["md.comp.button.label-text"]).toBe(
            "md.sys.typescale.label-large"
        );
    });

    it("keeps numeric opacity values as numbers", () => {
        const tokens = generateComponentTokens({ webUnits: true });

        expect(tokens.button["md.comp.button.disabled.container.opacity"]).toBe(0.1);
        expect(tokens.button["md.comp.button.disabled.label-text.opacity"]).toBe(0.38);
        expect(typeof tokens.button["md.comp.button.disabled.container.opacity"]).toBe("number");
    });

    it("generates all tokens when excludes is omitted or empty", () => {
        const tokens1 = generateComponentTokens();
        const tokens2 = generateComponentTokens({ excludes: [] });

        for (const component of ALL_COMPONENTS) {
            expect(tokens1).toHaveProperty(component);
            expect(tokens2).toHaveProperty(component);
            expect(tokens1[component as keyof typeof tokens1]).toBeDefined();
            expect(Object.keys(tokens1[component as keyof typeof tokens1] as Record<string, unknown>).length).toBeGreaterThan(0);
        }
    });

    it("converts 50% corner tokens to 9999rem when unit is rem (default)", () => {
        const tokens = generateComponentTokens();

        expect(tokens["button-group"]["md.comp.button-group.connected.xsmall.selected.inner-corner.corner-size"]).toBe("9999rem");
        expect(tokens["button-group"]["md.comp.button-group.connected.small.selected.inner-corner.corner-size"]).toBe("9999rem");
        expect(tokens["button-group"]["md.comp.button-group.connected.medium.selected.inner-corner.corner-size"]).toBe("9999rem");
        expect(tokens["button-group"]["md.comp.button-group.connected.large.selected.inner-corner.corner-size"]).toBe("9999rem");
        expect(tokens["button-group"]["md.comp.button-group.connected.xlarge.selected.inner-corner.corner-size"]).toBe("9999rem");

        expect(tokens["split-button"]["md.comp.split-button.xsmall.outer-corner.corner-size"]).toBe("9999rem");
        expect(tokens["split-button"]["md.comp.split-button.xsmall.trailing-button.inner-corner.selected.corner-size"]).toBe("9999rem");
        expect(tokens["split-button"]["md.comp.split-button.small.trailing-button.inner-corner.selected.corner-size"]).toBe("9999rem");
        expect(tokens["split-button"]["md.comp.split-button.medium.trailing-button.inner-corner.selected.corner-size"]).toBe("9999rem");
        expect(tokens["split-button"]["md.comp.split-button.large.trailing-button.inner-corner.selected.corner-size"]).toBe("9999rem");
        expect(tokens["split-button"]["md.comp.split-button.xlarge.trailing-button.inner-corner.selected.corner-size"]).toBe("9999rem");
    });

    it("converts 50% corner tokens to 9999px when unit is px", () => {
        const tokens = generateComponentTokens({ unit: "px" });

        expect(tokens["button-group"]["md.comp.button-group.connected.xsmall.selected.inner-corner.corner-size"]).toBe("9999px");
        expect(tokens["button-group"]["md.comp.button-group.connected.small.selected.inner-corner.corner-size"]).toBe("9999px");
        expect(tokens["button-group"]["md.comp.button-group.connected.medium.selected.inner-corner.corner-size"]).toBe("9999px");
        expect(tokens["button-group"]["md.comp.button-group.connected.large.selected.inner-corner.corner-size"]).toBe("9999px");
        expect(tokens["button-group"]["md.comp.button-group.connected.xlarge.selected.inner-corner.corner-size"]).toBe("9999px");

        expect(tokens["split-button"]["md.comp.split-button.xsmall.outer-corner.corner-size"]).toBe("9999px");
        expect(tokens["split-button"]["md.comp.split-button.xsmall.trailing-button.inner-corner.selected.corner-size"]).toBe("9999px");
        expect(tokens["split-button"]["md.comp.split-button.small.trailing-button.inner-corner.selected.corner-size"]).toBe("9999px");
        expect(tokens["split-button"]["md.comp.split-button.medium.trailing-button.inner-corner.selected.corner-size"]).toBe("9999px");
        expect(tokens["split-button"]["md.comp.split-button.large.trailing-button.inner-corner.selected.corner-size"]).toBe("9999px");
        expect(tokens["split-button"]["md.comp.split-button.xlarge.trailing-button.inner-corner.selected.corner-size"]).toBe("9999px");
    });
});
