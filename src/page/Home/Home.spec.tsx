/* eslint-disable import/no-extraneous-dependencies */
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Home } from './Home';

jest.mock('../../util/globalVariables.ts', () => ({
  GOOGLE_MAPS_API_KEY: jest.fn(() => 'api_key'),
}));
describe('Home', () => {
  test('should render the component and start state correctly', () => {
    render(<Home />);

    const titleElement = screen.getByText('Syonet Map');
    expect(titleElement).toBeInTheDocument();

    const nameLocalInput = screen.getByLabelText(
      'Nome do local:',
    ) as HTMLInputElement;
    const latitudeInput = screen.getByLabelText(
      'Latitude:',
    ) as HTMLInputElement;
    const longitudeInput = screen.getByLabelText(
      'Longitude:',
    ) as HTMLInputElement;
    const imageInput = screen.getByLabelText('Imagem:') as HTMLInputElement;
    const detailInput = screen.getByLabelText('Descrição:') as HTMLInputElement;

    expect(nameLocalInput.value).toBe('syonet');
    expect(latitudeInput.value).toBe('-29.68391');
    expect(longitudeInput.value).toBe('-51.45797');
    expect(imageInput.value).toBe('https://encurtador.com.br/lmRV2');
    expect(detailInput.value).toBe('O mais completo acelerador de vendas');

    const mapElement = screen.getByTestId('map');
    expect(mapElement).toBeInTheDocument();
  });
  test('should render the component and update state correctly', () => {
    render(<Home />);

    // Verifica se o título está sendo renderizado corretamente
    const titleElement = screen.getByText('Syonet Map');
    expect(titleElement).toBeInTheDocument();

    // Verifica se os elementos de entrada estão sendo renderizados corretamente
    const nameLocalInput = screen.getByLabelText(
      'Nome do local:',
    ) as HTMLInputElement;
    const latitudeInput = screen.getByLabelText(
      'Latitude:',
    ) as HTMLInputElement;
    const longitudeInput = screen.getByLabelText(
      'Longitude:',
    ) as HTMLInputElement;
    const imageInput = screen.getByLabelText('Imagem:') as HTMLInputElement;
    const detailInput = screen.getByLabelText('Descrição:') as HTMLInputElement;

    // Verifica se os valores iniciais estão corretos
    expect(nameLocalInput.value).toBe('syonet');
    expect(latitudeInput.value).toBe('-29.68391');
    expect(longitudeInput.value).toBe('-51.45797');
    expect(imageInput.value).toBe('https://encurtador.com.br/lmRV2');
    expect(detailInput.value).toBe('O mais completo acelerador de vendas');

    // Simula a alteração de valores nos campos de entrada
    fireEvent.change(nameLocalInput, { target: { value: 'New Location' } });
    fireEvent.change(latitudeInput, { target: { value: '50' } });
    fireEvent.change(longitudeInput, { target: { value: '100' } });
    fireEvent.change(imageInput, {
      target: { value: 'https://example.com/image.jpg' },
    });
    fireEvent.change(detailInput, { target: { value: 'New description' } });

    // Verifica se os valores foram atualizados corretamente
    expect(nameLocalInput.value).toBe('New Location');
    expect(latitudeInput.value).toBe('50');
    expect(longitudeInput.value).toBe('100');
    expect(imageInput.value).toBe('https://example.com/image.jpg');
    expect(detailInput.value).toBe('New description');
  });
});
