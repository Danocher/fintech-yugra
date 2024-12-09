import { Placemark, YMaps, Map } from "@pbe/react-yandex-maps";

export default function MapaYa(){
    return(
        <div className="flex items-center justify-center">
        <YMaps >
            <Map
                defaultState={{
                center: [61.241622, 73.484903],
                zoom: 15,
                }}
            >
        <Placemark geometry={[61.241622, 73.484903]} />
  </Map>
  
</YMaps>
</div>
    )
}