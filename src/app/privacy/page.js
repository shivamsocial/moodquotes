// app/privacy/page.js
export const metadata = {
  title: "Privacy Policy - Quotes Game",
  description:
    "Learn about our privacy practices and how we protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p>
        At Quotes Game, your privacy is important to us. This page outlines how
        we handle and protect your personal information.
      </p>
      <h2 className="text-2xl font-bold">Data Collection</h2>
      <p>
        We do not collect personal data. Any data shared with us is used solely
        for improving the game experience.
      </p>
      <h2 className="text-2xl font-bold">Cookies</h2>
      <p>
        We use cookies to enhance user experience but do not track or sell your
        data.
      </p>
    </div>
  );
}
