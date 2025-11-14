import { DpConvertOptions, convertDpString } from "../util/dp";

export interface StateOptions {
    /**
     * When true, convert `...dp` strings to web units (`rem` or `px`).
     * @default true
     */
    webUnits?: boolean;
    /**
     * Device-independent pixel ratio for the web conversion.
     * @default 1
     */
    dpPxRatio?: number;
    /**
     * Output unit for `dp` conversion.
     * @default "rem"
     */
    unit?: "rem" | "px";
}

/**
 * Generate **state-layer** tokens (opacities used for hover/focus/pressed/dragged)
 * and focus-indicator tokens (thickness and outer-offset).
 *
 * Values are:
 * - Numeric fractions in `[0, 1]` for opacities (e.g., `0.08` for hover)
 * - `...dp` strings for focus-indicator dimensions (e.g., `"3dp"`, `"2dp"`),
 *   which are converted to web units if `webUnits` is true.
 *
 * Keys:
 *  - `md.sys.state.hover.state-layer-opacity`
 *  - `md.sys.state.focus.state-layer-opacity`
 *  - `md.sys.state.pressed.state-layer-opacity`
 *  - `md.sys.state.dragged.state-layer-opacity`
 *  - `md.sys.state.focus-indicator.thickness`
 *  - `md.sys.state.focus-indicator.outer-offset`
 *
 * @example
 * ```ts
 * import { generateStateTokens } from "@makmn1/material-design-token-gen";
 * const state = generateStateTokens();
 * // state["md.sys.state.dragged.state-layer-opacity"] === 0.16
 * // state["md.sys.state.focus-indicator.thickness"] === "3dp" (if webUnits is false)
 * // state["md.sys.state.focus-indicator.thickness"] === "0.2143rem" (if webUnits is true)
 * ```
 */
export function generateStateTokens(opts: StateOptions = {}): Record<string, number | string> {
    const {
        webUnits = true,
        dpPxRatio = 1,
        unit = "rem"
    } = opts;

    const tokens: Record<string, number | string> = {
        "md.sys.state.dragged.state-layer-opacity": 0.16,
        "md.sys.state.pressed.state-layer-opacity": 0.1,
        "md.sys.state.focus.state-layer-opacity": 0.1,
        "md.sys.state.hover.state-layer-opacity": 0.08,
        "md.sys.state.focus-indicator.thickness": "3dp",
        "md.sys.state.focus-indicator.outer-offset": "2dp",
    };

    if (webUnits) {
        const dpOptions: DpConvertOptions = { dpPxRatio, unit };
        const converted: Record<string, number | string> = {};
        for (const [key, value] of Object.entries(tokens)) {
            if (typeof value === "number") {
                converted[key] = value;
            } else if (typeof value === "string" && value.endsWith("dp")) {
                converted[key] = convertDpString(value, dpOptions);
            } else {
                converted[key] = value;
            }
        }
        return converted;
    }

    return tokens;
}
