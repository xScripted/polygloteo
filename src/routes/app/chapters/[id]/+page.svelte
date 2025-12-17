<script lang="ts">
  import { page } from '$app/state'

  const id = $derived(page.data.id)
</script>

{id}
