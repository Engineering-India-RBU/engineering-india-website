import { useMagnetic } from "../../hooks/useMouseParallax";

interface Props {
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}

export default function MagneticButton({ children, className = "", ...props }: Props) {
  const ref = useMagnetic(0.35);

  return (
    <button ref={ref} className={`magnetic-btn ${className}`} {...props}>
      {children}
    </button>
  );
}
