import { useState } from 'react';
import './Home.scss';
import { Map } from '../../components/Map/Map';
import { ToolTip } from '../../components/Tooltip/ToolTip';

export function Home() {
  const [latitude, setLatitude] = useState(-29.68391);
  const [longitude, setLongitude] = useState(-51.45797);
  const [nameLocal, setNameLocal] = useState('syonet');
  const [image, setImage] = useState('https://encurtador.com.br/lmRV2');
  const [detail, setDetail] = useState('O mais completo acelerador de vendas');

  const descriptionLatitude = 'Insira a latitude entre -90 e 90';
  const descriptionsetLongitude = 'Insira a longitude entre -180 e 180';
  const descriptionNameLocal =
    'Insira o nome do local marcado, o nome deve ter até 20 caracteres ';
  const descriptionImage = 'Insira o link da imagem que deseja exibir no mapa';
  const descriptionDetail = 'Insira uma descrição de até 50 caracteres';

  return (
    <div className="home container">
      <h1>Syonet Map</h1>
      <div className="items">
        <div className="card">
          <h3>INSIRA AS INFORMAÇÕES</h3>
          <div className="inputs">
            <label htmlFor="nameLocal">
              <ToolTip text={descriptionNameLocal}>
                <i className="fa fa-circle-info text-light-blue" /> Nome do
                local:
              </ToolTip>
              <input
                id="nameLocal"
                type="text"
                value={nameLocal}
                onChange={e => {
                  const { length } = e.target.value;
                  if (length <= 20) {
                    setNameLocal(e.target.value);
                  }
                }}
              />
            </label>
          </div>
          <div className="inputs">
            <label htmlFor="latitude">
              <ToolTip text={descriptionLatitude}>
                <i className="fa fa-circle-info text-light-blue" /> Latitude:
              </ToolTip>
              <input
                type="number"
                value={latitude === 0 ? '' : latitude}
                id="latitude"
                onChange={e => {
                  const value = Number(e.target.value);
                  if (value >= -90 && value <= 90) {
                    setLatitude(value);
                  }
                }}
              />
            </label>
          </div>
          <div className="inputs">
            <label htmlFor="logitude">
              <ToolTip text={descriptionsetLongitude}>
                <i className="fa fa-circle-info text-light-blue" /> Longitude:
              </ToolTip>
              <input
                id="logitude"
                type="number"
                value={longitude === 0 ? '' : longitude}
                onChange={e => {
                  const value = Number(e.target.value);
                  if (value >= -180 && value <= 180) {
                    setLongitude(value);
                  }
                }}
              />
            </label>
          </div>

          <div className="inputs">
            <label htmlFor="image">
              <ToolTip text={descriptionImage}>
                <i className="fa fa-circle-info text-light-blue" /> Imagem:
              </ToolTip>
              <input
                id="image"
                type="text"
                value={image}
                onChange={e => setImage(e.target.value)}
              />
            </label>
          </div>
          <div className="inputs">
            <label htmlFor="detail">
              <ToolTip text={descriptionDetail}>
                <i className="fa fa-circle-info text-light-blue" /> Descrição:
              </ToolTip>
              <input
                id="detail"
                type="text"
                value={detail}
                onChange={e => {
                  const { length } = e.target.value;
                  if (length <= 50) {
                    setDetail(e.target.value);
                  }
                }}
              />
            </label>
          </div>
        </div>
        <div className="map">
          <Map
            lat={latitude}
            lng={longitude}
            text={nameLocal}
            image={image}
            detail={detail}
          />
        </div>
      </div>
    </div>
  );
}
