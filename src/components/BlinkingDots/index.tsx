'use client'
import React, { useState, useEffect } from "react"
import styles from "./blinkingDots.module.css"

const index = () => {
    const [dotCount, setDotCount] = useState(0)

    useEffect(() => {
        // Generate 30 to 40 blinking dots
        const count = Math.floor(Math.random() * (100 - 90 + 1)) + 90
        setDotCount(count)
    }, [])

    // Function to generate and append blinking dots
    const generateBlinkingDots = () => {
        const dots = []

        for (let i = 0; i < dotCount; i++) {
            const dotStyle: React.CSSProperties = {
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
            }

            dots.push(<div key={i} className={`${styles.blinkDot} ${styles.test}`} style={dotStyle}></div>)
        }

        return dots
    }

    return (
        <>
            <div>{dotCount > 0 && generateBlinkingDots()}</div>
        </>
    )
}

export default index
