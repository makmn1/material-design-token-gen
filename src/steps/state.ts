import { DpConvertOptions, convertDpString } from "../util/dp";

/**
 * Configuration options for defining state styles used in {@link generateStateTokens}.
 */
export type StateOptions = {

    /**
     * When true, convert `...dp` strings to web units.
     * Unlike `dp` units, web units can be used in CSS.
     * For configuring the type of web unit, see {@link unit}.
     *
     * @default true
     */
    webUnits?: boolean;

    /**
     * Output unit for `dp` conversion. Used if {@link webUnits} is true. 1rem = 16px.
     * @default "rem"
     */
    unit?: "rem" | "px";
}

/**
 * Generate **state-layer** tokens (opacities used for hover/focus/pressed/dragged)
 * and focus-indicator tokens (thickness, inner-offset, and outer-offset).
 *
 * Values are:
 * - Percentage strings for opacities (e.g., `'8%'` for hover)
 * - `...dp` strings for focus-indicator dimensions (e.g., `"3dp"`, `"2dp"`),
 *   which are converted to web units if `webUnits` is true.
 *
 * Keys:
 *  - `md.sys.state.hover.state-layer-opacity`
 *  - `md.sys.state.focus.state-layer-opacity`
 *  - `md.sys.state.pressed.state-layer-opacity`
 *  - `md.sys.state.dragged.state-layer-opacity`
 *  - `md.sys.state.focus-indicator.thickness`
 *  - `md.sys.state.focus-indicator.inner-offset`
 *  - `md.sys.state.focus-indicator.outer-offset`
 *
 * @example
 * ```ts
 * import { generateStateTokens } from "@makmn1/material-design-token-gen";
 * const state = generateStateTokens();
 * // state["md.sys.state.dragged.state-layer-opacity"] === "16%"
 * // state["md.sys.state.focus-indicator.thickness"] === "3dp" (if webUnits is false)
 * // state["md.sys.state.focus-indicator.thickness"] === "0.2143rem" (if webUnits is true)
 * ```
 */
export function generateStateTokens(opts: StateOptions = {}): Record<string, number | string> {
    const {
        webUnits = true,
        unit = "rem"
    } = opts;

    const tokens: Record<string, number | string> = {
        "md.sys.state.dragged.state-layer-opacity": "16%",
        "md.sys.state.pressed.state-layer-opacity": "10%",
        "md.sys.state.focus.state-layer-opacity": "10%",
        "md.sys.state.hover.state-layer-opacity": "8%",
        "md.sys.state.focus-indicator.thickness": "3dp",
        "md.sys.state.focus-indicator.inner-offset": "-3dp",
        "md.sys.state.focus-indicator.outer-offset": "2dp",
    };

    if (webUnits) {
        const dpOptions: DpConvertOptions = { unit };
        const converted: Record<string, number | string> = {};
        for (const [key, value] of Object.entries(tokens)) {
            if (typeof value === "number") {
                converted[key] = value;
            } else if (typeof value === "string" && value.endsWith("dp")) {
                converted[key] = convertDpString(value, dpOptions);
            } else {
                // Preserve percentage strings and other non-dp strings
                converted[key] = value;
            }
        }
        return converted;
    }

    return tokens;
}
