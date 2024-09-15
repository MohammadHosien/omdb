
const favorite = () => {
  if (location.pathname === "/favorite") {
    document.getElementById("app")!.innerHTML = `
           <h1 class="text-[30px] text-center font-[600] text-primary-base">favorite movies</h1>
           <div id="favorites" class="grid mt-5 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"></div>
         `;
         JSON.parse(localStorage.getItem("favorite")!).map((item: any) => {
            console.log(item)
            const div = document.createElement("div");
            div.className = "film p-1 rounded-xl text-white text-center";
            const img = document.createElement("img");
            img.src = item.Poster;
            img.className="mx-auto"
            const h1 = document.createElement("h1");
            h1.innerHTML = item.Title;
            div.appendChild(img);
            div.appendChild(h1);
            document.getElementById('favorites')?.appendChild(div)
          });
  }
};

export default favorite;

