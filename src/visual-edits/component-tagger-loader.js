// A minimal Turbopack/webpack-style loader stub.
//
// This project’s `next.config.ts` wires this loader for *.{jsx,tsx} files.
// Some templates use it to tag components for in-browser visual editing.
// The original implementation isn't present in this repo, so we provide a
// no-op loader to keep `next dev --turbopack` working.
//
// Loader contract: function(source) { return source }
// See: https://webpack.js.org/api/loaders/

/**
 * @param {string} source
 */
module.exports = function componentTaggerLoader(source) {
  return source;
};
