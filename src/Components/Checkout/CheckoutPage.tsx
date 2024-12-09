import React from "react";
import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Grid } from "@mui/material";
import "./CheckoutPage.css";


const CheckoutPage = ()=>{
    const countries = ["United States", "Canada", "United Kingdom", "Australia", "India"];


    return(
        <div className="containerCheckout">
            <form className="form">
                <h2 className="header">Checkout Payment</h2>

                <TextField 
                label="Name"
                className="inputCheckout" 
                fullWidth margin="normal" 
                required 
                />
                <TextField 
                type="email" 
                label="Email"
                className="inputCheckout" 
                fullWidth margin="normal" 
                required />
                <TextField 
                label="Address"
                className="inputCheckout" 
                fullWidth margin="normal" 
                required />

                <FormControl fullWidth margin="normal">
                <InputLabel >Country of Residence</InputLabel>
                    <Select defaultValue="" className="inputCheckout" required>
                        {countries.map((country, index) => (
                        <MenuItem  key={index} value={country}>
                            {country}
                        </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <TextField className="inputCheckout" type="date" fullWidth margin="normal" label="Date of Birth" InputLabelProps={{ shrink: true }} required />

                <TextField className="inputCheckout" type="text" label="Card Number" fullWidth margin="normal" required />
                <TextField className="inputCheckout" type="text" label="CVV" fullWidth margin="normal" required />
                <TextField className="inputCheckout" type="month" fullWidth margin="normal" label="Expiry Date" InputLabelProps={{ shrink: true }} required />

                <Button variant="contained" type="submit" color="primary" fullWidth>
                Proceed to Pay
                </Button>
            </form>
        </div>
    );

}

export default CheckoutPage;