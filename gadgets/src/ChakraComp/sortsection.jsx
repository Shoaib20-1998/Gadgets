import { AddIcon, MinusIcon } from "@chakra-ui/icons"
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react"
import Poll from "./rangeslider"
import styles from '../css/product.module.css'

export const SortSection = ({ asc, desc, value }) => {
    return <>
        <Accordion defaultIndex={[0]} allowMultiple allowToggle>
            <AccordionItem >
                {({ isExpanded }) => (
                    <>
                        <h2>
                            <AccordionButton _hover="rgb(255,255,255)" bg="rgb(255,255,255)">
                                <Box bg="rgb(255,255,255)" as="span" flex='1' textAlign='left'>
                                    <h1 style={{fontWeight:"bold"}}>{value}</h1>
                                </Box>
                                {isExpanded ? (
                                    <MinusIcon fontSize='12px' />
                                ) : (
                                    <AddIcon fontSize='12px' />
                                )}
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <div className={styles.sortorder}>
                                <button onClick={asc}>Ascending - {value}</button> <br />
                                <button onClick={desc}>Descending - {value}</button>
                            </div>


                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>
        </Accordion>
    </>
}