import React from "react"
import FooterTop from "@/components/FooterTop"
import HeroSection_v2 from "@/components/HeroSection/HeroSection_v2"
import Portfolio_v2 from "@/components/Cards/Portfolio/Portfolio_v2"
import { PortfolioDataV2 } from "@/content/sampleData"
const index = () => {
    return (
        <>
            <div>
                <HeroSection_v2 heading="Portfolio" description={["Lorem ipsum dolor sit amet consectetur.", "adipiscing elit interdum ullamcorper sed pharetra sene"]} />
                <div className="main-inline-Padding mt-2 pt-2 mb-2 pb-2 d-flex flex-column gap-4 ">
                    <Portfolio_v2
                        data={{
                            bgColor: "#F5F5F5",
                            title: "Re-Design For The App Made Easy",
                            description: "It is a long established fact that a reader will be distracted by the readable content of a Page when looking at its layout.",
                            btnText: "Read Case Study",
                            btnLink: "/",
                            image: "/assets/portfolios/bgImage_1.svg",
                            keywords: ["User Research", "UX Design"],
                        }}
                    />
                    <Portfolio_v2
                        data={{
                            bgColor: "#F5F5F5",
                            title: "SaaSup Website For Unique Start Up Brands",
                            description: "It is a long established fact that a reader will be distracted by the readable content of a Page when looking at its layout.",
                            btnText: "Read Case Study",
                            btnLink: "/",
                            image: "/assets/portfolios/bgImage_2.svg",
                            keywords: ["User Research", "UX Design"],
                        }}
                    />
                    <Portfolio_v2
                        data={{
                            bgColor: "#F5F5F5",
                            title: "SaaSup Website For Unique Start Up Brands",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, etiam nunc, eget aliquam. In eget in.",
                            btnText: "Read Case Study",
                            btnLink: "/",
                            image: "/assets/portfolios/bgImage_3.svg",
                            keywords: ["User Research", "UX Design"],
                        }}
                    />
                    <Portfolio_v2
                        data={{
                            bgColor: "#F5F5F5",
                            title: "AI vision technology to improve security",
                            description: "It is a long established fact that a reader will be distracted by the readable content of a Page when looking at its layout.",
                            btnText: "Read Case Study",
                            btnLink: "/",
                            image: "/assets/portfolios/bgImage_4.svg",
                            keywords: ["User Research", "UX Design"],
                        }}
                    />
                </div>
                <FooterTop />
            </div>
        </>
    )
}

export default index
