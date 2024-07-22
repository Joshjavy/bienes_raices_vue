import { computed, ref } from 'vue'
import { collection, query, where, getDocs  } from 'firebase/firestore'
import { useFirestore, useCollection } from 'vuefire'

export default function usePropiedades(){
    const alberca = ref (false)
    const db = useFirestore()
    const propiedadesCollecction= useCollection(collection(db,'propiedades'))

    const propiedadesFiltradas = computed(()=>{
        return alberca.value ? 
            propiedadesCollecction.value.filter(propiedad => propiedad.alberca) : propiedadesCollecction.value
    })
    

    return {
        alberca,
        propiedadesCollecction,
        propiedadesFiltradas
    }

}