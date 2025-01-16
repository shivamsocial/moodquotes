// app/terms/page.js
export const metadata = {
  title: "Terms & Conditions - Quotes Game",
  description: "Understand the rules and terms for using Quotes Game.",
};

export default function TermsConditions() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Terms & Conditions</h1>
      <p>
        Welcome to Quotes Game! By accessing our game, you agree to comply with
        these terms and conditions.
      </p>
      <h2 className="text-2xl font-bold">Usage Rules</h2>
      <p>
        You must not attempt to hack, misuse, or disrupt the functionality of
        the game.
      </p>
      <h2 className="text-2xl font-bold">Disclaimers</h2>
      <p>
        We provide this game as-is and do not guarantee uninterrupted
        availability.
      </p>
    </div>
  );
}
