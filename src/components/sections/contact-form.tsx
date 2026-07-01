"use client";

import { useState, type FormEvent } from "react";
import { LuCheck } from "react-icons/lu";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): boolean {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Name is required.";
    if (!values.email.trim()) {
      next.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!values.message.trim() || values.message.trim().length < 10) {
      next.message = "Message should be at least 10 characters.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    // Wire this up to your form backend of choice (Formspree, Resend, an API route, etc).
    // This demo only confirms locally.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card-surface flex items-start gap-3 p-6">
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-signal-pass/10 text-signal-pass">
          <LuCheck size={16} />
        </span>
        <div>
          <p className="font-medium text-navy-800 dark:text-mist">Message sent.</p>
          <p className="mt-1 text-sm text-navy-500 dark:text-navy-300">
            Thanks for reaching out — I&apos;ll reply within one business day.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card-surface space-y-5 p-6 sm:p-8">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy-700 dark:text-mist">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="w-full rounded-md border border-navy-200 bg-white px-3.5 py-2.5 text-sm text-navy-900 placeholder:text-navy-400 dark:border-navy-700 dark:bg-navy-900 dark:text-mist"
          placeholder="Jane Doe"
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-xs text-signal-fail">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-700 dark:text-mist">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="w-full rounded-md border border-navy-200 bg-white px-3.5 py-2.5 text-sm text-navy-900 placeholder:text-navy-400 dark:border-navy-700 dark:bg-navy-900 dark:text-mist"
          placeholder="jane@company.com"
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-xs text-signal-fail">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-700 dark:text-mist">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full resize-none rounded-md border border-navy-200 bg-white px-3.5 py-2.5 text-sm text-navy-900 placeholder:text-navy-400 dark:border-navy-700 dark:bg-navy-900 dark:text-mist"
          placeholder="Tell me a bit about the role or project..."
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-signal-fail">
            {errors.message}
          </p>
        )}
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send message
      </button>
    </form>
  );
}
