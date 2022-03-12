function capitalize(word) {
    if (word === undefined)
        throw new Error("word is required");
    return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}
console.log(capitalize("hello"));
