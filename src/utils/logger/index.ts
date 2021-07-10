export default class Logger {
  public log<C extends string>(content: C) {
    console.log("🛹 Info:", content)
  }
  public error<C extends string>(content: C) {
    console.log("💀 Error:", content)
  }
}