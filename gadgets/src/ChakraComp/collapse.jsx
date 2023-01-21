import { Button, Collapse } from "@chakra-ui/react";
import { useState } from "react";

function MobilePhones() {
    const [show, setShow] = useState(false);
  
    const handleToggle = () => setShow(!show);
    
  
    return (
      <>
        <Collapse startingHeight={200} >
          
            <h1 style={{fontSize:"40px",padding:"10px"}}>Mobile Phones</h1>
        The Gadgets 360 mobile phone finder helps you find the smartphone you're looking for - thanks to the many filters we've provided to refine your search. With this tool, you'll be able to find the best mobile phone for your needs, across all major mobile phone brands. Thus, if you're in the market to buy a mobile phone, and unsure which model to spend your hard-earned money on, just choose from filters like price, RAM, clock speed, 5G connectivity, and more, to home in on device best suited to your needs. Gadgets 360 has one of the largest mobile phone databases in the world, and don't forget, apart from our helpful phone finder, you can also compare mobile phones to help you make your buying decision.
        </Collapse>
        {/* <Button bg="red" color="white"size="sm" onClick={handleToggle} mt=".5rem">
          Show {show ? "Less" : "More"}
        </Button> isOpen={show}   */}
      </>
    );
  }

  //   const [show, setShow] = useState(false);
  
  //   const handleToggle = () => setShow(!show);
  
  //   return (
  //     <>
  //       <Collapse  style={{height:"auto"}} startingHeight={200} isOpen={true}>
  //         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
  //         terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
  //         labore wes anderson cred nesciunt sapiente ea proident.
  //       </Collapse>
  //       <Button size="sm" onClick={handleToggle} mt="1rem">
  //         Show {show ? "Less" : "More"}
  //       </Button>
  //     </>
  //   );
  // }

  export default MobilePhones;