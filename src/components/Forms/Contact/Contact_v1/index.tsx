import React from 'react'
import styles from './contact.module.css'
import Description from '@/components/Description'
import Button from '@/components/Buttons'
import Image from '@/components/Image'
import {
    Input,
    FormControl,
    FormLabel,
    InputGroup,
    InputLeftElement,
    Checkbox,
} from '@chakra-ui/react'
import { FaPhone } from 'react-icons/fa6'

const index = () => {
    return (
        <>
            <div className={`${styles.FormDiv} d-flex flex-column  gap-2`}>
                <div className={`${styles.ImageDiv} d-flex justify-content-center flex-column align-items-center`}>
                    <Image src="/assets/werbooz_logo.svg" alt="logo" className={styles.logo} />
                    <div className="text-center">
                        <Description description="Hear from our Expertise" />
                    </div>
                </div>

                <div className={`d-flex gap-4 ${styles.FormLabel}`}>
                    <FormControl variant="floating" id="name">
                        <Input variant="flushed" placeholder=" " focusBorderColor="#003274" />
                        <FormLabel>First Name</FormLabel>
                    </FormControl>
                    <FormControl variant="floating" id="name">
                        <Input variant="flushed" placeholder=" " focusBorderColor="#003274" />
                        <FormLabel>Last Name</FormLabel>
                    </FormControl>
                </div>
                <div className={`d-flex gap-4 ${styles.FormLabel}`}>
                    <FormControl variant="floating" id="name">
                        <InputGroup>
                            {/* <InputLeftElement pointerEvents="none">
                                <FaPhone />
                            </InputLeftElement> */}
                            <Input type="tel" variant="flushed" focusBorderColor="#003274" />
                        </InputGroup>
                        <FormLabel>Phone Number</FormLabel>
                    </FormControl>
                    <FormControl variant="floating" id="name">
                        <Input variant="flushed" placeholder=" " focusBorderColor="#003274" />
                        <FormLabel>Email</FormLabel>
                    </FormControl>
                </div>
                <div className={`d-flex gap-4 ${styles.FormLabel}`}>
                    <FormControl variant="floating" id="name">
                        <Input variant="flushed" placeholder=" " focusBorderColor="#003274" />
                        <FormLabel>Service</FormLabel>
                    </FormControl>
                </div>
                <div className={`d-flex gap-4 ${styles.FormLabel}`}>
                    <FormControl variant="floating" id="name">
                        <Input variant="flushed" placeholder=" " focusBorderColor="#003274" />
                        <FormLabel>Budget</FormLabel>
                    </FormControl>
                </div>
                <Checkbox className={`${styles.checkbox} d-flex items-center`}>I consent to the conditions.</Checkbox>
                <Button variant="solid" text="Submit" rounded="md" className={`${styles.btn}`} />
            </div>
        </>
    )
}

export default index
