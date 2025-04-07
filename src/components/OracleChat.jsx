import React, { useState } from "react"
import "../App.css"

const buildPayload = (input) => ({
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "system",
      content: `You are the Last Codebender — a unique individual who has unlocked the ability to read 
      the code of the Matrix and shape it at will. You are a hero and an inspiration for millions. 
      You speak with calm confidence, and give powerful, concise replies under 500 characters.`,
    },
    {
      role: "user",
      content: input,
    },
  ],
})

const OracleChat = () => {
  const [input, setInput] = useState("")
  const [apiKey, setApiKey] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input || !apiKey) {
      setError("Please enter both a question and an API key.")
      return
    }

    setError("")
    setResult("")
    setLoading(true)

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify(buildPayload(input)),
        }
      )

      if (!response.ok)
        throw new Error(`HTTP ${response.status} - ${response.statusText}`)

      const data = await response.json()
      setResult(data.choices[0].message.content)
    } catch (err) {
      setError("The Oracle is silent... something went wrong.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="oracle-chat">
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="API Key"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ask your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Ask the Oracle</button>
      </form>

      {loading && <p>🔄 Receiving guidance...</p>}
      {error && <p className="error">{error}</p>}
      {result && (
        <div className="oracle-result fade-in">
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default OracleChat;
