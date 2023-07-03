let cardsData =[{id:1,title:"Jeans",price:1000.20,description:"casual mens wear jeans",image:"/assets/jeans.webp",rating:{rate:4.2,count:100}},
{id:2,title:"shirts",price:640.12,description:"fashion mens wear shirts",image:"/assets/shirt.webp",rating:{rate:4.4,count:120}},
{id:3,title:"lehangas for women",price:2000.57,description:"different styles lehanga along duppattta",image:"/assets/lehangas.jpg",rating:{rate:4.0,count:200}},{id:4,title:"kurtis for women",price:800.12,description:"occasional wear beautifull kurtis",image:"/assets/kurtis.webp",rating:{rate:4.1,count:120}},{id:5,title:"sarees",price:2500.12,description:"trendy sarees",image:"/assets/saree.jpg",rating:{rate:3.9,count:80}},{id:6,title:"T-shirts",price:500.12,description:"beautiful westernwear t-shirts",image:"/assets/t-shirts.jpg",rating:{rate:4.0,count:150}},{id:7,title:"north indian dresses",price:700.12,description:"fashion north indian style",image:"/assets/northindian.jpg",rating:{rate:5.0,count:180}},{id:8,title:"dhuppata",price:640.12,description:"different style dhuppatas",image:"/assets/dupatas.jpg",rating:{rate:4.0,count:120}}];

let data = "";
cardsData.map(function cardsFunction(items){
    data += `
        <div class="col-lg-4" >
            <div class="cards-product">
                <img src=${items.image} alt="">
                <h4>Title :- <span>${items.title}</span></h4>
                <h6>Price :- <span>${items.price}</span></h6>   
                <h6>Rating :- <span>${items.rating.rate}</span></h6>    
                <h6>Count :- <span>${items.rating.count}</span></h6>
               <button onclick="addToCart(${items.id})">Add to cart</button>
                    
            </div>
        </div>
    `
    document.querySelector(".cards-ecommerce").innerHTML = data;
});

const cartItems = document.querySelector(".items"); 
  let cartList = [];
  let cartData = "";

function cartFunction(){
cartItems.classList.toggle("items-active");
if(cartList.length === 0){
    document.querySelector(".listempty").innerHTML = "There is no items in the cart";
}else{
    cartList.map(function cardsFunction(items){
        cartData +=`
        <div class="" data-id="${items.id}">
                    <div class="cartstyle d-flex align-items-center justify-content-between">
                       <img src=${items.image} alt="">
                        <div><h6><span>${items.title}</span></h6>
                        <p>Price :- <span>${items.price}</span></p>   
                          <p class="rating">Rating :- <span>${items.rating.rate}</span></p>
                          </div>    
                          <i class="fa-solid fa-x" onclick="deleteButton(${items.id})"></i>
                    </div>
                </div>
            `
            document.querySelector(".listempty").innerHTML = cartData;
        });
}
};

function addToCart(id){
   const filterItem = cardsData.find(function findFunction(items){
        return items.id === id;
    });
    console.log(id);
    cartList.push(filterItem);
    console.log(cartList);
}


function deleteButton(id){
const deleteItems = document.querySelector(`[data-id="${id}"]`);
deleteItems.style.display = "none";
    const filterArray = cartList.filter(function filterFunction(items){
        return items.id !== id;
    });
    cartList = filterArray;
    console.log(cardsData);
};

// js dates..........


//  const date = new Date();
// console.log(date);

// console.log(new Date("10-12-2003"));

// console.log(new Date(2003,09,12,3,25,55,0));
// console.log(new Date(2003));
// console.log(new Date("2003"));
// console.log(new Date(2003,09,12));

// get methods...............
//   const d = new Date();
// console.log(d);




// /  find......
// const find = studata.find(function myFunction(data){
//   return data.age<20;
// });
// console.log(find);
// // foreach...............
// studata.forEach(function myFunction(data){
//   console.log(data.group);
// });


// const year = d.getFullYear();
// console.log(year);

// const array = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
// const month = array[d.getMonth()];
// console.log(month);

//  const month = d.getMonth();
//  console.log(month);

//  const date = d.getDate();
// console.log(date);

//  const day = d.getDay();
// console.log(day);
// const array = ["sun","mon","tue","wed","thu","fri","sat"];
//  const day = array[d.getDay()];
// console.log(day);

// const hours = d.getHours();
//  console.log(hours);

// const minutes = d.getMinutes();
//  console.log(minutes);

// const sec = d.getSeconds();
//  console.log(sec);

// const millisec = d.getMilliseconds();
//  console.log(millisec);

// set method.....
// const da = new Date();
// const year = da.setFullYear(2022);
// console.log(da);

// const month = da.setMonth(0);
// console.log(da);

// const date = da.setDate(29);
//  console.log(da);


// const hours = da.setHours(29);
//  console.log(da);


//  const minutes = da.setMinutes(29);
//   console.log(da);


//  const sec = da.setSeconds(29);
//   console.log(da);

//  const millisec = da.setMilliseconds(129);
//   console.log(da);

// math functions...........

// round()
// console.log(Math.round(4.5));
// console.log(Math.round(4.4));
// console.log(Math.round(4.9));
// console.log(Math.round(-4.9));
// console.log(Math.round(-4.4));

// ceil()
// console.log(Math.ceil(4.1));
// console.log(Math.ceil(4.6));
// console.log(Math.ceil(4.5));
// console.log(Math.ceil(-4.5));
// console.log(Math.ceil(-4.8));

// floor()
// console.log(Math.floor(4.7));
// console.log(Math.floor(4.5));
// console.log(Math.floor(4.2));
// console.log(Math.floor(-4.7));
// console.log(Math.floor(-4.1));

// trunc()
// console.log(Math.trunc(5.9));
// console.log(Math.trunc(9.9));
// console.log(Math.trunc(7.9));
// console.log(Math.trunc(-17.9));

// sign()
// console.log(Math.sign(-5.9));
// console.log(Math.sign(5.9));

// random()
// console.log(Math.random());
// console.log(Math.random()*4);
// console.log(Math.floor(Math.random()*9));

// // sqrt()
// console.log(Math.sqrt(400));
// console.log(Math.sqrt(625));

// abs()
// console.log(Math.abs(400));
// console.log(Math.abs(-400));
// console.log(Math.abs(-40.23420));

// pow()
// console.log(Math.pow(4,3));
// console.log(Math.pow(5,3));

// max()-min()
// const array = [65464676847788889999,52833333,55779890005789,788888888888889,8697968769,76478976966];
// console.log(Math.max.apply(null,array));
// console.log(Math.min.apply(null,array));

// settimeout setinterval ...methods

// setTimeout(function myFunction(){
//     console.log("hello world...!");
// },5000);

// setInterval(function myFunction(){
//     console.log("hello world...!");
// });

// setInterval(function myFunction(){
//     console.log("hello world...!");
// },2000);

// claer interval...
// const interval = setInterval(function myFunction(){
//     console.log("hello world...!");
// },1000);
// setTimeout(function myFunction(){
//     clearInterval(interval);
// },20000);

// const button = document.querySelector(".interval");
// setTimeout(function myFunction(){
//     button.innerText = "hello world...!";    
// },2000);

// const button = document.querySelector(".interval");
// const interval = setInterval(function myFunction(){
//     button.classList.toggle("interval-active");
// },2000);

// conditional statementa............

