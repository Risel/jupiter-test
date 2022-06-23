import { FC } from "react";
import s from "./Button.module.scss";
import cn from "classnames";

interface ButtonProps {
  text: string;
  variant: "dark" | "light";
  onClick?: () => {};
}

const Button: FC<ButtonProps> = ({ text, variant, onClick }) => {
  return (
    <button
      className={cn(s.button, variant === "dark" ? s.dark : s.light)}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
