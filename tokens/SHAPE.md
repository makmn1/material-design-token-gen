# Shape Tokens
[Source](https://m3.material.io/styles/shape/corner-radius-scale)

## Shape Corner Tokens
| Token                                     | Value         |
|-------------------------------------------|---------------|
| md.sys.shape.corner.full                  | Circular      |
| md.sys.shape.corner.extra-large.top       | 28dp 28dp 0 0 |
| md.sys.shape.corner.extra-large           | 28dp          |
| md.sys.shape.corner.large.top             | 16dp 16dp 0 0 |
| md.sys.shape.corner.large.end             | 0 16dp 16dp 0 |
| md.sys.shape.corner.large.start           | 16dp 0 0 16dp |
| md.sys.shape.corner.large                 | 16dp          |
| md.sys.shape.corner.medium                | 12dp          |
| md.sys.shape.corner.small                 | 8dp           |
| md.sys.shape.corner.extra-small.top       | 4dp 4dp 0 0   |
| md.sys.shape.corner.extra-small           | 4dp           |
| md.sys.shape.corner.none                  | 0             |
| md.sys.shape.corner.large-increased       | 20dp          |
| md.sys.shape.corner.extra-large-increased | 32dp          |
| md.sys.shape.corner.extra-extra-large     | 48dp          |

## Shape Corner Value Tokens
| Token                                           | Value |
|-------------------------------------------------|-------|
| md.sys.shape.corner-value.none                  | 0     |
| md.sys.shape.corner-value.extra-small           | 4dp   |
| md.sys.shape.corner-value.small                 | 8dp   |
| md.sys.shape.corner-value.medium                | 12dp  |
| md.sys.shape.corner-value.large                 | 16dp  |
| md.sys.shape.corner-value.large-increased       | 20dp  |
| md.sys.shape.corner-value.extra-large           | 28dp  |
| md.sys.shape.corner-value.extra-large-increased | 32dp  |
| md.sys.shape.corner-value.extra-extra-large     | 48dp  |

## What about Shape morph?
[From the spec:](https://m3.material.io/styles/shape/shape-morph)

> The Material shape library supports easy transitioning, or morphing, between shapes. Shape morph is leveraged in the  standard button group and loading indicator components.

> Access to the Material shape library and the shape morph functionality are available through a platform-specific API.

> For Android, use the Shapes in Compose API
Web is not currently available
Shape morphing uses the expressive motion scheme by default. This can be switched to the standard motion scheme as needed.

Because Web is not supported, we'll need to implement the shape morph functionality ourselves.
To accomplish this, we'll do the following:
1. Copy each shape from the Material shape library and create it as an SVG
2. Use GSAP with the [MorphSVG plugin](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/) to morph between SVGs
3. When necessary, animate the morph using CSS (e.g. spin while morphing for the loading indicator)

Note: As of April 2025, GSAP (and all of its plugins) is now [completely free](https://gsap.com/pricing/) since being acquired by Webflow
