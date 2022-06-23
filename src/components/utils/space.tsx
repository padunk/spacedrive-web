import React from 'react'

type SpaceProps = React.HTMLAttributes<HTMLSpanElement> & {
  width?: string | number;
  height?: string | number;
  display?: string;
  className?: string;
};

const Space: React.FC<SpaceProps> = ({
  width = "100%",
  height,
  display = "block",
  className,
  ...props
}) => {
  const style = {
    width,
    height,
    display,
  };
  return <span style={{ ...style }} className={className} {...props} />;
};

export default Space;
