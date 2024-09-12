export const buttonClassName =
  "h-[40px] w-[40px] bg-primary-base text-white rounded-xl";

export const paginationButton = (name: number) => {
  const button = document.createElement("button");
  button.className = "h-[40px] w-[40px] bg-primary-base text-white rounded-xl";
  button.id = name.toString();
  button.innerHTML = name.toString();
  document.getElementById("pagination")!.className =
    "flex justify-center gap-2 mt-5 mb-5";
  document.getElementById("pagination")?.appendChild(button);
  return button;
};

export const elipsElemnts = () => {
  const elippes = document.createElement("span");
  elippes.className = "text-white text-[18px]";
  elippes.innerHTML = "....";
  document.getElementById("pagination")?.appendChild(elippes);
};
