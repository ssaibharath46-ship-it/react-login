import './App.css'

function App() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Welcome</h1>
        <p>React Login Page</p>

        <input
          type="text"
          placeholder="Username"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button>Login</button>
      </div>
    </div>
  )
}

export default App