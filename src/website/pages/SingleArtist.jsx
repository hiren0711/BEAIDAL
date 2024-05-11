import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Profile() {

    const { id } = useParams()
    const [artist, setArtist] = useState(undefined)
    const fetchData = async () => {
        try {
            const res = await axios.get(`https://beaidal.com/view_artist.php`);
            if (res.status === 200) {
                const artist = res.data.filter(item => item.id == id)
                setArtist(artist[0])
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
                                        Artist Details </h2>
                                    <p className="inner-page-para mt-2">
                                        Beauty Care for Everyone</p>
                                </div>
                                <div className="w3breadcrumb-right">
                                    <ul className="breadcrumbs-custom-path">
                                        <li><Link to="/">Home</Link></li>
                                        <li className="active"><span className="fas fa-angle-double-right mx-2" />Artist Details</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/*//inner-page*/}
                {/* /contacts */}
                {/* contact-form 2 */}

                {artist !== undefined ? (<section className="w3l-contact-2 py-5" id="contact">
                    <div className="container py-lg-4 py-md-3 py-2">
                        <div className="title-content text-center">
                            <h6 className="title-subw3hny mb-1">Your Details</h6>

                        </div>
                        <div className="contact-grids d-grid mt-5 pt-lg-3">
                            <div className="contact-left">
                                {artist && artist?.profile_img !== "" && <img src="https://lh3.googleusercontent.com/wJqWhV_PTsswvVe8YQw0sWZTi9_8JjVl9nwwS63OivDkfdhpCScyYQmLdfYST1H284wizTTK95iAu81IIluBLTcReE_ePz2GbNhOxwb-Yk71zpgNUnNLytc63oCDg_J2flHs8uFbau6NEsrpDA" alt="parul garg" />}

                            </div>
                            <div className="contact-right">
                                <h3 className='details_artist_name mb-3'>{artist && artist.name}</h3>
                                <div className='artist_contact_details'>
                                    <h5 className='details_artist_email my-2'> <span className="fas fa-envelope me-2" aria-hidden="true" /> {artist && artist?.email}</h5>
                                    {artist && artist?.mobile !== "" && <h5 className='details_artist_mobile my-2'><span className="fas fa-phone me-2" aria-hidden="true" /> {artist && artist?.mobile}</h5>}
                                    {artist && artist?.area !== "" && <h5 className='details_artist_location'><span className="fas fa-map-marker-alt me-2" aria-hidden="true" /> {artist && artist?.area}</h5>}

                                </div>
                                <div className='artist_price_details my-3'>
                                    {artist && artist?.price !== "" && <div className='at_price d-flex align-items-center gap-2 my-2'>
                                        <h5>Price :</h5><h2>{artist && artist?.price}</h2>
                                    </div>}
                                    {artist && artist?.shop_title !== "" && <div className='d-flex align-items-center gap-2 my-2'>
                                        <h5>Shop Title :</h5><h2>{artist && artist?.shop_title}</h2>
                                    </div>}

                                    {artist && artist?.product_used !== "" && <div className='d-flex align-items-center gap-2 my-2'>
                                        <h5>Product Used:</h5><h2>{artist && artist?.product_used}</h2>

                                    </div>}
                                    {artist && artist?.airbrush !== "" && <div className='d-flex align-items-center gap-2 my-2'>
                                        <h5>Airbrush :</h5><h2>{artist && artist?.airbrush}</h2>

                                    </div>}
                                    {artist && artist?.travel_to_vanue !== "" && <div className='d-flex align-items-center gap-2 my-2'>
                                        <h5>Travel To Venue :</h5><h2>{artist && artist?.travel_to_vanue}</h2>

                                    </div>}
                                    {artist && artist?.since_work !== "" && <div className='d-flex align-items-center gap-2 my-2'>
                                        <h5>Since Work :</h5><h2>{artist && artist?.since_work}</h2>

                                    </div>}
                                    {artist && artist?.timming !== "" && <div className='d-flex align-items-center gap-2 my-2'>
                                        <h5>Timing :</h5><h2>{artist && artist?.timming}</h2>

                                    </div>}
                                    {/* <div className='d-flex align-items-center gap-2 my-2'>
                                        <h5>Travel To Venue:</h5><span className="fas fa-check-circle me-2" aria-hidden="true" />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        {artist && artist?.work_img !== "" && <>
                            <hr />

                            <div className='artist_work_images'>
                                <h3 className='content_title'>Work Images</h3>
                                <div>
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
                        </>}
                        {artist && artist?.about !== "" && <><hr />
                            <div className='artist_about'>
                                <h3 className='content_title'>About</h3>
                                <div>{artist && artist?.about}</div>
                            </div></>}

                        {artist && artist?.services !== "" && <><hr />
                            <div className='artist_services'>
                                <h3 className='content_title'>Services</h3>
                                <div>{artist && artist?.services}</div>
                            </div></>}
                        {artist && artist?.map_url !== "" && <><hr />
                            <div className="map-iframe mt-5 pt-lg-3">
                                <iframe src={artist.map_url} width="100%" height={400} frameBorder={0} style={{ border: 0 }} allowFullScreen />
                            </div>
                        </>}


                    </div>
                </section>) : <center className='my-5'><img src="https://media.tenor.com/_62bXB8gnzoAAAAj/loading.gif" alt="loading" className='my-5' width={"50px"} /></center>}

                {/* /contact-form-2 */}


            </div>
        </>
    )
}

export default Profile