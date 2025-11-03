export type MotionVariant = "expressive" | "standard";

const STANDARD: Record<string, number> = {
    "md.sys.motion.spring.fast.spatial.damping": 0.9,
    "md.sys.motion.spring.fast.spatial.stiffness": 1400,
    "md.sys.motion.spring.fast.effects.damping": 1,
    "md.sys.motion.spring.fast.effects.stiffness": 3800,

    "md.sys.motion.spring.default.spatial.damping": 0.9,
    "md.sys.motion.spring.default.spatial.stiffness": 700,
    "md.sys.motion.spring.default.effects.damping": 1,
    "md.sys.motion.spring.default.effects.stiffness": 1600,

    "md.sys.motion.spring.slow.spatial.damping": 0.9,
    "md.sys.motion.spring.slow.spatial.stiffness": 300,
    "md.sys.motion.spring.slow.effects.damping": 1,
    "md.sys.motion.spring.slow.effects.stiffness": 800,
};

const EXPRESSIVE: Record<string, number> = {
    "md.sys.motion.spring.fast.spatial.damping": 0.6,
    "md.sys.motion.spring.fast.spatial.stiffness": 800,
    "md.sys.motion.spring.fast.effects.damping": 1,
    "md.sys.motion.spring.fast.effects.stiffness": 3800,

    "md.sys.motion.spring.default.spatial.damping": 0.8,
    "md.sys.motion.spring.default.spatial.stiffness": 380,
    "md.sys.motion.spring.default.effects.damping": 1,
    "md.sys.motion.spring.default.effects.stiffness": 1600,

    "md.sys.motion.spring.slow.spatial.damping": 0.8,
    "md.sys.motion.spring.slow.spatial.stiffness": 200,
    "md.sys.motion.spring.slow.effects.damping": 1,
    "md.sys.motion.spring.slow.effects.stiffness": 800,
};

/**
 * Generate **motion** tokens (spring/duration/curves), optionally in "expressive" mode.
 *
 * - When `mode` is `"expressive"`, damping/stiffness and durations align with the
 *   MD3 Expressive update.
 * - When `"standard"`, values follow the baseline set.
 *
 * All values are numeric; unit semantics depend on the token (e.g., ms for duration).
 *
 * @param variant `"expressive"` (default) or `"standard"`.
 *
 * @example
 * ```ts
 * import { generateMotionTokens } from "@makmn1/material-design-token-gen";
 * const motion = generateMotionTokens("expressive");
 * // motion["md.sys.motion.spring.fast.spatial.damping"] -> e.g., 0.6
 * ```
 */
export function generateMotionTokens(
    variant: MotionVariant = "expressive"
): Record<string, number> {
    return variant === "standard" ? { ...STANDARD } : { ...EXPRESSIVE };
}