package br.com.desafio.resource;

import br.com.desafio.models.Episode;
import br.com.desafio.models.TvSerie;
import br.com.desafio.proxy.EpisodeProxy;
import br.com.desafio.proxy.TvSeriesProxy;
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
import java.util.List;

@Path("/tvseries")
public class TvSeriesResource {

    @RestClient
    TvSeriesProxy tvSeriesProxy;

    @RestClient
    EpisodeProxy episodeProxy;

    private List<TvSerie> tvSeries;

    @GET
    @Operation(summary = "Retorna todos os episódios do filme/series selecionado")
    @Produces(MediaType.APPLICATION_JSON)
    @APIResponse(responseCode = "200",content = @Content(mediaType = MediaType.APPLICATION_JSON, schema = @Schema(implementation = Episode.class, type = SchemaType.ARRAY)))
    public List<Episode> get(@QueryParam("title")String title){
        System.out.println("consulta");
        TvSerie tvSerie = tvSeriesProxy.get(title);

        return episodeProxy.get(tvSerie.getId());
    }
}
