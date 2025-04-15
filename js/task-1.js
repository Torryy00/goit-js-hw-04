function slugify(title) {
    const words = title.split(' ');
    const lowerCaseWords = [];
    for (let i = 0; i < words.length; i++) {
        let split = words[i].toLowerCase();
        lowerCaseWords.push(split);
    }
    const finalResult = lowerCaseWords.join('-');
    return finalResult;
}
console.log(slugify("Arrays for beginners"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
