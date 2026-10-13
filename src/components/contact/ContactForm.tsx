"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Copy, Mail, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { zooConfig } from "@/config/zoo";
import { contactEmailBody, createMailtoUrl } from "@/lib/email";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  email: z.string().trim().email("Enter a valid email address").max(120),
  phone: z.string().trim().max(30).refine(v => !v || /^[+\d()\s-]{7,30}$/.test(v), "Enter a valid phone number"),
  subject: z.string().trim().min(2, "Choose a subject").max(80),
  message: z.string().trim().min(12, "Please add a little more detail").max(1500, "Keep your message under 1,500 characters")
});
type Values = z.infer<typeof schema>;

export function ContactForm() {
  const { register, handleSubmit, reset, getValues, formState: { errors, isSubmitting }, clearErrors } = useForm<Values>({ resolver: zodResolver(schema), defaultValues: { name: "", email: "", phone: "", subject: "", message: "" } });
  const [pending, setPending] = useState(false);
  const resetOnHandoff = useRef(false);
  const clear = () => { reset(); clearErrors(); setPending(false); toast.success("Form cleared. Your email draft remains in your email app."); };
  useEffect(() => {
    if (!pending) return;
    const handoff = () => { if (document.visibilityState === "hidden" || !document.hasFocus()) resetOnHandoff.current = true; };
    const returnFocus = () => { if (resetOnHandoff.current) { resetOnHandoff.current = false; clear(); } };
    document.addEventListener("visibilitychange", handoff); window.addEventListener("blur", handoff); window.addEventListener("focus", returnFocus);
    return () => { document.removeEventListener("visibilitychange", handoff); window.removeEventListener("blur", handoff); window.removeEventListener("focus", returnFocus); };
  }, [pending]);
  const build = (v: Values) => ({ text: contactEmailBody(v), subject: `ZOOVANA Website Enquiry — ${v.subject.trim()}` });
  const submit = (v: Values) => {
    const draft = build(v); setPending(true);
    window.location.href = createMailtoUrl({ recipient: zooConfig.contactEmail, subject: draft.subject, body: draft.text });
    toast.info(zooConfig.contactEmail ? "Your email draft is ready. Please send it from your email application." : "Email recipient is not configured. Add a recipient in your email app or copy the message.");
  };
  const copy = async () => { const parsed = schema.safeParse(getValues()); if (!parsed.success) { toast.error("Complete the required fields before copying."); return; } const draft = build(parsed.data); await navigator.clipboard.writeText(`${draft.subject}\n\n${draft.text}`); toast.success("Enquiry copied to your clipboard."); };
  return <form onSubmit={handleSubmit(submit)} noValidate className="rounded-[2rem] bg-white p-6 shadow-[0_24px_70px_rgba(11,36,26,.13)] sm:p-9">
    {!zooConfig.contactEmail && <div role="status" className="mb-6 rounded-xl border border-[#D9AF63]/60 bg-[#D9AF63]/15 p-4 text-sm leading-6"><strong>Demo configuration:</strong> a recipient email has not been added yet. Your email app can still open, but you’ll need to enter a recipient.</div>}
    <div className="grid gap-5 sm:grid-cols-2">
      <Field label="Full name" error={errors.name?.message}><input className={`field ${errors.name ? "field-error" : ""}`} autoComplete="name" {...register("name")} /></Field>
      <Field label="Email address" error={errors.email?.message}><input className={`field ${errors.email ? "field-error" : ""}`} type="email" autoComplete="email" {...register("email")} /></Field>
      <Field label="Phone (optional)" error={errors.phone?.message}><input className={`field ${errors.phone ? "field-error" : ""}`} type="tel" autoComplete="tel" {...register("phone")} /></Field>
      <Field label="Subject" error={errors.subject?.message}><select className={`field ${errors.subject ? "field-error" : ""}`} {...register("subject")}><option value="">Select one</option><option>Plan a visit</option><option>Wildlife education</option><option>Accessibility</option><option>General question</option></select></Field>
    </div>
    <Field label="Message" error={errors.message?.message} className="mt-5"><textarea className={`field min-h-36 resize-y ${errors.message ? "field-error" : ""}`} {...register("message")} /></Field>
    <div className="mt-6 flex flex-col gap-3 sm:flex-row"><button disabled={isSubmitting} className="btn-primary flex-1" type="submit"><Mail className="h-4 w-4" />Open email draft</button><button type="button" onClick={copy} className="btn-secondary flex-1 text-[#153D2D]"><Copy className="h-4 w-4" /><span>Copy message</span></button></div>
    {pending && <div className="mt-5 rounded-xl bg-[#57936A]/12 p-4 text-sm leading-6"><p>Your email draft is ready. Please send it from your email application.</p><button type="button" onClick={clear} className="mt-3 inline-flex items-center gap-2 font-extrabold text-[#153D2D]"><Check className="h-4 w-4" />I’ve opened my email app</button></div>}
    <p className="mt-5 text-xs leading-5 text-[#202A23]/55">Opening a draft does not send your message. Your details are kept unless an app handoff is detected or you confirm it.</p>
  </form>;
}

function Field({ label, error, children, className = "" }: { label: string; error?: string; children: React.ReactNode; className?: string }) {
  return <label className={`block text-sm font-bold ${className}`}>{label}<span className="mt-2 block font-normal">{children}</span>{error && <span role="alert" className="error-text block">{error}</span>}</label>;
}
