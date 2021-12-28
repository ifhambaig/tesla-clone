import React from 'react'
import Styled from 'styled-components';
import  Section  from './Section';
  
const Home = () => {
    return (
        <div>
            <Container>
                <Section 
                tittle="Model-s"
                description="Order Online for Touchless Delivery"
                background="model-s.jpg"
                upBtnText="CUSTOM ORDER"
                dwBtnText="EXISTING INVENTORY"/>
                <Section
                tittle="Model-Y"
                description="Order Online for Touchless Delivery"
                background="model-y.jpg"
                upBtnText="CUSTOM ORDER"
                dwBtnText="EXISTING INVENTORY"/>
                <Section tittle="Model-3"
                description="Order Online for Touchless Delivery"
                background="model-3.jpg"
                upBtnText="CUSTOM ORDER"
                dwBtnText="EXISTING INVENTORY"/>
                <Section tittle="MODEL-X"
                description="Order Online for Touchless Delivery"
                background="model-x.jpg"
                upBtnText="CUSTOM ORDER"
                dwBtnText="EXISTING INVENTORY"/>
                <Section tittle="SOLAR PANEL"
                description="Lowest Cost Solar Panels in America"
                background="solar-panel.jpg"
                upBtnText="ORDER NOW"
                dwBtnText="LEARN MORE"
                />
                <Section
                tittle="SOLAR ROOF"
                description="Produce Clean Energy From Your Roof"
                background="solar-roof.jpg"
                upBtnText="ORDER NOW"
                dwBtnText="LEARN MORE"/>
                <Section tittle="ACCESSORIES"
                
                background="accessories.jpg"
                upBtnText="ORDER NOW"
                />
                
            </Container>
        </div>
    )
}
export default Home
const Container = Styled.div`


`

