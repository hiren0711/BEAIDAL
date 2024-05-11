import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

function Signup() {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        for (const [key, value] of formData.entries()) {
            if (value.trim() === '') {
                toast.error(`${key} is required!`);
                document.querySelector(`#${key}`).focus()
                return;
            }
        }
        const newArtist = Object.fromEntries(formData)
        try {
            const res = await axios.post(`https://beaidal.com/create_artist.php`, newArtist);
            if (res.status == 200) {
                toast.success(res.data.message)
                e.target.reset()
            }
        } catch (error) {

            console.log(error);
        }


    }
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
                                        Sign up</h2>
                                    <p className="inner-page-para mt-2">
                                        Beauty Care for Everyone</p>
                                </div>
                                <div className="w3breadcrumb-right">
                                    <ul className="breadcrumbs-custom-path">
                                        <li><Link to="/">Home</Link></li>
                                        <li className="active"><span className="fas fa-angle-double-right mx-2" /> Sign up</li>
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
                            <h6 className="title-subw3hny mb-1">Sign up</h6>
                            <h3 className="title-w3l mb-5">Let's Connect<br />
                                With Us!</h3>
                        </div>
                        <div className="contact-grids d-grid mt-5 pt-lg-3">
                            <div className="contact-left">

                                <img src="./src/assets/images/login.svg" alt="login" />

                            </div>
                            <div className="contact-right">
                                <form action="" method="post" onSubmit={(e) => handleSubmit(e)} className="signin-form">
                                    <input type="text" name="name" id="name" placeholder="Your Name*" className="contact-input"  />
                                    <input type="email" name="email" id="email" placeholder="Your Email*" className="contact-input"  />
                                    <input type="password" name="pass" id="pass" placeholder="Your Password*" className="contact-input"  />

                                    <div className="submit-w3l-button d-flex justify-content-between text-lg-right">
                                        <div>Already have an account? <Link to="/login">Login</Link> </div>
                                        <button type="submit" className="btn btn-style btn-primary">Sign up</button>
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

export default Signup