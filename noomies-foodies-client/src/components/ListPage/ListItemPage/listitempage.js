import { useParams } from "react-router-dom";

function ListItemPage({lists}) {
    const {list_id} = useParams()
    return (
        <div>
            The list id 
            {list_id}
        </div>
      );
}

export default ListItemPage;