import BookList from "@/components/books/BookList";
import { getAllBooks } from "@/db/fakeData";

const BookListPage = () => {
  const books = getAllBooks();

  return <BookList books={books} />;
};

export default BookListPage;
