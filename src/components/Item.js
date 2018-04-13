import React from 'react';
// Item is a stateless component that receives
// props from the parent component.
const Item = ({items}) =>{
    return (
        <ul>
        {items.map(function(user, index){
            return <li key={user.id}>{user.first_name}<br/>
                        <img src={user.avatar} alt={user.first_name}/>
                  </li>;
          })}
        </ul>
    );
}


export default Item;