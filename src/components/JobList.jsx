import React, { useState } from "react";
import JobCard from "./JobCard";

const JobList = ({ jobs }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = `${job.title} ${job.company} ${job.location}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesType = selectedType === "All" || job.type === selectedType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-orange-600 mb-2">🔥 Latest Job Listings</h2>
        <p className="text-gray-500">Browse and apply for jobs that match your skills</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded w-full md:w-1/2"
        />

        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded w-full md:w-1/4"
        >
          <option value="All">All Types</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
        </select>
      </div>

      {/* Job Listings */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <p className="text-gray-500 col-span-full text-center">No jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default JobList;
