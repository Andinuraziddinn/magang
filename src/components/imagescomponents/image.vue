<template>
      <img :src="src" class="d-block w-100" alt="...">
</template>
<script>
export default {
    props: {
        src:{
            type: String
        }
    }
}

</script>