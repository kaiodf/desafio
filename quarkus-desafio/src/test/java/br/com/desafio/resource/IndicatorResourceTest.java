package br.com.desafio.resource;

import br.com.desafio.proxy.CountryProxy;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.runners.MockitoJUnitRunner;
import org.wildfly.common.Assert;

@RunWith(MockitoJUnitRunner.class)
public class IndicatorResourceTest {
    @InjectMocks
    IndicatorResource indicatorResource;

    @Mock
    CountryProxy countryProxy;

    private static final String SJSON= "{\"indicadores\": [{\"indicator\": { \"id\": \"SI.POV.DDAY\",\"value\": " +
            "\"Poverty headcount ratio at $1.90 a day (2011 PPP) (% of population)\"},\"country\": {\"id\": \"AO\"," +
            "\"value\": \"Angola\"},\"countryiso3code\": \"AGO\", \"date\": \"2021\",\"value\": null,\"unit\": \"\"," +
            "\"obs_status\": \"\",\"decimal\": 1}]}";

    @Test
    public void findBycodCountrySucess(){
        Mockito.when(countryProxy.findByCodCountry(Mockito.anyString(),Mockito.anyString())).thenReturn(SJSON);
        Object json = indicatorResource.findBycodCountry("cod");
        Assert.assertNotNull(json);
        Mockito.verify(countryProxy).findByCodCountry(Mockito.anyString(),Mockito.anyString());
    }
}
