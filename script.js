function toggleMenu() {
  let menu = document.getElementById("menu");
  let overlay = document.getElementById("overlay");

  if (menu.style.left === "0px") {
    menu.style.left = "-260px";
    overlay.style.display = "none";
  } else {
    menu.style.left = "0px";
    overlay.style.display = "block";
  }
}

function openProduct(name, price) {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("pname").innerText = name;
  document.getElementById("pprice").innerText = price;
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function orderNow() {
  alert("Order placed for " + document.getElementById("pname").innerText);
}
