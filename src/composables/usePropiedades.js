import { collection, query, where, getDocs  } from 'firebase/firestore'
import { useFirestore, useCollection } from 'vuefire'
export default function usePropiedades(){
    const db = useFirestore()
    const propiedadesCollecction= useCollection(collection(db,'propiedades'))

    return {
        propiedadesCollecction
    }

}