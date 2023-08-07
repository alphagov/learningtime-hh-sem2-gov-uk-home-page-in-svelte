
<script>
  /**
	 * @type {any}
	 */
    export let num;
    /**
	 * @type {any}
	 */
    export let title;
</script>

<div>
  <a href="https://www.google.co.uk/" style="--num:'{num}'; --title:'{title}';"> <!-- for some weird reason the num and title variables needs to be wrapped in quotes again??? This is a hack to allow props to change the a::before/after content value using CSS variables. This is difficult because a::before/after is not written directly in the html and javascript variables can't be interpolated into css directly -->
  </a>
</div>

<style>

div {
  /* fit content inside the div so whole area is a tag hyperlink */ 
  width: fit-content;
}

a {
  font-weight: bold;
  color: #1d70b8;
  text-decoration: none;
}

a::before {
  content: var(--num);
  font-size: 5rem;
  display: block;
}

a::after {
  content: var(--title);
}

</style>

