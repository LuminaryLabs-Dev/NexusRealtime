export function createIdempotencyLedger(initialRecords = {}) {
  const records = new Map(Object.entries(initialRecords));
  return {
    claim(key, resultFactory = () => ({ accepted: true })) {
      const id = String(key);
      if (records.has(id)) {
        return { id, accepted: false, duplicate: true, result: structuredClone(records.get(id)) };
      }
      const result = resultFactory(id);
      records.set(id, structuredClone(result));
      return { id, accepted: true, duplicate: false, result: structuredClone(result) };
    },
    has(key) {
      return records.has(String(key));
    },
    get(key) {
      return structuredClone(records.get(String(key)));
    },
    snapshot() {
      return Object.fromEntries(Array.from(records.entries()).map(([key, value]) => [key, structuredClone(value)]));
    },
    reset(nextRecords = {}) {
      records.clear();
      for (const [key, value] of Object.entries(nextRecords)) records.set(key, structuredClone(value));
      return this.snapshot();
    }
  };
}
