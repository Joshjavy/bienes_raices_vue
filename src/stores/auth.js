import { ref, computed,onMounted } from 'vue'

import { defineStore } from 'pinia'
import { useFirebaseAuth } from 'vuefire'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'


export const useAuthStore = defineStore('auth',()=>{
    const auth = useFirebaseAuth()

    const authUser = ref (null)
    const errorMessage = ref('')

    const errorCode = {
        'auth/invalid-credential':'Credencial invalido',
        'auth/too-many-requests' : 'Demasiados intentos',
    }

    onMounted(()=>[
        onAuthStateChanged(auth,(user)=>{
            if(user){
                authUser.value = user
            }
        })
    ])

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

    const isAuth=computed(()=>{
        return authUser.value
    })
    const hasError = computed(()=>{
        return errorMessage.value;
    })

    return {
        login,
        hasError,
        errorMessage,
        isAuth,
    }
})