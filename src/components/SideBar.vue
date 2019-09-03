<template>
    <div class="sidebar">
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot name="content"></slot>
        </main>
    </div>
</template>

<script>
    export default {
        name: "SideBar"
    }
</script>

<style scoped>
    .sidebar {

        background-color: #fff;
    }
 .sidebar header {

     font-size: 14px;
     background-color: #F6F6F6;
     padding: 10px 0;
     padding-left: 10px;
 }

    .sidebar main {
        padding:10px 0;
        padding-left: 10px;

    }
</style>
