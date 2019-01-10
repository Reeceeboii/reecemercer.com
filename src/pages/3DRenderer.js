import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import HeaderGeneric from '../components/HeaderGeneric'

import Layout from '../components/layout'

import code from '../assets/images/3DRenderer/3DRendererCode.png'
import renderComp from '../assets/images/3DRenderer/RenderComparison.png'
import blenderCube from '../assets/images/3DRenderer/BlenderCube.png'
import blenderCube1 from '../assets/images/3DRenderer/BlenderCube1.png'
import blenderCube2 from '../assets/images/3DRenderer/BlenderCube2.png'

import RendererCode0 from '../assets/images/3DRenderer/RendererCode0.png'
import RendererCode1 from '../assets/images/3DRenderer/RendererCode1.png'
import RendererCode2 from '../assets/images/3DRenderer/RendererCode2.png'
import RendererCode3 from '../assets/images/3DRenderer/RendererCode3.png'
import RenderCube from '../assets/images/3DRenderer/RenderCube.png'



class ThreeDRenderer extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="3D Renderer" />
        <HeaderGeneric headerText="3D Renderer based on OpenGL"
        paragraphText="Using the OpenGL API to interface with the GPU and render 3D models (.obj files) and their corresponding textures into a window"/>
        <h3 style={{textAlign: `center`}}>GitHub repo - <a href="https://github.com/Reeceeboii/OpenGL-3D-Renderer" target="_blank">Open-GL-3D-Renderer</a></h3>
        <div id="main">
          <section id="content" className="main">
          <span className="image main"><img src={code} alt="" /></span>

          <h2><b>About this project</b></h2>
          <p>I grew up playing a lot of games, and always wondered how the 3D models of objects and game assets are actually rendered on screen, along with
          perfectly mapped textures. So I followed some online tutorials and created a very barebones 3D model renderer to teach myself exactly how it works.</p>

          <p>Here's the basics: think about a 3 dimensional model of a car in a game. This model consists of entirely polygons, specifically triangles. Usually 10's of thousands of them, with each triangle's
          3 vertices being positioned such that the final model resembles a real world object.</p>

          <span className="image project"><img src={renderComp} alt=""/></span>
          <p style={{textAlign: `left`}}><i>Final 3D render vs. the triangle wireframe. Even the square elements are made of two triangles stacked together. The tyres are a point of interest. The more circular
          we want something to appear in a render, the more densely packed and smaller the triangles need to be in order to remove jagged edges.</i></p>

          <h2><b>Code rundown</b></h2>

          <p>The program is written in Java and consists of a few main components:</p>

          <ul style={{ ListStyleType: `disc` }}>
            <li>Display manager - creates a window and runs animation frames</li>
            <li>Model loader - creates VAO's and VBO's (explained later)</li>
            <li>Raw models - no textures, just plain polygon vertices data</li>
            <li>Textured models - raw models with an 'texture coordinates array'</li>
            <li>Shader - used for lighting</li>
          </ul>

          <p>It starts with a model that you want to render. I'll explain this with a cube to keep things simple. The first port of call is to create a wireframe. This is simply a collection polygons
          (triangles in the case of 3D graphics) that form a shape. To create a simple model, I'll use <a href="https://www.blender.org/" target="_blank">Blender</a>, a free 3D modelling program.
          </p>

          <span className="image project"><img src={blenderCube} alt=""/></span>

          <p>To texture this model, it is unwrapped into its 'faces' and then a texture is mapped onto it.</p>

          <span className="image project"><img src={blenderCube1} alt=""/></span>
          <span className="image project"><img src={blenderCube2} alt=""/></span>

          <p>This model is then exported as a .obj (object) file. These files are simply plain text formatted in a certain way. They contain both the vertex data that tells the renderer how to recreate the shape,
          as well as vector normals (used for calculating reflections) and coordinates that map the texture files onto its faces.</p>

          <p>This file is then parsed by my program, and the model is stored something called a Vertex Array Object, or VAO for short. A VAO is a special kind of data structure used by OpenGL to store the information about
          a single rendered object. Within a VAO, are 1 or more Vertex Buffer Objects, VBO's for short. A VBO is an array, typically used to store 2D or 3D vertex data about the object in question. For example, at index 0 of the
          VAO used to store our cube, we might place a VBO of 3D vertex coordinates that specifies where OpenGL is to render polygons on screen. At index 1, we might place a VBO of texture coordinates, which are used to tell OpenGL
          how to map a texture image onto our model.</p>

          <p>Further indexes of a VAO may be used to store things to do with vector normals and other such data. For fully fledged rendered models in games, it isn't unheard of to have as many as 16 or so different VBOs within a single VAO.</p>

          <span className="image project"><img src={RendererCode0} alt=""/></span>
          <p>Method that creates a VAO object and returns its ID</p>

          <span className="image project"><img src={RendererCode1} alt=""/></span>
          <p>Method that returns an untextured model. Creates 2 VBOs, one for vertex coordinate positions and another for texture mappings. These are then stored in the VAO specified by the ID, and the whole structure is returned, representing a
          single model.</p>

          <span className="image project"><img src={RendererCode2} alt=""/></span>
          <p>A raw model is then created from the .obj file created in Blender. That model object is then textured, using the texture mapping coordinates also supplied by Blender. This is then wrapped in an entity, which allows us to track and manipulate
          the 3D position of this object while it's being rendered.</p>

          <span className="image project"><img src={RendererCode3} alt=""/></span>
          <p>We then render this model and rotate it about its x and y axis until the display is closed.</p>

          <span className="image project"><img src={RenderCube} alt=""/></span>
          <p>A Successfully rendered 3D model!</p>




          <ul className="actions">
            <li><Link to="/" className="button">Return home</Link></li>
          </ul>
          </section>
        </div>
      </Layout>
    )
  }
}

export default ThreeDRenderer
