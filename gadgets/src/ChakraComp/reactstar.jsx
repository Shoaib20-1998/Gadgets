import React, { useState } from 'react';
import { Rate } from 'antd';
import { color } from '@chakra-ui/react';
import styles from '../css/Productdetails.module.css'

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const StarUzair = () => {
  const [value, setValue] = useState(0);
  console.log(value)


  return (
    <>

      <div style={{display:"flex"}}>
        <div style={{width:"50%"}}>
          <Rate style={{ color: "red" }} tooltips={desc} onChange={setValue} value={value} />
          {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}<br />
        

        </div>

        


      </div>

    </>
  );
};

export default StarUzair;