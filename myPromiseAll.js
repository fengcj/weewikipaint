const success = Promise.resolve('Resolved');
// Will print "Successful result: Resolved"
success.
    then(result => console.log(`Successful result: ${result}`)).
    catch(e => console.log(`Failed with: ${e}`))

console.log("first");


const fail = Promise.reject('Err');
// Will print "Failed with: Err"
fail.
    then(result => console.log(`Successful result: ${result}`)).
    catch(e => console.log(`Failed with: ${e}`))

console.log("second");



// If the async function does not handle an exception, 
// whether it is caused by a rejected promise or another bug, it will return a rejected promise:
async function f() {
    // Throws an exception
    const promiseResult = await Promise.reject('Error');
}

// Will print "Error"
f().
    then(() => console.log('Success')).
    catch(err => console.log(err))

async function g() {
    throw "Error";
}

// Will print "Error"
g().
    then(() => console.log('Success')).
    catch(err => console.log(err))




let all = (array) => {

    let count = array.length;
    let res = [];
    let handler = (r, i, resolve) => {
        res[i] = r;
        count--;
        if (count === 0) {
            resolve(res);
        }
    }
    return new Promise((resolve, reject) => {

        array.forEach((promise, i) => {
            promise.then((r) => {
                handler(r, i, resolve);
            });
        });
    });
}