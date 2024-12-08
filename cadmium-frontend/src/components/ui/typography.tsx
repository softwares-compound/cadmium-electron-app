import React from "react";

type TypographyProps = {
    variant?:
    | "xs"
    | "sm"
    | "base"
    | "md"
    | "lg"
    | "xl"
    | "2x"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl"
    | "h1"
    | "h2"
    | "h3"
    | "p"
    | "small"
    | "blockquote"
    | "code"
    | "ul"
    | "ol"
    | "hr"
    | "caption";
    children?: React.ReactNode;
    className?: string;
};

export const Typography: React.FC<TypographyProps> = ({
    variant = "p",
    children,
    className = "",
}) => {
    const baseClass = "text-foreground";
    const variantClasses = {
        xs: "text-xs", // 11px
        sm: "text-sm", // 12px
        base: "text-base", // 13px
        md: "text-md", // 15px
        lg: "text-lg", // 17px
        xl: "text-xl", // 19px
        "2x": "text-2xl", // 22px
        "3xl": "text-3xl", // 25px
        "4xl": "text-4xl", // 29px
        "5xl": "text-5xl", // 35px
        "6xl": "text-6xl", // 41px
        "7xl": "text-7xl", // 49px
        "8xl": "text-8xl", // 60px
        "9xl": "text-9xl", // 72px
        h1: "text-4xl font-bold mb-6",
        h2: "text-3xl font-semibold mb-5",
        h3: "text-2xl font-medium mb-4",
        p: "text-base mb-4",
        small: "text-sm text-muted-foreground mb-2",
        blockquote:
            "border-l-4 pl-4 italic text-muted-foreground border-muted mb-4",
        code: "bg-muted/10 px-2 py-1 rounded text-sm font-mono text-accent-foreground",
        ul: "list-disc list-inside mb-4 space-y-2",
        ol: "list-decimal list-inside mb-4 space-y-2",
        hr: "border-t border-muted my-4",
        caption: "text-xs text-muted-foreground",
    };

    const Component =
        variant === "hr" ? "hr" : variant === "code" ? "code" : "div";

    return (
        <Component
            className={`${baseClass} ${variantClasses[variant] || ""} ${className}`}
        >
            {children}
        </Component>
    );
};
