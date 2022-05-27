package br.com.desafio.proxy;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("/v2/country")
@Produces(MediaType.APPLICATION_JSON)
@RegisterRestClient
public interface CountryProxy {
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("{cod}/indicator/SI.POV.DDAY")
    @JsonDeserialize
    String findByCodCountry(@PathParam("cod") String cod,
                                    @QueryParam("format") String format);
}
