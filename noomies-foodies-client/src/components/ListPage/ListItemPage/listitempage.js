import { useParams } from "react-router-dom";
import '../ListPage.css'
import ListCard from "../ListCard/card";
import Button from "../buttons/button";
import AddProductModal from "../AddProductModal/addproductmodal";
import Modal from "../Modal/Modal";
import { useState } from "react";

function ListItemPage({listId, listName, onAddClick}) {

    let listItems = [{ list_id:1, item: "milk"}, { list_id:2, item:"butter"}, {list_id:3, item:"bread"}]

    const [openProdModal, setOpenProdModal] = useState(false)
    const closeProdModal = () => setOpenProdModal(false)
    
    return (
        <>
            <div className="list-add-btn-area">
                <Button imageUrl={"./images/list-images/plus-icon.png"} onButtonClick={()=>setOpenProdModal(o => !o)} buttonName={"Add Product"} width={"193px"}/>
                <Modal open={openProdModal} onClose={closeProdModal} children={<AddProductModal />} />
            </div>
            <div className="list-header-area">
                {listName}
            </div>
            <div className="list-content-area">
                {listItems.filter( i => listId === i.list_id).map((obj) => <ListCard key={obj.item} listName={obj.item}/>)}
                
            </div>
        
        </>
      );
}

export default ListItemPage;