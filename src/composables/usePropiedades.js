import { computed } from 'vue'
import { collection, query, where, getDocs  } from 'firebase/firestore'
import { useFirestore, useCollection } from 'vuefire'

export default function usePropiedades(){

    const db = useFirestore()
    const propiedadesCollecction= useCollection(collection(db,'propiedades'))

    const priceProperty = computed (()=>{
        return (price) =>
            Number(price).toLocaleString('es-MX',{style:'currency', currency:'MXN'})
        
    })

    return {
        propiedadesCollecction,
        priceProperty,
    }

}