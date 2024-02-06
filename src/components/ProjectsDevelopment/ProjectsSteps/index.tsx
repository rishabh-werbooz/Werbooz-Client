"use client"
import React from "react"
import styles from "./steps.module.css"
import Image from "@/components/Image"
import { useEffect, useRef } from "react"
interface ListProps {
    index: number
    text: string
    isActive: boolean
    onClick: (index: number) => void
    icon: string
}

const index = ({ index, text, isActive, onClick, icon }: ListProps) => {
    const handleClick = () => {
        onClick(index)
    }

    // const listItemRef = useRef<HTMLDivElement>(null)
    // const containerRef = useRef<HTMLDivElement>(null)

    // useEffect(() => {
    //     if (isActive && containerRef.current) {
    //         containerRef.current.scrollIntoView({block: "nearest" 
    //     })
    //     }
    // }, [isActive])

    return (
        <div>
            <div onClick={handleClick} className={`${styles.listItem} ${isActive ? styles.active : ""}`}>
                <div className={`${styles.lineDiv} ${isActive ? styles.active : ""}`}></div>
                <div className="d-flex  align-items-center gap-1">
                    <Image src={icon} className={styles.icon} alt="icon" />
                    {text}
                </div>
            </div>
        </div>
    )
}

export default index
