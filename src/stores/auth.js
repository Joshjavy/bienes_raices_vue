import { ref, computed,onMounted } from 'vue'

import { defineStore } from 'pinia'
import { useFirebaseAuth } from 'vuefire'
import { signInWithEmailAndPassword, onAuthStateChanged,signOut } from 'firebase/auth'
import router from '@/router'


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
            router.push({name:'admin-propiedades'})
        })
        .catch(error=>{
            errorMessage.value = errorCode[error.code];
            console.log(error.code)
        })
    }

    const logout=()=>{
        signOut(auth).then(()=>{
            authUser.value =null;
            router.push({name:'login'})
        }).catch((error)=>{
            console.log(error)
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
        logout,
        hasError,
        errorMessage,
        isAuth,
    }
})