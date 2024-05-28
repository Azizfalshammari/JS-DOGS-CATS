let isDogs = false;

const logo = document.querySelector(".logo");
const imgs = document.querySelector("#firstHeroImg");
const imgs2 = document.querySelector("#secondImg");

function renderDog() {}
logo.addEventListener("click", () => {
  isDogs = !isDogs;
  if (isDogs) {
    renderDog();
  } else replaceDogWithCat();
});
function replaceDogWithCat() {
  imgs.style.backgroundImage =
    "url(https://www.allfelinehospital.com/sites/site-2284/images/Charlie/IMG_2652.JPG)";
  imgs2.style.backgroundImage =
    "url(https://www.omlet.co.uk/images/originals/Cat-Cat_Guide-A_little_girl_holding_a_cat.jpg)";
  document.querySelectorAll("*").forEach((element) => {
    element.innerHTML = element.innerHTML.replace("dog", "cat");
  });
  var allElements = document.getElementsByTagName("*");

  for (var i = 0; i < allElements.length; i++) {
    var element = allElements[i];

    if (
      element.innerHTML.toLowerCase().includes("dog") ||
      element.innerHTML.toLowerCase().includes("dogs")
    ) {
      element.innerHTML = element.innerHTML.replace(/dog(s)?/gi, "cat");
    }
  }
}

