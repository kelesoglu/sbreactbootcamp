import React from "react";
import ListGroups from 'react-bootstrap/ListGroup';


 const ListGroup =({
    items,
    textPorperty,
    valueProperty,
    selectedItem,
    onItemSelect
}) =>{
    return (
        <div>
            <ListGroups>
                {items.map(item =>{
                    <ListGroups.Item 
                    onClick={()=> onItemSelect(item)}
                    key={item[valueProperty]}
                    className={
                        item=== selectedItem ? "active": ""
                    }
                    >
                        {item[textPorperty]}
                    </ListGroups.Item>
                })}
            </ListGroups>
        </div>
    );
};

ListGroup.defaultProps = {
    textPorperty :"name",
    valueProperty :"id"
}

export default ListGroup;