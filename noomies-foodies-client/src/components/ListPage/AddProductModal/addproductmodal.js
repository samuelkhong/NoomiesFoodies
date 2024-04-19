import Button from '../buttons/button';
import './addproductmodal.css'
import PopularFridgeButton from './PopularFridgeButton/popularfridgebtn';
import { useState } from 'react';

function AddProductModal({props}) {

    const [itemName, setItemName] = useState("")
    const [selectedButton, setSelectedButton] = useState("Popular")

    function popButtonClick (selection){
        setSelectedButton(selection)
    }

    return ( 
        <div className="prodmodal-container">

            <div className="prodmodal-top-bar">
                <input 
                    type="text"
                    name="item-name"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    className='item-input'
                    placeholder='Enter Item Name'
                    id="item-name"
                >
                </input>
                <div className="add-item-button">
                    <Button 
                    imageUrl={"./images/list-images/plus-icon.png"}
                    onButtonClick={()=>console.log(itemName)} 
                    buttonName={"Add Item"} width={"140px"}/>
                </div>
            </div>
            
            <div className="prodmodal-button-area">
                    <PopularFridgeButton buttonName={"Popular"} 
                    backgroundColor={selectedButton === "Popular" ? "#309F48" : "#FFFFFF"}
                    fontColor={selectedButton === "Popular" ? "#FFFFFF" : "#000000"}
                    border={selectedButton === "Popular" ? "none" : "1px solid #309F48"}
                    onButtonClick={()=>popButtonClick("Popular")}
                    />
                    <PopularFridgeButton buttonName={"From My Fridge"} 
                    backgroundColor={selectedButton === "Fridge" ? "#309F48" : "#FFFFFF"}
                    fontColor={selectedButton === "Fridge" ? "#FFFFFF" : "#000000"}
                    border={selectedButton === "Fridge" ? "none" : "1px solid #309F48"}
                    onButtonClick={()=>popButtonClick("Fridge")}
                    />
            </div>

            <div className="prodmodal-content-area">
            content area
            </div>

        </div>
     );
}

export default AddProductModal;