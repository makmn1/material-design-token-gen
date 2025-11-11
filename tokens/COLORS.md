# Color Tokens

## All Tokens
- md.sys.color.primary
- md.sys.color.on-primary
- md.sys.color.primary-container
- md.sys.color.on-primary-container
- md.sys.color.secondary
- md.sys.color.on-secondary
- md.sys.color.secondary-container
- md.sys.color.on-secondary-container
- md.sys.color.tertiary
- md.sys.color.on-tertiary
- md.sys.color.tertiary-container
- md.sys.color.on-tertiary-container
- md.sys.color.error
- md.sys.color.on-error
- md.sys.color.error-container
- md.sys.color.on-error-container
- md.sys.color.surface
- md.sys.color.on-surface
- md.sys.color.surface-variant
- md.sys.color.on-surface-variant
- md.sys.color.surface-container-highest
- md.sys.color.surface-container-high
- md.sys.color.surface-container
- md.sys.color.surface-container-low
- md.sys.color.surface-container-lowest
- md.sys.color.inverse-surface
- md.sys.color.inverse-on-surface
- md.sys.color.outline
- md.sys.color.outline-variant
- md.sys.color.primary-fixed
- md.sys.color.on-primary-fixed
- md.sys.color.primary-fixed-dim
- md.sys.color.on-primary-fixed-variant
- md.sys.color.inverse-primary
- md.sys.color.secondary-fixed
- md.sys.color.on-secondary-fixed
- md.sys.color.secondary-fixed-dim
- md.sys.color.on-secondary-fixed-variant
- md.sys.color.tertiary-fixed
- md.sys.color.on-tertiary-fixed
- md.sys.color.tertiary-fixed-dim
- md.sys.color.on-tertiary-fixed-variant
- md.sys.color.background
- md.sys.color.on-background
- md.sys.color.surface-bright
- md.sys.color.surface-dim
- md.sys.color.scrim
- md.sys.color.shadow

## Color Mappings
For simplicity, the following is split into 6 tables for each theme + contrast combination.

### Prefixes
In the following sections, assume the following:
- The tokens in the sys column have the prefix **md.sys.color**
- The tokens in the ref column have the prefix **md.ref.palette**

Note that we are intentionally omitting the **surface tint** colors since they aren't recommended for use

