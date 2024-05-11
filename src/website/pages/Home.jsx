import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            {/*/main-slider */}
            <section className="w3l-main-slider banner-slider position-relative" id="home">
                <div className="owl-one owl-carousel owl-theme">
                    <div className="item">
                        <div className="slider-info banner-view banner-top1">
                            <div className="container">
                                <div className="banner-info header-hero-19">
                                    <h5>Beauty Care for Everyone</h5>
                                    <h3 className="title-hero-19">Experience the Best Beauty Services</h3>
                                </div>
                                <div className="banner-info header-hero-19 banner-info2 header-hero-192">
                                    <h5>Makeup for your bridal Look</h5>
                                    <h3 className="title-hero-19">Professional Makeup  &amp; Skin Care</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scroll-button">
                    <Link to="#video" className="scroll">
                        <div className="arrow" />
                    </Link>
                </div>
            </section>
            {/* //main-slider */}
            {/*/home-page-video-popup*/}
            <section className="w3l-video-sec py-5" id="video">
                <div className="container py-md-5">
                    <div className="row">
                        <div className="col-lg-7 w3l-index5 py-5">
                            <div className="w3video-bghny py-5">
                                <div className="history-info position-relative py-5 my-lg-5">
                                    <Link data-bs-toggle="modal" data-bs-target="#exampleModal" className="popup-with-zoom-anim play-view text-center position-absolute">
                                        <span className="video-play-icon">
                                            <span className="fa fa-play" />
                                        </span>
                                    </Link>
                                    {/* dialog itself, mfp-hide class is required to make dialog hidden */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 w3l-video-info-right ps-lg-5 mt-lg-0 mt-5">
                            <div className="title-content-two">
                                <h6 className="title-subw3hny">Popular Artist</h6>
                                <h3 className="title-w3l">Memorable Beauty Experience</h3>
                                <p className="mt-2">Embark on a journey of self-discovery through makeup artistry. We specialize in creating unforgettable beauty experiences tailored to your unique style and personality. From flawless foundations to mesmerizing eye looks, every brush stroke is a celebration of your individuality. Discover the transformative power of makeup in our hands, where each session leaves you feeling confident, empowered, and truly unforgettable. Elevate your beauty experience with us and make every moment a cherished memory.</p>
                                <a href="services.html" className="btn btn-style btn-primary mt-lg-5 mt-4">Our Artist </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Memorable Beauty Experience</h5>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-bs-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            {/* //home-page-video-popup*/}
            {/*/Gallery-Section*/}
            <section className="w3l-gallery" id="gallery">
                <div className="destionation-innf py-5">
                    <div className="container py-lg-5 py-md-4 py-2 HomePageGallery">
                        <div className="title-content text-center">
                            <h6 className="title-subw3hny text-center">Gallery</h6>
                            <h3 className="title-w3l mb-5 text-center">Photo Gallery</h3>
                        </div>
                        {/*/grids-grids*/}
                        <ul className="gallery_agile">
                            <li>
                                <div className="w3_agile_portfolio_grid">
                                    <a href="#">

                                        <img src="https://i.pinimg.com/736x/fb/d6/cc/fbd6cc0b87b540d3cb726ae2189decf8.jpg" alt=" " className="img-fluid radius-image" />
                                        <div className="portfolio-info">
                                            <h4>Gallery 1</h4>
                                            <i className="fas fa-plus details-link" />
                                        </div>
                                    </a>
                                </div>
                                <div className="w3_agile_portfolio_grid mt-4">
                                    <a href="#">
                                        <img src="https://i.pinimg.com/originals/c1/e4/97/c1e497d545cfdb2d6ba727a1dcd15a6a.jpg" alt=" " className="img-fluid radius-image" />
                                        <div className="portfolio-info">
                                            <h4>Gallery 2</h4>
                                            <i className="fas fa-plus details-link" />
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="w3_agile_portfolio_grid">
                                    <a href="#">
                                        <img src="https://i.pinimg.com/736x/26/00/6d/26006d980976ad7f24642c14bff44be5.jpg" alt=" " className="img-fluid radius-image" />
                                        <div className="portfolio-info">
                                            <h4>Gallery 3</h4>
                                            <i className="fas fa-plus details-link" />
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="w3_agile_portfolio_grid">
                                    <a href="#">
                                        <img src="https://image.wedmegood.com/resized-nw/700X/wp-content/uploads/2019/05/1535925084_image1357.jpg" alt=" " className="img-fluid radius-image" />
                                        <div className="portfolio-info">
                                            <h4>Gallery 4</h4>
                                            <i className="fas fa-plus details-link" />
                                        </div>
                                    </a>
                                </div>
                                <div className="w3_agile_portfolio_grid mt-4">
                                    <a href="#">
                                        <img src="https://cdn-fpjnk.nitrocdn.com/vVKtIfSlUsfxaPluxGDJIBsqXIZVzyZJ/assets/images/optimized/rev-b8e55b4/www.makeuupsalon.in/wp-content/uploads/2023/01/makeup-artist-in-Delhi-Connaught.jpg" alt=" " className="img-fluid radius-image" />
                                        <div className="portfolio-info">
                                            <h4>Gallery 5</h4>
                                            <i className="fas fa-plus details-link" />
                                        </div>
                                    </a>
                                </div>
                            </li>
                        </ul>
                        {/*//grids-grids*/}
                    </div>
                </div>
            </section>
            {/*//Gallery-Section*/}
            {/*//testimonials*/}
            <section className="w3l-clients-1" id="testimonials">
                {/*/cusrtomer-layout*/}
                <div className="cusrtomer-layout py-5 pt-0">
                    <div className="container py-lg-5 py-md-4 py-2 pt-0">
                        {/*/testimonial-grids*/}
                        <div className="testimonial-row">
                            <div id="owl-demo1" className="owl-testimonial owl-carousel owl-theme">
                                <div className="item">
                                    <div className="testimonial-content">
                                        <div className="testimonial">
                                            <div className="testi-des">
                                                <i className="fas fa-quote-left" />
                                                <div className="peopl align-self">
                                                    <h3>Ace Your Base With The All-New Lakmé Facelift Foundation Stick</h3>
                                                </div>
                                            </div>
                                            <blockquote>
                                                In the world of sizeable liquid and powder formulations, sticks reign supreme, owing to their portability and ease of use – and one from the House of Lakmé has sent the beauty market into a tizzy. The Facelift Multislayer Cover Stick is a creamy, hassle-free formula that is ultra-smooth to the touch and delivers a natural finish. Available in six shades for all Indian skin tones, the lightweight product blends seamlessly, lending an even-toned complexion while camouflaging problem areas.
                                            </blockquote>
                                            <ul className="social-media-test m-0 mt-4 p-0">
                                                <li><a href="#facebook" className="facebook"><span className="fab fa-facebook-f" /></a></li>
                                                <li><a href="#twitter" className="twitter"><span className="fab fa-twitter" /></a>
                                                </li>
                                                <li><a href="#instagram" className="instagram"><span className="fab fa-instagram" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*//testimonial-grids*/}
                    </div>
                </div>
                {/*//cusrtomer-layout*/}
            </section>
            {/* //testimonials */}
            {/*/home-page-mid*/}
            <section className="w3-midhny-sec py-5" id="mid">
                <div className="container py-lg-5">
                    <div className="w3-midhny-info">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="bottom-info">
                                    <div className="header-section title-content-two pe-lg-5">
                                        <h5 className="title-subw3hny mb-3">Our Special Offer</h5>
                                        <h3 className="title-w3l two mb-4">An Incredible Makeup <br />Experience
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5 align-self mt-lg-0 mt-sm-5 mt-4">
                                <div className="w3l-buttons d-sm-flex justify-content-end">
                                    <a href="#book" className="btn btn-style btn-white btn-primary">
                                        Make an appointment</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*//home-page-mid*/}
            {/*/w3l-subscribe*/}
            <section className="w3l-subscribe-content py-5">
                <div className="container py-md-4 py-3 text-center">
                    <div className="row">
                        <div className="col-lg-9 col-md-10 mx-auto">
                            <div className="subscribe mx-auto">
                                <div className="header-section text-center mx-auto">
                                    <h6 className="title-subw3hny mb-2">Join Us</h6>
                                    <h3 className="title-w3l">Stay Update!</h3>
                                    <p className="my-3 px-lg-5">We appreciate your trust greatly! Our clients choose us and our products because they know we’re the best.</p>
                                </div>
                                <form action="#" method="post" className="subscribe-wthree pt-2 mt-5">
                                    <div className="flex-wrap subscribe-wthree-field">
                                        <input className="form-control" type="email" placeholder="Email" name="email" required />
                                        <button className="btn btn-style btn-primary" type="submit">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*//w3l-subscribe*/}
            {/*/instagram-grid-wrap*/}
            <section className="instagram-grid-wrap-top">
                <div className="container-fluid mx-lg-0">
                    <div className="row footer-top-29 instagram-grid-wrap px-0">
                        {/* Start-Instagram */}
                        <div className="col-lg-2 col-4 mt-lg-0 mt-4 instagram-grid-wrap-grid px-0">
                            <div className="item-grid grid-style-1">
                                <div className="img-thumb">
                                    <a href="#">
                                        <img src="https://i2.wp.com/www.reshmafattepurkar.com/wp-content/uploads/2021/04/south-indian-bridal-makeup-artist.png?ssl=1" alt className="img-fluid" />
                                    </a>
                                    <div className="img-thumb-item-info">
                                        <div className="inner">
                                            <a href="#"><span className="far fa-heart" />1k</a>
                                            <a href="#"><span className="far fa-comment" />9</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Start-Instagram */}
                        {/* Start-Instagram */}
                        <div className="col-lg-2 col-4 mt-lg-0 mt-4 instagram-grid-wrap-grid px-0">
                            <div className="item-grid grid-style-1">
                                <div className="img-thumb">
                                    <a href="#">
                                        <img src="https://i.pinimg.com/736x/37/57/e1/3757e10f773f4e8cd67d9897e90d1ba7.jpg" alt className="img-fluid" />
                                    </a>
                                    <div className="img-thumb-item-info">
                                        <div className="inner">
                                            <a href="#"><span className="far fa-heart" />3k</a>
                                            <a href="#"><span className="far fa-comment" />6</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Start-Instagram */}
                        {/* Start-Instagram */}
                        <div className="col-lg-2 col-4 mt-lg-0 mt-4 instagram-grid-wrap-grid px-0">
                            <div className="item-grid grid-style-1">
                                <div className="img-thumb">
                                    <a href="#">
                                        <img src="https://cdn-cljej.nitrocdn.com/CGDBltJrxvmtUCdzLpUWvJUcUUTmRiyV/assets/static/optimized/rev-60a5a06/wp-content/uploads/2021/05/Haldi-Makeup-Pune-Mumbai-India-e1621758851999.jpeg" alt className="img-fluid" />
                                    </a>
                                    <div className="img-thumb-item-info">
                                        <div className="inner">
                                            <a href="#"><span className="far fa-heart" />4k</a>
                                            <a href="#"><span className="far fa-comment" />7</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Start-Instagram */}
                        {/* Start-Instagram */}
                        <div className="col-lg-2 col-4 mt-lg-0 mt-4 instagram-grid-wrap-grid px-0">
                            <div className="item-grid grid-style-1">
                                <div className="img-thumb">
                                    <a href="#">
                                        <img src="https://cdn-fpjnk.nitrocdn.com/vVKtIfSlUsfxaPluxGDJIBsqXIZVzyZJ/assets/images/optimized/rev-b8e55b4/www.makeuupsalon.in/wp-content/uploads/2023/01/best-makeup-artist-in-Delhi.jpg" alt className="img-fluid" />
                                    </a>
                                    <div className="img-thumb-item-info">
                                        <div className="inner">
                                            <a href="#"><span className="far fa-heart" />4k</a>
                                            <a href="#"><span className="far fa-comment" />8</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Start-Instagram */}
                        {/* Start-Instagram */}
                        <div className="col-lg-2 col-4 mt-lg-0 mt-4 instagram-grid-wrap-grid px-0">
                            <div className="item-grid grid-style-1">
                                <div className="img-thumb">
                                    <a href="#">
                                        <img src="https://image.wedmegood.com/resized-nw/700X/wp-content/uploads/2019/05/1558067900_image8671.jpg" alt className="img-fluid" />
                                    </a>
                                    <div className="img-thumb-item-info">
                                        <div className="inner">
                                            <a href="#"><span className="far fa-heart" />3k</a>
                                            <a href="#"><span className="far fa-comment" />9</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Start-Instagram */}
                        {/* Start-Instagram */}
                        <div className="col-lg-2 col-4 mt-lg-0 mt-4 instagram-grid-wrap-grid px-0">
                            <div className="item-grid grid-style-1">
                                <div className="img-thumb">
                                    <a href="#">
                                        <img src="https://miro.medium.com/v2/resize:fit:960/1*2uIv-otyg9-l1sNzvWz-QA.jpeg" alt className="img-fluid" />
                                    </a>
                                    <div className="img-thumb-item-info">
                                        <div className="inner">
                                            <a href="#"><span className="far fa-heart" />6k</a>
                                            <a href="#"><span className="far fa-comment" />7</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Start-Instagram */}
                    </div>
                </div>
            </section>




        </>
    )
}

export default Home