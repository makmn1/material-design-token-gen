Generate [Material Design tokens](https://m3.material.io/foundations/design-tokens/overview) (color, elevation, motion, shape, typography, state, component tokens) as either
a JavaScript object or CSS files for use in your application.

There's currently no official or community-maintained way to get all the current Material Design 3 baseline
and expressive tokens. This package aims to fill that gap. You can use its CLI for one-time style generation
or import it into your application for swapping CSS variables at runtime (or generating and storing them in a database).

## Features
- Exporting the complete token set as an object to be used in CSS files
- Support for all modern Material Design 3 tokens (colors, elevation, motion, shape, typography, state)
- Exporting a subset of the complete token set (e.g., colors or typography only)
- Changing the output unit of measurement (e.g., px or rem)
- Exporting a color set based on a specific theme, making dynamic theme switching easier with native CSS

> [!IMPORTANT]
> This package is in its early stages. 
> If you run into any problems or want to add something, please do not hesitate to open an issue.

## Install
### Local
```shell
npm install @makmn1/material-design-token-gen
```

### CLI-Only Usage
If you only want to use the CLI, you can install the package globally or one-time

```shell
# Global install / update (always update to the latest version for bug fixes)
npm install -g @makmn1/material-design-token-gen

# Check current version
npm list -g @makmn1/material-design-token-gen

# One-time
npx -y -p @makmn1/material-design-token-gen [COMMAND] # See CLI Usage section for available commands
```

## CLI Usage

This package includes an interactive CLI to generate Material Design token CSS files
to quickly use in your application.

### Full Scaffold (All Tokens)

Generate all token sets (colors, typography, elevation, motion, shape, state) with full customization options:

```sh
# Run without installing
npx -y -p @makmn1/material-design-token-gen scaffold-material-tokens

# Or if installed locally
npx scaffold-material-tokens

# Or if installed globally
scaffold-material-tokens
```

This command will:
1. Ask if you want customizations (or generate defaults)
2. Prompt for animation token variant (Expressive 2025 or Legacy 2021)
3. Ask about typography customization (fonts, sizes, weights)
4. Collect color theme preferences (primary color, variant, mode, etc.)
5. Ask for output directory (default: `src/styles/simply-material`)

### Color Theme Only

Generate only color token CSS files:

```sh
# Run without installing
npx -y -p @makmn1/material-design-token-gen create-material-theme-tokens

# Or if installed locally
npx create-material-theme-tokens

# Or if installed globally
create-material-theme-tokens
```

This command will:
1. Collect color theme preferences (primary color, variant, mode, etc.)
2. Ask for output directory (default: `src/styles/simply-material`)

### Programmatic Usage

You can also use the CLI programmatically with `generateFiles: false` to get file descriptors instead of writing files:

```ts
import { promptScaffold, generateFromScaffold } from "@makmn1/material-design-token-gen/cli";
import { promptColorTheme, generateFromThemeColor } from "@makmn1/material-design-token-gen/cli";

// Scaffold flow
const answers = await promptScaffold();
const files = await generateFromScaffold(answers, { generateFiles: false });
// files is an array of { path: string, content: string }

// Theme color flow
const colorAnswers = await promptColorTheme();
const colorFiles = await generateFromThemeColor(
  { colorTheme: colorAnswers, outputPath: "src/styles" },
  { generateFiles: false }
);
```

### Generated Files

The CLI generates the following CSS files:

- **Colors**: `colors.light.css`, `colors.dark.css` (depending on selected mode)
- **Typography**: `typography.css`
- **Elevation**: `elevation.css`
- **Motion**: `motion.css`
- **Shape**: `shape.css`
- **State**: `state.css`
- **Consolidated**: `tokens.css` (imports all generated files)

All files use CSS variables and are organized in a `@layer tokens` for easy integration with your stylesheets.


### Importing

```ts
// Default: all token steps at once
import generateTokens from "@makmn1/material-design-token-gen";

// Named: pick specific steps/utilities
import {
  generateTokens,
  generateColorTokens,
  generateShapeTokens,
  generateTypographyTokens,
  generateMotionTokens,
  generateElevationTokens,
  generateStateTokens,
  generateComponentTokens
} from "@makmn1/material-design-token-gen";
```

For the base tokens, most users can use `generateTokens` which executes all the steps and handles conversions through a
configuration options object. For users with more specific needs or who want to generate a subset of tokens, those 
utilities are available.

For component tokens, you can use `generateComponentTokens` to generate tokens for each component 
(or filter out components you don't want).

### What theme variant does Angular Material use? What theme variant should I use?
If you're coming from Angular Material, you might be confused to see a variant option here.
That's because Angular Material does not expose this as an option and instead chooses it for you.

Before October 2024, Angular Material's [ng-generate m3-theme](https://github.com/angular/components/blob/a58e6f6711af48f7106ed675b4b996c41899a0be/src/material/schematics/ng-generate/m3-theme/index.ts#L58) schematic used the [SchemeContent](https://github.com/material-foundation/material-color-utilities/blob/691c9e34a997612718f892a8c99aefab1b8b4b21/typescript/scheme/scheme_content.ts#L38) class to generate a theme.
By default, that class chooses the **CONTENT** variant.

Since October 2024, Angular has added the [ng generate create-material-theme-tokens](https://github.com/angular/components/blob/969a9abcc878cec760a3cea2f01d0a18aad72e50/src/material/schematics/ng-generate/create-material-theme-tokens/index.ts#L94)
schematic which chooses the **FIDELITY** variant.

Note that there is an **EXPRESSIVE** variant available which you can find [here;](https://github.com/material-foundation/material-color-utilities/blob/691c9e34a997612718f892a8c99aefab1b8b4b21/typescript/dynamiccolor/variant.ts#L28)
However, it is NOT related to the Material Design Expressive 2025 update. That variant was introduced in 2022.
The 2025 Expressive update didn't add new variants; it added a new color spec used by the current variants.
This new spec results in these variants having more saturated colors and removes the pastel-like colors most are familiar
with when using Material Design themes.

Struggling to decide? Visit [MaterialKolor Builder](https://materialkolor.com/?color_seed=FF68A500&dark_mode=true&selected_preset_id=res-0&package_name=com.example.app)
to view different themes with different variants for either the 2021 or the 2025 color spec. Note that its description
on the Material Expressive 3 color system is misleading--you don't need to set the variant to expressive for your color system
to be "expressive." It's considered expressive by using the 2025 color spec version.

## Contributing Tips
To view the generated files after making any changes, run `npm run build` and then any of the CLI commands using:

`npm exec ACTION` where `ACTION` is any key in the `bin` object in `package.json`.
