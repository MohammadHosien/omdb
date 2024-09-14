import { filmElement } from "./elements/filmElement";
import setPagination from "./pagination";
import { FilmsType } from "./utils/type";
import urls from "./utils/url";

export const pagination = async () => {
  const input = document.getElementById("search") as HTMLInputElement;
  input.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      const response = await fetch(urls.OdmBySearch(input.value));
      const filmData = await response.json();
      setPagination(filmData.totalResults);
    }
  });
};

export const getfilms = async (page?: number) => {
  const loading = document.getElementById("loading")!;
  loading.className =
    "text-[50px] w-fit text-center animate-bounce my-[100px] px-[80px] rounded-full  mx-auto bg-primary-glass  py-[20px] font-[500] text-center text-white";
  loading.innerHTML = "loading";
  document.getElementById("films")!.innerHTML = "";
  const input = document.getElementById("search") as HTMLInputElement;
  input.disabled = true;
  if (!page) {
    setTimeout(() => {
      document
        .getElementById("loading")
        ?.scrollIntoView({ behavior: "smooth" }); //scroll to films
    }, 300);
  }
  const response = await fetch(urls.OdmBySearch(input.value, page));
  const filmData = await response.json();
  const searchedFilm: FilmsType[] = filmData.Search;
  input.disabled = false;
  loading.innerHTML = "";
  loading.className = "";
  if (searchedFilm) {
    searchedFilm.map((item) => {
      filmElement(item);
    });
  } else {
    document.getElementById("films")!.innerHTML = "";
  }
  if (page) {
    setTimeout(() => {
      document
        .getElementById("filmTitle")
        ?.scrollIntoView({ behavior: "smooth" }); //scroll to films
    }, 300);
  }
};

export const searchFilm = async () => {
  try {
    const input = document.getElementById("search") as HTMLInputElement;
    input.addEventListener("keydown", async (e) => {
      if (e.key === "Enter") {
        document.getElementById("pagination")!.innerHTML = "";
        getfilms();
      }
    });
  } catch (error) {
    document.getElementById("films")!.innerHTML = "مشکلی از سمت سرور پیش آمده";
  }
};
