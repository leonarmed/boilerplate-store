import React, {useContext, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	const [favorites, setFavorites] = useState(store.favorites)

	useEffect(() => {
		setFavorites(store.favorites)
	},[store.favorites])

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
					<img src="https://ae01.alicdn.com/kf/U5744fb20f65a400fbc71131ad163a9fcD.png" alt="logo star wars" width="100px" style={{margin:5}}/>
				</Link>
				<div className="ml-auto">
					<div className="btn-group">
						<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites{store.favorites.length>0 && `: ${store.favorites.length}`}
						</button>
						<ul className="dropdown-menu">
							{favorites && favorites.map(favorite => {
								// console.log(favorite.id, '///', favorite.name)
								return <li key={parseInt(favorite.id)} onClick={() => actions.removeFavorites(favorite.id, favorite.type)} className="d-flex align-items-center"><a className="dropdown-item">{favorite.name}</a><i className="fas fa-trash-alt me-2"></i></li>
							})}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
