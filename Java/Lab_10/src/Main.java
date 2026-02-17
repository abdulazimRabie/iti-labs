import java.util.*;

public class Main {
    public static void main (String []args) {
        List<City> cities = List.of(
                new City(1, "Cairo", 200_000_00, "EGY"),
                new City(2, "Alexandria", 5200000, "EGY"),
                new City(3, "Giza", 8700000, "EGY"),

                new City(4, "Paris", 2140000, "FRA"),
                new City(5, "Marseille", 870000, "FRA"),
                new City(6, "Lyon", 520000, "FRA"),

                new City(7, "Berlin", 360_0000, "DEU"),
                new City(8, "Hamburg", 1800000, "DEU"),
                new City(9, "Munich", 1500000, "DEU"),

                new City(10, "Tokyo", 139_000_00, "JPN"),
                new City(11, "Osaka", 2700000, "JPN"),
                new City(12, "Nagoya", 2300000, "JPN")
        );


        List<Country> countries = List.of(
                new Country(
                        "EGY",
                        "Egypt",
                        "Africa",
                        1002450,
                        110000000,
                        404.0,
                        1,   // Cairo
                        cities.stream()
                                .filter(c -> c.getCountryCode().equals("EGY"))
                                .toList()
                ),

                new Country(
                        "FRA",
                        "France",
                        "Europe",
                        551695,
                        67000000,
                        2937.0,
                        4,   // Paris
                        cities.stream()
                                .filter(c -> c.getCountryCode().equals("FRA"))
                                .toList()
                ),

                new Country(
                        "DEU",
                        "Germany",
                        "Europe",
                        357588,
                        83000000,
                        3846.0,
                        7,   // Berlin
                        cities.stream()
                                .filter(c -> c.getCountryCode().equals("DEU"))
                                .toList()
                ),

                new Country(
                        "JPN",
                        "Japan",
                        "Asia",
                        377975,
                        125000000,
                        4937.0,
                        10,  // Tokyo
                        cities.stream()
                                .filter(c -> c.getCountryCode().equals("JPN"))
                                .toList()
                )
        );

        CountryRepo repo = new CountryRepo();
        repo.highestPopulatedCapital(countries);
        System.out.println();
        repo.highestPopulatedCityInCountry(countries);
        System.out.println();
        repo.mostPopulatedCityInContinent(countries);

    }
}