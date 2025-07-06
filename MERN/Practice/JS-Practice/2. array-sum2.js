function arr () {
    var myArr = [13, 22, 211, 45, 3, 8]
    var max = myArr[0]
    for (var i = 0; i < myArr.length; i++) {
        if (myArr[i] > max) {
            max = myArr[i]
        }
    }
    console.log(max)

}
arr()

