<template>
  <div>
    <component
      :is="seoHeadingtype"
      v-if="title"
      :id="`title-${idx}`"
      :key="title"
      ref="container"
      class="title-animation font-weight-bold"
      :class="[contentBlockHeaderClass()]"
    >
      <span v-for="(titlePart, index) in dividedTitle" :key="index">
        <span v-html="titlePart" /> &nbsp;
      </span>
    </component>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, computed, onMounted } from "vue";
const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  delay: {
    type: Number,
    default: 0,
  },

  headingType: {
    type: String,
    default: "h2",
  },

  idx: {
    type: Number,
    default: 0,
  },
});

const isInView = ref(false);
const container = ref();
const options = ["h1", "h2", "h3", "h4", "h5", "h6"];
const seoHeadingtype = computed(() =>
  options.includes(props.headingType) ? props.headingType : "h2"
);
const dividedTitle = computed(() =>
  props.title.split(" ").filter((part) => part !== "")
);

const opmaakOptions: Record<string, string> = {
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  h4: "text-h4",
};

function contentBlockHeaderClass() {
  const size = props.visualSize ? props.visualSize : props.headingType;
  return opmaakOptions[size] || "text-h2";
}

onMounted(() => {
  if (!props.title) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isInView.value = true;
          container.value?.classList.add("animate");

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  if (container.value) {
    observer.observe(document.querySelector(`#title-${props.idx}`));
  }
});
</script>

<style lang="scss" scoped>
/* Title animation */
.title-animation {
  margin: -10px 0;
  padding: 10px 0;

  span {
    position: relative;
    display: inline-flex;
  }

  > span {
    line-height: 120%;
    overflow: hidden;
    margin: -2px 0;

    > span {
      margin: -10px 0;
      transform: translateY(100%);

      @media (max-width: 768px) {
        margin: 0;
      }
    }
  }

  &.animate {
    > span {
      @for $i from 0 through 100 {
        &:nth-of-type(#{$i}) {
          > span {
            animation-delay: $i * 0.18s;
          }
        }
      }

      > span {
        animation: headerTitle 1.2s forwards ease;
      }
    }
  }
}

@keyframes headerTitle {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
