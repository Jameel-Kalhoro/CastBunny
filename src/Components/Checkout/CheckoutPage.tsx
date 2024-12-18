import React from "react";
import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Grid } from "@mui/material";
import "./CheckoutPage.css";
import paypal from "../assets/paypal.png";
import creditcard from "../assets/creditcard.png";


const CheckoutPage = ()=>{
    const countries = ["United States", "Canada", "United Kingdom", "Australia", "India"];


    return (
        <div className="checkout-container">
          <form  className="checkout-form">
            <div className="divinbetween">
            <div className="basic-info">
              <h3 className="form-h3 reachMoreText">Basic Information</h3>
              <input className="reachMoreText" type="text" placeholder="Name" required />
              <input className="reachMoreText" type="email" placeholder="Email" required />
              <input className="reachMoreText" type="text" placeholder="Address" required />
              <input className="reachMoreText" type="text" placeholder="Country of Residence" required />
            </div>
    
            <div className="payment-details">
              <h3 className="form-h3 reachMoreText">Payment Details</h3>
              <div className="payment-method">
                <label className="reachMoreText">
                  <input type="radio" name="payment" value="credit-card" defaultChecked />
                  <img src={creditcard}></img>
                  Credit Card
                </label>
                <label className="reachMoreText">
                  <input type="radio" name="payment" value="paypal" />
                  <img src={paypal}></img>
                  PayPal
                </label>
              </div>
              <input className="reachMoreText" type="text" placeholder="Cardholder Name" required />
              <input className="reachMoreText" type="text" placeholder="Card Number" required />
              <div className="card-info">
                <input className="reachMoreText" type="month" placeholder="Expiry Date" required />
                <input className="reachMoreText" type="text" placeholder="CVC" required />
              </div>
            </div>
            </div>
    
            <div className="summary">
              <h3 className="reachMoreText">Summary</h3>
              <div className="summary-item reachMoreText">
                <span>Professional Plan</span>
                <span>$39</span>
              </div>
              <div className="summary-item reachMoreText">
                <span>Tax</span>
                <span>$2.5</span>
              </div>
              <div className="summary-item reachMoreText">
                    <input type="text" placeholder="Apply Coupon" />
                    <span>Apply</span>
              </div>
              <div className="total reachMoreText">
                <span>Total</span>
                <span>$41.5</span>
              </div>
              <div className="reachMoreBtnWrap d-flex justify-content-center align-items-center">
                <button type="submit" className="reachMoreBtn">Checkout Now</button>
              </div>
            </div>
          </form>
        </div>
      );

}

export default CheckoutPage;