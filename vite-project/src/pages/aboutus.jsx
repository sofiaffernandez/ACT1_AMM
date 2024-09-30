const About = () => {
  return (
    <div>
      <section>
        <h2>Nuestra historia</h2>
        <p>
          Viajeros Aventureros nació en 2015 de la pasión de dos amigos por explorar el mundo. Desde entonces, hemos compartido nuestras aventuras, consejos de viaje y recomendaciones con nuestra comunidad de seguidores.
        </p>
      </section>

      <section>
        <h2>Conoce al equipo</h2>
        <div className="team">
          <div>
            <img src="../../public/images/juan.png" alt="Juan" />
            <h3>Juan Pérez</h3>
            <p>Co-fundador y escritor principal. Juan ha viajado a más de 50 países, compartiendo sus experiencias y guías prácticas.</p>
          </div>
          <div>
            <img src="../../public/images/laura.jpg" alt="Laura" />
            <h3>Laura García</h3>
            <p>Especialista en turismo de aventura. Laura explora destinos extremos y actividades al aire libre.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Nuestros valores</h2>
        <ul>
          <li>Autenticidad: Compartimos experiencias reales y honestas de nuestros viajes.</li>
          <li>Sostenibilidad: Promovemos un turismo responsable y consciente.</li>
          <li>Comunidad: Creemos en la importancia de conectar con nuestros lectores y crear una red de apoyo para los viajeros.</li>
        </ul>
      </section>

      <section>
        <h2>Premios y reconocimientos</h2>
        <p>
          A lo largo de los años, hemos sido galardonados con varios premios en la industria del turismo, incluyendo el Premio al Mejor Blog de Viajes 2019.
        </p>
      </section>


    </div>
  );
};

export default About;
