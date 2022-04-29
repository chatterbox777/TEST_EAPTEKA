<template>
  <section class="filter-items">
    <div :class="[sortType === 'bricks' ? 'flex' : '']">
      <VCarousel
        :isScreenSizeLarge="isScreenSizeLarge"
        :sortType="sortType"
        :perPage="perPage"
        @setSelectedItem="setSelectedItem"
      />
      <div v-if="isScreenSizeLarge || sortType !== 'bricks'">
        <VCards
          :class="[sortType === 'bricks' ? 'flex' : '']"
          @setSelectedItem="setSelectedItem"
        />
      </div>
      <b-modal id="song-modal">
        <div v-if="selectedItem" class="d-block text-center">
          <h3>{{ selectedItem.artist_names }}</h3>
          <img
            class="filter__items__modal__image"
            :src="selectedItem.primary_artist.header_image_url"
            alt=""
          />
          <p>{{ selectedItem.full_title }}</p>
          <a :href="selectedItem.url">see lirics of the song</a>
        </div>
      </b-modal>
    </div>
    <VPagination />
  </section>
</template>

<script>
import { mapState } from 'vuex';
import VCarousel from '../components/elements/VCarousel.vue';
import VCards from '../components/elements/VCards.vue';
import VPagination from '../toolkit/VPagination.vue';

export default {
  name: 'VFilterItems',
  components: { VPagination, VCarousel, VCards },
  data() {
    return {
      selectedItem: null,
      isScreenSizeLarge: false,
      perPage: 1,
      smallScreenSize: 525,
      mediumScreenSize: 896,
      largeScrrenSize: 1200,
    };
  },
  computed: {
    ...mapState('filter', {
      filterItems: (state) => state.filterItems,
      sortType: (state) => state.sortType,
    }),
  },
  methods: {
    setSelectedItem(item) {
      this.selectedItem = item;
    },
    myEventHandler(e) {
      if (e.target.innerWidth <= this.smallScreenSize) {
        this.isScreenSizeLarge = false;
        this.perPage = 1;
      } else if (e.target.innerWidth <= this.mediumScreenSize) {
        this.isScreenSizeLarge = false;
        this.perPage = 2;
      } else {
        this.isScreenSizeLarge = true;
      }
    },
  },
  created() {
    window.addEventListener('resize', this.myEventHandler);
  },
  mounted() {
    if (window.innerWidth > this.largeScrrenSize) {
      this.isScreenSizeLarge = true;
    } else {
      this.isScreenSizeLarge = false;
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.myEventHandler);
  },
};
</script>

<style lang="scss" scoped>
.filter-items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  div:nth-child(1) {
    transition: all 2s;
  }
  .flex {
    display: flex;
  }
}
.filter__items__modal__image {
  width: 300px;
  height: 300px;
  object-fit: cover;
}
.card {
  width: 300px;
}
.card-body {
  display: flex;
  flex-direction: column;
  .btn {
    margin-top: auto;
  }
  .card-title {
    max-height: 80px;
  }
}

@media screen and (max-width: 480px) {
  .VueCarousel {
    width: 333px !important;
  }
}

@media (min-width: 400px) and (max-width: 896px) {
  .VueCarousel {
    width: 674px !important;
  }
}
</style>
