export const setFavoriteTools = (film:any) => {
  const getFavorite = JSON.parse(localStorage.getItem("favorite")!)
    ? JSON.parse(localStorage.getItem("favorite")!)
    : [];

  const favorite = document.getElementById("add");

  if (
    JSON.parse(localStorage.getItem("favorite")!) &&
    JSON.parse(localStorage.getItem("favorite")!).length <= 0
  ) {
    favorite!.innerHTML = "add to favorite";
    favorite!.id = "add";
  }

  favorite?.addEventListener("click", () => {

    if (favorite.id === "add") {
      favorite.innerHTML = "remove from favorite";
      favorite.id = "remove";
      localStorage.setItem("favorite", JSON.stringify([...getFavorite, film]));
      return;
    }

    if (favorite.id === "remove") {
      favorite.innerHTML = "add to favorite";
      favorite.id = "add";
      getFavorite.filter((i: any) => i.imdbID !== film.idmdbID);
      localStorage.setItem(
        "favorite",
        JSON.stringify(
          getFavorite.filter((i: any) => i.imdbID !== film.idmdbID)
        )
      );
    }
  });
};
