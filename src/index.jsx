import React from "react";
import { cva } from "class-variance-authority"; // Importing a utility for handling class names with variants
import css from './style.module.css'; // Importing CSS module for styling

// Creating a button variant and size handler using cva (Class Variance Authority)
const button = cva(css.base, {
    variants: {
        // Defining variant options (e.g., primary, secondary) for the button
        variant: {
            primary: css.primary,
            secondary: css.secondary,
            success: css.success,
            danger: css.danger
        },
        // Defining size options (e.g., small, medium, large) for the button
        size: {
            small: css.small,
            medium: css.medium,
            large: css.large
        }
    },
    // Setting default variant and size if none are provided
    defaultVariants: {
        variant: "primary",
        size: "medium"
    }
})

// Defining the Button component
const Button = ({ value, variant, className, as, href, size, ...props }) => {
    // Normalizing size prop: converting 'sm' and 'lg' to 'small' and 'large' respectively
    if (size) {
        if (size === "sm") {
            size = "small";
        }
        if (size === "lg") {
            size = "large";
        }
        if (size === "medium") {
            size = "medium";
        }
    }

    // Rendering an input element if 'as' prop is set to 'input'
    if (as === "input") {
        return <input className={button({ variant, size, className })} value={value} {...props} />
    }

    // Rendering an anchor (link) element if 'href' prop is provided
    if (href) {
        return <a href={href} role="button" className={button({ variant, size, className })} {...props}>{value}</a>
    }

    // Default: Rendering a button element
    return (
        <>
            <button className={button({ variant, size, className })} {...props}>{value}</button>
        </>
    )
};

export default Button; // Exporting the Button component for use in other parts of the application
