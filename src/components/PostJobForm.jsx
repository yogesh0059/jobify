import React, { useState } from "react";

const PostJobForm = ({ onAddJob }) => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full-time",
    salary: "",
    mode: "Remote",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      ...formData,
      id: Date.now(),
    };
    onAddJob(newJob);
    setFormData({ title: "", company: "", location: "", type: "Full-time", salary: "", mode: "Remote" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-lg max-w-xl mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4 text-indigo-700">🚀 Post a New Job</h2>

      {["title", "company", "location", "salary"].map((field) => (
        <input
          key={field}
          name={field}
          placeholder={`Enter ${field}`}
          value={formData[field]}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
      ))}

      <div className="flex gap-4 mb-4">
        <select name="type" value={formData.type} onChange={handleChange} className="p-2 border rounded w-1/2">
          <option>Full-time</option>
          <option>Part-time</option>
        </select>
        <select name="mode" value={formData.mode} onChange={handleChange} className="p-2 border rounded w-1/2">
          <option>Remote</option>
          <option>Onsite</option>
          <option>Hybrid</option>
        </select>
      </div>

      <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
        Post Job
      </button>
    </form>
  );
};

export default PostJobForm;
