export type EmailDraft = { recipient: string; subject: string; body: string };

export const createMailtoUrl = ({ recipient, subject, body }: EmailDraft) =>
  `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export function contactEmailBody(values: { name: string; email: string; phone?: string; subject: string; message: string }) {
  return [
    `Full Name: ${values.name.trim()}`, `Email: ${values.email.trim()}`, `Phone: ${values.phone?.trim() || "Not provided"}`,
    `Subject: ${values.subject.trim()}`, "", "Message:", values.message.trim(), "", "Source: ZOOVANA Website"
  ].join("\n");
}
