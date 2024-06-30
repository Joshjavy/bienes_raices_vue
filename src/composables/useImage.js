import {ref as storageRef } from 'firebase/storage'
import { useFirebaseStorage,useStorageFile } from 'vuefire'
import { uid } from 'uid'

export default  function useImage(){

    const storage = useFirebaseStorage();
    const stogarerefPath= storageRef(storage,`/propiedades/${uid()}`)

    const {
        url,
        upload,
    } = useStorageFile(stogarerefPath)

    return{

    }
}