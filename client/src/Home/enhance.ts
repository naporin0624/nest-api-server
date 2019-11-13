import axios from "axios";
import * as React from "react";

export default () => {
  axios.get("/api/rfid/tags");
};
