<h1>Invisible Strength</h1>
<h2>Wireframe and Final Pages</h2>

<h2>API</h2>

<h2>ERD and models</h2>


```
models
|- Employer
|- Job Posting
|- Location
|- Salary
|- Employment Type
|- Level of Experience
|- Benefits
|- Entity
|- Accomondations
|- Search
```
<h2>Controllers</h2>

```
controller
|- Route
|- Views
|- Database
|- Auth
|- Search
|- API
```
<h2>CRUD Functionality</h2>
<h3>Creating</h3>
<h3>Reading</h3>
<h3>Updating</h3>
<h3>Deleting/Destroying</h3>


<h2>RESTful Table</h2>

| Action |        URL      | HTTP Verb | JSX View |     Mongoose Method       |
|--------|-----------------|-----------|----------|---------------------------|
| Index  |    /[placeholder]/    |  GET      |Index.jsx |       Product.find()      |
|  Show  | /[placeholder]/:id    |  GET      | Show.jsx |      Product.findById()   |
|   New  | /[placeholder]/new    |  GET      | New.jsx  |            none           |
|Create  |    /[placeholder]/    |  POST     |   none   |  Product.create(req.body) |
|  Edit  |/[placeholder]/:id/edit|  GET      | Edit.jsx |     Product.findById()    |
|Update  | /[placeholder]/:id    |  PUT      |  none    |Product.findByIdAndUpdate()|
|Delete  |    /[placeholder]/    |  DELETE   |  none    |Product.findByIdAndDelete()| 