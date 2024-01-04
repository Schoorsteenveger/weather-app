import styled from 'styled-components';

const StyledWeatherCard = styled.div`
.cardView {
    display: flex;
    justify-content:center;
    flex-direction: column;
    align-self: end;
    min-height: auto;
    max-width: 768px;
    margin: 3em 0;
    box-shadow: 0px 13px 40px -13px rgba(0,0,0,0.75);
    padding: 1.5rem 1.8rem;
    background-color:blue;
    background-size: cover;
    position: relative;
}

.displayDataResult {
    background-color: #3968dc45;
    box-shadow: 0px 13px 40px -13px rgba(0,0,0,0.8);
    padding: 65px 30px;
    color:white;
    display: flex;
    justify-content:center;
    flex-direction:column;
    align-items: stretch;
    text-transform: uppercase;
    font-weight: bold;
    height: auto;
}

img.weatherIcon {
    width: 150px;
}

.header {
    flex-direction: column;
    text-align: center;
    border: transparent;
    background-color: rgba(0,0,0,0.4);
    color: white;
    padding: 2rem 3rem;

  h2 {
    font-weight: 600;
    color: white;
  }
}

.containerIconArrow{
    background-color: #f2f2f2;
    color: black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.containerIconArrow:hover {
    background-color: greenyellow;
    cursor: pointer;
    transition: ease-in 1ms;
}


`
export default StyledWeatherCard