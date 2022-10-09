<script setup lang="ts">
import type { CrewItem } from "@/types/crew.model";
import type { Prop } from "vue";

defineProps({
  crew: Object as Prop<CrewItem[]>,
});
</script>

<template>
  <section class="section py-1">
    <div v-if="crew" class="is-flex is-flex-direction-row is-flex-wrap-wrap">
      <div
        class="card m-3 has-background-grey-dark has-text-primary-light"
        v-for="person in crew"
        :key="(person.type as string)"
        data-role="person-card-item"
      >
        <div class="card-image img-container">
          <figure class="m-auto">
            <img
              v-if="person.person.image?.original"
              :src="person.person.image?.original"
              :alt="person.person.name"
            />
            <img
              class="long-image"
              v-else
              src="../assets/placeholder-profile-img.webp"
              :alt="person.person.name"
            />
          </figure>
        </div>
        <div class="card-content py-3">
          <div class="media">
            <div class="media-content">
              <p
                class="title is-size-6 ellipsis mb-2 has-text-primary-light"
                data-role="crew-person-name"
              >
                {{ person?.person.name }}
              </p>
              <i
                class="is-size-7 mb-0 pb-0"
                v-for="(item, index) in person?.type"
                :key="item"
                >{{ item }}{{ index !== person.type.length - 1 ? ", " : "" }}
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.card {
  width: 13rem;
  margin: 10px auto;
  height: 350px;
  overflow: hidden;
  border: 1px solid grey;
}
.img-container {
  width: 100%;
  height: 250px;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    &.long-image {
      height: 250px;
    }
  }
}

.media-content {
  line-height: 1;
}
</style>
