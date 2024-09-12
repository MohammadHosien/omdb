import { pagination, searchFilm } from "../film";
import omdb from "./omdb";
import "../style.css";

if (location.pathname === "/") {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
   <header
        class="flex bg-primary-glass px-3 backdrop-blur-xl py-3 top-0 drop-shadow-lg fixed w-full z-[100000]"
      >
        <h4 class="text-[30px] font-[600] text-center text-white">filmilia</h4>
      </header>
      <div class="h-screen pb-9 pt-20 myContainer">
      <div class=" heroSection  h-full flex flex-col gap-7 justify-center items-center w-full rounded-3xl mx-auto overflow-hidden">
          <div class="z-[10000] rounded-full flex gap-3 ps-2 items-center max-w-[80%] w-[700px] overflow-hidden bg-white">
            <i id="searchIcon" class="fa-solid fa-magnifying-glass"></i>
            <input id='search' class='outline-none border-none py-3 max-w-full w-[600px]'/>
          </div>
        </div>
      </div>
      <div id="filmTitle"></div>
      <div id="loading"></div>
      <div id="films" class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 myContainer"></div>
      <div id="pagination"></div>
  `;
  //add more java-script
  searchFilm();
  pagination();
}

omdb();
