import React from "react";
import { Link, LinkProps } from "react-router-dom";
import clsx from "clsx"; // For conditional class management (optional)

interface CustomLinkProps extends LinkProps {
    className?: string;
    children: React.ReactNode;
    variant?: "default" | "primary" | "secondary"; // Optional variants
}

const CustomLink: React.FC<CustomLinkProps> = ({
    to,
    className = "",
    children,
    variant = "default",
    ...rest
}) => {
    const baseClasses = "inline-block text-sm underline transition-colors";
    const variantClasses = {
        default: "hover:text-primary/70",
        primary: "hover:text-primary/70",
        secondary: "hover:text-secondary/70",
    };

    return (
        <Link
            to={to}
            className={clsx(baseClasses, variantClasses[variant], className)}
            {...rest}
        >
            {children}
        </Link>
    );
};

export default CustomLink;
