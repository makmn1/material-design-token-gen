# Motion Tokens
[Source](https://m3.material.io/styles/motion/overview/specs)

From the spec:
> The easing, duration, and path tokens are used by the legacy system, so can be ignored.

Therefore, only the spring tokens are included here.

As of the time of writing this (October 31st, 2025), the platform option on the spec's token table
doesn't change the value of these tokens, but this may change in the future if Web support is implemented
by the Google team

## Standard
| Token                                          | Value |
|------------------------------------------------|-------|
| md.sys.motion.spring.fast.spatial.damping      | 0.9   |
| md.sys.motion.spring.fast.spatial.stiffness    | 1400  |
| md.sys.motion.spring.fast.effects.damping      | 1     |
| md.sys.motion.spring.fast.effects.stiffness    | 3800  |
| md.sys.motion.spring.default.spatial.damping   | 0.9   |
| md.sys.motion.spring.default.spatial.stiffness | 700   |
| md.sys.motion.spring.default.effects.damping   | 1     |
| md.sys.motion.spring.default.effects.stiffness | 1600  |
| md.sys.motion.spring.slow.spatial.damping      | 0.9   |
| md.sys.motion.spring.slow.spatial.stiffness    | 300   |
| md.sys.motion.spring.slow.effects.damping      | 1     |
| md.sys.motion.spring.slow.effects.stiffness    | 800   |

## Expressive
| Token                                          | Value |
|------------------------------------------------|-------|
| md.sys.motion.spring.fast.spatial.damping      | 0.6   |
| md.sys.motion.spring.fast.spatial.stiffness    | 800   |
| md.sys.motion.spring.fast.effects.damping      | 1     |
| md.sys.motion.spring.fast.effects.stiffness    | 3800  |
| md.sys.motion.spring.default.spatial.damping   | 0.8   |
| md.sys.motion.spring.default.spatial.stiffness | 380   |
| md.sys.motion.spring.default.effects.damping   | 1     |
| md.sys.motion.spring.default.effects.stiffness | 1600  |
| md.sys.motion.spring.slow.spatial.damping      | 0.8   |
| md.sys.motion.spring.slow.spatial.stiffness    | 200   |
| md.sys.motion.spring.slow.effects.damping      | 1     |
| md.sys.motion.spring.slow.effects.stiffness    | 800   |

## Composite Tokens
These tokens are a combination of the spring tokens in the previous section.
They can be applied with standard or expressive tokens, but you shouldn't mix both
(e.g. don't use the standard value for damping with the expressive value for stiffness and vice versa).

For brevity, assume each cell has the prefix **md.sys.motion.spring**

| Token           | Damping                 | Stiffness                 |
|-----------------|-------------------------|---------------------------|
| fast.spatial    | fast.spatial.damping    | fast.spatial.stiffness    |
| fast.effects    | fast.effects.damping    | fast.effects.stiffness    |
| default.spatial | default.spatial.damping | default.spatial.stiffness |
| default.effects | default.effects.damping | default.effects.stiffness |
| slow.spatial    | slow.spatial.damping    | slow.spatial.stiffness    |
| slow.effects    | slow.effects.damping    | slow.effects.stiffness    |
