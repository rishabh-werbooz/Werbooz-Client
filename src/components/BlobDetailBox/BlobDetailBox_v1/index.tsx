"use client"
import React from "react"
import styles from "./blobDetailBox.module.css"
import Description from "@/components/Description"
import Heading_v2 from "@/components/Heading/Heading_v2"
import Image from "@/components/Image"
import { Player } from "@lottiefiles/react-lottie-player"
interface Detail {
    heading?: string
    description: string
    subHeading: string
    topHeading: string
}
interface DataProps {
    variant: string
    image: string
    details: Detail
}

const index = ({ variant, image, details }: DataProps) => {
    return (
        <>
            <div className={`${styles.main} ${styles[variant]}`}>
                <div className={styles.imageContainer}>
                    {/* <Image src={image} alt="blob" className={styles.image} /> */}
                    {/* <Player autoplay loop src={image} className={styles.image} /> */}
                </div>
                <div className={`${styles.details} pl-1 pr-1`}>
                    <Heading_v2
                        headingData={[
                            { heading: details.topHeading, color: "#0F172A" },
                            {
                                heading: details.subHeading,
                                color: "#003274",
                            },
                        ]}
                        break={true}
                        className={`fw-700 font-xxl`}
                    />
                    <Description description={details.description} className="mt-1" />
                </div>
            </div>
        </>
    )
}

export default index
