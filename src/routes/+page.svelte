<script>
	import Taskcard from "$components/task-card/Taskcard.svelte";
	import TaskInput from "$components/task-input/TaskInput.svelte";
	import { TaskStore } from "$store/store";
	import "./main.scss";

	$: minifyTask = $TaskStore.slice(0, 3)
	$: totalTask = $TaskStore.length;
	$: urgentTasks = $TaskStore.filter(
		(item) => item.priority === "urgent"
	).length;
</script>

<main>
	<h3>Create Tasks !</h3>

	<section class="organize_header">
		<p>Total tasks: {totalTask}</p>
		<p>Urgent tasks: {urgentTasks}</p>
	</section>

	<section>
		<TaskInput />
	</section>

	<section class="organize_task-cards">
		{#each minifyTask as task (task.id)}
			<Taskcard cardProps={task} />
		{/each}
	</section>
</main>
