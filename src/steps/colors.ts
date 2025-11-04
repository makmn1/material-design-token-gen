import {
    DynamicScheme,
    Variant,
    SpecVersion,
    MaterialDynamicColors,
} from "@materialx/material-color-utilities";
import { hexFromArgb } from "@materialx/material-color-utilities/utils";


/**
 * Generate Material System **color** tokens from a Material Color Utilities `DynamicScheme`.
 *
 * Keys follow the `md.sys.color.*` naming (e.g., `md.sys.color.primary`, `md.sys.color.surface`).
 * Values are hex color strings (e.g., `#6750a4`).
 *
 * @param scheme A `DynamicScheme` instance (from `@materialx/material-color-utilities`).
 *
 * @returns Record of color tokens to hex values.
 *
 * @example
 * ```ts
 * import { DynamicScheme, Variant, SpecVersion } from "@materialx/material-color-utilities";
 * import { generateColorTokens } from "@makmn1/material-design-token-gen";
 *
 * const scheme = DynamicScheme.from({
 *   isDark: false,
 *   variant: Variant.EXPRESSIVE,
 *   specVersion: SpecVersion.SPEC_2025,
 * });
 *
 * const colors = generateColorTokens(scheme);
 * console.log(colors["md.sys.color.primary"]); // "#6750a4"
 * ```
 */
export function generateColorTokens(scheme?: DynamicScheme): Record<string, string> {
    const s =
        scheme ??
        DynamicScheme.from({
            isDark: false,
            variant: Variant.EXPRESSIVE,
            specVersion: SpecVersion.SPEC_2025,
        });

    const MDC = new MaterialDynamicColors();
    const out: Record<string, string> = {};

    for (const dc of MDC.allDynamicColors) {
        const name = `md.sys.color.${toTokenKey(dc.name)}`;
        out[name] = hexFromArgb(dc.getArgb(s));
    }

    return out;
}

/**
 * Convert role names like `on_primary` or `primaryContainer` to kebab case.
 * Source: https://m3.material.io/styles/color/static/baseline
 */
function toTokenKey(name: string): string {
    return name
        .replace(/_/g, "-")
        .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
        .toLowerCase();
}