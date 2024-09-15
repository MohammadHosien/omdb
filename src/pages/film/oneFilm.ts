import urls from "../../utils/url";
import { setFavoriteTools } from "./favoriteHandler";

const oneFilm = async () => {
  if (location.pathname.startsWith("/film/")) {
    const id = location.pathname.split("/")[2];
    console.log(id)
    const app = document.getElementById("app");
    app!.innerHTML = `<div class='h-screen flex justify-center items-center'>
      <div class='text-[50px] w-fit text-center animate-bounce my-[100px] px-[80px] rounded-full  mx-auto bg-primary-glass  py-[20px] font-[500] text-white'>loading</div>
      </div>`;
    const response = await fetch(urls.OmdbById(id));
    const film = await response.json();
    document.getElementById("app")!.innerHTML = `<div class="myContainer pb-4">
    <div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 rounded-xl bg-primary-base py-5 text-white mt-5">
      <img src=${
        film.Poster
      } alt="Poster" class="w-[400px] mx-auto h-[550px] rounded-lg"/>
      <div class="py-1 px-4 rounded-xl">
         <h1 class="text-[20px] font-[500] text-center">${film.Title}</h1>
         <h4 class="mt-4">Director : <span class="text-black font-[700]">${
           film.Director
         }</span></h4>
         <h4 class="mt-4">Writer : <span class="text-black font-[700]">${
           film.Writer
         }</span></h4>
         <h4 class="mt-4">Year : <span class="text-black font-[700]">${
           film.Year
         }</span></h4>
         <h4 class="mt-4">country : <span class="text-black font-[700]">${
           film.Country
         }</span></h4>
         <h4 class="mt-4">genre : <span class="text-black font-[700]">${
           film.Genre
         }</span></h4>
         <h4 class="mt-4">Language : <span class="text-black font-[700]">${
           film.Language
         }</span></h4>
         <h4 class="mt-4">Released : <span class="text-black font-[700]">${
           film.Released
         }</span></h4>
         <h4 class="mt-4">Runtime : <span class="text-black font-[700]">${
           film.Runtime
         }</span></h4>
      </div>
    </div>
    </div>
    
        <div class="text-white bg-primary-base py-4 px-2 rounded-lg flex flex-col gap-5 mt-5 justify-between text-center">
            <h4 class="text-[25px] font-[500] text-center text-white">rating</h4>
                ${
                  film.Ratings[0]
                    ? `<p class=" bg-black w-fit py-1 px-3 rounded-lg">${film.Ratings[0].Source} : ${film.Ratings[0].Value}</p>`
                    : ""
                }
                ${
                  film.Ratings[1]
                    ? `<p class="bg-black w-fit py-1 px-3 rounded-lg">${film.Ratings[1].Source} : ${film.Ratings[1].Value}</p>`
                    : ""
                }
                ${
                  film.Ratings[2]
                    ? `<p class="bg-black w-fit py-1 px-3 rounded-lg">${film.Ratings[2].Source} : ${film.Ratings[2].Value}</p>`
                    : ""
                }   
            </div>    
                <div class="text-center rounded-xl px-6 bg-primary-base py-4 text-white mt-5">
                    <h4 class="text-[25px] font-[500] text-center text-white mb-4">Plot</h4>
                    ${film.Plot}
                </div>

            <div class="flex justify-center gap-5 mt-2" id="footerButtons">
            <button id="back" class="bg-primary-base px-4 text-white rounded-xl">back</button>
            <button id='add' class=' bg-primary-base text-white block py-2 px-4 rounded-xl'>add to favorite</button>
            </div>
    </div>`;

    const button = document.getElementById("back");
    button?.addEventListener("click", () => {
      location.pathname = "/";
    })
    setFavoriteTools(film)
  }
};

export default oneFilm;
