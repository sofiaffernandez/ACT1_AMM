const Home = () => {
  return (
    <div>
      <h1>Viajeros Aventureros</h1>
      <section>
        <h2>Los lugares más populares</h2>
        <div className="carousel">
          <a href="/places/bora-bora">
            <img src="/images/borabora.jpg" alt="Bora Bora" />
          </a>
          <a href="/places/santorini">
            <img src="/images/santorini.webp" alt="Santorini" />
          </a>
          <a href="/places/serengeti">
            <img src="/images/Serengeti.jpeg" alt="Serengeti" />
          </a>
        </div>
      </section>

      <section>
        <h2>Últimas entradas</h2>
        <div className="latest-posts">
          <article>
            <h3><a href="/posts/guia-completa-hacer-maletas">Guía completa para hacer maletas</a></h3>
            <p>Consejos para empacar de forma eficiente y organizada...</p>
          </article>
          <article>
            <h3><a href="/posts/consejos-viajar-responsable">Consejos para viajar de manera responsable</a></h3>
            <p>Cómo minimizar tu impacto ambiental y social durante los viajes...</p>
          </article>
          <article>
            <h3><a href="/posts/destinos-exoticos-mundo">Los destinos más exóticos del mundo</a></h3>
            <p>Descubre los destinos más únicos y emocionantes...</p>
          </article>
        </div>
      </section>

      <section>
        <h2>¿Cuál es tu tipo de plan?</h2>
        <div className="plans">
        <div><a href="/plans/aventura">Aventura</a></div>
        <div><a href="/plans/relax">Relax</a></div>
        <div><a href="/plans/cultural">Cultural</a></div>
        </div>
      </section>

      <section>
        <h2>Compartir es vivir</h2>
        <div className="discounts">
          <a href="https://booking.com" target="_blank" rel="noopener noreferrer">
          <img src="../../public/images/booking.png" alt="Descuento en Booking" />
          Descuento en Booking
        </a>
        <a href="https://ryanair.com" target="_blank" rel="noopener noreferrer">
          <img src="../../public/images/ryanair.png" alt="Descuento en Ryanair" />
          Descuento en Ryanair
        </a>
        </div>
      </section>

      <section>
        <h2>Suscríbete a nuestro newsletter</h2>
        <form>
          <input type="email" placeholder="Tu correo electrónico" />
          <button type="submit">Suscribirse</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
