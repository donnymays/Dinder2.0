import React from 'react'
import styled from 'styled-components'

const UserForm = props => {
  return(
  <Container>
    <label htmlFor="firstName">First Name</label>
    <input name="firstName" type="text" />
    <br />
    <label htmlFor="lastName">Last Name</label>
    <input name="lastName" type="text" />
    <br />
    <label htmlFor="username">Username</label>
    <input name="username" type="text" />
    <br />
    <label htmlFor="city">Where are you from?</label>
    <input name="city" type="text" />
    <br />
    <label htmlFor="email">Email</label>
    <input name="email" type="text" />
    <br />
    <label htmlFor="password">password</label>
    <input name="password" type="password" />
    <br />
    <button type="submit">Submit</button>
  </Container>
  )
}

export default UserForm;

const Container = styled.div`
  /* margin: 50px; */
  display: flex;
  flex-wrap: wrap;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  label {
    width: 100px;
    margin-bottom: 15px;
  }
  input {
    width: 50%
  }
`;

