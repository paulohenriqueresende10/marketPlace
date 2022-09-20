import React from "react";
export interface InputPropsInterface
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({
  children,
  className,
  ...rest
}: InputPropsInterface) {
  return (
    <input {...rest} className={className}>
      {children}
    </input>
  );
}