
import User from "./componentes/User";
import "./componentes/App.css";

function App() {

 
return (

  <>
  
<h1 >Registrarse</h1>
<h2>Complete sus datos</h2>

<section className="section">

<User principal = {"Nombre"}/>
<form  className="Form-nombre">

<label htmlFor="Nombre"></label>
<input type="text" />

<button className="limpiar">Limpiar</button>


</form>

<User principal= {"Apellido"}/>


<form className="Form-nombre">

<label htmlFor="Apellido"></label>
<input type="text" />

<button className="limpiar">Limpiar</button>

</form>

<User principal= {"Email"}/>
<form className="Form-nombre">

<label htmlFor="Email"></label>
<input type="text" />

<button className="limpiar">Limpiar</button>

</form>

<User principal= {"Telefono"}/>
<form className="Form-nombre">

<label htmlFor="Telefono"></label>
<input type="text" />

<button className="limpiar">Limpiar</button>

</form>

<User principal= {"Contraseña"}/>
<form className="Form-nombre">

<label htmlFor="Contraseña"></label>
<input type="text" />

<button className="limpiar">Limpiar</button>

</form>

<User principal= {"Repetir contraseña"}/>
<form className="Form-nombre">

<label htmlFor="Repetir contraseña"></label>
<input type="text" />

<button className="limpiar">Limpiar</button>

</form>

</section>

<button className="enviar">Enviar</button>



</>


);






}

export default App;