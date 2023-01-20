
import { SearchIcon } from '@chakra-ui/icons'
import { IconButton, Input, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { useState } from 'react'
export const Searchbtn=()=>{
        
   return <>
   <Input margin="10px" width="90%" size="md" placeholder='Search mobile phone' />
   <IconButton bg="#F2F2F2" size="sm" aria-label='Search database' icon={<SearchIcon />} />
   </>
}