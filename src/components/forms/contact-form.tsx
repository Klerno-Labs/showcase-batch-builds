"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(10, "Phone number is required."),
  caseType: z.string().min(1, "Please select a case type."),
  message: z.string().min(10, "Message must be at least 10 characters."),
  _gotcha: z.string(), // Honeypot
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { _gotcha: "" },
  });

  const onSubmit = async (data: FormData) => {
    if (data._gotcha) return; // Bot detected

    setIsSuccess(false);
    setIsError(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      setIsError(true);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-heading font-bold text-primary mb-2">Message Sent!</h3>
        <p className="text-gray-600">Thank you for contacting Summit Legal Advisors. We will be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 md:p-12 shadow-xl rounded-xl">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-bold uppercase tracking-wide text-primary">Full Name</label>
        <input
          id="name"
          {...register("name")}
          className={cn(
            "w-full bg-gray-50 border border-gray-200 p-4 rounded-md focus:outline-none focus:border-accent focus:bg-white transition-colors",
            errors.name && "border-red-500"
          )}
          placeholder="John Doe"
        />
        {errors.name && <p className="text-red-500 text-sm flex items-center gap-1"><AlertCircle className="w-3 h-3"/>{errors.name.message}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wide text-primary">Email Address</label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={cn(
              "w-full bg-gray-50 border border-gray-200 p-4 rounded-md focus:outline-none focus:border-accent focus:bg-white transition-colors",
              errors.email && "border-red-500"
            )}
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-bold uppercase tracking-wide text-primary">Phone Number</label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className={cn(
              "w-full bg-gray-50 border border-gray-200 p-4 rounded-md focus:outline-none focus:border-accent focus:bg-white transition-colors",
              errors.phone && "border-red-500"
            )}
            placeholder="(512) 555-0123"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="caseType" className="block text-sm font-bold uppercase tracking-wide text-primary">Case Type</label>
        <select
          id="caseType"
          {...register("caseType")}
          className={cn(
            "w-full bg-gray-50 border border-gray-200 p-4 rounded-md focus:outline-none focus:border-accent focus:bg-white transition-colors appearance-none",
            errors.caseType && "border-red-500"
          )}
        >
          <option value="">Select a practice area...</option>
          <option value="corporate">Corporate & Business Law</option>
          <option value="realestate">Real Estate Litigation</option>
          <option value="family">Family Law</option>
          <option value="probate">Probate & Estates</option>
          <option value="other">Other</option>
        </select>
        {errors.caseType && <p className="text-red-500 text-sm">{errors.caseType.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-bold uppercase tracking-wide text-primary">How can we help?</label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className={cn(
            "w-full bg-gray-50 border border-gray-200 p-4 rounded-md focus:outline-none focus:border-accent focus:bg-white transition-colors resize-none",
            errors.message && "border-red-500"
          )}
          placeholder="Tell us about your situation..."
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      </div>

      {/* Honeypot */}
      <input type="text" {...register("_gotcha")} className="hidden" tabIndex={-1} autoComplete="off" />

      {isError && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      <Button type="submit" size="lg" variant="primary" className="w-full text-lg" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}