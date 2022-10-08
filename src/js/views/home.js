import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard/index.jsx";
import { PlanetCard } from "../component/PlanetsCard/index.jsx";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context)
	const [ characters, setCharacters ] = useState([])
	const [ planets, setPlanets ] = useState([])

	useEffect(() => {
		getCharacters()
		getPlanets()
	},[])

	const getCharacters = async () => {
		const characters = await actions.request("/people")
		setCharacters(characters)
	}

	const getPlanets = async () => {
		const planets = await actions.request("/planets")
		setPlanets(planets)
	}

	return(
		<div className="text-center mt-5">
			<CharacterCard characters={characters} />
			<PlanetCard planets={planets} />
		</div>
	)
};
