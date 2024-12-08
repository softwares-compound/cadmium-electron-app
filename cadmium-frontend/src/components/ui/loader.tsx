import React from "react";
import clsx from "clsx";

interface LoaderProps {
    size?: "2" | "4" | "6" | "8" | "10" | "12" | "14" | "16"; // Granular size scaling
    color?: "primary" | "secondary" | "accent" | "muted" | "destructive"; // Tailwind config colors
    speed?: "slow" | "normal" | "fast"; // Animation speed
    message?: string; // Loading message
    className?: string; // Additional className for styling
}

/**
 * A custom loader component that provides size, color, speed and message options.
 *
 * This component renders a div with a flexbox layout and a rounded div that animates
 * based on the speed option. The size, color and speed options are controlled by the
 * props passed to the component.
 *
 * The component also renders a paragraph with the message text.
 *
 * @example
 * <Loader size="large" color="accent" speed="fast" message="Loading..." />
 *
 * @param {CustomLoaderProps} props The props object passed to the component.
 * @param {string} props.size The size of the loader. Options are "2" | "4" | "6" | "8" | "10" | "12" | "14" | "16".
 * @param {string} props.color The color of the loader. Options are "primary", "secondary", "accent", "muted" or "destructive".
 * @param {string} props.speed The speed of the animation. Options are "slow", "normal" or "fast".
 * @param {string} props.message The message displayed below the loader. Defaults to "Loading...".
 * @param {string} props.className Additional className for custom styling.
 * @returns {React.ReactElement} The loader component.
 */
const Loader: React.FC<LoaderProps> = ({
    size = "8", // Default size
    color = "primary", // Default color
    speed = "normal", // Default speed
    message = "", // Default message
    className = "", // Additional styling
}) => {
    const sizeClassesMap = {
        "2": "w-2 h-2 border-[0.5px]",
        "4": "w-4 h-4 border",
        "6": "w-6 h-6 border-[1.5px]",
        "8": "w-8 h-8 border-2",
        "10": "w-10 h-10 border-[2.5px]",
        "12": "w-12 h-12 border-3",
        "14": "w-14 h-14 border-[3.5px]",
        "16": "w-16 h-16 border-4",
    };

    const sizeClasses = sizeClassesMap[size] || sizeClassesMap["8"];

    const colorClasses = {
        primary: "border-primary border-t-primary-foreground",
        secondary: "border-secondary border-t-secondary-foreground",
        accent: "border-accent border-t-accent-foreground",
        muted: "border-muted border-t-muted-foreground",
        destructive: "border-destructive border-t-destructive-foreground",
    };

    const speedClasses = {
        slow: "animate-spin-slow",
        normal: "animate-spin",
        fast: "animate-spin-fast",
    };

    return (
        <div className={clsx("flex w-full items-center justify-center", className)}>
            <div className="flex flex-col items-center space-y-4">
                <div
                    className={clsx(
                        "rounded-full",
                        sizeClasses,
                        colorClasses[color],
                        speedClasses[speed]
                    )}
                />
                {message && <p className="text-muted-foreground">{message}</p>}
            </div>
        </div>
    );
};

export default Loader;
