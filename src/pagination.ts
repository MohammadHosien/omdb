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

          if (i === end) {
            document.getElementById("pagination")!.innerHTML = "";

            if (end === totalPage || end===totalPage-2) {
              paginationItems(1, 1);
              elipsElemnts();
              paginationItems(totalPage - 3, totalPage);
              return;
            }

            paginationItems(1, 1);
            elipsElemnts();
            paginationItems(start + 2, end + 2);
            elipsElemnts();
            paginationItems(totalPage, totalPage);
          }

          if (i === start && i !== 1) {
            document.getElementById("pagination")!.innerHTML = "";

            paginationItems(1, 1);
            elipsElemnts();
            paginationItems(start - 2, end - 2);
            elipsElemnts();
            paginationItems(totalPage, totalPage);
          }

          if (i === 1 || i===3) {
            document.getElementById("pagination")!.innerHTML = "";
            paginationItems(1, 5);
            elipsElemnts();
            paginationItems(totalPage, totalPage);
          }
        });
      }
    };
    paginationItems(1, 5);
    elipsElemnts();
    paginationItems(totalPage, totalPage);
  }
};

export default setPagination;
