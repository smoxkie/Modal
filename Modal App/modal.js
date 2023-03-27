let open = document.querySelector(".btn");
console.log(open);

let content = document.querySelector(".content");
console.log(content);

let close = document.querySelector(".close");
console.log(close);

open.addEventListener("click", () => {
    console.log("Button is clicked");
    content.style.display = "flex";
});


close.addEventListener("click", ()  => {
    console.log("Button");
      content.style.display = "none";
});