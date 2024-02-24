import React from "react"
import FooterTop from "@/components/FooterTop"
import HeroSection_v2 from "@/components/HeroSection/HeroSection_v2"
import ProjectOutline from "@/components/SinglePortfolio/ProjectOutline"
import BackgroundWrapper from "@/components/BackgroundWrapper"
import ProjectIntroduction from "@/components/SinglePortfolio/ProjectIntroduction"

const index = () => {
    return (
        <>
            <div>
                <HeroSection_v2 heading="Weekendo" description_1="Lorem ipsum dolor sit amet consectetur." description_2="adipiscing elit interdum ullamcorper sed pharetra sene" />
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
                <FooterTop />
            </div>
        </>
    )
}

export default index
