import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
display:flex;
font-size: .8rem;
justify-content:center;
width:100%;

p{
border: 1px solid black;
width: 50%;

}

`



function NasaFooter (){

    return(
        <FooterDiv>
        <p>Visit: <a href ="https://nasa.gov/" target='blank'>https://nasa.gov/</a> for more information. </p>
        </FooterDiv>
    )
}
export default NasaFooter;