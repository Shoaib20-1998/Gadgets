
const Pagination =({current,onChange,totalpage})=>{

    let arr = new Array(totalpage).fill(0)
   
    return<>
<button onClick={()=>{onChange(-1)}}>Prev</button>
    {arr.map((item, index)=>{
        return <>
        
        <button style={{
            border:"1px solid black",
            backgroundColor:current==index+1&&"black"
        }}
        onClick={()=>{onChange(index+1)}}
        
        >{index+1}</button>
       

        </>
    })}
     <button>Next</button>
    </>


}

export default Pagination