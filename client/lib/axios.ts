import Axios from "axios";
import api from "apis";
import aspida from "@aspida/axios";

export const axios = Axios.create({});

export const client = api(aspida(axios));
