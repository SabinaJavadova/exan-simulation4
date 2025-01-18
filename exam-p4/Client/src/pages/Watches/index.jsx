import React, { useState, useEffect } from "react";
import style from "../Watches/index.module.scss";
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import Grid from "@mui/material/Grid2";
import { BASE_URL } from "../../constant";

const Watches = () => {
  const [watches, setWatches] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const getData = async () => {
    try {
      const res = await axios(`${BASE_URL}`);
      setWatches(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const sortData = (watchesArray) => {
    const sortedArray = [...watchesArray]; // Create a copy to avoid mutating original array

    if (sortBy === "price") {
      // Sorting by price in ascending order
      return sortedArray.sort((a, b) => a.price - b.price);
    } else if (sortBy === "name") {
      // Sorting by name in alphabetical order
      return sortedArray.sort((a, b) => a.name.localeCompare(b.name));
    }
    return sortedArray;
  };

  const filteredWatches = watches.filter((w) =>
    w.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  const sortedFilteredWatches = sortData(filteredWatches);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={style["container"]}>
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <CiSearch />
      </div>

      {/* Dropdown for sorting */}
      <div className="sort-by">
        <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>

      <Grid container spacing={2}>
        {sortedFilteredWatches.length > 0 &&
          sortedFilteredWatches.map((watch) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} className={style["grid"]} key={watch._id}>
              <div>
                {watch.img && <img src={watch.img} alt={watch.name} />}
                <h3>{watch.name}</h3>
                <p className={style["ps"]}>${watch.price}</p>
              </div>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Watches;
