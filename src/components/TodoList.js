import React from 'react'

function TodoList(props) {
  return (
    
    <li className='list-item'>
      {props.item}
      <span className='icons'>
        <i className="bi bi-trash-fill icon-delete"
          onClick={e=>{
          props.deleteItem(props.index)
        }}></i>
      </span>
    </li>
    
  )
}

export default TodoList
