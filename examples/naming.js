// Имена переменных должны быть осмысленными
var peremennaya = 1;
// ->
var number = 1;

var h = 24;
// ->
var hoursInDay = 24;


// Но перегибать палку не стоит
for (var elementIndex = 0; elementIndex < numberOfElements; elementIndex++) {
    doSomething(elements[elementIndex])
}
// ->
for (var i = 0; i < n; i++) {
    doSomething(elements[i])
}
