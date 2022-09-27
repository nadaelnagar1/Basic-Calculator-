function EnterNumber(val){

    document.getElementById('Answer').value += val

    return val

}

function EnterEqual(){

    let x = document.getElementById('Answer').value

    let y = eval(x);

    document.getElementById('Answer').value = y

    return y

}

function EnterClear(){

    document.getElementById('Answer').value = ''

}

function EnterOperator(val){

    document.getElementById('Answer').value += val

    return val
}