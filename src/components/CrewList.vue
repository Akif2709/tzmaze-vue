<script setup lang="ts">
    import type { CrewItem } from "@/types/crew.model";
    import type { Prop } from "vue";
    
    defineProps({
      crew: Object as Prop<CrewItem[]>,
    });
    </script>
    
    <template>
      <div v-if="crew">
        <section class="section py-1">
        <pre>{{crew}}</pre>
        </section>
      </div>
    </template>
    
    <style lang="scss">
    
    </style>
    