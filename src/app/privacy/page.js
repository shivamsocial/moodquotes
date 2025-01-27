import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="m-5 leading-relaxed">
        <div className="max-w-4xl mx-auto p-5 bg-red-100 rounded-lg">
          <h1 className="text-center text-3xl text-red-800">
            Privacy Policy for Mood2Quotes
          </h1>
          <p className="text-center italic text-gray-600">
            <strong>Last Updated: January 27, 2024</strong>
          </p>

          <section className="mb-8">
            <h2 className="text-red-500 text-2xl mb-2">Introduction</h2>
            <p className="text-lg text-gray-800">
              At <strong>Mood2Quotes</strong> (accessible from{" "}
              <a
                href="https://www.mood2quotes.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500"
              >
                https://www.mood2quotes.com
              </a>
              ), we respect your privacy and are committed to protecting your
              personal information. This Privacy Policy outlines how we collect,
              use, and protect your data when you visit and interact with our
              website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-red-500 text-2xl mb-2">
              Data Collection and Use
            </h2>
            <ul className="list-disc ml-5 text-lg text-gray-800">
              <li className="mb-3">
                <strong>No Personal Data Collected</strong>: Mood2Quotes does
                not collect any personally identifiable information (PII) from
                users. We do not require any form of registration or login to
                access the content on our website.
              </li>
              <li className="mb-3">
                <strong>No Cookies or Third-Party Apps</strong>: We do not use
                cookies for tracking or advertising purposes. Our website does
                not utilize any third-party applications for analytics or
                advertising. You can browse our website without being tracked by
                external services.
              </li>
              <li className="mb-3">
                <strong>Leaderboard Data</strong>: We use MongoDB to store
                leaderboard data, including scores and other relevant
                statistics. This data is used solely for the purpose of
                displaying the leaderboard on the website. We do not link this
                data to any personally identifiable information.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-red-500 text-2xl mb-2">Data Retention</h2>
            <p className="text-lg text-gray-800">
              We retain leaderboard data (such as scores and statistics) for as
              long as it is necessary to provide our services and improve the
              user experience. We may delete this data at our discretion if it
              is no longer needed or upon the request of a user, although we do
              not store any personal data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-red-500 text-2xl mb-2">Data Security</h2>
            <p className="text-lg text-gray-800">
              We prioritize the security of your data. While no website can
              guarantee complete security, we use reasonable administrative,
              physical, and technical safeguards to protect the information
              stored in our database. Our database and infrastructure are
              designed to ensure the highest level of security for the stored
              data. However, please be aware that no method of data transmission
              over the internet or method of electronic storage is completely
              secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-red-500 text-2xl mb-2">
              International Data Transfers
            </h2>
            <p className="text-lg text-gray-800">
              As we use services like MongoDB, your leaderboard data may be
              stored and processed in countries outside your own. We ensure that
              such transfers comply with applicable data protection laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-red-500 text-2xl mb-2">
              Legal Basis for Data Processing
            </h2>
            <p className="text-lg text-gray-800">
              We process leaderboard data based on our legitimate interest in
              providing an optimized user experience on the website and
              improving our content offerings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-red-500 text-2xl mb-2">
              Children&apos;s Privacy
            </h2>
            <p className="text-lg text-gray-800">
              Mood2Quotes does not knowingly collect or solicit personal data
              from children under 13 years of age. If we learn that we have
              collected personal data from a child under 13, we will delete that
              information as soon as possible.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-red-500 text-2xl mb-2">
              External Links Disclaimer
            </h2>
            <p className="text-lg text-gray-800">
              Our website may contain links to third-party websites or services
              that are not operated by us. We are not responsible for the
              privacy practices of those third-party websites and encourage you
              to review their privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-red-500 text-2xl mb-2">User Consent</h2>
            <p className="text-lg text-gray-800">
              By accessing and using Mood2Quotes, you consent to the practices
              outlined in this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-red-500 text-2xl mb-2">
              Changes to This Privacy Policy
            </h2>
            <p className="text-lg text-gray-800">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page, with an updated &quot;Last
              Updated&quot; date. We encourage you to review this policy
              periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-red-500 text-2xl mb-2">Contact Us</h2>
            <p className="text-lg text-gray-800">
              If you have any questions or concerns about this Privacy Policy,
              you can reach us at:
            </p>
            <p className="text-lg text-gray-800">
              <strong>Email</strong>:{" "}
              <a
                href="mailto:shivamupadhyaysocial@gmail.com"
                className="text-red-500"
              >
                shivamupadhyaysocial@gmail.com
              </a>
              <br />
              <strong>Contact Page</strong>:{" "}
              <a
                href="https://www.mood2quotes.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500"
              >
                https://www.mood2quotes.com/contact
              </a>
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
