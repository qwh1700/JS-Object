var user = {}
user.name = 'John'
user.surname = 'Mike'
user.name = 'Peter'
delete user.name

var fruit = {
    apple: 20,
    pear: 20,
    peach: 10,
}
var num = 0
for (var i in fruit) {
    num += fruit[i]
}
