import React from "react";
import ReactDOM from "react-dom";
import { CareerItem } from "./career-item";
import { ListingItem } from "./components/listing-item";

ReactDOM.render(
  <div className="flex flex-col gap-3 p-3">
    <ListingItem />
    <ListingItem />
    <ListingItem />
  </div>,
  document.querySelector("#root")
);
