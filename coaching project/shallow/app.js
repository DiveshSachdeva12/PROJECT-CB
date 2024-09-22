let obj={
    name:"divesh",
    address:{
        country:'argentina'
    }
}
console.log(obj)


// esse kehte hai shallow copy 
// 1st top level property tak change hoga uske bad by refrnce jayega..

// let shallowcopy={...obj}
// shallowcopy.name="tashu"
// shallowcopy.address.country='portugal'
// console.log(shallowcopy)

// deep copy

// let deepCopy = JSON.parse(JSON.stringify(obj));

// deepCopy.name="tashu"
// deepCopy.address.country='portugal'

// console.log(deepCopy)