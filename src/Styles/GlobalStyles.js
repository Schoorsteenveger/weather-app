import { createGlobalStyle } from 'styled-components'
import myImage from '../../src/Assets/weatherbg.jpg'
import myImage2 from '../../src/Assets/weatherbg1.jpg'

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,400;1,100&display=swap');

* {
    box-sizing:border-box;
    margin:0;
    padding:0;
}

body {
    display:flex;
    justify-content:center;
    background-color: green;
    background:url(${myImage2});
    background-size: cover;
    background-repeat: no-repeat;
    font-family: 'Lato', sans-serif;
    font-size:16px;
    margin-bottom: 100px;
    max-width: 100%;
    overflow-x: hidden;
}

.DefaultInput[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  display: none !important;
}

@media(min-width: 768px) {
    height: 100%;
    background-color: greenyellow;
    }

p {
    line-height: 1.8;
}
img {
    width: 100%;
}
.App {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
}
.cardView {
    min-width: 350px;
    box-shadow: 0px 13px 40px -13px rgba(0,0,0,0.75);
    padding: 25px 30px;
    border-radius: 3px;
    background-image: url(${myImage});
    background-color:blue;
    background-size: cover;
    position: relative;
}

.displayDataResult {
    background-color: #3968dc45;
    box-shadow: 0px 13px 40px -13px rgba(0,0,0,0.8);
    padding: 65px 30px;
    color:white;
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

.containerAccordion {
    margin-top: 3em;
	color:white;
}

.getWeeklyDetails{
    border-radius: 8px;
    padding:0.5rem 0.8rem;
    background-color: #f2f2f2;
    color: black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 1.2rem;
    transition: scale cubic-bezier(0.075, 0.82, 0.165, 1);
}

.getWeeklyDetails:hover {
    background-color: greenyellow;
    cursor: pointer;
    transform: ease-in 1ms;
}
.iconArrowBtn {
    margin-left:1.125rem;
}
`
export default GlobalStyles
