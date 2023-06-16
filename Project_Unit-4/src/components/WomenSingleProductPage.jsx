import React, { useState, useEffect, useReducer } from 'react'
import { Footer } from './Footer'
import { useParams, Link } from 'react-router-dom'
import social4 from '../assets/social4.png'
import { CardScroll } from './CardScroll'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'

import {
    Box, Grid, Heading, Text, Flex, Button, Select, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Stack, Skeleton, Image, Card, CardHeader, CardBody, CardFooter, ButtonGroup, Divider, Highlight
} from '@chakra-ui/react'

export const WomenSingleProductPage = () => {


    const { id } = useParams()

    const [loading, setLoading] = useState(false)
    const [res, setRes] = useState([])
    const [data, setData] = useState([])
    const [error, setError] = useState(false)



    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollForward = () => {
        if (currentIndex < data.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };
    const scrollBackward = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };


    const FetchAndRender = async () => {
        try {

            setLoading(true)
            let req = await fetch(`https://example-cyclick-unit4-clone.onrender.com/${id}`)
            let out = await req.json()
            // console.log(out)
            setRes(out)
            setLoading(false)

        } catch (error) {
            setError(true)
            setLoading(false)

        }
    }

    useEffect(() => {
        FetchAndRender()
    }, [id])


    const FetchAndRenderScroll = async () => {
        try {

            setLoading(true)
            let req = await fetch(`https://example-cyclick-unit4-clone.onrender.com/women`)
            let out = await req.json()
            // console.log( 'this is data',out)
            setData(out)
            setLoading(false)

        } catch (error) {
            setError(true)
            setLoading(false)

        }
    }

    useEffect(() => {
        FetchAndRenderScroll()
    }, [])

    if (loading) {
        return (
            <Stack>
                <Skeleton height='25px' />
                <Skeleton height='25px' />
                <Skeleton height='25px' />
                <Skeleton height='25px' />
                <Skeleton height='25px' />
                <Skeleton height='25px' />
            </Stack>

        )
    } else if (error) {
        return <h1>Erorr 404</h1>

    } else {

        return (
            <Box>
                {/* full screen */}
                <Box style={{ display: 'flex', paddingTop: '48px' }}>
                   
                    {/* Left Part */}
                    <Box ml={'40px'}>
                        <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} w={'800px'} h={'1104'} >
                            <Image style={{ width: '385px' }} src={res?.image} />
                            <Image style={{ width: '385px' }} src={res?.hover_image} />
                            <Image style={{ width: '385px' }} src={res?.image} />
                            <Image style={{ width: '385px' }} src={res?.hover_image} />
                        </Box>
                    </Box>

                    {/* Right Part */}
                    <Box style={{ width: '500px', marginLeft: '15px' }}>
                       
                        <Text fontWeight={'bold'} fontSize='2xl' as='b' color={'#58595B'}>{res?.name}</Text>
                        <Text color={'#a7a9ac'} >{res?.category}</Text>
                        <Divider orientation='horizontal' />
                        <Flex>
                            <Text fontWeight={'bold'} mt={'21px'} mr={'15px'}>₹ {res?.price-50}</Text>
                            <Text mt={'21px'} mr={'15px'} textDecoration="line-through" color='#CCCCCC'>₹ {res?.price}</Text>
                            <Text mt={'21px'} style={{ color: 'red' }}>50₹ Member Discount</Text>
                        </Flex>
                        <Text fontWeight={'bold'} mt={'21px'}>Please select a size. <a href='#' style={{ textDecoration: 'underline', fontWeight: '100' }}>SIZE CHART</a></Text>
                        <Flex mt={'21px'} gap={'2'}>
                            <Button color={'#a7a9ac'} p={'20px'} borderRadius={'25px'} variant={'outline'}>XS</Button>
                            <Button color={'#a7a9ac'} p={'20px'} borderRadius={'25px'} variant={'outline'}>S</Button>
                            <Button color={'#a7a9ac'} p={'20px'} borderRadius={'25px'} variant={'outline'}>M</Button>
                            <Button color={'#a7a9ac'} p={'20px'} borderRadius={'25px'} variant={'outline'}>L</Button>
                            <Button color={'#a7a9ac'} p={'20px'} borderRadius={'25px'} variant={'outline'}>XL</Button>
                            <Button color={'#a7a9ac'} p={'20px'} borderRadius={'25px'} variant={'outline'}>XXL</Button>
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
                        <Flex gap='25px' mt={'21px'}>
                            {/* <Link to='/cart'> */}
                                <Button w='229px' h='38px' bg='#E11B23' borderRadius={'none'} color='white' >ADD TO CART</Button>
                            {/* </Link> */}

                            <Button fontSize='sm' w='160px' h='38px' bg='white' borderRadius={'none'} colorScheme='teal' variant='outline' >ADD TO WISHLISHT</Button>
                        </Flex>

                        <Image w='180px' mt='7' src={social4} />

                        <Accordion defaultIndex={[0]} mt={'21px'} allowToggle>
                            <AccordionItem >
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            Product Details
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>

                                    <Highlight query='Material & Care:' styles={{ px: '1', bg: 'blue.100' }} >  Material & Care:</Highlight>

                                    <Text fontFamily='NewYork'>  100% Cotton <br />   Machine Wash </Text>
                                    <Box mt='7'>
                                        <Highlight query='Country of Origin:' styles={{ px: '1', bg: 'blue.100' }} >
                                            Country of Origin: India (and proud)
                                        </Highlight>
                                    </Box>

                                    <Box mt='7'>
                                        <Highlight query='Manufactured & Sold By:' styles={{ px: '1', bg: 'blue.100' }} >
                                            Manufactured & Sold By:
                                        </Highlight>
                                    </Box>
                                    <Text fontFamily='New York'>
                                        The Souled Store Pvt. Ltd. <br />
                                        224, Tantia Jogani Industrial Premises <br />
                                        J.R. Boricha Marg <br />
                                        Lower Parel (E) <br />
                                        Mumbai - 11 <br />
                                        connect@thesouledstore.com <br />
                                    </Text>

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
                <Divider />
                <hr />
                <hr />

                <Flex style={{ justifyContent: 'space-evenly' }}>
                 
                    <ArrowBackIcon color="red"
                        cursor="pointer"
                        fontSize="5xl"
                        _hover={{ color: 'blue.500' }} onClick={scrollBackward} />

                    {data?.slice(currentIndex, currentIndex + 3).map((card, index) => (
                        <CardScroll key={index} {...card} />
                    ))}

                    <ArrowForwardIcon color="red"
                        cursor="pointer"
                        fontSize="5xl"
                        _hover={{ color: 'blue.500' }} onClick={scrollForward} />
                </Flex>

                <Footer />
            </Box >

        )
    }
}


