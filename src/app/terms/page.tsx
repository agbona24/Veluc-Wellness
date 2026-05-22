import type { Metadata } from "next";
import Link from "next/link";
import s from "../legal.module.css";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for purchasing and using Veluc Wellness digital guides.",
};

export default function Terms() {
  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <Link href="/" className={s.blogName}>Veluc Wellness Blog</Link>
      </header>

      <div className={s.body}>
        <h1 className={s.title}>Terms of Service</h1>
        <span className={s.updated}>Last updated: 22 May 2026</span>

        <p>
          By accessing veluc.online or purchasing any product from Veluc Wellness
          Blog, you agree to be bound by these Terms of Service. Please read them
          carefully before making a purchase.
        </p>

        <h2>1. Digital Product Nature</h2>
        <p>
          All products sold by Veluc Wellness Blog are digital downloads (PDF
          guides). No physical item will be shipped. After successful payment you
          will receive access to download your guides immediately via the download
          page or by email. Ensure your email address is correct at checkout.
        </p>

        <h2>2. Licence</h2>
        <p>
          Upon purchase you are granted a personal, non-transferable licence to
          use the guide for your own individual health and wellness purposes. You
          may not:
        </p>
        <ul>
          <li>Resell, redistribute, or share the guide with others</li>
          <li>Upload it to any public platform or file-sharing site</li>
          <li>Use it to create derivative products for commercial sale</li>
          <li>Claim authorship or remove any branding from the materials</li>
        </ul>

        <h2>3. Health Disclaimer</h2>
        <p>
          The information in our guides is for educational and informational
          purposes only. It does not constitute medical advice and is not a
          substitute for professional healthcare. Always consult a qualified
          healthcare provider before starting any diet, nutrition, or wellness
          programme — especially if you are pregnant, breastfeeding, or have a
          pre-existing medical condition.
        </p>

        <h2>4. Results Disclaimer</h2>
        <p>
          Testimonials and results mentioned on this site are individual
          experiences. Results vary depending on effort, body type, starting
          weight, adherence to the programme, and other factors. We make no
          guarantee that you will achieve the same results.
        </p>

        <h2>5. Refund Policy</h2>
        <p>
          We offer a 30-day money-back guarantee. Full details are available on
          our <Link href="/refund-policy">Refund Policy</Link> page.
        </p>

        <h2>6. Intellectual Property</h2>
        <p>
          All content on veluc.online — including text, images, graphics, and
          guide materials — is the intellectual property of Veluc Wellness Blog
          and is protected by copyright law. Unauthorised use is prohibited.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Veluc Wellness Blog shall not
          be liable for any indirect, incidental, or consequential damages arising
          from your use of our products or website. Our total liability shall not
          exceed the amount you paid for the product.
        </p>

        <h2>8. Governing Law</h2>
        <p>
          These terms are governed by the laws of the Federal Republic of Nigeria.
          Any disputes shall be subject to the jurisdiction of Nigerian courts.
        </p>

        <h2>9. Changes to These Terms</h2>
        <p>
          We reserve the right to update these terms at any time. Continued use
          of the site after changes are posted constitutes your acceptance of the
          revised terms.
        </p>

        <h2>10. Contact</h2>
        <p>
          Questions about these terms? Email us at{" "}
          <a href="mailto:hello@veluc.online">hello@veluc.online</a>.
        </p>
      </div>

      <footer className={s.footer}>
        <p>© 2026 Veluc Wellness Blog. All Rights Reserved.</p>
        <div className={s.footerLinks}>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/refund-policy">Refund Policy</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </footer>
    </div>
  );
}
