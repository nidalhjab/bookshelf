import { useGetGategories } from "../hooks/useGetGategories.hook"
import { CategorieItem } from "./CategorieItem";
import { Spinner } from "./Spinner";
import Grid from '@mui/material/Grid';

export const Categories: React.FC = () => {
  const { categories, loading, error } = useGetGategories();
  let content;
  if (categories) {
    content = categories?.map(({ id, image, title, description }) => {
      return (
        <CategorieItem key={id} img={image} title={title} description={description} />
      );
    });
  }
  if (error) {
    content = <h3>Something went wrong! {error}</h3>;
  }
  if (loading) {
    content = <Spinner />
  }
  return (
    <div className="categories py-3 mx-3">
      <div className="title">
        <h2>Broswe<span> Our Most Popular Categories</span></h2>
      </div>
      <Grid className="items" container >
        {content}
      </Grid>
    </div>
  );
}
