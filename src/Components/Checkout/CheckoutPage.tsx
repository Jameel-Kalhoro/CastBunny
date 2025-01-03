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
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Address" required />
              <input type="text" placeholder="Country of Residence" required />
            </div>
    
            <div className="payment-details">
              <h3 className="form-h3 reachMoreText">Payment Details</h3>
              <div className="payment-method">
                <label >
                  <input type="radio" name="payment" value="credit-card" defaultChecked />
                  <img src={creditcard}></img>
                  Credit Card
                </label>
                <label >
                  <input type="radio" name="payment" value="paypal" />
                  <img src={paypal}></img>
                  PayPal
                </label>
              </div>
              <input type="text" placeholder="Cardholder Name" required />
              <input type="text" placeholder="Card Number" required />
              <div className="card-info">
                <input type="month" placeholder="Expiry Date" required />
                <input type="text" placeholder="CVC" required />
              </div>
            </div>
            </div>
    
            <div className="summary">
              <h3 className="reachMoreText">Summary</h3>
              <div className="summary-item">
                <span>Professional Plan</span>
                <span>$39</span>
              </div>
              <div className="summary-item">
                <span>Tax</span>
                <span>$2.5</span>
              </div>
              <div className="summary-item">
                    <input type="text" placeholder="Apply Coupon" />
                    <span>Apply</span>
              </div>
              <div className="total">
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