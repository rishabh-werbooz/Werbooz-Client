
import React from "react"
import styles from "./heroSection.module.css"
import Heading from "@/components/Heading/Heading_v1"
import Description from "@/components/Description"
import Button from "@/components/Buttons"
import Image from "@/components/Image"
import WebGLFluidSimulation from "@/components/FluildSimulation"
import BlinkingDots from "@/components/BlinkingDots"

interface Props {
    heading: string
    description_1: string
    description_2: string
}

const index = ({ heading, description_1, description_2 }: Props) => {
    return (
        <>
            <div className={`${styles.HerosectionContainer} d-flex justify-content-center flex-column  align-items-center gap-1-5`}>
                {/* <WebGLFluidSimulation /> */}
                <BlinkingDots />
                <div className={styles.test}>
                    <Heading
                        data={{
                            heading: heading,
                        }}
                        className="fw-700 font-3_5xl"
                        variant="center"
                    />
                </div>
                <div className={styles.test}>
                    <Description description={description_1} className={styles.description} />
                    <Description description={description_2} className={styles.description} />
                </div>
            </div>
        </>
    )
}

export default index
