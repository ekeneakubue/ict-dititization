import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#"><span className='text-success'>ICT-UNN</span> Digitization Unit</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to = '/'>
                            <a class="nav-link text-dark" href="#">Home</a>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to = '/ourteam'>
                            <a class="nav-link text-dark" href="#">Our Team</a>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to = '/projects'>
                            <a class="nav-link text-dark" href="#">Projects</a>
                        </Link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-dark" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            Units
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item text-dark" href="#">Admin Office</a>
                            <a class="dropdown-item text-dark" href="#">Customer Services</a>
                            <a class="dropdown-item text-dark" href="#">Website</a>
                            <a class="dropdown-item text-dark" href="#">Portal</a>
                            <a class="dropdown-item text-dark" href="#">Webometrics</a>
                            <a class="dropdown-item text-dark" href="#">Hardware</a>
                            <a class="dropdown-item text-dark" href="#">Network</a>
                            <a class="dropdown-item text-dark" href="#">Special Assignments</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <Link to = '/contacts'>
                            <a class="nav-link text-dark" href="#">Contact Us</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
