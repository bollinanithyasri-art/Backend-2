const routes = {
  home: { message: "Backend Development Lab API" },
  about: {
    message:
      "A backend development lab demonstrating HTTP routes with Node.js.",
  },
};

module.exports = (req, res) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const route = req.query.route || "home";
  if (route === "time") {
    return res.status(200).json({ time: new Date().toISOString() });
  }

  const response = routes[route];
  if (!response) {
    return res.status(404).json({ error: "Not found" });
  }

  return res.status(200).json(response);
};
