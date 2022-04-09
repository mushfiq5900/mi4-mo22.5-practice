function bestFriend(nameInput) {
    let checker = '';
    for (names of nameInput) {
        if (checker.length < names.length) {
            checker = names;
        }
    }
    return checker;
}

let friends = ['abid', 'evan', 'bidhan paul', 'opu', 'sishir', 'riaz', 'rafi'];
let output = bestFriend(friends);
console.log("Largest name wala friend is:", output);