import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/projects.css'

const Projects = () => (
  <Layout>
    <SEO title="Home" />
    <section className="container margin-top">
      <div className="row align-items-center">
        <div className='col-xl-6 projets__item'>
          <img className='height' src={require('../images/projects/DSC_0590.png')}/>
          <p className='title-of-projects'>Группа жилых домов</p>
          <p className='know_more'>Узнать больше >></p>
        </div>
        <div className='col-xl-6 projets__item'>
          <img className='height' src={require('../images/projects/DSC_0669.png')}/>
          <p className='title-of-projects'>Автоцентр AUDI</p>
          <p className='know_more'>Узнать больше >></p>
        </div>
        <div className='col-xl-6 projets__item'>
          <img className='height' src={require('../images/projects/DSC_0691.png')}/>
          <p className='title-of-projects'>Автоцентр KIA MOTORS</p>
          <p className='know_more'>Узнать больше >></p>
        </div>
        <div className='col-xl-6 projets__item'>
          <img className='height' src={require('../images/projects/dsc.jpg')}/>
          <p className='title-of-projects'>Жилые дома</p>
          <p className='know_more'>Узнать больше >></p>
        </div>
        <div className='col-xl-6 projets__item'>
          <img className='height' src={require('../images/projects/DSC_0607.png')}/>
          <p className='title-of-projects'>Многоквартирный жилой дом</p>
          <p className='know_more'>Узнать больше >></p>
        </div>
        <div className='col-xl-6 projets__item'>
          <img className='height' src={require('../images/projects/DSC_0626.png')}/>
          <p className='title-of-projects long'>Помещение общественного назначения</p>
          <p className='know_more'>Узнать больше >></p>
        </div>
        <div className='col-xl-6 projets__item'>
          <img className='height' src={require('../images/projects/DSC_0590.png')}/>
          <p className='title-of-projects'>Помещение общественного назначения</p>
          <p className='know_more'>Узнать больше >></p>
        </div>
      </div>
    </section>
  </Layout>
)

export default Projects