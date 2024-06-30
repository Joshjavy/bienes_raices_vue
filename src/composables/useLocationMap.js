import { ref } from 'vue'
export default function useLocationMap(){
    const zoom = ref(15)
    const center = ref ([19.4387883,-99.1313312])
    function pin(e){
        const marker = e.target.getLatLng()
        center.value=[marker.lat,marker.lng]
    }
    return {
        zoom,
        center,
        pin
    }
}