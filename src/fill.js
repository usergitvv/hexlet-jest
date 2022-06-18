export default (coll, value, start = 0, end = coll.length) => {
    if (coll.length === 0 || start > coll.length - 1) return coll;
    const sign = [];    
    let amountOfValue = end - start;
    if (end > coll.length) amountOfValue = coll.length - start;
    for (let i = 0; i < amountOfValue; i += 1 ) {
        if (i >=  coll.length) break;
        sign.push(value);
    }    
    coll.splice(start, amountOfValue, ...sign);    
    return coll;
};
