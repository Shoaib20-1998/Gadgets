import { AddIcon, MinusIcon } from "@chakra-ui/icons"
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react"
import Poll from "./rangeslider"
export const Section = () => {
    return <>
    <div >
        <Accordion defaultIndex={[0]} allowMultiple allowToggle>
            <AccordionItem >
                {({ isExpanded }) => (
                    <>
                        <h2>
                            <AccordionButton _hover="rgb(255,255,255)" bg="rgb(255,255,255)">
                                <Box bg="rgb(255,255,255)" as="span" flex='1' textAlign='left'>
                                    <h1 style={{fontWeight:"bold"}}>Price Range</h1>
                                </Box>
                                {isExpanded ? (
                                    <MinusIcon fontSize='12px' />
                                ) : (
                                    <AddIcon fontSize='12px' />
                                )}
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Poll />
                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>
        </Accordion>
        </div>
    </>
}