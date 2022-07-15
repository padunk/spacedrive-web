import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const Button = (props: Props) => {
  const baseClassName =
    "flex justify-center items-center py-2 px-6 bg-blue-600 rounded-md text-lg ";
  const className = baseClassName + props.className;

  return (
    <>
      <button className={className} {...props}>
        {props.children}
      </button>
    </>
  );
};

export default Button;
