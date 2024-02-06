"use client"
import React, { useState, useEffect, useRef } from "react"
import styles from "./heroSection.module.css"
import Heading from "@/components/Heading"
import Description from "@/components/Description"
import Button from "@/components/Buttons"
import Image from "@/components/Image"
import { Player } from "@lottiefiles/react-lottie-player"
import { motion } from "framer-motion"
import webGLFluidEnhanced from "webgl-fluid-enhanced"

const index = () => {
    const [dotCount, setDotCount] = useState(0)

    useEffect(() => {
        // Generate 20 to 30 blinking dots
        const count = Math.floor(Math.random() * (40 - 30 + 1)) + 30
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
    const canvasRef = useRef(null)

    useEffect(() => {
        webGLFluidEnhanced.simulation(canvasRef.current!, {
            // PRESSURE: 0.2,
            // SUNRAYS: false,
            // START_SPLATS: 10,
            // DENSITY_DISSIPATION: 3,
            BACK_COLOR: " #003274",
            BLOOM: true,
            BLOOM_ITERATIONS: 8,
            BLOOM_RESOLUTION: 0.5,
            BLOOM_INTENSITY: 0.8,
            BLOOM_THRESHOLD: 0.6,
            BLOOM_SOFT_KNEE: 0.7,

            CURL: 100,
            COLOR_PALETTE: ["#0000ff", "#111111", "#1d1d1d", "#eaeaea", "#4dba87"],
        })
    }, [])
    return (
        <>
            <div className={styles.heroSectionBackground}>
                <canvas
                    ref={canvasRef}
                    style={{
                        width: "100%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 1,
                        minHeight: "855px",
                    }}
                />

                <div
                    className={`${styles.heroSection} d-flex justify-content-center flex-column  align-items-center gap-1-5 `}
                    style={{
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <div>{dotCount > 0 && generateBlinkingDots()}</div>

                    <div className={styles.test}>
                        <Heading
                            data={{
                                heading: "Revolutionize Your Business With",
                            }}
                            className="fw-700 font-3_5xl"
                            variant="center"
                        />
                        <Heading
                            data={{
                                heading: "Werbooz's Web Expertise",
                            }}
                            className="fw-700 font-3_5xl"
                            variant="center"
                        />
                    </div>
                    <div className={styles.test}>
                        <Description description="Unleash Your Online Potential with Werbooz…" className={styles.Description} />
                        <Description description="Transform Your Business with Cutting-Edge Web Solutions" className={styles.Description} />
                    </div>
                    <div className={`${styles.test} d-flex justify-content-center gap-1`}>
                        <Button variant="solid" text="Schedule a Call" rounded="full" className={`${styles.button} fw-700 mt-1`} />
                    </div>
                    <motion.div className={styles.test} animate={{ y: [-10, 10], transition: { repeat: Infinity, duration: 1, repeatType: "reverse" } }}>
                        {" "}
                        <Player autoplay loop src="/assets/lottie/rocket-2.json" style={{ height: "300px", width: "300px", zIndex: "1000" }} />
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default index
