export const dividerEnabledContainer: Record<string, string | number> = {
  "md.comp.divider.container.thickness": "1dp",
  "md.comp.divider.container.color": "md.sys.color.outline-variant",
};

export const dividerInsetTokens: Record<string, string | number> = {
  "sm.comp.divider.inset.start": 0,
  "sm.comp.divider.inset.end": 0,
};

export const dividerTokens: Record<string, string | number> = Object.assign(
  {},
  dividerEnabledContainer,
  dividerInsetTokens,
);
