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

import { IconBoxData, PortfolioDataV1, PortfolioDataV2, TestimonialData, BlogData, HeadingData, listDetailsData, listItemsData } from "@/content/sampleData"

export default function Home() {
    return (
        <>
            <div className="d-flex flex-column gap-3 pt-2 pb-2 main-inline-Padding">
                <IconBox data={IconBoxData} />
                <Portfolio_v1 data={PortfolioDataV1} />
                <Portfolio_v2 data={PortfolioDataV2} />
                <Testimonial data={TestimonialData} />
                <Blog data={BlogData} />
                <Heading data={HeadingData} />
                <Description description="Just like a sturdy building needs a solid foundation, your project needs a robust backend. We work on this simultaneously with the frontend, ensuring everything is balanced and well-structured." />
                <Button variant="solid" rounded="full" text="Schedule a Call" onClick={() => alert("Hello World")} />
                <Contact_v1 />
                <NewsletterForm />
                <ListItems_v1 />
                <Logos logo="/assets/logos/kargo-logo.png" />
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
            <HeroSection_v1 />
            {/* <HeroSection_v2 /> */}
        </>
    )
}
