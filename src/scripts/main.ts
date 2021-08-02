// https://fancyapps.com/docs/ui/fancybox
// https://www.npmjs.com/package/axios
// https://greensock.com/
// https://swiperjs.com/get-started
declare var Swiper : any;
declare var $ : any;
import axios from "axios";


//////////////////////////////////////////////////////////
// Common function
import * as fetchData from "./components/fetchData";

// Layout
import {header} from "./layout/header";
// import {language} from "./layout/language";

// Page
import index from "./page/index";
import {service} from "./page/service";
import {library} from "./page/library";
import endow from "./page/endow";
import {forum} from "./page/forum";
import {restroom} from "./page/restroom";
import {wedding} from "./page/wedding";
import {intro} from "./page/intro";
import {booking} from "./page/booking";

// import { interpolate } from "gsap/all";


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
  // language();
}

// function Page
function page(){
  index.index();
  service();
  // library.library();
  endow.endow();
  forum();
  restroom();
  intro();
  wedding();
  booking();
  library();
}

////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function(){
  common();
  layout();
  page();
});


