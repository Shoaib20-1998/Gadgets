import { AddIcon, MinusIcon } from "@chakra-ui/icons"
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Stack } from "@chakra-ui/react"
import Poll from "./rangeslider"
import styles from '../css/product.module.css'
import { Checkbox } from "antd"

export const SortbyBrand = ({ onChange }) => {
    return <>
        <Accordion defaultIndex={[0]} allowMultiple allowToggle>
            <AccordionItem >
                {({ isExpanded }) => (
                    <>
                        <h2>
                            <AccordionButton _hover="rgb(255,255,255)" bg="rgb(255,255,255)">
                                <Box bg="rgb(255,255,255)" as="span" flex='1' textAlign='left'>
                                    <h1 style={{ fontWeight: "bold" }}>Sort by Brand</h1>
                                </Box>
                                {isExpanded ? (
                                    <MinusIcon fontSize='12px' />
                                ) : (
                                    <AddIcon fontSize='12px' />
                                )}
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Checkbox size='lg' colorScheme='orange'><h1 style={{Color:"red",fontFamily:"sans-serif",margin:"5px",padding:"5px",fontSize:"medium"}}>Samsung Brand Mobile Phones</h1></Checkbox><br />
                            <Checkbox onChange={(e) => { onChange([e.target.checked, "Apple"]) }}><h1 style={{Color:"red",fontFamily:"sans-serif",margin:"5px",padding:"5px",fontSize:"medium"}}>Apple Brand Mobile Phones</h1></Checkbox><br />
                            <Checkbox> <h1 style={{Color:"red",fontFamily:"sans-serif",margin:"5px",padding:"5px",fontSize:"medium"}}> Oppo Brand Mobile Phones        </h1> </Checkbox><br />
                            <Checkbox> <h1 style={{Color:"red",fontFamily:"sans-serif",margin:"5px",padding:"5px",fontSize:"medium"}}> Redmi Brand Mobile Phones       </h1> </Checkbox><br />
                            <Checkbox> <h1 style={{Color:"red",fontFamily:"sans-serif",margin:"5px",padding:"5px",fontSize:"medium"}}> Realme Brand Mobile Phones      </h1> </Checkbox><br />
                            <Checkbox> <h1 style={{Color:"red",fontFamily:"sans-serif",margin:"5px",padding:"5px",fontSize:"medium"}}> Xiaomi Brand Mobile Phones      </h1> </Checkbox><br />
                            <Checkbox> <h1 style={{Color:"red",fontFamily:"sans-serif",margin:"5px",padding:"5px",fontSize:"medium"}}> Huawei Brand Mobile Phones      </h1> </Checkbox><br />
                            <Checkbox> <h1 style={{Color:"red",fontFamily:"sans-serif",margin:"5px",padding:"5px",fontSize:"medium"}}> Motorola G Brand Mobile Phones  </h1> </Checkbox><br />
                            <Checkbox> <h1 style={{Color:"red",fontFamily:"sans-serif",margin:"5px",padding:"5px",fontSize:"medium"}}> HP Pavillion Brand Mobile Phones</h1> </Checkbox><br />
                            <Checkbox> <h1 style={{Color:"red",fontFamily:"sans-serif",margin:"5px",padding:"5px",fontSize:"medium"}}> Infinix Brand Mobile Phones     </h1> </Checkbox><br />
                            <Checkbox> <h1 style={{Color:"red",fontFamily:"sans-serif",margin:"5px",padding:"5px",fontSize:"medium"}}> iQOO G Brand Mobile Phones      </h1> </Checkbox><br />
                            <Checkbox> <h1 style={{Color:"red",fontFamily:"sans-serif",margin:"5px",padding:"5px",fontSize:"medium"}}> Vivo Brand Mobile Phones        </h1> </Checkbox><br />
                            <Checkbox> <h1 style={{Color:"red",fontFamily:"sans-serif",margin:"5px",padding:"5px",fontSize:"medium"}}> Poco Brand Mobile Phones        </h1> </Checkbox><br />





                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>
        </Accordion>
    </>
}