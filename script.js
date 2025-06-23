let input = document.getElementById("input-box");
let buttons = document.querySelectorAll("button");
let string = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      // اگر دکمه = کلیک شد
      string = eval(string); //  که برای اجرا و یا تفسیر استفاده میشودeval تابع
      // یعنی هر عملیه رشته ای مانند ۳+۴ یا ۶+/۹ بود ره توسط اجرا کو  eval(String)
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1); // از صفر شروع شده و از اخر یک واحد کم کن
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});

async function getDetail() {
  try {
    let response = await fetch("https://randomuser.me/api/");
    let data = await response.json(); // Renamed 'date' to 'data' for clarity
    let user = data.results[0]; // Corrected 'result' to 'results'
    console.log("Name:", user.name.first, user.name.last);
    console.log("Email:", user.email);
    console.log("Country:", user.location.country); // Corrected 'Coutry' to 'Country'
    console.log("Profile Picture:", user.picture.large);
  } catch (error) {
    console.log("Error Occurred:", error);
  }
}

getDetail();

async function getPerson() {
  try {
    let response = await fetch("https://randomuser.me/api/");
    let Data1 = await response.json();
    let user = Data1.results[1];
    console.log("Name:", user.name.first);
    console.log("Email", user.email);
  } catch (error) {
    console.log("Error Occured", error);
  }
}
getPerson();

async function getPeople() {
  try {
    let response = await fetch("https://randomuser.me/api/");
    let Data2 = await response.json();
    let user = Data2.results[2];
    console.log("Name:", user.name.first);
    console.log("Phone Number:", user.phone);
  } catch (error) {
    console.log("Error Occured".error);
  }
}
getPeople();
