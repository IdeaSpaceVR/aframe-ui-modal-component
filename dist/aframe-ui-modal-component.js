/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/**
	 * UI modal component for A-Frame.
	 */

	if (typeof AFRAME === 'undefined') {
	  throw new Error('Component attempted to register before AFRAME was available.');
	}

	AFRAME.registerComponent('ui-modal', {

	    schema: {
	        trigger: {
	            default: 'click'
	        },
	        triggerElement: {
	          default: 'a-scene',
	        },
	        zpos: {
	            default: -4
	        }
	    },

	    init: function() { 

	        document.querySelector(this.data.triggerElement).addEventListener(this.data.trigger, this.eventHandler.bind(this));

	        this.cameraEl = document.querySelector('a-entity[camera]');

	        this.yaxis = new THREE.Vector3(0, 1, 0);
	        this.zaxis = new THREE.Vector3(0, 0, 1);

	        this.pivot = new THREE.Object3D();
	        this.el.object3D.position.set(0, this.cameraEl.object3D.getWorldPosition().y, this.data.zpos);

	        this.el.sceneEl.object3D.add(this.pivot);
	        this.pivot.add(this.el.object3D);

	    },

	    eventHandler: function(evt) {

	        if (this.el.getAttribute('visible') === false) {

	            var direction = this.zaxis.clone();
	            direction.applyQuaternion(this.cameraEl.object3D.quaternion);
	            var ycomponent = this.yaxis.clone().multiplyScalar(direction.dot(this.yaxis));
	            direction.sub(ycomponent);
	            direction.normalize();

	            this.pivot.quaternion.setFromUnitVectors(this.zaxis, direction);
	            this.pivot.position.copy(this.cameraEl.object3D.getWorldPosition());

	            this.el.setAttribute('visible', true);

	        } else if (this.el.getAttribute('visible') === true) {

	            this.el.setAttribute('visible', false);
	        }

	    },

	    update: function (oldData) {},

	    remove: function() {}

	});




/***/ }
/******/ ]);