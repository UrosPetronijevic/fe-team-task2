import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const isLoggedIn = ref<boolean>(
    localStorage.getItem("isLoggedIn") === "true"
  );

  function login(): void {
    isLoggedIn.value = true;
    localStorage.setItem("isLoggedIn", "true");
  }

  function logout(): void {
    isLoggedIn.value = false;
    localStorage.removeItem("isLoggedIn");
  }

  return { isLoggedIn, login, logout };
});
