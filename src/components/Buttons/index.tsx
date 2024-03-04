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
    leftIcon?: any
    onClick?: (e: React.MouseEvent) => void
}

const index = ({ type, variant, onClick, rounded, text, rightIcon,leftIcon, className }: ButtonProps) => {
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
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                onClick={onClick}
            >
                {text}
            </Button>
        </>
    )
}

export default index
