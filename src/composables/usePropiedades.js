import { computed, ref } from 'vue'
import { collection, doc, deleteDoc} from 'firebase/firestore'
import { ref as storageRef, deleteObject} from 'firebase/storage'

import { useFirestore, useCollection, useFirebaseStorage } from 'vuefire'

export default function usePropiedades(){
    const alberca = ref (false)

    const storage = useFirebaseStorage()
    const db = useFirestore()
    const propiedadesCollecction= useCollection(collection(db,'propiedades'))

    async function deleteItem(id, urlImage){
        if(confirm('Deseas eliminar esta propiedad?')){
            const docRef = doc(db,'propiedades',id)
            const imageRef=storageRef(storage,urlImage)

            await Promise.all([
                deleteDoc(docRef),
                deleteObject(imageRef),
            ]);
            
        }
        

    }
    const propiedadesFiltradas = computed(()=>{
        return alberca.value ? 
            propiedadesCollecction.value.filter(propiedad => propiedad.alberca) : propiedadesCollecction.value
    })
    

    return {
        alberca,
        propiedadesCollecction,
        propiedadesFiltradas,
        deleteItem
    }

}