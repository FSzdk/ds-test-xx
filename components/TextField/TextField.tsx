import * as Ariakit from "@ariakit/react"
import styles from "./TextField.module.css"

export interface TextFieldProps {
  label: string
  required?: boolean
  placeholder?: string
}

export function TextField({ label, required, placeholder }: TextFieldProps) {
  return (
    <div className={styles.root}>
      <label className={styles.label}>
        {label}
        {required && <span className={styles.requiredMark}> *</span>}
      </label>
      <Ariakit.Focusable
        as="input"
        className={styles.input}
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}
