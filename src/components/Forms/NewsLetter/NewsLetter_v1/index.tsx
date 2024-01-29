'use client'
import React from 'react'
import { Input, Button, Stack, FormControl, FormLabel } from '@chakra-ui/react'

const index = () => {
    return (
        <form>
            <Stack
                direction="row"
                spacing={0}
                align="center"
                maxWidth={'500px'}
            >
                <FormControl id="email" isRequired>
                    <Input
                        type="email"
                        placeholder="Your email address"
                        borderRight={'none'}
                        borderRightRadius={0}
                        p={7}
                        focusBorderColor="#003274"
                        bgColor="#EEEAEA"
                        border="none"
                        fontFamily="Poppins"
                        _focus={{
                            outline: 'none',
                            border: 'none',
                            boxShadow: 'none'  
                        }}
                    />
                </FormControl>
                <Button
                    type="submit"
                    borderLeftRadius={0}
                    bgColor="#003274"
                    _hover={{ bgColor: '#003274' }}
                    color="white"
                    p={7}
                    fontFamily="Poppins"
                >
                    Subscribe
                </Button>
            </Stack>
        </form>
    )
}

export default index
