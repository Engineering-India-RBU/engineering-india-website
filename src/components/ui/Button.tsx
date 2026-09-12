type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'light'
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  className?: string
}

function Button({
  children,
  variant = 'primary',
  type = 'button',
  onClick,
  className = '',
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button button--${variant} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button