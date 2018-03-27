<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer
            fixed
            v-model="drawer"
            app
          >
            <v-list dense>
              <v-list-tile @click="$router.push({ path: '/' })">
                <v-list-tile-action>
                  <v-icon>add</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>
                    <!-- <router-link to="/"style="text-decoration:none">เพิ่มรายชื่อ</router-link> -->
                    เพิ่มรายชื่อ
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile @click="$router.push({ path: '/edit' })">
                <v-list-tile-action>
                  <v-icon>edit</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>
                  <!-- <router-link to="/edit"style="text-decoration:none">แก้ไขรายชื่อ</router-link> -->
                  แก้ไขรายชื่อ
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile @click="$router.push({ path: '/show' })">
                <v-list-tile-action>
                  <v-icon>list</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>
                    <!-- <router-link to="/show"style="text-decoration:none">โชว์รายชื่อ</router-link> -->
                    โชว์รายชื่อ
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-navigation-drawer>

      <v-toolbar color="teal lighten-3" dark fixed app>
   <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Bever Medical Industry Co., Ltd.</v-toolbar-title>
      </v-toolbar>
    </br>
      <v-content>
  <v-container>

<router-view></router-view>

  </v-container>


</v-content>
<v-footer color="teal lighten-3" app>
  <span class="white--text">&copy; 2018</span>
</v-footer>
  </v-app>
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      drawer: true,
      value: ''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
