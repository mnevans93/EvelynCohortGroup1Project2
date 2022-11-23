const React = require('react')
const Default = require('../layouts/Default.jsx')
class Index extends React.Component {
  constructor (props) {
    super(props)
    this.props = props
  }

  render () {
    const { jobPostings } = this.props
    return (
      <Default title='Job Postings Index Page'>
        <ul>
          {
                        jobPostings.map((jobPosting) => {
                            const { positionTitle, jobDescription, location, salary, employmentType, workplaceTags, levelOfExperience, benefits, accomodations} = jobPosting
                          return (
                            <li key={jobPosting._id}>
                              <a href={`/jobPosting/${jobPosting._id}`}>
                              <span class="positionTitle">{positionTitle}: </span> {jobDescription} 
                              </a> at {location} 
                             for ${salary}.
                              <form method='POST' action={`/jobPosting/${jobPosting._id}?_method=DELETE`}>
                                <input type='submit' value={`Delete ${positionTitle}`} />
                              </form>
                            </li>
                          )
                        })
                    }
        </ul>
      </Default>
    )
  }
}

module.exports = Index
