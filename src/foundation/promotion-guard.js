export const FORBIDDEN_CORE_RUNTIME_PATTERNS = Object.freeze([
  { label: "Date.now", pattern: /\bDate\.now\s*\(/ },
  { label: "performance.now", pattern: /\bperformance(?:\?\.)?now(?:\?\.)?\s*\(/ },
  { label: "Math.random", pattern: /\bMath\.random\s*\(/ },
  { label: "crypto.getRandomValues", pattern: /\bcrypto\.getRandomValues\s*\(/ },
  { label: "requestAnimationFrame", pattern: /\brequestAnimationFrame\b/ },
  { label: "document", pattern: /\bdocument\b/ },
  { label: "HTMLCanvasElement", pattern: /\bHTMLCanvasElement\b/ },
  { label: "WebGL", pattern: /\bWebGL\b/ },
  { label: "AudioContext", pattern: /\bAudioContext\b/ },
  { label: "PointerEvent", pattern: /\bPointerEvent\b/ }
]);

export function scanSourceForPromotionViolations(source = "", patterns = FORBIDDEN_CORE_RUNTIME_PATTERNS) {
  return patterns
    .filter(({ pattern }) => pattern.test(source))
    .map(({ label }) => label);
}

export function assertPromotionSafeSource(source = "", label = "source") {
  const violations = scanSourceForPromotionViolations(source);
  if (violations.length) {
    throw new Error(`${label} has forbidden core runtime pattern(s): ${violations.join(", ")}`);
  }
  return true;
}
