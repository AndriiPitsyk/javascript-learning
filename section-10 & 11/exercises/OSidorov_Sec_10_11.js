// Exercise 1:
// 1.
const promise = new Promise ((resolve) => {
    setTimeout(() => {
        resolve();
    }, 2000)
});
promise.then (() => {
    console.log('Hello, World!')
})
// 2.
const promise1 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve ('OK')
        } else {
            reject ('Something went wrong!')
        }
    }, 3000)
});
promise1.then ((response) => console.log(response)).catch((error) => {
    console.log(error);
})

// Exercise 2:
function asyncTask() {
    return new Promise((resolve, reject) => {
        // my code start
        setTimeout(() => {
            resolve ('Success!')
            }, 1000)
        // my code end
    });
}
asyncTask().then((result) => console.log(result));

// Exercise 3:
function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error('Division by 0 isn\'t allowed!');
        }
        return a / b;
    } catch (error) {
        console.log(error.message);
        return NaN;
    }
}
console.log(divideNumbers(10, 0));

// Exercise 4:
function multiplyByTwo(num) {
    return new Promise((resolve, reject) => {
        if (typeof num == 'number') {
            resolve(num * 2);
        } else {
            reject(new Error('Only numbers are allowed'));
        }
    });
}
multiplyByTwo(7).then((response) => console.log(response)).catch(err => console.log(err.message));

// Exercise 5:
console.log("Start");
try {
    let num = 10;
    console.log(num.toUpperCase());
} catch (error) {
    console.log('Skipped error:', error.message);
}
console.log("End");

// Exercise 6:
function getUserId() {
    return new Promise((resolve) => setTimeout(() => resolve(101), 1000));
}
function getUserDetails(id) {
    return new Promise((resolve) => setTimeout(() => resolve({ id, name: "Alice" }), 1000));
}
// getUserId()
//     .then((id) => getUserDetails(id))
//     .then((user) => console.log(user))
//     .catch(console.error);
async function getUserInfo(){
    try {
        const id = await getUserId();
        const user = await getUserDetails(id);
        console.log(user);
    } catch (error) {
        console.error(error);
    }
}
await getUserInfo();

// Exercise 7:
function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const newArray = users.map(user => ({
                id: user.id,
                name: user.name,
                email: user.email
            }));
            console.log(newArray);
        })
}

getUsers();

// Exercise 8:
async function getUsers1() {
    const response = await fetch ('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    const newArray = users.map (({ id, name, email }) => ({ id, name, email }));
    console.log(newArray);
}
getUsers1();

// Exercise 9:
// function fetchUserData() {
//     return fetch("https://jsonplaceholder.typicode.com/users/s")
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error("Failed to fetch user data");
//             }
//             return response.json();
//         })
//         .then(console.log)
//         .catch(console.error);
// }
// fetchUserData();
async function fetchUserData() {
    try {
        const response = await fetch ('https://jsonplaceholder.typicode.com/users/1')
        if (!response.ok) {
            throw new Error(`Failed to fetch user data`);
        }
        const user = await response.json();
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }
}
fetchUserData();