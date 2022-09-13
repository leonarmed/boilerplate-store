import React from 'react'
import { Link } from 'react-router-dom'
import { SpinnerComponent } from '../Spinner/index.jsx'
const urlImage = "https://starwars-visualguide.com/assets/img/characters/"

export const CharacterCard = ({characters}) => {
    return (
        <div className="container-fluid mb-4" style={{maxWidth: '80%'}}>
            <h3 className="text-start" style={{color:'red'}}>Characters</h3>
            <div className="overflow-auto">
                <div className="mt-5 d-flex" style={{width:'2500px'}}>
                    {
                        characters ? (
                            characters.map((character) => {
                                return(
                                    <div key={character.uid} className="card mb-3 me-4" style={{minWidth: "300px"}}>
                                        <img src={`${urlImage}/${character.uid}.jpg`} className="card-img-top" alt={`imagen de ${character.name}`} style={{minHeight:'300px'}}/>
                                        <div className="card-body text-start">
                                            <h5 className="card-title">{character.name}</h5>
                                            <div className="d-flex justify-content-between">
                                                <Link to={`/character/${character.uid}`}>
                                                    <a className="btn btn-outline-primary">Learn more!</a>
                                                </Link>
                                                <a href="#" className="btn btn-outline-warning"><i className="far fa-heart"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        ) 
                    : 
                    <SpinnerComponent />
                    }
                </div>
            </div>
        </div>
    )
}