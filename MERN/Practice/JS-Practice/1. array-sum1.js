// array sum

function arr() {
    var myArr = [1, 2, 3, 4, 5]
    var sum = 0

    for (var i = 0; i < myArr.length; i++){
        // console.log(i)
        sum += myArr[i]    
    }
    console.log(sum)
}
arr()