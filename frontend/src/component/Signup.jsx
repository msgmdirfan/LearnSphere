import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/signup", formData);
      setMessage(res.data.message);
      setFormData({ name: "", email: "", password: "" });
      setTimeout(() => {
        navigate("/login");
      }, 500);
    } catch (err) {
      setMessage(err.response?.data?.error || "An error occurred during signup");
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
            value={formData.name}
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
            value={formData.email}
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
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn btn-primary w-100" type="submit">
          Signup
        </button>
        <p className="mt-2">
          Already Have an Account?
          <Link to="/login" className="ms-2">
            Login
          </Link>
        </p>
      </form>
      {message && (
        <p className={`mt-2 ${message.includes("error") ? "text-danger" : "text-success"}`}>
          {message}
        </p>
      )}
    </div>
  );
}