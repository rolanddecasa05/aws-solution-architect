import type { CSSProperties, FC, ReactNode } from 'react'

export type GradientTextVariant = 'linear' | 'flow' | 'conic'
export type GradientTextDirection = 'horizontal' | 'vertical' | 'diagonal'

export interface GradientTextProps {
  /** The text to fill with the gradient. */
  children: ReactNode
  /** Colors of the gradient, in order. The first color is repeated at the end so loops stay seamless. */
  colors?: string[]
  /** Seconds for one full cycle of the animation. */
  animationSpeed?: number
  /** How the colors move. */
  variant?: GradientTextVariant
  /** Direction of the gradient in degrees. 90 runs left to right, 180 top to bottom. */
  angle?: number
  /** Named direction shorthand. Overrides `angle` when provided. */
  direction?: GradientTextDirection
  /** How broad the colors are. Higher values show fewer colors at once in longer, calmer bands. */
  scale?: number
  /** Eases back and forth instead of scrolling the gradient in one direction forever. */
  yoyo?: boolean
  /** A soft bloom of the gradient colors around the letters, from 0 to 1. */
  glow?: number
  /** Wraps the text in a pill with an animated gradient outline that works on any background. */
  showBorder?: boolean
  /** Thickness of the outline in px. */
  borderWidth?: number
  /** Holds the colors still while the pointer is over the text. */
  pauseOnHover?: boolean
  /** While hovered, the colors are drawn toward the pointer. */
  followPointer?: boolean
  /** Extra class names for the root element. */
  className?: string
  /** Inline styles for the root element. */
  style?: CSSProperties
}

declare const GradientText: FC<GradientTextProps>
export default GradientText
