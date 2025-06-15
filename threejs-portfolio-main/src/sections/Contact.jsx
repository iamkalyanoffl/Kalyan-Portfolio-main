import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Kalyan Sudarsan',
          from_email: form.email,
          to_email: 'kalyancr72005@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };

  return (
    <section className="c-space pt-20 pb-32" id="contact">

      {alert.show && <Alert {...alert} />}

      {/* Main Heading Section */}
      <div className="text-center mb-16">
        <h3 className="head-text mb-6">Let's talk</h3>
        <p className="text-lg text-white-600 mt-6 max-w-2xl mx-auto leading-relaxed">
          Have a question or want to collaborate? Feel free to reach out
        </p>
      </div>

   <div className="relative min-h-screen flex items-center justify-center flex-col pb-32 overflow-hidden">
  <img
    src="/assets/terminal.png"
    alt="terminal-bg"
    className="absolute inset-0 w-full h-full object-cover z-0 bg-opacity-50 pointer-events-none"
  />


        <div className="contact-container relative z-10   rounded-lg shadow-lg p-5 backdrop-blur-md">


          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="mt-8 flex flex-col space-y-8">
            <label className="space-y-4">
              <span className="field-label text-lg">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-4">
              <span className="field-label text-lg">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-4">
              <span className="field-label text-lg">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn mt-8" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>

          
          
        </div>
      </div>
    </section>
  );
};

export default Contact;