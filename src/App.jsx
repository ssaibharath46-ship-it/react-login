import "./App.css";

function App() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <p>Welcome back!</p>

        <form>
          <input
            type="email"
            placeholder="Email"
            required
          />

          <input
            type="password"
            placeholder="Password"
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;