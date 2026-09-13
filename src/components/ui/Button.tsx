type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'light' | 'ghost'
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  className?: string
  href?: string
  target?: string
}

function Button({
  children,
  variant = 'primary',
  type = 'button',
  onClick,
  className = '',
  href,
  target,
}: ButtonProps) {
  const classes = `button button--${variant} ${className}`

  if (href != null) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  )
}

export default Button