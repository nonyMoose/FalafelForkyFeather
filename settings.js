function saveOptions(e) {
  e.preventDefault();

  browser.storage.sync.set({ 
  	ro: document.querySelector("#ro").value,
  	gov: document.querySelector("#gov").value,
  	suc: document.querySelector("#suc").value,
    jp: document.querySelector("#jp").value,
    disp: document.querySelector("#disp").value, 
    rmb: document.querySelector("#rmb").value,
  });
}

function restoreOptions() {
  function setCurrentChoice(result) {
	document.querySelector("#ro").value = result.ro || "Falafel";
	document.querySelector("#gov").value = result.gov || "Praise the Overseer!";
	document.querySelector("#suc").value = result.suc || "Raider Unity";
  document.querySelector("#jp").value = result.jp || "Suspicious";
  document.querySelector("#disp").value = result.disp || "212206";
  document.querySelector("#rmb").value = result.rmb || "falafel was here from [region]the brotherhood of malice[/region]";
  }

  function onError(error) {
	console.error(`Oh nyo: ${error}`);
  }

  let getting = browser.storage.sync.get();
  getting.then(setCurrentChoice, onError);

}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
