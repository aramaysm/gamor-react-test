import React, { useEffect } from "react";
import { NavBar } from "../../layouts/NavBar";

import styles from "./style.module.scss"
import { ButtonProps } from "../../services/models";


export const Portal = ({}) => {

    const buttonsNavBar: ButtonProps[] = [
        {
            color: "secondary",
            label: "Sign In",
            onClick:()=>{}
        },
        {
            color: "secondary",
            label: "Create Account",
            onClick:()=>{}
        }
    ]

    return (
        <div className={styles.container}>
            <NavBar title={"Gamor"} buttons={buttonsNavBar} />
        </div>
    )
}

