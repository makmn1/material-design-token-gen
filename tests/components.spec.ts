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
            { key: "md.comp.button.hovered.container.state.layer.color", expected: "md.sys.color.on-primary" },
            { key: "md.comp.button.focused.container.state.layer.color", expected: "md.sys.color.on-primary" },
            { key: "md.comp.button.pressed.container.state.layer.color", expected: "md.sys.color.on-primary" },
            { key: "md.comp.button.filled.container.color", expected: "md.sys.color.primary" },
            { key: "md.comp.button.filled.disabled.container.color", expected: "md.sys.color.on-surface" },
            { key: "md.comp.button.elevated.container.color", expected: "md.sys.color.surface-container-low" },
            { key: "md.comp.button.elevated.hovered.container.state.layer.color", expected: "md.sys.color.primary" },
            { key: "md.comp.button.tonal.container.color", expected: "md.sys.color.secondary-container" },
            { key: "md.comp.button.tonal.hovered.container.state.layer.color", expected: "md.sys.color.on-secondary-container" },
            { key: "md.comp.button.outlined.outline.color", expected: "md.sys.color.outline-variant" },
            { key: "md.comp.button.outlined.hovered.state.layer.color", expected: "md.sys.color.on-surface-variant" },
            { key: "md.comp.button.text.label.color", expected: "md.sys.color.primary" },
            { key: "md.comp.button.text.disabled.container.color", expected: "md.sys.color.on-surface" },
            { key: "md.comp.button.xsmall.container.height", expected: "2.2857rem" },
            { key: "md.comp.button.small.container.height", expected: "2.8571rem" },
            { key: "md.comp.button.medium.container.height", expected: "4rem" },
            { key: "md.comp.button.large.container.height", expected: "6.8571rem" },
            { key: "md.comp.button.xlarge.container.height", expected: "9.7143rem" },
        ],
    },
    {
        name: "app-bar",
        key: "app-bar",
        sampleTokens: [
            { key: "md.comp.app-bar.container.color", expected: "md.sys.color.surface" },
            { key: "md.comp.app-bar.container.elevation", expected: "md.sys.elevation.level0" },
            { key: "md.comp.app-bar.container.elevation.on.scroll", expected: "md.sys.elevation.level2" },
            { key: "md.comp.app-bar.title.text", expected: "md.sys.color.on-surface" },
            { key: "md.comp.app-bar.icon.spacing", expected: 0 },
            { key: "md.comp.app-bar.left.padding", expected: "0.2857rem" },
            { key: "md.comp.app-bar.container.shape", expected: "md.sys.shape.corner.none" },
            { key: "md.comp.app-bar.avatar.size", expected: "2.2857rem" },
            { key: "md.comp.app-bar.small.container.height", expected: "4.5714rem" },
            { key: "md.comp.app-bar.small.title.font.name", expected: "md.sys.typescale.title-large.font" },
            { key: "md.comp.app-bar.medium.flexible.container.height", expected: "8rem" },
            { key: "md.comp.app-bar.medium.title.font.size", expected: "md.sys.typescale.headline-medium.size" },
            { key: "md.comp.app-bar.large.flexible.container.height", expected: "8.5714rem" },
            { key: "md.comp.app-bar.large.title.font.name", expected: "md.sys.typescale.display-small.font" },
            { key: "md.comp.app-bar.search.container.color", expected: "md.sys.color.surface-container" },
            { key: "md.comp.app-bar.search.container.height", expected: "4rem" },
        ],
    },
    {
        name: "badge",
        key: "badge",
        sampleTokens: [
            { key: "md.comp.badge.color", expected: "md.sys.color.error" },
            { key: "md.comp.badge.shape", expected: "md.sys.shape.corner.full" },
            { key: "md.comp.badge.size", expected: "0.4286rem" },
            { key: "md.comp.badge.large.color", expected: "md.sys.color.error" },
            { key: "md.comp.badge.large.shape", expected: "md.sys.shape.corner.full" },
            { key: "md.comp.badge.large.size", expected: "1.1429rem" },
            { key: "md.comp.badge.large.label.text.color", expected: "md.sys.color.on-error" },
            { key: "md.comp.badge.large.label.text.font", expected: "md.sys.typescale.label-small.font" },
            { key: "md.comp.badge.large.label.text.line.height", expected: "md.sys.typescale.label-small.line-height" },
            { key: "md.comp.badge.large.label.text.size", expected: "md.sys.typescale.label-small.size" },
            { key: "md.comp.badge.large.label.text.tracking", expected: "md.sys.typescale.label-small.tracking" },
            { key: "md.comp.badge.large.label.text.weight", expected: "md.sys.typescale.label-small.weight" },
            { key: "md.comp.badge.large.max.width", expected: "2.4286rem" },
            { key: "md.comp.badge.small.distance.from.top.trailing.icon.corner.to.leading.badge.corner", expected: "0.4286rem" },
            { key: "md.comp.badge.large.distance.from.top.trailing.icon.corner.to.bottom.trailing.badge.corner", expected: "1rem" },
        ],
    },
    {
        name: "button-group",
        key: "button-group",
        sampleTokens: [
            { key: "md.comp.button-group.xsmall.container.height", expected: "2.2857rem" },
            { key: "md.comp.button-group.xsmall.between.space", expected: "1.2857rem" },
            { key: "md.comp.button-group.xsmall.pressed.motion.spring.dampening", expected: "md.sys.motion.spring.fast.spatial.damping" },
            { key: "md.comp.button-group.xsmall.pressed.width.multiplier", expected: "15%" },
            { key: "md.comp.button-group.small.container.height", expected: "2.8571rem" },
            { key: "md.comp.button-group.medium.container.height", expected: "4rem" },
            { key: "md.comp.button-group.large.container.height", expected: "6.8571rem" },
            { key: "md.comp.button-group.xlarge.container.height", expected: "9.7143rem" },
            { key: "md.comp.button-group.connected.xsmall.container.height", expected: "2.2857rem" },
            { key: "md.comp.button-group.connected.xsmall.space.between.buttons", expected: "0.1429rem" },
            { key: "md.comp.button-group.connected.xsmall.container.shape", expected: "md.sys.shape.corner.full" },
            { key: "md.comp.button-group.connected.xsmall.inner.corner.size", expected: "md.sys.shape.corner-value.small" },
            { key: "md.comp.button-group.connected.xsmall.pressed.inner.corner.size", expected: "md.sys.shape.corner-value.extra-small" },
            { key: "md.comp.button-group.connected.xsmall.selected.inner.corner.size", expected: "50%" },
            { key: "md.comp.button-group.connected.large.inner.corner.size", expected: "md.sys.shape.corner-value.large" },
            { key: "md.comp.button-group.connected.xlarge.inner.corner.size", expected: "md.sys.shape.corner-value.large-increased" },
        ],
    },
    {
        name: "fab",
        key: "fab",
        sampleTokens: [
            { key: "md.comp.fab.container.height", expected: "4rem" },
            { key: "md.comp.fab.container.width", expected: "4rem" },
            { key: "md.comp.fab.icon.size", expected: "1.7143rem" },
            { key: "md.comp.fab.container.shape", expected: "md.sys.shape.corner.large" },
            { key: "md.comp.fab.medium.container.height", expected: "5.7143rem" },
            { key: "md.comp.fab.large.container.height", expected: "6.8571rem" },
            { key: "md.comp.fab.tonal.primary.container.color", expected: "md.sys.color.primary-container" },
            { key: "md.comp.fab.tonal.primary.container.elevation", expected: "md.sys.elevation.level3" },
            { key: "md.comp.fab.tonal.primary.focused.state.layer.opacity", expected: "md.sys.state.focus.state-layer-opacity" },
            { key: "md.comp.fab.tonal.secondary.pressed.state.layer.opacity", expected: "md.sys.state.pressed.state-layer-opacity" },
            { key: "md.comp.fab.primary.container.color", expected: "md.sys.color.primary" },
            { key: "md.comp.fab.primary.focused.container.elevation", expected: "md.sys.elevation.level3" },
            { key: "md.comp.fab.secondary.hovered.container.elevation", expected: "md.sys.elevation.level4" },
            { key: "md.comp.fab.tertiary.pressed.container.elevation", expected: "md.sys.elevation.level3" },
        ],
    },
    {
        name: "extended-fab",
        key: "extended-fab",
        sampleTokens: [
            { key: "md.comp.extended-fab.small.container.height", expected: "4rem" },
            { key: "md.comp.extended-fab.small.label.text.font.name", expected: "md.sys.typescale.body-large.font" },
            { key: "md.comp.extended-fab.small.icon.size", expected: "1.7143rem" },
            { key: "md.comp.extended-fab.small.container.shape", expected: "md.sys.shape.corner.large" },
            { key: "md.comp.extended-fab.medium.container.height", expected: "5.7143rem" },
            { key: "md.comp.extended-fab.large.container.height", expected: "6.8571rem" },
            { key: "md.comp.extended-fab.tonal.primary.container.color", expected: "md.sys.color.primary-container" },
            { key: "md.comp.extended-fab.tonal.primary.container.elevation", expected: "md.sys.elevation.level3" },
            { key: "md.comp.extended-fab.tonal.primary.hovered.container.elevation", expected: "md.sys.elevation.level4" },
            { key: "md.comp.extended-fab.tonal.primary.focused.state.layer.opacity", expected: "md.sys.state.focus.state-layer-opacity" },
            { key: "md.comp.extended-fab.tonal.secondary.pressed.state.layer.opacity", expected: "md.sys.state.pressed.state-layer-opacity" },
            { key: "md.comp.extended-fab.primary.container.color", expected: "md.sys.color.primary" },
            { key: "md.comp.extended-fab.primary.hovered.container.elevation", expected: "md.sys.elevation.level4" },
            { key: "md.comp.extended-fab.secondary.focused.container.elevation", expected: "md.sys.elevation.level3" },
            { key: "md.comp.extended-fab.tertiary.pressed.container.elevation", expected: "md.sys.elevation.level3" },
        ],
    },
    {
        name: "fab-menu",
        key: "fab-menu",
        sampleTokens: [
            { key: "md.comp.fab-menu.close.button.container.height", expected: "4rem" },
            { key: "md.comp.fab-menu.close.width", expected: "4rem" },
            { key: "md.comp.fab-menu.close.button.icon.size", expected: "1.4286rem" },
            { key: "md.comp.fab-menu.close.button.container.shape", expected: "md.sys.shape.corner.full" },
            { key: "md.comp.fab-menu.menu.item.container.height", expected: "4rem" },
            { key: "md.comp.fab-menu.menu.item.label.text.font.name", expected: "md.sys.typescale.body-large.font" },
            { key: "md.comp.fab-menu.menu.item.icon.size", expected: "1.7143rem" },
            { key: "md.comp.fab-menu.primary.close.button.container.color", expected: "md.sys.color.primary" },
            { key: "md.comp.fab-menu.primary.close.button.hovered.container.elevation", expected: "md.sys.elevation.level4" },
            { key: "md.comp.fab-menu.primary.close.button.focused.state.layer.opacity", expected: "md.sys.state.focus.state-layer-opacity" },
            { key: "md.comp.fab-menu.secondary.close.button.pressed.icon.color", expected: "md.sys.color.on-secondary" },
            { key: "md.comp.fab-menu.primary.list.item.container.color", expected: "md.sys.color.primary-container" },
            { key: "md.comp.fab-menu.primary.list.item.hovered.container.elevation", expected: "md.sys.elevation.level4" },
            { key: "md.comp.fab-menu.secondary.list.item.focused.container.elevation", expected: "md.sys.elevation.level3" },
            { key: "md.comp.fab-menu.tertiary.list.item.pressed.label.text.color", expected: "md.sys.color.on-tertiary-container" },
        ],
    },
    {
        name: "icon-button",
        key: "icon-button",
        sampleTokens: [
            { key: "md.comp.icon-button.container.height", expected: "2.8571rem" },
            { key: "md.comp.icon-button.icon.size", expected: "1.7143rem" },
            { key: "md.comp.icon-button.container.color", expected: "md.sys.color.primary" },
            { key: "md.comp.icon-button.container.color.toggle.unselected", expected: "md.sys.color.surface-container" },
            { key: "md.comp.icon-button.disabled.container.opacity", expected: 0.1 },
            { key: "md.comp.icon-button.disabled.icon.opacity", expected: 0.38 },
            { key: "md.comp.icon-button.hovered.state.layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.icon-button.filled.container.color", expected: "md.sys.color.primary" },
            { key: "md.comp.icon-button.tonal.container.color.toggle.selected", expected: "md.sys.color.secondary" },
            { key: "md.comp.icon-button.outlined.container.color.toggle.selected", expected: "md.sys.color.inverse-surface" },
            { key: "md.comp.icon-button.xsmall.container.height", expected: "2.2857rem" },
            { key: "md.comp.icon-button.small.outline.width", expected: "0.0714rem" },
            { key: "md.comp.icon-button.medium.container.shape.square", expected: "md.sys.shape.corner.large" },
            { key: "md.comp.icon-button.large.icon.size", expected: "2.2857rem" },
            { key: "md.comp.icon-button.xlarge.outline.width", expected: "0.2143rem" },
        ],
    },
    {
        name: "split-button",
        key: "split-button",
        sampleTokens: [
            { key: "md.comp.split-button.xsmall.container.height", expected: "2.2857rem" },
            { key: "md.comp.split-button.xsmall.between.space", expected: "0.1429rem" },
            { key: "md.comp.split-button.xsmall.container.shape", expected: "md.sys.shape.corner.full" },
            { key: "md.comp.split-button.xsmall.inner.corner.size", expected: "md.sys.shape.corner-value.extra-small" },
            { key: "md.comp.split-button.xsmall.outer.corner.size", expected: "50%" },
            { key: "md.comp.split-button.small.container.height", expected: "2.8571rem" },
            { key: "md.comp.split-button.small.leading.button.leading.space", expected: "1.1429rem" },
            { key: "md.comp.split-button.small.trailing.button.icon.size", expected: "1.5714rem" },
            { key: "md.comp.split-button.medium.container.height", expected: "4rem" },
            { key: "md.comp.split-button.medium.leading.button.trailing.space", expected: "1.7143rem" },
            { key: "md.comp.split-button.medium.trailing.button.leading.space", expected: "1.0714rem" },
            { key: "md.comp.split-button.large.container.height", expected: "6.8571rem" },
            { key: "md.comp.split-button.large.trailing.button.icon.size", expected: "2.7143rem" },
            { key: "md.comp.split-button.large.inner.corner.hovered.size", expected: "md.sys.shape.corner-value.large-increased" },
            { key: "md.comp.split-button.xlarge.container.height", expected: "9.7143rem" },
            { key: "md.comp.split-button.xlarge.trailing.button.inner.corner.selected.size", expected: "50%" },
        ],
    },
    {
        name: "card",
        key: "card",
        sampleTokens: [
            { key: "md.comp.card.elevated.container.color", expected: "md.sys.color.surface-container-low" },
            { key: "md.comp.card.elevated.container.elevation", expected: "md.sys.elevation.level1" },
            { key: "md.comp.card.elevated.icon.size", expected: "1.7143rem" },
            { key: "md.comp.card.elevated.disabled.container.opacity", expected: 0.38 },
            { key: "md.comp.card.elevated.hover.container.elevation", expected: "md.sys.elevation.level2" },
            { key: "md.comp.card.elevated.hover.state.layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.card.elevated.focus.indicator.color", expected: "md.sys.color.secondary" },
            { key: "md.comp.card.elevated.pressed.state.layer.opacity", expected: "md.sys.state.pressed.state-layer-opacity" },
            { key: "md.comp.card.elevated.dragged.container.elevation", expected: "md.sys.elevation.level4" },
            { key: "md.comp.card.filled.container.color", expected: "md.sys.color.surface-container-highest" },
            { key: "md.comp.card.filled.container.elevation", expected: "md.sys.elevation.level0" },
            { key: "md.comp.card.filled.disabled.container.color", expected: "md.sys.color.surface-variant" },
            { key: "md.comp.card.filled.focus.indicator.thickness", expected: "md.sys.state.focus-indicator.thickness" },
            { key: "md.comp.card.outlined.container.color", expected: "md.sys.color.surface" },
            { key: "md.comp.card.outlined.outline.width", expected: "0.0714rem" },
            { key: "md.comp.card.outlined.outline.color", expected: "md.sys.color.outline-variant" },
            { key: "md.comp.card.outlined.disabled.outline.opacity", expected: 0.12 },
            { key: "md.comp.card.outlined.hover.outline.color", expected: "md.sys.color.outline-variant" },
            { key: "md.comp.card.outlined.focus.outline.color", expected: "md.sys.color.on-surface" },
            { key: "md.comp.card.outlined.dragged.outline.color", expected: "md.sys.color.outline-variant" },
        ],
    },
    {
        name: "carousel",
        key: "carousel",
        sampleTokens: [
            { key: "md.comp.carousel.item.outline.color", expected: "md.sys.color.outline" },
            { key: "md.comp.carousel.item.outline.width", expected: "0.0714rem" },
            { key: "md.comp.carousel.item.container.color", expected: "md.sys.color.surface" },
            { key: "md.comp.carousel.item.container.elevation", expected: "md.sys.elevation.level0" },
            { key: "md.comp.carousel.item.container.shape", expected: "md.sys.shape.corner.extra-large" },
            { key: "md.comp.carousel.item.hover.container.elevation", expected: "md.sys.elevation.level1" },
            { key: "md.comp.carousel.item.hover.state.layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.carousel.item.focus.indicator.color", expected: "md.sys.color.secondary" },
            { key: "md.comp.carousel.focus.indicator.offset", expected: "md.sys.state.focus-indicator.outer-offset" },
            { key: "md.comp.carousel.item.focus.outline.color", expected: "md.sys.color.on-surface" },
            { key: "md.comp.carousel.item.pressed.state.layer.opacity", expected: "md.sys.state.pressed.state-layer-opacity" },
            { key: "md.comp.carousel.item.disabled.container.opacity", expected: 0.38 },
            { key: "md.comp.carousel.item.disabled.outline.opacity", expected: 0.12 },
        ],
    },
    {
        name: "checkbox",
        key: "checkbox",
        sampleTokens: [
            { key: "md.comp.checkbox.container.size", expected: "1.2857rem" },
            { key: "md.comp.checkbox.container.shape", expected: "0.1429rem" },
            { key: "md.comp.checkbox.unselected.outline.color", expected: "md.sys.color.on-surface-variant" },
            { key: "md.comp.checkbox.unselected.outline.width", expected: "0.1429rem" },
            { key: "md.comp.checkbox.selected.container.color", expected: "md.sys.color.primary" },
            { key: "md.comp.checkbox.selected.outline.width", expected: 0 },
            { key: "md.comp.checkbox.selected.icon.color", expected: "md.sys.color.on-primary" },
            { key: "md.comp.checkbox.state.layer.size", expected: "2.8571rem" },
            { key: "md.comp.checkbox.unselected.disabled.container.opacity", expected: 0.38 },
            { key: "md.comp.checkbox.selected.disabled.container.opacity", expected: 0.38 },
            { key: "md.comp.checkbox.selected.hover.state.layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.checkbox.error.hover.state.layer.color", expected: "md.sys.color.error" },
            { key: "md.comp.checkbox.focus.indicator.color", expected: "md.sys.color.secondary" },
            { key: "md.comp.checkbox.focus.indicator.thickness", expected: "md.sys.state.focus-indicator.thickness" },
            { key: "md.comp.checkbox.selected.focus.container.color", expected: "md.sys.color.primary" },
            { key: "md.comp.checkbox.unselected.focus.state.layer.opacity", expected: "md.sys.state.focus.state-layer-opacity" },
            { key: "md.comp.checkbox.unselected.pressed.state.layer.color", expected: "md.sys.color.primary" },
            { key: "md.comp.checkbox.selected.pressed.state.layer.opacity", expected: "md.sys.state.pressed.state-layer-opacity" },
            { key: "md.comp.checkbox.error.pressed.state.layer.color", expected: "md.sys.color.error" },
        ],
    },
    {
        name: "chip",
        key: "chip",
        sampleTokens: [
            { key: "md.comp.chip.assist.container.height", expected: "2.2857rem" },
            { key: "md.comp.chip.assist.elevated.container.shadow.color", expected: "md.sys.color.shadow" },
            { key: "md.comp.chip.assist.hover.state.layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.chip.assist.focus.indicator.offset", expected: "md.sys.state.focus-indicator.outer-offset" },
            { key: "md.comp.chip.assist.pressed.state.layer.opacity", expected: "md.sys.state.pressed.state-layer-opacity" },
            { key: "md.comp.chip.assist.dragged.state.layer.opacity", expected: "md.sys.state.dragged.state-layer-opacity" },
            { key: "md.comp.chip.filter.container.height", expected: "2.2857rem" },
            { key: "md.comp.chip.filter.unselected.outline.width", expected: "0.0714rem" },
            { key: "md.comp.chip.filter.selected.outline.width", expected: 0 },
            { key: "md.comp.chip.filter.elevated.container.shadow.color", expected: "md.sys.color.shadow" },
            { key: "md.comp.chip.filter.selected.hover.state.layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.chip.filter.selected.dragged.state.layer.opacity", expected: "md.sys.state.dragged.state-layer-opacity" },
            { key: "md.comp.chip.input.with.avatar.avatar.size", expected: "1.7143rem" },
            { key: "md.comp.chip.input.trailing.icon.size", expected: "1.2857rem" },
            { key: "md.comp.chip.input.with.trailing.icon.selected.hover.trailing.icon.color", expected: "md.sys.color.on-secondary-container" },
            { key: "md.comp.chip.input.with.trailing.icon.unselected.pressed.trailing.icon.color", expected: "md.sys.color.on-surface-variant" },
            { key: "md.comp.chip.input.with.trailing.icon.disabled.trailing.icon.opacity", expected: 0.38 },
            { key: "md.comp.chip.suggestion.container.height", expected: "2.2857rem" },
            { key: "md.comp.chip.suggestion.hover.leading.icon.color", expected: "md.sys.color.primary" },
            { key: "md.comp.chip.suggestion.elevated.pressed.state.layer.opacity", expected: "md.sys.state.pressed.state-layer-opacity" },
            { key: "md.comp.chip.suggestion.dragged.state.layer.opacity", expected: "md.sys.state.dragged.state-layer-opacity" },
        ],
    },
    {
        name: "date-picker",
        key: "date-picker",
        sampleTokens: [
            { key: "md.comp.date-picker.docker.container.color", expected: "md.sys.color.surface-container-high" },
            { key: "md.comp.date-picker.docker.container.width", expected: "25.7143rem" },
            { key: "md.comp.date-picker.docker.menu.button.label.text.color", expected: "md.sys.color.on-surface-variant" },
            { key: "md.comp.date-picker.docker.date.unselected.outside.month.label.text.opacity", expected: 0.38 },
            { key: "md.comp.date-picker.docker.menu.button.icon.size", expected: "1.2857rem" },
            { key: "md.comp.date-picker.docker.date.hover.state.layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.date-picker.docker.menu.list.item.selected.pressed.leading.icon.color", expected: "md.sys.color.on-surface-variant" },
            { key: "md.comp.date-picker.modal.container.height", expected: "37.4286rem" },
            { key: "md.comp.date-picker.modal.range.selection.active.indicator.container.color", expected: "md.sys.color.secondary-container" },
            { key: "md.comp.date-picker.modal.range.selection.month.subhead.font", expected: "md.sys.typescale.title-small.font" },
            { key: "md.comp.date-picker.modal.range.selection.date.in.range.hover.state.layer.color", expected: "md.sys.color.on-primary-container" },
            { key: "md.comp.date-picker.modal.year.selection.year.hover.state.layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.date-picker.modal-input.container.width", expected: "23.4286rem" },
            { key: "md.comp.date-picker.modal-input.header.headline.font", expected: "md.sys.typescale.headline-large.font" },
            { key: "md.comp.date-picker.modal-input.header.supporting.text.tracking", expected: "md.sys.typescale.label-large.tracking" },
        ],
    },
    {
        name: "time-picker",
        key: "time-picker",
        sampleTokens: [
            { key: "md.comp.time-picker.dial.container.color", expected: "md.sys.color.surface-container-high" },
            { key: "md.comp.time-picker.dial.clock.dial.container.size", expected: "18.2857rem" },
            { key: "md.comp.time-picker.dial.time.selector.24h.vertical.container.width", expected: "8.1429rem" },
            { key: "md.comp.time-picker.dial.period.selector.outline.width", expected: "0.0714rem" },
            { key: "md.comp.time-picker.dial.clock.dial.selector.track.container.width", expected: "0.1429rem" },
            { key: "md.comp.time-picker.dial.period.selector.hover.state.layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.time-picker.dial.period.selector.focus.state.layer.opacity", expected: "md.sys.state.focus.state-layer-opacity" },
            { key: "md.comp.time-picker.dial.period.selector.pressed.state.layer.opacity", expected: "md.sys.state.pressed.state-layer-opacity" },
            { key: "md.comp.time-picker.dial.period.selector.unselected.pressed.label.text.color", expected: "md.sys.color.on-surface-variant" },
            { key: "md.comp.time-picker.input.container.shape", expected: "md.sys.shape.corner.extra-large" },
            { key: "md.comp.time-picker.input.time.input.field.container.width", expected: "6.8571rem" },
            { key: "md.comp.time-picker.input.period.selector.container.height", expected: "5.1429rem" },
            { key: "md.comp.time-picker.input.focus.indicator.offset", expected: "md.sys.state.focus-indicator.outer-offset" },
            { key: "md.comp.time-picker.input.time.input.field.focus.outline.width", expected: "0.1429rem" },
            { key: "md.comp.time-picker.input.period.selector.pressed.state.layer.opacity", expected: "md.sys.state.pressed.state-layer-opacity" },
        ],
    },
    {
        name: "dialog",
        key: "dialog",
        sampleTokens: [
            { key: "md.comp.dialog.basic.container.color", expected: "md.sys.color.surface-container-high" },
            { key: "md.comp.dialog.basic.headline.font", expected: "md.sys.typescale.headline-small.font" },
            { key: "md.comp.dialog.basic.supporting.text.weight", expected: "md.sys.typescale.body-medium.weight" },
            { key: "md.comp.dialog.basic.action.hover.state.layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.dialog.basic.action.focus.state.layer.opacity", expected: "md.sys.state.focus.state-layer-opacity" },
            { key: "md.comp.dialog.basic.action.pressed.state.layer.opacity", expected: "md.sys.state.pressed.state-layer-opacity" },
            { key: "md.comp.dialog.full-screen.container.shape", expected: "md.sys.shape.corner.none" },
            { key: "md.comp.dialog.full-screen.header.container.height", expected: "4rem" },
            { key: "md.comp.dialog.full-screen.header.container.surface.tint.layer.color", expected: "md.sys.color.surface-tint" },
            { key: "md.comp.dialog.full-screen.header.action.label.text.font", expected: "md.sys.typescale.label-large.font" },
            { key: "md.comp.dialog.full-screen.header.headline.tracking", expected: "md.sys.typescale.title-large.tracking" },
            { key: "md.comp.dialog.full-screen.header.action.hover.state.layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.dialog.full-screen.header.action.focus.state.layer.opacity", expected: "md.sys.state.focus.state-layer-opacity" },
            { key: "md.comp.dialog.full-screen.header.action.pressed.state.layer.opacity", expected: "md.sys.state.pressed.state-layer-opacity" },
        ],
    },
    {
        name: "divider",
        key: "divider",
        sampleTokens: [
            { key: "md.comp.divider.container.thickness", expected: "0.0714rem" },
            { key: "md.comp.divider.container.color", expected: "md.sys.color.outline-variant" },
        ],
    },
    {
        name: "list",
        key: "list",
        sampleTokens: [
            { key: "md.comp.list.list.item.container.color", expected: "md.sys.color.surface" },
            { key: "md.comp.list.list.item.selected.container.color", expected: "md.sys.color.secondary-container" },
            { key: "md.comp.list.three.lines.list.item.container.height", expected: "6.2857rem" },
            { key: "md.comp.list.one.line.list.item.container.height", expected: "4rem" },
            { key: "md.comp.list.list.item.leading.space", expected: "1.1429rem" },
            { key: "md.comp.list.list.item.trailing.space", expected: "1.1429rem" },
            { key: "md.comp.list.list.item.leading.icon.width", expected: "7.1429rem" },
            { key: "md.comp.list.list.item.small.leading.icon.height", expected: "4rem" },
            { key: "md.comp.list.list.item.large.leading.icon.color", expected: "4.9286rem" },
            { key: "md.comp.list.list.item.leading.icon.shape", expected: "md.sys.shape.corner.none" },
            { key: "md.comp.list.list.item.trailing.icon.color", expected: "md.sys.color.on-surface-variant" },
            { key: "md.comp.list.list.item.unselected.trailing.icon.color", expected: "md.sys.color.on-surface" },
            { key: "md.comp.list.list.item.divider.leading.space", expected: "1.1429rem" },
            { key: "md.comp.list.list.item.leading.avatar.size", expected: "2.8571rem" },
            { key: "md.comp.list.list.item.leading.image.width", expected: "4rem" },
            { key: "md.comp.list.list.item.trailing.supporting.text.font", expected: "md.sys.typescale.label-small.font" },
            { key: "md.comp.list.list.item.disabled.label.text.opacity", expected: 0.38 },
            { key: "md.comp.list.list.item.disabled.state.layer.opacity", expected: "md.sys.state.focus.state-layer-opacity" },
            { key: "md.comp.list.list.item.hover.leading.icon.color", expected: "md.sys.color.on-surface-variant" },
            { key: "md.comp.list.list.item.selected.hover.state.layer.opacity", expected: "md.sys.state.hover.state-layer-opacity" },
            { key: "md.comp.list.list.item.focus.indicator.thickness", expected: "md.sys.state.focus-indicator.thickness" },
            { key: "md.comp.list.list.item.pressed.state.layer.opacity", expected: "md.sys.state.pressed.state-layer-opacity" },
            { key: "md.comp.list.list.item.dragged.container.color", expected: "md.sys.elevation.level4" },
            { key: "md.comp.list.list.item.dragged.state.layer.opacity", expected: "md.sys.state.dragged.state-layer-opacity" },
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

        expect(tokens.button["md.comp.button.container.height"]).toBe("2.8571rem");
        expect(tokens.button["md.comp.button.icon.size"]).toBe("1.4286rem");
        expect(tokens.button["md.comp.button.leading.space"]).toBe("1.7143rem");
        expect(tokens.button["md.comp.button.between.icon.label.space"]).toBe("0.5714rem");
    });

    it("leaves dp strings untouched when webUnits is false", () => {
        const tokens = generateComponentTokens({ webUnits: false });

        expect(tokens.button["md.comp.button.container.height"]).toBe("40dp");
        expect(tokens.button["md.comp.button.icon.size"]).toBe("20dp");
        expect(tokens.button["md.comp.button.leading.space"]).toBe("24dp");
        expect(tokens.button["md.comp.button.between.icon.label.space"]).toBe(
            "8dp"
        );
    });

    it("respects custom rootFontSizePx", () => {
        const tokens = generateComponentTokens({
            rootFontSizePx: 16,
            webUnits: true,
        });

        expect(tokens.button["md.comp.button.container.height"]).toBe("2.5rem");
        expect(tokens.button["md.comp.button.icon.size"]).toBe("1.25rem");
    });

    it("respects custom dpPxRatio", () => {
        const tokens = generateComponentTokens({
            dpPxRatio: 2,
            webUnits: true,
        });

        expect(tokens.button["md.comp.button.container.height"]).toBe(
            "5.7143rem"
        );
        expect(tokens.button["md.comp.button.icon.size"]).toBe("2.8571rem");
    });

    it("respects custom unit option (px)", () => {
        const tokens = generateComponentTokens({
            unit: "px",
            webUnits: true,
        });

        expect(tokens.button["md.comp.button.container.height"]).toBe("40px");
        expect(tokens.button["md.comp.button.icon.size"]).toBe("20px");
        expect(tokens.button["md.comp.button.leading.space"]).toBe("24px");
    });

    it("respects custom unit option (px) with custom dpPxRatio", () => {
        const tokens = generateComponentTokens({
            unit: "px",
            dpPxRatio: 2,
            webUnits: true,
        });

        expect(tokens.button["md.comp.button.container.height"]).toBe("80px");
        expect(tokens.button["md.comp.button.icon.size"]).toBe("40px");
    });

    it("does not convert non-dp strings", () => {
        const tokens = generateComponentTokens({ webUnits: true });

        expect(tokens.button["md.comp.button.container.color"]).toBe(
            "md.sys.color.primary"
        );
        expect(tokens.button["md.comp.button.elevation"]).toBe(
            "md.sys.elevation.level0"
        );
        expect(tokens.button["md.comp.button.label.size"]).toBe(
            "md.sys.typescale.label-large"
        );
    });

    it("keeps numeric opacity values as numbers", () => {
        const tokens = generateComponentTokens({ webUnits: true });

        expect(tokens.button["md.comp.button.disabled.container.opacity"]).toBe(0.1);
        expect(tokens.button["md.comp.button.disabled.label.opacity"]).toBe(0.38);
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
});
