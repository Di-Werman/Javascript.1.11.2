// Перепишите функцию checkAndLogAge таким образом, чтобы:
// 1. В консоли можно было определить что это за объект (человек или машина)
// 2. Мы могли сами определять с каким возрастом сравнивать (не только 10 лет, но 
//     и любой другой возраст), причем это должно быть отображено в консоли

var carName = 'Ford'
var carYear = 2018
var personYear = 1990

function calculateAge (year) {
    var currentYear = 2023
    var result = currentYear - year
    return result
}

function checkAndLogAge (year, name, compareTo)  {
    if (calculateAge(year) < compareTo) {
        console.log('Возраст ' + name + ' меньше ' + compareTo + ' лет')
    } else {
        console.log('Возраст ' + name + ' больше ' + compareTo + ' лет')
    }
}

checkAndLogAge(carYear, 'машины ', 8)
checkAndLogAge(personYear, 'человека', 30)   