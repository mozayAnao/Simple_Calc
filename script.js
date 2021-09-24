const nums = document.querySelectorAll(".num")
const display = document.querySelector(".value1")

for ( let num of nums) {
num.addEventListener("click", function(event) {
    let value = num.innerText;
    if (value === "c") {
        display.value = ""
    } else if (value === "=") {
        
        display.value = eval(display.value) 
        if (isNaN(parseInt(display.value))) {
            display.value = "0"
        }
    }
    
    else {
            display.value = display.value + value;
    }    
})
}



// {/* <span class="num clear" onclick="document.calc.txt.value =''">c</span> */}

// {/* <span class="num equal" onclick="document.calc.txt.value = eval(document.calc.txt.value)">=</span> */}
