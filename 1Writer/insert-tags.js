"use strict";
// Configure
const multiSelect = true;
const itemsFile = "tags.md";
const uiTitle = "Select Tags";

function formatItem(item) {
  return item;
}

// Shared logic
const path = editor.getFolderPath() + "/";
const file = path + editor.getFileName();
const range = editor.getSelectedRange();

let items = "";

function loadItems() {
  items = editor.getText();
  editor.openFile(file, "edit", presentItems);
}

function presentItems() {
  ui.list(uiTitle, items.split("\n"), multiSelect, selectedValues => {
    if (!selectedValues) {
      return;
    }
    const itemSelection = selectedValues.map(formatItem).join(multiSelect ? " " : "");
    editor.setSelectedRange(range[0], range[1]);
    editor.replaceSelection(itemSelection);
  })
}

editor.openFile(path + itemsFile, "edit", loadItems);
