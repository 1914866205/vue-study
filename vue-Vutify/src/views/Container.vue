<template>
  <div
    id="app"
    v-ripple
  >
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
      >
        <v-sheet
          :color="colors[i]"
          height="100%"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-3">{{ slide }} Slide</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <!-- <div id="nav">
      <router-link to="/home/card">卡片视图</router-link>|
      <router-link to="/home/list">列表视图</router-link>|
      <router-link to="/welcome">欢迎页面</router-link>
    </div>
    <router-view /> -->
    <v-container>
      <v-row justify="space-around">
        <v-col cols="12">
          <v-select
            v-model="color"
            :items="colors"
            label="Color"
          ></v-select>
        </v-col>

        <v-switch
          v-model="drawer"
          class="ma-2"
          label="v-model"
        ></v-switch>

        <v-switch
          v-model="permanent"
          class="ma-2"
          label="Permanent"
        ></v-switch>

        <v-switch
          v-model="miniVariant"
          class="ma-2"
          label="Mini variant"
        ></v-switch>

        <v-switch
          v-model="expandOnHover"
          class="ma-2"
          label="Expand on hover"
        ></v-switch>

        <v-switch
          v-model="background"
          class="ma-2"
          label="Background"
        ></v-switch>

        <v-switch
          v-model="right"
          class="ma-2"
          label="Right"
        ></v-switch>
      </v-row>

      <v-card
        height="400"
        class="overflow-hidden"
      >
        <v-navigation-drawer
          v-model="drawer"
          :color="color"
          :expand-on-hover="expandOnHover"
          :mini-variant="miniVariant"
          :right="right"
          :permanent="permanent"
          :src="bg"
          absolute
          dark
        >
          <v-list
            dense
            nav
            class="py-0"
          >
            <v-list-item
              two-line
              :class="miniVariant && 'px-0'"
            >
              <v-list-item-avatar>
                <img src="https://randomuser.me/api/portraits/men/81.jpg" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Application</v-list-item-title>
                <v-list-item-subtitle>Subtext</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider>
              <div>
                <v-sheet
                  tile
                  height="54"
                  color="grey lighten-3"
                  class="d-flex"
                >
                  <v-btn
                    icon
                    class="ma-2"
                    @click="$refs.calendar.prev()"
                  >
                    <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>
                  <v-select
                    v-model="type"
                    :items="types"
                    dense
                    outlined
                    hide-details
                    class="ma-2"
                    label="type"
                  ></v-select>
                  <v-select
                    v-model="mode"
                    :items="modes"
                    dense
                    outlined
                    hide-details
                    label="event-overlap-mode"
                    class="ma-2"
                  ></v-select>
                  <v-select
                    v-model="weekday"
                    :items="weekdays"
                    dense
                    outlined
                    hide-details
                    label="weekdays"
                    class="ma-2"
                  ></v-select>
                  <v-spacer></v-spacer>
                  <v-btn
                    icon
                    class="ma-2"
                    @click="$refs.calendar.next()"
                  >
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </v-sheet>
                <v-sheet height="600">
                  <v-calendar
                    ref="calendar"
                    v-model="value"
                    :weekdays="weekday"
                    :type="type"
                    :events="events"
                    :event-overlap-mode="mode"
                    :event-overlap-threshold="30"
                    :event-color="getEventColor"
                    @change="getEvents"
                  ></v-calendar>
                </v-sheet>
              </div>
            </v-divider>

            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        <div>
          <v-sheet
            tile
            height="54"
            color="grey lighten-3"
            class="d-flex"
          >
            <v-btn
              icon
              class="ma-2"
              @click="$refs.calendar.prev()"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-select
              v-model="type"
              :items="types"
              dense
              outlined
              hide-details
              class="ma-2"
              label="type"
            ></v-select>
            <v-select
              v-model="mode"
              :items="modes"
              dense
              outlined
              hide-details
              label="event-overlap-mode"
              class="ma-2"
            ></v-select>
            <v-select
              v-model="weekday"
              :items="weekdays"
              dense
              outlined
              hide-details
              label="weekdays"
              class="ma-2"
            ></v-select>
            <v-spacer></v-spacer>
            <v-btn
              icon
              class="ma-2"
              @click="$refs.calendar.next()"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-sheet>
          <v-sheet height="600">
            <v-calendar
              ref="calendar"
              v-model="value"
              :weekdays="weekday"
              :type="type"
              :events="events"
              :event-overlap-mode="mode"
              :event-overlap-threshold="30"
              :event-color="getEventColor"
              @change="getEvents"
            ></v-calendar>
          </v-sheet>
        </div>
      </v-card>
    </v-container>
    <v-bottom-navigation v-model="bottomNav">
      <v-btn value="recent">
        <span>Recent</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn value="favorites">
        <span>Favorites</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn value="nearby">
        <span>Nearby</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Photos', icon: 'mdi-image' },
        { title: 'About', icon: 'mdi-help-box' }
      ],
      color: 'primary',
      right: false,
      permanent: true,
      miniVariant: false,
      expandOnHover: false,
      background: false,
      colors: ['indigo', 'warning', 'pink darken-2', 'red lighten-1', 'deep-purple accent-4'],
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
      bottomNav: 'recent',
      type: 'month',
      types: ['month', 'week', 'day', '4day'],
      mode: 'stack',
      modes: ['stack', 'column'],
      weekday: [0, 1, 2, 3, 4, 5, 6],
      weekdays: [
        { text: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
        { text: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
        { text: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
        { text: 'Mon, Wed, Fri', value: [1, 3, 5] }
      ],
      value: '',
      events: [],
      names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party']
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    getEvents({ start, end }) {
      const events = []
      const min = new Date(`${start.date}T00:00:00`)
      const max = new Date(`${end.date}T23:59:59`)
      const days = (max.getTime() - min.getTime()) / 86400000
      const eventCount = this.rnd(days, days + 20)
      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0
        const firstTimestamp = this.rnd(min.getTime(), max.getTime())
        const first = new Date(firstTimestamp - (firstTimestamp % 900000))
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
        const second = new Date(first.getTime() + secondTimestamp)
        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: this.formatDate(first, !allDay),
          end: this.formatDate(second, !allDay),
          color: this.colors[this.rnd(0, this.colors.length - 1)]
        })
      }
      this.events = events
    },
    getEventColor(event) {
      return event.color
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
    formatDate(a, withTime) {
      return withTime
        ? `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()} ${a.getHours()}:${a.getMinutes()}`
        : `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()}`
    }
  },
  computed: {
    bg() {
      return this.background ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg' : undefined
    }
  }
}
</script>

<style scoped lang="scss"></style>
