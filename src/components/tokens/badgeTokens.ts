export const badgeEnabledContainer: Record<string, string | number> = {
  "md.comp.badge.color": "md.sys.color.error",
  "md.comp.badge.shape": "md.sys.shape.corner.full",
  "md.comp.badge.size": "6dp",
  "md.comp.badge.large.color": "md.sys.color.error",
  "md.comp.badge.large.shape": "md.sys.shape.corner.full",
  "md.comp.badge.large.size": "16dp",
};

export const badgeEnabledLabelText: Record<string, string | number> = {
  "md.comp.badge.large.label.text.color": "md.sys.color.on-error",
  "md.comp.badge.large.label.text.font": "md.sys.typescale.label-small.font",
  "md.comp.badge.large.label.text.line.height": "md.sys.typescale.label-small.line-height",
  "md.comp.badge.large.label.text.size": "md.sys.typescale.label-small.size",
  "md.comp.badge.large.label.text.tracking": "md.sys.typescale.label-small.tracking",
  "md.comp.badge.large.label.text.weight": "md.sys.typescale.label-small.weight",
};

export const badgeUnassignedTokenAttributes: Record<string, string | number> = {
  "md.comp.badge.large.max.width": "34dp",
  "md.comp.badge.small.distance.from.top.trailing.icon.corner.to.leading.badge.corner": "6dp",
  "md.comp.badge.small.distance.from.top.trailing.icon.corner.to.bottom.trailing.badge.corner": "6dp",
  "md.comp.badge.large.distance.from.top.trailing.icon.corner.to.leading.badge.corner": "12dp",
  "md.comp.badge.large.distance.from.top.trailing.icon.corner.to.bottom.trailing.badge.corner": "14dp",
};

export const badgeTokens: Record<string, string | number> = Object.assign(
  {},
  badgeEnabledContainer,
  badgeEnabledLabelText,
  badgeUnassignedTokenAttributes,
);

