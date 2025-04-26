import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    build: {
        chunkSizeWarningLimit: 2000,
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    // css: {
    //     preprocessorOptions: {
    //         scss: {
    //             api: "modern-compiler",
    //             additionalData: `@use "@/app/assets/styles/vars" as *;`,
    //         },
    //     },
    // },
});
