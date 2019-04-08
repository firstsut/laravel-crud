<template>
     <v-app>
        <v-toolbar dark  app>
            <v-toolbar-side-icon @click.stop="drawer = !drawer" ><v-icon>fa-bars</v-icon></v-toolbar-side-icon>
            <v-toolbar-title class="white--text">Home</v-toolbar-title>

            <v-spacer></v-spacer>
        </v-toolbar>
        <v-navigation-drawer
                app
                v-model="drawer"
                stateless
                value="true"
                dark

            >
                <v-list>
                <v-list-tile @click="{}">
                    <v-list-tile-action>
                    <v-icon>fa-home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>
                        <router-link tag="li" to="/">Home</router-link>
                    </v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="{}">
                    <v-list-tile-action>
                    <v-icon>fa-list</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>
                        <router-link tag="li" to="/about">About</router-link>
                    </v-list-tile-title>
                </v-list-tile>
                </v-list>
        </v-navigation-drawer>
        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>
        <v-footer ></v-footer>
     </v-app>
</template>
<script>
    export default{
        data(){
            return {drawer : false}
        }
    }
</script>
