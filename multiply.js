/*multiply 2 numbers without using * simbol */
const a = 2;
const b = +5;

const multiply = (a, b) => {
    let rdo = 0;
    for (let i = 0; i < Math.abs(b); i++) {
        if(b>0){
            rdo += a;
        }
        else{
            rdo -= a;
        }      
    }
    return rdo;    
    }
    console.log(multiply(a, b));