<template>
  <div>
    <b-card
      v-for="item in filterItemsByPage"
      :key="item.id"
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'VCards',
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

<style>
img {
  height: 300px;
  object-fit: fill;
}
</style>
