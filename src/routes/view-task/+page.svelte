<script>
	import Taskcard from "$components/task-card/Taskcard.svelte";
	import { TaskStore } from "$store/store"
	console.log($TaskStore)

</script>

<main>
	<section class="view_tasks">
		{#each $TaskStore as task (task.id)}
			<Taskcard cardProps={task} />
		{/each}
	</section>
</main>
