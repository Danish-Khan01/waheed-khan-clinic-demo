# PrivatePractice — Dr. Waheed Khan

Independent interactive demo for an oncology clinic in Jamshedpur. This is a separate project; `doctor-portal` is untouched.

## Sharing

This repository is a standalone GitHub Pages demo. Share the published website URL with your client. Anyone with the URL can view the website, without GitHub login. Each visitor has their own browser-local demo data; records are not shared between visitors. The repository itself is public.

## Preview

Run `python3 -m http.server 4173` from this directory, then open http://localhost:4173.

## Demo features

- Doctor dashboard with queue filters, search, consultation states and visit completion.
- Booking with clinic hours, configurable slot duration, lunch breaks, blocked dates and double-booking prevention.
- Patient records and chronological visit history.
- Manual prescription writer and clinic letterhead draft, printable using browser Save as PDF.
- Patient portal with explicitly simulated OTP (`123456`) for fictional patient `9000000001`.
- Report metadata selection; file contents are not uploaded or retained.
- Local camera preview; no remote video participant or transmission.
- Clinic settings, JSON export and local activity log.
- Scripted clinic assistant for FAQs, booking and doctor navigation. No external AI service or medical inference.
- Responsive, keyboard-accessible modal dialogs.

All demo data is browser-local in localStorage. Roles are view switches, not authorization boundaries. Do not enter actual patient data. Patient names and phone numbers are fictional; consultation fees and hours are illustrative. The illustrated portrait is not an actual photograph of Dr. Khan. No qualifications, registration number or address have been invented.

## Production stack proposal

Next.js, React, TypeScript and Tailwind CSS; PostgreSQL with tested row-level access policies; clinic-controlled encrypted object storage with signed URLs; a server-side OTP provider; verified Razorpay webhooks; self-hosted Jitsi; manual prescription generation and doctor-verified signing; server-enforced clinic/patient roles and append-only external audit storage. A self-hosted language model can support clinic FAQs and navigation after a separate privacy and access review. Medical recommendations are outside the assistant's scope.

GitHub Pages hosts this publicly accessible static prototype. Production sovereignty requires infrastructure and vendor accounts controlled by the clinic, portable backups, documented retention and tested access policies. No compliance or clinical-readiness claim is made by this demo.
