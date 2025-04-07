import "./App.css"
import "./styles/styles.css"
import OracleChat from "./components/OracleChat"
import OracleCard from "./components/OracleCard"
import ThemeToggle from "./components/ThemeToggle"

function App() {
  return (
    <div className="App">
      <div className="theme-toggle-container">
        <ThemeToggle />
      </div>
      <header className="oracle-header">
        <h1>This is your gateway to</h1>
        <h2 className="highlight">The Tech Career Oracle</h2>
        <p className="subtext">
          Ask your questions, dear dev.
          <br />
          The path ahead will reveal itself.
        </p>
      </header>

      <OracleCard />
      <OracleChat />
    </div>
  )
}

export default App
