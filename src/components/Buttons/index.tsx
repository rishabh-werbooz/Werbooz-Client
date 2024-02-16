import React from "react"
import styles from "./button.module.css"
import { Button, ButtonGroup } from "@chakra-ui/react"
import classNames from "classnames"

interface ButtonProps {
    type?: string
    variant: string
    rounded?: string
    className?: string
    text: string
    rightIcon?: any
    onClick?: (e: React.MouseEvent) => void
}

const index = ({ type, variant, onClick, rounded, text, rightIcon, className }: ButtonProps) => {
    const classes = classNames(styles.btn, "lh-150 fw-700", className)
    return (
        <>
            <Button
                variant={variant}
                rounded={rounded ? rounded : "none"}
                bgColor="#fff"
                className={classes}
                color="#003274"
                border="2px"
                borderColor="#003274"
                rightIcon={rightIcon}
            >
                {text}
            </Button>
        </>
    )
}

export default index
