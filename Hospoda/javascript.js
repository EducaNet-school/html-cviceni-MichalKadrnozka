let img = 'img1'
function img_close(){
    document.getElementById(img).className = 'img_close'
    document.getElementById('button').className = 'close_button'
}
function img1_open(){
    document.getElementById('img1').className = 'img1'
    document.getElementById('button').className = 'close_button_visible'
    img = 'img1'
}
function img2_open(){
    document.getElementById('img2').className = 'img2'
    document.getElementById('button').className = 'close_button_visible'
    img = 'img2'
}
function img3_open(){
    document.getElementById('img3').className = 'img3'
    document.getElementById('button').className = 'close_button_visible'
    img = 'img3'
}
function img4_open(){
    document.getElementById('img4').className = 'img4'
    document.getElementById('button').className = 'close_button_visible'
    img = 'img4'
}
function img5_open(){
    document.getElementById('img5').className = 'img5'
    document.getElementById('button').className = 'close_button_visible'
    img = 'img5'
}
function img6_open(){
    document.getElementById('img6').className = 'img6'
    document.getElementById('button').className = 'close_button_visible'
    img = 'img6'
}
function img7_open(){
    document.getElementById('img7').className = 'img7'
    document.getElementById('button').className = 'close_button_visible'
    img = 'img7'
}
function img8_open(){
    document.getElementById('img8').className = 'img8'
    document.getElementById('button').className = 'close_button_visible'
    img = 'img8'
}
function img9_open(){
    document.getElementById('img9').className = 'img9'
    document.getElementById('button').className = 'close_button_visible'
    img = 'img9'
}
function img10_open(){
    document.getElementById('img10').className = 'img10'
    document.getElementById('button').className = 'close_button_visible'
    img = 'img10'
}



const food_data = [
    {
        name: "Biftek s bramborem",
        imgSrc: "assets/biftek.jpg",
        price: "139 Kč",
    },
    {
        name: "Kuřecí řízek s kroketami",
        imgSrc: "assets/kurizek.jpg",
        price: "109 Kč",
    },
    {
        name: "Svíčková s kledlíkem",
        imgSrc: "assets/svickova.jpg",
        price: "119 Kč",
    },
    {
        name: "Pečený pstruh s vařenou zeleninou",
        imgSrc: "assets/pstruh.jpg",
        price: "109 Kč",
    },
    {
        name: "Vepřové medailonky s bramborem",
        imgSrc: "assets/veprove_medailonky.jpg",
        price: "129 Kč",
    },
    {
        name: "Domácí guláš s kendlíkem",
        imgSrc: "assets/gulas.jfif",
        price: "149 Kč",
    },
    {
        name: "Smažák s hranolkami",
        imgSrc: "assets/smazak.jpg",
        price: "119 Kč",
    },
  ];
  
const foodNameElem = document.getElementById("food_name");
const foodImgElem = document.getElementById("food_img");
const priceElem = document.getElementById("price");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentFoodIndex = 0;

function updateFoodInfo() {
    const currentFood = food_data[currentFoodIndex];
    foodNameElem.textContent = currentFood.name;
    foodImgElem.src = currentFood.imgSrc;
    priceElem.textContent = currentFood.price;
}

prevBtn.addEventListener("click", () => {
    currentFoodIndex = (currentFoodIndex - 1 + food_data.length) % food_data.length;
    updateFoodInfo();
});

nextBtn.addEventListener("click", () => {
    currentFoodIndex = (currentFoodIndex + 1) % food_data.length;
    updateFoodInfo();
});

updateFoodInfo();
