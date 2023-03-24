import { useState } from "react";
import './UserDetails.css';

const UserDetails = props => {
  const [firstname, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const firstNameHandler = e => {
    setFirstName(e.target.value);
  }

  const lastNameHandler = e => {
    setLastName(e.target.value);
  }

  const submitHandler = e => {
    e.preventDefault();
    props.submitHandler(firstname, lastName);
  }

  return (
    <form onSubmit={submitHandler}>
      <label> First Name : </label>
      <input type={'text'} id='fName' name='fName' minLength={3} placeholder='Enter First Name..' onBlur={firstNameHandler} required></input>
      <br />
      <label> Last Name : </label>
      <input type={'text'} id='lName' name='lName' minLength={3} placeholder='Enter Last Name..' onBlur={lastNameHandler} required></input>
      <br />
      <input type={'submit'} value='Submit' />
    </form>
  )
}

export default UserDetails;