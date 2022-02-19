<template>
    <div class="h-screen mx-0 bg-sky-700 flex ">
        <div class="text-left self-center mx-12 px-12">
            <h1 class="text-7xl font-sans font-bold text-white py-2">Welcome !</h1>
            <p class="text-white text-2xl">On our browser fingerprinting website.</p>
            <p class="animate-bounce my-12 font-bold text-3xl text-red-600" v-if="id != null">{{ id }}</p>
            <p class="text-white">Now we know you, but who are we ? <span class="underline">That's a secret we'll never tell</span>.</p>
        </div>
    </div>
</template>
<script>
import fingerprint from '../utils/fingerprint'
import hash from '../utils/hash'

export default {

    data() {
        return {
            id: null,
        }
    },

    mounted: function() {
        const id = fingerprint({debug: false})
        this.id = hash(JSON.stringify(id))
    }
}
</script>
