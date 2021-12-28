import React,{useState} from 'react'
import styled from 'styled-components'


function Header() {
    const[burgerStatus,setBurgerStatus] = useState(false);
    return (
        <Container>
            <a>
                <img src='/images/logo.svg' />
            </a>
            <Menu>
                <p><a href='#'> MODEL-S</a></p>
                <p><a href='#'>MODEL-3 </a></p>
                <p><a href='#'>MODEL-X </a></p>
                <p><a href='#'> MODEL-Y</a></p>
                <p><a href='#'>SOLAR ROOF </a></p>
                <p><a href='#'>SOLAR PANELS </a></p>
            </Menu>
            <Rightmenu>
            <p><a href='#'>SHOP NOW </a></p>
                <p><a href='#'>ACCOUNT </a></p>
                <MenuB onClick={()=>setBurgerStatus(true)}>
                Menu
            </MenuB>
            </Rightmenu>
            <BurgerNave show ={burgerStatus}>
                <H3 onClick={()=>setBurgerStatus(false)}>X</H3>
                <li><a href='#'>Existing inventory</a></li>
                <li><a href='#'>Existing inventory</a></li>
                <li><a href='#'>Existing inventory</a></li>
                <li><a href='#'>Existing inventory</a></li>
                <li><a href='#'>Existing inventory</a></li>
                <li><a href='#'>Existing inventory</a></li>
                <li><a href='#'>Existing inventory</a></li>
                <li><a href='#'>Existing inventory</a></li>
                <li><a href='#'>Existing inventory</a></li>
                
            </BurgerNave>
           

        </Container>
    )
}

export default Header
const Container = styled.div`
min-height:60px;
justify-content: space-between;
display: flex;
position: fixed;
padding: 10px 20px;
top: 0;
left: 0;
right:0;
z-index: 1;



`
const Menu = styled.div`
display: flex;
align-items: centre;
justify-content: center;
flex: 1;
a{
    padding: 10px 20px;
    font-weight: bolder;
    flex-wrap: nowrap;
    
   
       


}
@media (max-width :768px){
    display: none;
}
    





`
const Rightmenu = styled.div`
display: flex;



a{
   
    font-weight: bolder;
    flex-wrap: nowrap;
    padding: 0px 10px;
}
    
`
const  MenuB = styled.div`
cursor: pointer;

`
const BurgerNave=styled.div`  
position:fixed;
top:0;
bottom: 0;
right:0;
background-color: white;
width: 300px;
z-index: 16;
list-style: none;
padding: 20px;
transform: ${props=> props.show ? 'translateX(0) ': 'translateX(100%)'};
transition: transform 0.2s ease-in;
li{
    padding:15px 0;
    border-bottom: 1px solid rgba(0,0,0,.2);
    font-weight: 600;
}


`
const H3 = styled.div`
cursor: pointer;
display: flex;
justify-content: flex-end;
`
