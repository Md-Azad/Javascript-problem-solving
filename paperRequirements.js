/*
1.first book required 100 pages per book.
2. second book required 200 pages per book.
3. third book required 300 pages per book.

*/

function paperRequirements (firstBook, secondBook, thirdBook){
    let totalFirstBookPages = firstBook*100;
    let totalSecondBookPages = secondBook*200;
    let totalThirdBookPages = thirdBook*300;

    let totalPagesRequired = totalFirstBookPages + totalSecondBookPages+totalThirdBookPages;
    return totalPagesRequired;
}

const totalPages = paperRequirements(1,2,3);
console.log(`Total ${totalPages} pages required for your all the books.`);