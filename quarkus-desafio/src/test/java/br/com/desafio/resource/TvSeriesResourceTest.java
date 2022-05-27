package br.com.desafio.resource;

import br.com.desafio.models.Episode;
import br.com.desafio.models.TvSerie;
import br.com.desafio.proxy.EpisodeProxy;
import br.com.desafio.proxy.TvSeriesProxy;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.runners.MockitoJUnitRunner;
import org.wildfly.common.Assert;

import java.util.ArrayList;
import java.util.List;

@RunWith(MockitoJUnitRunner.class)
public class TvSeriesResourceTest {
    @InjectMocks
    TvSeriesResource tvSeriesResource;

    @Mock
    TvSeriesProxy tvSeriesProxy;

    @Mock
    EpisodeProxy episodeProxy;

    @Test
    public void getSucess(){
        Mockito.when(tvSeriesProxy.get(Mockito.anyString())).thenReturn(loadTvSeries());
        Mockito.when(episodeProxy.get(Mockito.anyLong())).thenReturn(loadListEpisode());
        List<Episode> episodeList = tvSeriesResource.get("title");
        Assert.assertNotNull(episodeList);
        Mockito.verify(tvSeriesProxy).get(Mockito.anyString());
    }

    private List<Episode> loadListEpisode() {
        List<Episode> list = new ArrayList<>();
        list.add(loadEpisode(1l));
        return list;
    }

    private Episode loadEpisode(long id) {
        Episode episode = new Episode();
        episode.setId(id);
        episode.setName("name");
        return episode;
    }

    private TvSerie loadTvSeries() {
        TvSerie tvSerie = new TvSerie();
        tvSerie.setId(1l);
        tvSerie.setName("name");
        return tvSerie;
    }
}
