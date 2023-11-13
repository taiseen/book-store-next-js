import Book from "./Book";

const BookList = ({ books }) => {
  return (
    <>
      {books.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </>
  );
};

export default BookList;
