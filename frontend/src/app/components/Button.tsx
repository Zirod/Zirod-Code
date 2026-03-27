import { clsx } from "clsx";
import { ReactNode } from "react";
import styles from "@/styles/components/Button.module.scss";

type ButtonVariant = "success" | "danger" | "primary" | "secondary";

interface ButtonProps {
  variant: ButtonVariant;
  children?: ReactNode;
  onClick?: () => void;
  icon?: ReactNode; 
  iconPosition?: "left" | "right";
  type?: "button" | "submit" | "reset";
}

export function Button({ variant, children, onClick, type = "button", icon, iconPosition = "left", }: ButtonProps) {

    return (
        <button type={type} className={clsx(styles.button, styles[variant])} onClick={onClick} >
            {icon && ( <span className={styles.icon}>{icon}</span> )} {children && <span>{children}</span>}
        </button>
    );

}