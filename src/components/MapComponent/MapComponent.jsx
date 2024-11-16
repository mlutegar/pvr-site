import React, { useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = () => {
    const location = { lat: -23.570187447313792, lng: -46.69049978234351 };

    return (
        <LoadScript googleMapsApiKey="AIzaSyDnUSYSsrXn_0_TlTzGlU59cgQM6_NYNhQ">
            <GoogleMap
                mapContainerStyle={{ width: '100%', height: '400px' }}
                center={location}
                zoom={15}
            >
                <Marker
                    position={location}
                    title="Av. Brig Faria Lima, 1461"
                    onClick={() => alert('Você clicou no marcador!')}
                />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
