"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  function validate(data: FormData): FormErrors {
    const next: FormErrors = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name) next.name = "Please enter your name.";
    if (!email) next.email = "Please enter your email.";
    else if (!EMAIL_PATTERN.test(email)) next.email = "Enter a valid email address.";
    if (!message) next.message = "Please add a short message.";

    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const validationErrors = validate(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Message sent.", {
        description: "Thanks for reaching out. We'll respond soon.",
      });
    }, 700);
  }

  return (
    <form
      className="mt-10 space-y-6 rounded-2xl border border-border bg-surface p-6 sm:p-8"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="space-y-1.5">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-sm text-brand-red">
            {errors.name}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-brand-red">
            {errors.email}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-brand-red">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" variant="destructive" loading={submitting}>
        {submitting ? "Sending" : "Send Message"}
      </Button>
    </form>
  );
}
