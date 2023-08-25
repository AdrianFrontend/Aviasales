import axios from "axios";

const instance = axios.create({
	// headers: {
	// 	accept: "application/json;charset=utf-8",
	// 	Authorization:
	// 		"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzExZWZiZWM4YzhjZjU3NzgzNzk0YjIyYmZmOTEwNyIsInN1YiI6IjY0YjkwZTU5NmFhOGUwMDBiMGIwODZmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0gmbvMpxymPSxS5HWKM81xXFJ5RUTdwOGN6_u0ve_ks",
	// },
});

export const API = {
	getSearchId() {
		return instance.get("https://aviasales-test-api.kata.academy/search").then((r) => r.data);
	},
	getTickets(searchId) {
		return instance.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`).then((r) => r.data);
	},
};
