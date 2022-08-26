const product = {
    plainBurger: {
        name: "Гамбургер Простой",
        price: 10000,
        calory: 400,
        amount: 0,
        get Summ () {
            return this.amount * this.price;
        },
        get Calory(){
            return this.amount * this.calory;
        }
    },
    freshBurger: {
        name: "Гамбургер Фреш",
        price: 20500,
        calory: 500,
        amount: 0,
        get Summ () {
            return this.amount * this.price;
        },
        get Calory(){
            return this.amount * this.calory;
        }
    },
    freshCombo: {
        name: "Фреш Комбо",
        price: 31900,
        calory: 700,
        amount: 0,
        get Summ () {
            return this.amount * this.price;
        },
        get Calory(){
            return this.amount * this.calory;
        }
    },
}

const extraProduct = {
    doubleMayonnaise: {
        name: "Двойной майонез",
        price: 500,
        calory: 50
    },
    lettuce: {
        name: "Салатный лист",
        price: 300,
        calory: 10
    },
    cheese: {
        name:  "Сыр",
        price: 400,
        calory: 30
    },
}

const btnPlusOrMinus = document.querySelectorAll(".main__product-btn");

for (let i = 0; i < btnPlusOrMinus.length; i++) {
    btnPlusOrMinus[i].addEventListener("click", function () {
       plusOrMinus(this);
    })
}

function plusOrMinus(element) {
    const parent = element.closest(".main__product");
    const parentId = parent.getAttribute("id");
    const out = parent.querySelector(".main__product-num");
    const price = parent.querySelector(".main__product-price span");
    const calory = parent.querySelector(".main__product-kcall span");
    const elementData = element.getAttribute("data-symbol");
    
    if (elementData == "+" && product[parentId].amount < 10) {
        product[parentId].amount++;
    } else if(elementData == "-" && product[parentId].amount > 0){
        product[parentId].amount--;
    }
    
    out.innerHTML = product[parentId].amount;
    price.innerHTML = product[parentId].Summ;
    calory.innerHTML = product[parentId].Calory;
} 

const checkExtraProduct = document.querySelectorAll('.main__product-checkbox');
checkExtraProduct.forEach(check =>{
    check.addEventListener("click",  function () {
        const parent = this.closest(".main__product");
        const parentId = parent.getAttribute("id");
        const price = parent.querySelector(".main__product-price span");
        const kcall = parent.querySelector(".main__product-kcall span");
        const elAtr = this.getAttribute("data-extra");
        
        product[parentId].elAtr = this.checked;
        
        if (product[parentId].elAtr == true) { 
            product[parentId].price += extraProduct[elAtr].price;
            product[parentId].calory += extraProduct[elAtr].calory;
            
        }else{
            product[parentId].price -= extraProduct[elAtr].price;
            product[parentId].calory -= extraProduct[elAtr].calory;
        }
        price.innerHTML = product[parentId].Summ;
        kcall.innerHTML = product[parentId].Calory;
        
    })
})