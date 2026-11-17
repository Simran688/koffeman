"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site-config";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [enquiryType, setEnquiryType] = useState("Franchise Enquiry");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please provide your name.");
      return;
    }
    if (!phone.trim() || phone.trim().length < 10) {
      setError("Please provide a valid 10-digit contact telephone number.");
      return;
    }

    setError("");
    setSubmitted(true);
  };

  const whatsappText = encodeURIComponent(
    `Hello KoffeeMan team,\n\nMy name is ${name}.\nEnquiry Type: ${enquiryType}\nPhone: ${phone}\nMessage: ${message || "I would like to enquire about KoffeeMan."}`
  );
  const whatsappUrl = `https://wa.me/919811161923?text=${whatsappText}`;

  return (
    <div className="bg-[#FFFDF8] border border-[#C5A66B]/30 rounded-[20px] p-6 sm:p-8 md:p-10 shadow-[0_16px_36px_rgba(33,18,15,0.06)]">
      <div className="mb-6 pb-4 border-b border-[#F5EBDD]">
        <div className="text-[10px] font-bold tracking-[0.2em] text-[#C5A66B] uppercase mb-1">
          Direct Connect
        </div>
        <h2 className="font-cormorant font-bold text-[28px] md:text-[34px] text-[#21120F] m-0 mb-1">
          Send an Enquiry
        </h2>
        <p className="text-xs sm:text-sm text-[#75452F] m-0">
          Interested in a franchise, event booking, or have a question? Submit below or call us directly.
        </p>
      </div>

      {submitted ? (
        <div className="p-6 rounded-xl bg-[#F5EBDD] border border-[#C5A66B] text-center">
          <div className="w-12 h-12 rounded-full bg-[#21120F] text-[#C5A66B] grid place-items-center text-xl mx-auto mb-3">
            ✓
          </div>
          <h3 className="font-cormorant font-bold text-2xl text-[#21120F] mb-2">
            Thank you, {name}!
          </h3>
          <p className="text-xs sm:text-sm text-[#75452F] leading-relaxed max-w-md mx-auto mb-6">
            Your {enquiryType} has been recorded. To connect immediately with our team, click below to open WhatsApp or call us directly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold !py-3 !px-6 text-xs font-bold uppercase tracking-wider"
            >
              Open in WhatsApp ↗
            </a>
            <a
              href={siteConfig.contact.primaryPhoneTel}
              className="btn btn-dark !py-3 !px-6 text-xs font-bold uppercase tracking-wider"
            >
              Call {siteConfig.contact.primaryPhone} ☎
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {error && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-bold text-[#21120F] mb-1.5 uppercase tracking-wider">
                Full Name *
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-4 py-2.5 rounded-xl border border-[#C5A66B]/30 bg-[#F5EBDD]/40 text-[#21120F] text-sm focus:outline-none focus:border-[#C5A66B] focus:bg-[#FFFDF8]"
              />
            </div>

            <div>
              <label htmlFor="contact-phone" className="block text-xs font-bold text-[#21120F] mb-1.5 uppercase tracking-wider">
                Phone Number *
              </label>
              <input
                id="contact-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 9811161923"
                className="w-full px-4 py-2.5 rounded-xl border border-[#C5A66B]/30 bg-[#F5EBDD]/40 text-[#21120F] text-sm focus:outline-none focus:border-[#C5A66B] focus:bg-[#FFFDF8]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-type" className="block text-xs font-bold text-[#21120F] mb-1.5 uppercase tracking-wider">
              Enquiry Type
            </label>
            <select
              id="contact-type"
              value={enquiryType}
              onChange={(e) => setEnquiryType(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-[#C5A66B]/30 bg-[#F5EBDD]/40 text-[#21120F] text-sm focus:outline-none focus:border-[#C5A66B] focus:bg-[#FFFDF8]"
            >
              <option value="Franchise Enquiry">Franchise Discussion</option>
              <option value="Event Booking">Event / Party Celebration Booking</option>
              <option value="General Query">Customer Feedback / General Query</option>
            </select>
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-xs font-bold text-[#21120F] mb-1.5 uppercase tracking-wider">
              Message / Details (Optional)
            </label>
            <textarea
              id="contact-message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your event, location, or requirement..."
              className="w-full px-4 py-2.5 rounded-xl border border-[#C5A66B]/30 bg-[#F5EBDD]/40 text-[#21120F] text-sm focus:outline-none focus:border-[#C5A66B] focus:bg-[#FFFDF8]"
            />
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
            <button
              type="submit"
              className="btn btn-dark !py-3 !px-7 text-xs font-bold uppercase tracking-wider"
            >
              Submit Enquiry →
            </button>
            <span className="text-[11px] text-[#8F7466]">
              Or call directly: <a href={siteConfig.contact.primaryPhoneTel} className="font-bold text-[#21120F] underline">{siteConfig.contact.primaryPhone}</a>
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
