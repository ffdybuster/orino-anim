/**
 * @copyright 2018 Orino Labs GmbH
 * @author Michael Bürge <mib@orino.ch>
 */


export { Animation } from './animation.js';
export { AnimationState } from './animationstate.js';
export { Conductor } from './conductor.js';
export { FpsMonitor } from './fpsmonitor.js';


// TS doesn't declare DOMHighResTimeStamp by default, therefore declaring it here.
// It seems the web animations definition file is still work in progress.
// See https://gist.github.com/kritollm/bdaa485cf81bbde304b618b7b7d5e2ea
export type DOMHighResTimeStamp = number;


// HACK: Provide Animation class with the root conductor.
// This avoids a cyclic dependency issue occuring in ES6 and tsickle/closure-compiler
// environments, which can't have cyclic load-time dependencies.
import { Animation } from './animation.js';
import { Conductor } from './conductor.js';
Animation.rootConductor = new Conductor;
