import styled from 'styled-components'

export const StyledAccordion = styled.div`
	.containerAccordion {
		margin-top: 3em;
		color: black;
	}
	.weatherDetail {
		display: flex;
		justify-content: space-evenly;
		align-items: start;
		box-shadow: 0px 15px 20px -19px rgba(0, 0, 0, 0.8);
		padding: 20px 15px;
		margin: 0 auto;
		background-color: deeppink;
		width: 100%;
	}

	.accordion,
	.containerAccordion {
		min-width: 40vw;
		cursor: pointer;
		display: flex;
		justify-content: space-evenly;
		border-bottom: 2px solid blue;
		padding: 20px 15px;
		align-items: center;
		color: white;
	}

	.accordion.active {
		background-color: white;
		color: black;
	}

	.accordion:hover {
		transition: all 0.2s ease-in-out;
		background-color: white;
		color: black;
	}

	.accordion.collapsed {
		display: flex;
		opacity: 0;
		max-height: 0;
		overflow-y: hidden;
		transition: all 0.4s ease;
		padding: 0;
	}

	.grid-item {
		text-align: center;
		padding: 5px;
		font-size: 14px;
	}

	.weatherIcon {
		width: 4em;
	}

	.iconDropDown {
		transition: all 0.2s ease-in-out;
		font-size: 1.8rem;
		color: #ffff;
	}

	.iconDropDown:hover {
		transform: scale(1.7);
		color: #ffff;
	}
`
