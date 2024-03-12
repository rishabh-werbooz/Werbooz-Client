import React from "react"
import styles from "./about.module.css"
import FAQ from "@/components/FAQ"
import BackgroundWrapper from "@/components/BackgroundWrapper"
import HeroSection_v2 from "@/components/HeroSection/HeroSection_v2"
import Image from "@/components/Image"
import Heading_v1 from "@/components/Heading/Heading_v1"

const page = () => {
    return (
        <>
            <HeroSection_v2
                heading="About us"
                description={["We are a team of creative professionals who are passionate about creating innovative digital solutions that help businesses grow."]}
            />

            <div>
                <BackgroundWrapper backgroundColor="#003274">
                    <div className="main-inline-Padding">
                        <div className={`${styles.aboutSection} d-flex justify-content-between align-items-center`}>
                            <div className={styles.aboutSectionText}>
                                <Heading_v1
                                    data={{
                                        heading: "“WORK HARD & GREAT QUALITY IS MY PRIORITY”",
                                    }}
                                    className="text-white font-xxl fw-800"
                                />
                            </div>
                            <div className={styles.aboutSectionImage}>
                                <Image src="/assets/aboutPicture-1.svg" alt="aboutPicture" />
                            </div>
                        </div>
                    </div>
                </BackgroundWrapper>
            </div>

            <BackgroundWrapper backgroundColor="#F8FAFC">
                <div className="pt-2 pb-2">
                    <FAQ />
                </div>
            </BackgroundWrapper>
        </>
    )
}

export default page
