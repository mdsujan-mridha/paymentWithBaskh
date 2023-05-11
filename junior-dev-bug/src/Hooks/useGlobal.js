import axios from "axios";
import { useState } from "react";
import countryCode from "../Features/Checkout/Data/countryCode.json";

const useGlobal = () => {
  const [open, setOpen] = useState(false);
  const [mbCode, setMbCode] = useState(countryCode[15]);
  const [totalPrice, setTotalPrice] = useState(0);


  const toggleModal = () => setOpen(!open);

  const getPayment = (body) => {
    axios.post("http://localhost:9000/api/bkash/createPayment", { ...body,totalPrice}, {
      headers: {
        'Content-Type': 'application/json'
        //set authorize here
      },
      
    })
    .then(res =>{
      console.log(res.data);
    });

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
