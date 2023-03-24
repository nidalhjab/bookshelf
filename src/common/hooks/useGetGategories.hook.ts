import axios from "axios";
import { useEffect, useState } from "react";
import { Categories, Categorie } from "../components/CategorieItem";

export const useGetGategories = () => {
    const [categories, setCategories] = useState<Categorie[]>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();
    useEffect(() => {
        const getCategories = async () => {
            try {
                setLoading(true)
                const response = await axios.get<Categories>('/data/categories.json');
                if (response.status === 200) {
                    setCategories(response.data.categories.slice(0, 8))
                }
            } catch (err: any) {
                setError(err)
            }
            setLoading(false)
        }
        getCategories()
    }, [])
    return { categories, loading, error }
}