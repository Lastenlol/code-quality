function doSomething1() {
    var a = 0..10

    if (somethingWrong(a)) {
        fun1(a)
    }


    return a
}

function doSomething2() {
    var b = 0..10

    if (somethingWrong(a)) {
        fun2(b)
    }

    return b
}
// ->
function doSomething(range, handle) {
    if (somethingWrong(range)) {
        handle(range)
    }

    return range
}
