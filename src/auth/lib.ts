const apiKeys = process.env.API_KEYS;

export function isAuth(req: any, res: any, next: any) {
  const key = req.header("X-API-KEY");
  console.log(key);
  if (key && (apiKeys ?? "").split(",").includes(key)) {
    next();
  } else {
    res.status(401).send("Access forbidden");
  }
}
