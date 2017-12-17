function f() {
    if (isSuccess) return true
    else return false
}
// ->
function f() {
    return isSuccess
}

function someTask(args) {
    if (args.contains('0') || args.length == 0) {
        doSomething()
    } else {
        doSomethingElse()
    }
}
// ->
function someTask(booleanFlag) {
    !booleanFlag ? doSomething() : doSomethingElse()
}

var array = [];
for	(var i=0;i<N;i++)
    array[i]=i
if(getA()==12) array[5]=10;