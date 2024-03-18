"use client"
import React, { useState, useEffect } from "react"
import styles from "./about.module.css"
import FAQ from "@/components/FAQ"
import BackgroundWrapper from "@/components/BackgroundWrapper"
import HeroSection_v2 from "@/components/HeroSection/HeroSection_v2"
import Image from "@/components/Image"
import Heading_v1 from "@/components/Heading/Heading_v1"
import { FaCheckCircle } from "react-icons/fa"
import Description from "@/components/Description"
import Heading_v2 from "@/components/Heading/Heading_v2"
import CountAnimation from "@/components/CountAnimation"
import { ImPlus } from "react-icons/im"
import { motion } from "framer-motion"
import ChakraCarousel from "@/components/ChakraCarousel"
import { RiQuestionnaireFill } from "react-icons/ri"
import { FiPlus } from "react-icons/fi"
import { transition } from "@chakra-ui/react"
import { ChakraProvider, extendTheme, Container, Heading, Button, VStack, HStack, Text, Flex, Tag } from "@chakra-ui/react"
import IconBox from "@/components/Cards/IconBox/IconBox_v1"
import { IconBoxData } from "@/content/sampleData"
import ContactForm from "@/components/ContactForm"
import Testimonial from '@/components/Testimonial'

const ListItemStory = ["Flexible Time", "Flexible Time", "Perfect Work", "Perfect Work", "Client Priority", "Client Priority"]
const ListItemStory_2 = [
    "What is the difference between a UI and UX Designer?",
    "What is the difference between a UI and UX Designer?",
    "What is the difference between a UI and UX Designer?",
    "What is the difference between a UI and UX Designer?",
]

const Page = () => {
    return (
        <>
            <HeroSection_v2
                heading="About us"
                description={["We are a team of creative professionals who are passionate about creating innovative digital solutions that help businesses grow."]}
            />
            <div className={styles.storyOuterContainer}>
                <Image src="/assets/aboutPictureBg-1.svg" alt="aboutPicture" className={styles.storyBgImg} />
                <div className={`${styles.storyInnerContainer} main-inline-Padding`}>
                    <motion.div
                        className={styles.storyInnerContainerLeft}
                        initial={{ opacity: 0, x: -100 }} // start off-screen to the left
                        animate={{ opacity: 1, x: 0 }} // end at its natural position
                        transition={{ duration: 1 }}
                    >
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
                    </motion.div>
                    <motion.div
                        className={`${styles.storyInnerContainerRight}`}
                        initial={{ opacity: 0, x: 100 }} // start off-screen to the right
                        animate={{ opacity: 1, x: 0 }} // end at its natural position
                        transition={{ duration: 1 }}
                    >
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
                            <CountAnimation targetValue={15} icon="Y" text="Experience" />
                            <CountAnimation targetValue={25} icon={<ImPlus style={{ width: "30px", height: "30px" }} />} text="Best Team" />
                            <CountAnimation targetValue={500} icon={<ImPlus style={{ width: "30px", height: "30px" }} />} text="Total Client" />
                        </div>
                    </motion.div>
                </div>
            </div>
            <div>
                <BackgroundWrapper backgroundColor="#003274">
                    <div className="main-inline-Padding">
                        <div className={`${styles.aboutSection} d-flex justify-content-between align-items-center`}>
                            <div className={styles.aboutSectionText}>
                                <Heading_v2
                                    headingData={[
                                        {
                                            heading: "“WORK HARD & GREAT ",
                                            color: "#fff",
                                        },
                                        {
                                            heading: " QUALITY  IS MY PRIORITY”",
                                            color: "#fff",
                                        },
                                    ]}
                                    break={true}
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

            <div className={styles.storyOuterContainer}>
                <Image src="/assets/aboutPictureBg-2.svg" alt="aboutPicture" className={styles.storyBgImg__2} />
                <div className={`${styles.storyInnerContainer} main-inline-Padding`}>
                    <motion.div
                        className={`${styles.storyInnerContainerLeft}`}
                        initial={{ opacity: 0, x: -100 }} // start off-screen to the left
                        animate={{ opacity: 1, x: 0 }} // end at its natural position
                        transition={{ duration: 1 }}
                    >
                        <Description
                            description={[
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.",
                                "Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus. Elementum ullamcorper.",
                            ]}
                            breakLine={true}
                            className={styles.storyDescription}
                        />

                        <div>
                            {ListItemStory_2.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={`d-flex text-primary align-items-center fw-500 gap-1 mt-1 ${styles.listItem__2} border-radius-sm `}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <RiQuestionnaireFill style={{ width: "25px", height: "25px" }} />
                                    {item}
                                    <FiPlus style={{ width: "25px", height: "25px" }} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.storyInnerContainerRight}
                        initial={{ opacity: 0, x: 100 }} // start off-screen to the right
                        animate={{ opacity: 1, x: 0 }} // end at its natural position
                        transition={{ duration: 1 }}
                    >
                        <Heading_v2
                            topHeading="Our Mission"
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
                        <Image src="/assets/aboutPicture-3.svg" alt="aboutPicture" className="mt-2" />
                    </motion.div>
                </div>
            </div>

            <div className={`mt-2 mb-2 ${styles.GridContainer}`}>
                <div>
                    <Heading_v2
                        topHeading="Our Story"
                        headingData={[
                            {
                                heading: "Our Values",
                                color: "#323232",
                            },
                        ]}
                        break={true}
                        className={`${styles.storyHeading} fw-600 text-secondary`}
                    />

                    <Description
                        description={[
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.",
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa Lorem ipsum tus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non ",
                        ]}
                        breakLine={true}
                        className={`${styles.storyDescription} mt-1`}
                    />
                </div>
                <div>
                    <ChakraCarousel gap={32}>
                        {IconBoxData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: (index + 2) * 0.05, // Adjusted delay calculation based on index
                                    ease: "easeInOut",
                                }}
                            >
                                <IconBox
                                    Icon={item.Icon}
                                    title={item.title}
                                    description={item.description}
                                    bgColor={"white"}
                                    className={styles.IconBox}
                                    headingClasses={styles.IconBoxHeading}
                                    descriptionClasses={styles.storyDescription}
                                />
                            </motion.div>
                        ))}
                    </ChakraCarousel>
                </div>
            </div>

            <div>
                <Testimonial />
            </div>

            <BackgroundWrapper backgroundColor="#F8FAFC">
                <div className="pt-2 pb-2">
                    <FAQ />
                </div>
            </BackgroundWrapper>

            <div>
                <ContactForm />
            </div>
        </>
    )
}

export default Page
