export const bottomSheetEnabledContainer: Record<string, string | number> = {
    "md.comp.sheet.bottom.docked.container.color": "md.sys.color.surface-container-low",
    "md.comp.sheet.bottom.docked.modal.container.elevation": "md.sys.elevation.level1",
    "md.comp.sheet.bottom.docked.standard.container.elevation": "md.sys.elevation.level1",
    "md.comp.sheet.bottom.docked.container.shape": "md.sys.shape.corner.extra-large.top",
    "md.comp.sheet.bottom.docked.minimized.container.shape": "md.sys.shape.corner.none",
};

export const bottomSheetEnabledDragHandle: Record<string, string | number> = {
    "md.comp.sheet.bottom.docked.drag-handle.color": "md.sys.color.on-surface-variant",
    "md.comp.sheet.bottom.docked.drag-handle.width": "32dp",
    "md.comp.sheet.bottom.docked.drag-handle.height": "4dp",
};

export const bottomSheetFocusIndicator: Record<string, string | number> = {
    "md.comp.sheet.bottom.focus.indicator.color": "md.sys.color.secondary",
    "md.comp.sheet.bottom.focus.indicator.thickness": "md.sys.state.focus-indicator.thickness",
    "md.comp.sheet.bottom.focus.indicator.outline.offset": "md.sys.state.focus-indicator.outer-offset",
};

export const bottomSheetTokens: Record<string, string | number> = Object.assign(
    {},
    bottomSheetEnabledContainer,
    bottomSheetEnabledDragHandle,
    bottomSheetFocusIndicator,
);

