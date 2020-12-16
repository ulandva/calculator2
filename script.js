
{function plus() {
    var a, b, result;
    a = document.getElementById('num1').value;
    b = document.getElementById('num2').value;
    a = parseInt(a);
    b = parseInt(b);
    result = a + b;
    document.getElementById('out').innerHTML = result;
}

function minus() {
    var a, b, result;
    a = document.getElementById('num1').value;
    b = document.getElementById('num2').value;
    a = parseInt(a);
    b = parseInt(b);
    result = a - b;
    document.getElementById('out').innerHTML = result;
}

function umnojit() {
    var a, b, result;
    a = document.getElementById('num1').value;
    b = document.getElementById('num2').value;
    a = parseInt(a);
    b = parseInt(b);
    result = a * b;
    document.getElementById('out').innerHTML = result;
}

function razdelit() {
    var a, b, result;
    a = document.getElementById('num1').value;
    b = document.getElementById('num2').value;
    a = parseInt(a);
    b = parseInt(b);
    result = a / b;
    document.getElementById('out').innerHTML = result;
}
}

function sign() {
    var w;
    var y = document.getElementById("oper").value;


    switch (y) {
        case 'plus':
            w = plus();
            break;

        case 'minus':
            w = minus();
            break;

        case 'umnojit':
            w = umnojit();
            break;

        case 'razdelit':
            w = razdelit();
            break;

    }

}
