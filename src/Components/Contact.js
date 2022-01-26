// import React, { useState } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';
import useInput from './hooks/use-input';
import useValidation from './hooks/use-validation';
import { useEffect, useState } from 'react';

const Contact = ({ data }) => {
  const [validationFormName, setValidationFormName] = useState('');
  const [validationFormEmail, setValidationFormEmail] = useState('');
  const [validationFormSubject, setValidationFormSubject] = useState('');
  const [validationFormMessage, setValidationFormMessage] = useState('');
  const [formSend, setFormSend] = useState(false);

  // const [nameValidation, setNameValidation] = useState(true);

  // const [emailValidation, setValidation] = useState(true);
  // const [subject, setSubject] = useState('');
  // const [message, setMessage] = useState('');
  // const [messageValidation, setMessageValidation] = useState(true);

  const {
    value: entredName,
    isValidValue: isValidName,
    hasError: hasErrorName,
    entredValueHandler: entredNameHandler,
    onBlurHandler: onBlurNameHandler,
    resetValue: resetName,
  } = useInput((e) => e.trim() === '');
  const validateEmail = (email) => {
    let emailValue = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (emailValue !== null) {
      return false;
    } else {
      return true;
    }
  };

  const {
    value: entredEmail,
    hasError: hasErrorEmail,
    isValidValue: isValidEmail,
    entredValueHandler: entredEmailHandler,
    onBlurHandler: onBlurEmailHandler,
    resetValue: resetEmail,
  } = useInput(validateEmail);
  const {
    value: entredMessage,
    hasError: hasErrorMessage,
    isValidValue: isValidMessage,
    entredValueHandler: entredMessageHandler,
    onBlurHandler: onBlurMessageHandler,
    resetValue: resetMessage,
  } = useInput((e) => e.trim() === '');

  const {
    value: entredSubject,
    hasError: hasErrorSubject,
    isValidValue: isValidSubject,
    entredValueHandler: entredSubjectHandler,
    onBlurHandler: onBlurSubjectHandler,
    resetValue: resetSubject,
  } = useInput((e) => e.trim() === '');

  // console.log('hasErrorName', hasErrorName);
  const { cssClassValidity: subjectClassValidity, phrase: subjectPhrase } =
    useValidation(hasErrorSubject, 'subject');

  const { cssClassValidity: messageClassValidity, phrase: messagePhrase } =
    useValidation(hasErrorMessage, 'message');

  const { cssClassValidity: nameClassValidity, phrase: namePhrase } =
    useValidation(hasErrorName, 'name', isValidName);

  const { cssClassValidity: emailClassValidity, phrase: emailPhrase } =
    useValidation(hasErrorEmail, 'email');

  useEffect(() => {
    if (!isValidName) {
      setValidationFormName('');
      setFormSend(false);
    }
    if (!isValidEmail) {
      setValidationFormEmail('');
      setFormSend(false);
    }
    if (!isValidMessage) {
      setValidationFormMessage('');
      setFormSend(false);
    }
    if (!isValidSubject) {
      setValidationFormSubject('');
      setFormSend(false);
    }

    // if (!isValidName || !isValidEmail || !isValidMessage || !isValidSubject) {
    //   setValidationFormName('');
    // }
  }, [
    isValidName,
    isValidEmail,
    isValidMessage,
    isValidSubject,
    validationFormName,
    validationFormEmail,
    validationFormMessage,
    validationFormSubject,
    // validationForm,
  ]);

  if (data) {
    var contactName = data.name;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var contactEmail = data.email;
    var contactMessage = data.contactmessage;
  }

  const submitForm = (e) => {
    e.preventDefault();

    if (!isValidName && !isValidEmail && !isValidMessage && !isValidSubject) {
      // emailjs
      //   .sendForm(
      //     'service_fdkdvoa',
      //     'template_d1rtudg',
      //     e.target,
      //     'user_G66Veun6vUyyu3j8jGtGB'
      //   )
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => console.log(err));

      // setValidationForm('');
      setFormSend(true);
      setValidationFormName('');
      setValidationFormEmail('');
      setValidationFormSubject('');
      setValidationFormMessage('');
      resetName();
      resetEmail();
      resetMessage();
      resetSubject();
    } else {
      // setValidationForm('validationForm');
      setValidationFormName('validationForm');
      setValidationFormEmail('validationForm');
      setValidationFormSubject('validationForm');
      setValidationFormMessage('validationForm');
    }

    // if (isValidName && !hasErrorName) {
    //   console.log('form not valid');
    //   setformPhrase('validationForm');
    //   console.log('formPhrase= ', formPhrase);
    //   return;
    // }

    // console.log('hasErrorName = ', hasErrorName);
    // console.log('validationFormName = ', validationFormName);

    // console.log("e = ", e)
    // console.log(e.target);
    // if (name.trim() === '') {
    //   setNameValidation(false);
    //   return;
    // }
    // console.log('entredName = ', entredName);
    // console.log('hasErrorName = ', hasErrorName);

    // setName('');
    // emailjs.sendForm('service_fdkdvoa', 'template_d1rtudg', e.target, 'user_G66Veun6vUyyu3j8jGtGB')
    //   .then(res => {
    //     console.log(res)
    //   }).catch(err => console.log(err));
    // window.open(
    //   `mailto:${contactEmail}?subject=${encodeURIComponent(
    //     subject
    //   )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
    //     email
    //   )}): ${encodeURIComponent(message)}`
    // );
  };
  // const onChangeNameHandler = (e) => {
  //   setName(e.target.value);
  //   setNameValidation(true);
  // };

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{contactMessage}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form onSubmit={submitForm}>
            <fieldset>
              {hasErrorName && namePhrase}
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>

                <input
                  type="text"
                  defaultValue=""
                  value={entredName}
                  size="35"
                  id={validationFormName}
                  name="contactName"
                  className={nameClassValidity}
                  onChange={entredNameHandler}
                  onBlur={onBlurNameHandler}
                />
              </div>
              {hasErrorEmail && emailPhrase}
              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  value={entredEmail}
                  size="35"
                  id={validationFormEmail}
                  className={emailClassValidity}
                  name="contactEmail"
                  onBlur={onBlurEmailHandler}
                  onChange={entredEmailHandler}
                />
              </div>
              {hasErrorSubject && subjectPhrase}
              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  type="text"
                  defaultValue=""
                  value={entredSubject}
                  size="35"
                  id={validationFormSubject}
                  name="contactSubject"
                  onBlur={onBlurSubjectHandler}
                  className={subjectClassValidity}
                  onChange={entredSubjectHandler}
                />
              </div>
              {hasErrorMessage && messagePhrase}
              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows="15"
                  value={entredMessage}
                  onChange={entredMessageHandler}
                  onBlur={onBlurMessageHandler}
                  className={messageClassValidity}
                  id={validationFormMessage}
                  name="contactMessage"
                ></textarea>
              </div>

              <div>
                <button type="submit" className="submit">
                  Submit
                </button>
              </div>
              {formSend && <div className="formSend">form sent succeded</div>}
            </fieldset>
          </form>

          <div id="message-warning"> Error boy</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              {contactName}
              <br />
              {contactEmail}
              <br />
              <br />
              {street} <br />
              {city}, {state} {zip}
              <br />
              <span>{phone}</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
