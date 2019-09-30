const array = ['Hello', 'World', '!!!']

console.log(array[1]) // World
console.log(array.length)// 3
array.forEach((item, index, array) => {
  console.log(`item: ${item}, idx: ${index}, array: ${array}`)
  // item: Hello, idx: 0, array: Hello,World,!!!
  // item: World, idx: 1, array: Hello,World,!!!
  // item: !!!, idx: 2, array: Hello,World,!!!
})
console.log(array.indexOf('!!!')) // 2
console.log(array.indexOf('python')) // -1
