"use strict";

// Shared code
function applyTemplate(lines) {
    const frontmatter = ["# "];
    const backmatter = ["---", "tags: ", "source: "];
    function inserted(arr, idx, item) {
        const bef = arr.slice(0, idx);
        const aft = arr.slice(idx, arr.length);
        return bef.concat([item], aft);
    }

    if (!lines[0].startsWith("# ")) {
        lines = frontmatter.concat(lines)
    }

    if (lines[1] !== "") {
        lines = inserted(lines, 1, "")
    }

    if (lines[lines.length - backmatter.length] !== "---") {
        lines = lines.concat(backmatter)
    }

    if (lines[lines.length - backmatter.length - 1] !== "") {
        lines = inserted(lines, lines.length - backmatter.length, "")
    }
    return lines
}

// 1Writer specific
const lines = applyTemplate(editor.getText().split("\n"));
editor.setText(lines.join("\n"));
editor.setSelectedRange(2)
