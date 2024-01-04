<script lang="ts">
    import { TaskStore } from "$store/store.js"
    import TaskPriority from "../task-priority/TaskPriority.svelte";
    import { faker } from "@faker-js/faker"
    import type { TaskDTO } from "$lib/types/custom.d.js";
    import "./task-input.scss"
    export let inputValueProps = {
        taskId: "",
        title: "",
        desc: "",
        priority: ""
    }
    export let isEdit = false
    export let closeModal = () => {}

    let isError = false
    let {taskId, title, desc, priority} = inputValueProps


    const resetForm = () => {
        taskId = ""
        title = ""
        desc = ""
        priority = ""
    }

    const validate = () => {
        return isError = (title === "" || desc === "" || priority === "")
    }

    const handleSubmit = () => {

        validate()

        if(isError) return

        if (isEdit) {
            const newTask: TaskDTO = {id: taskId, title, desc, priority}
            TaskStore.update((tasks: TaskDTO[]) => {
                const getIndex = tasks.findIndex(item => item.id === taskId)

                const updatedArr = tasks.map((task) => {
                    if(getIndex !== -1 && task.id == taskId){
                        return newTask;
                    } else {
                        return task
                    }
                })

                return updatedArr    
            })

            resetForm()
            closeModal()
            return
        }

        const newTask: TaskDTO = {id: faker.string.uuid(), title, desc, priority}
        TaskStore.update((tasks: TaskDTO[]) => {
            return [newTask, ...tasks]

        })
        resetForm()
    }

    const handleSelected = (e: any) => {
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

        {#if isError}
            <small>input fields and priority cannot be empty</small> 
        {/if}
    </form>
</div>
