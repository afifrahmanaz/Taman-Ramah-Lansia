import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    interactive?: boolean;
    className?: string;
}

export default function Card({ children, interactive = false, className = "" }: CardProps) {
    return (
        <div className={`${interactive ? "card-interactive" : "card"} ${className}`}>
            {children}
        </div>
    );
}
