import React from 'react'
import IconHtml from '../../assets/img/icon-html.png'
import IconCss from '../../assets/img/icon-css.png'
import IconJs from '../../assets/img/icon-js.png'
import IconBootstrap from '../../assets/img/icon-bootstrap.png'
import IconSass from '../../assets/img/icon-sass.png'
import IconGit from '../../assets/img/icon-git.png'
import IconReact from '../../assets/img/icon-react.png'
import IconVue from '../../assets/img/icon-vue.png'
import IconNode from '../../assets/img/icon-node.png'
import IconExpress from '../../assets/img/icon-express.png'
import IconHandlebars from '../../assets/img/icon-handlebars.png'
import IconMongo from '../../assets/img/icon-mongo.png'
import IconFirebase from '../../assets/img/icon-firebase.png'
import IconMysql from '../../assets/img/icon-mysql.png'
import IconPython from '../../assets/img/icon-python.png'
import IconFlask from '../../assets/img/icon-flask.png'
import IconPostgresql from '../../assets/img/icon-postgresql.png'

const Technologies = () => {
  return (
    <div id='technologies'>
        <h3>
            <strong>
                 &lt;Tecnologías/&gt;
            </strong>
        </h3>
        <br/>
        <br/>
        <div className='iconsTechnologies'>
            <div>
                <img src={IconHtml} className='iconTechnologie' alt='html'/>
                <p>HTML</p>
            </div>
            <div>
                <img src={IconCss} className='iconTechnologie' alt='css'/>
                <p>CSS</p>
            </div>
            <div>
                <img src={IconJs} className='iconTechnologie' alt='js'/>
                <p>Javascript</p>
            </div>
            <div>
                <img src={IconBootstrap} className='iconTechnologie' alt='bootstrap'/>
                <p>Bootstrap</p>
            </div>
            <div>
                <img src={IconSass} className='iconTechnologie' alt='sass'/>
                <p>Sass</p>
            </div>
            <div>
                <img src={IconGit} className='iconTechnologie' alt='git'/>
                <p>Git</p>
            </div>
            <div>
                <img src={IconReact} className='iconTechnologie' alt='react'/>
                <p>React</p>
            </div>
            <div>
                <img src={IconVue} className='iconTechnologie' alt='vue'/>
                <p>Vue</p>
            </div>
            <div>
                <img src={IconNode} className='iconTechnologie' alt='node'/>
                <p>Node</p>
            </div>
            <div>
                <img src={IconExpress} className='iconTechnologie' alt='express'/>
                <p>Express</p>
            </div>
            <div>
                <img src={IconHandlebars} className='iconTechnologie' alt='handlebars'/>
                <p>Handlebars</p>
            </div>
            <div>
                <img src={IconMongo} className='iconTechnologie' alt='mongo'/>
                <p>MongoDB</p>
            </div>
            <div>
                <img src={IconFirebase} className='iconTechnologie' alt='firebase'/>
                <p>Firebase</p>
            </div>
            <div>
                <img src={IconMysql} className='iconTechnologie' alt='mysql'/>
                <p>MySQL</p>
            </div>
            <div>
                <img src={IconPython} className='iconTechnologie' alt='python'/>
                <p>Python</p>
            </div>
            <div>
                <img src={IconFlask} className='iconTechnologie' alt='flask'/>
                <p>Flask</p>
            </div>
            <div>
                <img src={IconPostgresql} className='iconTechnologie' alt='postgresql'/>
                <p>PostgreSQL</p>
            </div>
        </div>
    </div>
  )
}

export default Technologies