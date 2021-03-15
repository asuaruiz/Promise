// const p = Promise.resolve({id:1});
// p.then(result => console.log(result));

// const q = Promise.reject(new Error ('Reason for rejection...'));
// p.catch(err => console.log(err));

const p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('Parallel Promise 1....');
        //reject(new Error('Something went wrong...'))
        resolve(1);
    },2000)
});

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Parallel Promise 2....');
        resolve(2);
    },2000)
});
Promise.all([p1,p2])
    .then(result => console.log(result));   
    //.catch(err => console.log ('Error', err.message))


// if one of the two promises its rejected,, the array of all promises with be rejected too.