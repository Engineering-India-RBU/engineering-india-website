import { forwardRef } from "react";
import { useTilt } from "../../hooks/useMouseParallax";

interface Props {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  style?: React.CSSProperties;
}

const TiltCard = forwardRef<HTMLDivElement, Props>(
  ({ children, className = "", maxTilt = 8, style }, ref) => {
    const tiltRef = useTilt(maxTilt);

    return (
      <div
        ref={(node) => {
          (tiltRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof ref === "function") ref(node);
          else if (ref && typeof ref === "object") (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        className={`tilt-card ${className}`}
        style={style}
      >
        {children}
      </div>
    );
  }
);

TiltCard.displayName = "TiltCard";
export default TiltCard;
