let divResult = document.querySelector('#result');
let txtNum = document.querySelector('#txt_num');
let txtNum1 = document.querySelector('#txt_num1');
let txtNum2 = document.querySelector('#txt_num2');
let txtNum3 = document.querySelector('#txt_num3');

function exe_33() {
    let num = parseFloat(txtNum.value);
    let raiz = Math.sqrt(num);
    divResult.innerHTML = `A raiz quadrada de no número ${num} é ${raiz}`;
}

function exe_34() {
    let num = parseFloat(txtNum.value);
    let raizQ = Math.sqrt(num);
    let raizC = Math.cbrt(num);
    divResult.innerHTML = `Ao número digitado foi ${num} <br>
    Sua raiz cúbica é ${raizC} <br>
    Sua raiz quadrada é ${raizQ}`;
}

function exe_35() {
    let num = parseFloat(txtNum.value);
    let e2 = Math.pow(num, 2);
    let e3 = Math.pow(num, 3);
    let e4 = Math.pow(num, 4);
    let e5 = Math.pow(num, 5);
    divResult.innerHTML = `O número digitado foi ${num} E seu valor elevado a 2 é ${e2}, elevado a 3 é ${e3}, elevado a 4 é ${e4} e elevado a 5 é ${e5}.`;
}

function exe_36(){
    let num1 = parseFloat(txtNum.value);
    let num2 = parseFloat(txtNum1.value);
    let num3 = parseFloat(txtNum2.value);
    let num4 = parseFloat(txtNum3.value);

    let media = (num1 + (num2 * 2) + (num3 * 3) + (num4 * 4)) / 10
    divResult.innerHTML = `A média final é ${media}`;

}

function exe_37() {
    let raio = parseFloat(txtNum.value);
    let area = Math.PI * Math.pow(raio,2);
    let perimetro = Math.PI * 2 * raio;
    divResult.innerHTML = `A área da circunferência é igual a ${area}<br>
    E o perímetro igual a ${perimetro}.`;
}