const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			API_URL: "https://www.swapi.tech/api",
			characters: undefined,
			favorites:[]
		},
		actions: {
			// getCharacters: async() => {
			// 	try {
			// 		const store = getStore()
			// 		const res = await fetch(store.API_URL+"/character")
			// 		if(!res.ok) throw new Error(`Invalid Response, Response status: ${res.status}`)
			// 		const body = await res.json()
			// 		setStore({characters:body.results})
			// 	} catch (error) {
			// 		console.log(error)
			// 	}
			// },
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			request: async (path) => {
				try {
					const store = getStore()
					const res = await fetch(store.API_URL+path)
					if(!res.ok) throw new Error(`Invalid response, Response status: ${res.status}`)
					const body = await res.json()
					return(body.results ? body.results : body.result)
				} catch (error) {
					console.log(error)
				}
			},
			addFavorites: (id, name) => {
				const store = getStore()
				console.log(store.favorites.length)
				if(store.favorites.length===0){
					setStore({favorites:[{id:id, name:name}]})	
				}else{
					store.favorites.map(favorite => {
						if(favorite['id']===id){
							const newFavorites = store.favorites.filter(favorite => favorite['id']!==id)
							setStore({favorites:newFavorites})
						}else{
							setStore({favorites: [...store.favorites, {id:id, name:name}]})
						}
					})
				}
				
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			}
		}
	};
};

export default getState;
