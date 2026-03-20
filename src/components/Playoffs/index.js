import './styles.css';
import {porcentajeDieciseisavos, porcentajeOctavos, porcentajeCuartos, porcentajeSemis, porcentajeFinal, booleanSieteTres, booleanSieteCuatro, booleanSieteCinco, booleanSieteSeis, 
    booleanSieteSiete, booleanSieteOcho, booleanSieteNueve, booleanOcho, booleanOchoUno, booleanOchoDos, booleanOchoTres, booleanOchoCuatro, booleanOchoCinco, booleanOchoSeis, booleanOchoSiete, booleanOchoOcho, booleanOchoNueve, booleanNueve, booleanNueveUno, 
    booleanNueveDos, booleanNueveTres, booleanNueveCuatro, booleanNueveCinco, booleanNueveSeis, booleanNueveSiete, booleanNueveOcho, booleanNueveNueve, booleanCien, booleanCienUno, booleanCienDos, booleanCienCuatro } from '../../utils/logic';

const Playoffs = ({activePorcentaje}) =>{

    return (
        <table cellpadding="0" cellspacing="0" >
            <tbody>
                <tr>
                  <td>
                      <div className="AcortarDiv">&nbsp;</div>
                  </td>
                  <td colspan="2" className='Titulo'>Dieciseisavos de final</td>
                  <td colspan="2"></td>
                  <td colspan="2" className='Titulo'>Octavos de final</td>
                  <td colspan="2"></td>
                  <td colspan="2" className='Titulo'>Cuartos de final</td>
                  <td colspan="2"></td>
                  <td colspan="2" className='Titulo'>Semifinales</td>
                  <td colspan="2"></td>
                  <td colspan="2" className='Titulo'>Final / Tercer puesto</td>
                </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td width="14%" hidden={activePorcentaje}>&nbsp;</td>
                          <td width="3%" hidden={activePorcentaje}>&nbsp;</td>
                          <td colspan="2" width="17%" hidden={!activePorcentaje} className='CeldaGradiente'>{porcentajeDieciseisavos}%</td>
                          <td width="1%">&nbsp;</td> 
                          <td width="2%">&nbsp;</td>
                          <td width="14%" hidden={activePorcentaje}>&nbsp;</td>
                          <td width="3%" hidden={activePorcentaje}> &nbsp;</td>
                          <td colspan="2" width="17%" hidden={!activePorcentaje} className='CeldaGradiente'>{porcentajeOctavos}%</td>
                          <td width="1%">&nbsp;</td>
                          <td width="2%">&nbsp;</td>
                          <td width="14%" hidden={activePorcentaje}>&nbsp;</td>
                          <td width="3%" hidden={activePorcentaje}>&nbsp;</td>
                          <td colspan="2" width="17%" hidden={!activePorcentaje} className='CeldaGradiente'>{porcentajeCuartos}%</td>
                          <td width="1%">&nbsp;</td>
                          <td width="2%">&nbsp;</td>
                          <td width="14%" hidden={activePorcentaje}>&nbsp;</td>
                          <td width="3%" hidden={activePorcentaje}>&nbsp;</td>
                          <td colspan="2" width="17%" hidden={!activePorcentaje} className='CeldaGradiente'>{porcentajeSemis}%</td>
                          <td width="1%">&nbsp;</td>
                          <td width="2%">&nbsp;</td>
                          <td width="15%" hidden={activePorcentaje}>&nbsp;</td>
                          <td width="3%" hidden={activePorcentaje}>&nbsp;</td>
                          <td colspan="2" width="17%" hidden={!activePorcentaje} className='CeldaGradiente'>{porcentajeFinal}%</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" colspan="2">29 de junio – <span class="flagicon"><span class="mw-image-border notpageimage noviewer" typeof="mw:File"><a href="//commons.wikimedia.org/wiki/File:Flag_of_the_United_States.svg" class="mw-file-description" title="Bandera de Estados Unidos"></a></span></span> <a href="/wiki/Gillette_Stadium" title="Gillette Stadium">Boston</a></td>
                          <td rowspan="4"></td>
                          <td rowspan="7"></td>
                          <td colspan="2" rowspan="3"></td>
                          <td rowspan="7"></td>
                          <td rowspan="13"></td>
                          <td colspan="2" rowspan="9"></td>
                          <td rowspan="13"></td>
                          <td rowspan="25"></td>
                          <td colspan="2" rowspan="21"></td>
                          <td rowspan="25"></td>
                          <td rowspan="49" ></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanSieteCuatro ? "CeldaGradiente": "Celda"}> 1E</td>
                          <td rowspan="2" className="CeldaChica">7</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" colspan="2">4 de julio – <span class="flagicon"><span class="mw-image-border notpageimage noviewer" typeof="mw:File"><a href="//commons.wikimedia.org/wiki/File:Flag_of_the_United_States.svg" class="mw-file-description" title="Bandera de Estados Unidos"></a></span></span> <a href="/wiki/Lincoln_Financial_Field" title="Lincoln Financial Field">Filadelfia</a></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanSieteCuatro ? "CeldaGradiente": "Celda"}> 3A/B/C/D/F</td>
                          <td rowspan="2" className="CeldaChica">4</td>
                          <td rowspan="6" className="Linea"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanOchoNueve ? "CeldaGradiente": "Celda"}>1E-3A/B/C/D/F</td>
                          <td rowspan="2" className="CeldaChica">8</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" colspan="2">30 de junio – <span class="flagicon"><span class="mw-image-border notpageimage noviewer" typeof="mw:File"><a href="//commons.wikimedia.org/wiki/File:Flag_of_the_United_States.svg" class="mw-file-description" title="Bandera de Estados Unidos"></a></span></span> <a href="/wiki/MetLife_Stadium" title="MetLife Stadium">Nueva York</a>/<a href="/wiki/MetLife_Stadium" title="MetLife Stadium">Nueva Jersey</a></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="12" className='LineaHorizontal'></td>
                          <td rowspan="2" className={booleanOchoNueve ? "CeldaGradiente": "Celda"}>1I-3C/D/F/G/H</td>
                          <td rowspan="2" className="CeldaChica">9</td>
                          <td rowspan="12" className="Linea"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanSieteSiete ? "CeldaGradiente": "Celda"}> 1I</td>
                          <td rowspan="2" className="CeldaChica">7</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td colspan="2" rowspan="6"></td>
                          <td rowspan="2" colspan="2">9 de julio – <span class="flagicon"><span class="mw-image-border notpageimage noviewer" typeof="mw:File"><a href="//commons.wikimedia.org/wiki/File:Flag_of_the_United_States.svg" class="mw-file-description" title="Bandera de Estados Unidos"></a></span></span> <a href="/wiki/Gillette_Stadium" title="Gillette Stadium">Boston</a></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanSieteSiete ? "CeldaGradiente": "Celda"}> 3C/D/F/G/H</td>
                          <td rowspan="2" className="CeldaChica">7</td>
                          <td rowspan="6" ></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanNueveSiete ? "CeldaGradiente": "Celda"}>1E/I-3A/B/C/D/F/G/H</td>
                          <td rowspan="2" className="CeldaChica">9</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" colspan="2">28 de junio – <span class="flagicon"><span class="mw-image-border notpageimage noviewer" typeof="mw:File"><a href="//commons.wikimedia.org/wiki/File:Flag_of_the_United_States.svg" class="mw-file-description" title="Bandera de Estados Unidos"></a></span></span> <a href="/wiki/SoFi_Stadium" title="SoFi Stadium">Los Ángeles</a></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="24" className='LineaHorizontal'></td>
                          <td rowspan="2" className={booleanNueveSiete ? "CeldaGradiente": "Celda"}>1F-2A/B/C</td>
                          <td rowspan="2" className="CeldaChica">7</td>
                          <td rowspan="24" className="Linea"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanSieteTres ? "CeldaGradiente": "Celda"}> 2A</td>
                          <td rowspan="2" className="CeldaChica">7</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" colspan="2">4 de julio – <span class="flagicon"><span class="mw-image-border notpageimage noviewer" typeof="mw:File"><a href="//commons.wikimedia.org/wiki/File:Flag_of_the_United_States.svg" class="mw-file-description" title="Bandera de Estados Unidos"></a></span></span> <a href="/wiki/NRG_Stadium" class="mw-redirect" title="NRG Stadium">Houston</a></td>
                          <td colspan="2" rowspan="18"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanSieteTres ? "CeldaGradiente": "Celda"}> 2B</td>
                          <td rowspan="2" className="CeldaChica">3</td>
                          <td rowspan="6" className="Linea"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanNueve ? "CeldaGradiente": "Celda"}>2A/B</td>
                          <td rowspan="2" className="CeldaChica">9</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" colspan="2">29 de junio – <span class="flagicon"><span class="mw-image-border notpageimage noviewer" typeof="mw:File"><a href="//commons.wikimedia.org/wiki/File:Flag_of_Mexico.svg" class="mw-file-description" title="Bandera de México"></a></span></span> <a href="/wiki/Estadio_BBVA" title="Estadio BBVA">Monterrey</a></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="12"></td>
                          <td rowspan="2" className={booleanNueve ? "CeldaGradiente": "Celda"}>1F-2C</td>
                          <td rowspan="2" className="CeldaChica">0</td>
                          <td rowspan="12" ></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanSieteCinco ? "CeldaGradiente": "Celda"}> 1F</td>
                          <td rowspan="2" className="CeldaChica">7</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td colspan="2" rowspan="6" ></td>
                          <td rowspan="2" colspan="2">14 de julio – <span class="flagicon"><span class="mw-image-border notpageimage noviewer" typeof="mw:File"><a href="//commons.wikimedia.org/wiki/File:Flag_of_the_United_States.svg" class="mw-file-description" title="Bandera de Estados Unidos"></a></span></span> <a href="/wiki/AT%26T_Stadium" title="AT&amp;T Stadium">Dallas</a></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanSieteCinco ? "CeldaGradiente": "Celda"}> 2C</td>
                          <td rowspan="2" className="CeldaChica">5</td>
                          <td rowspan="6" ></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanCienUno ? "CeldaGradiente": "Celda"}>1E/F/I-2A/B/C-3A/B/C/D/F/G/H</td>
                          <td rowspan="2" className="CeldaChica">10</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" colspan="2">2 de julio – <span class="flagicon"><span class="mw-image-border notpageimage noviewer" typeof="mw:File"><a href="//commons.wikimedia.org/wiki/File:Flag_of_Canada.svg" class="mw-file-description" title="Bandera de Canadá"></a></span></span> <a href="/wiki/BMO_Field" title="BMO Field">Toronto</a></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="48" className='LineaHorizontal'></td>
                          <td rowspan="2" className={booleanCienUno ? "CeldaGradiente": "Celda"}>1D/G/H-2J/K/L-3A/B/E/F/H/I/J</td>
                          <td rowspan="2" className="CeldaChica">1</td>
                          <td rowspan="48" className="Linea"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanOchoTres ? "CeldaGradiente": "Celda"}> 2K</td>
                          <td rowspan="2" className="CeldaChica">8</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" colspan="2">6 de julio – <span class="flagicon"><span class="mw-image-border notpageimage noviewer" typeof="mw:File"><a href="//commons.wikimedia.org/wiki/File:Flag_of_the_United_States.svg" class="mw-file-description" title="Bandera de Estados Unidos"></a></span></span> <a href="/wiki/AT%26T_Stadium" title="AT&amp;T Stadium">Dallas</a></td>
                          <td colspan="2" rowspan="42"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanOchoTres ? "CeldaGradiente": "Celda"}> 2L</td>
                          <td rowspan="2" className="CeldaChica">3</td>
                          <td rowspan="6" className="Linea"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanNueveTres ? "CeldaGradiente": "Celda"}>2K/L</td>
                          <td rowspan="2" className="CeldaChica">9</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" colspan="2">2 de julio – <span class="flagicon"><span class="mw-image-border notpageimage noviewer" typeof="mw:File"><a href="//commons.wikimedia.org/wiki/File:Flag_of_the_United_States.svg" class="mw-file-description" title="Bandera de Estados Unidos"></a></span></span> <a href="/wiki/SoFi_Stadium" title="SoFi Stadium">Los Ángeles</a></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="12" className='LineaHorizontal'></td>
                          <td rowspan="2" className={booleanNueveTres ? "CeldaGradiente": "Celda"}>1H-2J</td>
                          <td rowspan="2" className="CeldaChica">3</td>
                          <td rowspan="12" className="Linea"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanOchoCuatro ? "CeldaGradiente": "Celda"}> 1H</td>
                          <td rowspan="2" className="CeldaChica">8</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td colspan="2" rowspan="6"></td>
                          <td rowspan="2" colspan="2">10 de julio – <span class="flagicon"><span class="mw-image-border notpageimage noviewer" typeof="mw:File"><a href="//commons.wikimedia.org/wiki/File:Flag_of_the_United_States.svg" class="mw-file-description" title="Bandera de Estados Unidos"></a></span></span> <a href="/wiki/SoFi_Stadium" title="SoFi Stadium">Los Ángeles</a></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanOchoCuatro ? "CeldaGradiente": "Celda"}> 2J</td>
                          <td rowspan="2" className="CeldaChica">4</td>
                          <td rowspan="6"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanNueveOcho ? "CeldaGradiente": "Celda"}>1H-2J/K/L</td>
                          <td rowspan="2" className="CeldaChica">9</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" colspan="2">1 de julio – <span class="flagicon"><span class="mw-image-border notpageimage noviewer" typeof="mw:File"><a href="//commons.wikimedia.org/wiki/File:Flag_of_the_United_States.svg" class="mw-file-description" title="Bandera de Estados Unidos"></a></span></span> <a href="/wiki/Levi%27s_Stadium" title="Levi's Stadium">San Francisco</a></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="24"></td>
                          <td rowspan="2" className={booleanNueveOcho ? "CeldaGradiente": "Celda"}>1D/G-3A/B/E/F/H/I/J</td>
                          <td rowspan="2" className="CeldaChica">8</td>
                          <td rowspan="24"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanOchoUno ? "CeldaGradiente": "Celda"}> 1D</td>
                          <td rowspan="2" className="CeldaChica">8</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" colspan="2">6 de julio – <span class="flagicon"><span class="mw-image-border notpageimage noviewer" typeof="mw:File"><a href="//commons.wikimedia.org/wiki/File:Flag_of_the_United_States.svg" class="mw-file-description" title="Bandera de Estados Unidos"></a></span></span> <a href="/wiki/Lumen_Field" title="Lumen Field">Seattle</a></td>
                          <td colspan="2" rowspan="18"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanOchoUno ? "CeldaGradiente": "Celda"}> 3B/E/F/I/J</td>
                          <td rowspan="2" className="CeldaChica">1</td>
                          <td rowspan="6" className="Linea"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanNueveCuatro ? "CeldaGradiente": "Celda"}>1D-3B/E/F/I/J</td>
                          <td rowspan="2" className="CeldaChica">9</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" colspan="2">1 de julio – <span class="flagicon"><span class="mw-image-border notpageimage noviewer" typeof="mw:File"><a href="//commons.wikimedia.org/wiki/File:Flag_of_the_United_States.svg" class="mw-file-description" title="Bandera de Estados Unidos"></a></span></span> <a href="/wiki/Lumen_Field" title="Lumen Field">Seattle</a></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="12"></td>
                          <td rowspan="2" className={booleanNueveCuatro ? "CeldaGradiente": "Celda"}>1G-3A/E/H/I/J</td>
                          <td rowspan="2" className="CeldaChica">4</td>
                          <td rowspan="12"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanOchoDos ? "CeldaGradiente": "Celda"}> 1G</td>
                          <td rowspan="2" className="CeldaChica">8</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td colspan="2" rowspan="6"></td>
                          <td rowspan="2" colspan="2">19 de julio – <span class="flagicon"><span class="mw-image-border notpageimage noviewer" typeof="mw:File"><a href="//commons.wikimedia.org/wiki/File:Flag_of_the_United_States.svg" class="mw-file-description" title="Bandera de Estados Unidos"></a></span></span> <a href="/wiki/MetLife_Stadium" title="MetLife Stadium">Nueva York</a>/<a href="/wiki/MetLife_Stadium" title="MetLife Stadium">Nueva Jersey</a></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanOchoDos ? "CeldaGradiente": "Celda"}> 3A/E/H/I/J</td>
                          <td rowspan="2" className="CeldaChica">2</td>
                          <td rowspan="6"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanCienCuatro ? "CeldaGradiente": "Celda"}>1D/E/F/G/H/I-2A/B/C/J/K/L-3A/B/C/D/E/F/G/H/I/J</td>
                          <td rowspan="2" className="CeldaChica">10</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" colspan="2">29 de junio – <span class="flagicon"><span class="mw-image-border notpageimage noviewer" typeof="mw:File"><a href="//commons.wikimedia.org/wiki/File:Flag_of_the_United_States.svg" class="mw-file-description" title="Bandera de Estados Unidos"></a></span></span> <a href="/wiki/NRG_Stadium" class="mw-redirect" title="NRG Stadium">Houston</a></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="47" className='LineaHorizontalEspecial'></td>
                          <td rowspan="2" className={booleanCienCuatro ? "CeldaGradiente": "Celda"}>1A/B/C/J/K/L-2D/E/F/G/H/I-3C/D/E/F/G/H/I/J/K/L</td>
                          <td rowspan="2" className="CeldaChica">4</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanSieteSeis ? "CeldaGradiente": "Celda"}> 1C</td>
                          <td rowspan="2" className="CeldaChica">7</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" colspan="2">5 de julio – <span class="flagicon"><span class="mw-image-border notpageimage noviewer" typeof="mw:File"><a href="//commons.wikimedia.org/wiki/File:Flag_of_the_United_States.svg" class="mw-file-description" title="Bandera de Estados Unidos"></a></span></span> <a href="/wiki/MetLife_Stadium" title="MetLife Stadium">Nueva York</a>/<a href="/wiki/MetLife_Stadium" title="MetLife Stadium">Nueva Jersey</a></td>
                          <td colspan="2" rowspan="22"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanSieteSeis ? "CeldaGradiente": "Celda"}> 2F</td>
                          <td rowspan="2" className="CeldaChica">6</td>
                          <td rowspan="6" className="Linea"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanNueveUno ? "CeldaGradiente": "Celda"}>1C-2F</td>
                          <td rowspan="2" className="CeldaChica">9</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" colspan="2">30 de junio – <span class="flagicon"><span class="mw-image-border notpageimage noviewer" typeof="mw:File"><a href="//commons.wikimedia.org/wiki/File:Flag_of_the_United_States.svg" class="mw-file-description" title="Bandera de Estados Unidos"></a></span></span> <a href="/wiki/AT%26T_Stadium" title="AT&amp;T Stadium">Dallas</a></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="12" className='LineaHorizontal'></td>
                          <td rowspan="2" className={booleanNueveUno ? "CeldaGradiente": "Celda"}>2E/I</td>
                          <td rowspan="2" className="CeldaChica">1</td>
                          <td rowspan="12" className="Linea"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanSieteOcho ? "CeldaGradiente": "Celda"}> 2E</td>
                          <td rowspan="2" className="CeldaChica">7</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td colspan="2" rowspan="6"></td>
                          <td rowspan="2" colspan="2">11 de julio – <span class="flagicon"><span class="mw-image-border notpageimage noviewer" typeof="mw:File"><a href="//commons.wikimedia.org/wiki/File:Flag_of_the_United_States.svg" class="mw-file-description" title="Bandera de Estados Unidos"></a></span></span> <a href="/wiki/Hard_Rock_Stadium" title="Hard Rock Stadium">Miami</a></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanSieteOcho ? "CeldaGradiente": "Celda"}> 2I</td>
                          <td rowspan="2" className="CeldaChica">8</td>
                          <td rowspan="6"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanNueveNueve ? "CeldaGradiente": "Celda"}>1C-2E/F/I</td>
                          <td rowspan="2" className="CeldaChica">9</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" colspan="2">30 de junio – <span class="flagicon"><span class="mw-image-border notpageimage noviewer" typeof="mw:File"><a href="//commons.wikimedia.org/wiki/File:Flag_of_Mexico.svg" class="mw-file-description" title="Bandera de México"></a></span></span> <a href="/wiki/Estadio_Azteca" title="Estadio Azteca">Ciudad de México</a></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="24" className='LineaHorizontal'></td>
                          <td rowspan="2" className={booleanNueveNueve ? "CeldaGradiente": "Celda"}>1A/L-3C/E/F/H/I/J/K</td>
                          <td rowspan="2" className="CeldaChica">9</td>
                          <td rowspan="24" className="Linea"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanSieteNueve ? "CeldaGradiente": "Celda"}> 1A</td>
                          <td rowspan="2" className="CeldaChica">7</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" colspan="2">5 de julio – <span class="flagicon"><span class="mw-image-border notpageimage noviewer" typeof="mw:File"><a href="//commons.wikimedia.org/wiki/File:Flag_of_Mexico.svg" class="mw-file-description" title="Bandera de México"></a></span></span> <a href="/wiki/Estadio_Azteca" title="Estadio Azteca">Ciudad de México</a></td>
                          <td colspan="2" rowspan="18"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanSieteNueve ? "CeldaGradiente": "Celda"}> 3C/E/F/H/I</td>
                          <td rowspan="2" className="CeldaChica">9</td>
                          <td rowspan="6" className="Linea"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanNueveDos ? "CeldaGradiente": "Celda"}>1A-3C/E/F/H/I</td>
                          <td rowspan="2" className="CeldaChica">9</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" colspan="2">1 de julio – <span class="flagicon"><span class="mw-image-border notpageimage noviewer" typeof="mw:File"><a href="//commons.wikimedia.org/wiki/File:Flag_of_the_United_States.svg" class="mw-file-description" title="Bandera de Estados Unidos"></a></span></span> <a href="/wiki/Mercedes-Benz_Stadium" title="Mercedes-Benz Stadium">Atlanta</a></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="12"></td>
                          <td rowspan="2" className={booleanNueveDos ? "CeldaGradiente": "Celda"}>1L-3E/H/I/J/K</td>
                          <td rowspan="2" className="CeldaChica">2</td>
                          <td rowspan="12"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanOcho ? "CeldaGradiente": "Celda"}> 1L</td>
                          <td rowspan="2" className="CeldaChica">8</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td colspan="2" rowspan="6"></td>
                          <td rowspan="2" colspan="2">15 de julio – <span class="flagicon"><span class="mw-image-border notpageimage noviewer" typeof="mw:File"><a href="//commons.wikimedia.org/wiki/File:Flag_of_the_United_States.svg" class="mw-file-description" title="Bandera de Estados Unidos"></a></span></span> <a href="/wiki/Mercedes-Benz_Stadium" title="Mercedes-Benz Stadium">Atlanta</a></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanOcho ? "CeldaGradiente": "Celda"}> 3E/H/I/J/K</td>
                          <td rowspan="2" className="CeldaChica">0</td>
                          <td rowspan="6"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanCienDos ? "CeldaGradiente": "Celda"}>1A/C/L-2E/F/I-3C/E/F/H/I/J/K</td>
                          <td rowspan="2" className="CeldaChica">10</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" colspan="2">3 de julio – <span class="flagicon"><span class="mw-image-border notpageimage noviewer" typeof="mw:File"><a href="//commons.wikimedia.org/wiki/File:Flag_of_the_United_States.svg" class="mw-file-description" title="Bandera de Estados Unidos"></a></span></span> <a href="/wiki/Hard_Rock_Stadium" title="Hard Rock Stadium">Miami</a></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="23"></td>
                          <td rowspan="2" className={booleanCienDos ? "CeldaGradiente": "Celda"}>1B/J/K-2D/G/H-3D/E/F/G/I/J/L</td>
                          <td rowspan="2" className="CeldaChica">2</td>
                          <td rowspan="23"></td>
                          <td rowspan="2" colspan="2" >Partido por el tercer puesto</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanOchoSeis ? "CeldaGradiente": "Celda"}> 1J</td>
                          <td rowspan="2" className="CeldaChica">8</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" colspan="2">7 de julio – <span class="flagicon"><span class="mw-image-border notpageimage noviewer" typeof="mw:File"><a href="//commons.wikimedia.org/wiki/File:Flag_of_the_United_States.svg" class="mw-file-description" title="Bandera de Estados Unidos"></a></span></span> <a href="/wiki/Mercedes-Benz_Stadium" title="Mercedes-Benz Stadium">Atlanta</a></td>
                          <td colspan="2" rowspan="42"></td>
                          <td rowspan="2" colspan="2">18 de julio – <span class="flagicon"><span class="mw-image-border notpageimage noviewer" typeof="mw:File"><a href="//commons.wikimedia.org/wiki/File:Flag_of_the_United_States.svg" class="mw-file-description" title="Bandera de Estados Unidos"></a></span></span> <a href="/wiki/Hard_Rock_Stadium" title="Hard Rock Stadium">Miami</a></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanOchoSeis ? "CeldaGradiente": "Celda"}> 2H</td>
                          <td rowspan="2" className="CeldaChica">6</td>
                          <td rowspan="6" className="Linea"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanNueveCinco ? "CeldaGradiente": "Celda"}>1J-2H</td>
                          <td rowspan="2" className="CeldaChica">9</td>
                          <td rowspan="2" className={booleanCienCuatro ? "CeldaGradiente": "Celda"}>1D/E/F/G/H/I-2A/B/C/J/K/L-3A/B/C/D/E/F/G/H/I/J</td>
                          <td rowspan="2" className="CeldaChica">10</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" colspan="2">3 de julio – <span class="flagicon"><span class="mw-image-border notpageimage noviewer" typeof="mw:File"><a href="//commons.wikimedia.org/wiki/File:Flag_of_the_United_States.svg" class="mw-file-description" title="Bandera de Estados Unidos"></a></span></span> <a href="/wiki/AT%26T_Stadium" title="AT&amp;T Stadium">Dallas</a></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="12" className='LineaHorizontal'></td>
                          <td rowspan="2" className={booleanNueveCinco ? "CeldaGradiente": "Celda"}>2D/G</td>
                          <td rowspan="2" className="CeldaChica">5</td>
                          <td rowspan="12" className="Linea"></td>
                          <td rowspan="2" className={booleanCienCuatro ? "CeldaGradiente": "Celda"}>1A/B/C/J/K/L-2D/E/F/G/H/I-3C/D/E/F/G/H/I/J/K/L</td>
                          <td rowspan="2" className="CeldaChica">3</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanOchoOcho ? "CeldaGradiente": "Celda"}> 2D</td>
                          <td rowspan="2" className="CeldaChica">8</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td colspan="2" rowspan="6"></td>
                          <td rowspan="2" colspan="2">11 de julio – <span class="flagicon"><span class="mw-image-border notpageimage noviewer" typeof="mw:File"><a href="//commons.wikimedia.org/wiki/File:Flag_of_the_United_States.svg" class="mw-file-description" title="Bandera de Estados Unidos"></a></span></span> <a href="/wiki/Arrowhead_Stadium" title="Arrowhead Stadium">Kansas City</a></td>
                          <td colspan="2" rowspan="22"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanOchoOcho ? "CeldaGradiente": "Celda"}> 2G</td>
                          <td rowspan="2" className="CeldaChica">8</td>
                          <td rowspan="6"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanCien ? "CeldaGradiente": "Celda"}>1J-2D/G/H</td>
                          <td rowspan="2" className="CeldaChica">10</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" colspan="2">2 de julio – <span class="flagicon"><span class="mw-image-border notpageimage noviewer" typeof="mw:File"><a href="//commons.wikimedia.org/wiki/File:Flag_of_Canada.svg" class="mw-file-description" title="Bandera de Canadá"></a></span></span> <a href="/wiki/Estadio_BC_Place" title="Estadio BC Place">Vancouver</a></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="11"></td>
                          <td rowspan="2" className={booleanCien ? "CeldaGradiente": "Celda"}>1B/K-3D/E/F/G/I/J/L</td>
                          <td rowspan="2" className="CeldaChica">0</td>
                          <td rowspan="11"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanOchoCinco ? "CeldaGradiente": "Celda"}> 1B</td>
                          <td rowspan="2" className="CeldaChica">8</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" colspan="2">7 de julio – <span class="flagicon"><span class="mw-image-border notpageimage noviewer" typeof="mw:File"><a href="//commons.wikimedia.org/wiki/File:Flag_of_Canada.svg" class="mw-file-description" title="Bandera de Canadá"></a></span></span> <a href="/wiki/Estadio_BC_Place" title="Estadio BC Place">Vancouver</a></td>
                          <td colspan="2" rowspan="18"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanOchoCinco ? "CeldaGradiente": "Celda"}> 3E/F/G/I/J</td>
                          <td rowspan="2" className="CeldaChica">5</td>
                          <td rowspan="6" className="Linea"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanNueveSeis ? "CeldaGradiente": "Celda"}>1B-3E/F/G/I/J</td>
                          <td rowspan="2" className="CeldaChica">9</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" colspan="2">3 de julio – <span class="flagicon"><span class="mw-image-border notpageimage noviewer" typeof="mw:File"><a href="//commons.wikimedia.org/wiki/File:Flag_of_the_United_States.svg" class="mw-file-description" title="Bandera de Estados Unidos"></a></span></span> <a href="/wiki/Arrowhead_Stadium" title="Arrowhead Stadium">Kansas City</a></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="5"></td>
                          <td rowspan="2" className={booleanNueveSeis ? "CeldaGradiente": "Celda"}>1K-3D/E/I/J/L</td>
                          <td rowspan="2" className="CeldaChica">6</td>
                          <td rowspan="5"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanOchoSiete ? "CeldaGradiente": "Celda"}> 1K</td>
                          <td rowspan="2" className="CeldaChica">8</td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td colspan="2" rowspan="6"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                          <td rowspan="2" className={booleanOchoSiete ? "CeldaGradiente": "Celda"}> 3D/E/I/J/L</td>
                          <td rowspan="2" className="CeldaChica">7</td>
                          <td rowspan="2"></td>
                      </tr>
                      <tr>
                          <td>
                              <div className="AcortarDiv">&nbsp;</div>
                          </td>
                      </tr>
                  </tbody>
              </table>
    )
}

export default (Playoffs)