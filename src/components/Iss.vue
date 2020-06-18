<template>
    <div class="iss">
        <h1>Current ISS Position</h1>
        <p><strong>Lat: </strong>{{ latitude }}</p>
        <p><strong>Long: </strong>{{ longitude }}</p>
        <v-map :zoom=3 :center="center" style="height: 500px; width: 500px">
            <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
        </v-map>
    </div>
</template>

<script>
    import axios from "axios";
    import {latLng} from "leaflet";

    export default {
        name: "Iss",
        data() {
            return {
                latitude: 0,
                longitude: 0,
                timer: '',
            }
        },
        computed: {
            center: function () {
                return latLng(this.latitude, this.longitude);
            }
        },
        created() {
            this.loadData();

            this.timer = setInterval(this.loadData, 5000)
        },
        methods: {
            loadData: function () {
                axios
                    .get("http://api.open-notify.org/iss-now.json")
                    .then(response => {
                        this.latitude = response.data.iss_position.latitude;
                        this.longitude = response.data.iss_position.longitude;
                    })
            }
        }
    }
</script>

<style scoped>

</style>