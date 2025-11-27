import "materialize-css/dist/css/materialize.min.css";
import ImgPrincipal from "../assets/InicioImg/ImgPrincipal.jpg";
//todavia falta
export const Inicio = () => {
  return (
    <section className="inicio full-width">
      <div className="row">
        {/* Texto */}
        <div className="col s12 m4 l1">
          <h1>¡Cuida tu salud con Farmacia Salud Total!</h1>
          <p>
            En Farmacia Salud Total tenemos todo lo que necesitas para ti y tu
            familia: descuentos especiales en medicinas y vitaminas, atención
            rápida y personalizada, y productos de calidad garantizada.
            Visítanos hoy y experimenta un servicio pensado para tu bienestar.
          </p>
        </div>

        {/* Imagen */}
        <div className="col s12 m8 l10">
          <img
            src={ImgPrincipal}
            alt="Imagen principal"
            className="responsive-img"
            style={{ height: "400px", objectFit: "cover", width: "100%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Inicio;
