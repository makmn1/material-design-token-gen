/**
 * Generate **state-layer** tokens (opacities used for hover/focus/pressed/dragged).
 *
 * Values are numeric fractions in `[0, 1]`, e.g., `0.08` for hover.
 *
 * Keys:
 *  - `md.sys.state.hover.state-layer-opacity`
 *  - `md.sys.state.focus.state-layer-opacity`
 *  - `md.sys.state.pressed.state-layer-opacity`
 *  - `md.sys.state.dragged.state-layer-opacity`
 *
 * @example
 * ```ts
 * import { generateStateTokens } from "@makmn1/material-design-token-gen";
 * const state = generateStateTokens();
 * // state["md.sys.state.dragged.state-layer-opacity"] === 0.16
 * ```
 */
export function generateStateTokens(): Record<string, number> {
    return {
        "md.sys.state.dragged.state-layer-opacity": 0.16,
        "md.sys.state.pressed.state-layer-opacity": 0.1,
        "md.sys.state.focus.state-layer-opacity": 0.1,
        "md.sys.state.hover.state-layer-opacity": 0.08,
    };
}
