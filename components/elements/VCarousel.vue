<template>
  <carousel
    v-if="!isScreenSizeLarge && sortType === 'bricks'"
    :perPage="perPage"
  >
    <slide v-for="item in filterItemsByPage" :key="item.id" class="p-2">
      <b-card
        class="filter-items__item ml-2 mb-2"
        :title="item.artist_names"
        :img-src="item.header_image_thumbnail_url"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem"
      >
        <b-card-text>
          {{ item.title }}
        </b-card-text>

        <b-button
          @click="() => handleSelectItem(item)"
          href="#"
          variant="primary"
          v-b-modal.song-modal
          >Details</b-button
        >
      </b-card>
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import { mapGetters } from 'vuex';

export default {
  name: 'VCarousel',
  components: {
    Carousel,
    Slide,
  },
  props: {
    isScreenSizeLarge: { type: Boolean, required: true },
    sortType: { type: String, required: true },
    perPage: { type: Number, required: true },
  },
  computed: {
    ...mapGetters('filter', ['filterItemsByPage']),
  },
  methods: {
    handleSelectItem(item) {
      this.$emit('setSelectedItem', item);
    },
  },
};
</script>
