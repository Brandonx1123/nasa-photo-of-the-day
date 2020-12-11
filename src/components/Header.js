import React from 'react'
import styled, {keyframes} from 'styled-components'

const HeaderDiv = styled.div `
color: white;
background:black;
margin: 0 auto;
`


function Header (props) {


    return (
        <div >
            <HeaderDiv>
                <h1>NASA PHOTO OF THE DAY</h1>
            </HeaderDiv>
            </div>
    )
}


export default Header