export default [
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  // {
  //   name: "strapi::cors",
  //   config: {
  //     origin: ["http://localhost:3000", "https://localhost:1337"],
  //     methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
  //     headers: ["Content-Type", "Authorization", "Origin", "Accept"],
  //     keepHeaderOnError: true,
  //   },
  // },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
