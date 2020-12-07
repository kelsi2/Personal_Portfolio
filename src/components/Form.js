import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import "../styles/Form.css"

const Form = (props) => {
  const [mailSent, setmailSent] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({});

  const config = {
  api: `${process.env.REACT_APP_API}`,
  title: 'Contact',
  description: 'Want to get in touch with me?',
  successMessage: 'Thank you for contcting me.',
  errorMessage: 'Please fill all fields',
  fields:{
    firstName: '',
    lastName: '',
    email: '',
    msg: ''
  },
  fieldsConfig:  [
   { id: 1, label: 'Name', fieldName: 'name', type: 'text',placeholder:'Enter your name', isRequired: true },
   { id: 2, label: 'Email', fieldName: 'email', type: 'email', placeholder: ' Enter your email', isRequired: true},
   { id: 3, label: 'Message', fieldName: 'msg', type: 'textarea',placeholder:'How can I help?', isRequired: true}
  ]
}

  // const { title, description, successMessage, errorMessage, fieldsConfig } = props.config;

  /**
   * @function handleFormSubmit
   * @param e { obj } - form event
   * @return void
   */

  const handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API}`,
      headers: { "content-type": "application/json" },
      data: formData
    })
    .then(result => {
      if (result.data.sent) {
        setmailSent(result.data.sent)
        setError(false)
      } else {
        setError(true)
      }
    })
    .catch(error => setError(error.message))
  }

  /**
   * @function handleChange
   * @param e { obj } - change event
   * @param field { string } - name of the field
   * @return void
   */

   const handleChange = (e, field) => {
     let value = e.target.value;
     setFormData({
       ...formData,
       [field]: value
     })
   }

  return (
    <div className="contact-form">
      <div className="contact-form-header">
        <h2 id="footer" className="section-header">{config.title}</h2>
        <hr className="rule" />
        <p>{config.description}</p>
      </div>
      <div className="contact-form-container">
        <div>
          <form action="#">
            {config.fieldsConfig && config.fieldsConfig.map(field => {
              return (
                <React.Fragment key={field.id}>
                  {field.type !== "textarea" ? (
                    <React.Fragment>
                      <label>{field.label}</label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={field.name}
                        onChange={e => handleChange(e, field.fieldName)}
                      />
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <label>{field.label}</label>
                      <textarea 
                        placeholder={field.placeholder} 
                        onChange={e => handleChange(e, field.fieldName)}
                        value={field.name}
                      />
                    </React.Fragment>
                  )}
                    </React.Fragment>
              )
            })}
            <input type="submit" onClick={e => handleFormSubmit(e)} value="Submit" />
            <div>
              {mailSent && <div className="success">{config.successMessage}</div>}
              {error && <div className="error">{config.errorMessage}</div>}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form;

Form.propTypes = {
  config: PropTypes.object.isRequired
};