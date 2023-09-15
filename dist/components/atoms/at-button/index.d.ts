import { ButtonHTMLAttributes } from 'react'
export declare const AT_BUTTON_VARIANT: {
  readonly PRIMARY: 'primary'
  readonly SECONDARY: 'secondary'
  readonly TERTIARY: 'tertiary'
}
export type AtButtonVariant = keyof typeof AT_BUTTON_VARIANT
export declare const variantClasses: Record<AtButtonVariant, string>
export interface AtButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  variant?: AtButtonVariant
  isDisabled?: boolean
}
export declare const AtButton: ({
  label,
  variant,
  isDisabled,
  onClick,
}: AtButtonProps) => import('react/jsx-runtime').JSX.Element
