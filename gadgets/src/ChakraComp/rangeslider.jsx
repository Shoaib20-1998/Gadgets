import { Stack } from "@chakra-ui/react"
import { RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from "@chakra-ui/slider"
import { Input } from "antd"

const Poll = () => {

    return <>
        <RangeSlider
            aria-label={['min', 'max']}
            colorScheme='red'
            defaultValue={[10, 30]}
        >
            <RangeSliderTrack>
                <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
        </RangeSlider>
        <label htmlFor="">From</label>
        <Input placeholder="15000" htmlSize={4} width='auto' />
        <label htmlFor="">To</label>

        <Input placeholder="1000" htmlSize={4} width='auto' />
        <button style={{ backgroundColor: "red", marginTop: "7px", padding: "5px 50px", borderRadius: "5px 15px", color: "white" }}>GO</button>
    </>
}
export default Poll