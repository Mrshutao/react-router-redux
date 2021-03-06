export default {
	event: {},
	arrayRemove: function(arr, obj) {
		if (arr[arr.length - 1] === obj) arr.pop();
		else arr.splice(this.arrayIndexOf(arr, obj), 1);
	},
	arrayIndexOf: function(arr, obj) {
		for (var i = 0, len = arr.length; i < len; i++) if (arr[i] === obj) return i;
		return -1;
	},
	subscribe: function(name, callback, once, insertFirst) {
		var event = this.event;
		if (!event[name]) {
			event[name] = [];
		}
		if (!insertFirst) {
			event[name].push({ cb: callback, once: !!once });
		} else {
			event[name].splice(0, 0, { cb: callback, once: !!once });
		}
		return this;
	},
	unsubscribe: function(name, callback) {
		var event = this.event;
		if (!event[name]) {
			event[name] = [];
		}
		let eArr = event[name];
		if (!callback) {
			event[name] = [];
		} else {
			for (let i = 0; i < eArr.length; i++) {
				if (eArr[i].cb === callback) {
					this.arrayRemove(eArr, eArr[i]);
					i--;
				}
				if (eArr.length === 0) {
					delete event[name];
				}
			}
		}
	},
	publish: function(name, arg, scope) {
		console.log(name, arg);
		let eArr = this.event[name],
			tmp = {};
		if (eArr) {
			for (let i = 0; i < eArr.length; i++) {
				tmp = Object.assign({}, arg);
				if (eArr[i].cb.call(scope || this, tmp) === false) {
					break;
				}
				if (eArr[i].once) {
					this.arrayRemove(eArr, eArr[i]);
					i--;
				}
			}
			if (eArr.length === 0) {
				delete this.event[name];
			}
		} else {
			console.warn('没有注册事件 e:' + name);
		}
	},
};
