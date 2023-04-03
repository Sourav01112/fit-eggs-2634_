// import { Box, Image, Flex, IconButton } from "@chakra-ui/react";
// import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
// import { useState, useEffect, useRef } from "react";

// const ImageCarousel = () => {
//     const images = [
//         "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Web-banner-coord-setrd.jpg?format=webp&w=1400&dpr=1.4",
//         "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage--Banner_2_Q8eYrCr.jpg?format=webp&w=1400&dpr=1.4",
//         "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Wardrobe-Essentials-Homepage-banner_1.jpg?format=webp&w=1400&dpr=1.4",
//         "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Web-Banner_3_dfO3xNT.jpg?format=webp&w=1400&dpr=1.4",
//         "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Web-Banner1_CsH7N8k.jpg?format=webp&w=1400&dpr=1.4"
//     ];

//     const [currentImage, setCurrentImage] = useState(0);
//     const [intervalId, setIntervalId] = useState(null);
//     const [autoSlide, setAutoSlide] = useState(true);
//     // const intervalRef = useRef();

//     useEffect(() => {
//         if (autoSlide) {
//             startAutoSlide();
//         } else {
//             stopAutoSlide();
//         }
//         return () => {
//             clearInterval(intervalId);
//         };
//     }, [autoSlide]);

//     const startAutoSlide = () => {
//         const id = setInterval(() => {
//             setCurrentImage((currentImage + 1) % images.length);
//         }, 1000);
//         setIntervalId(id);
//     };

//     const stopAutoSlide = () => {
//         clearInterval(intervalId);
//         setIntervalId(null);
//     };

//     const handleNext = () => {
//         setCurrentImage((currentImage + 1) % images.length);
//         stopAutoSlide();
//     };

//     const handlePrev = () => {
//         setCurrentImage((currentImage + images.length - 1) % images.length);
//         stopAutoSlide();
//     };

//     return (
//         <Box  pos="relative" overflow="hidden"  
//         _hover={{ cursor: "pointer" }}
//         transition="all 0.3s ease-out">
//             <Flex
//                 // w={`${images.length}00%`}
//                 w={'100%'}
//                 h="100%"
//                 transform={`translateX(-${currentImage * (100 / images.length)}%)`}
//                 transition="transform 0.4s ease"
//             >
//                 {images.map((imageUrl) => (
//                     <Image key={imageUrl} src={imageUrl} w={`${100 / images.length}%`} h="100%" objectFit="cover" 

//                     top="0"
//                     left="0"
//                     transition="all 0.1s ease-out"
//                     _hover={{ transform: "scale(1.1)" }}

//                     />
//                 ))}
//             </Flex>
//             <IconButton
//                 pos="absolute"
//                 top="50%"
//                 left="0"
//                 transform="translateY(-50%)"
//                 aria-label="Previous"
//                 icon={<ChevronLeftIcon />}
//                 onClick={handlePrev}
//             />
//             <IconButton
//                 pos="absolute"
//                 top="50%"
//                 right="0"
//                 transform="translateY(-50%)"
//                 aria-label="Next"
//                 icon={<ChevronRightIcon />}
//                 onClick={handleNext}
//             />
//         </Box>
//     );
// };

// export default ImageCarousel;



import React from 'react'
import Marquee from 'react-fast-marquee'

export const ImageCarousel = () => {
    return (
        <div>

            <Marquee direction="right" speed={80} gradient={false}
                style={{ boxShadow: "none" }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ marginLeft: '15px' }}>
                        <img style={{height: '450px'}} src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Web-banner-coord-setrd.jpg?format=webp&w=1400&dpr=1.4" alt="" />
                    </div>

                    <div style={{ marginLeft: '15px' }}>
                        <img style={{height: '450px'}}  src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage--Banner_2_Q8eYrCr.jpg?format=webp&w=1400&dpr=1.4" alt="" />
                    </div>

                    <div style={{ marginLeft: '15px' }}>
                        <img style={{height: '450px'}} src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Wardrobe-Essentials-Homepage-banner_1.jpg?format=webp&w=1400&dpr=1.4" alt="" />
                    </div>

                    <div style={{ marginLeft: '15px' }}>
                        <img style={{height: '450px'}} src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Web-Banner_3_dfO3xNT.jpg?format=webp&w=1400&dpr=1.4" alt="" />
                    </div>
                    <div style={{ marginLeft: '15px' }}>
                        <img style={{height: '450px'}} src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Web-Banner1_CsH7N8k.jpg?format=webp&w=1400&dpr=1.4" alt="" />
                    </div>


                </div>
            </Marquee>

        </div>
    )
}



