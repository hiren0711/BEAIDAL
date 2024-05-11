import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

function UpdateProfile() {

    const { uid } = useParams()
    const [artist, setArtist] = useState(undefined)
    const fetchData = async () => {
        try {
            const res = await axios.get(`https://beaidal.com/view_artist.php`);
            if (res.status === 200) {
                const artist = res.data.filter(item => item.id == uid)
                setArtist(artist[0])
            }
        } catch (error) {
            console.log(error);
        }
    }
    const submitHandle = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target);
        for (const [key, value] of formData.entries()) {
            if (value.trim() === '') {
                toast.error(`${key} is required!`);
                document.querySelector(`#${key}`).focus()
                return;
            }
        }

        formData.append("id", uid)
        const updateArtist = Object.fromEntries(formData)


        try {
            const res = await axios.post(`https://beaidal.com/update_artist.php`, updateArtist)
            if (res.status === 200) {
                toast.success(res.data.message)
            }

        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        fetchData()
    }, [])

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
                                        Update Profile</h2>
                                    <p className="inner-page-para mt-2">
                                        Beauty Care for Everyone</p>
                                </div>
                                <div className="w3breadcrumb-right">
                                    <ul className="breadcrumbs-custom-path">
                                        <li><Link to="/">Home</Link></li>
                                        <li className="active"><span className="fas fa-angle-double-right mx-2" />Update Profile</li>
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
                            <h6 className="title-subw3hny mb-1">Update Profile</h6>
                            {/* <h3 className="title-w3l mb-5">Write your Blog About<br />
                                Beauty care!</h3> */}
                        </div>
                        <div className="update-profile-grids d-grid mt-5 pt-lg-3">
                            <div className="">

                                {artist !== undefined ? (<form onSubmit={(e) => submitHandle(e)} method="post" className="signin-form">
                                    <div className="input-grids">
                                        <input type="text" defaultValue={artist.name} name="name" id="name" placeholder="Your Name*" className="contact-input"  />
                                        <input type="email" defaultValue={artist.email} name="email" id="email" placeholder="Your Email*" className="contact-input"  />
                                        <input type="text" defaultValue={artist.shop_title} name="shop_title" id="shop_title" placeholder="Your Shop Title*" className="contact-input"  />
                                        <input type="tel" defaultValue={artist.mobile} name="mobile" id="mobile" placeholder="Your Mobile*" className="contact-input"  />
                                        <input type="text" defaultValue={artist.area} name="area" id="area" placeholder="Your Area*" className="contact-input"  />
                                        <input type="text" defaultValue={artist.full_address} name="full_address" id="full_address" placeholder="Your Full Address*" className="contact-input"  />
                                        <input type="url" defaultValue={artist.map_url} name="map_url" id="map_url" placeholder="Your Map URL*" className="contact-input"  />
                                        <input type="url" defaultValue={artist.profile_img} name="profile_img" id="profile_img" placeholder="Your Profile Image URL*" className="contact-input"  />
                                        <input type="text" defaultValue={artist.work_img} name="work_img" id="work_img" placeholder="Your Work Image URL*" className="contact-input"  />
                                        <input type="text" defaultValue={artist.product_used} name="product_used" id="product_used" placeholder="Product Used*" className="contact-input"  />
                                        <input type="text" defaultValue={artist.price} name="price" id="price" placeholder="Your Price*" className="contact-input"  />
                                        <input type="text" defaultValue={artist.airbrush} name="airbrush" id="airbrush" placeholder="Airbrush*" className="contact-input"  />
                                        <input type="date" defaultValue={artist.since_work} name="since_work" id="since_work" placeholder="Since_work*" className="contact-input"  />

                                        <input type="text" defaultValue={artist.timming} name="timming" id="timming" placeholder="Time Example : 10:00 AM TO 5:00 PM*" className="contact-input"  />
                                    </div>
                                    <div className="form-input">
                                        <textarea name="services" defaultValue={artist.services} id="services" placeholder="Type Services here*"  />
                                    </div>
                                    <div className="form-input">
                                        <textarea name="about" defaultValue={artist.about} id="about" placeholder="Type About here*"  />
                                    </div>
                                    <div className="submit-w3l-button text-lg-right">
                                        <button type='submit' className="btn btn-style btn-primary">Update</button>
                                    </div>
                                </form>) : <center className='my-5'><img src="https://media.tenor.com/_62bXB8gnzoAAAAj/loading.gif" alt="loading" className='my-5' width={"50px"} /></center>}

                            </div>
                        </div>
                    </div>
                </section>
                {/* /contact-form-2 */}
            </div>
        </>
    )
}

export default UpdateProfile