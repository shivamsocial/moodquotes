import React from "react";
import Link from "next/link";

const TermsAndConditions = () => {
  return (
    <>
      <div className="mx-auto p-5 max-w-3xl bg-gray-100 text-gray-800">
        <h1 className="text-center text-3xl text-green-600 font-semibold mb-6">
          Terms and Conditions for Mood Songs
        </h1>
        <p className="text-lg mb-4">
          <strong>Last Updated: December 12, 2024</strong>
        </p>

        <section className="mb-6">
          <h2 className="text-xl text-green-600 mt-4 mb-2">1. Introduction</h2>
          <p className="text-base leading-7 mb-4">
            These Terms and Conditions govern your use of the Mood Songs website
            (accessible from{" "}
            <Link
              href="https://www.mood2quotes.com"
              className="text-blue-600 hover:underline"
            >
              https://www.mood2quotes.com
            </Link>
            ). By accessing and using this website, you agree to comply with
            these Terms. If you do not agree to these Terms, you must refrain
            from using the website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl text-green-600 mt-4 mb-2">
            2. Use of the Website
          </h2>
          <p className="text-base leading-7 mb-4">
            Mood Songs offers free mood and genre-based video song
            recommendations from YouTube through the use of the YouTube Data
            API. You are allowed to browse the content and use the website for
            personal, non-commercial purposes. Any other use, including but not
            limited to, modifying, copying, or distributing the content, is
            prohibited without our express written consent.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl text-green-600 mt-4 mb-2">
            3. Content Ownership
          </h2>
          <p className="text-base leading-7 mb-4">
            All video content displayed on Mood Songs is provided by YouTube via
            the YouTube Data API. Mood Songs does not own or control the
            videos/content displayed on our website. By using the website, you
            acknowledge that all content is owned by the respective copyright
            holders, and you agree to comply with YouTube&apos;s Terms of
            Service.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl text-green-600 mt-4 mb-2">4. User Data</h2>
          <p className="text-base leading-7 mb-4">
            We respect your privacy and are committed to protecting your data.
            We do not collect or store any personally identifiable information
            (PII). The only data stored is video metadata (such as video titles
            and URLs) fetched from the YouTube Data API, which is used solely to
            provide relevant video content to users. For more information on how
            we handle user data, please refer to our{" "}
            <Link href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl text-green-600 mt-4 mb-2">
            5. Third-Party Services
          </h2>
          <p className="text-base leading-7 mb-4">
            Our website integrates with third-party services such as YouTube and
            MongoDB. We use the YouTube Data API to fetch video content, and we
            store video-related metadata using MongoDB. These third-party
            services have their own privacy policies and terms, and we encourage
            you to review them before using the website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl text-green-600 mt-4 mb-2">6. Restrictions</h2>
          <p className="text-base leading-7 mb-4">
            You are prohibited from using the website in any manner that:
          </p>
          <ul className="ml-5 list-disc text-base mb-4">
            <li>Violates applicable laws or regulations.</li>
            <li>Infringes the intellectual property rights of others.</li>
            <li>
              Attempts to interfere with the functioning of the website or its
              services.
            </li>
            <li>
              Engages in harmful activities such as distributing malware or
              attempting to access unauthorized areas of the website.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl text-green-600 mt-4 mb-2">
            7. Disclaimer of Warranties
          </h2>
          <p className="text-base leading-7 mb-4">
            Mood Songs provides the website and its services &quot;as is&quot;
            and without warranties of any kind, either express or implied. We do
            not guarantee the accuracy, reliability, or completeness of the
            video content or metadata displayed on the website. We are not
            responsible for any errors, interruptions, or delays in the
            website&apos;s operation.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl text-green-600 mt-4 mb-2">
            8. Limitation of Liability
          </h2>
          <p className="text-base leading-7 mb-4">
            To the maximum extent permitted by applicable law, Mood Songs shall
            not be liable for any indirect, incidental, special, or
            consequential damages arising out of or in connection with the use
            of the website or the inability to use the website, including but
            not limited to, loss of data, loss of business opportunities, or
            damage to your device or equipment.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl text-green-600 mt-4 mb-2">9. Modifications</h2>
          <p className="text-base leading-7 mb-4">
            We reserve the right to modify, suspend, or discontinue the website
            and its services at any time without notice. We may also update
            these Terms and Conditions from time to time. Any changes will be
            posted on this page with an updated &quot;Last Updated&quot; date.
            We encourage you to review these Terms periodically.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl text-green-600 mt-4 mb-2">
            10. Governing Law
          </h2>
          <p className="text-base leading-7 mb-4">
            These Terms and Conditions are governed by the laws of the country
            or state in which Mood Songs operates. By using the website, you
            consent to the exclusive jurisdiction of the courts in that
            jurisdiction in any dispute arising out of or relating to the use of
            the website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl text-green-600 mt-4 mb-2">11. Contact Us</h2>
          <p className="text-base leading-7 mb-4">
            If you have any questions or concerns about these Terms and
            Conditions, you can contact us at:
          </p>
          <ul className="list-none pl-0">
            <li className="mb-4">
              <strong>Email:</strong>{" "}
              <Link
                href="mailto:shivamupadhyaysocial@gmail.com"
                className="text-blue-600 hover:underline"
              >
                shivamupadhyaysocial@gmail.com
              </Link>
            </li>
            <li className="mb-4">
              <strong>Contact Page:</strong>{" "}
              <Link href="/contact" className="text-blue-600 hover:underline">
                https://www.mood2quotes.com/contact
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default TermsAndConditions;
