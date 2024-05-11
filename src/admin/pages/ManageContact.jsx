import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

function ManageContact() {
    const [data, setData] = useState([])

    const fetchData = async () => {
        const res = await axios.get(`https://beaidal.com/view_contacts.php`);
        if (res.status == 200) {
            setData(res.data)
        }
    }

    const handleDelete = async (id) => {
        try {
            const res = await axios.post(`https://beaidal.com/delete_contacts.php`, { id: id })
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
                                        Manage Contact</h2>
                                    <p className="inner-page-para mt-2">
                                        Beauty Care for Everyone</p>
                                </div>
                                <div className="w3breadcrumb-right">
                                    <ul className="breadcrumbs-custom-path">
                                        <li><Link to="/admin/dashboard">Dashboard</Link></li>
                                        <li className="active"><span className="fas fa-angle-double-right mx-2" />Manage Contact</li>
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
                                        <th scope="col">Mobile</th>
                                        <th scope="col">Comment</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data.map((item) => (
                                        <tr key={item.id}>
                                            <td scope="row">{item.id}</td>
                                            <td>{item.name}</td>
                                            <td> <Link to={`mailto:${item.email}`}>{item.email}</Link> </td>
                                            <td>{item.mobile} </td>
                                            <td>{item.comment} </td>
                                            <td>
                                                <div className='d-flex gap-3'>
                                                    <button className='btn btn-danger' onClick={() => handleDelete(item.id)}><span className='fas fa-trash'></span></button>
                                                    {/* <Link to={`/admin/update-blog/${item.id}`} className='btn btn-success'><span className='fas fa-edit'></span></Link> */}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </section>) : <center className='my-5'><img src="https://media.tenor.com/_62bXB8gnzoAAAAj/loading.gif" alt="loading" className='my-5' width={"50px"} /></center>}
            </div>
        </>
    )
}

export default ManageContact