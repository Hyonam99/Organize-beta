<script lang="ts">
    import "./task-status.scss"
    export let status:string = ""

    $:low = status === "low"
    $:important = status === "important"
    $:urgent = status === "urgent"
</script>

{#if low}     
    <div class="status low">
        Low
    </div>
{/if}

{#if important}     
    <div class="status important">
        Important
    </div>
{/if}

{#if urgent}     
    <div class="status urgent">
        Urgent
    </div>
{/if}
