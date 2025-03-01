import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "@/redux/actions/booksActions";
import { Button, Grid, GridItem } from "@chakra-ui/react";


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
            <Grid templateColumns="repeat(4, 1fr)" gap={6} className="books-container">
                {books.map((book) => (
                    <GridItem key={book.id} p={4} boxShadow="md" borderRadius="md" textAlign={"center"} gap={4} >
                        <img src={book.coverImage} alt={book.title} />
                        <h3>{book.title}</h3>
                        <p>Author: {book.author}</p>
                        <Button>Want to Read</Button>
                    </GridItem>
                ))}
            </Grid>
        </div>
    );
};

export default Home;

