import React from "react";
import "./Button.scss";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
    return (
        <button {...props} className="custom-button">
            {props.children}
        </button>
    );
};
