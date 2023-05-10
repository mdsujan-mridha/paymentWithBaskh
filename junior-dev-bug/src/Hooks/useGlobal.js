import axios from "axios";
import { useState } from "react";
import countryCode from "../Features/Checkout/Data/countryCode.json";

const useGlobal = () => {
  const [open, setOpen] = useState(false);
  const [mbCode, setMbCode] = useState(countryCode[15]);
  const [totalPrice, setTotalPrice] = useState(0);

  axios.defaults.headers = {
    'Content-Type': 'application/json',
    // Authorization: 'myspecialpassword'
    authorization: "id_token"
  }
  const toggleModal = () => setOpen(!open);

  const getPayment = (body) => {
    axios.post(`${process.env.REACT_APP_SERVER_URL}/api/bkash`, { ...body, totalPrice });
  }
  return {
    toggleModal,
    open,
    setMbCode,
    mbCode,
    getPayment,
    totalPrice,
    setTotalPrice,
  };
};
export default useGlobal;
