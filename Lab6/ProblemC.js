function printNumbers(from, to) {
    let timer = setInterval(() => {
        if (from <= to)
            document.getElementById("Number").innerHTML= from++;
        else{
            document.getElementById("Number").classList.add("blink");
            clearTimeout(timer);
        }
            
    }, 1000);
}

