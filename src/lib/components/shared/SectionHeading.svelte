<script lang="ts">
  export let title: string;
</script>

<h2>{title}</h2>

<style>

  h2 {
    font-size: 18px;
  }

  @media screen and (min-width: 600px) {
    
  h2 {
    font-size: 20px;
  }

  }
</style>