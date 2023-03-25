import { Footer } from './common/components/Footer';
import { NavBar } from './common/components/NavBar';
import "./scss/index.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from './views/Home';
import { BookDetails } from './common/components/BookDetails';
import { Books } from './common/components/Books';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="books" element={<Books />}></Route>
          <Route path="books/:id" element={<BookDetails />}></Route>
        </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
