const HeroesListItem = ({ name, description, element, onDelete }) => {
  let elementClassName;

  switch (element) {
    case "fire":
      elementClassName = "bg-danger bg-gradient";
      break;
    case "water":
      elementClassName = "bg-primary bg-gradient";
      break;
    case "wind":
      elementClassName = "bg-success bg-gradient";
      break;
    case "earth":
      elementClassName = "bg-secondary bg-gradient";
      break;
    default:
      elementClassName = "bg-warning bg-gradient";
  }

  return (
    <li
      className={`card flex-row mb-4 shadow-lg text-white ${elementClassName}`}
    >
      <img
        className="img-fluid w-25 d-inline"
        style={{ objectFit: "cover" }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg"
        alt="unknown hero"
      />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{description}</p>
      </div>
      <span
        onClick={onDelete}
        className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light"
      >
        <button
          className="btn-close btn-close"
          aria-label="Close"
          type="button"
        ></button>
      </span>
    </li>
  );
};

export default HeroesListItem;
