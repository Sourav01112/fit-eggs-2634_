import React from "react";
import { Box } from "@chakra-ui/react";
import social from "../assets/social.png";
import social2 from "../assets/social2.png";
import social3 from "../assets/social3.png";
import "./style/style.css";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Divider,
  Text,
  Flex,
  Image,
  Heading,
} from "@chakra-ui/react";
import "../components/style/homepage.css";

export const Footer = () => {
  return (
    <div>
      <div
        className="banner"
        //   style={{ marginTop: "30px" }}
      >
        <Heading
          className="red_banner"
          style={{ backgroundColor: "#E71318", paddingTop: "7px" }}
        >
          HOMEGROWN INDIAN BRAND
        </Heading>
      </div>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Heading style={{ paddingTop: "7px" }}>
          Over 5.5 Million Happy Customers
        </Heading>
      </div>

      <div style={{ backgroundColor: "#E6E7E8" }}>
        <div
          className="footerGrid"
          //   style={{
          //     display: "flex",
          //     justifyContent: "center",
          //     marginTop: "25px",
          //     marginBottom: "25px",
          //   }}
        >
          <div
            className="footerFont"
            style={{
              width: "282px",
              height: "205px",
              marginTop: "30px",
              fontWeight: "700",
            }}
          >
            <h2 className="tagColor">NEED HELP</h2>
            <p>Contact Us</p>
            <p>Track Order</p>
            <p>Returs & Refunds</p>
            <p>FAQs</p>
            <p>My Account</p>
          </div>
          <div
            className="footerFont"
            style={{
              width: "282px",
              height: "205px",
              marginTop: "30px",
              fontWeight: "700",
            }}
          >
            <h2 className="tagColor">COMAPNY</h2>
            <p>About Us</p>
            <p>Careers</p>
            <p>Stores Near Me</p>
            <p>From the Soul</p>
            <p>Souled Army</p>
          </div>
          <div
            className="footerFont"
            style={{
              width: "282px",
              height: "205px",
              marginTop: "30px",
              fontWeight: "700",
            }}
          >
            <h2 className="tagColor">MORE INFO</h2>
            <p>T&C</p>
            <p>Privacy Policy</p>
            <p>Sitemap</p>
          </div>
          <div
            className="footerFont"
            style={{
              width: "282px",
              height: "205px",
              marginTop: "30px",
              fontWeight: "700",
            }}
          >
            <p>COD Available</p>
            <p>30 Days Easy Returns</p>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              color: "#58606B",
              marginTop: "5px",
              fontWeight: 700,
            }}
          >
            EXPERIENCE THE SOULED STORE APP{" "}
          </h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{ width: "126px", height: "50px", marginRight: "10px" }}
              src="https://tss-static-images.gumlet.io/icons/play-store.png"
              alt=""
            />
            <img
              style={{ width: "126px", height: "50px" }}
              src="https://tss-static-images.gumlet.io/icons/app-store.png"
              alt=""
            />
          </div>
        </div>

        {/* Accordion */}
        <Box display={"flex"} justifyContent="center" mt={"40px"}>
          <Box w={"1140px"} border={"1px solid #6666"}>
            <Accordion defaultIndex={[1]} allowMultiple>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          fontWeight={700}
                          color={"red"}
                        >
                          NAVIGATION LINKS
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <Divider orientation="horizontal" />
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          fontWeight={700}
                          color={"red"}
                          as="span"
                          flex="1"
                          textAlign="left"
                        >
                          WHO WE ARE
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      The Souled Store was born out of the simple idea of loving
                      what you do - following your soul – and, of course, our
                      love for puns (sold/ souled). Our philosophy is just as
                      simple- life is short, don’t spend it doing something you
                      don’t like. From our products to our website, from our
                      office culture to the way we interact with our customers,
                      this philosophy’s a part of everything we do. In June
                      2013, The Souled Store was founded by four people, with
                      just a cupboard full of t-shirts (probably as big as
                      yours). Although we’ve grown from cupboards to warehouses,
                      a lot of things have remained the same. Our core values
                      are now shared not by just four people, but by a team
                      that’s now grown to over a hundred people. The
                      Neighbourhood Store Vibe We aspire to be your favourite,
                      friendly neighbourhood store. We curate all your favourite
                      designs and make them available on various products
                      ranging from t-shirts, bags, and badges to phone covers,
                      stickers, notebooks, and more. We’re always enthusiastic
                      and kicked about interacting with everyone- whether it’s
                      handling queries over email and social media or
                      interacting with our fans at various events, workshops,
                      and stalls. Why? Because we care.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>

        <div
          className="social"
          //   style={{
          //     display: "flex",
          //     justifyContent: "center",
          //     marginTop: "35px",
          //   }}
        >
          <div style={{ display: "flex" }}>
            <p>100% Secure Payment:</p>
            <img style={{ width: "350px" }} src={social} />
          </div>
          <div style={{ display: "flex" }}>
            <p>Shipping Partners:</p>
            <img style={{ width: "350px" }} src={social2} />
          </div>
        </div>

        <Box w={"1140px"} mr={"50px"} ml={"120px"} mt={"30px"}>
          <Text fontSize="lg" fontWeight={"700"} color={"#58606B"}>
            POPULAR SEARCHES
          </Text>
          <Box textAlign={"center"}>
            <Divider size="lg" orientation="horizontal" />
            <Text className="hidden">
              {" "}
              Women's T-Shirts | Tops | Co-ord Sets | Summer Shirts | Boyfriend
              | T-shirts | Lounge Bralettes | Dresses | Sweatshirts & Sweaters |
              Hoodies & Jackets | Cargos & Joggers | Shorts | Innerwear |
              Freestyle Leggings | All Day Pants | Pajamas | Shoes | Backpacks |
              Perfumes | Socks | New Arrivals | Best Sellers | Activewear |
              Hottest Deals
            </Text>
          </Box>
        </Box>

        <Flex justify="center" align="center">
          <Box mt={"15px"} mb={"30px"} textAlign={"center"}>
            <Image w={"250px"} src={social3} />
          </Box>
        </Flex>
      </div>
    </div>
  );
};
