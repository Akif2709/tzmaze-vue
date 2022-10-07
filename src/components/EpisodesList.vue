<script setup lang="ts">
import type { Episode } from "@/types/episode.model";
import { computed } from "@vue/reactivity";
    import type { Prop } from "vue";
    
    const props = defineProps({
      episodes: Object as Prop<Episode[]>,
    });
    const orderedEpisodes = computed(()=>{
       return  props.episodes?.map(i =>{
        
       })
    })

    </script>
    
    <template>
      <div v-if="episodes">
        <section class="section py-1">
        <pre>{{episodes}}</pre>
        </section>
      </div>
    </template>
    
    <style lang="scss">
    
    </style>
    