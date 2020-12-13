import React, { useState } from 'react';
import axios from 'axios';
import "../styles/Form.css"

const Form = () => {
  const [mailSent, setMailSent] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({});

  const config = {
    successMessage: 'Thank you for contacting me, I will get back to you as soon as possible.',
    errorMessage: 'Please fill in all fields',
    fields:{
      firstName: '',
      email: '',
      msg: ''
    },
    fieldsConfig:  [
    { id: 1, label: 'Name', fieldName: 'name', type: 'text',placeholder:'Enter your name', isRequired: true },
    { id: 2, label: 'Email', fieldName: 'email', type: 'email', placeholder: ' Enter your email', isRequired: true},
    { id: 3, label: 'Message', fieldName: 'msg', type: 'textarea',placeholder:'How can I help?', isRequired: true}
    ]
  }

  /**
   * @function handleFormSubmit
   * @param e { obj } - form event
   * @return void
   */

  const handleFormSubmit = e => {
    console.log(formData)
    e.preventDefault();
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API}`,
      headers: { "content-type": "application/json" },
      data: formData
    })
    .then(result => {
      if (result.data.sent) {
        setMailSent(result.data.sent)
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
      <div className="contact-form-container">
        <div>
          <form action="#">
            {config.fieldsConfig && config.fieldsConfig.map(field => {
              return (
                <React.Fragment key={field.id}>
                  {field.type !== "textarea" ? (
                    <React.Fragment>
                      <label className="form-label">{field.label}</label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={field.name}
                        onChange={e => handleChange(e, field.fieldName)}
                      />
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <label className="form-label">{field.label}</label>
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
            <div>
              {mailSent && <div className="success"><i className="fas fa-thumbs-up"></i> {config.successMessage}</div>}
              {error && <div className="error"><i className="fas fa-exclamation-triangle"></i> {config.errorMessage}</div>}
            </div>
            <input className="form-label" type="submit" onClick={e => handleFormSubmit(e)} value="Submit" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form;