import {
  buttonClassName,
  elipsElemnts,
  paginationButton,
} from "./elements/paginationElement";
import { getfilms } from "./film";

const setPagination = (totalFilms: number) => {
  const itemsPages = 10;
  let totalPage = Math.ceil(+totalFilms / itemsPages);

  if (totalPage <= 6) {
    for (let i = 1; i < totalPage; i++) {
      paginationButton(i);
    }
  } else {
    const paginationItems = (start: number, end: number) => {
      for (let i = start; i <= end; i++) {
        paginationButton(i).addEventListener("click", () => {
          getfilms(i);

          const button=document.getElementById(
            i.toString()
          ) as HTMLButtonElement

          let current = document.getElementsByClassName("active");

          if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
          }

          button!.className = `${buttonClassName} active`;

          if (i === end) {
            document.getElementById("pagination")!.innerHTML = "";
            if (end === totalPage || end === totalPage - 2) {
              document.getElementById("pagination")!.innerHTML = "";
              paginationItems(1, 1);
              elipsElemnts();
              paginationItems(totalPage - 4, totalPage);
              button!.className = `${buttonClassName} active`;
              return;
            }
            paginationItems(1, 1);
            elipsElemnts();
            paginationItems(start + 2, end + 2);
            elipsElemnts();
            paginationItems(totalPage, totalPage);
            button!.className = `${buttonClassName} active`;
          }

          if (i === start && i !== 1) {
            document.getElementById("pagination")!.innerHTML = "";
            if (end === 3) {
              document.getElementById("pagination")!.innerHTML = "";
              paginationItems(1, 5);
              elipsElemnts();
              paginationItems(totalPage, totalPage);
              return;
            }
            paginationItems(1, 1);
            elipsElemnts();
            paginationItems(start - 2, end - 2);
            elipsElemnts();
            paginationItems(totalPage, totalPage);
            button!.className = `${buttonClassName} active`;
          }

          if (i === 1) {
            document.getElementById("pagination")!.innerHTML = "";
            paginationItems(1, 5);
            elipsElemnts();
            paginationItems(totalPage, totalPage);
            button!.className = `${buttonClassName} active`;
          }
          if(document.getElementById(i.toString())?.className.includes('active')){
            document.getElementById(i.toString())as HTMLButtonElement
          }
        });
      }
    };
    paginationItems(1, 5);
    elipsElemnts();
    paginationItems(totalPage, totalPage);
    document.getElementById(
      "1"
    )!.className = `${buttonClassName} active`;
  }
};

export default setPagination;
