
var fallDown = 50;  // ...gacha
var superContract = 65; // ...gacha
var contract = 80; // ...gacha
var budjet = 100; // 100 va ...gacha
var elForm = document.querySelector(".form-dtm");

var input = elForm.querySelector('.input-js');
var elResult = document.querySelector(".result");
var elResultBox =document.querySelector('.result-box');
var elCheck = document.querySelector('.check-js');


elForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var checked = elCheck.checked;
    var score = parseFloat(input.value);
    var message;
    elResultBox.classList.remove("bg-light", "sucsess", "warning", "danger");


        if (score >= contract && score <= 100 || checked) {
            message = 'Grant asosida o\'qishga qabul qilindingiz';
            elResultBox.classList.add("sucsess");
        
         } else if (isNaN(score)) {
            message = 'Raqam kirit';
            elResultBox.classList.add("warning");
        }
        else if (score < contract && score >= superContract) {
        message = 'kontrakt asosida o\'qishga qabul qilindingiz';
        elResultBox.classList.add("warning");
        } else if (score < superContract && score >= fallDown) {
            message = 'super kontrakt asosida o\'qishga qabul qilindingiz';
            elResultBox.classList.add("warning");
        } else if (score < 0) {
            message = '0 va undan katta qiymat kiriting';
            elResultBox.classList.add("danger");
        } else if (score > 100) {
            message = '100 eng yuqori ball';
            elResultBox.classList.add("danger");
        }else {
            message = 'talabalikka tavsiya etilmadingiz';
            elResultBox.classList.add("danger");
        } 
        elResult.textContent = message;
    })



