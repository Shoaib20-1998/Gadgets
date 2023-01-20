
const Pagination =({current,onChange,totalpage})=>{

    let arr = new Array(totalpage).fill(0)
   
    return<>

    {arr.map((item, index)=>{
        return <button style={{
            borderColor:current==index+1&&"red"
        }}
        onClick={()=>{onChange(index+1)}}
        
        >{index+1}</button>
    })}
    </>


}

export default Pagination