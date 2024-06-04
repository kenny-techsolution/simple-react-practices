import React, { useState } from "react";

const FormValidationApp = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  };

  const handleChange = (event) => {
    const newFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };

    setFormData(newFormData);
  };
  const submitForm = (e) => {
    console.log("submit form");
    e.preventDefault();
    const newErrors = validate();
    console.log(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("Form submitted successfully");
      setFormData({ name: "", email: "", password: "" });
      setErrors({});
    }
  };

  return (
    <form onSubmit={(e) => submitForm(e)}>
      <h1>Form Validation </h1>
      <div>
        <label>Name:</label>
        <input
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      <div>
        <label>Email:</label>
        <input
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      {<errors className="email"></errors> && (
        <p style={{ color: "red" }}>{errors.email}</p>
      )}
      <div>
        <label>Password:</label>
        <input
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      {<errors className="password"></errors> && (
        <p style={{ color: "red" }}>{errors.password}</p>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormValidationApp;
