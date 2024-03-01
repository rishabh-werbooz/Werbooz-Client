"use client"
import styles from "./home.module.css"
import IconBox from "@/components/Cards/IconBox/IconBox_v1"
import Portfolio_v1 from "@/components/Cards/Portfolio/Portfolio_v1"
import Portfolio_v2 from "@/components/Cards/Portfolio/Portfolio_v2"
import Testimonial from "@/components/Cards/Testimonial"
import Blog from "@/components/Cards/Blog/Blog_v1"
import Heading_v1 from "@/components/Heading/Heading_v1"
import Heading_v2 from "@/components/Heading/Heading_v2"
import Description from "@/components/Description"
import Button from "@/components/Buttons"
import Contact_v1 from "@/components/Forms/Contact/Contact_v1"
import NewsletterForm from "@/components/Forms/NewsLetter/NewsLetter_v1"
import ListItems_v1 from "@/components/ListItems/ListItems_v1"
import Logos from "@/components/Cards/Logos/Logo_v1"
import BlobDetailsBox_v2 from "@/components/BlobDetailBox/BlobDetailBox_v2"
import BlobDetailsBox_v1 from "@/components/BlobDetailBox/BlobDetailBox_v1"
import BackgroundWrapper from "@/components/BackgroundWrapper"
import FooterTop from "@/components/FooterTop"
import ProjectsDevelopment from "@/components/ProjectsDevelopment"
import HeroSection_v1 from "@/components/HeroSection/HeroSection_v1"
import HeroSection_v2 from "@/components/HeroSection/HeroSection_v2"
import Marquee from "react-fast-marquee"
import IconBox_v2 from "@/components/Cards/IconBox/IconBox_v2"
import BlinkingDots from "@/components/BlinkingDots"
import { logoImg_1, logoImg_2 } from "@/content/sampleData"
import { motion } from "framer-motion"
import Link from "next/link"
import {
    IconBoxData,
    PortfolioDataV1,
    PortfolioDataV2,
    TestimonialData,
    BlogData,
    HeadingData,
    listDetailsData,
    listItemsData,
    HeroSectionData_v1,
    IconBox_v2Data,
} from "@/content/sampleData"

