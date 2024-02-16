import styles from "./home.module.css"
import IconBox from "@/components/Cards/IconBox/IconBox_v1"
import Portfolio_v1 from "@/components/Cards/Portfolio/Portfolio_v1"
import Portfolio_v2 from "@/components/Cards/Portfolio/Portfolio_v2"
import Testimonial from "@/components/Cards/Testimonial"
import Blog from "@/components/Cards/Blog/Blog_v1"
import Heading from "@/components/Heading"
import Description from "@/components/Description"
import Button from "@/components/Buttons"
import Contact_v1 from "@/components/Forms/Contact/Contact_v1"
import NewsletterForm from "@/components/Forms/NewsLetter/NewsLetter_v1"
import ListItems_v1 from "@/components/ListItems/ListItems_v1"
import Logos from "@/components/Cards/Logos/Logo_v1"
import BlobDetailsBox_v1 from "@/components/BlobDetailBox/BlobDetailBox_v1"
import BackgroundWrapper from "@/components/BackgroundWrapper"
import FooterTop from "@/components/FooterTop"
import ProjectsDevelopment from "@/components/ProjectsDevelopment"
import HeroSection_v1 from "@/components/HeroSection/HeroSection_v1"
import HeroSection_v2 from "@/components/HeroSection/HeroSection_v2"
import Marquee from "react-fast-marquee"
import { logoImg_1, logoImg_2 } from "@/content/sampleData"

import { IconBoxData, PortfolioDataV1, PortfolioDataV2, TestimonialData, BlogData, HeadingData, listDetailsData, listItemsData, HeroSectionData_v1 } from "@/content/sampleData"

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
                    <div className={`main-inline-Padding pt-2 ${styles.servicesSection}`}>
                        <div className={styles.servicesHeading}>
                            <Heading
                                data={{
                                    heading: "Crafting Digital Success, One Pixel at a Time",
                                }}
                                className="fw-700 font-3_5xl"
                            />
                        </div>
                        <div className={styles.description}>
                            <Description description="Fueling digital evolution with our creative prowess. From captivating UX/UI designs to robust web and mobile development, we're your digital partners. Elevate your online presence with our SEO wizardry. Welcome to a world of digital success, one click at a time. " />
                        </div>

                        <IconBox
                            Icon={IconBoxData.Icon}
                            title={IconBoxData.title}
                            description={IconBoxData.description}
                            bgColor={IconBoxData.bgColor}
                            className={styles.iconBox_1}
                        />

                        <IconBox
                            Icon={IconBoxData.Icon}
                            title={IconBoxData.title}
                            description={IconBoxData.description}
                            bgColor={IconBoxData.bgColor}
                            className={styles.iconBox_2}
                        />

                        <IconBox
                            Icon={IconBoxData.Icon}
                            title={IconBoxData.title}
                            description={IconBoxData.description}
                            bgColor={IconBoxData.bgColor}
                            className={styles.iconBox_3}
                        />

                        <IconBox
                            Icon={IconBoxData.Icon}
                            title={IconBoxData.title}
                            description={IconBoxData.description}
                            bgColor={IconBoxData.bgColor}
                            className={styles.iconBox_4}
                        />

                        <Button variant="outline" rounded="full" text="View All" className={styles.btn} />
                    </div>

                    <div className={`main-inline-Padding  ${styles.portfolioSection}`}>
                        <div className={styles.portfolio_heading}>
                            <div className={styles.portfolioHeading}>
                                <Heading
                                    data={{
                                        heading: "Showcasing Our  Works A Portfolio of Excellence",
                                    }}
                                    className="fw-700 font-xxl"
                                />
                            </div>
                            <div className={styles.description}>
                                <Description description="In the artist's own experience, of course, art is fundamentally indefinable, unsayable; there is something sacred about its demands upon the soul" />
                            </div>
                        </div>
                        <Portfolio_v1
                            bgImg={PortfolioDataV1[0].bgImg}
                            title={PortfolioDataV1[0].title}
                            subTitle={PortfolioDataV1[0].subTitle}
                            description={PortfolioDataV1[0].description}
                            className={styles.portfolioItem_1}
                        />
                        <Portfolio_v1
                            bgImg={PortfolioDataV1[1].bgImg}
                            title={PortfolioDataV1[1].title}
                            subTitle={PortfolioDataV1[1].subTitle}
                            description={PortfolioDataV1[1].description}
                            className={styles.portfolioItem_4}
                        />
                        <Portfolio_v1
                            bgImg={PortfolioDataV1[2].bgImg}
                            title={PortfolioDataV1[2].title}
                            subTitle={PortfolioDataV1[2].subTitle}
                            description={PortfolioDataV1[2].description}
                            className={styles.portfolioItem_5}
                        />
                        <Portfolio_v1
                            bgImg={PortfolioDataV1[3].bgImg}
                            title={PortfolioDataV1[3].title}
                            subTitle={PortfolioDataV1[3].subTitle}
                            description={PortfolioDataV1[3].description}
                            className={styles.portfolioItem_2}
                        />
                        <Portfolio_v1
                            bgImg={PortfolioDataV1[4].bgImg}
                            title={PortfolioDataV1[4].title}
                            subTitle={PortfolioDataV1[4].subTitle}
                            description={PortfolioDataV1[4].description}
                            className={styles.portfolioItem_3}
                        />
                    </div>
                </BackgroundWrapper>

                <BackgroundWrapper backgroundColor="#003274">
                    <div className={`${styles.testimonialContainer}`}>
                        <div className={`main-inline-Padding ${styles.testimonialHeading}`}>
                            <Heading
                                data={{
                                    topHeading: "Testimonials",
                                }}
                                className="fw-500 font-md"
                            />
                            <Heading
                                data={{
                                    heading: "Don't take our word for it",
                                }}
                                className="fw-700 font-xxxl"
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

                <Portfolio_v2 data={PortfolioDataV2} />
                {/* <Testimonial data={TestimonialData} /> */}
                <Blog data={BlogData} />
                <Heading data={HeadingData} />
                <Description description="Just like a sturdy building needs a solid foundation, your project needs a robust backend. We work on this simultaneously with the frontend, ensuring everything is balanced and well-structured." />
                <Button variant="solid" rounded="full" text="Schedule a Call" onClick={() => alert("Hello World")} />
                <Contact_v1 />
                <NewsletterForm />
                <ListItems_v1 />
                <BackgroundWrapper backgroundColor="#F7F7F7">
                    <BlobDetailsBox_v1
                        variant="left"
                        image="/assets/sample-img.gif"
                        details={{
                            description:
                                "Like a skilled navigator, we chart a clear course for your project. This involves careful planning, setting milestones, and establishing timelines. Think of it as creating a reliable map for a successful journey",
                            subHeading: "Creating a Roadmap",
                            topHeading: "Strategic Project Planning",
                        }}
                    />
                </BackgroundWrapper>
                <FooterTop />
                <BackgroundWrapper backgroundColor="#0032740D">
                    <ProjectsDevelopment listItemsData={listItemsData} listDetailsData={listDetailsData} />
                </BackgroundWrapper>
            </div>
        </>
    )
}
