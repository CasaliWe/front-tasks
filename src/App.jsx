import './App.css'

function App() {

  const teste = import.meta.env.VITE_API

  return (
      <h1>{teste}</h1>
  )
}

export default App
