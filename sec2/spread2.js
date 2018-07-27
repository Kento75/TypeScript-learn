//let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
//let search = { ...defaults, food: "rich" };
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = __assign({ food: "rich" }, defaults); // food: 'rich'はfood: 'spicy'で上書きされる
