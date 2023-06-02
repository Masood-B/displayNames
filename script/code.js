// let addName = document.querySelector("#press1")
// let displayName = document.querySelector("#press2")
// let nameInput = document.querySelector("#display1")
// let output = document.querySelector("#list")
// let nameList = []

// // set or a local storage
// localStorage.setItem("names", JSON.stringify(nameList))

// addName.addEventListener("click", (e)=>{
//     e.preventDefault()
//     if(nameInput.value) {
//         nameList.push(nameInput.value)
//         nameInput.value = ""
//     }else {
//         nameInput.style = "outline: 3px solid red;"
//     }

//     // Update
//     localStorage.setItem("names", JSON.stringify(nameList))
// })

// displayName.addEventListener("click", ()=>{
//     nameList.forEach( (name)=> {
//         output.innerHTML += `
//             <li>${name}</li>
//         `
//     })
// })

let addName = document.querySelector("#press1")
let displayName = document.querySelector("#press2")
let nameInput = document.querySelector("#display1")
let output = document.querySelector("#list")
let nameList = []

addName.addEventListener("click", (e)=>{
    e.preventDefault()
    if(nameInput.value) {
        nameList.push(nameInput.value)
        nameInput.value = ""
    }else {
        nameInput.style = "outline: 3px solid red;"
    }

    // Update
    localStorage.setItem("names", JSON.stringify(nameList))
})

displayName.addEventListener("click", (event)=>{
    event.preventDefault()
    nameList = JSON.parse(localStorage.getItem("names"))
    nameList.forEach( (name)=> {
        output.innerHTML += `
            <li>${name}</li>
        `
    })
})


