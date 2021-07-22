// https://fancyapps.com/docs/ui/fancybox
// https://www.npmjs.com/package/axios
// https://greensock.com/
// https://swiperjs.com/get-started
declare var Swiper : any;

import axios from "axios";


//////////////////////////////////////////////////////////
// Common function
import * as fetchData from "./components/fetchData";

// Layout
import {header} from "./layout/header";

// Page
import index from "./page/index";
import {service} from "./page/service";


///////////////////////////////////////////////////////////////
// function Common
function common(){

  fetchData;
}
var swiper2 = new Swiper('.home-swiper-2', {
	slidesPerView: 1,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
// function Layout
function layout(){
  header();
}

// function Page
function page(){
  index.index();
  service();
}

////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function(){
  common();
  layout();
  page();
});


