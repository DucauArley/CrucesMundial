import './App.css';
import { useState } from 'react';
import PlanillaGrupos from './components/PlanillaGrupos';
import { calcularProbabilidad, primero, segundo, tercero, todos, noSeleccionado} from './utils/logic';
import Playoffs from './components/Playoffs';

//https://mundial.cvdev.io/simulacion/playoffs-intercontinentales

function App() {
    const [color, setColor] = useState('red');
    const [colorDos, setColorDos] = useState('red');
    const [activePais, setActivePais] = useState('none');
    const [activePaisDos, setActivePaisDos] = useState('none');
    const [activePorcentaje, setActivePorcentaje] = useState(false);
    const [activeGrupo, setActiveGrupo] = useState('none');
    const [activeGrupoDos, setActiveGrupoDos] = useState('none');
    
    const cambiarColor = (pais, grupo) => {
        setActivePorcentaje(false)
        var paisActual = activePais
        var paisActualDos = activePaisDos
     
        
        if(pais !== activePaisDos && (activePais === 'none' || (color === tercero && pais === activePais)))
        {
            setActivePais(color === tercero ? 'none' : pais);
            paisActual = color === tercero ? 'none' : pais;
            setActiveGrupo(grupo);
        }
        else if(pais !== activePais)
        {
            setActivePaisDos(colorDos === tercero && pais === activePaisDos ? 'none' : pais);
            paisActualDos = colorDos === tercero && pais === activePaisDos ? 'none' : pais;
            setActiveGrupoDos(grupo)
        }

        var colorActual = (pais === activePais && color !== primero && color !== segundo && color !== tercero) ? primero : (pais === activePais && color !== segundo && color !== tercero)? segundo: (pais === activePais && color !== primero && color !== tercero)? tercero: pais === paisActualDos || pais === activePaisDos ? color : todos;
        var colorActualDos = (pais === activePaisDos && colorDos !== primero && colorDos !== segundo && colorDos !== tercero) ? primero : (pais === activePaisDos && colorDos !== segundo && colorDos !== tercero)? segundo: (pais === activePaisDos && colorDos !== primero && colorDos !== tercero)? tercero: pais === paisActual || pais === activePais ? colorDos : todos;

        if(activeGrupo === activeGrupoDos && activePais !== 'none')
        {
            colorActualDos = (pais === activePaisDos && colorDos !== primero && colorDos !== segundo && colorDos !== tercero && colorDos !== noSeleccionado && color !== primero) ? primero : (pais === activePaisDos && colorDos !== segundo && colorDos !== tercero && colorDos !== noSeleccionado &&  color !== segundo)? segundo: (pais === activePaisDos && colorDos !== tercero && color !== tercero)? tercero: pais === paisActual || pais === activePais ? colorDos : (pais === activePaisDos && color === tercero && colorDos === segundo)? noSeleccionado: todos;
        }

        if(activeGrupo === activeGrupoDos && activePaisDos !== 'none')
        {
            colorActual = (pais === activePais && color !== primero && color !== segundo && color !== tercero && color !== noSeleccionado && colorDos !== primero) ? primero : (pais === activePais && color !== segundo && color !== tercero && color !== noSeleccionado &&  colorDos !== segundo)? segundo: (pais === activePais && color !== tercero && colorDos !== tercero)? tercero: pais === paisActualDos || pais === activePaisDos ? color : (pais === activePais && colorDos === tercero && color === segundo)? noSeleccionado: todos;
        }


        setColor(colorActual);
        setColorDos(colorActualDos);
    };

  return (
    <div className="App" >
      <PlanillaGrupos activePais={activePais} activePaisDos={activePaisDos} color={color} colorDos={colorDos} cambiarColor={cambiarColor}></PlanillaGrupos>
      <button class="button" disabled={activePaisDos !== 'none' ? false : true} onClick={()=>{
              setActivePorcentaje(true);
              calcularProbabilidad(activePais, activePaisDos, color === todos ? -1 : color === primero ? 0 : color === segundo ? 1 : 2, colorDos === todos ? -1 : colorDos === primero ? 0 : colorDos === segundo ? 1 : 2);
          }}>
          Calcular probabilidad de cruce
          <span class="button-border"></span>
      </button>

      <br></br>
      <br></br>
      <br></br>
      <Playoffs activePorcentaje={activePorcentaje}></Playoffs>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
