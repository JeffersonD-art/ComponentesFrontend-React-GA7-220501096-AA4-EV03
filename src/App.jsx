import { useState ,useEffect } from "react";
import Header from "./components/Header";
import Pizza from "./components/Pizza";
import ModalForm from "./components/ModalForm";
import { db } from "./data/db";

function App() {

  const [data, setData] = useState(db);

  return (
    <>
      <Header />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestro Menú</h2>

      <ModalForm data={data} setData={setData} />

        <div className="row mt-5">
          {data.map((pizza) => {
            return <Pizza key={pizza.id} pizza={pizza} />;
          })}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            Pizza - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
