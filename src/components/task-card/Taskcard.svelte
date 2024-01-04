<script lang="ts">
	import TaskStatus from "$components/task-status/TaskStatus.svelte";
    import { TaskStore } from "$store/store"
    import type { TaskDTO } from "$lib/types/custom.d.js";
    import "./taskcard.scss";

    export let cardProps: TaskDTO

    const handleDelete = (id: string) => {
        TaskStore.update((tasks) => {
            return tasks.filter(item => item.id !== id)
        })
    }
</script>

<div class="task_card_container">
    <aside>
        <TaskStatus status={cardProps.priority} />
        <h4>{cardProps.title}</h4>
    </aside>
    <div class="task_card_options">
        <a href="/view-task/{cardProps.id}">view</a>
        <button on:click={() => { handleDelete(cardProps.id)}}>x</button>
    </div>
</div>
