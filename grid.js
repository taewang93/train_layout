let colHeight1 = document.querySelectorAll(".box")[0].offsetHeight;
let colHeight2 = document.querySelectorAll(".box")[1].offsetHeight;
let colHeight3 = document.querySelectorAll(".box")[2].offsetHeight;
let colHeight4 = document.querySelectorAll(".box")[3].offsetHeight;

const boxLength = document.querySelectorAll(".box").length;
const targetWidth = 25;

const clickTab = (type) => {
  if (type == "all") {
    for (let i = 0; i < boxLength; i++) {
      document.querySelectorAll(".box")[i].style.opacity = 1;
    }
  } else {
    let typeLength = document.querySelectorAll(`.${type}`).length;

    for (let i = 0; i < boxLength; i++) {
      document.querySelectorAll(".box")[i].style.opacity = 0;
      document.querySelectorAll(".box")[i].style.zIndex = "0";
    }
    for (let j = 0; j < typeLength; j++) {
      document.querySelectorAll(`.${type}`)[j].style.opacity = 1;
      document.querySelectorAll(`.${type}`)[j].style.zIndex = "1";
    }
  }

  lineUpList(type);
};

const lineUpList = (type) => {
  let typeLength = document.querySelectorAll(`.${type}`).length;

  colHeight1 = document.querySelectorAll(`.${type}`)[0].offsetHeight;
  colHeight2 = document.querySelectorAll(`.${type}`)[1].offsetHeight;
  colHeight3 = document.querySelectorAll(`.${type}`)[2].offsetHeight;
  if (typeLength > 3) {
    colHeight4 = document.querySelectorAll(`.${type}`)[3].offsetHeight;
  }

  for (let i = 0; i < typeLength; i++) {
    if (i < 4) {
      document.querySelectorAll(`.${type}`)[i].style.top = "0%";
      document.querySelectorAll(`.${type}`)[i].style.left =
        targetWidth * i + "%";
    } else {
      colHeightMin = Math.min(colHeight1, colHeight2, colHeight3, colHeight4);
      document.querySelectorAll(`.${type}`)[i].style.top = colHeightMin + "px";

      if (colHeightMin == colHeight1) {
        document.querySelectorAll(`.${type}`)[i].style.left = "0%";
        colHeight1 =
          colHeight1 + document.querySelectorAll(`.${type}`)[i].offsetHeight;
      } else if (colHeightMin == colHeight2) {
        document.querySelectorAll(`.${type}`)[i].style.left = "25%";
        colHeight2 =
          colHeight2 + document.querySelectorAll(`.${type}`)[i].offsetHeight;
      } else if (colHeightMin == colHeight3) {
        document.querySelectorAll(`.${type}`)[i].style.left = "50%";
        colHeight3 =
          colHeight3 + document.querySelectorAll(`.${type}`)[i].offsetHeight;
      } else if (colHeightMin == colHeight4) {
        document.querySelectorAll(`.${type}`)[i].style.left = "75%";
        colHeight4 =
          colHeight4 + document.querySelectorAll(`.${type}`)[i].offsetHeight;
      }

      colHeightMax = Math.max(colHeight1, colHeight2, colHeight3, colHeight4);
      document.querySelector(".content_wrap").style.height =
        colHeightMax + "px";
    }
  }
};

clickTab("all");
