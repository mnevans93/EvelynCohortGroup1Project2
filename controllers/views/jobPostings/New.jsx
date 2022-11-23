const React = require('react')
const Default = require('../layouts/Default.jsx.js')
class New extends React.Component {
    render(){
        return (
            <Default title= "Create a Job Posting" create="true" >
            <form method="POST" action="/jobPosting">
                Position Title: <input type="text" name="positionTitle" placeholder='Position Title'></input><br/>
                Job Description: <input type="text" name="jobDescription" placeholder='Job Description'></input><br/>
                Location: <input type="text" name="location" placeholder='Location'></input><br/>
                Salary: $<input type="text" name="salary" placeholder='30,000'></input><br/>
                Employment Type: <input type="text" name="employmentType" placeholder='Full Time, Part Time, Contract, Etc'></input><br/>
                Workplace Tags: <input type="text" name="workplaceTags" placeholder='LGBTQIA-friendly, BIPOC-led Org, Etc'></input><br/>
                Level of Experience: <input type="text" name="levelOfExperience" placeholder='Internship, Entry Level, Mid level, ...'></input><br/>
                Benefits: <input type="text" name="benefits" placeholder='401K, Health insurance, Vision, Dental, Maternal/Paternal Leave '></input><br/>
                Accomodations: <input type="text" name="accomodations" placeholder='Auditory Aids, Behavioral Aids, Speech aids, Vision Aids, Physicial Therapy, ...'></input><br/>
                <input type="submit" value="Create"></input>
            </form>
            </Default>
        )
    }
}

module.exports = New