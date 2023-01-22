import React, { useState } from 'react';
import { Rate } from 'antd';
import { color } from '@chakra-ui/react';
import styles from '../css/Productdetails.module.css'

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const StarUzair2 = () => {

    const [value, setValue] = useState(0);
    const [value1, setvalue1] = useState(null)

    const Handleclick = () => {
        if (value == 1) {
            setvalue1(1)
        } else if (value == 2) {
            setvalue1(2)
        } else if (value == 3) {
            setvalue1(3)
        } else if (value == 4) {
            setvalue1(4)
        } else if (value == 4) {
            setvalue1(4)
        } else if (value == 5) {
            setvalue1(5)
        }
    }

    console.log(value1)

    return (
        <>

            <div className={styles.reviewsmain}>
                <div style={{ width: "50%" }}>
                    <Rate style={{ color: "red" }} tooltips={desc} onChange={setValue} value={value} />
                    {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}<br />
                    <button onClick={Handleclick}> Send your feedback</button>

                </div>

                <div className={styles.reviews}>

                    {
                        value1 == 5 ? 
                        <img src="https://media2.giphy.com/media/hecfjRaqmSmQvoWNlh/giphy.gif?cid=ecf05e47ybg13lnj3l1h4gs1di5bnlul1l7kifpgump45wk3&rid=giphy.gif&ct=s" alt="" />
                            :value1 == 4 ?
                            <img src="https://media2.giphy.com/media/ZxENSuCYwPDB3ambof/giphy.gif?cid=ecf05e47amdgom9ft0kr1he19p7fmm7uqo4ambwqr07kzplj&rid=giphy.gif&ct=s" alt="" />
                                : value1 == 3 ?  
                                <img src="https://media2.giphy.com/media/5ueQw7S7RBVgo2qbZc/giphy.gif?cid=ecf05e47nztn4v2qlq0rytzfc8hrivn4k9lmvl6oowkxr6hw&rid=giphy.gif&ct=s" alt="" />
                                    : value1 == 2 ? <img src="https://media3.giphy.com/media/ALQu9JaMQEA2DBVjZD/giphy.gif?cid=ecf05e47d65vukkpq7cr1x8yxini2uhkcaxux4lt9znaqfit&rid=giphy.gif&ct=s" alt="" />
                                        : value1 == 1 ? <img src="https://media3.giphy.com/media/LujzXuZsuWXF4gCAgE/giphy.gif?cid=ecf05e47vc8pib2ccmgy860pd7660yggr5cxrg276lf5xat3&rid=giphy.gif&ct=s" alt="" /> 
                                          : <img src="https://media3.giphy.com/media/dDpnRSz3wEMzUApI0a/giphy.gif?cid=ecf05e47xjt8sp6xlbe9839xcfihg90cnns3998u3nkxx4qz&rid=giphy.gif&ct=s" alt="" /> 
                    }
                    
                    

                </div>


            </div>

        </>
    );
};

export default StarUzair2;