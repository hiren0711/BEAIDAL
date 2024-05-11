import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

function ArtistManage() {

    const [data, setData] = useState([])

    const fetchData = async () => {
        const res = await axios.get(`https://beaidal.com/view_artist.php`);
        if (res.status == 200) {
            setData(res.data)
        }
    }

    const handleDelete = async (id) => {
        try {
            const res = await axios.post(`https://beaidal.com/delete_artist.php`, { id: id })
            if (res.status == 200) {
                toast.success(res.data.message)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [data])
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
                                        Manage Artist</h2>
                                    <p className="inner-page-para mt-2">
                                        Beauty Care for Everyone</p>
                                </div>
                                <div className="w3breadcrumb-right">
                                    <ul className="breadcrumbs-custom-path">
                                        <li><Link to="/admin/dashboard">Dashboard</Link></li>
                                        <li className="active"><span className="fas fa-angle-double-right mx-2" />Manage Artist</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/*//inner-page*/}

                {data.length > 0 ? (<section className='my-5'>
                    <div className="container">
                        <div className='table-responsive '>
                            <table border="1" className="table table-striped ">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Shop Title</th>
                                        <th scope="col">Mobile</th>
                                        <th scope="col">Area</th>
                                        <th>Full Address</th>
                                        <th scope="col">Map</th>
                                        <th scope="col">about</th>
                                        <th scope="col">services</th>
                                        <th scope="col">Profile</th>
                                        <th scope="col">Work Images</th>
                                        <th scope="col">Product Used</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Travel to Venue</th>
                                        <th scope="col">Airbrush</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Since Work</th>
                                        <th scope="col">Time</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data.map((item) => (
                                        <tr key={item.id}>
                                            <th scope="row">{item.id}</th>
                                            <td>{item.name}</td>
                                            <td> <Link to={`mailto:${item.email}`}>{item.email}</Link></td>
                                            <td>{item.shop_title} </td>
                                            <td>{item.mobile} </td>
                                            <td>{item.area} </td>
                                            <td>{item.full_address} </td>
                                            <td> <div className="map-iframe">
                                                <iframe src={item.map_url} width={200} height={200} frameBorder={0} style={{ border: "2px solid red " }} allowFullScreen />
                                            </div>  </td>
                                            <td>{item.about} </td>
                                            <td>{item.services} </td>
                                            <td> <img src={item.profile_img} style={{ objectFit: "cover" }} width={200} height={200} alt="" />  </td>
                                            <td><img src={item.work_img} style={{ objectFit: "cover" }} width={200} height={200} alt="" /></td>
                                            <td>{item.product_used} </td>
                                            <td><h2 className='price_head'>{item.price}</h2>  </td>
                                            <td >{item.travel_to_vanue} </td>
                                            <td>{item.airbrush} </td>
                                            <td>
                                                <div>
                                                    {item.status == "Unblock" ? <button className='btn btn-success' >{item.status}</button> : <button className='btn btn-danger' >{item.status}</button>}
                                                </div>
                                            </td>
                                            <td>{item.since_work} </td>
                                            <td>{item.timming} </td>
                                            <td>
                                                <div className='d-flex gap-3'>
                                                    <button className='btn btn-danger' onClick={() => handleDelete(item.id)}><span className='fas fa-trash'></span></button>
                                                    {/* <button className='btn btn-success'><span className='fas fa-edit'></span></button> */}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}


                                </tbody>
                            </table>

                        </div>
                    </div>
                </section>) : <center className='my-5'><img src="https://media.tenor.com/_62bXB8gnzoAAAAj/loading.gif" alt="loading" className='my-5' width={"50px"} /></center>}

                {/*//w3l-project*/}
            </div>
        </>
    )
}

export default ArtistManage