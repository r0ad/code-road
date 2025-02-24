<template>
  <div class="busuanzi-container">
    <div class="counter-item">
      <span class="icon">👤</span>
      <span id="busuanzi_container_site_uv" style="display: inline">
        访客数 <span id="busuanzi_value_site_uv" class="counter-number"></span> 人
      </span>
    </div>
  </div>
</template>

<style scoped>
.busuanzi-container {
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 0.1rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.counter-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon {
  font-size: 1.2rem;
}

.counter-number {
  color: var(--vp-c-brand);
  font-weight: 600;
}
</style> 