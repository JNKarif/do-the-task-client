import React, { useEffect } from 'react';
import 'bulma/css/bulma.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', () => {
      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    });
  }, []);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to='/' className="navbar-item">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="" />
        </Link>

        {/* #########for bulma burger responsive */}

        <Link to='/'
          role="button"
          className="navbar-burger"
          data-target="navMenu"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>

        <div className="navbar-menu" id="navMenu">
          {/* <!-- navbar-start, navbar-end... --> */}
        </div>
      </div>

      <div id="navMenu" className="navbar-menu">
        <div className="navbar-start">
          <Link to='/addTask' className="navbar-item">
            Add Task
          </Link>
          <Link to='/myTasks' className="navbar-item">
            My Tasks
          </Link>
          <Link to='/completedTasks' className="navbar-item">
            Completed Tasks
          </Link>



        </div>

        <div className="navbar-end">

          <div className="navbar-item">
            <div className="buttons">

              <Link to='/' className="button is-primary">
                <strong>Sign up</strong>
              </Link>
              <Link to='/' className="button is-light">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>

  );
};

export default NavBar;