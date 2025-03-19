/*
Exercise 1:
1. Create a Promise that resolves with "Hello, World!" after 2 seconds and print the message.
2. Create a Promise that rejects with an error "Something went wrong!" after 3 seconds. Handle the error using .catch().
*/

/*
Exercise 2:
Modify the following code so that it returns "Success!" after 1 second and print the result;
*/

function asyncTask() {
    return new Promise((resolve, reject) => {
        // Your code here
    });
}

asyncTask().then((result) => console.log(result));

/*
Exercise 3:
Write a function divideNumbers(a, b) that returns the result of a / b. If b is 0, throw an error and catch it using try...catch.
*/

/*
Exercise 4:
Create a function multiplyByTwo(num) that returns a Promise. If num is not a number, reject the Promise; otherwise,
resolve it by doubling num.
*/

/*
Exercise 5:
Wrap the following code in a try...catch block so that it does not stop execution when an error occurs.
*/

console.log("Start");
// Your code is here
let num = 10;
console.log(num.toUpperCase()); // This will cause an error

console.log("End");

/*
Exercise 6:
Rewrite the following chained Promises to use async/await
*/

function getUserId() {
    return new Promise((resolve) => setTimeout(() => resolve(101), 1000));
}

function getUserDetails(id) {
    return new Promise((resolve) => setTimeout(() => resolve({id, name: "Alice"}), 1000));
}

getUserId()
    .then((id) => getUserDetails(id))
    .then((user) => console.log(user))
    .catch(console.error);

/*
Exercise 7:
Write a function where you will:
Fetch list of users from website https://jsonplaceholder.typicode.com/users, from returned list of users you
should create a new array of objects which should contain *id*, *name*, *email* only.
Hint: User map method;
*/

/*
Exercise 8:
Rewrite solution from exercise 7 to async/await flow;
*/

/*
Exercise 9:
Modify the function below to use async/await and handle errors properly.
*/

function fetchUserData() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch user data");
            }
            return response.json();
        })
        .then(console.log)
        .catch(console.error);
}

fetchUserData();
