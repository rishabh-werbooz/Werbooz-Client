import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import { Radio, RadioGroup } from "@chakra-ui/react"
import { Stack } from "@chakra-ui/react"
import React, { useState } from "react"
import { HiOutlineMenu } from "react-icons/hi"
import styles from "./sidebar.module.css"
import Image from "@/components/Image"
function PlacementExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState<any>("right")

    return (
        <>
            <div>
                <HiOutlineMenu onClick={onOpen} className={styles.sidebarIcon} />
                <Drawer placement="left" onClose={onClose} isOpen={isOpen} preserveScrollBarGap={false}>
                    <DrawerOverlay />
                    <DrawerContent className={styles.Drawer}>
                        <Image src="/assets/werbooz_logo.png" alt="logo" className={styles.logo} />
                        <DrawerBody></DrawerBody>
                    </DrawerContent>
                </Drawer>
            </div>
        </>
    )
}

export default PlacementExample
