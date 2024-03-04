import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack } from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"
import { Radio, RadioGroup } from "@chakra-ui/react"
import { Stack } from "@chakra-ui/react"
import React, { useState } from "react"
import { HiOutlineMenu } from "react-icons/hi"
import styles from "./sidebar.module.css"
import Image from "@/components/Image"
import Button from "@/components/Buttons"
import Link from "next/link"
import { LinkSidebarData } from "@/content/sampleData"
import { motion } from "framer-motion"

interface Props {
    onClose: () => void
    isOpen: boolean
    variant: "drawer" | "sidebar"
}

const SidebarContent = ({ onClick }: { onClick: () => void }) => {
    return (
        <div className="d-flex flex-column gap-2 justify-content-start mt-2">
            {LinkSidebarData.map((link, index) => (
                <Link key={index} href={link.href} passHref onClick={onClick} className={styles.btn}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.4,
                            delay: (index + 2) * 0.05,
                            ease: "easeInOut",
                        }}
                    >
                        <Button variant="link" text={link.text} className={styles.btn} leftIcon={link.icon} />
                    </motion.div>
                </Link>
            ))}
        </div>
    )
}

function PlacementExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState<any>("right")

    return (
        <>
            <div>
                <HiOutlineMenu onClick={onOpen} className={styles.sidebarIcon} />
                <Drawer placement="left" onClose={onClose} size={"xs"} isOpen={isOpen} preserveScrollBarGap={false}>
                    <DrawerOverlay />
                    <DrawerContent className={styles.Drawer}>
                        <Image src="/assets/werbooz_header_logo.svg" alt="logo" className={styles.logo} />
                        <DrawerBody>
                            <SidebarContent onClick={onClose} />
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </div>
        </>
    )
}

export default PlacementExample
