import { StartFunc as StartFuncFromLoadAnchorId } from './LoadAnchorId/entryFile.js';
import { StartFunc as StartFuncFromLoadDoctorsId } from './LoadDoctorsId/entryFile.js';

const StartFunc = () => {
	StartFuncFromLoadAnchorId();
	StartFuncFromLoadDoctorsId();
};

export { StartFunc };