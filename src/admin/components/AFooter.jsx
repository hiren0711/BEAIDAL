import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

function AFooter() {

    useEffect(() => {
        window.onscroll = function () {
            scrollFunction()
        };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("movetop").style.display = "block";
            } else {
                document.getElementById("movetop").style.display = "none";
            }
        }

        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }, [])
    return (
        <footer className="w3l-footer-29-main">
            <div className="footer-29 py-5">
                <div className="container">
                    <div className="row footer-top-29">
                        <div className="col-lg-3 col-md-6 footer-list-29 footer-1 pe-lg-5">
                            <div className="bottom-copies">
                                <h2><Link className="navbar-brand" to="/admin/dashboard">
                                    <i className="fas fa-spa" />Beaidal Admin
                                </Link></h2>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 footer-list-29 footer-3 mt-lg-0 mt-3">
                            <p className="copy-footer-29 text-center">© 2021 Beaidal Admin. All rights reserved | Designed by <Link target='_blank' to="https://jyotindra-21.github.io/jyotindra-kushwah/">Jyotindra Kushwah</Link></p>
                        </div>
                        <div className="col-lg-4 col-md-6 footer-list-29 mt-lg-0 mt-4">
                            <div className="main-social-footer-29">
                                <a href="#facebook" className="facebook"><span className="fab fa-facebook-f" /></a>
                                <a href="#twitter" className="twitter"><span className="fab fa-twitter" /></a>
                                <a href="#instagram" className="instagram"><span className="fab fa-instagram" /></a>
                                <a href="#linkd" className="linkd"><span className="fab fa-linkedin-in" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* move top */}
            <button onClick={()=>topFunction()} id="movetop" title="Go to top">
                <span className="fa fa-angle-up" />
            </button>
        </footer>

    )
}

export default AFooter