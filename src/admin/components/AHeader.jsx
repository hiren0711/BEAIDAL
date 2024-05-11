import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';

function AHeader() {
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }

    useEffect(() => {
        const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
        const currentTheme = localStorage.getItem('mode');

        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);

            if (currentTheme === 'dark') {
                toggleSwitch.checked = true;
            }
        }
        toggleSwitch.addEventListener('change', switchTheme, false);

    }, [])
    return (
        <header id="site-header" className="fixed-top">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light stroke py-lg-0">
                    <h1><Link className="navbar-brand pe-xl-5 pe-lg-4" to="/admin/dashboard">
                        <i className="fas fa-spa" />Beaidal Admin
                    </Link></h1>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon fa icon-expand fa-bars" />
                        <span className="navbar-toggler-icon fa icon-close fa-times" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-lg-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/admin/dashboard">Dashboard</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admin/manage-artist">Manage Artist</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admin/manage-blog">Manage Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admin/manage-contact">Manage Contact</NavLink>
                            </li>
                        </ul>
                        {/*/search-right*/}
                        <ul className="header-search d-flex gap-4 me-lg-4">
                            {/* <li>
                                <Link to="/profile" className="btn search-btn btn-primary" title="Login">Profile</Link>
                            </li>
                            <li>
                                <Link to="/login" className="btn search-btn btn-primary" title="Login">Login</Link>
                            </li> */}

                            <li className="nav-item search-right">
                                <a href="#search" className="btn search-btn btn-primary" title="search">Search <span className="fas fa-search ms-3" aria-hidden="true" /></a>
                                {/* search popup */}
                                <div id="search" className="pop-overlay">
                                    <div className="popup">
                                        <h3 className="title-w3l two mb-4 text-left">Search Here</h3>
                                        <form action="#" method="GET" className="search-box d-flex position-relative">
                                            <input type="search" placeholder="Enter Keyword here" name="search" required="required" autoFocus />
                                            <button type="submit" className="btn"><span className="fas fa-search" aria-hidden="true" /></button>
                                        </form>
                                    </div>
                                    <a className="close" href="#close">×</a>
                                </div>
                                {/* /search popup */}
                            </li>

                        </ul>
                        {/*//search-right*/}
                    </div>
                    <div className="mobile-position">
                        <nav className="navigation">
                            <div className="theme-switch-wrapper">
                                <label className="theme-switch" htmlFor="checkbox">
                                    <input type="checkbox" id="checkbox" />
                                    <div className="mode-container">
                                        <i className="gg-sun" />
                                        <i className="gg-moon" />
                                    </div>
                                </label>
                            </div>
                        </nav>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default AHeader