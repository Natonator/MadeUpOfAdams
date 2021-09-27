'use strict';

// const e = React.createElement;

// class Menu extends React.Component {

//   render() {
//       return  ;
//   }
// }

const menu = <div class="container px-4 px-lg-5">
    <a class="navbar-brand" href="#page-top">
        Start Bootstrap
    </a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
    </button>
<div class="collapse navbar-collapse" id="navbarResponsive">
    <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
        <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
        <li class="nav-item"><a class="nav-link" href="#signup">Contact</a></li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                Nate's Nifty Tools
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="./audioBookCalculator.html">Audiobook Calculator</a></li>
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
              <li><hr class="dropdown-divider"></hr></li>
              <li><a class="dropdown-item" href="#">Separated link</a></li>
            </ul>
        </li>
    </ul>
</div>
</div>;

const test = <span>Work damn you</span>

const domContainer = document.querySelector('#mainNav');
ReactDOM.render(test,domContainer);