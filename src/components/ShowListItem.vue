<script lang="ts" setup>
import type { Show } from "@/types/shows.model";
import type { Prop } from "vue";

const props = defineProps({ showItem: Object as Prop<Show> });
const emit = defineEmits<{
  (e: "onClick", id: number): void;
}>();

function onCardClick() {
  if (props.showItem?.id) {
    emit("onClick", props.showItem.id);
  }
}
</script>
<template>
  <a v-if="showItem" class="card" @click="onCardClick">
    <div class="card-image">
      <figure class="image img-container m-auto">
        <img :src="showItem?.image?.original" :alt="showItem.name" />
      </figure>
    </div>
    <div class="card-content py-3">
      <div class="media">
        <div class="media-content">
          <p class="title is-6 ellipsis pb-2">{{ showItem?.name }}</p>
          <p class="subtitle mb-1 is-7 ellipsis">
            <strong>Category: </strong>
            <i v-for="(item, index) in showItem?.genres"
              >{{ item }}{{ index !== showItem?.genres.length - 1 ? ", " : "" }}
            </i>
          </p>
          <p class="subtitle mb-1 is-7">
            <strong>Rating:</strong> {{ showItem?.rating.average }}
          </p>
          <p class="subtitle mb-1 is-7">
            <strong>Year:</strong> {{ showItem?.premiered }}
          </p>
        </div>
      </div>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.card {
  width: 200px;
  height: 380px;
  margin: 10px;
  overflow: hidden;
  &:hover {
    transform: scale(1.02);
    transition-property: transform;
    transition-duration: 0.2s;
  }
}
@media screen and (max-width: 899px) {
  .card {
    width: 15rem;
    margin: 10px auto;
  }
}

.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.img-container {
  width: 200px;
  height: 250px;
  overflow: hidden;
  img {
    height: 250px;
  }
}
</style>
