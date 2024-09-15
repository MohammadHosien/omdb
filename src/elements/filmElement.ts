import { FilmsType } from "../utils/type";

export const filmElement = (item: FilmsType) => {
  const filmTitle = document.getElementById("filmTitle");
  const input = document.getElementById("search") as HTMLInputElement;
  const div = document.createElement("div");
  div.className = "film p-3 rounded-xl";
  //h1
  const h1 = document.createElement("h3");
  h1.className =
    "text-white text-[20px] truncate max-width-[100px] font-[500] text-center mt-3";
  h1.innerHTML = item.Title;
  //h1

  //p
  const typeP = document.createElement("p");
  typeP.className = "text-white mt-auto mt-5";
  typeP.innerHTML = `<span class="text-[18px]">type</span> : <span class="font-[500]">${item.Type}</span>`;

  const yearP = document.createElement("p");
  yearP.className = "text-white";
  yearP.innerHTML = `<span class="text-[18px]">year</span> : <span class="font-[500]">${item.Year}</span>`;
  //p

  //img
  const img = document.createElement("img");
  img.src = item.Poster;
  img.className = "mx-auto rounded-xl";
  //img

  filmTitle!.className =
    "mt-4 mb-6 text-primary-base text-center text-[30px] font-[800]";
  filmTitle!.innerHTML = `Movies from ${input.value}`;

  //appendes
  div.appendChild(img);
  div.appendChild(h1);
  div.appendChild(typeP);
  div.appendChild(yearP);
  div.addEventListener('click',()=>{
    location.pathname=`/film/${item.imdbID}`
  })
  document.getElementById("films")!.appendChild(div);
  //appendes
};
