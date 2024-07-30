export default async function connectDB(client, uri) {
  try {
    console.log("Connecting to MongoDB...");
    console.log("URI: ", uri);
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw error;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

