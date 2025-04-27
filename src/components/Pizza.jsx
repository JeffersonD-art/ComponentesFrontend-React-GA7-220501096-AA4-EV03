const Pizza = ({pizza}) => {

const {name, description, price, image} = pizza
    
  return (
    <div className="col-md-6 col-lg-3 my-4">
      <div className="card text-center">
        <img
          className="img-fluid rotate"
          src={image}
          alt="imagen pizza"
        />
        <div className="card-body">
          <h3 className="text-black fs-4 mt-4 fw-bold text-uppercase">
            {name}
          </h3>
          <p>
            {description}
          </p>
          <p className="fw-bold text-primary fs-3">${price}</p>
          <button type="button" className="btn btn-dark w-100">
            Ver
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
