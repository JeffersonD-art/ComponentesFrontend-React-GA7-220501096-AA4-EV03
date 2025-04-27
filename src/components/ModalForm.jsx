import { useState } from "react";

const ModalForm = ({ data, setData }) => {
  const [newPizza, setNewPizza] = useState({
    id: data.length + 1,
    name: "",
    image: "pizzas/pizzas-2-310x260.png",
    description: "",
    price: "0",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    setNewPizza(() => ({
      ...newPizza,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data, newPizza);

    setData([...data, newPizza]);

    // Opcionalmente cerrar el modal manualmente si quieres
    const modal = bootstrap.Modal.getInstance(
      document.getElementById("pizzaModal")
    );
    modal.hide();
  };

  return (
    <>
      {/* Botón para abrir el modal */}
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#pizzaModal"
        >
          Agregar Pizza
        </button>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="pizzaModal"
        tabIndex="-1"
        aria-labelledby="pizzaModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="pizzaModalLabel">
                Agregar / Editar Pizza
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nombre de la Pizza
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={newPizza.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    URL de la Imagen
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="image"
                    placeholder="pizzas/pizzas-2-310x260.png"
                    value="pizzas/pizzas-2-310x260.png"
                    onChange={handleChange}
                    disabled
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Descripción
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows="3"
                    value={newPizza.description}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Precio
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    value={newPizza.price}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  Guardar Pizza
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalForm;
