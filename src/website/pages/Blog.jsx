import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Blog() {
  const [artist, setArtist] = useState([])
  const fetchData = async () => {
    try {
      const res = await axios.get(`https://beaidal.com/view_blog.php`);
      if (res.status === 200) {
        setArtist(res.data)
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
                    <li className="active"><span className="fas fa-angle-double-right mx-2" />Blog</li>
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
              <h6 className="title-subw3hny mb-1">Blog</h6>
              <h3 className="title-w3l mb-5">Read Blog About<br />
                Beauty care!</h3>
            </div>
            <div className="artist-grids d-grid mt-5 pt-lg-3">
              {artist && artist.map((item) => (
                <div className='artist-card' key={item.id}>
                  <div className='artist_img'>
                    <img src={item.image} alt="artist img" />
                  </div>
                  <div className='artist_content'>
                    <h4 className='artist_name  my-2'>{item.title}</h4>
                    <div className='d-flex justify-content-between align-items-center'>
                     <p>{item.description}</p>
                    </div>
                    <Link to={`/blog/${item.id}`} className='btn btn-primary my-2'>Read Blog</Link>
                  </div>
                </div>))}
            </div>
            </div>
        </section>
        {/* /contact-form-2 */}
      </div>
    </>
  )
}

export default Blog