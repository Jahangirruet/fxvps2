<template>
    <NuxtLayout>
    <div :style="{ backgroundImage: `url(${image})`}">
        jddfhsdhjskjhdkdjkskdjs<br />
        jddfhsdhjskjhdkdjkskdjs<br />
        jddfhsdhjskjhdkdjkskdjs<br />
        jddfhsdhjskjhdkdjkskdjs<br />
        jddfhsdhjskjhdkdjkskdjs<br />
        jddfhsdhjskjhdkdjkskdjs<br />
        jddfhsdhjskjhdkdjkskdjs<br />
        jddfhsdhjskjhdkdjkskdjs<br />
        jddfhsdhjskjhdkdjkskdjs<br />
        jddfhsdhjskjhdkdjkskdjs<br />
        jddfhsdhjskjhdkdjkskdjs<br />
        jddfhsdhjskjhdkdjkskdjs<br />
      <h1>This is the About page</h1>
    </div>
    </NuxtLayout>
  </template>
  
  <script>
  import bgimg from "assets/images/homepage-background.png";
  export default {
    data() {
      return {
        image: bgimg,
      };
    }
  };
  </script>