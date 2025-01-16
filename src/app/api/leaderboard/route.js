// file: /app/api/leaderboard/route.js or /pages/api/leaderboard.js (depending on your folder structure)
import fs from "fs";
import path from "path";

const leaderboardFilePath = path.join(
  process.cwd(),
  "public",
  "leaderboard.json"
);

async function readLeaderboard() {
  const data = fs.readFileSync(leaderboardFilePath, "utf-8");
  return JSON.parse(data);
}

async function writeLeaderboard(leaderboard) {
  fs.writeFileSync(
    leaderboardFilePath,
    JSON.stringify(leaderboard, null, 2),
    "utf-8"
  );
}

export async function GET() {
  const leaderboard = await readLeaderboard();
  return new Response(JSON.stringify(leaderboard), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request) {
  const { name, score } = await request.json();

  if (!name || !score) {
    return new Response(JSON.stringify({ message: "Invalid data" }), {
      status: 400,
    });
  }

  const leaderboard = await readLeaderboard();

  // Add the new player to the leaderboard
  leaderboard.push({ name, score });

  // Sort leaderboard by score in descending order
  leaderboard.sort((a, b) => b.score - a.score);

  // Save the updated leaderboard
  await writeLeaderboard(leaderboard);

  return new Response(JSON.stringify({ message: "Leaderboard updated" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
