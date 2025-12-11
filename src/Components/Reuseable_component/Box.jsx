export default function Box({ image, title, description }) {
  return (
    <div
      className="card border-15 box-shadow h-75 box-hover"
      style={{ overflow: "hidden", transition: "transform 0.5s ease" }}
    >
      <div className="overflow-hidden  ">
        <img
          src={image}
          alt={title}
          className="img-fluid w-100 box-image"
          style={{
            height: "200px",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "15px 15px 0 0",
          }}
        />
      </div>
      <div className="p-3 h-75">
        <h3 className="main-text-color fw-bold">{title}</h3>
        <p className="sub-text-color">{description}</p>
      </div>
    </div>
  );
}
