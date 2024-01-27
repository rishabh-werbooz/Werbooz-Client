import React from 'react'
import styles from './button.module.css'
import { Button, ButtonGroup } from '@chakra-ui/react'

interface ButtonProps {
    type?: string
    variant: string
    rounded?: string
    text: string
    onClick?: () => void
}

const index = ({ type, variant, onClick, rounded,text }: ButtonProps) => {
    return (
        <>
            <Button
                variant={variant}
                rounded={rounded ? rounded : 'none'}
                className={`${styles.btn}`}
                bgColor="#fff"
                color="#003274"
                border="2px"
                borderColor="#003274"
            >
                {text}
            </Button>
        </>
    )
}

export default index
