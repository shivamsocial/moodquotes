import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const dbName = "leaderboardDB"; // Your database name
const collectionName = "leaderboard"; // Your collection name

// Connect to MongoDB
async function connectDb() {
  // Directly connect to MongoDB, no need for isConnected check
  await client.connect(); // Ensure connection
  const db = client.db(dbName);
  return db.collection(collectionName);
}

export async function GET() {
  try {
    const collection = await connectDb();
    const leaderboard = await collection.find().sort({ score: -1 }).toArray();
    return new Response(JSON.stringify(leaderboard), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    return new Response(
      JSON.stringify({ message: "Error fetching leaderboard" }),
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { name, score } = await request.json();

    if (!name || !score) {
      return new Response(JSON.stringify({ message: "Invalid data" }), {
        status: 400,
      });
    }

    const collection = await connectDb();
    await collection.insertOne({ name, score });

    return new Response(JSON.stringify({ message: "Leaderboard updated" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error updating leaderboard:", error);
    return new Response(
      JSON.stringify({ message: "Error updating leaderboard" }),
      { status: 500 }
    );
  }
}
