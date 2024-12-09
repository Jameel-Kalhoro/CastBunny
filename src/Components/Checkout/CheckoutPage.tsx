import React from "react";
import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Grid } from "@mui/material";
import "./CheckoutPage.css";


const CheckoutPage = ()=>{
    const countries = ["United States", "Canada", "United Kingdom", "Australia", "India"];


    return(
        <div className="containerCheckout">
            <form className="form">
                <h2 className="header">Checkout Payment</h2>

                <TextField label="Name" fullWidth margin="normal" required />
                <TextField type="email" label="Email" fullWidth margin="normal" required />
                <TextField label="Address" fullWidth margin="normal" required />

                <FormControl fullWidth margin="normal">
                <InputLabel>Country of Residence</InputLabel>
                    <Select defaultValue="" required>
                        {countries.map((country, index) => (
                        <MenuItem key={index} value={country}>
                            {country}
                        </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <TextField type="date" fullWidth margin="normal" label="Date of Birth" InputLabelProps={{ shrink: true }} required />

                <TextField type="text" label="Card Number" fullWidth margin="normal" required />
                <TextField type="text" label="CVV" fullWidth margin="normal" required />
                <TextField type="month" fullWidth margin="normal" label="Expiry Date" InputLabelProps={{ shrink: true }} required />

                <Button variant="contained" type="submit" color="primary" fullWidth>
                Proceed to Pay
                </Button>
            </form>
        </div>
    );

}

export default CheckoutPage;