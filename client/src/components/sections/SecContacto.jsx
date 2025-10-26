import React, { useState } from "react";
import { Mail } from "lucide-react";
import { Section, Card } from "../layout/Container";
import { links } from "../../data/links";

export const SecContacto = ({ t, lang }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    company: "", // honeypot
  });
  const [status, setStatus] = useState(null);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.company) return; // bot honeypot
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("ok");
    const subject =
      (lang === "pt" ? "Contacto via site — " : "Website contact — ") +
      form.name;
    const body = `${form.message}\n\n— ${form.name}\n${form.email}`;
    window.location.href = `mailto:vitor17reis@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Section id="contacto" title={t("contact.title")} icon={Mail}>
      <Card>
        <form
          className="grid gap-4 md:grid-cols-2"
          onSubmit={handleSubmit}
          noValidate
          aria-live="polite"
        >
          <div className="md:col-span-1">
            <label htmlFor="name" className="block text-sm mb-1">
              {t("contact.name")}
            </label>
            <input
              id="name"
              name="name"
              required
              aria-invalid={status === "error" && !form.name ? true : undefined}
              className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t("contact.placeholderName")}
              value={form.name}
              onChange={onChange}
            />
          </div>
          <div className="md:col-span-1">
            <label htmlFor="email" className="block text-sm mb-1">
              {t("contact.email")}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              aria-invalid={
                status === "error" && !form.email ? true : undefined
              }
              className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t("contact.placeholderEmail")}
              value={form.email}
              onChange={onChange}
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm mb-1">
              {t("contact.message")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              aria-invalid={
                status === "error" && !form.message ? true : undefined
              }
              className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t("contact.placeholderMsg")}
              value={form.message}
              onChange={onChange}
            />
          </div>
          {/* Honeypot */}
          <input
            type="text"
            name="company"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            value={form.company}
            onChange={onChange}
          />
          <div className="md:col-span-2 flex items-center gap-3">
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950"
            >
              {t("contact.send")}
            </button>
            <a
              href={links.email}
              className="inline-flex items-center gap-2 text-sm underline underline-offset-4"
            >
              <Mail className="w-4 h-4" aria-hidden /> {t("contact.orEmail")}
            </a>
            {status === "ok" && (
              <span className="text-sm text-green-600 dark:text-green-400">
                {t("contact.sentOk")}
              </span>
            )}
            {status === "error" && (
              <span className="text-sm text-red-600 dark:text-red-400">
                {t("contact.sentError")}
              </span>
            )}
          </div>
        </form>
      </Card>
      <div className="mt-4 flex items-center gap-4 text-sm">
        <a
          href={links.linkedin}
          target="_blank"
          rel="me noopener noreferrer"
          className="underline underline-offset-4"
        >
          LinkedIn
        </a>
        <a
          href={links.github}
          target="_blank"
          rel="me noopener noreferrer"
          className="underline underline-offset-4"
        >
          GitHub
        </a>
        <a href={links.email} className="underline underline-offset-4">
          Email
        </a>
      </div>
    </Section>
  );
};
