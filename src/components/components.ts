import { convertDpInTree } from "../util/dp";
import { buttonTokens } from "./tokens/buttonTokens";
import { appBarTokens } from "./tokens/appBarTokens";
import { badgeTokens } from "./tokens/badgeTokens";
import { buttonGroupTokens } from "./tokens/buttonGroupTokens";
import { fabTokens } from "./tokens/fabTokens";
import { extendedFabTokens } from "./tokens/extendedFabTokens";
import { fabMenuTokens } from "./tokens/fabMenuTokens";
import { iconButtonTokens } from "./tokens/iconButtonTokens";
import { splitButtonTokens } from "./tokens/splitButtonTokens";
import { cardTokens } from "./tokens/cardTokens";
import { carouselTokens } from "./tokens/carouselTokens";
import { checkboxTokens } from "./tokens/checkboxTokens";
import { chipTokens } from "./tokens/chipTokens";
import { datePickerTokens } from "./tokens/datePickerTokens";
import { timePickerTokens } from "./tokens/timePickerTokens";
import { dialogTokens } from "./tokens/dialogTokens";
import { dividerTokens } from "./tokens/dividerTokens";
import { listTokens } from "./tokens/listTokens";
import { loadingIndicatorTokens } from "./tokens/loadingIndicatorTokens";
import { progressIndicatorTokens } from "./tokens/progressIndicatorTokens";
import { menuTokens } from "./tokens/menuTokens";
import { navigationBarTokens } from "./tokens/navigationBarTokens";
import { navigationRailTokens } from "./tokens/navigationRailTokens";
import { radioButtonTokens } from "./tokens/radioButtonTokens";
import { searchTokens } from "./tokens/searchTokens";
import { bottomSheetTokens } from "./tokens/bottomSheetTokens";
import { sideSheetTokens } from "./tokens/sideSheetTokens";
import { sliderTokens } from "./tokens/sliderTokens";
import { snackbarTokens } from "./tokens/snackbarTokens";
import { switchTokens } from "./tokens/switchTokens";
import { tabsTokens } from "./tokens/tabsTokens";
import { textFieldTokens } from "./tokens/textFieldTokens";
import { toolbarTokens } from "./tokens/toolbarTokens";
import { tooltipTokens } from "./tokens/tooltipTokens";

const COMPONENT_TOKENS: Array<{
    name: string;
    value: Record<string, string | number>;
}> = [
    { name: "button", value: buttonTokens },
    { name: "app-bar", value: appBarTokens },
    { name: "badge", value: badgeTokens },
    { name: "button-group", value: buttonGroupTokens },
    { name: "fab", value: fabTokens },
    { name: "extended-fab", value: extendedFabTokens },
    { name: "fab-menu", value: fabMenuTokens },
    { name: "icon-button", value: iconButtonTokens },
    { name: "split-button", value: splitButtonTokens },
    { name: "card", value: cardTokens },
    { name: "carousel", value: carouselTokens },
    { name: "checkbox", value: checkboxTokens },
    { name: "chip", value: chipTokens },
    { name: "date-picker", value: datePickerTokens },
    { name: "time-picker", value: timePickerTokens },
    { name: "dialog", value: dialogTokens },
    { name: "divider", value: dividerTokens },
    { name: "list", value: listTokens },
    { name: "loading-indicator", value: loadingIndicatorTokens },
    { name: "progress-indicator", value: progressIndicatorTokens },
    { name: "menu", value: menuTokens },
    { name: "navigation-bar", value: navigationBarTokens },
    { name: "navigation-rail", value: navigationRailTokens },
    { name: "radio-button", value: radioButtonTokens },
    { name: "search", value: searchTokens },
    { name: "bottom-sheet", value: bottomSheetTokens },
    { name: "side-sheet", value: sideSheetTokens },
    { name: "slider", value: sliderTokens },
    { name: "snackbar", value: snackbarTokens },
    { name: "switch", value: switchTokens },
    { name: "tabs", value: tabsTokens },
    { name: "text-field", value: textFieldTokens },
    { name: "toolbar", value: toolbarTokens },
    { name: "tooltip", value: tooltipTokens },
];

/**
 * Options for generating component tokens.
 */
export interface GenerateComponentTokensOptions {
    /**
     * Array of component types to exclude from generation.
     * If omitted, all available component types are generated.
     */
    excludes?: string[];

    /**
     * When true, walk the returned bundle and convert any string segments tagged
     * with `dp` (e.g., `"12dp"` or `"16dp 0 16dp 0"`) into `rem`/`px` using
     * the conversion options.
     * Numbers and non-`dp` strings are left untouched.
     * @default true
     */
    webUnits?: boolean;

    /**
     * Device-independent pixel ratio for the web conversion.
     * Set to `1` for the "1dp = 1px" convention on web.
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
 * Generate component tokens from component token files.
 *
 * - Merges all token objects for each component type into a single flat object.
 * - If `webUnits` is `true` (default), any `...dp` substrings across the bundle are converted
 *   to `rem`/`px` using the conversion options.
 * - Use the `excludes` option to exclude specific component types.
 *
 * @example Basic usage (generates all component tokens, converts dp to rem by default)
 * ```ts
 * import { generateComponentTokens } from "@makmn1/material-design-token-gen/components";
 * const tokens = generateComponentTokens();
 * // { button: { "md.comp.button.container.color": "md.sys.color.primary", ... } }
 * ```
 *
 * @example Exclude specific component types
 * ```ts
 * const tokens = generateComponentTokens({ excludes: ["button"] });
 * // {}
 * ```
 *
 * @example With custom web unit conversion
 * ```ts
 * const tokens = generateComponentTokens({
 *   webUnits: true,
 *   unit: "px"
 * });
 * ```
 */
export function generateComponentTokens(
    options: GenerateComponentTokensOptions = {},
): Record<string, Record<string, string | number>> {
    const {
        excludes = [],
        webUnits = true,
        dpPxRatio = 1,
        unit = "rem",
    } = options;

    const filtered = COMPONENT_TOKENS.filter(
        (entry) => !excludes.includes(entry.name),
    );

    const converted = webUnits
        ? filtered.map((entry) => ({
              name: entry.name,
              value: convertDpInTree(entry.value, {
                  dpPxRatio,
                  unit,
              }) as Record<string, string | number>,
          }))
        : filtered;

    const result = converted.reduce(
        (acc, entry) => {
            acc[entry.name] = entry.value;
            return acc;
        },
        {} as Record<string, Record<string, string | number>>,
    );

    return result;
}
