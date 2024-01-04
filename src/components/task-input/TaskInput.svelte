<script lang="ts">
    import { TaskStore } from "$store/store.js"
    import TaskPriority from "../task-priority/TaskPriority.svelte";
    import { faker } from "@faker-js/faker"
    import type { TaskDTO } from "$lib/types/custom.d.js";
    import "./task-input.scss"
    let title = ""
    let desc = ""
    let priority = ""

    const resetForm = () => {
        title = ""
        desc = ""
        priority = ""
    }

    const handleSubmit = () => {
        const newTask: TaskDTO = {id: faker.string.uuid(), title, desc, priority}
        TaskStore.update((tasks: TaskDTO[]) => {
            return [newTask, ...tasks]

        })
        resetForm()
    }

    const handleSelected = (e: { detail: string; }) => {
        priority = e.detail
    }
</script>

<div class="task_input_container">
    <form on:submit|preventDefault={handleSubmit}>
        <label for="title">
            Title:
            <input type="text" name="title" id="title" bind:value={title}/>
        </label>

        <label for="desc">
            Description: 
            <textarea name="desc" id="desc" rows="4" bind:value={desc}/>
        </label>

        <TaskPriority on:select-priority={handleSelected} {priority}/>

        <button type="submit">save</button>
    </form>
</div>
