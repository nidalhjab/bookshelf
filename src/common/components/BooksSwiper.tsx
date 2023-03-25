import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export interface SwiperProps {
  books: Book[];
  backColor: string[];
  cat: string;
}
export interface Book {
  id: number,
  title: string,
  image: string,
  author: string,
  reviewedBy: string
  description?: string
}
export interface BooksCat {
  books: Book[];
}
export const BooksSwiper: React.FC<SwiperProps> = ({ books, backColor, cat }: SwiperProps) => {
  return (
    <div style={backColor.length === 1 ? { backgroundColor: backColor[0] } : { backgroundImage: `linear-gradient(to right, ${backColor[0]} , ${backColor[1]})` }} className="swiperElement ">
      <div className="py-3 mx-3">
        <h2>{cat}</h2>
        <Swiper
          className="mySwiper"
          navigation={true} modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
        >
          {books.map(({ id, title, author, image, reviewedBy }) => {
            console.log(id)
            return (
              <SwiperSlide>
                <Link to={`/books/${id}`}>
                  <div className='wrapper'>
                    <figure className="img">
                      <LazyLoadImage src={image}
                        alt="Book Image"
                      />
                    </figure>
                    <figcaption className="caption">
                      <h6 style={backColor.length === 1 ? { color: "#0b0b0b" } : { color: "var(--white-color)" }} >{title}</h6>
                      <span style={backColor.length === 1 ? { color: "#929292" } : { color: "var(--green-background)" }} >by {author} </span>
                      <span style={backColor.length === 1 ? { color: "#929292" } : { color: "var(--green-background)" }}>reviewed By {reviewedBy} </span>
                    </figcaption>
                  </div>
                </Link>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

