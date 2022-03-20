
const callbackFunction = strg => `${strg}`

function receivesAFunction(callbackFunction) {
    callbackFunction("I am the callback function");
}

function returnsANamedFunction() {
    return callbackFunction;
}

function returnsAnAnonymousFunction(){
    return function (){
        console.log("I am anonymous")
    }
}