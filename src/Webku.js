import React, { useState } from 'react';

function Webku() {
  // Deklarasi state untuk menentukan status login
  // Kondisi awal: pengguna belum login (false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Fungsi untuk mengubah status login menjadi true (simulate login)
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Fungsi untuk mengubah status login menjadi false (simulate logout)
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h1>WEBKU Application</h1>
      {/* Conditional Rendering menggunakan operator ternary */}
      {isLoggedIn ? (
        // Jika isLoggedIn true, tampilkan dashboard
        <div>
          <h2>Welcome, User!</h2>
          <p>This is your dashboard where you can see your personalized content.</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        // Jika isLoggedIn false, tampilkan pesan login
        <div>
          <h2>Please log in to continue</h2>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default Webku;
