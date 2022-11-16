const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { positionTitle, jobDescription, location, salary, employmentType, workplaceTags, levelOfExperience, benefits, accomodations} = this.props.jobPosting
    const capName = name[0].toUpperCase() + name.substring(1)
    return (
      <Default title={`Show Page`} jobPosting={this.props.jobPosting}>
        <span class="positionTitle">{positionTitle}: </span> {jobDescription} <br/> 
        {location} <br/> 
        {salary} <br/>
        {/*employmentType.map ((employmentType) => {
          //const {fullTime, partTime, Contract, Etc } = employmentType
          return `${employmentType}<br/>` 
        })*/}
        Employment Type: {employmentType.join(", ")} <br/>
        Workplace Tags: {workplaceTags.join(", ")} <br/>
        Level of Experience: {levelOfExperience.join(", ")} <br/>
        Benefits: {benefits.join(", ")} <br/>
        Accomodations: {accomodations.join(", ")} <br/>
        {accomodations.map ((accomodation) => {
          return `${accomodation.key}:${accomodation.value.join(", ")}`
        })}
      </Default>
    )
  }
}

module.exports = Show
