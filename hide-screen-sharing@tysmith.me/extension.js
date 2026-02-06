const Main = imports.ui.main;

let indicator = null;

function enable() {
   indicator = Main.panel.statusArea["screenSharing"];

   if (indicator && indicator.container) {
      indicator.container.hide();
   }
}

function disable() {
   if (indicator && indicator.container) {
      indicator.container.show();
   }
}
