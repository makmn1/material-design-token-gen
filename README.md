Generate Material-style tokens (color, elevation, motion, shape, typography, state) as an object.

There's currently no official or community maintained way to get all the current Material Design 3 baseline
and expressive tokens. Building it manually is cumbersome since they're scattered around the Material Design
website and not a simple copy and paste. Each token here was manually added. This library includes utilities
for:

- Exporting the complete token set as an object to be used in CSS files
- Exporting a subset of the complete token set (e.g. colors or typography only)
- Changing the root font size pixels, the dp to px ratio, or the unit of measurement (e.g. px vs. rem)
- Exporting a color set based on a specific theme, making dynamic theme switching easier with native CSS

## Install
```sh
npm i @makmn1/material-design-token-gen @materialx/material-color-utilities
```

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
  convertDpInTree,
} from "@makmn1/material-design-token-gen";
```

Most users can use `generateTokens` which executes all the steps and handles conversions through a configuration options
object. For users with more specific needs or who want to generate a subset of tokens, those utilities are available.