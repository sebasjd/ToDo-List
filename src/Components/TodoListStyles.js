
import React from "react";
import styled from "styled-components";

export const TodoContainerStyled = styled.div`
display: grid;
grid-template-rows: 15% auto;
width: 500px;
height:auto;
border-radius: 30px;
border: 3px solid #AB0000;
background: #181818;
padding: 25px;
`

export const InputStyled = styled.input`
width: 70%;
height: 2rem;
border: 3px solid #AB0000;
background: #181818;
border-radius: 10px;
color: red;
padding-left: 2rem;
::placeholder{color:red}
`

export const ButtonStyled = styled.button`
height: 2rem;
width: 25%;
border: 3px solid #AB0000;
background: #181818;
border-radius: 10px;
color: red
`
