# react-json-to-form
creates form frontend from JSON data


# this is a take assignment for a job


##

```JSON
	{
		"name": "email",
		"type": "email"
		"human_label": "Email Address",
		"tag": "input",
	}
```

Would turn into a form field like this:

```html
<label>Email Address</label>
<input type="email" name="email">
```

On form submit, this field would be represented like so:

```JSON
{
	"email": "jsmith@gmail.com",
  // ...along with any other fields in the form
}
```


## 

```JSON
[{
  "tag": "input",
	"name": "first_name",
  "type": "text",
	"human_label": "First Name"
}, {
  "tag": "input",
  "name": "last_name",
  "type": "text",
	"human_label": "Last Name"
}, {
  "tag": "input",
  "name": "email",
  "type": "email",
  "human_label": "Email Address"
}, {
  "tag": "input",
  "name": "phone_number",
  "type": "text",
  "human_label": "Phone Number"
}, {
  "tag": "input",
  "name": "job_title",
  "type": "text",
  "human_label": "Job Title"
}, {
  "tag": "input",
  "name": "date_of_birth",
  "type": "date",
  "human_label": "Date of Birth"
}, {
  "tag": "input",
  "name": "parental_consent",
  "type": "checkbox",
  "human_label": "Parental Consent",
	"conditional": {
		"name": "date_of_birth",
		"show_if": (value) => {
      const now = new Date();
			return value >= new Date(now.getFullYear() - 13, now.getMonth(), now.getDate());
    }
}]
```

The JSON was missing the closing } for the conditional, and the show_if
block broke the JSON.parse() ... I think for this to work, 
that JavaScript/JSX needs to be escaped in some way, that I wasn't 
able to figure out. Doing so would break the pretty printing and JSON 
parsing / validation I have in the code.

Not being much of a React guy, this was challenging on several fronts.  
I m definately thinking more like a Javascript person, and find that 
translation between the JS elements and JSX isn't very obvious and the 
documentation leans toward video tutorials, which is not time efficient.
