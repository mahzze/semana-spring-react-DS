import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
   return(   
      <header>
         <div className="dsmeta-logo-container">
            <img src={logo} alt="logo" />
            <h1>DSMeta</h1>
            <p>
               Copiado por
               <a href="https://www.github.com/mahzze">Mahzze</a>
            </p>
         </div>
      </header>
   )
}

export default Header