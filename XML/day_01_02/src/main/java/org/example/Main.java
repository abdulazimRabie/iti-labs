package org.example;

import jakarta.json.*;
import jakarta.json.bind.Jsonb;
import jakarta.json.bind.JsonbBuilder;

import java.io.*;

public class Main {
    public static void main() throws IOException {
        // 1- Read lib.json file and access its data
        InputStream libJsonFile = new FileInputStream("src/main/resources/lib.json");

        JsonReader reader = Json.createReader(libJsonFile);
        JsonObject libraryObj = reader.readObject();

        System.out.println("1- Library Description : " + libraryObj.getString("description"));
        System.out.println();
        reader.close();

        // 2- Create JSON object and write it in system out
        JsonArray booksOfLib = Json.createArrayBuilder()
                .add(Json.createObjectBuilder().add("title", "book 1 title"))
                .add(Json.createObjectBuilder().add("title", "book 2 title"))
                .build();

        JsonObject newLib = Json.createObjectBuilder()
                .add("description", "new library, found everywhere")
                .add("librarian", "Abdu el shaki")
                .add("books", booksOfLib)
                .build();

        System.out.println("2- Json Object of new library : ");
        JsonWriter writer = Json.createWriter(System.out);
        writer.writeObject(newLib);
        System.out.println();

        // 2.1 produce newLib.json file
        OutputStream newLibJson = new FileOutputStream("newLib.json");
        JsonWriter writer2 = Json.createWriter(newLibJson);
        writer2.writeObject(newLib);
        writer2.close();
        newLibJson.close();



        // 3 - From Java class to JSON object and vice versa
        Player p = new Player();
        p.name = "a.azim";
        p.id = 11;
        p.age = 22;

        System.out.println(p);

        Jsonb jb = JsonbBuilder.create();
        String javaToObj = jb.toJson(p);


        System.out.println("Java player class to JSON Object \n" + javaToObj + "\n");


        // 4 - From Json to Java object
        String json = """
            {
              "id": 2,
              "name": "yehia",
              "age": 23
            }
        """;

        Player p_2 = jb.fromJson(json, Player.class);
        System.out.println(p_2);

    }
}
