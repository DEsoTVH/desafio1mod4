import "./App.css";
import Header from "./components/header";
import Card from "./components/Card";
import Footer from "./components/Footer";

const perros = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    nombre: "Perro Chocolo",
    descripcion: "Perro chocolo que roba tu corasound.",
    tagTexto: "Chocolito",
    tagColor: "primary",
  },
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1669040674572-836c64a3ac70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
    nombre: "Perro Putazo",
    descripcion:
      "Perro que usara su ternura para sacarte hasta el ultimo peso!.",
    tagTexto: "Coolberto",
    tagColor: "secondary",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1529467037979-99d067b7677d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    nombre: "Perro Trolo",
    descripcion: "Monta todo lo que encuentra.",
    tagTexto: "Sin respeto",
    tagColor: "danger",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1562714529-94d65989df68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
    nombre: "Amenaza Fantasma",
    descripcion:
      "No dejes que su cara de -pendejito- te distraiga de sus planes.",
    tagTexto: "Furia",
    tagColor: "info",
  },
];

function App() {
  return (
    <>
      <Header titulo="Adopta un perrito" />
      <div className="App">
        {perros.map((perro, index) => (
          <Card key={index} {...perro} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
