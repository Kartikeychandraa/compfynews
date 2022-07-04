import React from 'react';
import "./CSS/Header.css";
import Country from "./Country";
function Header(){

  return(
<div className="header">
  <div className="header_item">

 <button className="header_button" > Home </button>
  <button className="header_button" data-toggle="tooltip" data-placement="bottom" title="Advance Search" data-toggle="modal" data-target="#exampleModalCenter"> search </button>
  </div>

<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Advance Search</h5>
        <button type="button" className="btn btn-primary" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
<label>select any search options</label>
        <br />
        <input type="text" className="form-control" placeholder="Search anything you have in your mind" />
        <br />
        <input type="text" className="form-control" placeholder="Search for specific source" />
         <br />
<label>Choose a category from this list: 
<input list="browsers" name="myBrowser" /></label>
<datalist id="browsers">
  <option value="business" />
   <option value="entertainment" />
   <option value="general" />
   <option value="health" />
   <option value="science" />
  <option value="sports" />
  <option value="technology" />

  
</datalist>
        <br/>
<label>Date: From</label>
        <input type = "date" />
        <label> 
        To
        </label>
         <input type = "date" />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary">Find</button>
      </div>
    </div>
  </div>
</div>
  
 </div>

)
  
}

export default Header;