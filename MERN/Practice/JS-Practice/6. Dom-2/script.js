let main = document.getElementById("main");
let contents = document.getElementById("contents");
let htmlContents = document.getElementById("html-content");
let cssContents = document.getElementById("css-content");
let htmlBtn = document.getElementById("html-btn");
let cssBtn = document.getElementById("css-btn");


htmlBtn.addEventListener("click", () => {
    htmlContents.style.display = "contents";
    cssContents.style.display = "none";
    htmlBtn.style.backgroundColor = "black";
    htmlBtn.style.color = "bisque";
    htmlBtn.style.border = "1px solid bisque";
    cssBtn.style.backgroundColor = "bisque";
    cssBtn.style.color = "black";
    cssBtn.style.border = "1px solid bisque";
});

cssBtn.addEventListener("click", () => {
    htmlContents.style.display = "none";
    cssContents.style.display = "contents";
    htmlBtn.style.backgroundColor = "bisque";
    htmlBtn.style.color = "black";
    htmlBtn.style.border = "1px solid bisque";
    cssBtn.style.backgroundColor = "black";
    cssBtn.style.color = "bisque";
    cssBtn.style.border = "1px solid bisque";
});



