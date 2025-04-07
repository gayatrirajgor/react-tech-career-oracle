import React from "react"
import "../App.css"
import '../styles/oracleCard.css';


const dailyMantras = [
  "Today, focus on progress, not perfection. Push one commit, student.",
  "Small steps forward still move mountains.",
  "Debug your doubts like you debug your code.",
  "You are not behind. You are exactly on time.",
  "What you ship is more powerful than what you plan.",
  "Confidence is a skill — not a trait.",
  "Stay curious. It's your greatest tech stack.",
  "Tech is just a tool. You are the magic.",
  "Be the mentor you once needed.",
  "Clarity comes from coding, not just thinking."
]

const OracleCard = () => {
  const today = new Date().getDate()
  const message = dailyMantras[today % dailyMantras.length]

  return (
    <div className="oracle-card fade-in">
      <h3>🧘🏾‍♀️ Daily Guidance</h3>
      <p>{message}</p>
    </div>
  )
}

export default OracleCard