import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/signup", formData);
      setMessage("Signup Successful");
    } catch (err) {
      setMessage(err.response?.data?.error || "An error occurred");
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h2 className="mb-4">Signup</h2>
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow w-25">
        <div className="mb-3">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn btn-primary w-100" type="submit">Signup</button>

        <p>Already Have an Account :<Link to="/login" className="ms-2">Login</Link></p>
      </form>
      {message && <p className="mt-2 text-success">{message}</p>}
    </div>
  );
}
