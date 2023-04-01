import { useEffect, useState } from 'react'
import './style/style.css'
import ImageCarousel from './ImageCarousel'
import { HomeCard } from './HomeCard'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRightIcon, AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Divider, Text } from '@chakra-ui/react'
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import { Footer } from './Footer'

import { Box, Image, Flex, IconButton, Heading } from "@chakra-ui/react";

export const Homepage = () => {

    const images = [
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/web-icon_1.jpg?format=webp&w=300&dpr=1.4",
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/Marvel_Logo_268x220_b16y8nC_GKd3vRA_pj8VIpT.jpg?format=webp&w=300&dpr=1.4",
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/HarryPotter_Logo_268x220_LqBAKZU_Y8BG6uT_yOFsTzf.jpg?format=webp&w=300&dpr=1.4",
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/Disnety_Logo_268x220_GevoL2M_2j5PP2v_3KKRAlG.jpg?format=webp&w=300&dpr=1.4",
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/DC_Logo_268x220_qtYfouo_VyuqmVD_z5mqek7.jpg?format=webp&w=300&dpr=1.4",
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/LooneyTunes_268x220_o3UJ8Y0_OPjL9nW_Ye4aDaM.jpg?format=webp&w=300&dpr=1.4",
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/web-icon1_tpAVhhC.jpg?format=webp&w=300&dpr=1.4",
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/DC_Logo_268x220_qtYfouo_VyuqmVD_Pbz2nyW_hpOjuHV.jpg?format=webp&w=300&dpr=1.4",
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/Rick_Morty_268x220_4283QPV_mvWCPYZ.jpg?format=webp&w=300&dpr=1.4",
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/CSK_268x220_uUbHRKl_uwis8JT_1.jpg?format=webp&w=300&dpr=1.4",
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/StarWars_268x220_sPJGI16_ODbjkHD_4X4Co2K.jpg?format=webp&w=300&dpr=1.4"



    ];

    const [currentImage, setCurrentImage] = useState(0);
    const [intervalId, setIntervalId] = useState(null);


    const handleNext = () => {
        setCurrentImage((currentImage + 4));
        stopAutoSlide();
    };

    const handlePrev = () => {
        setCurrentImage((currentImage - 4));
        stopAutoSlide();
    };


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


    return (
        <div>

            <div>
                <ImageCarousel />
            </div>

            <div style={{ textAlign: 'center', marginTop: '30px', marginBottom: '30px' }}>
                <Heading fontSize='25px'>COLLECTIONS</Heading>
            </div>

            <div style={{ display: 'flex' }} >
                <HomeCard src={`https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/new-arrival_K4kSjL3.jpg?format=webp&w=480&dpr=1.4`} />

                <HomeCard src={`https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Colllection-Tile2_JiJDYsX.jpg?format=webp&w=480&dpr=1.4`} />


                <HomeCard src={`https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Colllection-Tile1_lwye5cS.jpg?format=webp&w=480&dpr=1.4`} />
            </div>

            <div style={{ textAlign: 'center', marginTop: '30px', marginBottom: '30px' }}>
                <Heading fontSize='25px'>CATEGORIES</Heading>
            </div>

            <div style={{ display: 'flex' }} >
                <HomeCard src={`https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/WebsiteTiles_Big_Women-version6.jpg?format=webp&w=480&dpr=1.4`} />

                <Link to='/women/t-shirts'>
                    <HomeCard src={`https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/WebsiteTiles_Big_Women-version5.jpg?format=webp&w=480&dpr=1.4`} />
                </Link>

                <HomeCard src={`https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/WebsiteTiles_Big_Women-version4.jpg?format=webp&w=480&dpr=1.4`} />
            </div>


            <div style={{ display: 'flex', marginTop: '20px' }} >
                <HomeCard src={`https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/WebsiteTiles_Big_Women-version3.jpg?format=webp&w=480&dpr=1.4`} />
                <HomeCard src={`https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/WebsiteTiles_Big_Women-version2.jpg?format=webp&w=480&dpr=1.4`} />
                <HomeCard src={`https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/WebsiteTiles_Big_Women-versiond.jpg?format=webp&w=480&dpr=1.4`} />
            </div>

            <div style={{ display: 'flex', marginTop: '20px' }} >
                <HomeCard src={`https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/WebsiteTiles_Small_women-version7.jpg?format=webp&w=330&dpr=1.4`} />

                <HomeCard src={`https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/WebsiteTiles_Small_women-version-14-02-233_kVU2vGa.jpg?format=webp&w=330&dpr=1.4`} />

                <HomeCard src={`https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Small-Tile_shorts_3_1_qH2xOZD.jpg?format=webp&w=330&dpr=1.4`} />

                <HomeCard src={`https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/WebsiteTiles_Small_women-versionc.jpg?format=webp&w=330&dpr=1.4`} />
            </div>


            <div style={{ textAlign: 'center', marginTop: '30px', marginBottom: '30px' }}>
                <Heading fontSize='25px'>TRENDING COLOURS OF THE WEEK</Heading>
            </div>

            <div _hover={{ transform: "scale(1.1)" }} style={{ display: 'flex' }} >
                <HomeCard src={`https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Collection-tile_11_1.jpg?format=webp&w=480&dpr=1.4`} />

                <HomeCard src={`https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Colllection-Tiles.jpg?format=webp&w=480&dpr=1.4`} />

                <HomeCard src={`https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/collection-tile_pretty-Pink_2_Jz32NqG_f9j62Lv.jpg?format=webp&w=480&dpr=1.4`} />
            </div>

            <div style={{ textAlign: 'center', marginTop: '30px', marginBottom: '30px' }}>
                <Heading fontSize='25px'>OFFICIAL MERCHANDISE </Heading>
            </div>


            <Box pos="relative" overflow="hidden"
                _hover={{ cursor: "pointer" }}
                transition="all 0.3s ease-out"
                ml={'20px'}
            >
                <Flex transform={`translateX(-${currentImage * (100 / images.length)}%)`}
                    transition="transform 0.4s ease"
                >
                    {images.map((imageUrl) => (
                        <Image mr={'25px'} key={imageUrl} src={imageUrl} objectFit="cover"
                            top="0"
                            left="0"
                        />
                    ))}
                </Flex>
                <IconButton pos="absolute" top="50%" left="0" transform="translateY(-50%)"
                    aria-label="Previous"
                    icon={<ChevronLeftIcon />}
                    onClick={handlePrev}
                />
                <IconButton pos="absolute" top="50%" right="0" transform="translateY(-50%)"
                    aria-label="Next"
                    icon={<ChevronRightIcon />}
                    onClick={handleNext}
                />
            </Box>


            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Heading fontSize='25px'>STRAIGHT OUT OF CELEBRITY CLOSETS </Heading>
                <div style={{ marginBottom: '40px', marginTop: '20px' }}>
                    <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Sara_Homepage_omr7A1p.jpg?format=webp&w=1400&dpr=1.4" />
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Heading fontSize='25px'>MEMBERSHIP</Heading>
                <div style={{ marginBottom: '40px', marginTop: '20px' }}>
                    <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Exclusive-Members-Tile_Desktop_aMZI7UU.jpg?format=webp&w=1400&dpr=1.4" />
                </div>
            </div>


            {/************ FOOTER *********/}
            <Footer />
            <Box position="fixed" bottom="2rem" right="2rem">
                {isTop ? (
                    <FaArrowCircleDown size={30} onClick={scrollToBottom} />
                ) : (
                    <FaArrowCircleUp size={30} onClick={scrollToTop} />
                )}
            </Box>


        </div>
    )
}
