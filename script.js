const input = document.getElementById('email');
const btn = document.getElementById('submit');

btn.addEventListener("click", (e) => {
    if (input.value.length > 0) {
        var reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

        if (input.value.match(reg)) {
            e.preventDefault()
            input.value = '';
            alert("Thanks For Subscribing !");
            
        }

        else {
            e.preventDefault()  
            alert("Please enter a valid Email!");
            
        } 
    }

    else if (input.value === '' || input.value == null) {
        e.preventDefault()
        alert("Please enter your Email address!");
        
    }
});