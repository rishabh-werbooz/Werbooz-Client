import React from "react"
import styles from "./projectIntroduction.module.css"
import Heading_v2 from "@/components/Heading/Heading_v2"
import Description from "@/components/Description"
import ProjectListItems_v1 from "@/components/SinglePortfolio/ProjectListItems/ProjectListItem_v1"
import Image from "@/components/Image"
import ProjectCard_v1 from "@/components/SinglePortfolio/ProjectCards/ProjectCard_v1"

interface Props {
    topHeading: string[]
    heading: string[]
    img: string[]
    description: string
}

const index = ({ topHeading, heading, img, description }: Props) => {
    return (
        <div className={`${styles.ProjectIntroductionContainer}`}>
            <div>
                <Heading_v2
                    topHeading={"Introduction"}
                    headingData={[
                        {
                            heading: "So what plans for the weekend?",
                            color: "white",
                        },
                    ]}
                    className="font-xxl fw-800"
                />

                <div className={`${styles.intro} mt-2`}>
                    <Description
                        description="This is the most common question that has been asked by our family or our friends. Whenever we have a free week or a holiday.No matter how much you try to avoid it but this question has  been asked by our friends and family members multiple times  when there is a weekend. We are so busy working everytime, that we do not get enough time to plan our weekends properly and most of the times we end up losing out on many exciting options just because we didn’t payed much attention to palnning weekends beforehand. So why are we even discussing this? Are we going to solve this problem? Do we have an ace up our sleeve?? So, yes! we have got a perfect solution for Planning your weekends. And that solution is eight letters long its name is “Weekendo”."
                        className={`fw-400 font-sm mb-2`}
                    />
                </div>

                <div className={`${styles.PortfolioGridContainer} mt-2`}>
                    <div className={`${styles.PortfolioGrid}`}>
                        <Image src="/assets/portfolios/Picture-4.jpg" alt="weekendo" className="border-radius-md" />
                        <Image src="/assets/portfolios/Picture-5.jpg" alt="weekendo" className="border-radius-md" />
                        <Image src="/assets/portfolios/Picture-6.jpg" alt="weekendo" className="border-radius-md" />
                        <Image src="/assets/portfolios/Picture-7.jpg" alt="weekendo" className="border-radius-md" />
                    </div>
                    <div>
                        <ProjectListItems_v1 />
                    </div>
                </div>
                <div className="mt-2 pt-2">
                    <Heading_v2
                        topHeading={"Client background"}
                        headingData={[
                            {
                                heading: "So who is this Adit Chouhan?",
                                color: "white",
                            },
                        ]}
                        className="font-xxl fw-800"
                    />
                    <div className="mt-1">
                        <ProjectCard_v1 />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
