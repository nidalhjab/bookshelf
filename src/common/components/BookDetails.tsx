import { useParams } from 'react-router-dom'
import { useGetBookById } from '../hooks/useGetBookById';
import { Spinner } from './Spinner';
export interface BookInfo{
  
}
export const BookDetails:React.FC = () => {
  const {id} = useParams();
  const {bookInfo,error,loading} = useGetBookById(id ? parseInt(id) : 0);
  let content;
  if (loading) {
    content = <Spinner />
}
if (error) {
    content = <p>Something went wrong!</p>
}
if (bookInfo) {
    content = <div className='bookInfo'>
        <h2>{bookInfo.title}</h2>
        <img src={bookInfo.image} alt="bookInfo"/>
        <div className="description">
        <h3>Author: {bookInfo.author}</h3>
        <h4>Reviewd By: {bookInfo.reviewedBy}</h4>
        <h5>Description: {bookInfo.description}</h5>
        </div>
    </div>
}
return (
    <div className="bookDetils">
        {content}
    </div>
)
}
