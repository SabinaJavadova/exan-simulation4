import React from 'react';
import style from "../Home/index.module.scss";
import Grid from '@mui/material/Grid2';
import Watches from '../Watches';

const Home = () => {
  return (
    <>


      <div className={style["section1"]}>
        <div className={style["containerss"]}>
          <h1>Select Your new Perfect Style</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti aliquid a possimus voluptates officiis quae dolore id fugit, ab omnis nostrum totam corporis minima re</p>
          <div>
            <button className={style["buton"]}>
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      <div className={style["container"]}>
        <div className={style["section2"]}>
          <h2>New Arrivals</h2>
          <Grid container spacing={2}>
            <Grid xs={12} sm={4} md={4}>
              <img
                src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png"
                alt="New product 1"
                className={style["product-img"]}
              />
            </Grid>
            <Grid xs={12} sm={4} md={4}>
              <img
                src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png"
                alt="New product 2"
                className={style["product-img"]}
              />
            </Grid>
            <Grid xs={12} sm={4} md={4}>
              <img
                src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png"
                alt="New product 3"
                className={style["product-img"]}
              />
            </Grid>
          </Grid>
        </div>
      </div>

      <Watches/>
    </>
  );
};

export default Home;
