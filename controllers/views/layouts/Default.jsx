const React = require('react')
let baseRoute = "/jobPostings"

class Default extends React.Component {
  render () {
    const { jobPosting, title } = this.props
    return (
      <html>
        <head>
          <link rel='stylesheet' href='/css/app.css' />
          <title>{title}</title>
        </head>
        <body>
        <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <input type="text" placeholder="Search..">
        </div>
          <nav>
            <a href={`${baseRoute}`}> Home</a>
            <a href={`${baseRoute}/new`}>Create a New Job Post</a>
            {jobPosting ? <a href={`${baseRoute}/${jobPosting._id}/edit`}> Edit </a> : ''}
            {jobPosting ? <a href={`${baseRoute}/${jobPosting._id}`}>Details</a> : ''}
          </nav>
          <h2>
            {title}
          </h2>
          {this.props.children}
          <h3>copyright 2022</h3>
        </body>
      </html>
    )
  }
}

module.exports = Default
