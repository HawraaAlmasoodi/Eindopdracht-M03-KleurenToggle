let toggleNavStatus = false;
let navList = document.querySelector(".nav-sidebar");
let btnMenuElement = document.getElementById("btn-menu");
btnMenuElement.addEventListener('click', function () {
    if (toggleNavStatus == false) {
        navList.style.visibility = "visible";
        navList.style.width = "358px";
        toggleNavStatus = true;
    } else if (toggleNavStatus == true) {
        navList.style.visibility = "hidden";
        navList.style.width = 0;
        toggleNavStatus = false;
    }
});

let nameColor = document.getElementById("colornamelabel");
let listItems = document.getElementsByClassName("listitems");
let radioBtns = document.getElementsByTagName('input');
Array.from(listItems).forEach(function (listitem) {
    listitem.addEventListener('click', function () {
        document.body.style.backgroundColor = listitem.id;
        navList.style.visibility = "hidden";
        nameColor.style.visibility = "visible";
        nameColor.innerHTML = listitem.id;
        toggleNavStatus = false;
        let btnId = "btn-" + listitem.id;
        document.getElementById(btnId).checked = true;
    })
});

let listItemsBackgroundColor = document.getElementsByTagName("li");
for (let i = 0; i < listItemsBackgroundColor.length; i++) {
    listItemsBackgroundColor[i].style.backgroundColor = listItemsBackgroundColor[i].id;
    
}
