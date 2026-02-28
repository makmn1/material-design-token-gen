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

export const progressIndicatorMotion: Record<string, string | number> = {
    "md.comp.progress-indicator.motion.duration.long2": "500ms",
    "md.comp.progress-indicator.motion.easing.standard": "cubic-bezier(0.2, 0, 0, 1)",
    "md.comp.progress-indicator.motion.easing.emphasized.accelerate": "cubic-bezier(0.3, 0, 0.8, 0.15)",
    "md.comp.progress-indicator.motion.easing.emphasized.decelerate": "cubic-bezier(0.05, 0.7, 0.1, 1)",
    "md.comp.progress-indicator.motion.easing.linear": "cubic-bezier(0, 0, 1, 1)",
};

export const progressIndicatorLinearMotion: Record<string, string | number> = {
    "sm.comp.progress-indicator.linear.transition.duration": "500ms",
    "sm.comp.progress-indicator.linear.transition.easing": "linear",
    "sm.comp.progress-indicator.linear.indeterminate.easing":
        "var(--md-comp-progress-indicator-motion-easing-emphasized-accelerate)",
    "sm.comp.progress-indicator.linear.indeterminate.duration": "1750ms",
};

export const progressIndicatorLinearWithWaveMotion: Record<string, string | number> = {
    "sm.comp.progress-indicator.linear.with-wave.transition.duration": "500ms",
    "sm.comp.progress-indicator.linear.with-wave.transition.easing": "linear",
    "sm.comp.progress-indicator.linear.with-wave.amplitude.increase.easing": "ease-out",
    "sm.comp.progress-indicator.linear.with-wave.amplitude.increase.duration": "500ms",
    "sm.comp.progress-indicator.linear.with-wave.amplitude.decrease.easing": "ease-in",
    "sm.comp.progress-indicator.linear.with-wave.amplitude.decrease.duration": "500ms",
    "sm.comp.progress-indicator.linear.with-wave.cycle.duration": "1000ms",
    "sm.comp.progress-indicator.linear.with-wave.indeterminate.easing":
        "var(--md-comp-progress-indicator-motion-easing-emphasized-accelerate)",
    "sm.comp.progress-indicator.linear.with-wave.indeterminate.duration": "1750ms",
};

export const progressIndicatorCircularMotion: Record<string, string | number> = {
    "sm.comp.progress-indicator.circular.transition.duration": "500ms",
    "sm.comp.progress-indicator.circular.transition.easing": "linear",
    "sm.comp.progress-indicator.circular.indeterminate.progress.duration": "6000ms",
    "sm.comp.progress-indicator.circular.indeterminate.progress.easing.grow":
        "var(--md-comp-progress-indicator-motion-easing-standard)",
    "sm.comp.progress-indicator.circular.indeterminate.progress.easing.shrink":
        "var(--md-comp-progress-indicator-motion-easing-linear)",
    "sm.comp.progress-indicator.circular.indeterminate.global-rotation.duration": "6000ms",
    "sm.comp.progress-indicator.circular.indeterminate.global-rotation.easing":
        "var(--md-comp-progress-indicator-motion-easing-linear)",
    "sm.comp.progress-indicator.circular.indeterminate.additional-rotation.duration": "6000ms",
    "sm.comp.progress-indicator.circular.indeterminate.additional-rotation.easing": "linear",
};

export const progressIndicatorCircularWithWaveMotion: Record<string, string | number> = {
    "sm.comp.progress-indicator.circular.with-wave.transition.duration": "500ms",
    "sm.comp.progress-indicator.circular.with-wave.transition.easing": "linear",
    "sm.comp.progress-indicator.circular.with-wave.indeterminate.progress.duration": "6000ms",
    "sm.comp.progress-indicator.circular.with-wave.indeterminate.progress.easing.grow":
        "var(--md-comp-progress-indicator-motion-easing-standard)",
    "sm.comp.progress-indicator.circular.with-wave.indeterminate.progress.easing.shrink":
        "var(--md-comp-progress-indicator-motion-easing-linear)",
    "sm.comp.progress-indicator.circular.with-wave.indeterminate.global-rotation.duration": "6000ms",
    "sm.comp.progress-indicator.circular.with-wave.indeterminate.global-rotation.easing":
        "var(--md-comp-progress-indicator-motion-easing-linear)",
    "sm.comp.progress-indicator.circular.with-wave.indeterminate.additional-rotation.duration":
        "6000ms",
    "sm.comp.progress-indicator.circular.with-wave.indeterminate.additional-rotation.easing":
        "linear",
};

export const progressIndicatorTokens: Record<string, string | number> = Object.assign(
    {},
    progressIndicatorColor,
    progressIndicatorShape,
    progressIndicatorLinearBaseline,
    progressIndicatorCircularBaseline,
    progressIndicatorMotion,
    progressIndicatorLinearMotion,
    progressIndicatorLinearWithWaveMotion,
    progressIndicatorCircularMotion,
    progressIndicatorCircularWithWaveMotion,
);

