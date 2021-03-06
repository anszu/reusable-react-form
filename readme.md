# Reusable Form Pattern

This atomic approach doesn't use a reusable form component but instead tries to introduce a pattern for creating form instances by providing the following components and helpers:

* Simple reusable form elements like inputs, buttons and labels [(FormElements)](https://github.com/anszu/reusable-react-form/tree/master/src/Forms/Components/FormElements) 
* Form Fields that can be used to predefine and style combinations of form elements [(FormFields)](https://github.com/anszu/reusable-react-form/tree/master/src/Forms/Components/FormFields)
* Hooks for creating controlled form components and doing callbacks for submit and validation [(Hooks)](https://github.com/anszu/reusable-react-form/tree/master/src/Forms/Hooks)
* Context to deliver controls directly to form elements and avoid passing props through Form Fields [(Context)](https://github.com/anszu/reusable-react-form/tree/master/src/Forms/Context)
* Validation methods to validate inputs and map invalid requirements [(Validation.js)](https://github.com/anszu/reusable-react-form/blob/master/src/Forms/Validation.js) with error hints [(ValidationErrors.js)](https://github.com/anszu/reusable-react-form/blob/master/src/Forms/ValidationErrors.js)

Example usage in [User Contact Form](https://github.com/anszu/reusable-react-form/blob/master/src/Forms/UserContactForm.js). 

