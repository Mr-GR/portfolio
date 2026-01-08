import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// Modal Component
const Modal = ({ isOpen, onClose, message, isError }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-tertiary rounded-2xl p-8 max-w-md w-full shadow-xl border border-white/10"
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className={`w-16 h-16 rounded-full flex items-center justify-center ${
              isError ? "bg-red-500/20" : "bg-green-500/20"
            }`}
          >
            {isError ? (
              <svg
                className="w-8 h-8 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <motion.svg
                className="w-8 h-8 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </motion.svg>
            )}
          </motion.div>
        </div>

        {/* Title */}
        <h3 className="text-white text-xl font-bold text-center mb-2">
          {isError ? "Oops!" : "Message Sent!"}
        </h3>

        {/* Message */}
        <p className="text-secondary text-center mb-6">
          {message}
        </p>

        {/* Close Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onClose}
          className={`w-full py-3 px-6 text-white font-semibold rounded-xl shadow-lg transition-shadow ${
            isError
              ? "bg-gradient-to-r from-red-500 to-orange-500 hover:shadow-red-500/25"
              : "bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-purple-500/25"
          }`}
        >
          {isError ? "Try Again" : "Got it"}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    title: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [modal, setModal] = useState({ isOpen: false, message: "", isError: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('Field changing:', name, '=', value);

    setForm((prevForm) => {
      const updated = {...prevForm, [name]: value};
      console.log('Updated form state:', updated);
      return updated;
    });

    if (errors[name]) {
      setErrors((prevErrors) => ({...prevErrors, [name]: ''}));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!form.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);


    const autoReplyParams = {
      name: form.name,
      title: form.title,
      email: form.email,
      from_email: form.email,
      reply_to: form.email,
      message: form.message,
    };

    const notificationParams = {
      from_name: "Personal Website",
      to_name: "Manuel Guevara",
      message: form.message,
      reply_to: form.email,
    };

    console.log('Auto-reply params:', autoReplyParams);
    console.log('Notification params:', notificationParams);

    Promise.all([
      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID,
        autoReplyParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ),
      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID,
        notificationParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
    ])
    .then(() => {
      setLoading(false);
      setModal({
        isOpen: true,
        message: "Thank you for reaching out! I'll get back to you as soon as possible.",
        isError: false,
      });

      setForm({
        name: '',
        title: '',
        email: '',
        message: '',
      });
    })
    .catch((error) => {
      setLoading(false);
      console.error('EmailJS Error:', error);
      setModal({
        isOpen: true,
        message: "Something went wrong. Please try again later.",
        isError: true,
      });
    });
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl relative z-10'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            {errors.name && <span className='text-red-500 text-sm mt-2'>{errors.name}</span>}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            {errors.email && <span className='text-red-500 text-sm mt-2'>{errors.email}</span>}
          </label>
         <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Subject</span>
            <input 
              type="title"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="What is the Subject?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
         </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            {errors.message && <span className='text-red-500 text-sm mt-2'>{errors.message}</span>}
          </label>

          <button
            type='submit'
            disabled={loading}
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] w-full relative z-0'
      >
        <EarthCanvas />
      </motion.div>

      {/* Success/Error Modal */}
      <Modal
        isOpen={modal.isOpen}
        onClose={() => setModal({ ...modal, isOpen: false })}
        message={modal.message}
        isError={modal.isError}
      />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");