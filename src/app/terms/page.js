import React from "react";
import Link from "next/link";

const TermsAndConditions = () => {
  return (
    <>
      <div className="mx-auto p-5 max-w-3xl bg-gray-100 text-gray-800">
        <h1 className="text-center text-3xl text-red-600 font-semibold mb-6">
          Terms and Conditions for Bible Quotes Quiz
        </h1>
        <p className="text-lg mb-4">
          <strong>Last Updated: February 8, 2025</strong>
        </p>

        <section className="mb-6">
          <h2 className="text-xl text-red-600 mt-4 mb-2">1. Introduction</h2>
          <p className="text-base leading-7 mb-4">
            These Terms and Conditions govern your use of the Bible Quotes Quiz
            website (accessible from&nbsp;
            <Link
              href="https://www.mood2quotes.com/"
              className="text-blue-600 hover:underline"
            >
              https://www.mood2quotes.com
            </Link>
            ). By accessing and using this website, you agree to comply with
            these Terms. If you do not agree to these Terms, please refrain from
            using the website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl text-red-600 mt-4 mb-2">
            2. Purpose of the Website
          </h2>
          <p className="text-base leading-7 mb-4">
            Bible Quotes Quiz is designed to help users engage with and learn
            from biblical scriptures through interactive quizzes. The quizzes
            contain Bible verses sourced from public domain translations or
            referenced according to fair use guidelines.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl text-red-600 mt-4 mb-2">
            3. Content Ownership
          </h2>
          <p className="text-base leading-7 mb-4">
            All Bible verses featured in the quizzes are either in the public
            domain or used under applicable fair use principles. Users
            acknowledge that scripture texts belong to their respective
            publishers when sourced from copyrighted versions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl text-red-600 mt-4 mb-2">4. User Data</h2>
          <p className="text-base leading-7 mb-4">
            We respect your privacy and do not collect personally identifiable
            information (PII). The only data stored is quiz metadata to improve
            user experience. For details, please review our&nbsp;
            <Link href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl text-red-600 mt-4 mb-2">
            5. Third-Party Services
          </h2>
          <p className="text-base leading-7 mb-4">
            Our website integrates with third-party services. These third-party
            services have their own privacy policies and terms, and we encourage
            you to review them before using the website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl text-red-600 mt-4 mb-2">
            6. Prohibited Activities
          </h2>
          <p className="text-base leading-7 mb-4">Users must not:</p>
          <ul className="ml-5 list-disc text-base mb-4">
            <li>Misrepresent scripture or quiz content.</li>
            <li>Engage in harmful or offensive behavior on the platform.</li>
            <li>
              Attempt to exploit the website’s functionalities for unauthorized
              purposes.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl text-red-600 mt-4 mb-2">7. Disclaimer</h2>
          <p className="text-base leading-7 mb-4">
            The Bible Quotes Quiz is provided &quot;as is.&quot; We strive for
            accuracy but do not guarantee the correctness of biblical
            references. Users are encouraged to verify scriptures with their
            preferred Bible translations (2 Timothy 3:16).
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl text-red-600 mt-4 mb-2">
            8. Limitation of Liability
          </h2>
          <p className="text-base leading-7 mb-4">
            To the maximum extent permitted by law, we shall not be liable for
            for any indirect, incidental, special, or consequential damages
            arising out of or in connection with the use of the website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl text-red-600 mt-4 mb-2">9. Modifications</h2>
          <p className="text-base leading-7 mb-4">
            We reserve the right to modify, suspend, or discontinue the website
            and its services at any time without notice. We may also update
            these Terms and Conditions from time to time. Any changes will be
            posted on this page with an updated &quot;Last Updated&quot; date.
            We encourage you to review these Terms periodically.{" "}
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl text-red-600 mt-4 mb-2">10. Governing Law</h2>
          <p className="text-base leading-7 mb-4">
            These Terms and Conditions are governed by the laws of the country
            or state in which Bible Quotes Quiz operates. By using the website,
            you consent to the exclusive jurisdiction of the courts in that
            jurisdiction in any dispute arising out of or relating to the use of
            the website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl text-red-600 mt-4 mb-2">11. Contact Us</h2>
          <p className="text-base leading-7 mb-4">
            If you have any questions or concerns about these Terms and
            Conditions, you can contact us at:
          </p>
          <ul className="list-none pl-0">
            <li className="mb-4">
              <strong>Email:</strong>
              <Link
                href="mailto:shivamupadhyaysocial@gmail.com"
                className="text-blue-600 hover:underline"
              >
                shivamupadhyaysocial@gmail.com
              </Link>
            </li>
            <li className="mb-4">
              <strong>Contact Page:</strong>
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
