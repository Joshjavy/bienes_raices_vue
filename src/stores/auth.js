import { defineStore } from 'pinia'
import { useFirebaseAuth } from 'vuefire'
import { signInWithEmailAndPassword } from 'firebase/auth'


export const useAuthStore = defineStore('auth',()=>{
    const auth = useFirebaseAuth()
    const login =({email,password})=>{
        signInWithEmailAndPassword(auth,email,password)
        .then((response)=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    return {
        login
    }
})