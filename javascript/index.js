console.log('start');

setTimeout(function() {
    console.log('setTimeOut')
}, 0)

Promise.resolve()
.then(function() {
    console.log("promise1")
})
.then(function() {
    console.log("promise2")
})

console.log("script end")