import React from 'react'
import styled from 'styled-components';
import Style from 'styled-components'

const BodyDiv = styled.div `
    color:black;
    


    `

    



function Body (props){

return (
    <BodyDiv>
            <div className = 'headingTitles'>
                <h2>{props.title}</h2>
                <h3>{props.date}</h3>
            </div>
            <div>
            <img src ={props.video} width='40%' height ='500'></img>
            </div>
    </BodyDiv>

)

}

export default Body