import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../hooks/useAuth";

function ModalForm({handleBorrowBook}) {
  const { user } = useAuth();
  const [borrowedDate, setBorrowedDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());


  return (
    <form onSubmit={handleBorrowBook} className="w-3/4">
      <label>User Name</label>
      <br />
      <input
        defaultValue={user.displayName}
        className="w-full"
        disabled
        name="name"
        type="text"
      />
      <br />
      <label>Email</label>
      <br />
      <input
        defaultValue={user.email}
        className="w-full"
        name="email"
        disabled
        type="text"
      />
      <br />
      <label htmlFor="">Borrowed Date</label> <br />
      <DatePicker
      name="borrowedDate"
      disabled
        className="border p-2 rounded-md"
        selected={borrowedDate}
       
      />
      <br />
      <label htmlFor="">Return Date</label> <br />
      <DatePicker
      name="returnDate"
        className="border p-2 rounded-md"
        selected={returnDate}
        onChange={(date) => setReturnDate(date)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default ModalForm;
