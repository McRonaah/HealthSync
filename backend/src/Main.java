

import service.MongoDBConnection;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoDatabase;

public class Main {

    public static void main(String[] args) {
        String uri = "mongodb://username:password@localhost:27017";
        String dbName = "myDatabase";

        MongoDBConnection connection = new MongoDBConnection(uri, dbName);
        MongoDatabase database = connection.getDatabase();

        // Perform your database operations here

        System.out.println("Connected to database: " + database.getName());
        
        // Close the connection when done
        connection.close();
    }
}
