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
  title: 'Details',
  description: 'Want to get in touch with me?',
  successMessage: 'Thank you for contcting me.',
  errorMessage: 'Please Fill the complete form',
  fields:{
    firstName: '',
    lastName: '',
    email: '',
    msg: ''
  },
  fieldsConfig:  [
   { id: 1, label: 'First Name', fieldName: 'firstName', type: 'text',placeholder:'Your First Name', isRequired: true , klassName:'first-name-field'},
   { id: 2, label: 'Last Name', fieldName: 'lastName', type: 'text', placeholder: 'Your Last Name', isRequired: true , klassName:'last-name-field'},
   { id: 3, label: 'Email', fieldName: 'email', type: 'email', placeholder: ' Your Email', isRequired: true , klassName:'email-field'},
   { id: 4, label: 'Message', fieldName: 'msg', type: 'textarea',placeholder:'Write something.....', isRequired: true , klassName:'message-field'}
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
        <h2 className="about-me">{config.title}</h2>
        <p className="about-text details">{config.description}</p>
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
                        className={field.klassName}
                        placeholder={field.placeholder}
                        value={field.name}
                        onChange={e => handleChange(e, field.fieldName)}
                      />
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <label>{field.label}</label>
                      <textarea 
                        className={field.klassName} 
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