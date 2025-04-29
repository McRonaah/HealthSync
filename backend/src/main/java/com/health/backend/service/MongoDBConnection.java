

package main.java.com.health.backend.service;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoDatabase;

public class MongoDBConnection {

    private MongoClient mongoClient;
    private MongoDatabase database;

    public MongoDBConnection(String uri, String dbName) {
        // Create a MongoClientURI with your MongoDB connection URI string.
        MongoClientURI mongoClientURI = new MongoClientURI(uri);

        // Create a MongoClient instance with the MongoClientURI.
        this.mongoClient = new MongoClient(mongoClientURI);

        // Get the database from the client.
        this.database = mongoClient.getDatabase(dbName);
    }

    // Method to get the database instance.
    public MongoDatabase getDatabase() {
        return this.database;
    }

    // Close the connection when done.
    public void close() {
        if (this.mongoClient != null) {
            this.mongoClient.close();
        }
    }

    public static void main(String[] args) {
        // Example usage with MongoDB connection URI and database name.
        String uri = "mongodb://username:password@localhost:27017";
        String dbName = "myDatabase";

        MongoDBConnection connection = new MongoDBConnection(uri, dbName);

        // Get the database and perform operations.
        MongoDatabase database = connection.getDatabase();
        System.out.println("Connected to the database: " + database.getName());

        // Don't forget to close the connection when you're done.
        connection.close();
    }
}
