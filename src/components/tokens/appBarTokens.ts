export const appBarCommonColor: Record<string, string | number> = {
  "md.comp.app-bar.container.color": "md.sys.color.surface",
  "md.comp.app-bar.search.container.color": "md.sys.color.surface-container",
  "md.comp.app-bar.search.label.color": "md.sys.color.on-surface-variant",
  "md.comp.app-bar.container.color.on.scroll": "md.sys.color.surface-container",
  "md.comp.app-bar.search.container.color.on.scroll": "md.sys.color.surface-container-highest",
  "md.comp.app-bar.container.elevation": "md.sys.elevation.level0",
  "md.comp.app-bar.container.elevation.on.scroll": "md.sys.elevation.level2",
  "md.comp.app-bar.title.text": "md.sys.color.on-surface",
  "md.comp.app-bar.subtitle.text": "md.sys.color.on-surface-variant",
  "md.comp.app-bar.leading.icon": "md.sys.color.on-surface",
  "md.comp.app-bar.trailing.icon": "md.sys.color.on-surface-variant",
};

export const appBarCommonSpacing: Record<string, string | number> = {
  "md.comp.app-bar.left.padding": "4dp",
  "md.comp.app-bar.right.padding": "4dp",
  "md.comp.app-bar.icon.spacing": 0,
  "md.comp.app-bar.search.left.padding": "8dp",
  "md.comp.app-bar.search.right.padding": "8dp",
};

export const appBarCommonShape: Record<string, string | number> = {
  "md.comp.app-bar.container.shape": "md.sys.shape.corner.none",
};

export const appBarCommonSize: Record<string, string | number> = {
  "md.comp.app-bar.avatar.size": "32dp",
  "md.comp.app-bar.icon.size": "24dp",
};

export const appBarSizeSmall: Record<string, string | number> = {
  "md.comp.app-bar.small.container.height": "64dp",
  "md.comp.app-bar.small.title.font.name": "md.sys.typescale.title-large.font",
  "md.comp.app-bar.small.title.font.weight": "md.sys.typescale.title-large.weight",
  "md.comp.app-bar.small.title.font.size": "md.sys.typescale.title-large.size",
  "md.comp.app-bar.small.title.line.height": "md.sys.typescale.title-large.line-height",
  "md.comp.app-bar.small.title.font.tracking": "md.sys.typescale.title-large.tracking",
  "md.comp.app-bar.small.subtitle.font.name": "md.sys.typescale.body-small.font",
  "md.comp.app-bar.small.subtitle.font.weight": "md.sys.typescale.body-small.weight",
  "md.comp.app-bar.small.subtitle.font.size": "md.sys.typescale.body-small.size",
  "md.comp.app-bar.small.subtitle.line.height": "md.sys.typescale.body-small.line-height",
  "md.comp.app-bar.small.subtitle.font.tracking": "md.sys.typescale.body-small.tracking",
  "md.comp.app-bar.search.container.height": "56dp",
  "md.comp.app-bar.search.container.shape": "md.sys.shape.corner.full",
  "md.comp.app-bar.search.title.font.name": "md.sys.typescale.body-large.font",
  "md.comp.app-bar.search.title.font.weight": "md.sys.typescale.body-large.weight",
  "md.comp.app-bar.search.title.font.size": "md.sys.typescale.body-large.size",
  "md.comp.app-bar.search.title.line.height": "md.sys.typescale.body-large.line-height",
  "md.comp.app-bar.search.title.font.tracking": "md.sys.typescale.body-large.tracking",
};

export const appBarSizeMedium: Record<string, string | number> = {
  "md.comp.app-bar.medium.flexible.container.height": "112dp",
  "md.comp.app-bar.medium.flexible.container.height.with.subtitle": "136dp",
  "md.comp.app-bar.medium.title.font.name": "md.sys.typescale.headline-medium.font",
  "md.comp.app-bar.medium.title.font.weight": "md.sys.typescale.headline-medium.weight",
  "md.comp.app-bar.medium.title.font.size": "md.sys.typescale.headline-medium.size",
  "md.comp.app-bar.medium.title.line.height": "md.sys.typescale.headline-medium.line-height",
  "md.comp.app-bar.medium.title.font.tracking": "md.sys.typescale.headline-medium.tracking",
  "md.comp.app-bar.medium.subtitle.font.name": "md.sys.typescale.body-medium.font",
  "md.comp.app-bar.medium.subtitle.font.weight": "md.sys.typescale.body-medium.weight",
  "md.comp.app-bar.medium.subtitle.font.size": "md.sys.typescale.body-medium.size",
  "md.comp.app-bar.medium.subtitle.line.height": "md.sys.typescale.body-medium.line-height",
  "md.comp.app-bar.medium.subtitle.font.tracking": "md.sys.typescale.body-medium.tracking",
};

export const appBarSizeLargeFlexible: Record<string, string | number> = {
  "md.comp.app-bar.large.flexible.container.height": "120dp",
  "md.comp.app-bar.large.flexible.container.height.with.subtitle": "152dp",
  "md.comp.app-bar.large.title.font.name": "md.sys.typescale.display-small.font",
  "md.comp.app-bar.large.title.font.weight": "md.sys.typescale.display-small.weight",
  "md.comp.app-bar.large.title.font.size": "md.sys.typescale.display-small.size",
  "md.comp.app-bar.large.title.line.height": "md.sys.typescale.display-small.line-height",
  "md.comp.app-bar.large.title.font.tracking": "md.sys.typescale.display-small.tracking",
  "md.comp.app-bar.large.subtitle.font.name": "md.sys.typescale.body-large.font",
  "md.comp.app-bar.large.subtitle.font.weight": "md.sys.typescale.body-large.weight",
  "md.comp.app-bar.large.subtitle.font.size": "md.sys.typescale.body-large.size",
  "md.comp.app-bar.large.subtitle.line.height": "md.sys.typescale.body-large.line-height",
  "md.comp.app-bar.large.subtitle.font.tracking": "md.sys.typescale.body-large.tracking",
};

export const appBarTokens: Record<string, string | number> = Object.assign(
  {},
  appBarCommonColor,
  appBarCommonSpacing,
  appBarCommonShape,
  appBarCommonSize,
  appBarSizeSmall,
  appBarSizeMedium,
  appBarSizeLargeFlexible,
);

