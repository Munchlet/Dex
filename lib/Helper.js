const getTypeColor = (type) => {
	// https://bulbapedia.bulbagarden.net/wiki/Normal_(type)
	switch (type) {
		case "normal":
			return "#A8A878";
		case "fire":
			return "#F08030";
		case "fighting":
			return "#C03028";
		case "water":
			return "#6890F0";
		case "flying":
			return "#A890F0";
		case "grass":
			return "#78C850";
		case "poison":
			return "#A040A0";
		case "electric":
			return "#F8D030";
		case "psychic":
			return "#F85888";
		case "rock":
			return "#B8A038";
		case "ice":
			return "#98D8D8";
		case "bug":
			return "#A8B820";
		case "dragon":
			return "#7038F8";
		case "ghost":
			return "#705898";
		case "dark":
			return "#705848";
		case "steel":
			return "#B8B8D0";
		case "fairy":
			return "#EE99AC";
		case "ground":
			return "#E0C068";
		case "???":
			return "#68A090";
		default:
			return "#000";
	}
};

const getPokedexColor = (name) => {
	switch (name) {
		case "red":
			return "#f05868";
		case "blue":
			return "#3088f0";
		case "yellow":
			return "#f0d048";
		case "green":
			return "#40b868";
		case "black":
			return "#585858";
		case "brown":
			return "#b07030";
		case "purple":
			return "#a868c0";
		case "gray":
			return "#a0a0a0";
		case "white":
			return "#f0f0f0";
		case "pink":
			return "#f890c8";
		default:
			return "#000";
	}
};

export { getTypeColor };