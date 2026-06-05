export class OrcheX {
  constructor(apiKey = null) {
    this.apiKey = apiKey;
  }

  health() {
    return { status: "ok", service: "orchex" };
  }
}
