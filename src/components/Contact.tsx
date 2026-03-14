"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IconCalendarEvent, IconMail, IconBrandLinkedin } from "@tabler/icons-react";

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};
export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const calComUrl = process.env.NEXT_PUBLIC_CALCOM_URL || "https://cal.com";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = formData.name.value.trim();
    const email = formData.email.value.trim();
    const message = formData.message.value.trim();

    if (!name || !email || !message) {
      return;
    }

    const payload = {
      name,
      email,
      message,
      submittedAt: new Date().toISOString(),
      source: "portfolio-contact-form",
    };

    // Intentionally logging only for now; backend wiring will be added later.
    console.log("Contact form submission:", payload);

    setFormData(defaultFormState);
  };
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a
          href={calComUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-teal-200 bg-teal-50 p-4 hover:bg-teal-100 transition"
        >
          <IconCalendarEvent className="h-5 w-5 text-teal-700" />
          <p className="text-sm font-semibold text-teal-900 mt-2">Book a Session</p>
          <p className="text-xs text-teal-800 mt-1">Schedule a call via Cal.com</p>
        </a>

        <a
          href="mailto:khanbasir5555@gmail.com"
          className="rounded-2xl border border-slate-200 bg-white p-4 hover:bg-slate-50 transition"
        >
          <IconMail className="h-5 w-5 text-slate-700" />
          <p className="text-sm font-semibold text-slate-900 mt-2">Email</p>
          <p className="text-xs text-slate-600 mt-1">khanbasir5555@gmail.com</p>
        </a>

        <Link
          href="https://linkedin.com/in/basirkhan418"
          target="_blank"
          className="rounded-2xl border border-slate-200 bg-white p-4 hover:bg-slate-50 transition"
        >
          <IconBrandLinkedin className="h-5 w-5 text-slate-700" />
          <p className="text-sm font-semibold text-slate-900 mt-2">LinkedIn</p>
          <p className="text-xs text-slate-600 mt-1">Connect and message directly</p>
        </Link>
      </div>

      <form
        className="form p-4 md:p-6 rounded-2xl border border-white/70 bg-white/70 backdrop-blur-sm shadow-sm"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-white focus:outline-none focus:ring-2 focus:ring-teal-200 px-3 py-3 rounded-xl text-sm text-neutral-700 w-full border border-neutral-200"
            value={formData.name.value}
            onChange={(e) => {
              setFormData({
                ...formData,
                name: {
                  value: e.target.value,
                  error: "",
                },
              });
            }}
          />
          <input
            type="email"
            placeholder="Your email address"
            className="bg-white focus:outline-none focus:ring-2 focus:ring-teal-200 px-3 py-3 rounded-xl text-sm text-neutral-700 w-full border border-neutral-200"
            value={formData.email.value}
            onChange={(e) => {
              setFormData({
                ...formData,
                email: {
                  value: e.target.value,
                  error: "",
                },
              });
            }}
          />
        </div>
        <div>
          <textarea
            placeholder="Tell me about your project"
            rows={8}
            className="bg-white focus:outline-none focus:ring-2 focus:ring-teal-200 px-3 mt-4 py-3 rounded-xl text-sm text-neutral-700 w-full border border-neutral-200"
            value={formData.message.value}
            onChange={(e) => {
              setFormData({
                ...formData,
                message: {
                  value: e.target.value,
                  error: "",
                },
              });
            }}
          />
        </div>
        <button
          className="w-full px-4 py-3 mt-4 bg-teal-700 rounded-xl font-semibold text-white hover:bg-teal-600 transition duration-200"
          type="submit"
        >
          Submit Inquiry
        </button>
      </form>
    </div>
  );
};
