"use client"
import React from "react"
import styles from "./project.module.css"
import Button from "@/components/Buttons"
import Description from "@/components/Description"
import Heading from "@/components/Heading"
import ProjectSteps from "./ProjectsSteps"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { listIconsData } from "@/content/sampleData"
import { Player } from "@lottiefiles/react-lottie-player"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill, BsArrowRightCircle } from "react-icons/bs"
import { SlArrowLeftCircle } from "react-icons/sl"


interface ListItemDetails {
    heading: string
    subHeading: string
    description_1: string
    description_2: string
    btnText: string
}

interface ProjectProps {
    listItemsData: string[]
    listDetailsData: ListItemDetails[]
}

const index = ({ listItemsData, listDetailsData }: ProjectProps) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % listItemsData.length)
            console.log("currentIndex", currentIndex)
        }, 10000)

        return () => clearInterval(intervalId)
    }, [currentIndex])

    const handleListItemClick = (index: number) => {
        setCurrentIndex(index)
    }
    const variants = {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 100 },
    }

    return (
        <>
            <div className={`${styles.ProjectContainer} gap-4 pt-2 pb-2`}>
                <div className={`${styles.leftContainer}`}>
                    <BsArrowLeftCircleFill className={`${styles.leftArrow}`} onClick={() => setCurrentIndex((currentIndex - 1 + listItemsData.length) % listItemsData.length)} />
                    <div className={`${styles.leftContainer}`}>
                        {listItemsData.map((item, index) => (
                            <ProjectSteps key={index} index={index} text={item} isActive={index === currentIndex} onClick={handleListItemClick} icon={listIconsData[index]} />
                        ))}
                    </div>
                    <BsArrowRightCircle className={`${styles.rightArrow}`} onClick={() => setCurrentIndex((currentIndex + 1) % listItemsData.length)} />
                </div>

                <div>
                    <div className={styles.animatedImg}>
                        <Player autoplay loop src="/assets/lottie/Project.json" style={{ height: "auto", width: "40%" }} />
                    </div>
                </div>

                <div>
                    <AnimatePresence key={currentIndex}>
                        <motion.div initial="initial" animate="animate" exit="exit" variants={variants} transition={{ duration: 0.9, ease: "easeInOut" }}>
                            <div className={`d-flex justify-content-start flex-column align-items-start gap-0 ${styles.rightContainer} `}>
                                <Heading
                                    variant="left"
                                    data={{
                                        heading: listDetailsData[currentIndex].heading,
                                    }}
                                    className={`${styles.Heading} fw-700 font-xl`}
                                />

                                <Heading
                                    variant="left"
                                    data={{
                                        subHeading: listDetailsData[currentIndex].subHeading,
                                    }}
                                    className={`${styles.subHeading} fw-700 font-xl`}
                                />

                                <div className={`mt-1 mb-1 d-flex flex-column gap-1`}>
                                    <Description description={listDetailsData[currentIndex].description_1} className={`${styles.description} font-sm fw-400`} />

                                    <Description description={listDetailsData[currentIndex].description_2} className={`${styles.description} font-sm fw-400`} />
                                </div>

                                <Button variant="solid" rounded="md" text={listDetailsData[currentIndex].btnText} className={`${styles.btn}`} />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </>
    )
}

export default index
