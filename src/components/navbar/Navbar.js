import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#"><span className='text-primary'><i class="bi bi-bank2"></i> CODE-</span>City</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to = '/'>
                            <span class="nav-link text-dark" href="#">Home</span>
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
                    <li class="nav-item">
                        <Link to = '/bootcamp'>
                            <a class="nav-link text-dark" href="#">Bootcamp</a>
                        </Link>
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
