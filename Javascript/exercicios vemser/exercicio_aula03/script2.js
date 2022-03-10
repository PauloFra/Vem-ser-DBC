// function arrayCrescente(arr){
//     return arr.sort();
// }
// console.log(arrayCrescente([4, 5, 7, 3, 0, 5, 2, 2]));

// function arrayAjuste(arr){
//     let arrayCrescente = [];
//     for(i= 0;i <= arr.length; i++){
//         if(arr[i+1] > arr[i]){
//             arrayCrescente[i] = arr[i+1];
//         }else if (arr[i+2] > arr[i+1]){
//             arrayCrescente[i]= arr[i+2];
//         }else if(arr[i+3] > arr[i+2]){
//             arrayCrescente[i] = arr[i+3]
//         }
//         else if(arr[i+4] > arr[i+3]){
//             arrayCrescente[i] = arr[i+4]
//         }
//         else if(arr[i+5] > arr[i+4]){
//             arrayCrescente[i] = arr[i+5]
//         }
//         else{
//             arrayCrescente[i] = arr[i];
//         }
//     }
//     alert(arrayCrescente)
// }
arrayAjuste([4, 5, 7, 3, 0, 5, 2, 2]);