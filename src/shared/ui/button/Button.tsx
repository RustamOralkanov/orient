import React from "react";
import "./Button.scss";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
    return (
        <button {...props} className={["custom-button", props.disabled ? "opacity-50 cursor-not-allowed" : "", props.className].join(" ")}>
            {props.children}
        </button>
    );
};
