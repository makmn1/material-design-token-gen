export const progressIndicatorColor: Record<string, string | number> = {
    "md.comp.progress-indicator.active-indicator.color": "md.sys.color.primary",
    "md.comp.progress-indicator.track.color": "md.sys.color.secondary-container",
    "md.comp.progress-indicator.stop-indicator.color": "md.sys.color.primary",
};

export const progressIndicatorShape: Record<string, string | number> = {
    "md.comp.progress-indicator.active-indicator.shape": "md.sys.shape.corner.full",
    "md.comp.progress-indicator.track.shape": "md.sys.shape.corner.full",
    "md.comp.progress-indicator.stop-indicator.shape": "md.sys.shape.corner.full",
};

export const progressIndicatorLinearBaseline: Record<string, string | number> = {
    "md.comp.progress-indicator.linear.height": "4dp",
    "md.comp.progress-indicator.linear.with-wave.height": "10dp",
    "md.comp.progress-indicator.linear.active-indicator.thickness": "4dp",
    "md.comp.progress-indicator.linear.track.thickness": "4dp",
    "md.comp.progress-indicator.linear.stop-indicator.size": "4dp",
    "md.comp.progress-indicator.linear.track-active-indicator-space": "4dp",
    "md.comp.progress-indicator.linear.stop-indicator.trailing-space": 0,
    "md.comp.progress-indicator.linear.active-indicator.wave.amplitude": "3dp",
    "md.comp.progress-indicator.linear.active-indicator.wave.wavelength": "40dp",
    "md.comp.progress-indicator.linear.indeterminate.active-indicator.wave.wavelength": "20dp",
};

export const progressIndicatorCircularBaseline: Record<string, string | number> = {
    "md.comp.progress-indicator.circular.size": "40dp",
    "md.comp.progress-indicator.circular.with-wave.size": "48dp",
    "md.comp.progress-indicator.circular.active-indicator.thickness": "4dp",
    "md.comp.progress-indicator.circular.track.thickness": "4dp",
    "md.comp.progress-indicator.circular.track-active-indicator-space": "4dp",
    "md.comp.progress-indicator.circular.active-indicator.wave.amplitude": "1.6dp",
    "md.comp.progress-indicator.circular.active-indicator.wave.wavelength": "15dp",
};

export const progressIndicatorTokens: Record<string, string | number> = Object.assign(
    {},
    progressIndicatorColor,
    progressIndicatorShape,
    progressIndicatorLinearBaseline,
    progressIndicatorCircularBaseline,
);

