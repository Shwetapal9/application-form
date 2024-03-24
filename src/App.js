import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [branch, setBranch] = useState();
  const [confirm, setConfirm] = useState("yes");

  function getFormData(e) {
    e.preventDefault();
    console.log(userName, email, phone, branch, confirm);
  }

  return (
    <>
      <form className={open ? "submitted" : "container"} onSubmit={getFormData}>
        <h2 className="heading">Registration Form</h2>
        <div className=" form user">
          <label htmlFor="username">UserName:</label>
          <input
            type="text"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="form email">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form phone">
          <label htmlFor="phone">Phone:</label>
          <input
            type="number"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="form branch">
          <label htmlFor="branch">Branch:</label>
          <select value={branch} onChange={(e) => setBranch(e.target.value)}>
            <option value="cse">CSE</option>
            <option value="it">IT</option>
            <option value="ece">ECE</option>
          </select>
        </div>
        <div className="form confirm">
          <label htmlFor="confirm">Confirmation</label>
          <input
            type="radio"
            id="yes"
            value="yes"
            checked={confirm === "yes"}
            onChange={() => setConfirm("yes")}
          />
          <label>YES</label>
          <input
            type="radio"
            id="no"
            value="no"
            checked={confirm === "no"}
            onChange={() => setConfirm("no")}
          />
          <label>NO</label>
        </div>
        <button className="btn" type="submit" onClick={handleOpen}>
          Register
        </button>
      </form>
      {userName && email && phone && branch && confirm && (
        <Modal isOpen={open} onClose={handleClose}>
          <>
            <h1>Details</h1>
            <h2>UserName: {userName}</h2>
            <h2>Email: {email}</h2>
            <h2>Phone : {phone}</h2>
            <h2>Branch: {branch}</h2>
            <h2>Confirm : {confirm}</h2>
          </>
        </Modal>
      )}
    </>
  );
}

export default App;
