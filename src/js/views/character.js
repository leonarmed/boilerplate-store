import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/planet.css";
import empty from "is-empty";

const urlImage = "https://starwars-visualguide.com/assets/img/characters/";
const textLorem = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`;

export const Character = props => {
	const { store, actions } = useContext(Context);
	const [character, setCharacter] = useState({})
	const params = useParams();

	const getCharacter = async () => {
		const character = await actions.request(`/people/${params.id}`)
		setCharacter(character.properties)
	}

	useEffect(() => {
		getCharacter()
	},[])
	
	return (
		<div className="jumbotron character-container">
			{!empty(character) ? <>
				<div className="container text-center">
					<div className="row">
						<div className="col image">
							<img src={`${urlImage}/${params.id}.jpg`} alt="image" />
						</div>
						<div className="col">
							<div className="text-start">
								<h1>{character.name}</h1>
								<p>{textLorem}</p>
							</div>
						</div>
					</div>
				</div>
				<hr className="mt-4 mb-2" style={{color:'red', height:'2px'}}/>
				<div className="container text-center mb-4" style={{color:'red'}}>
					<div className="row">
						<div className="col-2 justify-content-evenly">
							<div>Name</div>
							<div>{character.name}</div>
						</div>
						<div className="col-2 justify-content-evenly">
							<div>Birth</div>
							<div>{character.birth_year}</div>
						</div>
						<div className="col-2 justify-content-evenly">
							<div>Gender</div>
							<div>{character.gender}</div>
						</div>
						<div className="col-2 justify-content-evenly">
							<div>Height</div>
							<div>{character.height}</div>
						</div>
						<div className="col-2 justify-content-evenly">
							<div>Skin color</div>
							<div>{character.skin_color}</div>
						</div>
						<div className="col-2 justify-content-evenly">
							<div>Eye color</div>
							<div>{character.eye_color}</div>
						</div>
					</div>
				</div>
			</>:""}


			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Character.propTypes = {
	match: PropTypes.object
};
