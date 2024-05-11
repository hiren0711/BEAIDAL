import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function SingleBlog() {

    const { bid } = useParams()
    const [blog, setBlog] = useState(undefined)
    const fetchData = async () => {
        try {
            const res = await axios.get(`https://beaidal.com/view_blog.php`);
            if (res.status === 200) {
                const blog = res.data.filter(item => item.id == bid)
                setBlog(blog[0])
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
                                        Blog</h2>
                                    <p className="inner-page-para mt-2">
                                        Beauty Care for Everyone</p>
                                </div>
                                <div className="w3breadcrumb-right">
                                    <ul className="breadcrumbs-custom-path">
                                        <li><Link to="/">Home</Link></li>
                                        <li className="active"><span className="fas fa-angle-double-right mx-2" /> Blog</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/*//inner-page*/}
                {/*/bottom-3-grids*/}
                {blog !== undefined ?
                    <div className="w3l-3-grids py-5" id="grids-3">
                        <div className="container py-md-5 py-2">
                            <center>
                                <div className="abin-top-content text-center mb-md-5 mb-4">
                                    <h3 className="title-w3l mb-3">{blog.title}</h3>
                                </div>
                                <div className="aboyt-ininf">

                                    <div className="about-img">
                                        <img src={blog.image} alt className="img-fluid radius-image" />
                                    </div>
                                </div>
                                <div className="abin-top-content text-center mb-md-5 my-4">
                                    <p className="abinfo-para">{blog.description}</p>
                                </div>
                            </center>
                        </div>
                    </div> : <center className='my-5'><img src="https://media.tenor.com/_62bXB8gnzoAAAAj/loading.gif" alt="loading" className='my-5' width={"50px"} /></center>}



            </div>

        </>
    )
}

export default SingleBlog