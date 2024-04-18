import Button from "../buttons/button";
import ColorSelector from "./ColorSelector/colorselector";
import './ListAddModal.css'
import { useState } from "react";

function ListAddModal({value, onTextChange}) {

    const [border, setBorder] = useState({})
    const [selectedColor, setSelectedColor] = useState()
    const [selectedName, setSelectedName] = useState('')

    function onColorClick(id, color) {
        setBorder({[id]: true})
        setSelectedColor(color)
    }


    let colors = ["#F43B6C", "#E6C91E", "#FC9297",
         "#9747FF", "#83CFAD", "#5B4217",
         "#AACC1E", "#F2A666"
        ]

    let textString = selectedColor

    return (

    <>
    <div className="list-add-modal-content">
        <div className="add-list-header"> Add a New List</div>
        
        <div className="add-list-input">
            <input 
                type="text"
                name="list-name"
                value={selectedName}
                onChange={(e) => setSelectedName(e.target.value)}
                className='list-input'
                placeholder='Enter List Name'
                id="list-name"
            >
            </input>
            <div><hr className="horizontal-line"/></div>
        </div>

        

        <div className="add-list-color">

            <div className="add-list-color-header">Color</div>
            <div className="add-list-color-selector">
            {colors.map((color, index) => 
                <ColorSelector key={index} theColor={color} onSelectorClick={() => onColorClick(index, color)} selectBorder={border[index]} />
            )}
            </div>

        </div>

        
        <div className="done-button">
            <Button 
            imageUrl={"./images/list-images/Vectorcheck.png"} 
            onButtonClick={()=> console.log(textString)} 
            buttonName={"Done"}
            />
        </div>
    </div>

    </>  
    );

}

export default ListAddModal;