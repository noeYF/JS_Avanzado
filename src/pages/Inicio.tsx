import "materialize-css/dist/css/materialize.min.css";
import banner from "../assets/InicioImg/banner.jpg";
import carrucel from "../assets/InicioImg/carrudel.jpg";
import "../styles/Inicio/InicioStyle.scss";

export const Inicio = () => {
  return (
    <div className="contenedor-longi">
      <div className="contenedor">
        <div className="banner">
          <img src={banner} alt="Banner" className="banner-img" />
          <div className="banner-text">
            <h1> FarmaSalud Total</h1>
            <br />
            <p>
              En FarmaSalud Total creemos que la salud es el tesoro más valioso.
              Desde nuestros inicios, hemos trabajado para ofrecer productos de
              calidad, asesoramiento confiable y atención personalizada para ti
              y tu familia. Con cada visita, queremos que sientas confianza,
              seguridad y bienestar.
            </p>
          </div>
        </div>
        <div className="carrucel">
          <div className="img">
            <img src={carrucel} alt="" />
          </div>
          <div className="frace">
            <h2>Tu Salud, Nuestra Prioridad</h2>
            <p>
              En nuestra farmacia encontrarás todo lo que necesitas para cuidar
              de ti y de tu familia: medicamentos de alta calidad, suplementos,
              vitaminas y productos de bienestar. Nuestro equipo de
              profesionales está listo para brindarte asesoría personalizada,
              garantizando tu seguridad y confianza en cada compra. ¡Salud y
              bienestar a tu alcance!
            </p>
          </div>
        </div>
        <div className="infoC">
          <div className="informacion">
            <div className="informacion-farmacia">
              <div className="capa1">
                <h1>Bienvenido a Farmacia SaludPlus</h1>
                <p>
                  En Farmacia SaludPlus nos dedicamos a cuidar de tu salud y la
                  de tu familia, ofreciendo productos de alta calidad, atención
                  personalizada y un compromiso constante con tu bienestar.
                </p>
                <h2>Nuestra Misión</h2>
                <p>
                  Brindar servicios farmacéuticos confiables y accesibles,
                  asegurando que cada persona reciba la orientación y los
                  productos adecuados para mantener una vida saludable.
                </p>
                <h2>Nuestros Servicios</h2>
                <h3>Medicamentos de Prescripción y Venta Libre</h3>
                <p>
                  Contamos con una amplia variedad de medicamentos, desde
                  tratamientos especializados hasta productos de venta libre
                  para cubrir todas tus necesidades.
                </p>
                
              </div>
              <div className="capa2">
                <h3>Vitaminas y Suplementos</h3>
                <p>
                  Ofrecemos una selección completa de vitaminas, suplementos y
                  productos naturales para fortalecer tu sistema inmunológico y
                  promover un estilo de vida saludable.
                </p>
                <h2>Compromiso con la Calidad</h2>
                <p>
                  Todos nuestros productos cumplen con los más altos estándares
                  de calidad y seguridad. Trabajamos con laboratorios
                  reconocidos y garantizamos la autenticidad de cada artículo
                  que vendemos.
                </p>
                <h2>Contacto y Ubicación</h2>
                <p>
                  Visítanos en nuestra sucursal principal en Av. Salud 123,
                  Lima, o comunícate con nosotros al 987654321. También puedes
                  escribirnos por correo electrónico para consultas rápidas y
                  pedidos especiales.
                </p>
                <h3>Asesoría Profesional</h3>
                <p>
                  Nuestro equipo de farmacéuticos certificados está disponible
                  para responder tus preguntas, dar recomendaciones seguras y
                  guiarte en el uso correcto de los medicamentos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
