import { useState, useEffect, useReducer } from 'react'
import {
    Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, Button, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Radio, Stack, Flex, Text, Image, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box, Input, Checkbox, Skeleton, SkeletonCircle, SkeletonText
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { PageSkeleton } from './PageSkeleton'
import { Pagination } from './Pagination'
import { Link } from 'react-router-dom'
import { Spinner } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'


const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_LOADING": {
            return {
                loading: true,
                data: [],
                error: false
            }
        }
        case 'FETCH_SUCCESS': {
            return {
                loading: false,
                data: action.payload,
                error: false
            }
        }
        case 'FETCH_ERROR': {
            return {
                loading: false,
                data: [],
                error: true
            }
        }
        default: {
            // throw new Error()
            console.log(`Action type is invalid`)
            return state
        }
    }
}
const inState = {
    loading: false,
    data: [],
    error: false
}

//***************************MAIN********************

export const WomenSection = () => {

    const [totalCount, setTotalCount] = useState(0)
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(8)
    const [price, setPrice] = useState(422);
    const [state, dispatch] = useReducer(reducer, inState)

    const handleSliderChange = (value) => {
        setPrice(value);
    };

    const [isLoading, setIsLoading] = useState(false);

    const handleClickBtn = () => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 1000); // 10 seconds in milliseconds
    };

    const toast = useToast()

    // DO with Axios

    const FetchAndRender = async (page) => {

        try {
            dispatch({ type: "FETCH_LOADING" })
            let res = await fetch(`https://extinct-dove-jumpsuit.cyclic.app/women?_limit=${limit}&_page=${page}`)
            let out = await res.json()
            // console.log(out)
            let count = Number(res.headers.get("X-Total-Count"))
            setTotalCount(count)
            // console.log(count)
            dispatch({ type: "FETCH_SUCCESS", payload: out })

        } catch (error) {
            dispatch({ type: "FETCH_ERROR" })
        }

    }

    useEffect(() => {
        FetchAndRender(page)
    }, [page])

    const { loading, error, data } = state


    //***************** Pagination **************/

    const handlePageChange = (page) => {
        setPage(page)
    }

    //***************** Pagination **************/

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
                <div >
                    <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/category/catban-120230316133819.jpg?format=webp&w=1400&dpr=1.4" alt="" />

                    <Box ml='282px' p='3'>
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <BreadcrumbLink fontSize={12} color={'#a7a9ac'} fontWeight={'600'} href='/'>Home</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink fontSize={12} color={'#a7a9ac'} fontWeight={'600'} href='/women'>Womens T-Shirts</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>

                        <p fontSize={'15'} color='#775D7B'>Womens T-Shirts - <span style={{ color: '#a7a9ac' }} > {data.length}Items </span></p>
                    </Box>

                </div>



                <Box style={{ display: 'flex' }}>

                    {/* LEFT side panel */}

                    <Box w={'260px'} ml='10px' mr='15px'
                        boxShadow="rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"
                        p={4} position="sticky" top={0} bg="white" shadow="md" h={'750px'}
                        // For the scrollbar on the functionality part
                        overflowY='auto'
                        sx={{
                            "&::-webkit-scrollbar": {
                                width: "6px"
                            },
                            "&::-webkit-scrollbar-thumb": {
                                background: "#E0E0E0",
                                borderRadius: "full",
                            },
                            "&::-webkit-scrollbar-track": {
                                background: "gray.100",
                            },
                            scrollbarWidth: "thin", // set scrollbar width to thin
                        }}



                    >
                        <Accordion allowMultiple>
                            {/************** BY PRODUCTS **************/}
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            PRODUCTS
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Input></Input>
                                    {data?.map((ele) => {
                                        return <Checkbox>{ele.category}</Checkbox>
                                    })}

                                </AccordionPanel>
                            </AccordionItem>

                            {/************** BY THEMES **************/}

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            THEMES
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Input></Input>
                                    <Checkbox >
                                        Checkbox Label
                                    </Checkbox>
                                    <Checkbox >
                                        Checkbox Label
                                    </Checkbox>
                                </AccordionPanel>
                            </AccordionItem>

                            {/************** BY Size **************/}

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            SIZE
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Input></Input>
                                    <Flex flexDirection='column'>
                                        <Checkbox >XXS</Checkbox> <Checkbox >XS </Checkbox><Checkbox >  S</Checkbox><Checkbox > M</Checkbox><Checkbox >  L </Checkbox><Checkbox > XL</Checkbox><Checkbox >  XXL </Checkbox><Checkbox > XXL </Checkbox>
                                    </Flex>
                                </AccordionPanel>
                            </AccordionItem>

                            {/************** BY PRICES **************/}

                            <AccordionItem >
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            PRICES
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel mb={'30px'} pb={4}>

                                    <Slider colorScheme="blue" defaultValue={422} min={422} max={1049} step={1} value={price} onChange={handleSliderChange}>
                                        <SliderTrack>
                                            <SliderFilledTrack />
                                        </SliderTrack>
                                        <SliderThumb bg='blue.500' />
                                        <Box position='absolute' bottom='-24px' textAlign={'center'} >
                                            <Text fontSize='sm'>{price}</Text>
                                        </Box>
                                    </Slider>
                                </AccordionPanel>
                            </AccordionItem>


                            {/************** SORT **************/}

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            SORT
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Stack>

                                        <Radio size='md' name='1' colorScheme='green'>
                                            Price - High to Low
                                        </Radio>
                                        <Radio size='md' name='1' colorScheme='green'>
                                            Price - Low to High
                                        </Radio>
                                        <Radio size='md' name='1' colorScheme='green'>
                                            Newest
                                        </Radio>
                                        <Radio size='md' name='1' colorScheme='green'>
                                            Popularity
                                        </Radio>

                                    </Stack>
                                </AccordionPanel>
                            </AccordionItem>

                        </Accordion>

                        <Box pl={'5'} mt={'5'}>
                            <Button isLoading={isLoading} w='90px' mr='15px' colorScheme='teal' variant='outline'
                                onClick={() =>
                                    toast({
                                        position: 'bottom-left',
                                        isClosable: true,
                                        render: () => (
                                            <Box textAlign={'center'} color='white' p={3} w={250} bg='#8BC34A'>
                                                Applied
                                            </Box>
                                        ),
                                    })
                                }
                            >Apply</Button>
                            <Button w='90px' colorScheme='teal' variant='outline'>Clear</Button>
                        </Box>

                    </Box>

                    {/* RIGHT panel */}
                    <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', width: '1060px' }}>
                        {data?.map((ele) => {
                            return (
                                <Link to={`/women/products/t-shirts/${ele.id}`}>
                                    <Box >
                                        <PageSkeleton key={ele.id} {...ele} />
                                    </Box>
                                </Link>

                            )
                        })}
                    </Box>

                </Box >

                <Box display="flex" justifyContent="center"
                    ml={'300px'}

                >

                    <Pagination page={page} totalCount={totalCount} onChange={handlePageChange} limit={limit} />

                </Box>
            </Box >
        )
    }
}







