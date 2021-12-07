import styled from "styled-components"

const Container = styled.div`

.titulo {

display: flex;
flex-direction: row;
padding-left: 560px;
font-size: 26px;
font-family: italic;
}

.subtitulo {
padding-left: 600px; 
padding-top: 1vh;
font-size: 17px;
font-family: italic;
}

.subtitulo button {
margin-left: 15px;
border: solid 1px black;
box-shadow: 0px 2px 3px 0px #888;
cursor: pointer;
}

.lista {
padding-left: 20px;
font-size: 26px;
font-family: italic;
}

.lista button {
margin-left: 15px;
border: solid 1px black;
box-shadow: 0px 2px 3px 0px #888;
cursor: pointer;
}

input {
background-color: black
}

`

export { Container }