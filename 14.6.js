let book = [
    {
        id: 1,
        name: "Sapiens",
        author: "Yuval Noah Harari",
        year: 2011
    },
    {
        id: 2,
        name: "1984",
        author: "George Orwell",
        year: 1949
    },
    {
        id: 3,
        name: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
    }
];

let choice = prompt(
    "1. Add Book\n" +
    "2. View Books\n" +
    "3. Search Book\n" +
    "4. Delete Book\n" +
    "5. Exit"
);

let loop = true;

while (loop === true) {
    switch (choice) { 
        case "1":
            let newBookName = prompt("Enter book name:");
            let newBookAuthor = prompt("Enter book author:");
            let newBookYear = prompt("Enter book year:");
            if (newBookName && newBookAuthor && newBookYear) {
                let newBook = {
                    id: book.length + 1,
                    name: newBookName,
                    author: newBookAuthor,
                    year: +newBookYear
                };
                book.push(newBook);
                alert("Book added successfully.");
            }
            else {
                alert("All fields are required.");
            }
            break;
        case "2":
            if (book.length > 0) {
                alert (
                    "Book List:\n" +
                    book.map(b => `ID: ${b.id}, Name: ${b.name}, Author: ${b.author}, Year: ${b.year}`).join("\n")
                );
            }
            else {
                alert("No books available.");
            }
            break;
        case "3":   
            let searchBook = prompt("Enter book name to search:");
            let foundBooks = book.filter(b => b.name.toLowerCase().includes(searchBook.toLowerCase()));
            if (foundBooks.length > 0) {
                for (let index in foundBooks) {
                    alert ('ID: ' + foundBooks[index].id + '\n' +
                    'Name: ' + foundBooks[index].name + '\n' +
                    'Author: ' + foundBooks[index].author + '\n' +
                    'Year: ' + foundBooks[index].year
                    )
                }
            } else {
                alert("No books found with that name.");
            }
            break;
        case "4":
            let deleteBooks = +prompt("Enter the ID of the book to delete:");
            if (deleteBooks > 0 && deleteBooks <= book.length ) {
                book.splice(deleteBooks - 1, 1);
                alert("Book deleted successfully.");
                alert (
                    "Updated Book List:\n" +
                    book.map(b => `ID: ${b.id}, Name: ${b.name}, Author: ${b.author}, Year: ${b.year}`).join("\n")
                )
                }
            else {
                alert("Invalid book ID.");
            }
            break;
        case "5":
            alert("Exiting the program.");
            loop = false;
            break;  
        default:
            alert("Invalid choice. Please try again.");
            break;
        } 
}


       