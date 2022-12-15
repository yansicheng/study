export function changeOriginalRouterApi(VueRouter) {
  // 由于 vue-router 现在的版本会输出 Promise，重写 push 和 replace 解决问题
  const originalPush = VueRouter.prototype.push
  VueRouter.prototype.push = rewriteRouterApi(originalPush)
  const originalReplace = VueRouter.prototype.replace
  VueRouter.prototype.replace = rewriteRouterApi(originalReplace)
  function rewriteRouterApi(handleName) {
    return function (location, onResolve, onReject) {
      if (onResolve || onReject) {
        return handleName.call(this, location, onResolve, onReject)
      }
      return handleName.call(this, location).catch((err) => err)
    }
  }
}
