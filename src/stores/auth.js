import { ref, computed } from 'vue'

import { defineStore } from 'pinia'
import { useFirebaseAuth } from 'vuefire'
import { signInWithEmailAndPassword } from 'firebase/auth'


export const useAuthStore = defineStore('auth',()=>{
    const auth = useFirebaseAuth()

    const authUser = ref ({})
    const errorMessage = ref('')

    const errorCode = {
        'auth/invalid-credential':'Credencial invalido',
        'auth/too-many-requests' : 'Demasiados intentos',
    }



    const login =({email,password})=>{
        signInWithEmailAndPassword(auth,email,password)
        .then((response)=>{
            const user = response.user
            authUser.value = user

        })
        .catch(error=>{
            errorMessage.value = errorCode[error.code];
            console.log(error.code)
        })
    }

    const hasError = computed(()=>{
        return errorMessage.value;
    })

    return {
        login,
        hasError,
        errorMessage,
    }
})