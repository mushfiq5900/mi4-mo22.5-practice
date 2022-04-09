function paperRequirement(book1, book2, book3) {
    let book1Page = book1 * 100;
    let book2Page = book2 * 200;
    let book3Page = book3 * 300;
    let totalPage = book1Page + book2Page + book3Page;
    return totalPage;
}

let pageCounted = paperRequirement(1, 2, 3);
console.log("Total Page Count:", pageCounted);