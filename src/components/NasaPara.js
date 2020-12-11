import React from 'react'
import styled, {keyframes} from 'styled-components'

const ParaDiv = styled.div`
color: red;
font-family: 'roboto', sans-serif;
font-size: 1.8;
display: flex;
justify-content:center;
align-items:center;
width: 100%;


p{
    border: 1px solid black;
    text-align: center;
    display:flex;
    width: 50%;
  
    
}

`;

function NasaPara (props){
    return (
    <ParaDiv>
        <p> {props.explanation}</p>
    </ParaDiv>
    )
}


export default NasaPara;