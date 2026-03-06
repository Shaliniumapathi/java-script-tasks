import { useState } from "react";

function ShowHidePassword() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <h2>Show / Hide Password</h2>

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter Password"
      />

      <button onClick={togglePassword}>
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default ShowHidePassword;