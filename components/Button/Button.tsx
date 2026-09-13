import * as Ariakit from "@ariakit/react"
import styles from "./Button.module.css"

interface ButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "danger"
  disabled?: boolean
  onClick?: () => void
}

export function Button({
  children,
  variant = "primary",
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <Ariakit.Button
      className={`${styles.root} ${styles[variant]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Ariakit.Button>
  )
}
