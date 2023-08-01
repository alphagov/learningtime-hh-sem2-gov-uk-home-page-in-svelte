<div class="unordered-list-container">
  <slot />
</div>

<style>

.unordered-list-container {
  grid-template-columns: 1fr 1fr;
}

@media screen and (min-width: 900px) {
  .unordered-list-container {
    display: grid;
    column-gap: 15px;
    grid-template-columns: 2fr 1fr;
  }
}

</style>