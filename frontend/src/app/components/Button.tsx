// components/Button.tsx
import { clsx } from "clsx";
import { ReactNode } from "react";
import styles from "@/styles/components/Button.module.scss";

type ButtonVariant = "success" | "danger" | "primary" | "secondary";

interface ButtonProps {
    variant: ButtonVariant;
    children?: ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

export function Button({ variant, children, onClick, type = "button", }: ButtonProps) {
  return (
        <button type={type} className={clsx(styles.button, styles[variant])} onClick={onClick} >
            {children}
        </button>
    );
}
