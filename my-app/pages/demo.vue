<template>
  <div>
    <div>
    <div class="content">
      <div class="inner">
        <div class="save-btn">
          <button @click="showModal = true">Save</button>
        </div>
      </div>
    </div>
    <SavedModal v-show="showModal" @close-modal="showModal = false" greeting-message="hello" />
  </div>
  <div>
    <div class="content">
      <div class="inner">
        <div class="save-btn">
          <button @click="showModal = true">jahangir</button>
        </div>
      </div>
    </div>
    <SavedModal v-show="showModal" @close-modal="showModal = false" greeting-message="jahangit" />
  </div>
  </div>

</template>

<script>
import SavedModal from '~/components/SavedModal.vue'

export default {
  components: { SavedModal },
  data() {
    return {
      showModal: false,
    }
  },
}
</script>

<style scoped>
.content {
  padding: 150px;
}

.inner {
  margin: auto;
  width: 65%;
}

.top-div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
}

.add-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-radius: 10px;
  width: 160px;
}

h6 {
  font-size: 25px;
  font-weight: 500;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
}

label {
  margin-bottom: 10px;
}

input {
  border: 1px solid #00000041;
  height: 40px;
  padding: 10px;
  border-radius: 8px;
  width: 400px;
}

.input-row {
  display: flex;
  justify-content: space-between;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}

.save-btn {
  text-align: center;
  margin-top: 50px;
}
</style>