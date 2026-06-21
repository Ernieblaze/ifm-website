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
  location?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// TODO(supabase): persist registrations to a `members` table (Supabase Auth +
// RLS) instead of this client-only simulation. See PLAN.md §7/§14.
export function RegisterForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function validate(data: FormData): FormErrors {
    const next: FormErrors = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const location = String(data.get("location") ?? "").trim();

    if (!name) next.name = "Please enter your full name.";
    if (!email) next.email = "Please enter your email.";
    else if (!EMAIL_PATTERN.test(email)) next.email = "Enter a valid email address.";
    if (!location) next.location = "Let us know where you're based.";

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
      setSubmitted(true);
      form.reset();
      toast.success("Welcome to the movement.", {
        description: "We've received your registration.",
      });
    }, 700);
  }

  if (submitted) {
    return (
      <div className="mt-10 rounded-2xl border border-border bg-surface p-8 text-center sm:p-10">
        <h2 className="font-heading text-xl font-semibold text-foreground">
          You&apos;re in.
        </h2>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          Thank you for registering with IFM. A member of the movement will
          be in touch with next steps for your local chapter.
        </p>
      </div>
    );
  }

  return (
    <form
      className="mt-10 space-y-6 rounded-2xl border border-border bg-surface p-6 sm:p-8"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="space-y-1.5">
        <Label htmlFor="name">Full name</Label>
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
        <Label htmlFor="location">Where are you based?</Label>
        <Input
          id="location"
          name="location"
          type="text"
          autoComplete="address-level2"
          placeholder="City, state or country"
          invalid={Boolean(errors.location)}
          aria-describedby={errors.location ? "location-error" : undefined}
        />
        {errors.location && (
          <p id="location-error" className="text-sm text-brand-red">
            {errors.location}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="note">
          What draws you to the movement? <span className="text-muted-foreground">(optional)</span>
        </Label>
        <Textarea id="note" name="note" rows={4} />
      </div>

      <Button type="submit" size="lg" loading={submitting} className="w-full">
        {submitting ? "Submitting" : "Register"}
      </Button>
    </form>
  );
}
