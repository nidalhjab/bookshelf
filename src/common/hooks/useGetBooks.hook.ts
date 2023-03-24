import axios from "axios";
import { useEffect, useState } from "react";
import { Book, BooksCat } from "../components/BooksSwiper";
import { categories } from "../components/SwiperWrapper";

export const useGetBooks = () => {
    const [books, setBooks] = useState<BooksCat[]>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();
    useEffect(() => {
        const getCategories = async () => {
            try {
                setLoading(true)
                const promises = categories.map(async (cat: string) => {
                    return await axios.get<BooksCat>(`/${cat}.json`);
                });
                const response = await Promise.all(promises);
                const data = response.map(res => {
                    return res.data
                })
                setBooks(data)
            } catch (err: any) {
                setError(err)
            }
            setLoading(false)
        }
        getCategories()
    }, [])
    return { books, loading, error }
}