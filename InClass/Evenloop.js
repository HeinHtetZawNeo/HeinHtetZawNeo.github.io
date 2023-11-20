setTimeout(() => {
    console.log('X');
});
setTimeout(() => {
    console.log('X');
    process.nextTick(() => {
        console.log('X');
        new Promise(resolve => resolve(4)).then((data) => {
            console.log('X');
            process.nextTick(() => {
                console.log('X');
            });
        });
    });
});
setTimeout(() => {
    console.log('X');
});

new Promise(resolve => resolve(1)).then((data) => {
    console.log('X');
});

new Promise(resolve => resolve(2)).then((data) => {
    console.log('X');
    process.nextTick(() => {
        console.log('X');
    });
});

new Promise(resolve => resolve(3)).then((data) => {
    console.log('X');
});

process.nextTick(() => {
    console.log(1);
});

process.nextTick(() => {
    console.log('X');
});