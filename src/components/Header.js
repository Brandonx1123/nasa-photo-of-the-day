import React from 'react'


function Header (props) {


    return (
        <div >
            <h1>{props.title}</h1>
            <h2>{props.date}</h2>
            <div>
            <iframe src ={props.video} width='40%' height ='500'></iframe>
            </div>
        </div>
    )
}


export default Header