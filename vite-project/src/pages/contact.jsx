const Contact = () => {
  return (
    <div className="contact">
        <h2>Contáctanos</h2>
        <form>
          <div>
            <label>Nombre y Apellidos</label>
            <input
              type="text"
              name="name"
              required
            />
          </div>
          <div>
            <label>Correo Electrónico</label>
            <input
              type="email"
              name="email"
              required
            />
          </div>
          <div>
            <label>Número de Teléfono</label>
            <input
              type="tel"
              name="phone"
              required
            />
          </div>
          <div>
            <label>Motivo del Contacto</label>
            <select
              name="reason"
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="general">Consulta General</option>
              <option value="collaboration">Colaboración</option>
              <option value="destination">Pregunta sobre Destinos</option>
              <option value="other">Otros</option>
            </select>
          </div>
          <div>
            <label>Mensaje</label>
            <textarea
              name="message"
              required
            ></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
        <div className="rrss">
          <p>Además recuerda que puedes estar al día y contactar con nosotros en nuestras redes sociales</p>
          <ul>
            <li>
              <a href="">Twitter</a>
            </li>
            <li>
                <a href="">Facebook</a>         
            </li>
            <li>
              <a href="">Intagram</a>
            </li>
            <li>
              <a href="">Tiktok</a>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default Contact;
