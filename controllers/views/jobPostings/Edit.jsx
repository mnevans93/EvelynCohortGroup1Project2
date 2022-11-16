const React = require('react')
const Default = require('../layouts/Default.jsx.js')
class Edit extends React.Component {
    render(){
        const { positionTitle, jobDescription, location, salary, employmentType, workplaceTags, levelOfExperience, benefits, accomodations} = this.props.jobPosting
        return (
            <Default title= "Create a Job Posting" jobPosting={this.props.jobPosting}>
            <form method="POST" action={`/jobPostings/${jobPosting._id}?_method=PUT`}>
                Position Title: <input type="text" name="positionTitle" placeholder='Position Title' defaultValue={positionTitle}></input><br/>
                Job Description: <input type="text" name="jobDescription" placeholder='Job Description' defaultValue={jobDescription}></input><br/>
                Location: <input type="text" name="location" placeholder='Location' defaultValue={location}></input><br/>
                Salary: <input type="text" name="salary" placeholder='Salary' defaultValue={salary}></input><br/>
                Employment Type: <input type="text" name="employmentType" placeholder='Full Time, Part Time, Contract, Etc' defaultValue={employmentType}></input><br/>
                Workplace Tags: <input type="text" name="workplaceTags" placeholder='LGBTQIA-friendly, BIPOC-led Org, Etc' defaultValue={workplaceTags}></input><br/>
                Level of Experience: <input type="text" name="levelOfExperience" placeholder='Internship, Entry Level, Mid level, ...' defaultValue={levelOfExperience}></input><br/>
                Benefits: <input type="text" name="benefits" placeholder='401K, Health insurance, Vision, Dental, Maternal/Paternal Leave ' defaultValue={benefits}></input><br/>
                Accomodations: <input type="text" name="accomodations" placeholder='Auditory Aids, Behavioral Aids, Speech aids, Vision Aids, Physicial Therapy, ...' defaultValue={accomodations}></input><br/>
                <input type="submit" value="Create"></input>
            </form>
            </Default>
        )
    }
}

module.exports = Edit