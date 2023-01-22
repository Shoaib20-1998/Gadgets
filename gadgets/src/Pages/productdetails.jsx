import { Footer } from "../Component/footer";
import { Nav } from "../Component/navbar";
import { useParams } from "react-router-dom";
import StarUzair from "../ChakraComp/reactstar";
import styles from '../css/Productdetails.module.css'
import { Rightdiv } from "../Component/rightdiv";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  border,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import Item from "antd/es/list/Item";
import { Tabs } from "antd";
const ProductDetails = () => {
  const [data, setdata] = useState()
  const { id } = useParams()
  const getdata = () => {
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`)
      .then((res) => setdata(res.data))
  }

  useEffect(() => {
    getdata()
  }, [])
  console.log(data)

  const Card = () => {

    return <>


      <div className={styles.datadivleft}></div>
      <div className={styles.datadivleft}></div>
      <div>


      </div>

      {/* <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs> */}





    </>

  }






  return <>
    <Nav />

    <div className={styles.main}>
      <div style={{ display: "flex", margin: "5px", padding: "10px", justifyContent: "space-around" }}>
        <div><h1 style={{ fontWeight: "bold", fontFamily: "sans-serif", fontSize: "50px" }}>{data?.title}</h1></div>
        <a href="https://www.amazon.in/dp/B082F2T5PQ?tag=kp-web-price-in-india-21&linkCode=ogi&th=1&psc=1&SubscriptionId=AKIAJZ7ZVEW7WHEFIMWA&ascsubtag=127946760&language=en_IN"><div><button style={{ fontWeight: "bold", fontFamily: "sans-serif", fontSize: "20px", border: "1px dotted white", backgroundColor: "red", borderRadius: "20px", margin: "5px", padding: "5px 10px", color: "white" }}>  Buy Now</button></div></a>
      </div>
      <div className={styles.datadiv}>
        <div className={styles.left}>
          <div className={styles.leftdiv1}>
            <div>
              <Image
                rounded={'sm'}
                alt={'product image'}
                src={data?.thumbnail}
                align={'center'}
                w={'100%'}
                h={{ base: '100%', sm: '400px', lg: '500px' }}
              />
              <div className={styles.fourimage}>
                <div>
                  <img src={data?.images[0]} alt="" />
                </div>
                <div>
                  <img src={data?.images[1]} alt="" />
                </div>
                <div>
                  <img src={data?.images[2]} alt="" />
                </div>
                <div>
                  <img src={data?.images[3]} alt="" />
                </div>
              </div>
            </div>
            

            <div className={styles.leftdiv2}>
              <Container style={{textAlign:"left"}}>
                <SimpleGrid width="970px" 
                  columns={{ base: 1, lg: 2 }}
                  spacing={{ base: 4, md: 5 }}
                  py={{ base: 4, md: 8 }}>

                  <Stack spacing={{ base: 6, md: 10 }}  marginTop="0px">
                    <Box as={'header'}>
                      <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                        ₹{data?.price}/-
                      </Heading>
                      
                    </Box>

                    <Stack
                      spacing={{ base: 4, sm: 6 }}
                      direction={'column'}
                      divider={
                        <StackDivider
                          borderColor={useColorModeValue('gray.200', 'gray.600')}
                        />
                      }>
                      <VStack spacing={{ base: 4, sm: 6 }}>
                        <Text
                          color={useColorModeValue('gray.500', 'gray.400')}
                          fontSize={'2xl'}
                          fontWeight={'300'}>
                          {data?.description}
                        </Text>
                        <Text fontSize={'lg'}>
                          {data?.disc}
                        </Text>
                      </VStack>
                      <Box>
                        <Text
                          fontSize={{ base: '16px', lg: '18px' }}
                          color={useColorModeValue('yellow.500', 'yellow.300')}
                          fontWeight={'500'}
                          textTransform={'uppercase'}
                          mb={'4'}>
                          Features
                        </Text>

                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                          <List spacing={2}>
                            <ListItem>Chronograph</ListItem>
                            <ListItem>Master Chronometer Certified</ListItem>{' '}
                            <ListItem>Tachymeter</ListItem>
                          </List>
                          <List spacing={2}>
                            <ListItem>Anti‑magnetic</ListItem>
                            <ListItem>Chronometer</ListItem>
                            <ListItem>Small seconds</ListItem>
                          </List>
                        </SimpleGrid>
                      </Box>
                      <Box>
                        <Text
                          fontSize={{ base: '16px', lg: '18px' }}
                          color={useColorModeValue('yellow.500', 'yellow.300')}
                          fontWeight={'500'}
                          textTransform={'uppercase'}
                          mb={'4'}>
                          Product Details
                        </Text>

                        <List spacing={2}>
                          <ListItem>
                            <Text as={'span'} fontWeight={'bold'}>
                              Between lugs:
                            </Text>{' '}
                            20 mm
                          </ListItem>
                          <ListItem>
                            <Text as={'span'} fontWeight={'bold'}>
                              Bracelet:
                            </Text>{' '}
                            leather strap
                          </ListItem>
                          <ListItem>
                            <Text as={'span'} fontWeight={'bold'}>
                              Case:
                            </Text>{' '}
                            Steel
                          </ListItem>
                          <ListItem>
                            <Text as={'span'} fontWeight={'bold'}>
                              Case diameter:
                            </Text>{' '}
                            42 mm
                          </ListItem>
                          <ListItem>
                            <Text as={'span'} fontWeight={'bold'}>
                              Dial color:
                            </Text>{' '}
                            Black
                          </ListItem>
                          <ListItem>
                            <Text as={'span'} fontWeight={'bold'}>
                              Crystal:
                            </Text>{' '}
                            Domed, scratch‑resistant sapphire crystal with anti‑reflective
                            treatment inside
                          </ListItem>
                          <ListItem>
                            <Text as={'span'} fontWeight={'bold'}>
                              Water resistance:
                            </Text>{' '}
                            5 bar (50 metres / 167 feet){' '}
                          </ListItem>
                        </List>
                      </Box>
                    </Stack>

                    <a href="https://www.amazon.in/dp/B082F2T5PQ?tag=kp-web-price-in-india-21&linkCode=ogi&th=1&psc=1&SubscriptionId=AKIAJZ7ZVEW7WHEFIMWA&ascsubtag=127946760&language=en_IN"> <Button

                      rounded={'none'}
                      w={'full'}
                      mt={8}
                      size={'lg'}
                      py={'7'}
                      bg="red"
                      color={useColorModeValue('white', 'gray.900')}
                      textTransform={'uppercase'}
                      _hover={{
                        transform: 'translateY(2px)',
                        boxShadow: 'lg',
                      }}>
                      Buy Now
                    </Button></a>

                    <Stack direction="row" alignItems="center" justifyContent={'center'}>
                      <MdLocalShipping />
                      <Text>2-3 business days delivery</Text>
                    </Stack>
                  </Stack>
                </SimpleGrid>
              </Container>
            </div>
          </div>
          <Card />
        </div>
        <div className={styles.right}><Rightdiv /></div>

      </div>

    </div>
    
    <Footer />

  </>
}

export default ProductDetails;