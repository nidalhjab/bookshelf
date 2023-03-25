import Grid from '@mui/material/Grid';

export interface Categorie {
  id: number,
  image: string,
  title: string,
  description: string
}
export interface Categories {
  categories: Categorie[]
}
interface CategorieItemProps {
  img: string,
  title: string,
  description: string
}

export const CategorieItem: React.FC<CategorieItemProps> = ({ img, title, description }: CategorieItemProps) => {
  return (
    <Grid item xs={6} sm={5} md={4} lg={3}>
      <div className="categorieItem">
        <div className="categorieItem-img">
          <img src={img} alt="img" />
        </div>
        <div className="categorieItem-info">
          <span id="categorieItem-title">{title}</span>
          <span id="categorieItem-desc">{description}</span>
        </div>
      </div>
    </Grid>
  )
}
