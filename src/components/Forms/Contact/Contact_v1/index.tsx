import React from 'react'
import styles from './contact.module.css'
import Description from '@/components/Description'
import Button from '@/components/Buttons'
import {
    Input,
    HStack,
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
            <div className={styles.FormDiv}>
                <div className={styles.ImageDiv}>
                    <img src="/assets/logo_2.png" alt="" />
                </div>
                <div className='text-center'>
                    <Description />
                </div>
                <HStack spacing={10}>
                    <FormControl variant="floating" id="name">
                        <Input
                            variant="flushed"
                            placeholder=" "
                            focusBorderColor="#003274"
                        />
                        <FormLabel>First Name</FormLabel>
                    </FormControl>
                    <FormControl variant="floating" id="name">
                        <Input
                            variant="flushed"
                            placeholder=" "
                            focusBorderColor="#003274"
                        />
                        <FormLabel>Last Name</FormLabel>
                    </FormControl>
                </HStack>
                <HStack spacing={10}>
                    <FormControl variant="floating" id="name">
                        <InputGroup>
                            <InputLeftElement pointerEvents="none">
                                <FaPhone />
                            </InputLeftElement>
                            <Input
                                type="tel"
                                variant="flushed"
                                style={{ paddingLeft: '2.2rem' }}
                                focusBorderColor="#003274"
                            />
                        </InputGroup>
                        <FormLabel
                            style={{
                                marginLeft: '2rem',
                            }}
                        >
                            Phone Number
                        </FormLabel>
                    </FormControl>
                    <FormControl variant="floating" id="name">
                        <Input
                            variant="flushed"
                            placeholder=" "
                            focusBorderColor="#003274"
                        />
                        <FormLabel>Email</FormLabel>
                    </FormControl>
                </HStack>
                <HStack spacing={10}>
                    <FormControl variant="floating" id="name">
                        <Input
                            variant="flushed"
                            placeholder=" "
                            focusBorderColor="#003274"
                        />
                        <FormLabel>Service</FormLabel>
                    </FormControl>
                </HStack>
                <HStack spacing={10}>
                    <FormControl variant="floating" id="name">
                        <Input
                            variant="flushed"
                            placeholder=" "
                            focusBorderColor="#003274"
                        />
                        <FormLabel>Budget</FormLabel>
                    </FormControl>
                </HStack>
                <Checkbox size="md">I consent to the conditions.</Checkbox>
                <Button variant="solid" text="Submit" rounded="md" />
            </div>
        </>
    )
}

export default index
