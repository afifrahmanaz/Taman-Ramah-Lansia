import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline";
    icon?: ReactNode;
    className?: string;
}

export default function Button({
    children,
    variant = "primary",
    icon,
    className = "",
    ...props
}: ButtonProps) {
    const variantClasses = {
        primary: "btn-primary",
        secondary: "btn-secondary",
        outline: "btn-outline",
    };

    return (
        <button className={`btn ${variantClasses[variant]} ${className}`} {...props}>
            {children}
            {icon && <span className="flex-shrink-0">{icon}</span>}
        </button>
    );
}
