const input = [1, -4, 12, 0, -3, 29, -150]


const t = input.filter(num => num > 0)
                .reduce((acc,curr)=> acc+ curr)                      
console.log(t)


