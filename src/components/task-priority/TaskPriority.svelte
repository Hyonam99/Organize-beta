<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import "./task-priority.scss";

	export let priority = "low";
	const dispatch = createEventDispatcher();
	const handleChange = (e: any) => {
		dispatch("select-priority", e.target.defaultValue);
	};
</script>

<div class="task_priority_container">
	<label for="low">
		low
		<input
			type="radio"
			name="priority"
			id="low"
			value="low"
			on:change={handleChange}
			checked={priority === "low"}
		/>
	</label>
	<label for="important">
		important
		<input
			type="radio"
			name="priority"
			id="important"
			value="important"
			on:change={handleChange}
			checked={priority === "important"}
		/>
	</label>
	<label for="urgent">
		urgent
		<input
			type="radio"
			name="priority"
			id="urgent"
			value="urgent"
			on:change={handleChange}
			checked={priority === "urgent"}
		/>
	</label>
</div>
