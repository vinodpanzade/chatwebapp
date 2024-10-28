{
    "version": 2,
    "builds": [
        {
            "src": "src/main.js", // Adjust if your entry file is different
            "use": "@vercel/static-build",
            "config": {
                "distDir": "dist" // This is where Vite puts the build output
            }
        },
        {
            "src": "server/index.js", // Adjust to your server entry point
            "use": "@vercel/node" // Ensure this points to your Node.js server
        }
    ],
    "routes": [
        {
            "src": "/api/(.*)",
            "dest": "/server/index.js" // Ensure this points to your backend
        },
        {
            "src": "/(.*)",
            "dest": "/dist/index.html" // Ensure this points to your frontend build output
        }
    ]
}
