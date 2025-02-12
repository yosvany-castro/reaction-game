const Tarjeta = ({ titulo, descripcion, color }) => {
  return (
    <div
      style={{ backgroundColor: color, padding: "1rem", borderRadius: "0.5rem", color: "#fff" }}
    >
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
    </div>
  );
};
const TarjetaMadre = () => {
  return (
    <div style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
      <Tarjeta
        titulo={"Tarjeta 1"}
        descripcion={"Esta es la descripción de la primera tarjeta."}
        color={"#3498db"}
      />
      <Tarjeta
        titulo={"Tarjeta 2"}
        descripcion={"Aquí va la descripción de la segunda tarjeta."}
        color={"#e74c3c"}
      />
      <Tarjeta
        titulo={"Tarjeta 3"}
        descripcion={"Descripción de la tercera tarjeta."}
        color={"#2ecc71"}
      />
    </div>
  );
};

export default TarjetaMadre;

function calamarGIgante(e) {

}