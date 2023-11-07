function printNumbers(from, to) {
    let timer = setInterval(() => {
        if (from != to)
            console.log(++from);
        else
            clearTimeout(timer);
    }, 1000);
}

printNumbers(10, 20);

