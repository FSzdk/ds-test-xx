import React from 'react';
import styles from './TextField.module.css';

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  error = false,
  helperText,
  fullWidth = false,
  id,
  ...props
}) => {
  const fieldId = id || `textfield-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`${styles.container} ${fullWidth ? styles.fullWidth : ''}`}>
      {label && (
        <label htmlFor={fieldId} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={fieldId}
        className={`${styles.input} ${error ? styles.error : ''}`}
        {...props}
      />
      {helperText && (
        <span className={`${styles.helperText} ${error ? styles.errorText : ''}`}>
          {helperText}
        </span>
      )}
    </div>
  );
};
