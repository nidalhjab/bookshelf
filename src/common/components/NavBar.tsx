import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';

export const NavBar: React.FC = () => {
  const [navState, setNavState] = useState(false);
  return (
    <header>
      <nav>
        <div className="container py-3 mx-3">
          <Grid container>
            <Grid item xs={10} md={10} lg={6}>
              <div className="brand">
                <span id="bold">Books</span>
                <span id="thin">Reviews</span>
              </div>
            </Grid>
            <Grid xs={2} md={2} lg={6}>
              <div className="links-container">
                <div className="toggle">
                  {navState ? (
                    <MdClose onClick={() => setNavState(false)} />
                  ) : (
                    <GiHamburgerMenu
                      onClick={(e) => setNavState(true)
                      }
                    />
                  )}
                </div>
                <div className={`links ${navState ? "responsive-toggle" : ""}`}>
                  <ul>
                    <li>
                      <Link to="/"> HOME</Link>
                    </li>
                    <li>
                      <Link to="/books"> BOOKS</Link>
                    </li>
                    <li>
                      <Link to="#"> REVIEWS</Link>
                    </li>
                    <li>
                      <Link to="#"> NEWS</Link>
                    </li>
                    <li>
                      <Link to="#"> CONTACTS</Link>
                    </li>
                    <li>
                      <BiSearch />
                    </li>
                  </ul>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </nav>
    </header>
  )
}
