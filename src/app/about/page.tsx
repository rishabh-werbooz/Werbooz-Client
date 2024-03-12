"use client"
import React from "react"
import styles from "./about.module.css"
import FAQ from "@/components/FAQ"
import BackgroundWrapper from "@/components/BackgroundWrapper"
import HeroSection_v2 from "@/components/HeroSection/HeroSection_v2"
import Image from "@/components/Image"
import Heading_v1 from "@/components/Heading/Heading_v1"
import { FaCheckCircle } from "react-icons/fa"
import Description from "@/components/Description"
import Heading_v2 from "@/components/Heading/Heading_v2"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect } from "react"

const ListItemStory = ["Flexible Time", "Flexible Time", "Perfect Work", "Perfect Work", "Client Priority", "Client Priority"]

const page = () => {
    const count = useMotionValue(0)
    const rounded = useTransform(count, Math.round)

    useEffect(() => {
        const animation = animate(count, 500, { duration: 2 })

        return animation.stop
    }, [])

    return (
        <>
            <HeroSection_v2
                heading="About us"
                description={["We are a team of creative professionals who are passionate about creating innovative digital solutions that help businesses grow."]}
            />
            <div className={styles.storyOuterContainer}>
                <Image src="/assets/aboutPictureBg-1.svg" alt="aboutPicture" className={styles.storyBgImg} />
                <div className={`${styles.storyInnerContainer} main-inline-Padding`}>
                    <div className={styles.storyInnerContainerLeft}>
                        <Heading_v2
                            topHeading="Our Story"
                            headingData={[
                                {
                                    heading: "Tell The Story of how your",
                                    color: "#323232",
                                },
                                {
                                    heading: "Company came about",
                                    color: "#323232",
                                },
                            ]}
                            break={true}
                            className={`${styles.storyHeading} fw-600 text-secondary`}
                        />
                        <Image src="/assets/aboutPicture-2.svg" alt="aboutPicture" className="mt-2" />
                    </div>
                    <div className={`${styles.storyInnerContainerRight}`}>
                        <Description
                            description={[
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque",
                                "Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus. Elementum ullamcorper nec, habitasse vulputate. Eget dictum quis est sed egestas tellus, a lectus. Quam ullamcorper in fringilla arcu aliquet fames arcu.Lacinia eget faucibus urna, nam risus nec elementum cras porta. ",
                            ]}
                            breakLine={true}
                            className={styles.storyDescription}
                        />

                        <div className={styles.storyListContainer}>
                            {ListItemStory.map((item, index) => (
                                <div key={index} className="d-flex align-items-center gap-05">
                                    <FaCheckCircle className="text-primary" />
                                    {item}
                                </div>
                            ))}
                        </div>
                        <div className={`${styles.counterContainer} mt-2`}>
                            <div className="d-flex  align-items-center fw-800 font-xxxl text-primary gap-05">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3 }}
                                    variants={{
                                        visible: { opacity: 1, scale: 1 },
                                        hidden: { opacity: 0, scale: 0 },
                                    }}
                                >
                                    {rounded}
                                </motion.div>{" "}
                                Y <br />
                            </div>
                            <div className="d-flex  align-items-center fw-800 font-xxxl text-primary gap-05">
                                <motion.div>{rounded}</motion.div> <span className={styles.Plusicon}>+</span>
                            </div>
                            <div className="d-flex  align-items-center fw-800 font-xxxl text-primary gap-05">
                                <motion.div>{rounded}</motion.div> <span className={styles.Plusicon}>+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
