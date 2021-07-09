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
import index from "./page/index";

// Page


///////////////////////////////////////////////////////////////
// function Common
function common(){

  fetchData;
}

// function Layout
function layout(){
  header();
}

// function Page
function page(){
  index.index();
}

////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function(){
  common();
  layout();
  page();
});


