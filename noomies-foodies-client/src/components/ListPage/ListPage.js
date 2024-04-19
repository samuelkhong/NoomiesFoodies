import Button from "./buttons/button";
import ListCard from "./ListCard/card";
import { useState } from "react";
import Modal from "./Modal/Modal";
import ListAddModal from "./ListAddModal/ListAddModal";
import AddProductModal from "./AddProductModal/addproductmodal";



function ListPage() {



    let background_color = "#FFFFFF"
    const [openAddList, setOpenAddList] = useState(false)
    const closeAddModal = () => setOpenAddList(false)

    const [openProdModal, setOpenProdModal] = useState(false)
    const closeProdModal = () => setOpenProdModal(false)


    return (   
        <>
        <div className="list-page-container">
            <div className="list-add-btn-area">
                <Button imageUrl={"./images/list-images/plus-icon.png"} onButtonClick={()=>setOpenAddList(o => !o)} buttonName={"Add List"}/>
                <Modal open={openAddList} onClose={closeAddModal} children={<ListAddModal />} />
            </div>
            <div className="list-header-area">
                My Lists
            </div>
            <div className="list-content-area">
                <ListCard color={background_color} />
                <ListCard color={background_color} />
            </div>
        </div>
        
        <Button imageUrl={"./images/list-images/plus-icon.png"} onButtonClick={()=>setOpenProdModal(o => !o)} buttonName={"Add Product"} width={"193px"}/>

        <Modal open={openAddList} onClose={closeAddModal} children={<ListAddModal />} />
        <Modal open={openProdModal} onClose={closeProdModal} children={<AddProductModal />} />

        
        </>
     );
}

export default ListPage;