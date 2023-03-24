import axios from "axios";
import { useState, useEffect } from "react";
import { Book } from "../components/BooksSwiper";

export const useGetBookById = (id:number) => {
    const [bookInfo, setBookInfo] = useState<Book>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();
    useEffect(() => {
        const getCategories = async () => {
            try {
                setLoading(true)
                const response = await axios.get<Book>(`/books/book${id}.json`);
                if(response.status === 200){
                    setBookInfo(response.data)
                }
            } catch (err: any) {
                setError(err)
            }
            setLoading(false)
        }
        getCategories()
    }, [id])
    return { bookInfo, loading, error }
}