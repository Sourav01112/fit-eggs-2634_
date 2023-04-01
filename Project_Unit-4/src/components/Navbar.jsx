import { useState, useEffect } from "react";
import {
    Flex, Spacer, Tab, TabList, Tabs, Box, Select, HStack, FormControl, FormLabel, Spinner, Heading, Text, IconButton, Button, CloseButton, useDisclosure, List, ListItem, Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor, Portal
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";
import logo from '../assets/The Amazing.png'
import { Navigate } from "react-router-dom";
import house from '../assets/house.svg'
import { useAuth0 } from "@auth0/auth0-react";

export const Navbar = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();


    const handleTabChange = (index) => {
        setTabIndex(index);
    };
    const [showBox, setShowBox] = useState(true);

    const handleClose = () => {
        setShowBox(false);
    };


    return (

        <Box>
            <Box>
                {showBox && (
                    <Flex alignItems="center" backgroundColor="black">
                        <Box flex={1}>
                            <Text textAlign={'center'} fontSize={20} color="white">
                                NOW SHOPPING AT <span style={{ color: 'red' }}> MEMBERSHIP </span>PRICES
                            </Text>
                        </Box>
                        <CloseButton onClick={handleClose} variant="unstyled" color="red" />
                    </Flex>
                )}


                <Flex bg="#E11B23" color="white" p="3" height='42px' >
                    <Link to='/'>
                        <Box m='-12px' mt={'2px'} >
                            <img src={logo} alt="Logo" style={{ width: '90px' }} />
                        </Box>
                    </Link>

                    <Box ml='100px' >
                        <Tabs index={tabIndex} onChange={handleTabChange} mt='-11px'
                        >
                            <TabList
                            >
                                <Tab fontWeight='bold' _selected={{ color: 'black', bg: 'white', }}>
                                    <Link to="/">WOMEN</Link>
                                </Tab>
                                <Tab fontWeight='bold' _selected={{ color: 'black', bg: 'white' }}>
                                    <Link to="/men">MEN</Link>
                                </Tab>
                                <Tab fontWeight='bold' _selected={{ color: 'black', bg: 'white' }}>
                                    <Link to="/kids" fontWeight="extrabold" >KIDS</Link>
                                </Tab>
                            </TabList>
                        </Tabs>
                    </Box>
                    <Spacer />
                    <HStack fontSize={'13px'} spacing='24px' mr='100px'>
                        <Box>TRACK ORDER</Box>
                        <Box>CONTACT US</Box>
                        <Box>DOWNLOAD APP</Box>

                        {isAuthenticated &&
                            <Box>
                                <Text>{user?.name}</Text>
                            </Box>
                        }


                    </HStack>
                </Flex>
            </Box>

            <Box>


                <Flex bg='white' color="black" p="2" marginLeft={'90px'} style={{ justifyContent: 'space-evenly', }}  >


                    <Select iconSize="1em" border={"none"} placeholder='TOPWEAR' sx={{
                        fontFamily: 'sans-serif', fontSize: "14px", fontWeight: '700', color: 'rgba(88, 89, 91, 1)'
                    }}>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                    <Select iconSize="1em" border={"none"} placeholder='BOTTOMWEAR' sx={{ fontFamily: 'sans-serif', fontSize: "14px", fontWeight: '700', color: 'rgba(88, 89, 91, 1)' }}>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                    <Select iconSize="1em" border={"none"} placeholder='SHOES&ACCESSORIES' sx={{ fontFamily: 'sans-serif', fontSize: "14px", fontWeight: '700', color: 'rgba(88, 89, 91, 1)', width: '210px' }}>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                    <Select iconSize="1em" border={"none"} placeholder='COLLECTIONS' sx={{
                        fontFamily: 'sans-serif', fontSize: "14px", fontWeight: '700', color: 'rgba(88, 89, 91, 1)',
                        width: '150px'
                    }}>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                    <Select iconSize="1em" border={"none"} placeholder='SHOP BY THEMES' sx={{ fontFamily: 'sans-serif', fontSize: "14px", fontWeight: '700', color: 'rgba(88, 89, 91, 1)' }}>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                    <Select iconSize="1em" border={"none"} placeholder='MEMBERSHIP' sx={{ fontFamily: 'sans-serif', fontSize: "14px", fontWeight: '700', color: 'rgba(88, 89, 91, 1)' }}>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>

                    <Box style={{
                        display: 'flex', justifyContent: 'space-between',
                        //  border: '2px solid red', 
                        width: '1000px', paddingLeft: '100px', paddingRight: '100px'
                    }}>
                        {/* <h1><i className="fa-solid fa-user"
                            style={{ color: 'rgba(88, 89, 91, 1)' }}></i></h1> */}
                        <Popover maxW='xs' >
                            <PopoverTrigger>
                                <h1><i className="fa-solid fa-user"
                                    style={{ color: 'rgba(88, 89, 91, 1)' }}></i></h1>
                            </PopoverTrigger>
                            <Portal >
                                <PopoverContent width='180px'>
                                    <PopoverArrow />
                                    <PopoverHeader>Hello, {user?.name}</PopoverHeader>
                                    <PopoverCloseButton />
                                    <PopoverBody>
                                        <Button backgroundColor='#8BC34A' width='70px' height='35px' color='white'
                                            onClick={() => loginWithRedirect()}
                                        >Log In</Button>
                                    </PopoverBody>
                                    <PopoverFooter><Button backgroundColor='#E11B23'
                                        color='white'
                                        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}

                                    >Log Out</Button></PopoverFooter>
                                </PopoverContent>
                            </Portal>
                        </Popover>

                        <h1><i className="fa-sharp fa-solid fa-bag-shopping" style={{ color: 'rgba(88, 89, 91, 1)' }}></i>  </h1>
                    </Box>

                </Flex>

            </Box>

            {/* rgb(167,169,180) */}

        </Box >
    );
}

// export default Navbar;

