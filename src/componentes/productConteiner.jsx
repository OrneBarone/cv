import './productConteiner.css';
import './product.css';
import imgPerfil from '../img/imgPerfil.jpg'
import imgARodar from '../img/arodarr.jpg'
import imgHause from '../img/MrHause.png'

const ProductConteiner = (props) => {

  return (
    <section className="conteiner">

      <div className='conteiner-presentacion'>
        <div className='conteiner-descripcion'>
          <h1>Ornella Barone</h1>
          <h2>Diseñadora UX/UI <br />
            Programadora FrontEnd <br />
            Artista Visual</h2>
        </div>

        <div className='conteiner-img'>
          <img className="image-perfil" src={imgPerfil} alt="" />
        </div>
      </div>

      <div className="conteiner-card">
        {props.children}
      </div>

      <div className='conteiner-card'>
        <div className='product'>
                 <div className='product-conteiner-texto'>
            <h3>Proyectos</h3>

            <div className='product1'>
              <a href="https://docs.google.com/presentation/d/10Z0SLUrOL1MXZJdRf8Q-WdcjhTgDyJMgACgmUDEYZlo/edit?usp=sharing">
              <div className='product-conteiner-img'>
                <img className="product-img" src={imgARodar} alt="" />
              </div></a>

              <div className='product-conteiner-texto'>
                <h4>App “A Rodar” (2023):</h4>
                <p>
                  En este proyecto, abordamos la problemática que enfrentan los
                  ciclistas al buscar grupos y rutas para recorrer distancias medianas.
                  A través de una investigación exhaustiva de los usuarios, identificamos
                  insights clave que guiaron el desarrollo de una solución efectiva.
                  Nuestro enfoque se centró en diseñar una aplicación que facilitara encuentros
                  entre ciclistas y ofreciera rutas adaptadas a sus preferencias y habilidades.
                </p>
              </div>

            </div>
            <div className='product1'>
              <div className='product-conteiner-img'>
                <a href="https://youtu.be/MzY6YUfYwy0">
                <img className="product-img" src={imgHause} alt="" /></a>
              </div>

              <div className='product-conteiner-texto'>
                <h4>Página Web “Mr.House”(2023):</h4>
                <p>
                  Como Master Scrum, lideré un equipo en el desarrollo de una página web
                  para una inmobiliaria ficticia como parte de mi formación Full Stack.
                  Desde la conceptualización hasta la implementación final, nos enfocamos
                  en crear una plataforma intuitiva y segura para la gestión de  propiedades y usuarios.
                  Utilizamos Spring Security para la autenticación  y autorización en el backend, HTML, CSS
                  y Figma en el frontend, y  adoptamos la metodología Scrum para una gestión ágil
                  del proyecto, garantizando entregas incrementales y regulares.
                </p>
              </div>
            </div>
          </div>

        </div>
        </div>
    </section>

  )
}
export default ProductConteiner;