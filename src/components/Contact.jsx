import React from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your message successfully sent!");
  };

  return (
    <section id="contact" className="py-16 px-4 bg-base-100 container mx-auto">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-[#00BBA7] tracking-wide">
        Get in Touch
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8 border border-gray-300 dark:border-gray-700 p-8 rounded-3xl bg-white dark:bg-gray-900 shadow-md">
          <h3 className="text-3xl font-semibold mb-6 text-[#00BBA7]">Contact Information</h3>

          {[
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-[#00BBA7]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
              title: "Email",
              main: "mehedi.devx@gmail.com",
              sub: "Send me an email anytime",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-[#00BBA7]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              ),
              title: "Phone",
              main: "+8801518990014",
              sub: "Feel free to call during business hours",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-[#00BBA7]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              ),
              title: "WhatsApp",
              main: "+8801780524217",
              sub: "Quick replies on WhatsApp",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-[#00BBA7]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              title: "Location",
              main: "Debiganj, Panchagarh, Bangladesh",
              sub: "Available for remote work worldwide",
            },
          ].map(({ icon, title, main, sub }, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="mt-1">{icon}</div>
              <div>
                <h4 className="font-semibold text-lg">{title}</h4>
                <p className="text-base text-gray-700 dark:text-gray-300">{main}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-3xl p-8 shadow-md">
          <h3 className="text-3xl font-semibold mb-6 text-[#00BBA7]">Send a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-base-100 focus:outline-none focus:ring-2 focus:ring-[#00BBA7] transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-base-100 focus:outline-none focus:ring-2 focus:ring-[#00BBA7] transition"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block font-medium mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Let's work together"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-base-100 focus:outline-none focus:ring-2 focus:ring-[#00BBA7] transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Type your message..."
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-base-100 focus:outline-none focus:ring-2 focus:ring-[#00BBA7] transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#00BBA7] text-white font-semibold rounded-lg hover:bg-[#009881] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
