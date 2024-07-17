<script setup>
    import { useRoute } from 'vue-router'
    import { doc } from 'firebase/firestore'
    import { useDocument, useFirestore} from 'vuefire'
    import { priceProperty } from '@/helpers'
    
    const route = useRoute()
    const db= useFirestore()
    const docRef = doc(db,'propiedades',route.params.id)

    const propiedad = useDocument(docRef)

</script>
<template>
    <div>
        <v-card flat >
            <v-card-title class="mt-5 text-h3 py-5 font-weight-bold text-center">
                {{ propiedad?.titulo }}
            </v-card-title>

            <v-img :src="propiedad?.image" height="450" cover />
            <div class=" bg-blue-grey-lighten-5 d-flex flex-column flex-md-row align-center">
                <v-card-text class="">
                Precio:
                <span class="font-weight-bold">{{ priceProperty(propiedad?.precio) }}</span>
                </v-card-text>

                <v-card-text class="">
                Baños:
                <span class="font-weight-bold">{{ propiedad?.wc }}</span>
                </v-card-text>

                <v-card-text class="">
                    Estacionamiento:
                    <span class="font-weight-bold">{{ propiedad?.estacionamiento }}</span>
                </v-card-text>

                <v-card-text class="">
                    Habitaciones:
                    <span class="font-weight-bold">{{ propiedad?.habitaciones }}</span>
                </v-card-text>
                
            </div>

            <v-row>
                <v-col
                    cols="12"
                    md="8">

                    <div class=" text-pre-wrap py-5">
                        {{  propiedad?.descripcion }}
                    </div>
                </v-col>
                
                <v-col cols="12" md="8">
                    <div class="py-5">
                        <p>Mapa Aquí</p>
                    </div>
                    


                </v-col>
            </v-row>
            

            
        </v-card>
    </div>
</template>

<style>
    .text-pre-wrap{
        white-space: pre-wrap;
    }
</style>



