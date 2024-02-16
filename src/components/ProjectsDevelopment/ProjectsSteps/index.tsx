"use client"
import React from "react"
import styles from "./steps.module.css"
import Image from "@/components/Image"
import { useEffect, useRef } from "react"
import { Player } from "@lottiefiles/react-lottie-player"
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

    const listItemRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isActive && containerRef.current) {
            containerRef.current.scrollIntoView({block: "nearest"
        })
        }
    }, [isActive])

    return (
        <div
            // ref={containerRef}
            // className={`${styles.listItemContainer} ${isActive ? styles.active : ""}`}
        >
            <div onClick={handleClick} className={`${styles.listItem} ${isActive ? styles.active : ""}`}>
                <div className={`${styles.lineDiv} ${isActive ? styles.active : ""}`}></div>
                <div className={`${isActive ? styles.active : ""} d-flex  align-items-center gap-1 font-md`}>
                    <Player autoplay loop src={icon} className={styles.icons} />
                    <span className={styles.stepName}> {text}</span>
                </div>
            </div>
        </div>
    )
}

export default index
