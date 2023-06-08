import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const BtnRedirect = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={classNames(
        "bg-purple6  py-3 px-4 flex items-center rounded-md justify-center gap-2 hover:bg-purple5 transition-all disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default BtnRedirect;
