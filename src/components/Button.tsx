import React from "react";
import * as cls from "./Button.module.css"

export function Button(props) {
    return (
        <button className={cls.button}>
          {props.children}
        </button>
    )
}