export default function Home() {
    return (
        <>
            <HeroSection_v1
                heading_1={HeroSectionData_v1.heading_1}
                heading_2={HeroSectionData_v1.heading_2}
                description_1={HeroSectionData_v1.description_1}
                description_2={HeroSectionData_v1.description_2}
                buttonText={HeroSectionData_v1.buttonText}
                lottieFile={HeroSectionData_v1.lottieFile}
            />
            <div>
                <BackgroundWrapper backgroundColor="#FFFEFE">
                    <div className={styles.logoContainer}>
                        <Marquee gradient={false} speed={80} direction="left" pauseOnHover={true}>
                            {logoImg_1.map((img, index) => (
                                <div key={index} className={styles.marqueeItem}>
                                    <Logos logo={img} />
                                </div>
                            ))}
                        </Marquee>
                        <Marquee gradient={false} speed={80} direction="right" pauseOnHover={true}>
                            {logoImg_2.map((img, index) => (
                                <div key={index} className={styles.marqueeItem}>
                                    <Logos logo={img} />
                                </div>
                            ))}
                        </Marquee>
                    </div>
                    <Heading_v1
                        data={{
                            topHeading: "Services",
                        }}
                        className="fw-700 font-md main-inline-Padding text-light-blue"
                    />
                    <div className={`main-inline-Padding  ${styles.servicesSection}`}>
                        <div className={styles.servicesHeading}>
                            <Heading_v1
                                data={{
                                    heading: "Crafting Digital Success, One Pixel at a Time",
                                }}
                                className="fw-700 font-xxl"
                            />
                        </div>
                        <div className={styles.description}>
                            <Description description="Fueling digital evolution with our creative prowess. From captivating UX/UI designs to robust web and mobile development, we're your digital partners. Elevate your online presence with our SEO wizardry. Welcome to a world of digital success, one click at a time. " />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.4,
                                delay: 2 * 0.05,
                                ease: "easeInOut",
                            }}
                            className={styles.iconBox_1}
                        >
                            <IconBox
                                Icon={IconBoxData.Icon}
                                title={IconBoxData.title}
                                description={IconBoxData.description}
                                bgColor={IconBoxData.bgColor}
                                className={styles.iconBox_1}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.4,
                                delay: 3 * 0.05,
                                ease: "easeInOut",
                            }}
                            className={styles.iconBox_2}
                        >
                            <IconBox
                                Icon={IconBoxData.Icon}
                                title={IconBoxData.title}
                                description={IconBoxData.description}
                                bgColor={IconBoxData.bgColor}
                                className={styles.iconBox_2}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.4,
                                delay: 4 * 0.05,
                                ease: "easeInOut",
                            }}
                            className={styles.iconBox_3}
                        >
                            <IconBox
                                Icon={IconBoxData.Icon}
                                title={IconBoxData.title}
                                description={IconBoxData.description}
                                bgColor={IconBoxData.bgColor}
                                className={styles.iconBox_3}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.4,
                                delay: 5 * 0.05,
                                ease: "easeInOut",
                            }}
                            className={styles.iconBox_4}
                        >
                            <IconBox
                                Icon={IconBoxData.Icon}
                                title={IconBoxData.title}
                                description={IconBoxData.description}
                                bgColor={IconBoxData.bgColor}
                                className={styles.iconBox_4}
                            />
                        </motion.div>
                    </div>

                    <Heading_v1
                        data={{
                            topHeading: "Our Portfolio",
                        }}
                        className="fw-700 font-md main-inline-Padding text-light-blue"
                    />

                    <div className={`main-inline-Padding  ${styles.portfolioSection}`}>
                        <div className={styles.portfolio_heading}>
                            <div className={styles.portfolioHeading}>
                                {/* <Heading_v1
                                    data={{
                                        heading: "Showcasing Our  Works A Portfolio of Excellence",
                                    }}
                                    className="fw-700 font-xxl"
                                /> */}
                                <Heading_v2
                                    headingData={[
                                        {
                                            heading: "Showcasing Our  Works ",
                                            color: "#0D0D0D",
                                        },
                                        {
                                            heading: "A Portfolio of Excellence",
                                            color: "#003274",
                                        },
                                    ]}
                                    className="fw-700 font-xxl"
                                />
                            </div>
                            <div className={styles.description}>
                                <Description description="In the artist's own experience, of course, art is fundamentally indefinable, unsayable; there is something sacred about its demands upon the soul" />
                            </div>
                        </div>
                        {PortfolioDataV1.map((item, index) => (
                            <motion.div
                                key={index}
                                className={styles[`portfolioItem_${index + 1}`]}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: (index + 2) * 0.05,
                                    ease: "easeInOut",
                                }}
                            >
                                <Portfolio_v1 bgImg={item.bgImg} title={item.title} subTitle={item.subTitle} description={item.description} />
                            </motion.div>
                        ))}
                        <Button variant="outline" rounded="full" text="View All" className={styles.btn} />
                    </div>
                </BackgroundWrapper>

                <BackgroundWrapper backgroundColor="#003274">
                    <div className={`${styles.testimonialContainer}`}>
                        <div className={`main-inline-Padding ${styles.testimonialHeading}`}>
                            <Heading_v1
                                data={{
                                    topHeading: "Testimonials",
                                }}
                                className="fw-700 font-md"
                            />
                            <Heading_v1
                                data={{
                                    heading: "Don't take our word for it",
                                }}
                                className="fw-700 font-xxl"
                            />
                        </div>

                        <Marquee gradient={false} speed={80} direction="right" pauseOnHover={true}>
                            {TestimonialData.map((data, index) => (
                                <div key={index} className={styles.testimonialCard}>
                                    <Testimonial data={data} />
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </BackgroundWrapper>

                <BackgroundWrapper backgroundColor="#FFFEFE">
                    <div className={`main-inline-Padding pt-2 pb-2 mt-2 mb-2`}>
                        <Heading_v1
                            data={{
                                topHeading: "SCULPTING YOUR PROJECTS FUTURE",
                            }}
                            className="fw-700 font-md text-light-blue"
                        />
                        <Heading_v2
                            headingData={[
                                {
                                    heading: "Methodology ",
                                    color: "#0D0D0D",
                                },
                                {
                                    heading: "Crafting Digital Excellence",
                                    color: "#003274",
                                },
                            ]}
                            className="fw-700 font-xxl"
                        />
                    </div>
                </BackgroundWrapper>

                <BackgroundWrapper backgroundColor="#222222">
                    <div className={`main-inline-Padding`}>
                        <BlobDetailsBox_v2
                            variant="right"
                            image="/assets/lottie/testing.lottie"
                            details={{
                                description:
                                    "Our journey begins by thoroughly understanding your project. We take the time to explore every angle and gather insights from various perspectives. This step is all about grasping the heart and soul of your concept.",
                                subHeading: "Delving Deep into Your Vision",
                                topHeading: "Thorough Project Understanding",
                            }}
                        />
                    </div>
                </BackgroundWrapper>

                <BackgroundWrapper backgroundColor="#FFFEFE">
                    <div className={`main-inline-Padding pt-2 pb-2`}>
                        <BlobDetailsBox_v1
                            variant="left"
                            image="/assets/lottie/Project.lottie"
                            details={{
                                description:
                                    "Like a skilled navigator, we chart a clear course for your project. This involves careful planning, setting milestones, and establishing timelines. Think of it as creating a reliable map for a successful journey",
                                subHeading: "Creating a Roadmap",
                                topHeading: "Strategic Project Planning",
                            }}
                        />
                    </div>
                </BackgroundWrapper>

                <BackgroundWrapper backgroundColor="#FFFEFE">
                    <div className={`main-inline-Padding pt-2 pb-2`}>
                        <BlobDetailsBox_v1
                            variant="right"
                            image="/assets/lottie/uiDevelopment.lottie"
                            details={{
                                description:
                                    "Our talented team focuses on crafting a user interface that not only looks great but also ensures a delightful user experience. Your input is crucial, and we're ready to make changes until you're satisfied.",
                                subHeading: "Building an Inviting Experience",
                                topHeading: "User-Friendly UI Design",
                            }}
                        />
                    </div>
                </BackgroundWrapper>

                <BackgroundWrapper backgroundColor="#FFFEFE">
                    <div className={`main-inline-Padding pt-2`}>
                        <BlobDetailsBox_v1
                            variant="left"
                            image="/assets/lottie/frontendDevelopment.lottie"
                            details={{
                                description:
                                    "This is where the design takes shape and becomes a functional reality. Our developers work their magic to breathe life into the design, making it functional and visually appealing.",
                                subHeading: "Bringing Your Vision to Life",
                                topHeading: "Frontend Development",
                            }}
                        />
                    </div>
                </BackgroundWrapper>

                <BackgroundWrapper backgroundColor="#FFFEFE">
                    <div className={`main-inline-Padding pt-2 pb-2`}>
                        <BlobDetailsBox_v1
                            variant="right"
                            image="/assets/lottie/backend.lottie"
                            details={{
                                description:
                                    "Just like a sturdy building needs a solid foundation, your project needs a robust backend. We work on this simultaneously with the frontend, ensuring everything is balanced and well-structured.",
                                subHeading: "Creating a Strong Foundation",
                                topHeading: "Simultaneous Backend Development",
                            }}
                        />
                    </div>
                </BackgroundWrapper>

                <BackgroundWrapper backgroundColor="#FFFEFE">
                    <div className={`main-inline-Padding pt-2 pb-2`}>
                        <BlobDetailsBox_v1
                            variant="left"
                            image="/assets/lottie/deployment.lottie"
                            details={{
                                description:
                                    "As we work on the frontend and backend, we deploy your project on your dedicated server. This allows you to see real-time changes, so you're always in the loop.",
                                subHeading: "Witness Progress Unfold",
                                topHeading: "Real-Time Deployment",
                            }}
                        />
                    </div>
                </BackgroundWrapper>

                <BackgroundWrapper backgroundColor="#FFFEFE">
                    <div className={`main-inline-Padding pt-2 pb-2`}>
                        <BlobDetailsBox_v1
                            variant="right"
                            image="/assets/lottie/softwareTesting.json"
                            details={{
                                description:
                                    "Our final stages involve rigorous testing and quality checks. We evaluate the UI, code, and overall performance to ensure everything works smoothly. We also check for any glitches, bugs, and security issues.",
                                subHeading: "Assurance Ensuring Excellence",
                                topHeading: "Comprehensive Testing and Quality",
                            }}
                        />
                    </div>
                </BackgroundWrapper>

                <BackgroundWrapper backgroundColor="#222222">
                    <div className={`main-inline-Padding`}>
                        <BlobDetailsBox_v2
                            variant="left"
                            image="/assets/lottie/satisfaction.lottie"
                            details={{
                                description:
                                    "When you're satisfied, we consider the project complete. But our commitment to your project doesn't stop here. We're here for future support and maintenance, ensuring your digital venture continues to thrive.",
                                subHeading: "Your Vision Comes Alive",
                                topHeading: "Client Satisfaction and Project Completion",
                            }}
                        />
                    </div>
                </BackgroundWrapper>

                <BackgroundWrapper backgroundColor="#0032740D">
                    <div className={`main-inline-Padding ${styles.projectDevelopmentSection}`}>
                        <div className="pb-2">
                            <Heading_v1
                                data={{
                                    topHeading: "Client engagement and project completion",
                                }}
                                className="fw-700 font-md text-light-blue"
                            />
                            <Heading_v2
                                headingData={[
                                    {
                                        heading: "An all-encompassing view of the",
                                        color: "#242424",
                                    },
                                    {
                                        heading: " project's journey",
                                        color: "#003274",
                                    },
                                ]}
                                className="fw-700 font-xxl"
                            />
                        </div>
                        <ProjectsDevelopment listItemsData={listItemsData} listDetailsData={listDetailsData} />
                    </div>
                </BackgroundWrapper>

                <BackgroundWrapper backgroundColor="#FFFEFE">
                    <div className={`main-inline-Padding pb-2  ${styles.projectDevelopmentSection}`}>
                        <Heading_v2
                            headingData={[
                                {
                                    heading: "Showcasing Our Pinnacle Works",
                                    color: "#242424",
                                },
                                {
                                    heading: "  A Portfolio of Excellence",
                                    color: "#003274",
                                },
                            ]}
                            className="fw-700 font-xxl text-center"
                        />
                        <div className={`${styles.IconBoxGrid}`}>
                            {IconBox_v2Data.map((data, index) => (
                                <IconBox_v2 key={index} image={data.image} borderRight={data?.borderRight} borderBottom={data?.borderBottom} />
                            ))}
                        </div>
                    </div>
                </BackgroundWrapper>

                <BackgroundWrapper backgroundColor="#FFFEFE">
                    <div className={`main-inline-Padding`}>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <div>
                                <Heading_v1
                                    data={{
                                        heading: "Our Recent Articles",
                                    }}
                                    className="fw-700 font-xxl text-light-blue "
                                />
                                <Description description="Here’s what we've been up to recently." />
                            </div>
                            <Link href="/blogs">
                                <Button variant="outline" rounded="full" text="View All" className={styles.btn} />
                            </Link>
                        </div>
                        <div className={`${styles.BlogGrid}`}>
                            <Blog data={BlogData} />
                            <Blog data={BlogData} />
                            <Blog data={BlogData} />
                        </div>
                    </div>
                </BackgroundWrapper>

                <div className={`border-radius-md ${styles.contactFormSection}`}>
                    <BlinkingDots />
                    <div className={`${styles.contactFormInnerSection}`}>
                        <Contact_v1 />
                        <div>
                            <Heading_v1
                                data={{
                                    heading: "Contact our Expertise",
                                }}
                                className="fw-700 font-xxxl text-white"
                            />
                            <Description
                                description="Initiate your journey by filling the form. Share your project goals and contact details; it's the first step to bring your vision to life."
                                className="text-white"
                            />
                        </div>
                    </div>
                </div>

                {/* <Portfolio_v2 data={PortfolioDataV2} />

                <Heading_v1 data={HeadingData} />
                <Description description="Just like a sturdy building needs a solid foundation, your project needs a robust backend. We work on this simultaneously with the frontend, ensuring everything is balanced and well-structured." />
                <Button variant="solid" rounded="full" text="Schedule a Call" onClick={() => alert("Hello World")} />
                <Contact_v1 />
                <NewsletterForm />
                <ListItems_v1 />
                <FooterTop /> */}
                {/* <BackgroundWrapper backgroundColor="#0032740D">
                    <ProjectsDevelopment listItemsData={listItemsData} listDetailsData={listDetailsData} />
                </BackgroundWrapper> */}
            </div>
        </>
    )
}
