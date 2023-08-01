// 4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
// Write a program that takes a list of books, including their authors and publication years as input. The program
// should then filter out all books that were published before 2010 and create a new array with the remaining
// books, but with their author names capitalized.

function filterAndCapitalizeBooks(books) {
     const newBooks = [];
     for (const book of books) {
       const [author, publicationYear] = book;
       if (publicationYear >= 2010) {
         newBooks.push([author.toUpperCase(), publicationYear]);
       }
     }
     return newBooks;
   }
   
   // Sample input list of books [author, publicationYear]
   const books = [
     ["John Smith", 2009],
     ["Jane Doe", 2010],
     ["Bill Jones", 2008],
     ["Mary Johnson", 2015]
   ];
   
   const newBooks = filterAndCapitalizeBooks(books);
   console.log(newBooks);