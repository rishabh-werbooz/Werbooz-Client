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
                <HeroSection_v2 heading={projectData?.HeroSection?.heading} description={projectData?.HeroSection?.description} />
                <div className="main-inline-Padding">
                    <ProjectOutline data={projectData.ProjectOutline} />
                </div>
                <div className="mt-2">
                    <BackgroundWrapper backgroundColor="#003274">
                        <div className="main-inline-Padding">
                            <ProjectIntroduction data={projectData.ProjectIntroduction} />
                        </div>
                    </BackgroundWrapper>
                </div>
                <div className="main-inline-Padding mt-2">
                    <ProjectOverviw
                        topHeading={projectData?.ProjectOverview?.topHeading}
                        headingData={projectData?.ProjectOverview?.headingData}
                        description={projectData?.ProjectOverview?.description} // Add a default value of an empty array for the description property
                        img={projectData?.ProjectOverview?.img}
                        ProjectItems={projectData?.ProjectOverview?.ProjectItems}
                    />
                </div>

                <div className="main-inline-Padding mt-2">
                    <ProjectSolutionBox data={projectData.ProjectSolutionBox} />
                </div>

                <div>
                    <ProjectDetails data={projectData.ProjectDetails} />
                </div>

                <div className="mb-4">
                    <BackgroundWrapper backgroundColor="#FCFDFE">
                        <div className="main-inline-Padding mt-2 pt-2">
                            <ProjectTechStack topHeading="Technologies used" img={projectData?.ProjectTechStack?.img_1} headingData={projectData?.ProjectTechStack?.headingData} />
                        </div>
                    </BackgroundWrapper>
                </div>

                <BackgroundWrapper backgroundColor="#003274">
                    <div className="main-inline-Padding">
                        <ProjectConclusion
                            heading={projectData?.ProjectConclusion?.headingData}
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
