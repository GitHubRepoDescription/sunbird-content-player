EventManager = {
	appEvents: ['enter', 'exit', 'remove', 'add', 'replace', 'show', 'hide'],
	registerEvents: function(plugin, data) {
		var events = undefined;
		if(data.events) {
			if (_.isArray(data.events)) {
				events = [];
				data.events.forEach(function(e) {
					events.push.apply(events, e.event);
				});
			} else {
				events = data.events.event
			}
		} else {
			events = data.event;
		}
		if(_.isArray(events)) {
			events.forEach(function(e) {
				EventManager.registerEvent(e, plugin);
			});
		} else if(events) {
			EventManager.registerEvent(events, plugin);
		}
	},
	registerEvent: function(evt, plugin) {
		var register = true;
		// Conditional evaluation to register event.
		if (evt['ev-if']) {
			var expr = evt['ev-if'].trim();
			if (!(expr.substring(0,2) == "${")) expr = "${" + expr;
            if (!(expr.substring(expr.length-1, expr.length) == "}")) expr = expr + "}"
			register = plugin.evaluateExpr(expr);
		}
		if (register) {
			plugin.events.push(evt.type);
			if(_.contains(EventManager.appEvents, evt.type) || _.contains(plugin.appEvents, evt.type)) { // Handle app events
				plugin.on(evt.type, function() {
					EventManager.handleActions(evt, plugin);
				});
			} else { // Handle mouse events
				var element = plugin._self;
				if (element) {
					if(plugin._type == 'div') {
						element = plugin._self.htmlElement;
						element.style.cursor = 'pointer';
					} else {
						element.cursor = 'pointer';
					}
					element.addEventListener(evt.type, function(event) {
						EventManager.processMouseTelemetry(evt, event, plugin);
						EventManager.handleActions(evt, plugin);
					});	
				} else {
					console.log("Element is null:", plugin);
				}
			}
		}
	},
	dispatchEvent: function(id, event) {
		var plugin = PluginManager.getPluginObject(id);
		if(_.contains(EventManager.appEvents, event) || _.contains(plugin.appEvents, event)) { // Dispatch app events
			plugin.dispatchEvent(event);
		} else { // Dispatch touch events
			plugin._self.dispatchEvent(event);
		}
	},
	handleActions: function(evt, plugin) {
		if(_.isArray(evt.action)) {
			evt.action.forEach(function(action) {
				EventManager.handleAction(action, plugin);
			});
		} else if(evt.action) {
			EventManager.handleAction(evt.action, plugin);
		}
	},
	handleAction: function(action, plugin) {
		var handle = true;
		// Conditional evaluation for handle action.
		if (action['ev-if']) {
			var expr = action['ev-if'].trim();
			if (!(expr.substring(0,2) == "${")) expr = "${" + expr;
            if (!(expr.substring(expr.length-1, expr.length) == "}")) expr = expr + "}"
			handle = plugin.evaluateExpr(expr);
		}
		if (handle) {
			var stage = plugin._stage;
			if (!stage || stage == null) {
				stage = plugin;
			}
			if (stage && stage._type === 'stage') {
				if(action.param) {
					action.value = stage.params[action.param] || '';
				}
				if (action.asset_param) {
					action.asset = stage.params[action.asset_param] || '';
				} else if (action.asset_model) {
					action.asset = stage.getModelValue(action.asset_model) || '';
				}
			}
			if(action.type === 'animation') {
				AnimationManager.handle(action, plugin);
			} else {
				if(action.delay) {
					TimerManager.start(action);
				} else {
					CommandManager.handle(action);
				}
			}
		}
	},
	processMouseTelemetry: function(action, event, plugin) {
		var data = {
			type: event.type,
			x: event.stageX,
			y: event.stageY
		}
		var type = TelemetryService.getMouseEventMapping()[action.type];
		EventManager.processAppTelemetry(action, type, plugin, data);
	},
	processAppTelemetry: function(action, type, plugin, data) {
		if(!plugin) {
			plugin = {_data: {id: '', asset: ''}};
		}
		if(!action) {
			action = {disableTelemetry: true};
		}
		if(action.disableTelemetry !== true) {
			if(type) {
				var id = plugin._data.id || plugin._data.asset;
				if (!id) {
					id = action.asset;
				}
				if (!id) {
					var actionObj = action.action;
					if (_.isArray(actionObj) && actionObj.length >= 1) {
						actionObj = actionObj[0];
					}
					if (actionObj)
						id = actionObj.asset;
				}
				if (!id) {
					id = plugin._type || 'none';
				}
				if (id) {
					if (data)
						data.stageId = Renderer.theme._currentStage;
					// console.log("inside processAppTelemetry.....");
					TelemetryService.interact(type, id, type, data ? data : {stageId : Renderer.theme._currentStage});
				}
			}
		}
	}
}