import React from 'react';
import {shallow} from 'enzyme'

import App from '../App';
import Titulo from '../components/Titulo'
import SubTitulo from '../components/SubTitulo'

describe("Test App",()=>{
  test("snapshot App",()=>{
    let elcomponente=shallow(<App />)
    expect(elcomponente).toMatchSnapshot();
  })
  test("Test H1 to <Titulo/>",()=>{
    let eltitulo="Burger queen pro"
    let elcomponente=shallow(<Titulo eltitulo={eltitulo}/>)
    let buscarH1=elcomponente.find("h1").html()
    //console.log(buscarH1)
    expect(buscarH1).toBe(`<h1>${eltitulo}</h1>`)
  })

  test("SubTitle TRUE",()=>{
    let elcomponente=shallow(<SubTitulo/>)
    expect(elcomponente.find("h2").exists()).toBe(true)
  })

  test("SubTitle False",()=>{
    let elcomponente=shallow(<SubTitulo/>)
    //let boton=elcomponente.find('button').simulate("click")
    elcomponente.find('button').simulate("click")
    expect(elcomponente.find("h2").exists()).toBe(false)
  })
})