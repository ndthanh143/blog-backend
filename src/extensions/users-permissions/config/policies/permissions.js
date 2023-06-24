if (ctx.request && ctx.request.header && !ctx.request.header.authorization) {
  const accessToken = ctx.cookies.get("access_token");
  if (accessToken) {
    ctx.request.header.authorization = "Bearer " + accessToken;
  }
}
