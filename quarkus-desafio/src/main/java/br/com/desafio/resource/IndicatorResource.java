package br.com.desafio.resource;

import br.com.desafio.models.Episode;
import br.com.desafio.proxy.CountryProxy;
import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.enums.SchemaType;
import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;
import org.eclipse.microprofile.rest.client.inject.RestClient;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

@Path("/indicators")
public class IndicatorResource {

    private static final String JSON = "json";
    @RestClient
    CountryProxy countryProxy;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Operation(summary = "Retorna todos os indicadores cadastrados na API https://www.worldbank.org/")
    @APIResponse(responseCode = "200",content = @Content(mediaType = MediaType.APPLICATION_JSON, schema = @Schema(implementation = Object.class, type = SchemaType.ARRAY)))
    public Object findBycodCountry(@QueryParam("cod") String cod) {
        return getJson(cod);
    }

    private String getJson(String cod) {
        String json = countryProxy.findByCodCountry(cod, JSON);
        int pos = json.indexOf(",[");
        String jsonConv = json.substring(pos+2);
        String indicadores = "{\"indicadores\":[".concat(jsonConv);
        String total = indicadores.substring(0, indicadores.length()-2);
        return total+"]}";
    }

}