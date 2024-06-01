<script setup>
    import { Field, useField, useForm} from 'vee-validate'

    const { handleSubmit } = useForm();

    const email = useField('email')
    const paswword = useField('paswword')



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

        <v-form class="mt-5">
            <v-text-field
                type="email"
                label="Email"
                bg-color="blue-lighten-4"
                v-model="email.value.value"
            >
            </v-text-field>

            <v-text-field
                type="password"
                label="Password"
                bg-color="blue-lighten-4"
                v-model="paswword.value.value"
            ></v-text-field>

            <v-btn
                block
                color="pink-accent-3"
            >
                Ininiciar Sesión
            </v-btn>


        </v-form>


    </v-card>

</template>
