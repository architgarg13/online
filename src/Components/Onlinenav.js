import React, { Component } from 'react';
import '../App.css'
class Onlinenav extends Component{
    render(){
        return(<div className="header">
             <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 col-sm-12 col-12 ">
                    <div className="btn-group">
                    <button className="btn border dropdown-toggle my-md-4 my-2" data-toggle="dropdown" aria-haspopup="true" area-expanded="false">USD</button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">INR</a>
                    </div>
                    </div>
                    
                </div>
                <div className="col-md-4 col-12 text-center">
                    <h2 className="my-md-3 site-title text-white"><u>Build It Better</u></h2>
                </div>
                <div className="col-md-4 col-12 text-right">
                    <p className="my-md-4 header-links">
                        <a href="#" className="px-2">Sign-in</a>
                        <a href="#" className="px-1">Create an account</a> </p>
                </div>
            </div>

        </div>
        <div className="container-fluid p-0">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">HOME<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">FEATURES</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">COLLECTION</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">SHOP</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">ABOUT US</a>
      </li>

    </ul>
  </div>
  <div className="navbar-nav">
      <li className="nav-item border rounded-circle mx-2 search-icon">
      <i class="fas fa-search p-2"></i>
      </li>
      <li className="nav-item border rounded-circle mx-2 basket-icon">
      <i class="fas fa-shopping-basket p-2"></i>
      </li>
  </div>
</nav>
        </div>
        </div>
       
        );
    }
}
export default Onlinenav;