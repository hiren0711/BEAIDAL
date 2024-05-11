import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
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
                                        Dashboard</h2>
                                    <p className="inner-page-para mt-2">
                                        Beauty Care for Everyone</p>
                                </div>
                                <div className="w3breadcrumb-right">
                                    <ul className="breadcrumbs-custom-path">
                                        <li><Link to="/admin/dashboard">Dashboard</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/*//inner-page*/}
                {/*/w3l-project*/}
                <section id="counts" className="w3lcounts my-5">
                    <div className="container py-md-3">
                        <div className="w3l-project-in">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 w3stats_info counter_grid">
                                    <div className="count-box">
                                        <i className="fas fa-users" />
                                        <div className="count-box-right">
                                            <p className="counter">960</p>
                                            <p>Happy Clients</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mt-5 mt-md-0 w3stats_info counter_grid">
                                    <div className="count-box">
                                        <i className="fas fa-user-shield" />
                                        <div className="count-box-right">
                                            <p className="counter">1560</p>
                                            <p>Our Staff</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 w3stats_info counter_grid">
                                    <div className="count-box">
                                        <i className="fas fa-headset" />
                                        <div className="count-box-right">
                                            <p className="counter">1660</p>
                                            <p>Hours Of Support</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 w3stats_info counter_grid">
                                    <div className="count-box">
                                        <i className="fas fa-trophy" />
                                        <div className="count-box-right">
                                            <p className="counter">2860</p>
                                            <p>Awards</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
          
            </div>
        </>
    )
}

export default Dashboard