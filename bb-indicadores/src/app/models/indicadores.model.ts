import { Country } from './country.model';
import { Indicador } from './indicador.model';

export interface Indicadores{
  indicator: Indicador;
  country: Country;
  countryiso3code: string;
  date: string;
  value?: number;
  unit: string;
  obs_status: string;
  decimal: number;
}
