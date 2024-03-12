"use client"
import React from "react"
import styles from "./accordion.module.css"
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from "@chakra-ui/react"
import Heading_v1 from "@/components/Heading/Heading_v1"
import Description from "@/components/Description"

interface Props {
    accordionTitle: string
    accordionContent: string
    className?: string
}

const index = ({ accordionTitle, accordionContent, className }: Props) => {
    return (
        <div>
            <Accordion allowToggle>
                <AccordionItem className={styles.accordionItem}>
                    <AccordionButton className={`d-flex justify-content-between gap-4 align-items-center ${styles.accordionBtn} `}>
                        <Heading_v1
                            data={{
                                heading: accordionTitle,
                            }}
                            className="font-lg fw-500"
                        />
                        <AccordionIcon w={8} h={8} />
                    </AccordionButton>

                    <AccordionPanel pb={4}>
                        <Description description={accordionContent} className={`${styles.description}`} />
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default index
