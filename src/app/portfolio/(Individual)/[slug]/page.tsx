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

const index = () => {
    return (
        <>
            <div>
                <HeroSection_v2
                    heading="Weekendo"
                    description_1="Using Weekendo : Plan your weekend with ease."
                    description_2="Weekendo provides a platform for users to find and book events, activities, and experiences for their weekends"
                />
                <div className="main-inline-Padding">
                    <ProjectOutline />
                </div>
                <div className="mt-2 pt-2">
                    <BackgroundWrapper backgroundColor="#003274">
                        <div className="main-inline-Padding">
                            <ProjectIntroduction />
                        </div>
                    </BackgroundWrapper>
                </div>
                <div className="main-inline-Padding mt-2 pt-2">
                    <ProjectOverviw />
                </div>
                <div>
                    <ProjectDetails />
                </div>

                <div className="main-inline-Padding mt-2 pt-2">
                    <ProjectSolutionBox />
                </div>

                <div className="mb-4">
                    <BackgroundWrapper backgroundColor="#FCFDFE">
                        <div className="main-inline-Padding mt-2 pt-2">
                            <ProjectTechStack />
                        </div>

                        <div className="main-inline-Padding mt-2 pt-2">
                            <ProjectTechStack />
                        </div>
                    </BackgroundWrapper>
                </div>

                <BackgroundWrapper backgroundColor="#003274">
                    <div className="main-inline-Padding mt-2 pt-2">
                        <ProjectConclusion />
                    </div>
                </BackgroundWrapper>

                <FooterTop />
            </div>
        </>
    )
}

export default index
