import React from "react"
import Image from "@/components/Image"
import styles from "./iconBox.module.css"
import classNames from "classnames"

interface IconBoxProps {
    image: string
    className?: string
    borderLeft?: boolean
    borderRight?: boolean
    borderTop?: boolean
    borderBottom?: boolean
}

const index = ({ image,className, borderLeft, borderRight, borderTop, borderBottom }: IconBoxProps) => {
    const iconBoxClass = classNames(styles.iconBox, className, {
        [styles.borderLeft]: borderLeft,
        [styles.borderRight]: borderRight,
        [styles.borderTop]: borderTop,
        [styles.borderBottom]: borderBottom,
    })

    return (
        <>
            <div>
                <div className={iconBoxClass}>
                    <div className={`${styles.iconBox__icon}`}>
                        <Image src={image} alt="IconBox" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default index
