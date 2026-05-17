import React, { useState, useRef } from 'react';
import useScrollReveal from '../utils/useScrollReveal';
import './Contact.css';

/* ─────────────────────────────────────────────────────────
   EmailJS Setup Instructions (add to README):
   1. Go to https://www.emailjs.com and create a free account
   2. Add an Email Service (Gmail recommended)
   3. Create an Email Template with variables:
      {{from_name}}, {{from_email}}, {{message}}
   4. Replace the three constants below with your real IDs:
      EMAILJS_SERVICE_ID  — from Services tab
      EMAILJS_TEMPLATE_ID — from Email Templates tab
      EMAILJS_PUBLIC_KEY  — from Account > API Keys
   5. Run:  npm install @emailjs/browser
───────────────────────────────────────────────────────── */
const EMAILJS_SERVICE_ID  = 'service_il8c9pj';
const EMAILJS_TEMPLATE_ID = 'template_wv7jurq';
const EMAILJS_PUBLIC_KEY  = 'kwU8bcrj-GNfboAPa';

const Contact = () => {
  const [ref, visible] = useScrollReveal();
  const formRef = useRef(null);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!formData.name.trim())        e.name    = 'Name is required';
    if (!formData.email.trim())       e.email   = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Invalid email address';
    if (!formData.message.trim())     e.message = 'Message is required';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(d => ({ ...d, [name]: value }));
    if (errors[name]) setErrors(ev => ({ ...ev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('loading');
    try {
      // Dynamic import so the app still compiles without real keys
      const emailjs = await import('@emailjs/browser');
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  formData.name,
          from_email: formData.email,
          message:    formData.message,
          to_email:   'yashashwinimv0@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={`contact section-pad ${visible ? 'revealed' : ''}`} ref={ref}>
      <div className="section-container">
        <div className="contact__inner">

          {/* Left: Info */}
          <div className="contact__info">
            <div className="section-label">Contact</div>
            <h2 className="section-title">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="contact__subtitle">
              I'm open to internships, collaborations, and exciting projects.
              Drop me a message — I'd love to hear from you!
            </p>

            <div className="contact__links">
              <a href="mailto:yashashwinimv0@gmail.com" className="contact__link">
                <div className="contact__link-icon contact__link-icon--email">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className="contact__link-label">Email</div>
                  <div className="contact__link-value">yashashwinimv0@gmail.com</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/yashashwini-mv-2b680b258/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
              >
                <div className="contact__link-icon contact__link-icon--linkedin">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
                <div>
                  <div className="contact__link-label">LinkedIn</div>
                  <div className="contact__link-value">Yashashwini MV</div>
                </div>
              </a>
            </div>

            {/* Availability badge */}
            <div className="contact__availability">
              <span className="contact__avail-dot" />
              Available for Internships & Freelance Work
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact__form-wrap glass-card">
            {status === 'success' ? (
              <div className="contact__success">
                <div className="contact__success-icon">✅</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  className="btn btn-primary"
                  onClick={() => setStatus('idle')}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                <h3 className="contact__form-title">Send a Message</h3>

                <div className="contact__field">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Yashashwini MV"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="contact__error">{errors.name}</span>}
                </div>

                <div className="contact__field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="contact__error">{errors.email}</span>}
                </div>

                <div className="contact__field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Hi Yashashwini, I'd love to collaborate on..."
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                  />
                  {errors.message && <span className="contact__error">{errors.message}</span>}
                </div>

                {status === 'error' && (
                  <div className="contact__status-error">
                    ⚠️ Failed to send. Please try emailing directly.
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary contact__submit"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <span className="contact__spinner" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
