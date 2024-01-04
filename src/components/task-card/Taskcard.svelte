<script lang="ts">
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
        <small>{cardProps.priority}</small>
        <h4>{cardProps.title}</h4>
        <p>{cardProps.desc.substring(0, 56)}...</p>
    </aside>
    <div class="task_card_delete-btn">
        <button on:click={() => { handleDelete(cardProps.id)}}>x</button>
    </div>
</div>