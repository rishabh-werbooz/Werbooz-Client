"use client"
import React from "react"
import styles from "./stepper.module.css"
import Image from "@/components/Image"
import { Step, Box, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, useSteps } from "@chakra-ui/react"

const steps = [
    { title: "First", description: "Contact Info" },
    { title: "Second", description: "Date & Time" },
    { title: "Third", description: "Select Rooms" },
]

const index = () => {
    const { activeStep } = useSteps({
        index: steps.length,
        count: steps.length,
    })
    return (
        <>
            <Stepper
                index={activeStep}
                orientation="vertical"
                height="400px"
                gap="0"
            >
                <Step>
                    <StepIndicator p={1} rounded={"lg"} background={"#E8EAEB"} border="none">
                        <StepStatus complete={<Image src="/assets/portfolios/figma.svg" alt="check" />} />
                    </StepIndicator>

                    <Box flexShrink="0">
                        <StepTitle>lorem</StepTitle>
                        <StepDescription>lorem</StepDescription>
                    </Box>

                    <StepSeparator />
                </Step>

                <Step>
                    <StepIndicator p={1} rounded={"lg"} background={"#E8EAEB"} border="none">
                        <StepStatus complete={<Image src="/assets/portfolios/nextjs.svg" alt="check" />} />
                    </StepIndicator>

                    <Box flexShrink="0">
                        <StepTitle>lorem</StepTitle>
                        <StepDescription>lorem</StepDescription>
                    </Box>

                    <StepSeparator />
                </Step>
            </Stepper>
        </>
    )
}

export default index
