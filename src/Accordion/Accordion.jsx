import React, {useState} from "react";
import './accordion.css'
import {Data} from './Data.js'
import styled from 'styled-components'
import {IconContext} from "react-icons"
import {MdAddCircleOutline, MdRemoveCircleOutline} from "react-icons/md";



const AccordionSection = styled.div`
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
position: relative;
height:20vh;
background: white;
width:80em;
margin-left: 80px;
border-radius: 15px;
margin-top:20px;
`;
const Container = styled.div`
position: absolute;
top: 10px;
width:100%;
border-radius: 15px;
`

const Wrap = styled.div`
background: white;
color:black;
display:flex;
justify-content: space-between;
align-items: center;
width:100%
text-align:center;
cursor:pointer;

h1{
    padding: 2rem;
    font-size: 1.2rem;
    color: #06698F;
   
}

span {
    margin-right: 1.5rem;
}
`

const DropDown = styled.div`
    color: grey;
    background: white;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
justify-content: center;

p{
    font-size: 1rem;
    margin-left:30px
}

span {
    margin-top: 10px;
    margin-left: 20px;
    width: 95%;
}

`

function Accordion() {

    const[clicked, setClicked] = useState(false);
    const toggle = index => {
        if(clicked===index){
            return setClicked(null)
        }

        setClicked(index)
    }

    return(
        <div>
        <IconContext.Provider value={{color: '#06698F', size:'25px'}}>
       <AccordionSection>
        <Container>
            {Data.map((item, index)=>{
                return(
                    <>
                    <Wrap onClick={()=> toggle(index)} key={index}>
                    <h1>{item.question}</h1>
                    <span>{clicked === index? <MdRemoveCircleOutline/> : <MdAddCircleOutline/>}</span>
                    </Wrap>
                    {clicked===index? (
                        <DropDown>
                    <p>{item.answer}</p>
                    <span><hr></hr></span>
                    </DropDown>
                
                    ): null}
                    
                    </>
                )
            })}
        </Container>
       </AccordionSection>
       </IconContext.Provider>
       </div>
    )
}

export default Accordion;