# Typography Tokens
[From the spec:](https://m3.material.io/styles/typography/type-scale-tokens)

> Material 3 has one **type scale** containing two sets of **type styles: 15 baseline** and **15 emphasized**. Both of these style sets follow the same scale from Display Large to Label Small.

> The emphasized styles were added in the expressive update. They have a higher weight and other minor adjustments compared to the baseline styles, and are best applied to bold, selection, and other areas of emphasis. Baseline and emphasized styles are meant to be used together.

## Brand and Plain Typeface Tokens
> The M3 type scale has the option to set different typefaces at different sizes.
>
> The brand typeface is used for larger type styles, like Headline and Display, to focus on expression.
>
> The plain typeface is used for smaller type styles, like Body and Label, to focus on readability.
>
> Roboto is the default for both typefaces.
>
> Consider replacing Roboto with different typefaces to boost brand expression in your product. On emphasized styles, this can help important text stand out even more.

[Source](https://m3.material.io/styles/typography/type-scale-tokens#05c10282-72a7-49b1-9032-1087d0095d40)

### Brand
Note: brand is used for display, headline, and title font types while plain is used for body and label font types

| Token                 | Default Value |
|-----------------------|---------------|
| md.ref.typeface.brand | Roboto        |
| md.ref.typeface.plain | Roboto        |

### Plain
| Token                  | Default Value |
|------------------------|---------------|
| md.ref.typeface.plain  | Roboto        |

### Weight
| Token                          | Value |
|--------------------------------|-------|
| md.ref.typeface.weight-regular | 400   |
| md.ref.typeface.weight-medium  | 500   |
| md.ref.typeface.weight-bold    | 700   |

## Display

### Display Large System Tokens
| Token                                      | Value                          |
|--------------------------------------------|--------------------------------|
| md.sys.typescale.display-large             | Display Large                  |
| md.sys.typescale.display-large.font        | md.ref.typeface.brand          |
| md.sys.typescale.display-large.weight      | md.ref.typeface.weight-regular |
| md.sys.typescale.display-large.size        | 57pt                           |
| md.sys.typescale.display-large.tracking    | -0.25pt                        |
| md.sys.typescale.display-large.line-height | 64pt                           |
| md.sys.typescale.display-large.wght        | 400                            |
| md.sys.typescale.display-large.grad        | 0                              |
| md.sys.typescale.display-large.wdth        | 100                            |
| md.sys.typescale.display-large.rond        | 0                              |
| md.sys.typescale.display-large.opsz        | 57                             |
| md.sys.typescale.display-large.crsv        | 0                              |
| md.sys.typescale.display-large.slnt        | 0                              |
| md.sys.typescale.display-large.fill        | 0                              |
| md.sys.typescale.display-large.hexp        | 0                              |

### Display Large Properties
| Property      | Value                                      |
|---------------|--------------------------------------------|
| Font Style    | md.sys.typescale.display-large             |
| Font Name     | md.sys.typescale.display-large.font        |
| Font Weight   | md.sys.typescale.display-large.weight      |
| Font Size     | md.sys.typescale.display-large.size        |
| Line Height   | md.sys.typescale.display-large.line-height |
| Font Tracking | md.sys.typescale.display-large.tracking    |

### Display Medium System Tokens
| Token                                       | Value                          |
|---------------------------------------------|--------------------------------|
| md.sys.typescale.display-medium             | Display Medium                 |
| md.sys.typescale.display-medium.font        | md.ref.typeface.brand          |
| md.sys.typescale.display-medium.weight      | md.ref.typeface.weight-regular |
| md.sys.typescale.display-medium.size        | 45pt                           |
| md.sys.typescale.display-medium.tracking    | 0                              |
| md.sys.typescale.display-medium.line-height | 52pt                           |
| md.sys.typescale.display-medium.wght        | 400                            |
| md.sys.typescale.display-medium.grad        | 0                              |
| md.sys.typescale.display-medium.wdth        | 100                            |
| md.sys.typescale.display-medium.rond        | 0                              |
| md.sys.typescale.display-medium.opsz        | 45                             |
| md.sys.typescale.display-medium.crsv        | 0                              |
| md.sys.typescale.display-medium.slnt        | 0                              |
| md.sys.typescale.display-medium.fill        | 0                              |
| md.sys.typescale.display-medium.hexp        | 0                              |

### Display Medium Properties
| Property      | Value                                       |
|---------------|---------------------------------------------|
| Font Style    | md.sys.typescale.display-medium             |
| Font Name     | md.sys.typescale.display-medium.font        |
| Font Weight   | md.sys.typescale.display-medium.weight      |
| Font Size     | md.sys.typescale.display-medium.size        |
| Line Height   | md.sys.typescale.display-medium.line-height |
| Font Tracking | md.sys.typescale.display-medium.tracking    |

### Display Small System Tokens
| Token                                      | Value                          |
|--------------------------------------------|--------------------------------|
| md.sys.typescale.display-small             | Display Small                  |
| md.sys.typescale.display-small.font        | md.ref.typeface.brand          |
| md.sys.typescale.display-small.weight      | md.ref.typeface.weight-regular |
| md.sys.typescale.display-small.size        | 36pt                           |
| md.sys.typescale.display-small.tracking    | 0                              |
| md.sys.typescale.display-small.line-height | 44pt                           |
| md.sys.typescale.display-small.wght        | 400                            |
| md.sys.typescale.display-small.grad        | 0                              |
| md.sys.typescale.display-small.wdth        | 100                            |
| md.sys.typescale.display-small.rond        | 0                              |
| md.sys.typescale.display-small.opsz        | 36                             |
| md.sys.typescale.display-small.crsv        | 0                              |
| md.sys.typescale.display-small.slnt        | 0                              |
| md.sys.typescale.display-small.fill        | 0                              |
| md.sys.typescale.display-small.hexp        | 0                              |

### Display Small Properties
| Property      | Value                                      |
|---------------|--------------------------------------------|
| Font Style    | md.sys.typescale.display-small             |
| Font Name     | md.sys.typescale.display-small.font        |
| Font Weight   | md.sys.typescale.display-small.weight      |
| Font Size     | md.sys.typescale.display-small.size        |
| Line Height   | md.sys.typescale.display-small.line-height |
| Font Tracking | md.sys.typescale.display-small.tracking    |

## Headline
### Headline Large System Tokens
| Token                                       | Value                          |
|---------------------------------------------|--------------------------------|
| md.sys.typescale.headline-large             | Headline Large                 |
| md.sys.typescale.headline-large.font        | md.ref.typeface.brand          |
| md.sys.typescale.headline-large.weight      | md.ref.typeface.weight-regular |
| md.sys.typescale.headline-large.size        | 32pt                           |
| md.sys.typescale.headline-large.tracking    | 0                              |
| md.sys.typescale.headline-large.line-height | 40pt                           |
| md.sys.typescale.headline-large.wght        | 400                            |
| md.sys.typescale.headline-large.grad        | 0                              |
| md.sys.typescale.headline-large.wdth        | 100                            |
| md.sys.typescale.headline-large.rond        | 0                              |
| md.sys.typescale.headline-large.opsz        | 32                             |
| md.sys.typescale.headline-large.crsv        | 0                              |
| md.sys.typescale.headline-large.slnt        | 0                              |
| md.sys.typescale.headline-large.fill        | 0                              |
| md.sys.typescale.headline-large.hexp        | 0                              |

### Headline Large Properties
| Property      | Value                                       |
|---------------|---------------------------------------------|
| Font Style    | md.sys.typescale.headline-large             |
| Font Name     | md.sys.typescale.headline-large.font        |
| Font Weight   | md.sys.typescale.headline-large.weight      |
| Font Size     | md.sys.typescale.headline-large.size        |
| Line Height   | md.sys.typescale.headline-large.line-height |
| Font Tracking | md.sys.typescale.headline-large.tracking    |

### Headline Medium System Tokens
| Token                                        | Value                          |
|----------------------------------------------|--------------------------------|
| md.sys.typescale.headline-medium             | Headline Medium                |
| md.sys.typescale.headline-medium.font        | md.ref.typeface.brand          |
| md.sys.typescale.headline-medium.weight      | md.ref.typeface.weight-regular |
| md.sys.typescale.headline-medium.size        | 28pt                           |
| md.sys.typescale.headline-medium.tracking    | 0                              |
| md.sys.typescale.headline-medium.line-height | 36pt                           |
| md.sys.typescale.headline-medium.wght        | 400                            |
| md.sys.typescale.headline-medium.grad        | 0                              |
| md.sys.typescale.headline-medium.wdth        | 100                            |
| md.sys.typescale.headline-medium.rond        | 0                              |
| md.sys.typescale.headline-medium.opsz        | 28                             |
| md.sys.typescale.headline-medium.crsv        | 0                              |
| md.sys.typescale.headline-medium.slnt        | 0                              |
| md.sys.typescale.headline-medium.fill        | 0                              |
| md.sys.typescale.headline-medium.hexp        | 0                              |

### Headline Medium Properties
| Property      | Value                                        |
|---------------|----------------------------------------------|
| Font Style    | md.sys.typescale.headline-medium             |
| Font Name     | md.sys.typescale.headline-medium.font        |
| Font Weight   | md.sys.typescale.headline-medium.weight      |
| Font Size     | md.sys.typescale.headline-medium.size        |
| Line Height   | md.sys.typescale.headline-medium.line-height |
| Font Tracking | md.sys.typescale.headline-medium.tracking    |

### Headline Small System Tokens
| Token                                       | Value                          |
|---------------------------------------------|--------------------------------|
| md.sys.typescale.headline-small             | Headline Small                 |
| md.sys.typescale.headline-small.font        | md.ref.typeface.brand          |
| md.sys.typescale.headline-small.weight      | md.ref.typeface.weight-regular |
| md.sys.typescale.headline-small.size        | 24pt                           |
| md.sys.typescale.headline-small.tracking    | 0                              |
| md.sys.typescale.headline-small.line-height | 32pt                           |
| md.sys.typescale.headline-small.wght        | 400                            |
| md.sys.typescale.headline-small.grad        | 0                              |
| md.sys.typescale.headline-small.wdth        | 100                            |
| md.sys.typescale.headline-small.rond        | 0                              |
| md.sys.typescale.headline-small.opsz        | 24                             |
| md.sys.typescale.headline-small.crsv        | 0                              |
| md.sys.typescale.headline-small.slnt        | 0                              |
| md.sys.typescale.headline-small.fill        | 0                              |
| md.sys.typescale.headline-small.hexp        | 0                              |

### Headline Small Properties
| Property      | Value                                       |
|---------------|---------------------------------------------|
| Font Style    | md.sys.typescale.headline-small             |
| Font Name     | md.sys.typescale.headline-small.font        |
| Font Weight   | md.sys.typescale.headline-small.weight      |
| Font Size     | md.sys.typescale.headline-small.size        |
| Line Height   | md.sys.typescale.headline-small.line-height |
| Font Tracking | md.sys.typescale.headline-small.tracking    |

## Title
### Title Large System Tokens
| Token                                    | Value                          |
|------------------------------------------|--------------------------------|
| md.sys.typescale.title-large             | Title Large                    |
| md.sys.typescale.title-large.font        | md.ref.typeface.brand          |
| md.sys.typescale.title-large.weight      | md.ref.typeface.weight-regular |
| md.sys.typescale.title-large.size        | 22pt                           |
| md.sys.typescale.title-large.tracking    | 0                              |
| md.sys.typescale.title-large.line-height | 28pt                           |
| md.sys.typescale.title-large.wght        | 400                            |
| md.sys.typescale.title-large.grad        | 0                              |
| md.sys.typescale.title-large.wdth        | 100                            |
| md.sys.typescale.title-large.rond        | 0                              |
| md.sys.typescale.title-large.opsz        | 22                             |
| md.sys.typescale.title-large.crsv        | 0                              |
| md.sys.typescale.title-large.slnt        | 0                              |
| md.sys.typescale.title-large.fill        | 0                              |
| md.sys.typescale.title-large.hexp        | 0                              |

### Title Large Properties
| Property      | Value                                    |
|---------------|------------------------------------------|
| Font Style    | md.sys.typescale.title-large             |
| Font Name     | md.sys.typescale.title-large.font        |
| Font Weight   | md.sys.typescale.title-large.weight      |
| Font Size     | md.sys.typescale.title-large.size        |
| Line Height   | md.sys.typescale.title-large.line-height |
| Font Tracking | md.sys.typescale.title-large.tracking    |

### Title Medium System Tokens
| Token                                     | Value                         |
|-------------------------------------------|-------------------------------|
| md.sys.typescale.title-medium             | Title Medium                  |
| md.sys.typescale.title-medium.font        | md.ref.typeface.brand         |
| md.sys.typescale.title-medium.weight      | md.ref.typeface.weight-medium |
| md.sys.typescale.title-medium.size        | 16pt                          |
| md.sys.typescale.title-medium.tracking    | 0.15pt                        |
| md.sys.typescale.title-medium.line-height | 24pt                          |
| md.sys.typescale.title-medium.wght        | 500                           |
| md.sys.typescale.title-medium.grad        | 0                             |
| md.sys.typescale.title-medium.wdth        | 100                           |
| md.sys.typescale.title-medium.rond        | 0                             |
| md.sys.typescale.title-medium.opsz        | 16                            |
| md.sys.typescale.title-medium.crsv        | 0                             |
| md.sys.typescale.title-medium.slnt        | 0                             |
| md.sys.typescale.title-medium.fill        | 0                             |
| md.sys.typescale.title-medium.hexp        | 0                             |

### Title Medium Properties
| Property      | Value                                     |
|---------------|-------------------------------------------|
| Font Style    | md.sys.typescale.title-medium             |
| Font Name     | md.sys.typescale.title-medium.font        |
| Font Weight   | md.sys.typescale.title-medium.weight      |
| Font Size     | md.sys.typescale.title-medium.size        |
| Line Height   | md.sys.typescale.title-medium.line-height |
| Font Tracking | md.sys.typescale.title-medium.tracking    |

### Title Small System Tokens
| Token                                    | Value                         |
|------------------------------------------|-------------------------------|
| md.sys.typescale.title-small             | Title Small                   |
| md.sys.typescale.title-small.font        | md.ref.typeface.brand         |
| md.sys.typescale.title-small.weight      | md.ref.typeface.weight-medium |
| md.sys.typescale.title-small.size        | 14pt                          |
| md.sys.typescale.title-small.tracking    | 0.1pt                         |
| md.sys.typescale.title-small.line-height | 20pt                          |
| md.sys.typescale.title-small.wght        | 500                           |
| md.sys.typescale.title-small.grad        | 0                             |
| md.sys.typescale.title-small.wdth        | 100                           |
| md.sys.typescale.title-small.rond        | 0                             |
| md.sys.typescale.title-small.opsz        | 14                            |
| md.sys.typescale.title-small.crsv        | 0                             |
| md.sys.typescale.title-small.slnt        | 0                             |
| md.sys.typescale.title-small.fill        | 0                             |
| md.sys.typescale.title-small.hexp        | 0                             |

### Title Small Properties
| Property      | Value                                    |
|---------------|------------------------------------------|
| Font Style    | md.sys.typescale.title-small             |
| Font Name     | md.sys.typescale.title-small.font        |
| Font Weight   | md.sys.typescale.title-small.weight      |
| Font Size     | md.sys.typescale.title-small.size        |
| Line Height   | md.sys.typescale.title-small.line-height |
| Font Tracking | md.sys.typescale.title-small.tracking    |

## Body
### Body Large System Tokens
| Token                                   | Value                          |
|-----------------------------------------|--------------------------------|
| md.sys.typescale.body-large             | Body Large                     |
| md.sys.typescale.body-large.font        | md.ref.typeface.plain          |
| md.sys.typescale.body-large.weight      | md.ref.typeface.weight-regular |
| md.sys.typescale.body-large.size        | 16pt                           |
| md.sys.typescale.body-large.tracking    | 0.5pt                          |
| md.sys.typescale.body-large.line-height | 24pt                           |
| md.sys.typescale.body-large.wght        | 400                            |
| md.sys.typescale.body-large.grad        | 0                              |
| md.sys.typescale.body-large.wdth        | 100                            |
| md.sys.typescale.body-large.rond        | 0                              |
| md.sys.typescale.body-large.opsz        | 16                             |
| md.sys.typescale.body-large.crsv        | 0                              |
| md.sys.typescale.body-large.slnt        | 0                              |
| md.sys.typescale.body-large.fill        | 0                              |
| md.sys.typescale.body-large.hexp        | 0                              |

### Body Large Properties
| Property      | Value                                   |
|---------------|-----------------------------------------|
| Font Style    | md.sys.typescale.body-large             |
| Font Name     | md.sys.typescale.body-large.font        |
| Font Weight   | md.sys.typescale.body-large.weight      |
| Font Size     | md.sys.typescale.body-large.size        |
| Line Height   | md.sys.typescale.body-large.line-height |
| Font Tracking | md.sys.typescale.body-large.tracking    |

### Body Medium System Tokens
| Token                                    | Value                          |
|------------------------------------------|--------------------------------|
| md.sys.typescale.body-medium             | Body Medium                    |
| md.sys.typescale.body-medium.font        | md.ref.typeface.plain          |
| md.sys.typescale.body-medium.weight      | md.ref.typeface.weight-regular |
| md.sys.typescale.body-medium.size        | 14pt                           |
| md.sys.typescale.body-medium.tracking    | 0.25pt                         |
| md.sys.typescale.body-medium.line-height | 20pt                           |
| md.sys.typescale.body-medium.wght        | 400                            |
| md.sys.typescale.body-medium.grad        | 0                              |
| md.sys.typescale.body-medium.wdth        | 100                            |
| md.sys.typescale.body-medium.rond        | 0                              |
| md.sys.typescale.body-medium.opsz        | 14                             |
| md.sys.typescale.body-medium.crsv        | 0                              |
| md.sys.typescale.body-medium.slnt        | 0                              |
| md.sys.typescale.body-medium.fill        | 0                              |
| md.sys.typescale.body-medium.hexp        | 0                              |

### Body Medium Properties
| Property      | Value                                    |
|---------------|------------------------------------------|
| Font Style    | md.sys.typescale.body-medium             |
| Font Name     | md.sys.typescale.body-medium.font        |
| Font Weight   | md.sys.typescale.body-medium.weight      |
| Font Size     | md.sys.typescale.body-medium.size        |
| Line Height   | md.sys.typescale.body-medium.line-height |
| Font Tracking | md.sys.typescale.body-medium.tracking    |

### Body Small System Tokens
| Token                                   | Value                          |
|-----------------------------------------|--------------------------------|
| md.sys.typescale.body-small             | Body Small                     |
| md.sys.typescale.body-small.font        | md.ref.typeface.plain          |
| md.sys.typescale.body-small.weight      | md.ref.typeface.weight-regular |
| md.sys.typescale.body-small.size        | 12pt                           |
| md.sys.typescale.body-small.tracking    | 0.4pt                          |
| md.sys.typescale.body-small.line-height | 16pt                           |
| md.sys.typescale.body-small.wght        | 400                            |
| md.sys.typescale.body-small.grad        | 0                              |
| md.sys.typescale.body-small.wdth        | 100                            |
| md.sys.typescale.body-small.rond        | 0                              |
| md.sys.typescale.body-small.opsz        | 12                             |
| md.sys.typescale.body-small.crsv        | 0                              |
| md.sys.typescale.body-small.slnt        | 0                              |
| md.sys.typescale.body-small.fill        | 0                              |
| md.sys.typescale.body-small.hexp        | 0                              |

### Body Small Properties
| Property      | Value                                   |
|---------------|-----------------------------------------|
| Font Style    | md.sys.typescale.body-small             |
| Font Name     | md.sys.typescale.body-small.font        |
| Font Weight   | md.sys.typescale.body-small.weight      |
| Font Size     | md.sys.typescale.body-small.size        |
| Line Height   | md.sys.typescale.body-small.line-height |
| Font Tracking | md.sys.typescale.body-small.tracking    |

## Label
Note: The prominent token is not recommended for use and therefore is not included in this section. Instead, use the expressive style.

### Label Large System Tokens
| Token                                    | Value                         |
|------------------------------------------|-------------------------------|
| md.sys.typescale.label-large             | Label Large                   |
| md.sys.typescale.label-large.font        | md.ref.typeface.plain         |
| md.sys.typescale.label-large.weight      | md.ref.typeface.weight-medium |
| md.sys.typescale.label-large.size        | 14pt                          |
| md.sys.typescale.label-large.tracking    | 0.1pt                         |
| md.sys.typescale.label-large.line-height | 20pt                          |
| md.sys.typescale.label-large.wght        | 500                           |
| md.sys.typescale.label-large.grad        | 0                             |
| md.sys.typescale.label-large.wdth        | 100                           |
| md.sys.typescale.label-large.rond        | 0                             |
| md.sys.typescale.label-large.opsz        | 14                            |
| md.sys.typescale.label-large.crsv        | 0                             |
| md.sys.typescale.label-large.slnt        | 0                             |
| md.sys.typescale.label-large.fill        | 0                             |
| md.sys.typescale.label-large.hexp        | 0                             |

### Label Large Properties
| Property      | Value                                    |
|---------------|------------------------------------------|
| Font Style    | md.sys.typescale.label-large             |
| Font Name     | md.sys.typescale.label-large.font        |
| Font Weight   | md.sys.typescale.label-large.weight      |
| Font Size     | md.sys.typescale.label-large.size        |
| Line Height   | md.sys.typescale.label-large.line-height |
| Font Tracking | md.sys.typescale.label-large.tracking    |

### Label Medium System Tokens
| Token                                     | Value                         |
|-------------------------------------------|-------------------------------|
| md.sys.typescale.label-medium             | Label Medium                  |
| md.sys.typescale.label-medium.font        | md.ref.typeface.plain         |
| md.sys.typescale.label-medium.weight      | md.ref.typeface.weight-medium |
| md.sys.typescale.label-medium.size        | 12pt                          |
| md.sys.typescale.label-medium.tracking    | 0.5pt                         |
| md.sys.typescale.label-medium.line-height | 16pt                          |
| md.sys.typescale.label-medium.wght        | 500                           |
| md.sys.typescale.label-medium.grad        | 0                             |
| md.sys.typescale.label-medium.wdth        | 100                           |
| md.sys.typescale.label-medium.rond        | 0                             |
| md.sys.typescale.label-medium.opsz        | 12                            |
| md.sys.typescale.label-medium.crsv        | 0                             |
| md.sys.typescale.label-medium.slnt        | 0                             |
| md.sys.typescale.label-medium.fill        | 0                             |
| md.sys.typescale.label-medium.hexp        | 0                             |

### Label Medium Properties
| Property      | Value                                     |
|---------------|-------------------------------------------|
| Font Style    | md.sys.typescale.label-medium             |
| Font Name     | md.sys.typescale.label-medium.font        |
| Font Weight   | md.sys.typescale.label-medium.weight      |
| Font Size     | md.sys.typescale.label-medium.size        |
| Line Height   | md.sys.typescale.label-medium.line-height |
| Font Tracking | md.sys.typescale.label-medium.tracking    |

### Label Small System Tokens
| Token                                    | Value                         |
|------------------------------------------|-------------------------------|
| md.sys.typescale.label-small             | Label Small                   |
| md.sys.typescale.label-small.font        | md.ref.typeface.plain         |
| md.sys.typescale.label-small.weight      | md.ref.typeface.weight-medium |
| md.sys.typescale.label-small.size        | 11pt                          |
| md.sys.typescale.label-small.tracking    | 0.5pt                         |
| md.sys.typescale.label-small.line-height | 16pt                          |
| md.sys.typescale.label-small.wght        | 500                           |
| md.sys.typescale.label-small.grad        | 0                             |
| md.sys.typescale.label-small.wdth        | 100                           |
| md.sys.typescale.label-small.rond        | 0                             |
| md.sys.typescale.label-small.opsz        | 11                            |
| md.sys.typescale.label-small.crsv        | 0                             |
| md.sys.typescale.label-small.slnt        | 0                             |
| md.sys.typescale.label-small.fill        | 0                             |
| md.sys.typescale.label-small.hexp        | 0                             |

### Label Small Properties
| Property      | Value                                    |
|---------------|------------------------------------------|
| Font Style    | md.sys.typescale.label-small             |
| Font Name     | md.sys.typescale.label-small.font        |
| Font Weight   | md.sys.typescale.label-small.weight      |
| Font Size     | md.sys.typescale.label-small.size        |
| Line Height   | md.sys.typescale.label-small.line-height |
| Font Tracking | md.sys.typescale.label-small.tracking    |

## Emphasized Display

### Emphasized Display Large System Tokens
| Token                                                 | Value                         |
|-------------------------------------------------------|-------------------------------|
| md.sys.typescale.emphasized.display-large             | Emphasized Display Large      |
| md.sys.typescale.emphasized.display-large.font        | md.ref.typeface.brand         |
| md.sys.typescale.emphasized.display-large.weight      | md.ref.typeface.weight-medium |
| md.sys.typescale.emphasized.display-large.size        | 57pt                          |
| md.sys.typescale.emphasized.display-large.tracking    | -0.25pt                       |
| md.sys.typescale.emphasized.display-large.line-height | 64pt                          |
| md.sys.typescale.emphasized.display-large.wght        | 500                           |
| md.sys.typescale.emphasized.display-large.grad        | 0                             |
| md.sys.typescale.emphasized.display-large.wdth        | 100                           |
| md.sys.typescale.emphasized.display-large.rond        | 0                             |
| md.sys.typescale.emphasized.display-large.opsz        | 57                            |
| md.sys.typescale.emphasized.display-large.crsv        | 0                             |
| md.sys.typescale.emphasized.display-large.slnt        | 0                             |
| md.sys.typescale.emphasized.display-large.fill        | 0                             |
| md.sys.typescale.emphasized.display-large.hexp        | 0                             |

### Emphasized Display Large Properties
| Property      | Value                                                 |
|---------------|-------------------------------------------------------|
| Font Style    | md.sys.typescale.emphasized.display-large             |
| Font Name     | md.sys.typescale.emphasized.display-large.font        |
| Font Weight   | md.sys.typescale.emphasized.display-large.weight      |
| Font Size     | md.sys.typescale.emphasized.display-large.size        |
| Line Height   | md.sys.typescale.emphasized.display-large.line-height |
| Font Tracking | md.sys.typescale.emphasized.display-large.tracking    |

### Emphasized Display Medium System Tokens
| Token                                                  | Value                         |
|--------------------------------------------------------|-------------------------------|
| md.sys.typescale.emphasized.display-medium             | Emphasized Display Medium     |
| md.sys.typescale.emphasized.display-medium.font        | md.ref.typeface.brand         |
| md.sys.typescale.emphasized.display-medium.weight      | md.ref.typeface.weight-medium |
| md.sys.typescale.emphasized.display-medium.size        | 45pt                          |
| md.sys.typescale.emphasized.display-medium.tracking    | 0                             |
| md.sys.typescale.emphasized.display-medium.line-height | 52pt                          |
| md.sys.typescale.emphasized.display-medium.wght        | 500                           |
| md.sys.typescale.emphasized.display-medium.grad        | 0                             |
| md.sys.typescale.emphasized.display-medium.wdth        | 100                           |
| md.sys.typescale.emphasized.display-medium.rond        | 0                             |
| md.sys.typescale.emphasized.display-medium.opsz        | 45                            |
| md.sys.typescale.emphasized.display-medium.crsv        | 0                             |
| md.sys.typescale.emphasized.display-medium.slnt        | 0                             |
| md.sys.typescale.emphasized.display-medium.fill        | 0                             |
| md.sys.typescale.emphasized.display-medium.hexp        | 0                             |

### Emphasized Display Medium Properties
| Property      | Value                                                  |
|---------------|--------------------------------------------------------|
| Font Style    | md.sys.typescale.emphasized.display-medium             |
| Font Name     | md.sys.typescale.emphasized.display-medium.font        |
| Font Weight   | md.sys.typescale.emphasized.display-medium.weight      |
| Font Size     | md.sys.typescale.emphasized.display-medium.size        |
| Line Height   | md.sys.typescale.emphasized.display-medium.line-height |
| Font Tracking | md.sys.typescale.emphasized.display-medium.tracking    |

### Emphasized Display Small System Tokens
| Token                                                 | Value                         |
|-------------------------------------------------------|-------------------------------|
| md.sys.typescale.emphasized.display-small             | Emphasized Display Small      |
| md.sys.typescale.emphasized.display-small.font        | md.ref.typeface.brand         |
| md.sys.typescale.emphasized.display-small.weight      | md.ref.typeface.weight-medium |
| md.sys.typescale.emphasized.display-small.size        | 36pt                          |
| md.sys.typescale.emphasized.display-small.tracking    | 0                             |
| md.sys.typescale.emphasized.display-small.line-height | 44pt                          |
| md.sys.typescale.emphasized.display-small.wght        | 500                           |
| md.sys.typescale.emphasized.display-small.grad        | 0                             |
| md.sys.typescale.emphasized.display-small.wdth        | 100                           |
| md.sys.typescale.emphasized.display-small.rond        | 0                             |
| md.sys.typescale.emphasized.display-small.opsz        | 36                            |
| md.sys.typescale.emphasized.display-small.crsv        | 0                             |
| md.sys.typescale.emphasized.display-small.slnt        | 0                             |
| md.sys.typescale.emphasized.display-small.fill        | 0                             |
| md.sys.typescale.emphasized.display-small.hexp        | 0                             |

### Emphasized Display Small Properties
| Property      | Value                                                 |
|---------------|-------------------------------------------------------|
| Font Style    | md.sys.typescale.emphasized.display-small             |
| Font Name     | md.sys.typescale.emphasized.display-small.font        |
| Font Weight   | md.sys.typescale.emphasized.display-small.weight      |
| Font Size     | md.sys.typescale.emphasized.display-small.size        |
| Line Height   | md.sys.typescale.emphasized.display-small.line-height |
| Font Tracking | md.sys.typescale.emphasized.display-small.tracking    |

## Emphasized Headline
### Emphasized Headline Large System Tokens
| Token                                                  | Value                         |
|--------------------------------------------------------|-------------------------------|
| md.sys.typescale.emphasized.headline-large             | Emphasized Headline Large     |
| md.sys.typescale.emphasized.headline-large.font        | md.ref.typeface.brand         |
| md.sys.typescale.emphasized.headline-large.weight      | md.ref.typeface.weight-medium |
| md.sys.typescale.emphasized.headline-large.size        | 32pt                          |
| md.sys.typescale.emphasized.headline-large.tracking    | 0                             |
| md.sys.typescale.emphasized.headline-large.line-height | 40pt                          |
| md.sys.typescale.emphasized.headline-large.wght        | 500                           |
| md.sys.typescale.emphasized.headline-large.grad        | 0                             |
| md.sys.typescale.emphasized.headline-large.wdth        | 100                           |
| md.sys.typescale.emphasized.headline-large.rond        | 0                             |
| md.sys.typescale.emphasized.headline-large.opsz        | 32                            |
| md.sys.typescale.emphasized.headline-large.crsv        | 0                             |
| md.sys.typescale.emphasized.headline-large.slnt        | 0                             |
| md.sys.typescale.emphasized.headline-large.fill        | 0                             |
| md.sys.typescale.emphasized.headline-large.hexp        | 0                             |

### Emphasized Headline Large Properties
| Property      | Value                                                  |
|---------------|--------------------------------------------------------|
| Font Style    | md.sys.typescale.emphasized.headline-large             |
| Font Name     | md.sys.typescale.emphasized.headline-large.font        |
| Font Weight   | md.sys.typescale.emphasized.headline-large.weight      |
| Font Size     | md.sys.typescale.emphasized.headline-large.size        |
| Line Height   | md.sys.typescale.emphasized.headline-large.line-height |
| Font Tracking | md.sys.typescale.emphasized.headline-large.tracking    |

### Emphasized Headline Medium System Tokens
| Token                                                   | Value                         |
|---------------------------------------------------------|-------------------------------|
| md.sys.typescale.emphasized.headline-medium             | Emphasized Headline Medium    |
| md.sys.typescale.emphasized.headline-medium.font        | md.ref.typeface.brand         |
| md.sys.typescale.emphasized.headline-medium.weight      | md.ref.typeface.weight-medium |
| md.sys.typescale.emphasized.headline-medium.size        | 28pt                          |
| md.sys.typescale.emphasized.headline-medium.tracking    | 0                             |
| md.sys.typescale.emphasized.headline-medium.line-height | 36pt                          |
| md.sys.typescale.emphasized.headline-medium.wght        | 500                           |
| md.sys.typescale.emphasized.headline-medium.grad        | 0                             |
| md.sys.typescale.emphasized.headline-medium.wdth        | 100                           |
| md.sys.typescale.emphasized.headline-medium.rond        | 0                             |
| md.sys.typescale.emphasized.headline-medium.opsz        | 28                            |
| md.sys.typescale.emphasized.headline-medium.crsv        | 0                             |
| md.sys.typescale.emphasized.headline-medium.slnt        | 0                             |
| md.sys.typescale.emphasized.headline-medium.fill        | 0                             |
| md.sys.typescale.emphasized.headline-medium.hexp        | 0                             |

### Emphasized Headline Medium Properties
| Property      | Value                                                   |
|---------------|---------------------------------------------------------|
| Font Style    | md.sys.typescale.emphasized.headline-medium             |
| Font Name     | md.sys.typescale.emphasized.headline-medium.font        |
| Font Weight   | md.sys.typescale.emphasized.headline-medium.weight      |
| Font Size     | md.sys.typescale.emphasized.headline-medium.size        |
| Line Height   | md.sys.typescale.emphasized.headline-medium.line-height |
| Font Tracking | md.sys.typescale.emphasized.headline-medium.tracking    |

### Emphasized Headline Small System Tokens
| Token                                                  | Value                         |
|--------------------------------------------------------|-------------------------------|
| md.sys.typescale.emphasized.headline-small             | Emphasized Headline Small     |
| md.sys.typescale.emphasized.headline-small.font        | md.ref.typeface.brand         |
| md.sys.typescale.emphasized.headline-small.weight      | md.ref.typeface.weight-medium |
| md.sys.typescale.emphasized.headline-small.size        | 24pt                          |
| md.sys.typescale.emphasized.headline-small.tracking    | 0                             |
| md.sys.typescale.emphasized.headline-small.line-height | 32pt                          |
| md.sys.typescale.emphasized.headline-small.wght        | 500                           |
| md.sys.typescale.emphasized.headline-small.grad        | 0                             |
| md.sys.typescale.emphasized.headline-small.wdth        | 100                           |
| md.sys.typescale.emphasized.headline-small.rond        | 0                             |
| md.sys.typescale.emphasized.headline-small.opsz        | 24                            |
| md.sys.typescale.emphasized.headline-small.crsv        | 0                             |
| md.sys.typescale.emphasized.headline-small.slnt        | 0                             |
| md.sys.typescale.emphasized.headline-small.fill        | 0                             |
| md.sys.typescale.emphasized.headline-small.hexp        | 0                             |

### Emphasized Headline Small Properties
| Property      | Value                                                  |
|---------------|--------------------------------------------------------|
| Font Style    | md.sys.typescale.emphasized.headline-small             |
| Font Name     | md.sys.typescale.emphasized.headline-small.font        |
| Font Weight   | md.sys.typescale.emphasized.headline-small.weight      |
| Font Size     | md.sys.typescale.emphasized.headline-small.size        |
| Line Height   | md.sys.typescale.emphasized.headline-small.line-height |
| Font Tracking | md.sys.typescale.emphasized.headline-small.tracking    |

## Emphasized Title
### Emphasized Title Large System Tokens
| Token                                               | Value                         |
|-----------------------------------------------------|-------------------------------|
| md.sys.typescale.emphasized.title-large             | Emphasized Title Large        |
| md.sys.typescale.emphasized.title-large.font        | md.ref.typeface.brand         |
| md.sys.typescale.emphasized.title-large.weight      | md.ref.typeface.weight-medium |
| md.sys.typescale.emphasized.title-large.size        | 22pt                          |
| md.sys.typescale.emphasized.title-large.tracking    | 0                             |
| md.sys.typescale.emphasized.title-large.line-height | 28pt                          |
| md.sys.typescale.emphasized.title-large.wght        | 500                           |
| md.sys.typescale.emphasized.title-large.grad        | 0                             |
| md.sys.typescale.emphasized.title-large.wdth        | 100                           |
| md.sys.typescale.emphasized.title-large.rond        | 0                             |
| md.sys.typescale.emphasized.title-large.opsz        | 22                            |
| md.sys.typescale.emphasized.title-large.crsv        | 0                             |
| md.sys.typescale.emphasized.title-large.slnt        | 0                             |
| md.sys.typescale.emphasized.title-large.fill        | 0                             |
| md.sys.typescale.emphasized.title-large.hexp        | 0                             |

### Emphasized Title Large Properties
| Property      | Value                                               |
|---------------|-----------------------------------------------------|
| Font Style    | md.sys.typescale.emphasized.title-large             |
| Font Name     | md.sys.typescale.emphasized.title-large.font        |
| Font Weight   | md.sys.typescale.emphasized.title-large.weight      |
| Font Size     | md.sys.typescale.emphasized.title-large.size        |
| Line Height   | md.sys.typescale.emphasized.title-large.line-height |
| Font Tracking | md.sys.typescale.emphasized.title-large.tracking    |

### Emphasized Title Medium System Tokens
| Token                                                | Value                       |
|------------------------------------------------------|-----------------------------|
| md.sys.typescale.emphasized.title-medium             | Emphasized Title Medium     |
| md.sys.typescale.emphasized.title-medium.font        | md.ref.typeface.brand       |
| md.sys.typescale.emphasized.title-medium.weight      | md.ref.typeface.weight-bold |
| md.sys.typescale.emphasized.title-medium.size        | 16pt                        |
| md.sys.typescale.emphasized.title-medium.tracking    | 0.15pt                      |
| md.sys.typescale.emphasized.title-medium.line-height | 24pt                        |
| md.sys.typescale.emphasized.title-medium.wght        | 700                         |
| md.sys.typescale.emphasized.title-medium.grad        | 0                           |
| md.sys.typescale.emphasized.title-medium.wdth        | 100                         |
| md.sys.typescale.emphasized.title-medium.rond        | 0                           |
| md.sys.typescale.emphasized.title-medium.opsz        | 16                          |
| md.sys.typescale.emphasized.title-medium.crsv        | 0                           |
| md.sys.typescale.emphasized.title-medium.slnt        | 0                           |
| md.sys.typescale.emphasized.title-medium.fill        | 0                           |
| md.sys.typescale.emphasized.title-medium.hexp        | 0                           |

### Emphasized Title Medium Properties
| Property      | Value                                                |
|---------------|------------------------------------------------------|
| Font Style    | md.sys.typescale.emphasized.title-medium             |
| Font Name     | md.sys.typescale.emphasized.title-medium.font        |
| Font Weight   | md.sys.typescale.emphasized.title-medium.weight      |
| Font Size     | md.sys.typescale.emphasized.title-medium.size        |
| Line Height   | md.sys.typescale.emphasized.title-medium.line-height |
| Font Tracking | md.sys.typescale.emphasized.title-medium.tracking    |

### Emphasized Title Small System Tokens
| Token                                               | Value                       |
|-----------------------------------------------------|-----------------------------|
| md.sys.typescale.emphasized.title-small             | Emphasized Title Small      |
| md.sys.typescale.emphasized.title-small.font        | md.ref.typeface.brand       |
| md.sys.typescale.emphasized.title-small.weight      | md.ref.typeface.weight-bold |
| md.sys.typescale.emphasized.title-small.size        | 14pt                        |
| md.sys.typescale.emphasized.title-small.tracking    | 0.1pt                       |
| md.sys.typescale.emphasized.title-small.line-height | 20pt                        |
| md.sys.typescale.emphasized.title-small.wght        | 700                         |
| md.sys.typescale.emphasized.title-small.grad        | 0                           |
| md.sys.typescale.emphasized.title-small.wdth        | 100                         |
| md.sys.typescale.emphasized.title-small.rond        | 0                           |
| md.sys.typescale.emphasized.title-small.opsz        | 14                          |
| md.sys.typescale.emphasized.title-small.crsv        | 0                           |
| md.sys.typescale.emphasized.title-small.slnt        | 0                           |
| md.sys.typescale.emphasized.title-small.fill        | 0                           |
| md.sys.typescale.emphasized.title-small.hexp        | 0                           |

### Emphasized Title Small Properties
| Property      | Value                                               |
|---------------|-----------------------------------------------------|
| Font Style    | md.sys.typescale.emphasized.title-small             |
| Font Name     | md.sys.typescale.emphasized.title-small.font        |
| Font Weight   | md.sys.typescale.emphasized.title-small.weight      |
| Font Size     | md.sys.typescale.emphasized.title-small.size        |
| Line Height   | md.sys.typescale.emphasized.title-small.line-height |
| Font Tracking | md.sys.typescale.emphasized.title-small.tracking    |

## Emphasized Body
### Emphasized Body Large System Tokens
| Token                                              | Value                         |
|----------------------------------------------------|-------------------------------|
| md.sys.typescale.emphasized.body-large             | Emphasized Body Large         |
| md.sys.typescale.emphasized.body-large.font        | md.ref.typeface.plain         |
| md.sys.typescale.emphasized.body-large.weight      | md.ref.typeface.weight-medium |
| md.sys.typescale.emphasized.body-large.size        | 16pt                          |
| md.sys.typescale.emphasized.body-large.tracking    | 0.5pt                         |
| md.sys.typescale.emphasized.body-large.line-height | 24pt                          |
| md.sys.typescale.emphasized.body-large.wght        | 500                           |
| md.sys.typescale.emphasized.body-large.grad        | 0                             |
| md.sys.typescale.emphasized.body-large.wdth        | 100                           |
| md.sys.typescale.emphasized.body-large.rond        | 0                             |
| md.sys.typescale.emphasized.body-large.opsz        | 16                            |
| md.sys.typescale.emphasized.body-large.crsv        | 0                             |
| md.sys.typescale.emphasized.body-large.slnt        | 0                             |
| md.sys.typescale.emphasized.body-large.fill        | 0                             |
| md.sys.typescale.emphasized.body-large.hexp        | 0                             |

### Emphasized Body Large Properties
| Property      | Value                                              |
|---------------|----------------------------------------------------|
| Font Style    | md.sys.typescale.emphasized.body-large             |
| Font Name     | md.sys.typescale.emphasized.body-large.font        |
| Font Weight   | md.sys.typescale.emphasized.body-large.weight      |
| Font Size     | md.sys.typescale.emphasized.body-large.size        |
| Line Height   | md.sys.typescale.emphasized.body-large.line-height |
| Font Tracking | md.sys.typescale.emphasized.body-large.tracking    |

### Emphasized Body Medium System Tokens
| Token                                               | Value                         |
|-----------------------------------------------------|-------------------------------|
| md.sys.typescale.emphasized.body-medium             | Emphasized Body Medium        |
| md.sys.typescale.emphasized.body-medium.font        | md.ref.typeface.plain         |
| md.sys.typescale.emphasized.body-medium.weight      | md.ref.typeface.weight-medium |
| md.sys.typescale.emphasized.body-medium.size        | 14pt                          |
| md.sys.typescale.emphasized.body-medium.tracking    | 0.25pt                        |
| md.sys.typescale.emphasized.body-medium.line-height | 20pt                          |
| md.sys.typescale.emphasized.body-medium.wght        | 500                           |
| md.sys.typescale.emphasized.body-medium.grad        | 0                             |
| md.sys.typescale.emphasized.body-medium.wdth        | 100                           |
| md.sys.typescale.emphasized.body-medium.rond        | 0                             |
| md.sys.typescale.emphasized.body-medium.opsz        | 14                            |
| md.sys.typescale.emphasized.body-medium.crsv        | 0                             |
| md.sys.typescale.emphasized.body-medium.slnt        | 0                             |
| md.sys.typescale.emphasized.body-medium.fill        | 0                             |
| md.sys.typescale.emphasized.body-medium.hexp        | 0                             |

### Emphasized Body Medium Properties
| Property      | Value                                               |
|---------------|-----------------------------------------------------|
| Font Style    | md.sys.typescale.emphasized.body-medium             |
| Font Name     | md.sys.typescale.emphasized.body-medium.font        |
| Font Weight   | md.sys.typescale.emphasized.body-medium.weight      |
| Font Size     | md.sys.typescale.emphasized.body-medium.size        |
| Line Height   | md.sys.typescale.emphasized.body-medium.line-height |
| Font Tracking | md.sys.typescale.emphasized.body-medium.tracking    |

### Emphasized Body Small System Tokens
| Token                                              | Value                          |
|----------------------------------------------------|--------------------------------|
| md.sys.typescale.emphasized.body-small             | Emphasized Body Small          |
| md.sys.typescale.emphasized.body-small.font        | md.ref.typeface.plain          |
| md.sys.typescale.emphasized.body-small.weight      | md.ref.typeface.weight-medium  |
| md.sys.typescale.emphasized.body-small.size        | 12pt                           |
| md.sys.typescale.emphasized.body-small.tracking    | 0.4pt                          |
| md.sys.typescale.emphasized.body-small.line-height | 16pt                           |
| md.sys.typescale.emphasized.body-small.wght        | 500                            |
| md.sys.typescale.emphasized.body-small.grad        | 0                              |
| md.sys.typescale.emphasized.body-small.wdth        | 100                            |
| md.sys.typescale.emphasized.body-small.rond        | 0                              |
| md.sys.typescale.emphasized.body-small.opsz        | 12                             |
| md.sys.typescale.emphasized.body-small.crsv        | 0                              |
| md.sys.typescale.emphasized.body-small.slnt        | 0                              |
| md.sys.typescale.emphasized.body-small.fill        | 0                              |
| md.sys.typescale.emphasized.body-small.hexp        | 0                              |

### Emphasized Body Small Properties
| Property      | Value                                              |
|---------------|----------------------------------------------------|
| Font Style    | md.sys.typescale.emphasized.body-small             |
| Font Name     | md.sys.typescale.emphasized.body-small.font        |
| Font Weight   | md.sys.typescale.emphasized.body-small.weight      |
| Font Size     | md.sys.typescale.emphasized.body-small.size        |
| Line Height   | md.sys.typescale.emphasized.body-small.line-height |
| Font Tracking | md.sys.typescale.emphasized.body-small.tracking    |

## Emphasized Label
Note: The prominent token is not recommended for use and therefore is not included in this section. Instead, use the expressive style.

### Emphasized Label Large System Tokens
| Token                                               | Value                       |
|-----------------------------------------------------|-----------------------------|
| md.sys.typescale.emphasized.label-large             | Emphasized Label Large      |
| md.sys.typescale.emphasized.label-large.font        | md.ref.typeface.plain       |
| md.sys.typescale.emphasized.label-large.weight      | md.ref.typeface.weight-bold |
| md.sys.typescale.emphasized.label-large.size        | 14pt                        |
| md.sys.typescale.emphasized.label-large.tracking    | 0.1pt                       |
| md.sys.typescale.emphasized.label-large.line-height | 20pt                        |
| md.sys.typescale.emphasized.label-large.wght        | 700                         |
| md.sys.typescale.emphasized.label-large.grad        | 0                           |
| md.sys.typescale.emphasized.label-large.wdth        | 100                         |
| md.sys.typescale.emphasized.label-large.rond        | 0                           |
| md.sys.typescale.emphasized.label-large.opsz        | 14                          |
| md.sys.typescale.emphasized.label-large.crsv        | 0                           |
| md.sys.typescale.emphasized.label-large.slnt        | 0                           |
| md.sys.typescale.emphasized.label-large.fill        | 0                           |
| md.sys.typescale.emphasized.label-large.hexp        | 0                           |

### Emphasized Label Large Properties
| Property      | Value                                               |
|---------------|-----------------------------------------------------|
| Font Style    | md.sys.typescale.emphasized.label-large             |
| Font Name     | md.sys.typescale.emphasized.label-large.font        |
| Font Weight   | md.sys.typescale.emphasized.label-large.weight      |
| Font Size     | md.sys.typescale.emphasized.label-large.size        |
| Line Height   | md.sys.typescale.emphasized.label-large.line-height |
| Font Tracking | md.sys.typescale.emphasized.label-large.tracking    |

### Emphasized Label Medium System Tokens
| Token                                                | Value                       |
|------------------------------------------------------|-----------------------------|
| md.sys.typescale.emphasized.label-medium             | Emphasized Label Medium     |
| md.sys.typescale.emphasized.label-medium.font        | md.ref.typeface.plain       |
| md.sys.typescale.emphasized.label-medium.weight      | md.ref.typeface.weight-bold |
| md.sys.typescale.emphasized.label-medium.size        | 12pt                        |
| md.sys.typescale.emphasized.label-medium.tracking    | 0.5pt                       |
| md.sys.typescale.emphasized.label-medium.line-height | 16pt                        |
| md.sys.typescale.emphasized.label-medium.wght        | 700                         |
| md.sys.typescale.emphasized.label-medium.grad        | 0                           |
| md.sys.typescale.emphasized.label-medium.wdth        | 100                         |
| md.sys.typescale.emphasized.label-medium.rond        | 0                           |
| md.sys.typescale.emphasized.label-medium.opsz        | 12                          |
| md.sys.typescale.emphasized.label-medium.crsv        | 0                           |
| md.sys.typescale.emphasized.label-medium.slnt        | 0                           |
| md.sys.typescale.emphasized.label-medium.fill        | 0                           |
| md.sys.typescale.emphasized.label-medium.hexp        | 0                           |

### Emphasized Label Medium Properties
| Property      | Value                                                |
|---------------|------------------------------------------------------|
| Font Style    | md.sys.typescale.emphasized.label-medium             |
| Font Name     | md.sys.typescale.emphasized.label-medium.font        |
| Font Weight   | md.sys.typescale.emphasized.label-medium.weight      |
| Font Size     | md.sys.typescale.emphasized.label-medium.size        |
| Line Height   | md.sys.typescale.emphasized.label-medium.line-height |
| Font Tracking | md.sys.typescale.emphasized.label-medium.tracking    |

### Emphasized Label Small System Tokens
| Token                                               | Value                       |
|-----------------------------------------------------|-----------------------------|
| md.sys.typescale.emphasized.label-small             | Emphasized Label Small      |
| md.sys.typescale.emphasized.label-small.font        | md.ref.typeface.plain       |
| md.sys.typescale.emphasized.label-small.weight      | md.ref.typeface.weight-bold |
| md.sys.typescale.emphasized.label-small.size        | 11pt                        |
| md.sys.typescale.emphasized.label-small.tracking    | 0.5pt                       |
| md.sys.typescale.emphasized.label-small.line-height | 16pt                        |
| md.sys.typescale.emphasized.label-small.wght        | 700                         |
| md.sys.typescale.emphasized.label-small.grad        | 0                           |
| md.sys.typescale.emphasized.label-small.wdth        | 100                         |
| md.sys.typescale.emphasized.label-small.rond        | 0                           |
| md.sys.typescale.emphasized.label-small.opsz        | 11                          |
| md.sys.typescale.emphasized.label-small.crsv        | 0                           |
| md.sys.typescale.emphasized.label-small.slnt        | 0                           |
| md.sys.typescale.emphasized.label-small.fill        | 0                           |
| md.sys.typescale.emphasized.label-small.hexp        | 0                           |

### Emphasized Label Small Properties
| Property      | Value                                               |
|---------------|-----------------------------------------------------|
| Font Style    | md.sys.typescale.emphasized.label-small             |
| Font Name     | md.sys.typescale.emphasized.label-small.font        |
| Font Weight   | md.sys.typescale.emphasized.label-small.weight      |
| Font Size     | md.sys.typescale.emphasized.label-small.size        |
| Line Height   | md.sys.typescale.emphasized.label-small.line-height |
| Font Tracking | md.sys.typescale.emphasized.label-small.tracking    |
