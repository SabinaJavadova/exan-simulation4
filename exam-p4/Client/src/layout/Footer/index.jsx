import React from "react";
import Grid from "@mui/material/Grid2";
import style from "./index.module.scss";
import "../../../src/index.css"
import { FaHeart } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className={style["container"]}>
        <Grid container spacing={2}>
          <Grid xs={12} sm={3} md={3} className={style["col1"]}>
            <ul>
              <li>
                <img
                  src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png"
                  alt=""
                />
              </li>
              <li>
                <p>
                  Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf
                  sed do eiusmod tem.
                </p>
              </li>
            </ul>
          </Grid>
          <Grid xs={12} sm={3} md={3} className={style["col2"]}>
            <ul>
              <h4>Quick Links</h4>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Offers & Discounts</a>
              </li>
              <li>
                <a href="#">Get Coupon</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </Grid>
          <Grid xs={12} sm={3} md={3} className={style["col2"]}>
            <ul>
              <h4>Quick Links</h4>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Offers & Discounts</a>
              </li>
              <li>
                <a href="#">Get Coupon</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </Grid>
          <Grid xs={12} sm={3} md={3} className={style["col2"]}>
            <ul>
              <h4>Quick Links</h4>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Offers & Discounts</a>
              </li>
              <li>
                <a href="#">Get Coupon</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </Grid>
        </Grid>

        <p>Copyright ©2025 All rights reserved | This template is made with <FaHeart className={style["ikon"]} />  by <span> Colorlib</span></p>
      </div>
    </footer>
  );
};

export default Footer;
