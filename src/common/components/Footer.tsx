import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';

export const Footer: React.FC = () => {
    return (
        <footer>
            <div className="container mx-3">
                <Grid container>
                    <Grid xs={12} sm={2} md={2} lg={2} item>
                        <div className="footer-item">
                            <span>NAVIGATION</span>
                            <ul>
                                <li><Link to="#">Home</Link></li>
                                <li><Link to="#">Books</Link></li>
                                <li><Link to="#">Reviews</Link></li>
                                <li><Link to="#">News</Link></li>
                                <li><Link to="#">Contacts</Link></li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid xs={12} sm={6} md={6} lg={8} item>
                        <div className="footer-item">
                            <span>CATEGORIES</span>
                            <div className="lists">
                                <Grid container>
                                    <Grid xs={3} sm={3} md={2} lg={4} item>
                                <div className="list">
                                    <ul>
                                        <li><Link to="#">Art</Link></li>
                                        <li><Link to="#">Biography</Link></li>
                                        <li><Link to="#">Buisiness</Link></li>
                                        <li><Link to="#">Chick List</Link></li>
                                        <li><Link to="#">Childrens</Link></li>
                                        <li><Link to="#">Christian</Link></li>
                                        <li><Link to="#">Classic</Link></li>
                                        <li><Link to="#">Comics</Link></li>
                                    </ul>
                                </div>
                                </Grid>
                                <Grid xs= {4} sm={4} md={6} lg={4} item>
                                <div className="list">
                                    <ul>
                                        <li><Link to="#">Contemporary</Link></li>
                                        <li><Link to="#">Cookbooks</Link></li>
                                        <li><Link to="#">Crime</Link></li>
                                        <li><Link to="#">Ebooks</Link></li>
                                        <li><Link to="#">Fantasy</Link></li>
                                        <li><Link to="#">Fiction</Link></li>
                                        <li><Link to="#">Gay And Lesbian</Link></li>
                                        <li><Link to="#">Graphic Novels</Link></li>
                                    </ul>
                                </div>
                                </Grid>
                                <Grid xs={3} sm={2} md={2} lg={4} item>
                                <div className="list">
                                    <ul>
                                        <li><Link to="#">Historical Fiction</Link></li>
                                        <li><Link to="#">History</Link></li>
                                        <li><Link to="#">Horror</Link></li>
                                        <li><Link to="#">Humor And Comedy</Link></li>
                                        <li><Link to="#">Manga</Link></li>
                                        <li><Link to="#">Memoir</Link></li>
                                        <li><Link to="#">Music</Link></li>
                                    </ul>
                                </div>
                                </Grid>
                                </Grid>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={12} sm={2} md={2} lg={2} item>
                        <div className="footer-item">
                            <span>FOLLOW US</span>
                            <ul>
                                <li><Link to="#">Facebook</Link></li>
                                <li><Link to="#">Twitter</Link></li>
                                <li><Link to="#">RSS</Link></li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </footer>
    )
}
