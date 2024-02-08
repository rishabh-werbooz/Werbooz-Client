'use client'
import React from "react"
import styles from "./heroSection.module.css"
import Heading from "@/components/Heading"
import Description from "@/components/Description"
import Button from "@/components/Buttons"
import Image from "@/components/Image"
import WebGLFluidSimulation from "@/components/FluildSimulation"
import BlinkingDots from "@/components/BlinkingDots"

const index = () => {
    return (
        <>
            <div className={`${styles.HerosectionContainer} d-flex justify-content-center flex-column  align-items-center gap-1-5`}>
                <WebGLFluidSimulation />
                <BlinkingDots />
                <div className={styles.test}>
                    <Heading
                        data={{
                            heading: "News & Articles",
                        }}
                        className="fw-700 font-3_5xl"
                        variant="center"
                    />
                </div>
                <div className={styles.test}>
                    <Description description="Lorem ipsum dolor sit amet consectetur." className={styles.description} />
                    <Description description="adipiscing elit interdum ullamcorper sed pharetra sene" className={styles.description} />
                </div>
            </div>
        </>
    )
}

export default index
