
var fallDown = 50;  // ...gacha
var superContract = 65; // ...gacha
var contract = 80; // ...gacha
var budjet = 100; // 100 va ...gacha
var elForm = document.querySelector(".form-dtm");



    elForm.addEventListener('submit', function (evt) {
        evt.preventDefault();
        
        var input = parseFloat(elForm.querySelector('.input-js').value);
        console.log(typeof input);
        console.log(input);
        var elResult = document.querySelector(".result");
        var elResultBox =document.querySelector('.result-box');
        var elCheck = document.querySelector('.check-js').checked;
        elResultBox.classList.remove("bg-light");
        if (isNaN(input)) {
            elResult.textContent = 'Raqam kirit';
            elResultBox.classList.add("warning");
        }
        else if (input >= contract || elCheck) {
           elResult.textContent = 'Grant asosida o\'qishga qabul qilindingiz';
           elResultBox.classList.add("sucsess");
        } else if (input < contract && input >= superContract) {
        elResult.textContent = 'kontrakt asosida o\'qishga qabul qilindingiz';
        elResultBox.classList.add("warning");
        } else if (input < superContract && input >= fallDown) {
            elResult.textContent = 'super kontrakt asosida o\'qishga qabul qilindingiz';
            elResultBox.classList.add("warning");
        } else if (input < 0) {
            elResult.textContent = '0 va undan katta qiymat kiriting';
            elResultBox.classList.add("danger");
        } else {
            elResult.textContent = 'talabalikka tavsiya etilmadingiz';
            elResultBox.classList.add("danger");
        } 
    })



