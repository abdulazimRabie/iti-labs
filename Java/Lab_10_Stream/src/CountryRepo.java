import java.util.*;
import java.util.stream.*;

public class CountryRepo {
    public void highestPopulatedCityInCountry(List<Country> countries) {
        countries.forEach(country -> {
            country.getCities()
                    .stream()
                    .max(Comparator.comparing(City::getPopulation))
                    .ifPresent(city ->
                            System.out.println(country.getName() + " -> " + city));
        });
    }


    public void mostPopulatedCityInContinent(List<Country> countries) {
        Map<String, Optional<City>> mostPopulatedByContinent =
                countries.stream()
                        .collect(Collectors.groupingBy(
                                Country::getContinent,
                                Collectors.flatMapping(
                                        country -> country.getCities().stream(),
                                        Collectors.maxBy(
                                                Comparator.comparing(City::getPopulation)
                                        )
                                )
                        ));

        mostPopulatedByContinent.forEach((continent, city) ->
                System.out.println(continent + " -> " + city.orElse(null)));
    }

    public void highestPopulatedCapital(List<Country> countries) {
        Optional<City> highestCapital =
                countries.stream()
                        .map(country ->
                                country.getCities()
                                        .stream()
                                        .filter(city -> city.getId() == country.getCapital())
                                        .findFirst()
                                        .orElse(null)
                        )
                        .filter(Objects::nonNull)
                        .max(Comparator.comparing(City::getPopulation));

        highestCapital.ifPresent(System.out::println);
    }

}
