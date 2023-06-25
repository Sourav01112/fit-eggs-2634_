import { useState, useEffect, useReducer, useRef } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Radio,
  Stack,
  Flex,
  Text,
  Image,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  Input,
  Checkbox,
  Skeleton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  SkeletonCircle,
  SkeletonText,
  IconButton,
  RadioGroup,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import { AddIcon } from "@chakra-ui/icons";
import { PageSkeleton } from "./PageSkeleton";
import { Pagination } from "./Pagination";
import { Link, useSearchParams } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import SkeletonModel from "./SkeletonModel";
import "../components/style/womenSection.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS": {
      return {
        data: action.payload,
      };
    }
    default: {
      console.log(`Action type is invalid`);
      return state;
    }
  }
};

const inState = {
  data: [],
};

const getPageNumber = (PageNumber) => {
  PageNumber = Number(PageNumber);
  if (typeof PageNumber !== "number") {
    PageNumber = 1;
  }
  if (!PageNumber) {
    PageNumber = 1;
  }
  if (PageNumber <= 0) {
    PageNumber = 1;
  }
  return PageNumber;
};

//***************************MAIN********************

export const WomenSection = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  let [searchParams, setSearchParams] = useSearchParams();
  const [totalCount, setTotalCount] = useState(0);
  const initialPage = getPageNumber(searchParams.get("page"));
  const [page, setPage] = useState(initialPage || 1);
  const [limit, setLimit] = useState(8);
  const [state, dispatch] = useReducer(reducer, inState);
  const [product, setProduct] = useState([]);
  const [price, setPrice] = useState(422);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );
  const [searchResults, setSearchResults] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  // const [order, setOrder] = useState('')

  const [isLoad, setisLoad] = useState(false);

  const handleClickBtn = () => {
    setisLoad(true);
    setTimeout(() => {
      setisLoad(false);
    }, 1000); // 10 seconds in milliseconds
  };

  const toast = useToast();

  // ****************DO with Axios**********

  const getData = (params = {}) => {
    return axios.get(`https://example-cyclick-unit4-clone.onrender.com/women`, {
      params: {
        _page: params.page,
        _limit: params.limit,
        q: params.searchQuery,
      },
    });
  };

  const FetchAndRender = (page, searchQuery) => {
    setLoading(true);
    getData({
      page: page,
      limit: 12,
      q: searchQuery,
    })
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res?.data });
        let count = res.headers.get("X-Total-Count")
          ? Number(res.headers.get("X-Total-Count"))
          : 0;
        setTotalCount(count);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    FetchAndRender(page);
  }, [page]);

  useEffect(() => {
    setSearchParams({ page: page, searchQuery: searchQuery });
  }, [page, searchQuery]);

  const { data } = state; //***********************Destructuring HERE***************************

  //***************** Pagination **************/

  const handlePageChange = (page) => {
    setPage(page);
  };

  //***************** Pagination ENDS**************/

  //****************  Scroll to Top & Bottom  **************
  const [isTop, setIsTop] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsTop(true);
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    setIsTop(false);
  };
  //****************  Scroll to Top & Bottom ENDS **************

  // *********FILTER by category *********

  useEffect(() => {
    // dispatch({ type: "FETCH_LOADING" })
    const filteredData =
      selectedCategories.length === 0
        ? data
        : data.filter((item) => {
            return selectedCategories.some(
              (category) => item.category === category
            );
          });
    dispatch({ type: "FETCH_SUCCESS", payload: filteredData });
  }, [selectedCategories, dispatch, data]);

  const handleCategoryCheckboxChange = (e) => {
    const category = e.target.value;
    const isChecked = e.target.checked;

    setSelectedCategories((prevCategories) => {
      if (isChecked) {
        // Add the selected category to the list of selected categories
        return [...prevCategories, category];
      } else {
        // Remove the unselected category from the list of selected categories
        return prevCategories.filter((c) => c !== category);
      }
    });
    toast({
      position: "bottom-left",
      isClosable: true,
      render: () => (
        <Box textAlign={"center"} color="white" p={3} w={250} bg="#8BC34A">
          Applied
        </Box>
      ),
    });
  };

  // *****************FILTER -- Ends *********************

  //********************* SORT ********************

  const handleSort = (e) => {
    let target = e.target.value;
    let sortedData;
    if (target == "lth") {
      sortedData = data.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (target == "htl") {
      sortedData = data.sort((a, b) => Number(b.price) - Number(a.price));
    } else {
      sortedData = data;
    }
    dispatch({ type: "FETCH_SUCCESS", payload: sortedData });
    toast({
      position: "bottom-left",
      isClosable: true,
      render: () => (
        <Box textAlign={"center"} color="white" p={3} w={250} bg="#8BC34A">
          Applied
        </Box>
      ),
    });
  };

  // ***************** SORT ENDS *********************/*  */

  //************************ SEARCH */

  const handleSearchClick = () => {
    const filteredData = data.filter((val) => {
      if (searchQuery === "") {
        return true;
      } else {
        return val.name.toLowerCase().includes(searchQuery.toLowerCase());
      }
    });
    setSearchResults(filteredData);
    toast({
      position: "bottom-left",
      isClosable: true,
      render: () => (
        <Box textAlign={"center"} color="white" p={3} w={250} bg="#8BC34A">
          Applied
        </Box>
      ),
    });
  };

  return (
    <Box>
      <div className="breadCrumb">
        <img
          src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/category/catban-120230316133819.jpg?format=webp&w=1400&dpr=1.4"
          alt=""
        />

        <Box ml="282px" p="3">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink
                fontSize={12}
                color={"#a7a9ac"}
                fontWeight={"600"}
                href="/"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink
                fontSize={12}
                color={"#a7a9ac"}
                fontWeight={"600"}
                href="/women"
              >
                Womens T-Shirts
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <p fontSize={"15"} color="#775D7B">
            Womens T-Shirts -{" "}
            <span style={{ color: "#a7a9ac" }}> {data.length}Items </span>
          </p>
        </Box>
      </div>

      {/* Filter Drawer */}
      <Button className="FilterBtnForMobile" ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Filter
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      {/* Filter Drawer */}

      <Box
        // style={{ display: "flex" }}
        className="womenContainer"
      >
        {/* LEFT side panel */}

        <Box
          className="filter"
          w={"260px"}
          ml="10px"
          mr="15px"
          boxShadow="rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"
          p={4}
          position="sticky"
          top={0}
          bg="white"
          // bg="white"
          shadow="md"
          h={"750px"}
          // For the scrollbar on the functionality part
          overflowY="auto"
          sx={{
            "&::-webkit-scrollbar": {
              width: "6px",
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

          <Accordion allowMultiple>
            {/************** BY PRODUCTS **************/}

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    PRODUCTS
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Input />
                {data?.map((ele) => {
                  return (
                    <div key={ele.id}>
                      <Checkbox
                        type="checkbox"
                        // checked={selectedCategories.includes(ele.category)}
                        onChange={handleCategoryCheckboxChange}
                        value={ele.category}
                      >
                        {ele.category}
                      </Checkbox>
                    </div>
                  );
                })}
              </AccordionPanel>
            </AccordionItem>

            {/************** BY SEARCH **************/}

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    SEARCH
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Products"
                />
              </AccordionPanel>
            </AccordionItem>

            {/************** BY Size **************/}

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    SIZE
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Input></Input>
                <Flex flexDirection="column">
                  <Checkbox>XXS</Checkbox> <Checkbox>XS </Checkbox>
                  <Checkbox> S</Checkbox>
                  <Checkbox> M</Checkbox>
                  <Checkbox> L </Checkbox>
                  <Checkbox> XL</Checkbox>
                  <Checkbox> XXL </Checkbox>
                  <Checkbox> XXL </Checkbox>
                </Flex>
              </AccordionPanel>
            </AccordionItem>

            {/************** BY PRICES **************/}

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    PRICES
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel mb={"30px"} pb={4}>
                <Slider
                  colorScheme="blue"
                  defaultValue={422}
                  min={422}
                  max={1049}
                  step={1}
                  // value={state.price} onChange={handleSliderChange}
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb bg="blue.500" />
                  <Box position="absolute" bottom="-24px" textAlign={"center"}>
                    <Text fontSize="sm">{price}</Text>
                  </Box>
                </Slider>
              </AccordionPanel>
            </AccordionItem>

            {/************** SORT **************/}

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    SORT
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Stack>
                  <Select onChange={handleSort} variant="unstyled">
                    <option value="">Sort By Price</option>
                    <option value="htl">High to Low</option>
                    <option value="lth">Low to High</option>
                  </Select>
                  value=''
                </Stack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Box pl={"5"} mt={"5"}>
            <Button
              type="submit"
              isLoad={isLoad}
              w="90px"
              mr="15px"
              colorScheme="teal"
              variant="outline"
              onClick={handleSearchClick}
            >
              Apply
            </Button>
            <Button
              w="90px"
              colorScheme="teal"
              variant="outline"
              // onClick={handleClearButtonClick}
            >
              Clear
            </Button>
          </Box>

          {/* Just to Check */}
          {/* <Button>Sort by Price (Low to High)</Button> */}
        </Box>

        {/* RIGHT panel */}
        <Box className="ShopCardContainer">
          {searchResults.length > 0
            ? searchResults.map((ele) => (
                <Link to={`/women/${ele.id}`} key={ele.id}>
                  <Box>
                    <PageSkeleton {...ele} />
                  </Box>
                </Link>
              ))
            : loading
            ? [1, 2].map((n) => <SkeletonModel key={n} size={145} />)
            : data?.map((ele) => (
                <Link to={`/women/${ele.id}`} key={ele.id}>
                  <Box>
                    <PageSkeleton {...ele} />
                  </Box>
                </Link>
              ))}
        </Box>
      </Box>

      <Box 
    
      className="pagination"
      // display="flex" justifyContent="center" 
      // ml={"300px"}
      >
        <Pagination
          page={page}
          totalCount={totalCount}
          onChange={handlePageChange}
          limit={limit}
        />
      </Box>

      <Box position="fixed" bottom="2rem" right="2rem">
        {isTop ? (
          <FaArrowCircleDown
            color="#FF5722"
            size={30}
            onClick={scrollToBottom}
          />
        ) : (
          <FaArrowCircleUp color="#FF5722" size={30} onClick={scrollToTop} />
        )}
      </Box>
    </Box>
  );
};
