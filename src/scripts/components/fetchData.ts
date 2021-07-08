import axios from "axios";


// Common function
const fetchData = () => {
	// const formData = new FormData();
	// formData.append("FirstName", "Sơn");
	// formData.append("LastName", "Vũ");
	// axios.post("/user", formData).then(function (response) {
	// 	console.log(response);
	// });

	// axios.get("./api/test.json")
	// 	.then((response) => {
	// 		return response;
	// 	})
	// 	.finally(() => {});
};

export default {
	fetchData: fetchData(),
}