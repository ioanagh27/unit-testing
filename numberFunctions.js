//Function

const getLargest = (a, b, c) => {

    if (a && b && c) {
        return Math.max(a, b, c);
    } else {
        throw "Error: all inputs must have a value"
    }
    
}

const getSmallest = (a, b, c) => {

    if (a && b && c) {
        return Math.min(a, b, c);
    } else {
        throw "It throws an error if one of the three inputs is undefined"
    }
    
}
//Export the function

module.exports ={ 
    getLargest,
    getSmallest
};
