
import axios from "axios";
export const FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";


const FIREBASE_URL = "https://library-management-app-cb6e5-default-rtdb.firebaseio.com/books.json";

export const fetchBooks = () => async (dispatch) => {
    dispatch({ type: FETCH_BOOKS_REQUEST });

    try {
        const response = await axios.get(FIREBASE_URL);
        const booksData = response.data;

        const booksArray = Object.keys(booksData).map((id) => ({
            id,
            ...booksData[id],
        }));

        dispatch({ type: FETCH_BOOKS_SUCCESS, payload: booksArray });
    } catch (error) {
        dispatch({ type: FETCH_BOOKS_FAILURE, payload: error.message });
    }
};
