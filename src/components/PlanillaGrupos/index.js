import './styles.css';
import { objetoPaises, primero, segundo, tercero, todos, noSeleccionado } from '../../utils/logic';

const PlanillaGrupos = ({activePais, activePaisDos, color, colorDos, cambiarColor}) =>{

    const fotos = {
        A: ["https://flagcdn.com/w40/mx.png", "https://flagcdn.com/w40/za.png", "https://flagcdn.com/w40/kr.png" , "https://flagcdn.com/w40/cz.png"],
        B: ["https://flagcdn.com/w40/ca.png", "https://flagcdn.com/w40/ba.png", "https://flagcdn.com/w40/qa.png", "https://flagcdn.com/w40/ch.png"],
        C: ["https://flagcdn.com/w40/br.png", "https://flagcdn.com/w40/ma.png", "https://flagcdn.com/w40/ht.png", "https://flagcdn.com/w40/gb-sct.png"],
        D: ["https://flagcdn.com/w40/us.png", "https://flagcdn.com/w40/py.png", "https://flagcdn.com/w40/au.png", "https://flagcdn.com/w40/tr.png"],
        E: ["https://flagcdn.com/w40/de.png", "https://flagcdn.com/w40/cw.png", "https://flagcdn.com/w40/ci.png", "https://flagcdn.com/w40/ec.png"],
        F: ["https://flagcdn.com/w40/nl.png", "https://flagcdn.com/w40/jp.png", "https://flagcdn.com/w40/se.png", "https://flagcdn.com/w40/tn.png"],
        G: ["https://flagcdn.com/w40/be.png", "https://flagcdn.com/w40/eg.png", "https://flagcdn.com/w40/ir.png", "https://flagcdn.com/w40/nz.png"],
        H: ["https://flagcdn.com/w40/es.png", "https://flagcdn.com/w40/cv.png", "https://flagcdn.com/w40/sa.png", "https://flagcdn.com/w40/uy.png"],
        I: ["https://flagcdn.com/w40/fr.png", "https://flagcdn.com/w40/sn.png", "https://flagcdn.com/w40/iq.png", "https://flagcdn.com/w40/no.png"],
        J: ["https://flagcdn.com/w40/ar.png", "https://flagcdn.com/w40/dz.png", "https://flagcdn.com/w40/at.png", "https://flagcdn.com/w40/jo.png"],
        K: ["https://flagcdn.com/w40/pt.png", "https://flagcdn.com/w40/cd.png", "https://flagcdn.com/w40/uz.png", "https://flagcdn.com/w40/co.png"],
        L: ["https://flagcdn.com/w40/gb-eng.png", "https://flagcdn.com/w40/hr.png", "https://flagcdn.com/w40/gh.png",  "https://flagcdn.com/w40/pa.png"]
    }

    return (
        <div className='GridGrupos'>
        {Object.entries(objetoPaises).map(([grupo, paises])=>(
            <div className='GridGrupo'>
                <h2 >Grupo {grupo}</h2>
                <div className='GridPaises'>
                    {paises.map((pais, i) =>(
                    <div onClick={()=>cambiarColor(pais, grupo)} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '10px',
                        borderRadius: '8px',
                        backgroundColor: pais === activePais? color: pais === activePaisDos ? colorDos : noSeleccionado,
                        border: '1px solid rgb(68, 68, 68)',
                        cursor: 'pointer'
                        }}>
                        <div className='Pais'>
                            <img className="Bandera" alt={fotos[grupo][i]} src={fotos[grupo][i]}></img>
                            <label>{pais}</label>
                            <label className='Posicion' hidden={pais !== activePais || color !== todos}>N/A</label>
                            <label className='Posicion' hidden={pais !== activePais || color !== primero}>1º</label>
                            <label className='Posicion' hidden={pais !== activePais || color !== segundo}>2º</label>
                            <label className='Posicion' hidden={pais !== activePais || color !== tercero}>3º</label>
                            <label className='Posicion' hidden={pais !== activePaisDos || colorDos !== todos}>N/A</label>
                            <label className='Posicion' hidden={pais !== activePaisDos || colorDos !== primero}>1º</label>
                            <label className='Posicion' hidden={pais !== activePaisDos || colorDos !== segundo}>2º</label>
                            <label className='Posicion' hidden={pais !== activePaisDos || colorDos !== tercero}>3º</label>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        ))}
        </div>
    )
}

  //((pais === activePais && color !== 'green' && color !== 'lightgreen' && color !== 'yellow') || (pais === activePaisDos && colorDos !== 'green' && colorDos !== 'lightgreen' && colorDos !== 'yellow')) ? 'green' : ((pais === activePais && color !== 'lightgreen' && color !== 'yellow') || (pais === activePaisDos && colorDos !== 'lightgreen' && colorDos !== 'yellow'))? 'lightgreen': ((pais === activePais && color !== 'green' && color !== 'yellow') || (pais === activePaisDos && colorDos !== 'green' && colorDos !== 'yellow'))? 'yellow': 'blue'

export default (PlanillaGrupos)