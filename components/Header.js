import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import MenuBookIcon from "@mui/icons-material/MenuBook"
import { AppBar,Toolbar ,Box, Tab, Tabs} from '@mui/material'
const Header = () => {
  const router=useRouter();
  const [value, setValue] = useState();
  const handleChange=(e,val)=>{
    setValue(val);
    if(val==0){
      router.push("/")
    }else if(val==1){
      router.push("/books")
    }
  }
  return (
   <AppBar>
    <Toolbar>
      <MenuBookIcon sx={{fontSize:"26px"}}/>
<Box display="flex" margin={"auto"}>
  <Tabs onChange={handleChange} value={value} textColor='inherit'>
    <Tab label="Home"/>
    <Tab label="All Books"/>
  </Tabs>
</Box>
    </Toolbar>
   </AppBar>
  )
}

export default Header