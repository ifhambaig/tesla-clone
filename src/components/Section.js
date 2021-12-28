import React from 'react'
import styled from 'styled-components'

 const Section = ({tittle,description,background,upBtnText,dwBtnText}) => {
    return (
        <Wrap bgImage={background} >
            <ItemText>
                <h1> {  tittle } </h1>
                <p>{description}</p>
            </ItemText>
           <Button>
           <ButtonGroup>
                <UpButton>
                   {upBtnText}
                    
                </UpButton>
                { dwBtnText  && <DownButton>
                   {dwBtnText}
                </DownButton> }
                
            </ButtonGroup>
            <DownArrow src='/images/down-arrow.svg '  />
           </Button>
        </Wrap>
    )
}
export default Section 
const Wrap = styled.div`
padding:0;
width: 100vw;
height:100vh;
background-size: cover;
background-position:center;
background-image: ${props=> `url("/images/${props.bgImage}")`} ;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`
const ItemText = styled.div`
padding-top:15vh;
text-align:center;

`
const ButtonGroup= styled.div`
display: flex;
padding-bottom: 30px;

`;
const UpButton=styled.div`
background-color: rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
cursor: pointer;
opacity: 0.85;
font-size: 15px;
margin-left: 10px;

 `

const DownButton=styled(UpButton)`
 background-color: white;
 opacity:0.65;
 color:black;
 font-weight: bold;
`;
const DownArrow=styled.img`
margin-top:20px;
height: 40px;
padding-left:253px;
animation: animateDown infinite 1.5s;
  `
  const Button = styled.div`
  `

