//Exercise 1:
// 1. Create a Promise that resolves with "Hello, World!" after 2 seconds and print the message.

const promiseOne = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Hello World!');
    }, 2000);
});
promiseOne.then((message) => {
    console.log(message);
})
// 2. Create a Promise that rejects with an error "Something went wrong!" after 3 seconds. Handle the error using .catch().
const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Something went wrong!');
    }, 3000);
});

promiseTwo.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
})

//Exercise 2:
// Modify the following code so that it returns "Success!" after 1 second and print the result;
function asyncTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Success!');
        })
    });
}

asyncTask().then((result) => console.log(result));

//Exercise 3:
// Write a function divideNumbers(a, b) that returns the result of a / b. If b is 0, throw an error and catch it using try...catch.
function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("B is zero");
    }
    return a / b;
}

try {
    const divided = divideNumbers(50, 10)
    console.log(`Divided result is  ${divided}`);
} catch (error) {
    console.log(error.message);
}


//Exercise 4:
// Create a function multiplyByTwo(num) that returns a Promise. If num is not a number, reject the Promise; otherwise,
// resolve it by doubling num.

function multiplyByTwo(num) {
    return new Promise((resolve, reject) => {
        if (typeof num !== 'number') {
            reject("Type should be a number");
        } else {
            resolve(num * 2);
        }
    })
}

multiplyByTwo(2).then((result) => {
    console.log(result);
}).catch(error => {
    console.log(error);
})

//Exercise 5:
// Wrap the following code in a try...catch block so that it does not stop execution when an error occurs.
console.log("Start");
try {
    let num = 10;
    console.log(num.toUpperCase());
} catch (error) {
    console.log(error.message);
}
console.log("End");

//Exercise 6:
// Rewrite the following chained Promises to use async/await

function getUserId() {
    return new Promise((resolve) => setTimeout(() => resolve(101), 1000));
}

function getUserDetails(id) {
    return new Promise((resolve) => setTimeout(() => resolve({id, name: "Alice"}), 1000));
}

async function getUsers() {
    try {
        const id = await getUserId();
        const user = await getUserDetails(id);
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

getUsers().then();

//Exercise 7:
// Write a function where you will:
// Fetch list of users from website https://jsonplaceholder.typicode.com/users, from returned list of users you
// should create a new array of objects which should contain *id*, *name*, *email* only.
// Hint: User map method;

function usersFromWebsiteOne() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => {
        if (response.status !== 200) {
            throw new Error("Users not found");
        }
        return response.json();
    }).then(users => {
        const usersArray = users.map(user => ({
            id: user.id, name: user.name, email: user.email,
        }));
        console.log(usersArray);
    }).catch(Error => {
        console.log(Error.message);
    })

}

usersFromWebsiteOne()

//Exercise 8:
// Rewrite solution from exercise 7 to async/await flow;

async function usersFromWebsiteTwo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    if (response.status !== 200) {
        throw new Error("Users not found");
    }
    const users = await response.json();

    const usersArray = users.map(user => ({
        id: user.id, name: user.name, email: user.email,
    }));
    console.log(usersArray);
}

usersFromWebsiteTwo().catch(Error => {
    console.log(Error.message);
})

//Exercise 9:
// Modify the function below to use async/await and handle errors properly.
async function fetchUserData() {
        const response = await fetch("https://jsonplaceholder.typicode.com");

        if (response.status !== 200) {
            throw new Error("Failed to fetch user data");
        }

        const userData = await response.json();
        console.log(userData);
}

fetchUserData().catch((error) => {
    console.log(error.message);
})