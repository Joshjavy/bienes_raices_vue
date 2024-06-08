<script setup>
    import { Field, useField, useForm} from 'vee-validate'
    import { loginSchema } from '@/validation/loginSchema'
    import { useAuthStore } from '@/stores/auth'

    const { handleSubmit } = useForm({ validationSchema : loginSchema});
    const auth =useAuthStore()

    const email = useField('email')
    const password = useField('password')

    const submit = handleSubmit((values)=>{
        auth.login(values)
    })


</script>

<template>
    <v-card flat max-width="600" class="mx-auto">
        <v-card-title
            class="text-h4 font-weight-bold"
            tag="h3"
        >
            Iniciar Sesión

        </v-card-title>

        <v-card-subtitle>
            Inicia Sesión con tu cuenta
        </v-card-subtitle>

        <v-alert
            v-if="auth.hasError"
            class="my-5"
            color="error"
            icon="$success"
            :title="auth.errorMessage"
            
            ></v-alert>

        <v-form class="mt-5">
            <v-text-field
                type="email"
                label="Email"
                bg-color="blue-lighten-4"
                class="mt-3"
                v-model="email.value.value"
                :error-messages="email.errorMessage.value"
            >
            </v-text-field>

            <v-text-field
                type="password"
                label="Password"
                bg-color="blue-lighten-4"
                class="mt-3 mb-3"

                v-model="password.value.value"
                :error-messages="password.errorMessage.value"
            ></v-text-field>

            <v-btn
                block
                color="pink-accent-3"
                @click="submit"
            >
                Ininiciar Sesión
            </v-btn>


        </v-form>


    </v-card>

</template>
