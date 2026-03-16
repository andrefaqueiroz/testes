import { render, screen } from '@testing-library/react-native';
import ElderTracker from './ElderTracker';

describe('Acceptance Test – Successful location tracking', () => {
  it('Given internet and location services are enabled, When caregiver accesses Elder Tracker, Then system displays location', () => {
    
    // ACTION (When): O cuidador acessa a seção Elder Tracker
    render(<ElderTracker />);

    // ASSERTION (Then): O sistema recupera a localização e a exibe na tela
    // Estamos verificando se os dados específicos do Mock estão sendo renderizados corretamente
    const latitudeText = screen.getByText(/Latitude: 41.1579/i);
    const longitudeText = screen.getByText(/Longitude: -8.6291/i);
    const mapElement = screen.getByText(/Map showing elder location/i);

    expect(latitudeText).toBeTruthy();
    expect(longitudeText).toBeTruthy();
    expect(mapElement).toBeTruthy();
  });
});