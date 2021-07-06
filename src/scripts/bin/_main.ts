// import { getSVGs, Loading } from "./utilities/util";
// import { Fullpage, FullpageOptions } from "./libraries/Fullpage";
// import Axios from "axios";
// declare var Swiper:any;
// const swiper = () => {
// 	var swiper = new Swiper('.web4g-slide .swiper-container', {
// 		slidesPerView: 1,
// 		speed: 2000,
// 		loop:true,
// 		autoplay: {
// 			delay: 3000,
// 		}
// 	  });
// }
// document.addEventListener("DOMContentLoaded", async () => {
// 	getSVGs(".svg");
// 	Loading();
// 	// swiper();
// 	// const num = document.querySelectorAll("h1").length
	
// 	// document.querySelector("button").addEventListener("click" , (item) => {
// 	// 	let check: number = 0;
// 	// 	if(document.querySelector("input[type=radio]:checked")) {
// 	// 		document.querySelectorAll("input[type=radio]:checked").forEach((item) => {
// 	// 			const istrue = item.getAttribute("data-istrue") 
// 	// 			if(istrue == "true") {
// 	// 				check++;
// 	// 			} else {
// 	// 				item.parentElement.classList.add('test')
// 	// 			}
// 	// 		})
// 	// 	}
// 	// 	if(check == num) {
// 	// 		console.log(check);
// 	// 		console.log("done");
// 	// 	} else {
// 	// 		console.log(check);
// 	// 		console.log("fail");
// 	// 	}
// 	// })
// });

// const fetchData = () => {
// 	const formData = new FormData();
// 	formData.append("FirstName", "Sơn");
// 	formData.append("LastName", "Vũ");
// 	Axios.post("/user", formData).then(function (response) {
// 		console.log(response);
// 	});

// 	Axios.get("./api/test.json")
// 		.then((response) => {
// 			return response;
// 		})
// 		.finally(() => {});
// };
