import { useState } from 'react';
import './ToolTip.scss';

type Props = {
  text: string;
  children?: React.ReactNode | null;
};
export function ToolTip({ text, children }: Props) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <span
      className="tooltip"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && <span className="tooltip-text">{text}</span>}
    </span>
  );
}
