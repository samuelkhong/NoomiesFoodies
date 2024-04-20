import Button from "./buttons/button";
import ListCard from "./ListCard/card";
import { useState } from "react";
import Modal from "./Modal/Modal";
import ListAddModal from "./ListAddModal/ListAddModal";
import AddProductModal from "./AddProductModal/addproductmodal";
import './ListPage.css'
import ListItemPage from "./ListItemPage/listitempage";


function ListPage() {

    const lists = [
        {id: 1,
        name: "To buy Later",
        color: "#FFFFFF"},
        {id: 2,
        name: "Party for sam",
        color: "#E6C91E"},
        {id: 3,
        name: "Party for DSD",
        color: "#FC9297"},
        {id: 4,
        name: "Party for andrew",
        color: "#5B4217"}
    ]

    const [myLists, setMyLists] = useState(lists)


    const [openAddList, setOpenAddList] = useState(false)
    const closeAddModal = () => setOpenAddList(false)

    const [openProdModal, setOpenProdModal] = useState(false)
    const closeProdModal = () => setOpenProdModal(false)


    const updateLists = (list) => {
        setMyLists(l => [...l, list])
    }

    const [page, setPage] = useState(true)
    const [addItemList, setAddItemList] = useState()
    const updateSetPage = (listId, listName) =>{
        setAddItemList({id: listId, name: listName})
        setPage(p => !p)
    }





    return (   
        <div className="list-page-container">
        { page &&
        
        <>
            <div className="list-add-btn-area">
                <Button imageUrl={"./images/list-images/plus-icon.png"} onButtonClick={()=>setOpenAddList(o => !o)} buttonName={"Add List"}/>
                <Modal open={openAddList} onClose={closeAddModal} children={<ListAddModal updateLists={updateLists} onCloseModal={closeAddModal}/>} />
            </div>
            <div className="list-header-area">
                My Lists
            </div>
            <div className="list-content-area">
                {myLists.map( (list) => <ListCard key={list.id} color={list.color} listId={list.id} listName={list.name} 
                                            setLists={setMyLists} onEditClick={()=>updateSetPage(list.id, list.name)} editText={"View / Edit List"}
                                            onDeleteClick={()=>console.log(`Delete ${list.id}`)}/>)}
            </div>
        </>
        }
        
        {!page &&
        <>
            
            <ListItemPage listId={addItemList.id} listName={addItemList.name} />
            
        </>
        }
        </div>
     );
}

export default ListPage;