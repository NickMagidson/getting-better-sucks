import { Lora } from 'next/font/google';
import "./globals.css";
import "./webflow.css";

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata = {
  title: "Serenya - Wellness & Inner Peace Coaching",
  description: "Personalized wellness coaching to help you find balance, clarity, and vitality in everyday life. Embrace your journey to inner peace.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lora.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
