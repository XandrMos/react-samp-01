// import React from 'react';

//Its component.
// Передача даних у компонент відбувається через обʼєкт props
const User = (props) =>{
  return (
    <ul>
      <li>Name: {props.name}</li>
      <li>Group: {props.group}</li>
    </ul>
  )
};

export default User;