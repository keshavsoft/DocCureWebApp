import { StartFunc as StartFuncFormAddListeners } from "./AddListeners/entryFile.js";

const StartFunc = () => {
	StartFuncFormAddListeners();
	LocalFuncRunClickEvents();
};

const LocalFuncRunClickEvents = () => {
	const autoClickButton = document.getElementById("LoadAnchorId");

	autoClickButton.click();

	const LoadDoctorsId = document.getElementById("LoadDoctorsId");

	LoadDoctorsId.click();
};

export { StartFunc };