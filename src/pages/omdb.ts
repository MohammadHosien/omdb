import urls from "../utils/url";

const omdb = async () => {
  if (location.pathname !== "/") {
    const id = location.pathname.split("/")[1];
    const response = await fetch(urls.OmdbById(id));
    const film = await response.json();

    document.getElementById("app")!.innerHTML = `<div class="myContainer pb-4">
    <div class="grid grid-cols-2 gap-3 text-white mt-5">
      <img src=${film.Poster} alt="" class="w-[400px] h-[550px] rounded-lg"/>
      <div class="film py-1 px-4 rounded-xl">
         <h1 class="text-[30] font-[500] text-center">${film.Title}</h1>
         <h4 class="mt-11">Director : ${film.Director}</h4>
         <h4 class="mt-11">Writer : ${film.Writer}</h4>
         <h4 class="mt-4">Year : ${film.Year}</h4>
         <h4 class="mt-4">country : ${film.Country}</h4>
         <h4 class="mt-4">genre : ${film.Genre}</h4>
         <h4 class="mt-4">Language : ${film.Language}</h4>
         <h4 class="mt-4">Released : ${film.Released}</h4>
         <h4 class="mt-4">Runtime : ${film.Runtime}</h4>
      </div>
    </div>
    <h4 class="text-[25px] font-[500] text-center text-white mt-5">rating</h4>
 
        <div class="text-white flex flex-col gap-5 mt-5 justify-between text-center">
                ${
                  film.Ratings[0]
                    ? `<p class="film w-fit py-1 px-3 rounded-lg">${film.Ratings[0].Source} : ${film.Ratings[0].Value}</p>`
                    : ""
                }
                ${
                  film.Ratings[1]
                    ? `<p class="film w-fit py-1 px-3 rounded-lg">${film.Ratings[1].Source} : ${film.Ratings[1].Value}</p>`
                    : ""
                }
                ${
                  film.Ratings[2]
                    ? `<p class="film w-fit py-1 px-3 rounded-lg">${film.Ratings[2].Source} : ${film.Ratings[2].Value}</p>`
                    : ""
                }   
        </div>    
    <div class="text-center rounded-xl px-6 film py-4 text-white mt-5">
        <h4 class="text-[25px] font-[500] text-center text-white mt-5">Plot</h4>
         ${film.Plot}
      </div>

      
    <button id="back" class="text-white py-2 px-6 mt-6 block mx-auto bg-primary-base rounded-xl">back</button>
    </div>`;
  }
  const button = document.getElementById("back");
  button?.addEventListener("click", () => {
    location.pathname = "/";
  });
};

export default omdb;
