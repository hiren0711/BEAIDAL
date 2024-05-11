import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

function UpdateBlog() {

    const navigate = useNavigate()
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

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        for (const [key, value] of formData.entries()) {
            if (value.trim() === '') {
                toast.error(`Blog ${key} is required!`);
                document.querySelector(`#${key}`).focus()
                return;
            }
        }
        formData.append("id", bid)
        const newblog = Object.fromEntries(formData)
        try {
            const res = await axios.post(`https://beaidal.com/update_blog.php/${newblog.id}`, newblog)
            if (res.status === 200) {
                toast.success(res.data.message)
                e.target.reset()
                navigate("/admin/manage-blog")
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
                                        Update Blog</h2>
                                    <p className="inner-page-para mt-2">
                                        Beauty Care for Everyone</p>
                                </div>
                                <div className="w3breadcrumb-right">
                                    <ul className="breadcrumbs-custom-path">
                                        <li><Link to="/">Home</Link></li>
                                        <li className="active"><span className="fas fa-angle-double-right mx-2" />Update Blog</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/*//inner-page*/}
                {/* /contacts */}
                {/* contact-form 2 */}

                {blog !== undefined ? <section className="w3l-contact-2 py-5" id="contact">
                    <div className="container py-lg-4 py-md-3 py-2">
                        <div className="title-content text-center">
                            <h6 className="title-subw3hny mb-1">Update Blog</h6>
                            <h3 className="title-w3l mb-5">Update your Blog About<br />
                                Beauty care!</h3>
                        </div>
                        <div className="contact-grids d-grid mt-5 pt-lg-3">
                            <div className="contact-left">
                                <img src="../../src/assets/images/blog.svg" alt="blog" />
                            </div>
                            <div className="contact-right">
                                <form onSubmit={(e) => handleSubmit(e)} method="post" className="signin-form">
                                    <input type="text" defaultValue={blog.title} name="title" id="title" placeholder="Blog Title*" className="contact-input" />
                                    <input type="url" name="image" defaultValue={blog.image} id="image" placeholder="Blog Image URL*" className="contact-input" />
                                    <div className="form-input">
                                        <textarea name="description" id="description" placeholder="Type here*" defaultValue={blog.description} />
                                    </div>
                                    <div className="submit-w3l-button text-lg-right">
                                        <button type='submit' className="btn btn-style btn-primary">Post</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section> : <center className='my-5'><img src="https://media.tenor.com/_62bXB8gnzoAAAAj/loading.gif" alt="loading" className='my-5' width={"50px"} /></center>}

                {/* /contact-form-2 */}
            </div>
        </>
    )
}

export default UpdateBlog