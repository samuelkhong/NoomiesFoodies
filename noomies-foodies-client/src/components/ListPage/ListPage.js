import Button from "./buttons/button";
import ListCard from "./ListCard/card";
import { useState } from "react";
import Modal from "./Modal/Modal";
import ListAddModal from "./ListAddModal/ListAddModal";



function ListPage() {
    let background_color = "#FFFFFF"
    const [openAddList, setOpenAddList] = useState(false)
    const closeAddModal = () => setOpenAddList(false)

    return (   
        <>
        <Button imageUrl={"./images/list-images/Vectorcheck.png"} onButtonClick={()=>null} buttonName={"Done"}/>
        <Button imageUrl={"./images/list-images/plus-icon.png"} onButtonClick={()=>setOpenAddList(o => !o)} buttonName={"Add List"}/>
        <Modal open={openAddList} onClose={closeAddModal} children={<ListAddModal />} />
        <ListCard color={background_color} />
        <ListCard color={background_color} />
        </>
     );
}

export default ListPage;