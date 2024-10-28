{
    "version": 2,
    "builds": [
        {
            "src": "frontend/package.json",
            "use": "@vercel/static-build",
            "config": {
                "distDir": "frontend/dist"
            }
        },
        {
            "src": "server/index.js", // Adjust path to your server entry point
            "use": "@vercel/node"
        }
    ],
    "routes": [
        {
            "src": "/api/(.*)",
            "dest": "/server/index.js" // Adjust to your server entry point
        },
        {
            "src": "/(.*)",
            "dest": "/frontend/dist/$1"
        }
    ]
}
