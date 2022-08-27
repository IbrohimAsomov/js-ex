const elForm = document.querySelector("#form");
const elSelect = document.querySelector("#select");
const elDough = document.querySelector("#dough");
const elLableFirst = document.querySelector("#lable-first");
const elLableSecond = document.querySelector("#lable-second");
const elLableThird = document.querySelector("#lable-third");
const elSize = document.querySelector("#pizza-size");
const elProduct = document.querySelector("#product_wrapper");
const elProductResult = document.querySelector("#result-list");
const elAttachments = document.querySelector("#attachments");
const elAttachmentsResult = document.querySelector("#attachments-result");

const result = [];
console.log(result);

const attachments = ["Acchiq", "Sosiskali"];

attachments.map(function (item) {
    const lable = document.createElement("label");
    lable.setAttribute("class", "d-flex align-content-center");
    lable.setAttribute("for", "check");
    
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.value.toLowerCase = item;
    lable.appendChild(input)

    const text = document.createElement("sapn");
    text.textContent = item;
    text.setAttribute("class", "ms-3");
    lable.appendChild(text);

    elAttachments.appendChild(lable);

    const newLi = document.createElement("li");
    newLi.textContent = item;
    
    elAttachments.addEventListener("click", function (e) {
        if (input.checked) {
            elAttachmentsResult.appendChild(newLi);
        } else {
        }
    })
})


const product = ["Pomidor", "Zaytun", "Kurka go'shti", "Tuzlangan bodring", "Qo'ziqorin", "Qazi",];
product.map(function(item) {
    const lable = document.createElement("label");
    lable.setAttribute("class", "d-flex align-content-center");
    lable.setAttribute("for", "check");
    
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.value.toLowerCase = item;
    lable.appendChild(input)
    
    const text = document.createElement("sapn");
    text.textContent = item;
    text.setAttribute("class", "ms-3");
    lable.appendChild(text);
    
    elProduct.appendChild(lable);
    
    const newLi = document.createElement("li");
    newLi.textContent = item;
    
    
    elProduct.addEventListener("click", function(e) {
        if (input.checked) {
            elProductResult.appendChild(newLi);
        }else {
        };
        
    });
    
});


elForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const selectValue = elSelect.value;
    elDough.textContent = selectValue;
    
});

elLableFirst.addEventListener("click", function (e) {
    e.preventDefault();
    const firstLable = elLableFirst.textContent;
    elSize.textContent = firstLable;
})

elLableSecond.addEventListener("click", function (e) {
    e.preventDefault();
    
    const lableText = elLableSecond.textContent;
    elSize.textContent = lableText;
    
})
elLableThird.addEventListener("click", function (e) {
    e.preventDefault();
    
    const lableText = elLableThird.textContent;
    elSize.textContent = lableText;
})
