import React, { Component, Container, Row,Col } from 'react'
class Test extends Component {
import 
    render() {
        return (
            <div>
             <footer id="footer">
  <div className="footer-newsletter">
    <div className="container">
    <div className="d-flex justify-content-center justify-content-lg-start">
         
        </div>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h5>Make sure that your Model is selected</h5>
          <div className="form-group">
            <textarea className="form-control" name="message" rows={10} required defaultValue={""} />
          </div>
          <br />
          <div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group" role="group" aria-label="First group">
  <select id="select">
            <optgroup label>
              <option>AraBert</option>
              <option>MarBert</option>
              <option>CamulBert</option>
            </optgroup>
            <optgroup label="Deep Learning Models">
              <option>LSTM</option>
              <option>BiLSTM</option>
              <option>GRU</option>
              <option>CNN</option>
              <option>CNN-BiLSTM</option>
            </optgroup>
          </select>  
  </div>
  <div class="input-group">
    <div class="input-group-prepend">
    <div className="d-flex justify-content-center justify-content-lg-start">
    <div class="text-center text-md-left">
          <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Predect</a>
        </div>

        </div>    </div>
     </div>
</div>
         </div>
      </div>
    </div>
  </div>
</footer>   
            </div>)}}
            export default Test