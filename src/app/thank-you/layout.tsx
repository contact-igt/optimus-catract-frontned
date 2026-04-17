import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You for Booking | Optimus Eye Hospital",
  description:
    "Your consultation request has been received. Our patient care team at Optimus Eye Hospital, Lucknow will contact you shortly to confirm your appointment.",
  openGraph: {
    title: "Thank You for Booking | Optimus Eye Hospital",
    description:
      "Your consultation request has been received. Our patient care team at Optimus Eye Hospital, Lucknow will contact you shortly.",
    url: "https://www.optimuseyehospital.com/thank-you",
    siteName: "Optimus Eye Hospital",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
