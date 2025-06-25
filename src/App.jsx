import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { jobData } from "./data";
import Login from "./components/Login";
import Register from "./components/Register";
import Landing from "./components/Landing";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [darkMode, setDarkMode] = useState(false);

  const filteredJobs = jobData.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "All" || job.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <Router>
      <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen" : "bg-gray-100 text-gray-800 min-h-screen"}>
        {/* Header */}
        <header className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 shadow-md">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link to="/" className="text-3xl font-bold flex items-center gap-2">
              <span>🚀</span> Job Board
            </Link>
            <div className="flex items-center gap-4 text-sm">
              <button onClick={() => setDarkMode(!darkMode)} className="bg-white text-purple-600 px-3 py-1 rounded-full shadow">
                {darkMode ? "☀️ Light" : "🌙 Dark"}
              </button>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={
            <main className="max-w-6xl mx-auto px-4 py-10">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-orange-600 flex justify-center items-center gap-2">
                  <span>🔥</span> Latest Job Listings
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Browse and apply for jobs that match your skills
                </p>
              </div>

              {/* Search & Filter */}
              <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
                <input
                  type="text"
                  placeholder="Search jobs..."
                  className="p-3 rounded-md w-full md:w-2/3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                  className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                >
                  <option value="All">All Types</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>

              {/* Job Cards */}
              <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition duration-300 border border-gray-200 dark:border-gray-700"
                    >
                      <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                      <p className="text-gray-500 dark:text-gray-300 text-sm mb-3">{job.company}</p>
                      <div className="text-sm space-y-1">
                        <p className="flex items-center gap-1">
                          <span role="img" aria-label="location">📍</span>
                          {job.location}
                        </p>
                        <p className="flex items-center gap-1">
                          <span role="img" aria-label="type">📄</span>
                          {job.type}
                        </p>
                        <p className="flex items-center gap-1">
                          <span role="img" aria-label="salary">💰</span>
                          {job.salary}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500 col-span-3">No jobs found matching your criteria.</p>
                )}
              </div>
            </main>
          } />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 text-center py-4 border-t mt-10 text-sm text-gray-500">
          © {new Date().getFullYear()} Job Board. All rights reserved.
        </footer>
      </div>
    </Router>
  );
};

export default App;
