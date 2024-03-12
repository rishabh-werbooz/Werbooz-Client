import React from "react"
import styles from "./faq.module.css"
import Accordion from "@/components/Accordion"
import Heading_v1 from "@/components/Heading/Heading_v1"
import Description from "@/components/Description"

const AccordionsData = [
    {
        accordionTitle: "What Services Do you Offer ?",
        accordionContent:
            "At Werbooz, we specialize in a wide range of services, including web design, custom software development, and mobile app creation. Whether you need a sleek website or a robust software solution, we’ve got you covered.",
    },
    {
        accordionTitle: "How Can I Get Started?",
        accordionContent:
            " Getting started with Werbooz is easy! Simply reach out to our team, and we’ll schedule a consultation to discuss your project requirements. From there, we’ll create a tailored plan to bring your vision to life.",
    },
    {
        accordionTitle: "How Long Does Development Take?",
        accordionContent:
            "The timeline varies based on the complexity of your project. During our initial discussions, we’ll provide an estimated timeframe. Rest assured, we prioritize quality and efficiency in every development phase.",
    },
    {
        accordionTitle: "What Makes Werbooz Unique?",
        accordionContent:
            "Our unique blend of technical expertise, creativity, and commitment sets us apart. We’re not just developers; we’re problem solvers who thrive on innovation. Expect personalized solutions and exceptional service.",
    },
    {
        accordionTitle: "What Technologies Do You Work With?",
        accordionContent:
            "Werbooz stays at the forefront of technology trends. We work with cutting-edge tools, languages, and frameworks. Whether it’s Python, React, or cloud solutions, our team is well-versed in the latest tech",
    },
    {
        accordionTitle: "Do You Provide Ongoing Support?",
        accordionContent:
            "Yes, we provide ongoing support for all our projects. We offer maintenance, updates, and troubleshooting. Our team is always available to help you with any issues that may arise.",
    },
]

const index = () => {
    return (
        <div className="main-inline-Padding mt-2 mb-2 ">
            <div className="text-center">
                <Heading_v1 data={{ heading: "Frequently Asked Questions" }} 
                variant="center"
                className="mb-05 text-primary fw-800 font-xxl" />
                <Description
                    description="Have a question? We’ve got answers. Check out our FAQs to learn more about Werbooz and our services."
                    className={`${styles.description} text-center`}
                />
            </div>
            <div className={`${styles.AccordionContainer}`}>
                {AccordionsData.map((accordion, index) => {
                    return <Accordion key={index} accordionTitle={accordion.accordionTitle} accordionContent={accordion.accordionContent} />
                })}
            </div>
        </div>
    )
}

export default index
