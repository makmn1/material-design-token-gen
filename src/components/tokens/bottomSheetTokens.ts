export const bottomSheetEnabledContainer: Record<string, string | number> = {
    "md.comp.bottom-sheet.docked.container.color": "md.sys.color.surface-container-low",
    "md.comp.bottom-sheet.docked.modal.container.elevation": "md.sys.elevation.level1",
    "md.comp.bottom-sheet.docked.standard.container.elevation": "md.sys.elevation.level1",
    "md.comp.bottom-sheet.docked.container.shape": "md.sys.shape.corner.extra-large.top",
    "md.comp.bottom-sheet.docked.minimized.container.shape": "md.sys.shape.corner.none",
};

export const bottomSheetEnabledDragHandle: Record<string, string | number> = {
    "md.comp.bottom-sheet.docked.drag.handle.color": "md.sys.color.on-surface-variant",
    "md.comp.bottom-sheet.docked.drag.handle.width": "32dp",
    "md.comp.bottom-sheet.docked.drag.handle.height": "4dp",
};

export const bottomSheetFocusIndicator: Record<string, string | number> = {
    "md.comp.bottom-sheet.focus.indicator.color": "md.sys.color.secondary",
    "md.comp.bottom-sheet.focus.indicator.thickness": "md.sys.state.focus-indicator.thickness",
    "md.comp.bottom-sheet.focus.indicator.offset": "md.sys.state.focus-indicator.outer-offset",
};

export const bottomSheetTokens: Record<string, string | number> = Object.assign(
    {},
    bottomSheetEnabledContainer,
    bottomSheetEnabledDragHandle,
    bottomSheetFocusIndicator,
);

