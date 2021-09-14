
var fallDown = 50;
var superContract = 65;
var contract = 80;
var budjet = 100;
var elForm = document.querySelector(".form-dtm");
var elResult = document.querySelector(".result")
var elCheck = document.querySelector('.check-js');


    elForm.addEventListener('submit', function (evt) {
        evt.preventDefault();
        
        var input = elForm.querySelector('.input-js').value;
       
        if (elCheck.checked) {
            elResult.textContent = 'imtiyozli talaba';
        } 
        else if (input < fallDown) {
            elResult.textContent = 'talabalikka tavsiya etilmadingiz';
        } 
        else if (input < superContract) {
            elResult.textContent = 'super kontrakt asosida o\'qishga qabul qilindingiz';
        }
        else if (input < contract) 
        {
            elResult.textContent = 'kontrakt asosida o\'qishga qabul qilindingiz';
        }
        else  {
            elResult.textContent ='grant asosida o\'qishga qabul qilindingiz'
        }
       
    })



