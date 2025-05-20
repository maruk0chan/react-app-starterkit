import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        watch: {
            usePolling: true,
        },
        fs: {
            cachedChecks: false,
        },
    },
    base: "/react-app-starterkit/",
});
