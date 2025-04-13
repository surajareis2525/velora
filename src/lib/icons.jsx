import React from "react";

export const Home = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9L12 2l9 7"></path>
    <path d="M9 22V12H15V22"></path>
  </svg>
);

export const Gauge = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 12l3-3"></path>
    <path d="M12 3a9 9 0 0 1 9 9"></path>
    <path d="M3 12a9 9 0 0 1 9-9"></path>
    <path d="M12 21a9 9 0 0 0 9-9"></path>
    <path d="M3 12a9 9 0 0 0 9 9"></path>
  </svg>
);

export const Settings = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33"></path>
    <path d="M4.6 9a1.65 1.65 0 0 1-.33-1.82l.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 1 .33 1.82"></path>
    <path d="M9 4.6a1.65 1.65 0 0 1 1.82-.33h.06a2 2 0 0 1 0 3.77h-.06A1.65 1.65 0 0 1 9 4.6"></path>
    <path d="M15 19.4a1.65 1.65 0 0 0-1.82.33v.06a2 2 0 1 0 3.77 0v-.06a1.65 1.65 0 0 0-.33-1.82"></path>
  </svg>
);
