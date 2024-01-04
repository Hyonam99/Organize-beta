<script>
	import { SvelteUIProvider } from '@svelteuidev/core';
    import "../_base.scss";

</script>

<SvelteUIProvider themeObserver="dark">
	<nav>
        <div class="logo">Organize</div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/view-task">All tasks</a></li>
        </ul>
    </nav>
    
    <slot />
</SvelteUIProvider>
