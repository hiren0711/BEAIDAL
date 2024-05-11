import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
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
                                        Login </h2>
                                    <p className="inner-page-para mt-2">
                                        Beauty Care for Everyone</p>
                                </div>
                                <div className="w3breadcrumb-right">
                                    <ul className="breadcrumbs-custom-path">
                                        <li><Link to="/">Home</Link></li>
                                        <li className="active"><span className="fas fa-angle-double-right mx-2" />Login</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/*//inner-page*/}
                {/* /contacts */}
                {/* contact-form 2 */}
                <section className="w3l-contact-2 py-5" id="contact">
                    <div className="container py-lg-4 py-md-3 py-2">
                        <div className="title-content text-center">
                            <h6 className="title-subw3hny mb-1">Login</h6>
                            <h3 className="title-w3l mb-5">Let's Connect<br />
                                With Us!</h3>
                        </div>
                        <div className="contact-grids d-grid mt-5 pt-lg-3">
                            <div className="contact-left">

                                <img src="./src/assets/images/login.svg" alt="login" />

                            </div>
                            <div className="contact-right">
                                <form action="" method="post" className="signin-form">

                                    <input type="email" name="email" id="email" placeholder="Your Email*" className="contact-input" required />
                                    <input type="password" name="password" id="password" placeholder="Your Password*" className="contact-input" required />

                                    <div className="submit-w3l-button d-flex justify-content-between text-lg-right">
                                        <div>Don't have an account? <Link to="/signup">Singup</Link> </div>
                                        <button className="btn btn-style btn-primary">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </section>
                {/* /contact-form-2 */}
            </div>
        </>
    )
}

export default Login