import React from "react"
import styles from "./contactForm.module.css"
import Contact_v1 from "@/components/Forms/Contact/Contact_v1"
import Heading_v1 from "@/components/Heading/Heading_v1"
import Description from "@/components/Description"
import DotLottiePlayer from "@/components/DotLottiePlayer"
import BlinkingDots from "@/components/BlinkingDots"


const index = () => {
    return (
        <>
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
                                variant="center"
                            />
                            <Description
                                description="Initiate your journey by filling the form. Share your project goals and contact details; it's the first step to bring your vision to life."
                                className="text-white"
                            />
                            <DotLottiePlayer src="/assets/lottie/Rocket.lottie" className={`${styles.ContactImg}`} />
                        </div>
                    </div>
                </div>
        </>
    )
}

export default index
