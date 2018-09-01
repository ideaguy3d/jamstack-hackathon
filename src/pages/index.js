import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi, I'm Julius Alvarado ^_^/</h1>
    
    <p>I use AngularJS 1.x, PHP 7, and SQL to do <i>Data Engineering :)</i>.</p>

    <p><small>I'm also trying to learn React and improve my Node.js skills (:</small></p>

    <a href="https://github.com/ideaguy3d" target="_blank">github.com/ideaguy3d</a> 
    
    <br></br>

    <br></br>

    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
