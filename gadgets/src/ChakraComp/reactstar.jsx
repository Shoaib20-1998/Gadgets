import React, { useState } from 'react';
import { Rate } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const StarUzair= () => {
  const [value, setValue] = useState(3);

  return (
    <span>
      <Rate style={{color:"red"}} tooltips={desc} onChange={setValue} value={value} />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
    </span>
  );
};

export default StarUzair;