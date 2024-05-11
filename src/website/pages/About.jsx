import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    return (
        <>
            <div>
                {/*/inner-page*/}
                <div className="inner-banner py-5">
                    <section className="w3l-breadcrumb text-left py-sm-5 ">
                        <div className="container">
                            <div className="w3breadcrumb-gids">
                                <div className="w3breadcrumb-left text-left">
                                    <h2 className="inner-w3-title">
                                        About Us </h2>
                                    <p className="inner-page-para mt-2">
                                        Beauty Care for Everyone</p>
                                </div>
                                <div className="w3breadcrumb-right">
                                    <ul className="breadcrumbs-custom-path">
                                        <li><Link to="/">Home</Link></li>
                                        <li className="active"><span className="fas fa-angle-double-right mx-2" /> About Us</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/*//inner-page*/}
                {/*/bottom-3-grids*/}
                <div className="w3l-3-grids py-5" id="grids-3">
                    <div className="container py-md-5 py-2">
                        <div className="abin-top-content text-center mb-md-5 mb-4">
                            <h6 className="title-subw3hny">About Us</h6>
                            <h3 className="title-w3l mb-3">Our Story</h3>
                            <p className="abinfo-para">Being au courant about the ever-changing beauty ecosystem, I’d push you to jump aboard the SPF train before it’s too late. As the temps start to peak – and the sweltering heat takes over – swap your regular formulas with SPF-infused, multi-tasking makeup. These hard-working products offer the added perks of sunscreen while doing their own job, giving you the best of both worlds. From SPF-imbued skin tints to sun-protectant lipstick, these double-duty beauties are already in my cart; here’s why they should be in yours, too.

                            </p>
                        </div>
                        <div className="aboyt-ininf">
                            <div className="about-img">
                                <img src="https://images.unsplash.com/photo-1684868265715-03e19a3e0e00?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt className="img-fluid radius-image" />
                            </div>
                            <div className="three-grids-hmew3">
                                <div className="three-grid-1 text-left mt-5">
                                    <h4>Who We Are ?</h4>
                                    <p className="mt-2 pr-lg-4">Empowering beauty enthusiasts to embrace their unique essence through artistry. We specialize in crafting personalized makeup experiences, enhancing natural features and boosting confidence with every stroke of our brushes.
                                    </p>
                                </div>
                                <div className="three-grid-1 text-left mt-5">
                                    <h4>What We Do ?</h4>
                                    <p className="mt-2 pr-lg-4">We create captivating looks tailored to your style, whether it's for everyday glam or special occasions. From flawless foundations to striking eye designs, we elevate your beauty with expertise and passion, making every moment a masterpiece.
                                    </p>
                                </div>
                                <div className="three-grid-1 text-left mt-5">
                                    <h4>Why Choose Us</h4>
                                    <p className="mt-2 pr-lg-4">Choose us for meticulous attention to detail, a commitment to enhancing your natural beauty, and a personalized experience that leaves you feeling confident and radiant. With our expertise and dedication, we ensure every makeup session is a transformative and memorable journey.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*//bottom-3-grids*/}
                {/*/features-section */}
                <section className="w3l-features py-5" id="work">
                    <div className="container py-lg-5 py-md-4 py-2">
                        <div className="title-content text-center mb-md-5 mb-4">
                            <h6 className="title-subw3hny mb-1">Why Us</h6>
                            <h3 className="title-w3l mb-5">What We Offer</h3>
                        </div>
                        <div className="main-cont-wthree-2 align-items-center text-center pt-lg-4">
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-md-6 mt-lg-0 mt-5">
                                    <div className="grids-1 box-wrap">
                                        <div className="icon">
                                            <i className="fas fa-biking" />
                                        </div>
                                        <h4><a href="#service" className="title-head mb-3">
                                            Glam transform</a></h4>
                                        <p className="text-para mb-3">
                                            Glamorous transformations: radiant makeovers, stunning looks, confidence boost</p>
                                        <a className="w3item-link" href="services.html">
                                            <i className="fas fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mt-lg-0 mt-5">
                                    <div className="grids-1 box-wrap">
                                        <div className="icon">
                                            <i className="far fa-gem" />
                                        </div>
                                        <h4><a href="#service" className="title-head mb-3">
                                            Custom looks</a></h4>
                                        <p className="text-para mb-3">Tailored makeup: colors, techniques, and styles for your unique features.</p>
                                        <a className="w3item-link" href="services.html">
                                            <i className="fas fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mt-lg-0 mt-5">
                                    <div className="grids-1 box-wrap">
                                        <div className="icon">
                                            <i className="fas fa-theater-masks" />
                                        </div>
                                        <h4><a href="#service" className="title-head mb-3">
                                            Bridal glam</a></h4>
                                        <p className="text-para mb-3">Bridal glam: flawless complexion, radiant eyes, captivating lips, timeless elegance.</p>
                                        <a className="w3item-link" href="services.html">
                                            <i className="fas fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mt-lg-0 mt-5">
                                    <div className="grids-1 box-wrap">
                                        <div className="icon">
                                            <i className="fas fa-bath" />
                                        </div>
                                        <h4><a href="#service" className="title-head mb-3">
                                            special occasions</a></h4>
                                        <p className="text-para mb-3">Special occasions: weddings, proms, graduations, galas, photoshoots, red carpets, celebrations.</p>
                                        <a className="w3item-link" href="services.html">
                                            <i className="fas fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*//features section */}
                {/*/team*/}
                <section id="team" className="w3lteam py-5">
                    <div className="container py-md-5">
                        <div className="title-content text-center">
                            <h6 className="title-subw3hny mb-1">Our Team</h6>
                            <h3 className="title-w3l mb-5">Our Creative Team.</h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="member">
                                    <div className="pic"><img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQicESJ5Tbd6-Pm1ed9cgMg7zUMtQEOQZ9SpqaEBygq1c7grohG" className="img-fluid radius-image" alt /></div>
                                    <div className="member-info">
                                        <div className="member-info-content">
                                            <h4>Lisa Eldridge</h4>
                                            <span>New Zealand</span>
                                        </div>
                                        <div className="social">
                                            <a href="#facebook" className="facebook"><span className="fab fa-facebook-f" /></a>
                                            <a href="#twitter" className="twitter"><span className="fab fa-twitter" /></a>
                                            <a href="#linkd" className="linkd"><span className="fab fa-linkedin-in" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="member">
                                    <div className="pic"><img src="https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTfuNvrhyr4w5Q1Pi2su2jb6jjrBG0Zcx79t8eHhzyA6savNs7mxF_DFZMSIu6VCB_q" className="img-fluid radius-image" alt /></div>
                                    <div className="member-info">
                                        <div className="member-info-content">
                                            <h4>Gucci Westman</h4>
                                            <span>American</span>
                                        </div>
                                        <div className="social">
                                            <a href="#facebook" className="facebook"><span className="fab fa-facebook-f" /></a>
                                            <a href="#twitter" className="twitter"><span className="fab fa-twitter" /></a>
                                            <a href="#linkd" className="linkd"><span className="fab fa-linkedin-in" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="member">
                                    <div className="pic"><img src="https://assets.vogue.in/photos/5ce43ea29cc0c02417f9ee0d/1:1/w_1080,h_1080,c_limit/namrata-soni-sonam-kapoor-expert-tips.jpg" className="img-fluid radius-image" alt /></div>
                                    <div className="member-info">
                                        <div className="member-info-content">
                                            <h4>Namrata Soni</h4>
                                            <span>Pedicurist</span>
                                        </div>
                                        <div className="social">
                                            <a href="#facebook" className="facebook"><span className="fab fa-facebook-f" /></a>
                                            <a href="#twitter" className="twitter"><span className="fab fa-twitter" /></a>
                                            <a href="#linkd" className="linkd"><span className="fab fa-linkedin-in" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="member">
                                    <div className="pic"><img src="http://t3.gstatic.com/images?q=tbn:ANd9GcQ1JbuMegOh5NtYbbOjWjm3VnE-2ZnBrl3w3mf1-KRX9q75E4tx" className="img-fluid radius-image" alt /></div>
                                    <div className="member-info">
                                        <div className="member-info-content">
                                            <h4>Lekha Gupta</h4>
                                            <span>Cosmetologist</span>
                                        </div>
                                        <div className="social">
                                            <a href="#facebook" className="facebook"><span className="fab fa-facebook-f" /></a>
                                            <a href="#twitter" className="twitter"><span className="fab fa-twitter" /></a>
                                            <a href="#linkd" className="linkd"><span className="fab fa-linkedin-in" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* End Team Section */}
                {/*/w3l-project*/}
                <section id="counts" className="w3lcounts">
                    <div className="container py-md-3">
                        <div className="w3l-project-in">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 w3stats_info counter_grid">
                                    <div className="count-box">
                                        <i className="fas fa-users" />
                                        <div className="count-box-right">
                                            <p className="counter">960</p>
                                            <p>Happy Clients</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mt-5 mt-md-0 w3stats_info counter_grid">
                                    <div className="count-box">
                                        <i className="fas fa-user-shield" />
                                        <div className="count-box-right">
                                            <p className="counter">1560</p>
                                            <p>Our Staff</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 w3stats_info counter_grid">
                                    <div className="count-box">
                                        <i className="fas fa-headset" />
                                        <div className="count-box-right">
                                            <p className="counter">1660</p>
                                            <p>Hours Of Support</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 w3stats_info counter_grid">
                                    <div className="count-box">
                                        <i className="fas fa-trophy" />
                                        <div className="count-box-right">
                                            <p className="counter">2860</p>
                                            <p>Awards</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*//w3l-project*/}
                {/*/w3l-midslider*/}
                <section className="w3l-midslider py-5" id="midslider">
                    {/* /grids */}
                    <div className="container py-md-5">
                        <div className="row">
                            <div className="col-lg-5 title-content-two text-left pe-lg-5 mb-lg-0 mb-5">
                                <h6 className="title-subw3hny mb-1">What We Offer</h6>
                                <h3 className="title-w3l mb-3">
                                    Modern Approach to Every New Client</h3>
                                <p className="mb-3">Modern approach: personalized consultations, trend-conscious techniques, tailor-made beauty experiences.</p>
                                <ul className="icon-list-items mt-3">
                                    <li className="icon-list-item">
                                        <i aria-hidden="true" className="fas fa-circle" />
                                        Custom Look
                                    </li>
                                    <li className="icon-list-item mt-2">
                                        <i aria-hidden="true" className="fas fa-circle" />
                                        Bridal Glam
                                    </li>
                                    <li className="icon-list-item mt-2">
                                        <i aria-hidden="true" className="fas fa-circle" />
                                        Hair Styles
                                    </li>
                                </ul>
                            </div>
                            {/* /grids */}
                            <div className="col-lg-7 stats_info-images ps-lg-5">
                                <div className="stats_info-images-right row">
                                    <div className="col-6 mid-slider-content">
                                        <img src="https://images.unsplash.com/photo-1610173827043-9db50e0d8ef9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid radius-image" alt />
                                    </div>
                                    <div className="col-6 mid-slider-content">
                                        <img src="https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid radius-image" alt />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /grids */}
                    </div>
                </section>
            </div>

        </>
    )
}

export default About