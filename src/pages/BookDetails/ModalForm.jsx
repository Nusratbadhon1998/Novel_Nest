import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../hooks/useAuth";

function ModalForm({handleBorrowBook}) {
  const { user } = useAuth();
  const [borrowedDate, setBorrowedDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const inputCss= "border w-full py-2 border-yellow"


  return (
    <form onSubmit={handleBorrowBook} className="w-3/4">
      <label>User Name</label>
      <br />
      <input
        defaultValue={user.displayName}
        className={inputCss}
        disabled
        name="name"
        type="text"
      />
      <br />
      <label>Email</label>
      <br />
      <input
        defaultValue={user.email}
        className={inputCss}
        name="email"
        disabled
        type="text"
      />
      <br />
      <label htmlFor="">Borrowed Date</label> <br />
      <DatePicker
      name="borrowedDate"
      disabled
        className={inputCss}
        selected={borrowedDate}
       
      />
      <br />
      <label htmlFor="">Return Date</label> <br />
      <DatePicker
      name="returnDate"
        className={inputCss}
        selected={returnDate}
        onChange={(date) => setReturnDate(date)}
      />
      <br />
      <input  className="w-full cursor-pointer bg-black text-white mt-5 h-8 rounded" type="submit" value="Submit" />
    </form>
  );
}

export default ModalForm;
