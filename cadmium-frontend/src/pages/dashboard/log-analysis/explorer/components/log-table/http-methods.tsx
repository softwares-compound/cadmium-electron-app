import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const httpMethodBadgeVariants = cva(
    "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default: "border-transparent bg-primary text-primary-foreground shadow",
                GET: "border-success bg-success-light text-success dark:text-success-foreground shadow",
                POST: "border-primary-foreground bg-primary text-primary-foreground shadow",
                PUT: "border-yellow-600 bg-yellow-600/20 text-yellow-600 shadow",
                PATCH: "border-secondary-foreground bg-secondary text-secondary-foreground shadow",
                DELETE:
                    "border-destructive bg-destructive-light text-destructive shadow",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export interface HttpMethodBadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof httpMethodBadgeVariants> { }

/**
* `HttpMethodBadge` is a React functional component that renders a stylized badge
* representing an HTTP method. The badge is styled using the `class-variance-authority`
* library which allows for flexible styling based on the `variant` prop.
* 
* Props:
* - `className` (string): Additional class names to apply to the badge for custom styling.
* - `variant` (`VariantProps<typeof httpMethodBadgeVariants>`): The variant of the badge, 
*   which determines the styling based on the HTTP method type. Supported values are:
*   - `default`: Default styling for the badge.
*   - `GET`: Styles the badge for a GET request, using success colors.
*   - `POST`: Styles the badge for a POST request, using primary colors.
*   - `PUT`: Styles the badge for a PUT request, using yellow colors.
*   - `PATCH`: Styles the badge for a PATCH request, using secondary colors.
*   - `DELETE`: Styles the badge for a DELETE request, using destructive colors.
* - `...props` (React.HTMLAttributes<HTMLDivElement>): Additional HTML attributes passed
*   to the badge element.
* 
* The component applies base styles for the badge, such as rounded borders, padding,
* font size, and transition effects, and it integrates with the `cn` utility for 
* managing conditional class names.
*/
function HttpMethodBadge({
    className,
    variant,
    ...props
}: HttpMethodBadgeProps) {
    return (
        <div
            className={cn(httpMethodBadgeVariants({ variant }), className)}
            {...props}
        />
    );
}

export { HttpMethodBadge, httpMethodBadgeVariants };
