<script lang="ts">
	import TaskStatus from "$components/task-status/TaskStatus.svelte";
	import TaskInput from "$components/task-input/TaskInput.svelte";
	import { TaskStore } from "$store/store";
	import { Modal } from "@svelteuidev/core";
	import "./view-task.scss";

	export let data;

	$:getTask = $TaskStore.find((item) => item.id === data.taskId);

	let opened = false;
	const inputValueProps = {
		taskId: `${getTask?.id}`,
        title: getTask?.title as string,
        desc: getTask?.desc as string,
        priority: getTask?.priority as string
    }
	console.log({inputValueProps})
	console.log({getTask})
	console.log({$TaskStore})

	const closeModal = () => {
		opened = false;
	};

</script>

<main>
	<section class="view_task-detail">
		<div class="edit-task-detail">
			<TaskStatus status={getTask?.priority} />
			<button on:click={() => (opened = true)}>edit</button>
		</div>
		<h3>{getTask?.title}</h3>
		<p>{getTask?.desc}</p>
	</section>
</main>

<Modal centered {opened} on:close={closeModal} title="Edit task">
	<TaskInput
		inputValueProps={{
			taskId: `${getTask?.id}`,
			title: `${getTask?.title}`,
			desc: `${getTask?.desc}`,
			priority: `${getTask?.priority}`
		}}
        isEdit
		{closeModal}
	/>
</Modal>
