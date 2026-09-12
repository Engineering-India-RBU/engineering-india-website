type SectionProps = {
  children: React.ReactNode
  className?: string
}

function Section({ children, className = '' }: SectionProps) {
  return (
    <section className={`section ${className}`}>
      {children}
    </section>
  )
}

export default Section