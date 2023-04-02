import React, { useState, useEffect, useReducer } from 'react'
import { Footer } from './Footer'
import { useParams, Link } from 'react-router-dom'


import {
    Box, Image, Grid, Heading, Text, Divider, Flex, Button, Select, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Stack, Skeleton
} from '@chakra-ui/react'

export const WomenSingleProductPage = () => {


    const { id } = useParams()
    // const [state, dispatch] = useReducer(reducer, inState)
    const [loading, setLoading] = useState(false)
    const [res, setRes] = useState([])
    const [error, setError] = useState(false)


    const FetchAndRender = async () => {
        try {

            setLoading(true)
            let req = await fetch(`https://extinct-dove-jumpsuit.cyclic.app/women/${id}`)
            let out = await req.json()
            console.log(out)
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
                    {/* border: '2px solid black', */}
                    {/* Left Part */}
                    <Box ml={'40px'}>
                        <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} w={'800px'} h={'1104'} >
                            {/* , border: '2px solid red'  */}

                            <Image style={{ width: '385px' }} src={res?.image} />

                            <Image style={{ width: '385px' }} src={res?.hover_image} />

                            <Image style={{ width: '385px' }} src={res?.image} />

                            <Image style={{ width: '385px' }} src={res?.hover_image} />

                        </Box>
                    </Box>

                    {/* Right Part */}
                    <Box style={{ width: '500px', marginLeft: '15px' }}>
                        {/* border: '2px solid blue', */}
                        {/* <Text fontSize='2xl'  as='b' color={'#58595B'}>Superman: Hope</Text> */}
                        <Text fontSize='2xl' as='b' color={'#58595B'}>{res?.name}</Text>
                        <Text >{res?.category}</Text>
                        <Divider orientation='horizontal' />
                        <Flex>
                            <Text mt={'21px'} mr={'15px'}>₹ {res?.price}</Text>
                            <Text mt={'21px'} mr={'15px'} textDecoration="line-through" color='#CCCCCC'>₹ {res?.price - 50}</Text>
                            <Text mt={'21px'} style={{ color: 'red' }}>50₹ Member Discount</Text>
                        </Flex>
                        <Text mt={'21px'}>Please select a size. <a href="#">SIZE CHART</a></Text>
                        <Flex mt={'21px'} gap={'2'}>
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
                            <Link to='/cart'>
                                <Button>ADD TO CART</Button>
                            </Link>

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
}


/* 
<Flex >
                        <Text color={'red'} fontSize="l" fontWeight="700" mb="2" mr='5'>
                            {price - 50}
                        </Text>

                        <Text as="span" textDecoration="line-through" color='#CCCCCC'>
                            {price}
                        </Text>
                    </Flex>
                    <Text color={'#EB8D7C'}>
                        Member Discount ₹ 50
</Text> */