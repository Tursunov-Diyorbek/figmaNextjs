import axios from "axios";
import React from "react";

export const api = axios.create({
  baseURL: "https://fakestoreapi.com/",
  timeout: 30 * 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const ContextApi = React.createContext(api);