For guidance on when to use these colors, refer to the [token spec](https://m3.material.io/styles/color/static/baseline).
Select the color to view a short description on when to use that color.

### Light Theme
#### Default Contrast
| Sys                        | Ref               |
|----------------------------|-------------------|
| primary                    | primary40         |
| on-primary                 | primary100        |
| primary-container          | primary90         |
| on-primary-container       | primary30         |
| secondary                  | secondary40       |
| on-secondary               | secondary100      |
| secondary-container        | secondary90       |
| on-secondary-container     | secondary30       |
| tertiary                   | tertiary40        |
| on-tertiary                | tertiary100       |
| tertiary-container         | tertiary90        |
| on-tertiary-container      | tertiary30        |
| error                      | error40           |
| on-error                   | error100          |
| error-container            | error90           |
| on-error-container         | error30           |
| surface                    | neutral98         |
| on-surface                 | neutral10         |
| surface-variant            | neutral-variant90 |
| on-surface-variant         | neutral-variant30 |
| surface-container-highest  | neutral90         |
| surface-container-high     | neutral92         |
| surface-container          | neutral94         |
| surface-container-low      | neutral96         |
| surface-container-lowest   | neutral100        |
| inverse-surface            | neutral20         |
| inverse-on-surface         | neutral95         |
| outline                    | neutral-variant50 |
| outline-variant            | neutral-variant80 |
| primary-fixed              | primary90         |
| on-primary-fixed           | primary10         |
| primary-fixed-dim          | primary80         |
| on-primary-fixed-variant   | primary30         |
| inverse-primary            | primary80         |
| secondary-fixed            | secondary90       |
| on-secondary-fixed         | secondary10       |
| secondary-fixed-dim        | secondary80       |
| on-secondary-fixed-variant | secondary30       |
| tertiary-fixed             | tertiary90        |
| on-tertiary-fixed          | tertiary10        |
| tertiary-fixed-dim         | tertiary80        |
| on-tertiary-fixed-variant  | tertiary30        |
| background                 | neutral98         |
| on-background              | neutral10         |
| surface-bright             | neutral98         |
| surface-dim                | neutral87         |
| scrim                      | neutral0          |
| shadow                     | neutral0          |

#### Medium Contrast
| Sys                        | Ref               |
|----------------------------|-------------------|
| primary                    | primary30         |
| on-primary                 | primary100        |
| primary-container          | primary40         |
| on-primary-container       | primary100        |
| secondary                  | secondary30       |
| on-secondary               | secondary100      |
| secondary-container        | secondary40       |
| on-secondary-container     | secondary100      |
| tertiary                   | tertiary30        |
| on-tertiary                | tertiary100       |
| tertiary-container         | tertiary40        |
| on-tertiary-container      | tertiary100       |
| error                      | error30           |
| on-error                   | error100          |
| error-container            | error40           |
| on-error-container         | error100          |
| surface                    | neutral98         |
| on-surface                 | neutral0          |
| surface-variant            | neutral-variant90 |
| on-surface-variant         | neutral-variant20 |
| surface-container-highest  | neutral90         |
| surface-container-high     | neutral92         |
| surface-container          | neutral94         |
| surface-container-low      | neutral96         |
| surface-container-lowest   | neutral100        |
| inverse-surface            | neutral20         |
| inverse-on-surface         | neutral100        |
| outline                    | neutral-variant30 |
| outline-variant            | neutral-variant50 |
| primary-fixed              | primary40         |
| on-primary-fixed           | primary100        |
| primary-fixed-dim          | primary30         |
| on-primary-fixed-variant   | primary100        |
| inverse-primary            | primary80         |
| secondary-fixed            | secondary40       |
| on-secondary-fixed         | secondary100      |
| secondary-fixed-dim        | secondary30       |
| on-secondary-fixed-variant | secondary100      |
| tertiary-fixed             | tertiary40        |
| on-tertiary-fixed          | tertiary100       |
| tertiary-fixed-dim         | tertiary30        |
| on-tertiary-fixed-variant  | tertiary100       |
| background                 | neutral98         |
| on-background              | neutral0          |
| surface-bright             | neutral98         |
| surface-dim                | neutral87         |
| scrim                      | neutral0          |
| shadow                     | neutral0          |

#### High Contrast
| Sys                        | Ref               |
|----------------------------|-------------------|
| primary                    | primary20         |
| on-primary                 | primary100        |
| primary-container          | primary30         |
| on-primary-container       | primary100        |
| secondary                  | secondary20       |
| on-secondary               | secondary100      |
| secondary-container        | secondary30       |
| on-secondary-container     | secondary100      |
| tertiary                   | tertiary20        |
| on-tertiary                | tertiary100       |
| tertiary-container         | tertiary30        |
| on-tertiary-container      | tertiary100       |
| error                      | error20           |
| on-error                   | error100          |
| error-container            | error30           |
| on-error-container         | error100          |
| surface                    | neutral98         |
| on-surface                 | neutral0          |
| surface-variant            | neutral-variant90 |
| on-surface-variant         | neutral-variant0  |
| surface-container-highest  | neutral90         |
| surface-container-high     | neutral92         |
| surface-container          | neutral94         |
| surface-container-low      | neutral96         |
| surface-container-lowest   | neutral100        |
| inverse-surface            | neutral20         |
| inverse-on-surface         | neutral100        |
| outline                    | neutral-variant20 |
| outline-variant            | neutral-variant30 |
| primary-fixed              | primary30         |
| on-primary-fixed           | primary100        |
| primary-fixed-dim          | primary20         |
| on-primary-fixed-variant   | primary100        |
| inverse-primary            | primary80         |
| secondary-fixed            | secondary30       |
| on-secondary-fixed         | secondary100      |
| secondary-fixed-dim        | secondary20       |
| on-secondary-fixed-variant | secondary100      |
| tertiary-fixed             | tertiary30        |
| on-tertiary-fixed          | tertiary100       |
| tertiary-fixed-dim         | tertiary20        |
| on-tertiary-fixed-variant  | tertiary100       |
| background                 | neutral98         |
| on-background              | neutral0          |
| surface-bright             | neutral98         |
| surface-dim                | neutral87         |
| scrim                      | neutral0          |
| shadow                     | neutral0          |

### Dark Theme
#### Default Contrast
| Sys                        | Ref               |
|----------------------------|-------------------|
| primary                    | primary80         |
| on-primary                 | primary20         |
| primary-container          | primary30         |
| on-primary-container       | primary90         |
| secondary                  | secondary80       |
| on-secondary               | secondary20       |
| secondary-container        | secondary30       |
| on-secondary-container     | secondary90       |
| tertiary                   | tertiary80        |
| on-tertiary                | tertiary20        |
| tertiary-container         | tertiary30        |
| on-tertiary-container      | tertiary90        |
| error                      | error80           |
| on-error                   | error20           |
| error-container            | error30           |
| on-error-container         | error90           |
| surface                    | neutral6          |
| on-surface                 | neutral90         |
| surface-variant            | neutral-variant30 |
| on-surface-variant         | neutral-variant80 |
| surface-container-highest  | neutral22         |
| surface-container-high     | neutral17         |
| surface-container          | neutral12         |
| surface-container-low      | neutral10         |
| surface-container-lowest   | neutral4          |
| inverse-surface            | neutral90         |
| inverse-on-surface         | neutral20         |
| outline                    | neutral-variant60 |
| outline-variant            | neutral-variant30 |
| primary-fixed              | primary90         |
| on-primary-fixed           | primary10         |
| primary-fixed-dim          | primary80         |
| on-primary-fixed-variant   | primary30         |
| inverse-primary            | primary40         |
| secondary-fixed            | secondary90       |
| on-secondary-fixed         | secondary10       |
| secondary-fixed-dim        | secondary80       |
| on-secondary-fixed-variant | secondary30       |
| tertiary-fixed             | tertiary90        |
| on-tertiary-fixed          | tertiary10        |
| tertiary-fixed-dim         | tertiary80        |
| on-tertiary-fixed-variant  | tertiary30        |
| background                 | neutral6          |
| on-background              | neutral90         |
| surface-bright             | neutral24         |
| surface-dim                | neutral6          |
| scrim                      | neutral0          |
| shadow                     | neutral0          |

#### Medium Contrast
| Sys                        | Ref               |
|----------------------------|-------------------|
| primary                    | primary90         |
| on-primary                 | primary10         |
| primary-container          | primary60         |
| on-primary-container       | primary0          |
| secondary                  | secondary90       |
| on-secondary               | secondary10       |
| secondary-container        | secondary60       |
| on-secondary-container     | secondary0        |
| tertiary                   | tertiary90        |
| on-tertiary                | tertiary10        |
| tertiary-container         | tertiary60        |
| on-tertiary-container      | tertiary0         |
| error                      | error90           |
| on-error                   | error10           |
| error-container            | error60           |
| on-error-container         | error0            |
| surface                    | neutral6          |
| on-surface                 | neutral100        |
| surface-variant            | neutral-variant30 |
| on-surface-variant         | neutral-variant90 |
| surface-container-highest  | neutral22         |
| surface-container-high     | neutral17         |
| surface-container          | neutral12         |
| surface-container-low      | neutral10         |
| surface-container-lowest   | neutral4          |
| inverse-surface            | neutral90         |
| inverse-on-surface         | neutral10         |
| outline                    | neutral-variant70 |
| outline-variant            | neutral-variant60 |
| primary-fixed              | primary90         |
| on-primary-fixed           | primary0          |
| primary-fixed-dim          | primary80         |
| on-primary-fixed-variant   | primary20         |
| inverse-primary            | primary30         |
| secondary-fixed            | secondary90       |
| on-secondary-fixed         | secondary0        |
| secondary-fixed-dim        | secondary80       |
| on-secondary-fixed-variant | secondary20       |
| tertiary-fixed             | tertiary90        |
| on-tertiary-fixed          | tertiary0         |
| tertiary-fixed-dim         | tertiary80        |
| on-tertiary-fixed-variant  | tertiary20        |
| background                 | neutral6          |
| on-background              | neutral100        |
| surface-bright             | neutral24         |
| surface-dim                | neutral6          |
| scrim                      | neutral0          |
| shadow                     | neutral0          |

#### High Contrast
| Sys                        | Ref                |
|----------------------------|--------------------|
| primary                    | primary95          |
| on-primary                 | primary0           |
| primary-container          | primary80          |
| on-primary-container       | primary0           |
| secondary                  | secondary95        |
| on-secondary               | secondary0         |
| secondary-container        | secondary80        |
| on-secondary-container     | secondary0         |
| tertiary                   | tertiary95         |
| on-tertiary                | tertiary0          |
| tertiary-container         | tertiary80         |
| on-tertiary-container      | tertiary0          |
| error                      | error95            |
| on-error                   | error0             |
| error-container            | error80            |
| on-error-container         | error0             |
| surface                    | neutral6           |
| on-surface                 | neutral100         |
| surface-variant            | neutral-variant30  |
| on-surface-variant         | neutral-variant100 |
| surface-container-highest  | neutral22          |
| surface-container-high     | neutral17          |
| surface-container          | neutral12          |
| surface-container-low      | neutral10          |
| surface-container-lowest   | neutral4           |
| inverse-surface            | neutral90          |
| inverse-on-surface         | neutral0           |
| outline                    | neutral-variant95  |
| outline-variant            | neutral-variant80  |
| primary-fixed              | primary90          |
| on-primary-fixed           | primary0           |
| primary-fixed-dim          | primary80          |
| on-primary-fixed-variant   | primary0           |
| inverse-primary            | primary20          |
| secondary-fixed            | secondary90        |
| on-secondary-fixed         | secondary0         |
| secondary-fixed-dim        | secondary80        |
| on-secondary-fixed-variant | secondary0         |
| tertiary-fixed             | tertiary90         |
| on-tertiary-fixed          | tertiary0          |
| tertiary-fixed-dim         | tertiary80         |
| on-tertiary-fixed-variant  | tertiary0          |
| background                 | neutral6           |
| on-background              | neutral100         |
| surface-bright             | neutral24          |
| surface-dim                | neutral6           |
| scrim                      | neutral0           |
| shadow                     | neutral0           |
