import React from 'react';

export default function Navbar() {
  return (
    <nav className="agency-nav">
      <div className="nav-logo">THS</div>
      <div className="nav-links">
        {/* We can add links here later if needed, for now just identity */}
        <div className="nav-status">
          <span className="status-dot"></span>
          SYSTEM ACTIVE
        </div>
      </div>
    </nav>
  );
}
