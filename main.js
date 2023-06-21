let cardsData =[{id:1,title:"Jeans",price:1000.20,description:"casual mens wear jeans",image:"/assets/jeans.webp",rating:{rate:4.2,count:100}},
{id:2,title:"shirts",price:640.12,description:"fashion mens wear shirts",image:"/assets/shirt.webp",rating:{rate:4.4,count:120}},
{id:3,title:"lehangas for women",price:2000.57,description:"different styles lehanga along duppattta",image:"/assets/lehangas.jpg",rating:{rate:4.0,count:200}},{id:4,title:"kurtis for women",price:800.12,description:"occasional wear beautifull kurtis",image:"/assets/kurtis.webp",rating:{rate:4.1,count:120}},{id:5,title:"sarees",price:2500.12,description:"trendy sarees",image:"/assets/saree.jpg",rating:{rate:3.9,count:80}},{id:6,title:"T-shirts",price:500.12,description:"beautiful westernwear t-shirts",image:"/assets/t-shirts.jpg",rating:{rate:4.0,count:150}},{id:7,title:"north indian dresses",price:700.12,description:"fashion north indian style",image:"/assets/northindian.jpg",rating:{rate:5.0,count:180}},{id:8,title:"dhuppata",price:640.12,description:"different style dhuppatas",image:"/assets/dupatas.jpg",rating:{rate:4.0,count:120}}];

let data = "";
cardsData.map(function cardsFunction(items){
    data += `
        <div class="col-lg-4" data-id="${items.id}">
            <div class="cards-product">
                <img src=${items.image} alt="">
                <h4>Title :- <span>${items.title}</span></h4>
                <h6>Price :- <span>${items.price}</span></h6>   
                <h6>Rating :- <span>${items.rating.rate}</span></h6>    
                <h6>Count :- <span>${items.rating.count}</span></h6>
                <button onclick = "deleteButton(${items.id})">Delete</button>
                    
            </div>
        </div>
    `
    document.querySelector(".cards-ecommerce").innerHTML = data;
});

function deleteButton(id){
    const deleteItems = document.querySelector(`[data-id="${id}"]`);
    deleteItems.style.display = "none";
    const filterArray = cardsData.filter(function filterFunction(items){
        return items.id !== id;
    });
    cardsData = filterArray;
    console.log(cardsData);
};
     const cartItems = document.querySelector(".items"); 
function cartFunction(){
cartItems.classList.toggle("items-active");
};