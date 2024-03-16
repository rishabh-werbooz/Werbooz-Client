import React from "react"
import styles from "./testimonial.module.css"
import BackgroundWrapper from "@/components/BackgroundWrapper"
import Heading_v1 from "@/components/Heading/Heading_v1"
import Testimonial from "@/components/Cards/Testimonial"
import Marquee from "react-fast-marquee"
import { TestimonialData } from "@/content/sampleData"

const index = () => {
    return (
        <>
            <BackgroundWrapper backgroundColor="#003274">
                <div className={`${styles.testimonialContainer}`}>
                    <div className={`main-inline-Padding ${styles.testimonialHeading}`}>
                        <Heading_v1
                            data={{
                                topHeading: "Testimonials",
                                heading: "Don't take our word for it",
                            }}
                            className="fw-700 font-xxl text-white"
                        />
                    </div>

                    <Marquee gradient={false} speed={80} direction="left" pauseOnHover={true}>
                        {TestimonialData.map((data, index) => (
                            <div key={index} className={styles.testimonialCard}>
                                <Testimonial data={data} />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </BackgroundWrapper>
        </>
    )
}

export default index
