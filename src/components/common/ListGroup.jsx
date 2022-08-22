import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';


 const ListGroup =({
    items,
    textPorperty,
    valueProperty,
    selectedItem,
    onItemSelect
}) =>{
    return (
        <div>
            <ListGroup>
                {items.map(item =>{
                    <ListGroup.Item 
                    onClick={()=> onItemSelect(item)}
                    key={item[valueProperty]}
                    className={
                        item=== selectedItem ? "active": ""
                    }
                    >
                        {item[textPorperty]}
                    </ListGroup.Item>
                })}
            </ListGroup>
        </div>
    );
}

ListGroup.defaultProps = {
    textPorperty :"name",
    valueProperty :""
}

export default ListGroup;