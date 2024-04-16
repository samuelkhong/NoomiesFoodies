import Button from "./buttons/button";
import ListCard from "./ListCard/card";
import { useState } from "react";

function LisPage() {
    let background_color = "#FFFFFF"
    

    return (   
        <>
        <Button imageUrl={"./images/list-images/Vectorcheck.png"} onButtonClick={()=>null} buttonName={"Done"}/>
        <ListCard color={background_color} />
        
        </>
     );
}

export default LisPage;