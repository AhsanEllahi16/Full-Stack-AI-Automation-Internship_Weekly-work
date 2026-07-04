let a = 100;

function one() {
    let b = 200;

    function two() {
        let c = 300;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    two();
}

one();