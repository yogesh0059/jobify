// src/components/JobCard.jsx
import React from "react";

function JobCard({ job }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-gray-800 mb-1">{job.title}</h3>
      <p className="text-gray-500">{job.company}</p>
      <div className="text-sm text-gray-600 mt-2 space-y-1">
        {job.location && <p>📍 {job.location}</p>}
        {job.remote && <p>🏠 {job.remote}</p>}
        {job.type && <p>📋 {job.type}</p>}
        {job.salary && <p>💰 {job.salary}</p>}
      </div>
    </div>
  );
}

export default JobCard;
