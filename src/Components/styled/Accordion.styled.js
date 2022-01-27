import styled from "styled-components";

export const StyledAccordion = styled.div`

.weatherDetail, .accordion {
    display: flex;
    justify-content: space-evenly;
    border-bottom: 5px solid blue;
    align-items: center;
    box-shadow: 0px 15px 20px -19px rgba(0,0,0,0.8);
    padding: 6px;
    margin: 0 auto;
    background-color: rgba(230,280,0,0.4);
    max-width: 320px;
}

.accordion {
    cursor: pointer;
    padding:1px 5px;
}

.accordion.active {
    background-color: blue;
}

.accordion:hover {
    background-color: pink;
    transition: all .2s ease-in-out; 
}

/* .accordionExpand {
    display: flex;
    background-color: white;
    align-items: center;
    font-size: 14px;
    
    
} */

.accordion.collapsed  {
    display:flex;
    opacity: 0;
    max-height: 0;
    overflow-y: hidden;
    transition: all 0.4s ease;
    padding: 0 20px;
}

.grid-item {
  background-color: transparent;
  text-align: center;
  padding: 5px 0;
  
}

.weatherIcon {
    width: 4em;
}

.containerIconArrow{
    background-color: #f2f2f2;
    color: black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 10px;
}

.iconDropDown {
    transition: all .2s ease-in-out; 
    font-size: 25px;
}

.iconDropDown:hover {
    transform: scale(1.7); 
}

.containerIconArrow:hover {
    background-color: greenyellow;
    cursor: pointer;
    
    
}

/* .dailyItems {
    display: flex;
    flex-direction:column;
} */


`