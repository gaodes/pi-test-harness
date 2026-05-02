/**
 * @gaodes/pi-test-harness
 *
 * Test harness for pi extensions — playbook-based model mocking,
 * session testing, sandbox install verification.
 */

// Mock Pi
export { createMockPi } from "./mock-pi.js";
// Errors
export { ToolBlockedError } from "./mock-tools.js";
// DSL builders
export { calls, says, when } from "./playbook.js";
// Sandbox
export { verifySandboxInstall } from "./sandbox.js";
// Session
export { createTestSession } from "./session.js";
// Types
export type {
	MockPi,
	MockPiCall,
	MockToolHandler,
	MockUIConfig,
	PlaybookAction,
	SandboxOptions,
	SandboxResult,
	TestEvents,
	TestSession,
	TestSessionOptions,
	ToolCallRecord,
	ToolResultRecord,
	Turn,
	UICallRecord,
} from "./types.js";

// Utilities
export { safeRmSync } from "./utils.js";
