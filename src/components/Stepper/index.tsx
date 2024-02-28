"use client"
import React from "react"
import styles from "./stepper.module.css"
import Image from "@/components/Image"
import { Step, Box, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, useSteps } from "@chakra-ui/react"
import Description from "@/components/Description"
import Heading_v1 from "@/components/Heading/Heading_v1"

const steps = [
    {
        title: "Figma",
        description:
            "Serving as our primary design tool to create wireframes and prototypes, Figma facilitated seamless collaboration and iterative creativity between our designer and developers. Its cloud-based platform allowed our team to work collaboratively in real-time, ensuring efficient design workflows and amazing collaboration.",
        icon: "/assets/portfolios/figma.svg",
    },
    {
        title: "Next.js and Express",
        description:
            "For the backend, we relied on the dynamic synergy of Next.js and Express. Next.js provided server-side rendering, boosting performance by delivering pre-rendered pages. Express, built on Node.js, offered unparalleled flexibility, enabling us to construct robust APIs and manage server-side logic efficiently.",
        icon: "/assets/portfolios/nextjs.svg",
    },
    {
        title: "React.js",
        description:
            "Taking the lead on the frontend, React.js played a pivotal role. Its component-based architecture empowered us to craft a responsive and interactive user experience. Leveraging these features we streamlined our development process.",
        icon: "/assets/portfolios/react.svg",
    },
    {
        title: "MongoDB",
        description:
            "In the realm of data management, MongoDB emerged as our preferred database. Its NoSQL architecture seamlessly accommodated the dynamic and evolving nature of our project. Whether handling change in schema or scaling up, MongoDB provided the flexibility and scalability essential for our application's success.",
        icon: "/assets/portfolios/mongodb.svg",
    },
    {
        title: "AWS",
        description:
            "To unveil our creation to the world, we entrusted AWS with deployment. AWS's dependable infrastructure and extensive services ensured a seamless deployment process, covering everything from hosting to content delivery. AWS laid the foundation for a scalable and secure environment.",
        icon: "/assets/portfolios/aws.svg",
    },
]

const index = () => {
    const { activeStep } = useSteps({
        index: -1,
        count: steps.length,
    })
    return (
        <>
            <div>
                <Stepper index={activeStep} orientation="vertical" gap="0">
                    {steps.map((step, index) => (
                        <Step key={index}>
                            <StepIndicator p={1} rounded={"lg"} background={"#E8EAEB"} border="none">
                                <StepStatus incomplete={<Image src={step.icon} alt="check" />} />
                            </StepIndicator>

                            <div>
                                <Heading_v1 data={{ heading: step.title }} className="font-lg fw-700" />
                                <Description description={step.description} className={`${styles.description} fw-400  mb-2 mt-05`} />
                            </div>

                            <StepSeparator />
                        </Step>
                    ))}
                </Stepper>
            </div>
        </>
    )
}

export default index
