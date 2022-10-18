function procuraMinMax(array){

    if (Array.isArray(array) && (array.length > 0)){
        if(array.length === 0){}
        let min = Number.MAX_VALUE;
        let max = Number.MAX_VALUE * -1;
        for (var i = 0; i<array.length; i++){
            if (array[i]<min){
                min = array[i];
            } 
            if(array[i]>max){ 
                max = array[i];
            }
        }
        console.log(`O valor mínimo é ${min} e o valor máximo é ${max}.`);
    } else {
        console.log("Não é possível encontrar")
    } 

}

let array1 = new Array();
array1 = [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47];
procuraMinMax(array1);

let array2 = new Array();
array2 = [];
procuraMinMax(array2);

let array3 = new Array();
array3 = [1];
procuraMinMax(array3);

let array4 = new Array();
array4 = [1, -1];
procuraMinMax(array4);

let array5 = new Array();
array5 = null;
procuraMinMax(array5);

let array6 = new Array();
array6 = [-2, -2, -2, -2];
procuraMinMax(array6);

let array7 = new Array();
array7 = [20, 10, 30];
procuraMinMax(array7);