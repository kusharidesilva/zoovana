import { describe, expect, it } from "vitest";
import { contactEmailBody, createMailtoUrl } from "./email";

describe("email helpers", () => {
  it("encodes special characters safely", () => {
    const url = createMailtoUrl({ recipient: "hello@example.com", subject: "Family & school", body: "Hi, 2+2 = 4" });
    expect(url).toContain("Family%20%26%20school");
    expect(url).toContain("2%2B2%20%3D%204");
  });
  it("creates a readable contact summary", () => {
    expect(contactEmailBody({ name: " Maya ", email: "m@example.com", subject: "Visit", message: "Hello there" })).toContain("Full Name: Maya");
  });
});
