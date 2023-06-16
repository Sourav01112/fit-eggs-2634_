import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Input, Checkbox, Flex, Text, Image, Button } from '@chakra-ui/react'

import { AddIcon } from '@chakra-ui/icons'
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";
import './style/style.css'

export const PageSkeleton = ({ id, image, name, category, price, hover_image }) => {

    const [hovered, setHovered] = useState(false);
    const [transition, setTransition] = useState('')
    const imgSrc = hovered ? hover_image : image;

    return (
        <Box >
            <Box key={id}
                w={'274px'}
                h={'580px'}
                maxW="sm"
                overflow="hidden"
                mt={'5px'}
                className="box"

            >
                <Image width={'254px'} src={imgSrc}

                    onMouseOver={() => setHovered(true)}
                    onMouseOut={() => setHovered(false)}

                />

                <Box p='1'>
                    <Text color={'#686C7E'} fontWeight="700" fontSize="l" mb="2">
                        {name}
                    </Text>

                    <Text fontSize="l" mb="2">
                        {category}
                    </Text>

                    <Flex >
                        <Text color={'red'} fontSize="l" fontWeight="700" mb="2" mr='5'>
                            {price - 50}
                        </Text>

                        <Text as="span" textDecoration="line-through" color='#CCCCCC'>
                            {price}
                        </Text>
                    </Flex>

                    <Button>Rating</Button>

                    <Text color={'#EB8D7C'}>
                        Member Discount ₹ 50
                    </Text>

                    <Button>VIEW</Button>
                    <Button>ADD TO CART</Button>



                </Box>
            </Box>
        </Box>


    )
}
