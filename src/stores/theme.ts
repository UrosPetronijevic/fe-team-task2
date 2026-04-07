import { defineStore } from "pinia";
import { ref } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const stored = localStorage.getItem("isDark");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const isDark = ref<boolean>(
    stored !== null ? stored === "true" : prefersDark
  );

  function applyTheme(): void {
    if (isDark.value) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  function toggleTheme(): void {
    isDark.value = !isDark.value;
    localStorage.setItem("isDark", String(isDark.value));
    applyTheme();
  }

  applyTheme();

  return { isDark, toggleTheme };
});
