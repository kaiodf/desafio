package br.com.desafio.models;

import lombok.Data;

import java.net.URL;
import java.util.Set;
@Data
public class TvSerie {
    private Long id;
    private String name;
    private URL url;
    private String summary;
    private String language;
    private Set<String> genres;
    private URL officialSite;
}
