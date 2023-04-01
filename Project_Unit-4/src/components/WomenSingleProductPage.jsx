import React from 'react'
import { Footer } from './Footer'
import {
    Box, Image, Grid, Heading, Text, Divider, Flex, Button, Select, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
export const WomenSingleProductPage = () => {


    return (
        <Box>
            {/* full screen */}
            <Box style={{ display: 'flex', paddingTop: '48px' }}>
            {/* border: '2px solid black', */}
                {/* Left Part */}
                <Box ml={'40px'}>
                    <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}} w={'800px'} h={'1104'} >
                    {/* , border: '2px solid red'  */}

                        <Image style={{ width: '385px' }} src='https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1679745664_1693897.jpg?format=webp&w=480&dpr=1.4' />

                        <Image style={{ width: '385px' }} src='https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1679745664_1693897.jpg?format=webp&w=480&dpr=1.4' />

                        <Image style={{ width: '385px' }} src='https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1679745664_1693897.jpg?format=webp&w=480&dpr=1.4' />

                        <Image style={{ width: '385px' }} src='https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1679745664_1693897.jpg?format=webp&w=480&dpr=1.4' />

                    </Box>
                </Box>

                {/* Right Part */}
                <Box style={{  width: '500px', marginLeft: '15px' }}>
                {/* border: '2px solid blue', */}
                    <Text fontSize='2xl'  as='b' color={'#58595B'}>Superman: Hope</Text>
                    <Text >Women Oversized T-Shirts</Text>
                    <Divider orientation='horizontal' />
                    <Text mt={'21px'}>₹ 649  699 <span style={{ color: 'red' }}>7% Member Discount</span></Text>
                    <Text mt={'21px'}>Please select a size. <a href="#">SIZE CHART</a></Text>
                    <Flex  mt={'21px'} gap={'2'}>
                        <Button p={'20px'} borderRadius={'25px'} variant={'outline'}>XS</Button>
                        <Button p={'20px'} borderRadius={'25px'} variant={'outline'}>S</Button>
                        <Button p={'20px'} borderRadius={'25px'} variant={'outline'}>M</Button>
                        <Button p={'20px'} borderRadius={'25px'} variant={'outline'}>L</Button>
                        <Button p={'20px'} borderRadius={'25px'} variant={'outline'}>XL</Button>
                        <Button p={'20px'} borderRadius={'25px'} variant={'outline'}>XXL</Button>
                    </Flex>

                    <Flex mt={'21px'} gap={'5'}>
                        <Text>Quanity:</Text>
                        <Select variant={'unstyled'} w={'65px'} placeholder='01'>
                            <option value="">02</option>
                            <option value="">03</option>
                            <option value="">04</option>
                            <option value="">05</option>
                            <option value="">06</option>
                            <option value="">07</option>
                            <option value="">08</option>
                            <option value="">09</option>
                            <option value="">10</option>
                        </Select>
                    </Flex>
                    <Flex mt={'21px'}>
                        <Button>ADD TO CART</Button>
                        <Button>ADD TO WISHLISHT</Button>
                    </Flex>

                    <Accordion mt={'21px'} allowToggle>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Product Details
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Product Description
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Artist's Details
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                </Box>
            </Box>

            <Footer />
        </Box>

    )
}
