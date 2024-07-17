<script setup>
    import usePropiedades from '@/composables/usePropiedades'
    import { priceProperty } from '@/helpers'
    import Propiedad from '@/components/Propiedad.vue'
    const { propiedadesCollecction } = usePropiedades()
</script>

<template>
    <h1 class="text-center">Nuestras propiedades</h1>

    <v-card flat class="py-10">
        <v-row>
            <Propiedad
                v-for="propiedad in propiedadesCollecction"
                :key="propiedad.id"
                :propiedad="propiedad"
                :price="priceProperty"
            />
        </v-row>
    </v-card>

</template>
