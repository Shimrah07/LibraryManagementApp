import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "@/redux/actions/booksActions";

const Home = () => {
    const dispatch = useDispatch();
    const { books, loading, error } = useSelector((state) => state.books);

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error: {error}</h2>;

    return (
        <div>
            <h1>Available Books</h1>
            <div className="books-container">
                {books.map((book) => (
                    <div key={book.id} className="book-card">
                        <img src={book.coverImage} alt={book.title} />
                        <h3>{book.title}</h3>
                        <p>Author: {book.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;

