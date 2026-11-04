import { useState } from "react";
import { Outlet } from "react-router";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    id: "",
    book_name: "",
    author_name: "",
    author_id: "",
    price: "",
    page: "",
  });

  // Handle changes across all inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Format payload data types to match schema
    const payload = {
      id: formData.id,
      book_name: formData.book_name,
      author_name: formData.author_name,
      author_id: formData.author_id,
      price: parseFloat(formData.price),
      page: parseInt(formData.page, 10),
    };

    try {
      const response = await fetch("http://localhost:3000/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Success:", result);
      alert("Book submitted successfully!");

      // Reset form fields
      setFormData({
        id: "",
        book_name: "",
        author_name: "",
        author_id: "",
        price: "",
        page: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send book data.");
    }
  };

  return (
    <>
      <form id="bookForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="book_id">ID:</label>
          <input
            type="text"
            id="book_id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="book_name">Book Name:</label>
          <input
            type="text"
            id="book_name"
            name="book_name"
            value={formData.book_name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="author_name">Author Name:</label>
          <input
            type="text"
            id="author_name"
            name="author_name"
            value={formData.author_name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="author_id">Author ID:</label>
          <input
            type="text"
            id="author_id"
            name="author_id"
            value={formData.author_id}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            step="0.01"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="page">Page Count:</label>
          <input
            type="number"
            id="page"
            name="page"
            value={formData.page}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit Book</button>
      </form>

      <div style={{ fontSize: "36px" }}>
        <Outlet />
      </div>
    </>
  );
}

export default App;
