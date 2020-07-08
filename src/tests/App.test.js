import React from 'react';
import {shallow} from 'enzyme'

import App from '../App';
import Titulo from '../components/Titulo'

describe("Test App",()=>{
  test("snapshot App",()=>{
    let elcomponente=shallow(<App />)
    expect(elcomponente).toMatchSnapshot();
  })
  test("Test H1 to <Titulo/>",()=>{
    let eltitulo="Burger queen pro"
    let elcomponente=shallow(<Titulo eltitulo={eltitulo}/>)
    let buscarH1=elcomponente.find("h1").html()
    console.log(buscarH1)
    expect(buscarH1).toBe(`<h1>${eltitulo}</h1>`)
  })
})