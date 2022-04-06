import axios from "axios";
import { create } from "domain";

export default axios.create({
    baseURL:'https://my-application-teste.herokuapp.com/'
})