<script setup>
    import usePropiedades from '@/composables/usePropiedades'
    import { priceProperty } from '@/helpers'
    import Propiedad from '@/components/Propiedad.vue'
    const { alberca, propiedadesFiltradas } = usePropiedades()
</script>

<template>
    <h1 class="text-center">Nuestras propiedades</h1>

    <v-card flat class="py-10">
        <v-card-title class="test-h5">
            Busqueda
            <v-checkbox label="alberca" v-model="alberca"/>
        </v-card-title>


        <v-row>
            <Propiedad
                v-for="propiedad in propiedadesFiltradas"
                :key="propiedad.id"
                :propiedad="propiedad"
                :price="priceProperty"
            />
        </v-row>
    </v-card>

</template>
