import BookImg from "@/components/books/BookImg";
import { getBookById } from "@/db/fakeData";

const BookDetailsPage = ({ params: { id } }) => {
  const book = getBookById(id);
  // console.log(book);

  return (
    <div>
      <h2>{book?.title}</h2>
      <BookImg img={book?.cover} title={book?.title} />
    </div>
  );
};

export default BookDetailsPage;
