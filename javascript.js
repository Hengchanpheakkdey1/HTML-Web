
// const arr = ["apple", "mango", "banana", "orange"] // start from 0
// // console.log(arr[0])

// // =, ==, ===

// let isLogin = true

// // if (!isLogin) { // !true -> false
// //     console.log("You are not login yet")
// // } else {
// //     console.log("You have been login")
// // }

// // isLogin ? "You have been logined" : "You not login yet"

// let x = 0

// // console.log(x++) // x = x + 1 -> value = 0
// // console.log(x) // x = 1
// // console.log(++x) // x = x + 1


// const fruits = "banana";

// // switch (fruits) {
// //     case "apple":
// //         console.log("It's an apple");
// //         break;
// //     case "banana":
// //         console.log("It's a banana");
// //         break;
// //     case "mango":
// //         console.log("It's a mango");
// //         break;
// //     default:
// //         console.log("Unknown fruit");
// // }

// let a = 10;
// let b = 20;

// function Sum(a, b) {
//     let sum = a + b
//     // console.log(sum)
//     return sum;
// }

// let result = Sum(a, b)
// console.log(result)

// const Greeting = (name = "User") => {
//     return `Hello, ${name}! Welcome to JavaScript!`;
// };


// let greetingMessage = Greeting("Alice");
// console.log(greetingMessage)

// let title = document.getElementById("title");
// console.log(title);



// console.log("1")
// console.log("2")
// console.log("3")

// console.log("1")
// setTimeout(() => {
//     console.log("2")
// }, 5000)
// console.log("3")

async function fetchData() {
    try {
        const response = await fetch("https://fakestoreapi.com/products") // request 
        if (response.ok) {
            const data = await response.json() // parsing response to json
            console.log(data)
        }

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData()
