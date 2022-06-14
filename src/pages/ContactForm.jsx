import React from 'react';
import Header from '../components/Header';
import '../css/Contact.css';

export default function ContactForm() {
  return (
    <>
      <Header />
      <div className='contactBody'>
        <div className='contactFormContainer'>
          <form>
            <div class='form-row'>
              <div class='col'>
                <input
                  type='text'
                  class='form-control'
                  placeholder='name'
                />
              </div>
            </div>
            <div class='form-group'>
              <label for='exampleFormControlInput1'>E-mail</label>
              <input
                type='email'
                class='form-control'
                id='exampleFormControlInput1'
                placeholder='email@example.com'
              />
            </div>
            <div class='form-group'>
              <label for='exampleFormControlTextarea1'>
                Send me a message :)
              </label>
              <textarea
                class='form-control'
                id='exampleFormControlTextarea1'
                rows='3'
              ></textarea>
            </div>
            <button type='button' class='btn btn-success'>
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
