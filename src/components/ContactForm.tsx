import { useState } from 'react';
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      const response = await fetch('/', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.ok) {
        toast.success("Your message has been sent successfully!");
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form 
      name="contact" 
      method="POST" 
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit} 
      className="space-y-6"
    >
      {/* Netlify hidden fields */}
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </p>
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Your Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="input-field"
          placeholder="John Doe"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="input-field"
          placeholder="john@example.com"
        />
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          value={formData.subject}
          onChange={handleChange}
          className="input-field"
          placeholder="How can we help you?"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          className="input-field min-h-[150px]"
          placeholder="Your message here..."
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
