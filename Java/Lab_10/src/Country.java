import java.util.List;

public class Country {

    private String code;
    private String name;
    private String continent;
    private double surfaceArea;
    private int population;
    private double gnp;
    private int capital;          // capital city id
    private List<City> cities;

    public Country(String code, String name, String continent,
                   double surfaceArea, int population,
                   double gnp, int capital, List<City> cities) {

        this.code = code;
        this.name = name;
        this.continent = continent;
        this.surfaceArea = surfaceArea;
        this.population = population;
        this.gnp = gnp;
        this.capital = capital;
        this.cities = cities;
    }

    public String getCode() { return code; }
    public String getName() { return name; }
    public String getContinent() { return continent; }
    public List<City> getCities() { return cities; }
    public int getCapital() { return capital; }
}
