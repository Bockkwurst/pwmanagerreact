import React, {useState} from "react";
import styles from './compcss/button.module.css'

const CustomButton = ({buttonText, buttonClass}) => {

    return (
        <div className={styles.buttonContainer}>
            <button className={styles.buttonClass}>
                <span></span>
                {buttonText}
                <span></span>
            </button>
        </div>
    )
}

export default CustomButton;