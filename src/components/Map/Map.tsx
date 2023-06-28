import './Map.scss';
import { useState } from 'react';
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from '@react-google-maps/api';
import { InfoWindowMap } from '../InfoWindowMap/InfoWindowMap';
import { GOOGLE_MAPS_API_KEY } from '../../util/globalVariables';

type Props = {
  lat: number;
  lng: number;
  text: string;
  image: string;
  detail: string;
};
export function Map({ lat, lng, text, image, detail }: Props) {
  const position = { lat, lng };
  const googleMapsUrl = `https://www.google.com/maps/dir//${lat},${lng}/@${lat},${lng},17z?entry=ttu`;
  const [showInfoWindow, setShowInfoWindow] = useState(true);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_API_KEY(),
  });
  const containerStyle = {
    width: '100%',
    height: '100%',
  };

  const handleMarkerClick = () => {
    setShowInfoWindow(true);
  };

  const handleInfoWindowClose = () => {
    setShowInfoWindow(false);
  };

  return (
    <div className="map" data-testid="map">
      {isLoaded && (
        <GoogleMap
          zoom={17}
          center={position}
          mapContainerStyle={containerStyle}
        >
          <Marker
            position={position}
            onClick={handleMarkerClick}
            options={{
              label: {
                text,
                color: '#BD2522',
                fontWeight: '450',
                className: 'map-marker',
              },
            }}
          />
          {showInfoWindow && (
            <InfoWindow
              position={position}
              onCloseClick={handleInfoWindowClose}
            >
              <InfoWindowMap
                title={text}
                image={image}
                detail={detail}
                googleMapsUrl={googleMapsUrl}
              />
            </InfoWindow>
          )}
        </GoogleMap>
      )}
    </div>
  );
}
