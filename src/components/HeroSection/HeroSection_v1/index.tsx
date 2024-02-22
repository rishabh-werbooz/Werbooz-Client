"use client"
import React from "react"
import styles from "./heroSection.module.css"
import Heading from "@/components/Heading/Heading_v1"
import Description from "@/components/Description"
import Button from "@/components/Buttons"
import { Player } from "@lottiefiles/react-lottie-player"
import WebGLFluidSimulation from "@/components/FluildSimulation"
import BlinkingDots from "@/components/BlinkingDots"
import { FaLongArrowAltDown } from "react-icons/fa"

interface HeroProps {
    heading_1: string
    heading_2: string
    description_1: string
    description_2: string
    buttonText?: string
    lottieFile: string
}

const index = ({ heading_1, heading_2, description_1, description_2, buttonText, lottieFile }: HeroProps) => {
    return (
        <>
            <div className={styles.heroSectionBackground}>
                <WebGLFluidSimulation />

                <div className={`${styles.heroSection} d-flex justify-content-center flex-column  align-items-center gap-1-5 `}>
                    <BlinkingDots />

                    <div className={styles.test}>
                        <Heading
                            data={{
                                heading: heading_1,
                            }}
                            className="fw-700 font-3_5xl"
                            variant="center"
                        />
                        <Heading
                            data={{
                                heading: heading_2,
                            }}
                            className="fw-700 font-3_5xl"
                            variant="center"
                        />
                    </div>
                    <div className={styles.test}>
                        <Description description={description_1} className={styles.description} />
                        <Description description={description_2} className={styles.description} />
                    </div>
                    <div className={`${styles.test} d-flex justify-content-center gap-1`}>
                        <Button variant="solid" text={buttonText ? buttonText : "Get Started"} rounded="full" className={`${styles.button} fw-700 mt-1`} />
                    </div>
                    <div className={`d-flex justify-content-end align-items-end ${styles.test}`}>
                        <Player autoplay loop src={lottieFile} className={styles.lottieImg} />
                    </div>

                    <div className={`${styles.test} ${styles.scrollDown} d-flex justify-content-center flex-column align-items-center `}>
                        <Heading
                            data={{
                                heading: "Scroll Down",
                            }}
                            className="fw-600 font-md"
                            variant="center"
                        />
                        <FaLongArrowAltDown size={30} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default index
