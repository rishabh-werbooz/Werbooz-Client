"use client"
import React from "react"
import FooterTop from "@/components/FooterTop"
import HeroSection_v2 from "@/components/HeroSection/HeroSection_v2"
import ProjectOutline from "@/components/SinglePortfolio/ProjectOutline"
import BackgroundWrapper from "@/components/BackgroundWrapper"
import ProjectIntroduction from "@/components/SinglePortfolio/ProjectIntroduction"
import ProjectOverviw from "@/components/SinglePortfolio/ProjectOverview"
import ProjectDetails from "@/components/SinglePortfolio/ProjectDetails"
import ProjectSolutionBox from "@/components/SinglePortfolio/ProjectSolutionBox"
import ProjectTechStack from "@/components/SinglePortfolio/ProjectTechStack"
import Description from "@/components/Description"
import ProjectConclusion from "@/components/SinglePortfolio/ProjectConclusion"
import { useParams } from "next/navigation"
import { SinglePortfolioData } from "@/content/sampleData"

const index = () => {
    const { slug } = useParams() as { slug: string }

    const projectData = SinglePortfolioData[slug as keyof typeof SinglePortfolioData]

    return (
        <>
            <div>
                <HeroSection_v2
                    heading={projectData?.HeroSection?.heading}
                    description_1={projectData?.HeroSection?.description_1}
                    description_2={projectData?.HeroSection?.description_2}
                />
                <div className="main-inline-Padding">
                    <ProjectOutline description={projectData?.ProjectOutline?.description} keywords={projectData?.ProjectOutline?.keywords} />
                </div>
                <div className="mt-2">
                    <BackgroundWrapper backgroundColor="#003274">
                        <div className="main-inline-Padding">
                            <ProjectIntroduction
                                topHeading={projectData?.ProjectIntroduction?.topHeading}
                                description={projectData?.ProjectIntroduction?.description}
                                heading={projectData?.ProjectIntroduction?.heading}
                                img={projectData?.ProjectIntroduction?.img}
                                ProjectListItems={projectData?.ProjectIntroduction?.ProjectListItems}
                                ProjectCards={projectData?.ProjectIntroduction?.ProjectCards}
                            />
                        </div>
                    </BackgroundWrapper>
                </div>
                <div className="main-inline-Padding mt-2">
                    <ProjectOverviw
                        topHeading={projectData?.ProjectOverview?.topHeading}
                        headingData={projectData?.ProjectOverview?.headingData}
                        keyWordsBold={projectData?.ProjectOverview?.keyWordsBold}
                        img={projectData?.ProjectOverview?.img}
                        ProjectItems={projectData?.ProjectOverview?.ProjectItems}
                    />
                </div>
                <div>
                    <ProjectDetails
                        topHeading={projectData?.ProjectDetails?.topHeading}
                        headingData={projectData?.ProjectDetails?.headingData}
                        ProjectCard={projectData?.ProjectDetails?.ProjectCard}
                    />
                </div>

                <div className="main-inline-Padding mt-2">
                    <ProjectSolutionBox
                        topHeading={projectData?.ProjectSolutionBox?.topHeading}
                        headingData={projectData?.ProjectSolutionBox?.headingData}
                        ProjectCard={projectData?.ProjectSolutionBox?.ProjectCard}
                        description={projectData?.ProjectSolutionBox?.description}
                        heading={projectData?.ProjectSolutionBox?.heading}
                    />
                </div>

                <div className="mb-4">
                    <BackgroundWrapper backgroundColor="#FCFDFE">
                        <div className="main-inline-Padding mt-2 pt-2">
                            <ProjectTechStack topHeading="Technologies used | Version 1" img={projectData?.ProjectTechStack?.img_1}
                            headingData={projectData?.ProjectTechStack?.headingData}
                            />
                        </div>

                        <div className="main-inline-Padding mt-2 pt-2">
                            <ProjectTechStack topHeading="Technologies used | Version 2" img={projectData?.ProjectTechStack?.img_2}
                            headingData={projectData?.ProjectTechStack?.headingData}
                             />
                        </div>
                    </BackgroundWrapper>
                </div>

                <BackgroundWrapper backgroundColor="#003274">
                    <div className="main-inline-Padding">
                        <ProjectConclusion
                            heading={projectData?.ProjectConclusion?.heading}
                            img={projectData?.ProjectConclusion?.img}
                            ProjectCard={projectData?.ProjectConclusion?.ProjectCard}
                        />
                    </div>
                </BackgroundWrapper>

                <FooterTop />
            </div>
        </>
    )
}

export default index
