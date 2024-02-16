"use client"
import React, { useRef, useEffect } from "react"
import styles from "./simulation.module.css"
import webGLFluidEnhanced from "webgl-fluid-enhanced"

const index = () => {
    const canvasRef = useRef(null)

    // webGL configuation
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
            SHADING: false,
            CURL: 100,
            COLOR_PALETTE: ["#0000ff", "#111111", "#1d1d1d", "#eaeaea", "#4dba87"],
            // when using hands move show the simulation
            // HANDS_MOVE: true,
            HOVER: true,
        })
    }, [])

    return (
        <>
            <canvas ref={canvasRef} className={styles.canvas} />
        </>
    )
}

export default index
