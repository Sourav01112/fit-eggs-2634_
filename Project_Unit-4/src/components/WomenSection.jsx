import { useState, useEffect, useReducer } from 'react'
import {
    Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, Button, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Radio, Stack, Flex, Text, Image, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box, Input, Checkbox, Skeleton, SkeletonCircle, SkeletonText, IconButton, RadioGroup
} from '@chakra-ui/react'
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import { AddIcon } from '@chakra-ui/icons'
import { PageSkeleton } from './PageSkeleton'
import { Pagination } from './Pagination'
import { Link } from 'react-router-dom'
import { Spinner } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
import axios from 'axios';


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
    const [state, dispatch] = useReducer(reducer, inState)
    const [product, setProduct] = useState([])
    const [price, setPrice] = useState(422);
    const [order, setOrder] = useState('')

    const [isLoading, setIsLoading] = useState(false);

    const handleClickBtn = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000); // 10 seconds in milliseconds
    };

    const toast = useToast()

    // ****************DO with Axios**********

    const getData = (params = {}) => {
        return axios.get(`https://extinct-dove-jumpsuit.cyclic.app/women`, {
            params: {
                _page: params.page,
                _limit: params.limit,
                _sort: params.sort,
                _order: params.order
            }
        })
    }

    const FetchAndRender = (page, order) => {
        dispatch({ type: "FETCH_LOADING" })
        getData({
            page: page,
            limit: 8,
            sort: 'price',
            order: order
        })
            .then((res) => {
                // console.log(res)
                dispatch({ type: "FETCH_SUCCESS", payload: res?.data })
                let count = res.headers.get("X-Total-Count") ? Number(res.headers.get("X-Total-Count")) : 0
                setTotalCount(count)
            })
            .catch(() => {
                dispatch({ type: "FETCH_ERROR" })
            })
    }

    useEffect(() => {
        FetchAndRender(page, order)
    }, [page, order])

    const { loading, error, data = [] } = state


    //***************** Pagination **************/

    const handlePageChange = (page) => {
        setPage(page)
    }

    //***************** Pagination ENDS**************/


    //****************  Scroll to Top & Bottom  **************
    const [isTop, setIsTop] = useState(true);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setIsTop(true);
    };

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
        });
        setIsTop(false);
    };
    //****************  Scroll to Top & Bottom ENDS **************

    // *****************SORT - FILTER *********************




    // const reducer1 = (state1, action1) => {
    //     switch (action1.type) {
    //         case "productsCheck": {
    //             return {
    //                 ...state1,
    //                 productsCheck: action1.payload
    //             }
    //         }
    //         case "UPDATE_PRICE":
    //             return { ...state1, price: action1.payload };
    //         case 'SORT_BY_PRICE':
    //             const SoryByPrice = action1.payload;
    //             let sortedProducts = [...state1.products];
    //             if (SoryByPrice === 'LOW_TO_HIGH') {
    //                 sortedProducts.sort((a, b) => a.price - b.price);
    //             } else if (SoryByPrice === 'HIGH_TO_LOW') {
    //                 sortedProducts.sort((a, b) => b.price - a.price);
    //             }
    //             return { ...state1, SoryByPrice: SoryByPrice, products: sortedProducts };
    //         default: {
    //             // throw new Error()
    //             console.log(`Action type is 404`)
    //             return state1
    //         }
    //     }
    // }

    // const initialState = {
    //     productsCheck: false,
    //     price: 422,
    //     rating: ""
    // }

    // const [state1, dispatch1] = useReducer(reducer1, initialState)
    // const [submitted, setSubmit] = useState([])
    // const [sortOption, setSortOption] = useState("priceAsc");

    // const handleSortByPriceChange = (event) => {
    //     const SoryByPrice = event.target.value;
    //     dispatch({ type: 'SORT_BY_PRICE', payload: SoryByPrice });
    // };

    // function handleSliderChange(value) {
    //     dispatch({ type: "UPDATE_PRICE", payload: value });
    // }

    // const handleFunctionality = (e) => {
    //     e.preventDefault()
    //     setSubmit([...submitted, state1])
    //     console.log(submitted)
    // }

    // const handlePriceChange = (e) => {
    //     const value = e.target.value;
    //     setPriceFilter(value)
    //     if (value === "") {
    //         setOrder(data);
    //     } else {
    //         const filtered = data.filter((item) => item.price === value)
    //         setOrder(filtered);
    //     }
    // };



    // function sortProductsByPriceAscending() {
    //     const sortedProducts = [...product].sort((a, b) => a.price - b.price);
    //     setProduct(sortedProducts);
    // }

    // function sortProductsByPriceDescending() {
    //     const sortedProducts = [...product].sort((a, b) => b.price - a.price);
    //     setProduct(sortedProducts);
    // }


    // function handleSortOptionChange(value) {
    //     // const value = event.target?.checked
    //     setSortOption(value);

    // }


    // *****************SORT - FILTER ENDS*********************/*  */

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
                        {/* <form onSubmit={handleFunctionality}> */}
                        <form >
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
                                            return <Checkbox key={ele.id}
                                                name='productsCheck'
                                                value={state.productsCheck}
                                                onChange={(e) => dispatch({
                                                    type: 'productsCheck',
                                                    payload: e.target.checked
                                                })}
                                            >{ele.category}</Checkbox>
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

                                        <Slider colorScheme="blue" defaultValue={422} min={422} max={1049} step={1} 
                                        // value={state.price} onChange={handleSliderChange}
                                        >
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
                                            <RadioGroup 
                                            value={order} onChange={(e) => handlePriceChange(e)}
                                            >
                                                <Radio size='md' colorScheme='green' value="desc"
                                                >
                                                    Price - High to Low
                                                </Radio>
                                                <Radio size='md' colorScheme='green' value="asc"
                                                >
                                                    Price - Low to High
                                                </Radio>
                                            </RadioGroup>
                                        </Stack>
                                    </AccordionPanel>

                                </AccordionItem>

                            </Accordion>

                            <Box pl={'5'} mt={'5'}>
                                <Button type='submit' isLoading={isLoading} w='90px' mr='15px' colorScheme='teal' variant='outline'
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
                        </form>


                        {/* Just to Check */}
                        {/* <Button>Sort by Price (Low to High)</Button> */}

                    </Box>

                    {/* RIGHT panel */}
                    <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', width: '1060px' }}>
                        {data?.map((ele) => {
                            return (
                                <Link to={`/women/${ele.id}`}>
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


                <Box position="fixed" bottom="2rem" right="2rem">
                    {isTop ? (
                        <FaArrowCircleDown size={30} onClick={scrollToBottom} />
                    ) : (
                        <FaArrowCircleUp size={30} onClick={scrollToTop} />
                    )}
                </Box>



            </Box >
        )
    }
}







