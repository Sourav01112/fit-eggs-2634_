import React from 'react'
import { Image, Card, CardHeader, CardBody, CardFooter, ButtonGroup, Divider, Stack, Heading, Button, Text, Flex } from '@chakra-ui/react'

export const CardScroll = ({ id, name, category, price, hover_image }) => {
    return (
        <>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src={hover_image}
                        alt={name}
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{name}</Heading>
                        <Text>

                        </Text>
                        <Flex>
                            <Text color='blue.600' fontSize='md'>
                                ₹ {price-50}
                            </Text>
                            <Text ml='5' textDecoration="line-through"  color='#CCCCCC' fontSize='md'>
                                ₹ {price}
                            </Text>
                        </Flex>

                        <Text color='blue.600' fontSize='sm'>
                            {category}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' bgColor={'#C6FF00'}>
                            Buy now
                        </Button>
                        <Button variant='ghost' bgColor={'#FF8A65'}>
                            Add to cart
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </>
    )
}
