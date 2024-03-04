import React from "react"
import styles from "./listIcon.module.css"

interface Props {
    className?: string
    innerBgColor?: string
    outerBgColor?: string
    outerBorderColor?: string
}

const index = ({ className = "", innerBgColor = "#003274", outerBgColor = "#fff", outerBorderColor = "#fff" }: Props) => {
    return (
        <div
            className={`${styles.outer} ${className}`}
            style={{
                backgroundColor: outerBgColor,
                borderColor: outerBorderColor,
            }}
        >
            <div
                className={styles.inner}
                style={{
                    backgroundColor: innerBgColor,
                }}
            ></div>
        </div>
    )
}

export default index
