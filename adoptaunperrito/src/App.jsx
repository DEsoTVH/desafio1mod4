import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Card from './components/Card'

function App() {

  return (
    <>
      <Header titulo="Adopta un perrito"/>
      <div className="App">
      <Card
        imageUrl="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
        nombre="Perro Chocolo"
        descripcion="Perro chocolo que roba tu corasound."
        tagTexto="Chocolito"
        tagColor="primary"
      />

      </div>
    </>
  )
}

export default App
