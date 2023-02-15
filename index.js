window.onload = function () {
  // LOCAL STORAGE
  let username = localStorage.getItem("id");
  document.getElementById("username").innerHTML = "Welcome home " + username;

  // ARRAYS AND LISTS
  let shoppingList = new Array(
    { img: "./assets/imgs/bread.jpeg", item: "Bread", price: 20.5 },
    { img: "./assets/imgs/eggs.webp", item: "Eggs", price: 89.22 },
    { img: "./assets/imgs/milk.jpeg", item: "Milk", price: 67.9 },
    { img: "./assets/imgs/sugar.jpeg", item: "Sugar", price: 189.99 },
    { img: "./assets/imgs/coffee.jpeg", item: "Coffee", price: 156.99 }
  );

  let listUl = "<div style='width:500px'>";
  for (let i = 0; i < shoppingList.length; i++) {
    console.log(shoppingList[i].item);
    listUl +=
      "<table style='width: 100%; margin: 8px; border:1px solid grey; border-radius: 16px;'><tr><td rowspan='3' style='width:150px'><img src='" +
      shoppingList[i].img +
      "' alt='' style='width: 100px; height: 100px; object-fit: cover; border-radius: 50%;' />" +
      "</td></tr> <tr><td>Item: " +
      shoppingList[i].item +
      "</td></tr> <tr><td>Price: " +
      shoppingList[i].price +
      "</td></tr></table>";
  }
  listUl += "</div>";
  document.getElementById("listItems").innerHTML = listUl;

  //   document.getElementById("listItems").innerHTML =
  //     shoppingList + " (" + shoppingList.length + ")";

  // ======================================
  // VARIABLE, CONDITIONAL STATEMENTS
  let total = 0.0;
  let price1, price2, price3;
  price1 = 26.0;
  price2 = 34.78;
  price3 = 10.0;

  total = price1 + price2 + price3;

  let isqualify = "The user qualifies for a free delivery 😊";
  let isNotQualify = "The user does not qualify for a free delivery 😊";

  //   if the user buys over R120.00, then the delivery is free
  if (total > 120) {
    // Then the user qualifies for a free delivery
    document.getElementById("status").innerHTML = isqualify;
  } else {
    // Then the user does not qualify for a free delivery
    document.getElementById("status").innerHTML = isNotQualify;
  }

  document.getElementById("total").innerHTML = "Total: " + total;

  //   =========================
  //   document.getElementById("total").innerHTML =
  //     "Eggs: " +
  //     price1 +
  //     "<br>Bread: " +
  //     price2 +
  //     "<br>Milk: " +
  //     price3 +
  //     "<br>Total: " + total;

  //   const DATE = new Date("07 27 2021");

  //   let houseNumber = 11780;
  //   let streetName = "ChatGPT Avenue";
  //   let region = "Johannesburg";
  //   let province = "Gauteng";

  //   let text = "<h1>" + DATE + "</h1>";

  //   document.body.innerHTML =
  //     "<b>This is my fake house number:</b> " +
  //     houseNumber +
  //     ", " +
  //     streetName +
  //     ", " +
  //     region +
  //     ", " +
  //     province;
  //   //   document.write("hello Write");
  //   console.log("Hello Console", DATE);
};
