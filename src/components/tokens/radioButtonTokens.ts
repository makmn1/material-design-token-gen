export const radioButtonEnabledIcon: Record<string, string | number> = {
    "md.comp.radio-button.icon.selected.color": "md.sys.color.primary",
    "md.comp.radio-button.icon.unselected.color": "md.sys.color.on-surface-variant",
    "md.comp.radio-button.icon.size": "20dp",
};

export const radioButtonEnabledStateLayer: Record<string, string | number> = {
    "md.comp.radio-button.state.layer.size": "40dp",
};

export const radioButtonDisabledIcon: Record<string, string | number> = {
    "md.comp.radio-button.disabled.selected.icon.color": "md.sys.color.on-surface",
    "md.comp.radio-button.disabled.selected.icon.opacity": 0.38,
    "md.comp.radio-button.disabled.unselected.icon.color": "md.sys.color.on-surface",
    "md.comp.radio-button.disabled.unselected.icon.opacity": 0.38,
};

export const radioButtonHoveredStateLayer: Record<string, string | number> = {
    "md.comp.radio-button.selected.hover.state.layer.color": "md.sys.color.primary",
    "md.comp.radio-button.selected.hover.state.layer.opacity":
        "md.sys.state.hover.state-layer-opacity",
    "md.comp.radio-button.unselected.hover.state.layer.color": "md.sys.color.on-surface",
    "md.comp.radio-button.unselected.hover.state.layer.opacity":
        "md.sys.state.hover.state-layer-opacity",
};

export const radioButtonHoveredIcon: Record<string, string | number> = {
    "md.comp.radio-button.selected.hover.icon.color": "md.sys.color.primary",
    "md.comp.radio-button.unselected.hover.icon.color": "md.sys.color.on-surface",
};

export const radioButtonFocusedStateLayer: Record<string, string | number> = {
    "md.comp.radio-button.selected.focus.state.layer.color": "md.sys.color.primary",
    "md.comp.radio-button.selected.focus.state.layer.opacity":
        "md.sys.state.focus.state-layer-opacity",
    "md.comp.radio-button.unselected.focus.state.layer.color": "md.sys.color.on-surface",
    "md.comp.radio-button.unselected.focus.state.layer.opacity":
        "md.sys.state.focus.state-layer-opacity",
};

export const radioButtonFocusedIcon: Record<string, string | number> = {
    "md.comp.radio-button.selected.focus.icon.color": "md.sys.color.primary",
    "md.comp.radio-button.unselected.focus.icon.color": "md.sys.color.on-surface",
};

export const radioButtonPressedStateLayer: Record<string, string | number> = {
    "md.comp.radio-button.selected.pressed.state.layer.color": "md.sys.color.on-surface",
    "md.comp.radio-button.selected.pressed.state.layer.opacity":
        "md.sys.state.pressed.state-layer-opacity",
    "md.comp.radio-button.unselected.pressed.state.layer.color": "md.sys.color.primary",
    "md.comp.radio-button.unselected.pressed.state.layer.opacity":
        "md.sys.state.pressed.state-layer-opacity",
};

export const radioButtonPressedIcon: Record<string, string | number> = {
    "md.comp.radio-button.selected.pressed.icon.color": "md.sys.color.primary",
    "md.comp.radio-button.unselected.pressed.icon.color": "md.sys.color.on-surface",
};

export const radioButtonTokens: Record<string, string | number> = Object.assign(
    {},
    radioButtonEnabledIcon,
    radioButtonEnabledStateLayer,
    radioButtonDisabledIcon,
    radioButtonHoveredStateLayer,
    radioButtonHoveredIcon,
    radioButtonFocusedStateLayer,
    radioButtonFocusedIcon,
    radioButtonPressedStateLayer,
    radioButtonPressedIcon,
);

