<script>
	import Taskcard from "$components/task-card/Taskcard.svelte";
	import { TaskStore } from "$store/store"

</script>

<main>
	<section class="view_tasks">
		{#each $TaskStore as task (task.id)}
			<a href="/view-task/{task.id}">
				<Taskcard cardProps={task} />
			</a>
		{/each}
	</section>
</main>
