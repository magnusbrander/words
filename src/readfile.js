import { readFileSync } from "fs";

/**
 *
 * @param {string} path
 * @returns {string[]} lines
 */
function readFileLines(path) {
	try {
		const data = readFileSync(path, "utf8");
		return data.split("\n");
	} catch (err) {
		console.error(err);
		return [];
	}
}

export { readFileLines };
