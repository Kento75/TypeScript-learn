//let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
//let search = { ...defaults, food: "rich" };

let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { food: "rich", ...defaults };  // food: 'rich'はfood: 'spicy'で上書きされる
