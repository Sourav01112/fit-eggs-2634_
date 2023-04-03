import React from 'react'
import { Box } from '@chakra-ui/react'
import social from '../assets/social.png'
import social2 from '../assets/social2.png'
import social3 from '../assets/social3.png'
import './style/style.css'
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Divider, Text, Flex, Image, Heading} from '@chakra-ui/react'

export const Footer = () => {
    return (
        <div>
            <div style={{ marginTop: '30px' }}>
                <Heading className='red_banner' style={{ backgroundColor: '#E71318', paddingTop: '7px' }}>HOMEGROWN INDIAN BRAND</Heading>
            </div>

            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <Heading style={{ paddingTop: '7px' }}>Over 5.5 Million Happy Customers</Heading>
            </div>

            <div style={{ backgroundColor: '#E6E7E8' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '25px', marginBottom: '25px' }}>
                    <div className='footerFont' style={{ width: '282px', height: '205px', marginTop: '30px', fontWeight: '700' }}>
                        <h2 className='tagColor'>NEED HELP</h2>
                        <p>Contact Us</p>
                        <p>Track Order</p>
                        <p>Returs & Refunds</p>
                        <p>FAQs</p>
                        <p>My Account</p>
                    </div>
                    <div className='footerFont' style={{ width: '282px', height: '205px', marginTop: '30px', fontWeight: '700' }}>
                        <h2 className='tagColor'>COMAPNY</h2>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Stores Near Me</p>
                        <p>From the Soul</p>
                        <p>Souled Army</p>
                    </div>
                    <div className='footerFont' style={{ width: '282px', height: '205px', marginTop: '30px', fontWeight: '700' }}>
                        <h2 className='tagColor'>MORE INFO</h2>
                        <p>T&C</p>
                        <p>Privacy Policy</p>
                        <p>Sitemap</p>
                    </div>
                    <div className='footerFont' style={{ width: '282px', height: '205px', marginTop: '30px', fontWeight: '700' }}>
                        <p>COD Available</p>
                        <p>30 Days Easy Returns</p>
                    </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <h1 style={{
                        color: '#58606B',
                        marginTop: '5px',
                        fontWeight: 700
                    }}>EXPERIENCE THE SOULED STORE APP </h1>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img style={{ width: '126px', height: '50px', marginRight: '10px' }} src="https://tss-static-images.gumlet.io/icons/play-store.png" alt="" />
                        <img style={{ width: '126px', height: '50px' }}
                            src="https://tss-static-images.gumlet.io/icons/app-store.png" alt="" />
                    </div>
                </div>

                {/* Accordion */}
                <Box display={'flex'} justifyContent='center' mt={'40px'}>


                    <Box w={'1140px'} border={'1px solid #6666'} >
                        <Accordion defaultIndex={[1]} allowMultiple>
                            <AccordionItem>
                                {({ isExpanded }) => (
                                    <>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left' fontWeight={700} color={'red'}>
                                                    NAVIGATION LINKS
                                                </Box>
                                                {isExpanded ? (
                                                    <MinusIcon fontSize='12px' />
                                                ) : (
                                                    <AddIcon fontSize='12px' />
                                                )}
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>
                            <Divider orientation='horizontal' />
                            <AccordionItem>
                                {({ isExpanded }) => (
                                    <>
                                        <h2>
                                            <AccordionButton>
                                                <Box fontWeight={700} color={'red'} as="span" flex='1' textAlign='left'>
                                                    WHO WE ARE
                                                </Box>
                                                {isExpanded ? (
                                                    <MinusIcon fontSize='12px' />
                                                ) : (
                                                    <AddIcon fontSize='12px' />
                                                )}
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            The Souled Store was born out of the simple idea of loving what you do - following your soul – and, of course, our love for puns (sold/ souled). Our philosophy is just as simple- life is short, don’t spend it doing something you don’t like. From our products to our website, from our office culture to the way we interact with our customers, this philosophy’s a part of everything we do.

                                            In June 2013, The Souled Store was founded by four people, with just a cupboard full of t-shirts (probably as big as yours). Although we’ve grown from cupboards to warehouses, a lot of things have remained the same. Our core values are now shared not by just four people, but by a team that’s now grown to over a hundred people.
                                            The Neighbourhood Store Vibe
                                            We aspire to be your favourite, friendly neighbourhood store. We curate all your favourite designs and make them available on various products ranging from t-shirts, bags, and badges to phone covers, stickers, notebooks, and more. We’re always enthusiastic and kicked about interacting with everyone- whether it’s handling queries over email and social media or interacting with our fans at various events, workshops, and stalls. Why? Because we care. A recent study by our in-house, prize-winning, and totally unbiased researchers showed that visiting www.thesouledstore.com causes excessive happiness, and could increase your lifespan by up to 7.5%.
                                            The ‘POP’
                                            Defined as “modern popular culture transmitted via the mass media and aimed particularly at younger people,” pop culture changes rapidly based on trends and events. Be it movies, TV shows, stand-up comedians, sports, or music- it’s constantly evolving. The Souled Store constantly adapts to provide you the freshest of products, with the best of designs, covering all your favourite fandoms. We put the ‘pop’ in pop culture.
                                            All of this for YOU
                                            We help you express yourself through our wide collection of products available online. The collection is extensive and features menswear and womenswear. Our t-shirts online reflect the latest trends. We have official merchandise for Hollywood and Bollywood movies, your favourite TV shows, as well as top sports teams- there’s something for everyone! With your love and support, The Souled Store has grown to over 1 million fans on Facebook, 200,000 followers on Instagram and the numbers are growing as we type this. We’re grateful to have you as a part of our journey to spread love to more and more Souledsters all over.
                                            Our Collection
                                            Our product range contains a mix of apparel and accessories. Apparels include t-shirts (round necks and polos), t-shirt dresses, boxers, hoodies, jerseys, and socks. The accessories include backpacks, duffle bags, tote bags, badgers, stickers, mugs, notebooks (diaries), magnets, posters, action figures, keychains, and mobile covers.
                                            Our Ethos
                                            While we are a fun loving, pop culture brand, as a company that interacts so actively with various people from diverse backgrounds, we have a larger, more responsible role to play. We try and lend support to a variety of causes that we are passionate about and do our bit to give back.
                                            Most recently, we launched a campaign in collaboration with GiveHer5, a social initiative, to provide safe, affordable sanitary solutions to women in rural areas. We worked enthusiastically to design a wide range of merchandise, featuring themes of female empowerment, feminism, and gender equality, to raise funds and fight period poverty. Every t-shirt sold = 1 girl’s yearly requirement of sanitary napkins. Through sustained efforts of the GiveHer5 team and with the help of a lot of celebrities who lent their support, we were able to help over 1,000 girls and women, a number we’re super proud of!
                                            Welcome Aboard
                                            We’re always looking for awesome people!
                                            As a company growing fast, in a country brimming with talent, The Souled Store is always looking for you fun, talented people to join and contribute to what we’re trying to build. Our workspace is a highly dynamic and positive space, where ideas are encouraged, creativity is rewarded, leadership and initiative are valued, and quirkiness is essential. This ties back to our founding philosophy – do what you love, and don’t waste a moment doing something you don’t like. Most of our company’s souls have cast away mundane corporate jobs, and haven’t looked back since.
                                            Our Mondays are without blues, and are just as crazy as our Fridays. Thinking on your feet and finding innovative solutions to all kinds of tasks is part of the job. If you think this is where you belong, look up our available positions on our ‘Careers’ page. The Souled Store is not just a website or an organisation but a community of like-minded people getting together and expressing themselves through their work.
                                            WARNING: Chill vibes only.
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>
                        </Accordion>
                    </Box>
                </Box>


                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '35px' }}>
                    <div style={{ display: 'flex' }}>
                        <p>100% Secure Payment:</p>
                        <img style={{ width: '350px' }} src={social} />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <p>Shipping Partners:</p>
                        <img style={{ width: '350px' }} src={social2} />
                    </div>
                </div>

                <Box w={'1140px'} mr={'50px'} ml={'120px'} mt={'30px'}>
                    <Text fontSize='lg' fontWeight={'700'} color={'#58606B'}>POPULAR SEARCHES</Text>
                    <Box textAlign={'center'}>
                        <Divider size='lg' orientation='horizontal' />
                        <Text > Women's T-Shirts | Tops | Co-ord Sets | Summer Shirts | Boyfriend | T-shirts | Lounge Bralettes | Dresses | Sweatshirts & Sweaters | Hoodies & Jackets | Cargos & Joggers | Shorts | Innerwear | Freestyle Leggings | All Day Pants | Pajamas | Shoes | Backpacks | Perfumes | Socks | New Arrivals | Best Sellers | Activewear | Hottest Deals</Text>
                    </Box>
                </Box>


                <Flex justify="center" align="center">
                    <Box mt={'15px'} mb={'30px'} textAlign={'center'}>
                        <Image w={'250px'} src={social3} />
                    </Box>
                </Flex>

            </div>
        </div>
    )
}
