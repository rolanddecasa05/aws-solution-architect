import type { ElementType, FC, ReactNode } from 'react'

export interface TextTypeProps {
  /** Text or array of texts to type out. */
  text: string | string[]
  /** HTML tag to render the component as. */
  as?: ElementType
  /** Speed of typing in milliseconds. */
  typingSpeed?: number
  /** Initial delay before typing starts. */
  initialDelay?: number
  /** Time to wait between typing and deleting. */
  pauseDuration?: number
  /** Speed of deleting characters. */
  deletingSpeed?: number
  /** Whether to loop through texts array. */
  loop?: boolean
  /** Optional class name for styling. */
  className?: string
  /** Whether to show the cursor. */
  showCursor?: boolean
  /** Hide cursor while typing. */
  hideCursorWhileTyping?: boolean
  /** Character or React node to use as cursor. */
  cursorCharacter?: string | ReactNode
  /** Animation duration for cursor blinking. */
  cursorBlinkDuration?: number
  /** Optional class name for cursor styling. */
  cursorClassName?: string
  /** Array of colors for each sentence. */
  textColors?: string[]
  /** Random typing speed within range for human-like feel. */
  variableSpeed?: { min: number; max: number }
  /** Callback fired after each sentence is finished. */
  onSentenceComplete?: (sentence: string, index: number) => void
  /** Start typing when component is visible in viewport. */
  startOnVisible?: boolean
  /** Type backwards (right to left). */
  reverseMode?: boolean
}

declare const TextType: FC<TextTypeProps>
export default TextType
