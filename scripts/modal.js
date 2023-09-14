// Получить модель
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");

let arr = document.querySelectorAll(".certificates_container_main_content img");
arr.forEach((item) => {
  item.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = item.src;
    console.log(item.src);
  });
});

// Получить элемент <span>, который закрывает модальный
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
  modal.style.display = "none";
}
modal.addEventListener('click',()=>{
  modal.style.display="none";
})
