import { useGetBooks } from "../hooks/useGetBooks.hook"
import { BooksSwiper } from "./BooksSwiper";
import { Spinner } from "./Spinner";

const swipersBackgroundColors = [["#f6f6f6"], ["#202020", "#404040"], ["#f6f6f6"], ["#3e3e3e", "#2a2a2a"]];
export const categories = ['children', 'fiction', 'nonfiction', 'self_improvement'];

export const SwiperWrapper:React.FC = () => {
    const { books, loading, error } = useGetBooks();
    let content;
    if (loading) {
        content = <Spinner />
    }
    if (error) {
        content = <p>Something went wrong!</p>
    }
    if (books) {
        content = books.map((booksArr, index: number) => {
            return <BooksSwiper cat={categories[index]} backColor={swipersBackgroundColors[index]} books={booksArr.books} />
        })
    }
    return (
        <div className="swiperr ">
            {content}
        </div>
    )
}
