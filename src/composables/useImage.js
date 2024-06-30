import {ref as storageRef } from 'firebase/storage'
import { useFirebaseStorage,useStorageFile } from 'vuefire'
import { uid } from 'uid'

export default  function useImage(){

    const storage = useFirebaseStorage();
    const stogarerefPath= storageRef(storage,`/propiedades/${uid()}.jpg`)

    const {
        url,
        upload,
    } = useStorageFile(stogarerefPath)

    function uploadImage(e){
        const data = e.target.files[0];

        if(data){
            upload(data);
        }
        
    }
    return{
        uploadImage
    }
}