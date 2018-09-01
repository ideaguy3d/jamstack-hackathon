import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi, I'm Julius Alvarado ^_^/</h1>
    
    <p>I use AngularJS 1.x, PHP 7, and SQL to do <i>Full Stack Engineering :)</i></p>

    <p><small>I'm also trying to learn Google BigQuery, ai/ml, React and improve my Node.js skills (:</small></p>
      
    <h1><a href="https://github.com/ideaguy3d" target="_blank">github.com/ideaguy3d</a> </h1>
    
    <br></br>

    <img src="http://hack2016.julius3d.com/img/logo/j3d.png" alt="my-logo" height="54" width="198"></img>

    <br></br>

      <p>App I am working on:</p>
      <iframe src="http://edhub.co" width="375" height="667"></iframe>

    <br></br>

    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
