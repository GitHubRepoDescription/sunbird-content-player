describe('Shape Plugin test cases', function() {
    var data = {
        "theme": {
            "manifest": {
                "media": [{
                    "id": "validate",
                    "src": "https://sandbox-community.ekstep.in/assets/public/content/btn_ok_highlights_1460705843676.png",
                    "type": "image",
                    "assetId": "domain_38852"
                }, {
                    "id": "popupTint",
                    "src": "https://sandbox-community.ekstep.in/assets/public/content/PopupTint_1460636175572.png",
                    "type": "image",
                    "assetId": "domain_38606"
                }, {
                    "id": "goodjobBg",
                    "src": "https://sandbox-community.ekstep.in/assets/public/content/goodjobBg_1460727428389.png",
                    "type": "image",
                    "assetId": "domain_38939"
                }, {
                    "id": "retryBg",
                    "src": "https://sandbox-community.ekstep.in/assets/public/content/retryBg_1460727370746.png",
                    "type": "image",
                    "assetId": "domain_38938"
                }, {
                    "id": "retry_audio",
                    "src": "https://sandbox-community.ekstep.in/assets/public/content/retry_1460636610607.mp3",
                    "type": "sound",
                    "assetId": "domain_38624"
                }, {
                    "id": "goodjob_audio",
                    "src": "https://sandbox-community.ekstep.in/assets/public/content/goodJob_1460636677521.mp3",
                    "type": "sound",
                    "assetId": "domain_38625"
                }, {
                    "id": "next",
                    "src": "https://sandbox-community.ekstep.in/assets/public/content/btn_back_1461401700215.png",
                    "type": "image",
                    "assetId": "domain_40358"
                }, {
                    "id": "previous",
                    "src": "https://sandbox-community.ekstep.in/assets/public/content/btn_back_1461401700215.png",
                    "type": "image",
                    "assetId": "domain_40359"
                }, {
                    "id": "submit",
                    "src": "https://sandbox-community.ekstep.in/assets/public/content/icon_submit_1459243202199.png",
                    "type": "image",
                    "assetId": "domain_14524"
                }, {
                    "id": "home",
                    "src": "https://sandbox-community.ekstep.in/assets/public/content/icon_home_1459242981364.png",
                    "type": "image",
                    "assetId": "domain_14519"
                }, {
                    "id": "reload",
                    "src": "https://sandbox-community.ekstep.in/assets/public/content/icon_reload_1459243110661.png",
                    "type": "image",
                    "assetId": "domain_14522"
                }, {
                    "id": "icon_hint",
                    "src": "https://sandbox-community.ekstep.in/assets/public/content/icon_hint_1454918891133.png",
                    "type": "image",
                    "assetId": "domain_799"
                }, {
                    "id": "bg",
                    "src": "https://sandbox-community.ekstep.in/assets/public/content/background_1458729298020.png",
                    "type": "image"
                }, {
                    "id": "domain_665",
                    "type": "image",
                    "src": "https://sandbox-community.ekstep.in/assets/public/content/ekstep-placeholder-blue-eye1_1454412631459.png",
                    "assetId": "domain_665"
                }]
            },
            "template": [{
                "text": {
                    "model": "item.title",
                    "x": 9,
                    "y": 7,
                    "w": 86,
                    "h": 4,
                    "font": "Georgia",
                    "fontsize": 42
                },
                "mcq": {
                    "options": {
                        "layout": "table",
                        "x": 20,
                        "y": 15,
                        "w": 70,
                        "h": 85,
                        "cols": 2,
                        "marginX": 10,
                        "marginY": 5,
                        "options": "options"
                    },
                    "multi_select": false,
                    "model": "item"
                },
                "g": {
                    "image": {
                        "event": {
                            "action": [{
                                "type": "command",
                                "command": "stop",
                                "asset_model": "item.hints[0].asset"
                            }, {
                                "type": "command",
                                "command": "toggleShow",
                                "asset": "hint"
                            }],
                            "type": "click"
                        },
                        "asset": "speech_bubble",
                        "x": 0,
                        "y": 0,
                        "w": 100,
                        "h": 100
                    },
                    "text": [{
                        "x": 10,
                        "y": 20,
                        "w": 80,
                        "h": 80,
                        "font": "Georgia",
                        "weight": "bold",
                        "fontsize": 150,
                        "__text": "Hint"
                    }, {
                        "x": 10,
                        "y": 40,
                        "w": 80,
                        "h": 80,
                        "font": "Georgia",
                        "fontsize": 120,
                        "model": "item.hints[1].asset"
                    }],
                    "x": 9,
                    "y": 17,
                    "w": 20,
                    "h": 20,
                    "id": "hint",
                    "visible": false
                },
                "image": {
                    "event": {
                        "action": [{
                            "type": "command",
                            "command": "togglePlay",
                            "asset_model": "item.hints[0].asset"
                        }, {
                            "type": "command",
                            "command": "toggleShow",
                            "asset": "hint"
                        }],
                        "type": "click"
                    },
                    "asset": "icon_hint",
                    "x": 5,
                    "y": 35
                },
                "id": "mcq_template_1"
            }, {
                "image": [{
                    "event": {
                        "action": {
                            "type": "command",
                            "command": "show",
                            "asset": "retryDialog"
                        },
                        "type": "click"
                    },
                    "asset": "popupTint",
                    "x": -100,
                    "y": -150,
                    "w": 550,
                    "h": 600,
                    "visible": true,
                    "id": "popup-Tint"
                }, {
                    "asset": "retryBg",
                    "x": 0,
                    "y": 0,
                    "w": 150,
                    "h": 150,
                    "visible": true,
                    "id": "right"
                }],
                "shape": [{
                    "event": {
                        "action": [{
                            "type": "command",
                            "command": "hide",
                            "asset": "retryDialog"
                        }, {
                            "type": "command",
                            "command": "SHOWHTMLELEMENTS",
                            "asset": "retry"
                        }],
                        "type": "click"
                    },
                    "type": "roundrect",
                    "x": 72,
                    "y": 25,
                    "w": 50,
                    "h": 65,
                    "visible": true,
                    "id": "retry",
                    "hitArea": true
                }, {
                    "event": {
                        "action": {
                            "type": "command",
                            "command": "transitionTo",
                            "asset": "theme",
                            "param": "next",
                            "effect": "fadein",
                            "direction": "left",
                            "ease": "linear",
                            "duration": 100
                        },
                        "type": "click"
                    },
                    "type": "roundrect",
                    "x": 110,
                    "y": 100,
                    "w": 25,
                    "h": 35,
                    "visible": true,
                    "id": "continue",
                    "hitArea": true
                }],
                "id": "retry"
            }, {
                "g": {
                    "image": [{
                        "asset": "popupTint",
                        "x": 0,
                        "y": 0,
                        "w": 100,
                        "h": 100,
                        "visible": true,
                        "id": "popup-Tint"
                    }],
                    "text": [{
                        "x": 25,
                        "y": 25,
                        "w": 50,
                        "h": 9,
                        "visible": true,
                        "editable": true,
                        "model": "word.lemma",
                        "weight": "normal",
                        "font": "helvetica",
                        "color": "rgb(0,0,0)",
                        "fontstyle": "",
                        "fontsize": 75,
                        "align": "left",
                        "z-index": 1,
                        "id": "lemma"
                    }, {
                        "x": 25,
                        "y": 35,
                        "w": 50,
                        "h": 40,
                        "visible": true,
                        "editable": true,
                        "model": "word.gloss",
                        "weight": "normal",
                        "font": "helvetica",
                        "color": "rgb(0,0,0)",
                        "fontstyle": "",
                        "fontsize": 43,
                        "align": "left",
                        "z-index": 2,
                        "id": "gloss"
                    }],
                    "shape": [{
                        "x": 20,
                        "y": 20,
                        "w": 60,
                        "h": 60,
                        "visible": true,
                        "editable": true,
                        "type": "roundrect",
                        "radius": 10,
                        "opacity": 1,
                        "fill": "#45b3a5",
                        "stroke-width": 1,
                        "z-index": 0,
                        "id": "textBg"
                    }],
                    "x": 0,
                    "y": 0,
                    "w": 100,
                    "h": 100,
                    "event": {
                        "action": [{
                            "type": "command",
                            "command": "SHOWHTMLELEMENTS",
                            "asset": "textBg"
                        }, {
                            "type": "command",
                            "command": "hide",
                            "parent": true
                        }],
                        "type": "click"
                    }
                },
                "id": "infoTemplate"
            }, {
                "image": [{
                    "event": {
                        "action": {
                            "type": "command",
                            "command": "show",
                            "asset": ""
                        },
                        "type": "click"
                    },
                    "asset": "popupTint",
                    "x": -100,
                    "y": -150,
                    "w": 550,
                    "h": 600,
                    "visible": true,
                    "id": "popup-Tint"
                }, {
                    "event": {
                        "action": [{
                            "type": "command",
                            "command": "transitionTo",
                            "asset": "theme",
                            "param": "next",
                            "effect": "fadein",
                            "direction": "left",
                            "ease": "linear",
                            "duration": 500
                        }],
                        "type": "click"
                    },
                    "asset": "goodjobBg",
                    "x": 0,
                    "y": 0,
                    "w": 150,
                    "h": 150,
                    "visible": true,
                    "id": "continue"
                }],
                "id": "goodjob"
            }],
            "controller": [{
                "name": "dictionary",
                "type": "data",
                "id": "dictionary",
                "__cdata": {}
            }],
            "startStage": "scene1",
            "id": "theme",
            "ver": 0.3,
            "stage": [{
                "id": "scene1",
                "x": 0,
                "y": 0,
                "w": 100,
                "h": 100,
                "param": [{
                    "name": "next",
                    "value": "scene10b4a500-f08f-48cb-83db-2a62ebe12de3"
                }],
                "events": {
                    "event": []
                },
                "image": [{
                    "x": 34.44444444444444,
                    "y": 34.66666666666667,
                    "w": 23.88888888888889,
                    "h": 38,
                    "visible": true,
                    "editable": true,
                    "asset": "domain_665",
                    "z-index": 1
                }, {
                    "event": {
                        "action": {
                            "type": "command",
                            "command": "transitionTo",
                            "asset": "theme",
                            "param": "next",
                            "effect": "fadein",
                            "direction": "left",
                            "ease": "linear",
                            "duration": 500
                        },
                        "type": "click"
                    },
                    "asset": "next",
                    "x": 93,
                    "y": 3,
                    "w": 5,
                    "h": 8.3,
                    "id": "next",
                    "visible": true,
                    "editable": true,
                    "z-index": 100
                }],
                "text": [{
                    "x": 39.30555555555556,
                    "y": 23.77777777777778,
                    "w": 48.61111111111111,
                    "h": 5.826666666666666,
                    "visible": true,
                    "editable": true,
                    "__text": "Start Page",
                    "weight": "normal",
                    "font": "Helvetica",
                    "color": "#000000",
                    "fontstyle": "",
                    "fontsize": 53,
                    "lineHeight": 1.3,
                    "align": "left",
                    "z-index": 0
                }],
                "shape": [],
                "hotspot": [],
                "embed": [],
                "div": [],
                "audio": [],
                "scribble": [],
                "g": []
            }, {
                "id": "scene10b4a500-f08f-48cb-83db-2a62ebe12de3",
                "x": 0,
                "y": 0,
                "w": 100,
                "h": 100,
                "param": [{
                    "name": "previous",
                    "value": "scene1"
                }],
                "events": {
                    "event": []
                },
                "image": [{
                    "x": 37.22222222222222,
                    "y": 40.88888888888889,
                    "w": 22.083333333333332,
                    "h": 34.66666666666667,
                    "visible": true,
                    "editable": true,
                    "asset": "domain_665",
                    "z-index": 1
                }, {
                    "event": {
                        "action": {
                            "type": "command",
                            "command": "transitionTo",
                            "asset": "theme",
                            "param": "previous",
                            "effect": "fadein",
                            "direction": "right",
                            "ease": "linear",
                            "duration": 100
                        },
                        "type": "click"
                    },
                    "asset": "previous",
                    "x": 2,
                    "y": 3,
                    "w": 5,
                    "h": 8.3,
                    "id": "previous",
                    "visible": true,
                    "editable": true,
                    "z-index": 100
                }],
                "text": [{
                    "x": 42.916666666666664,
                    "y": 30.444444444444446,
                    "w": 48.61111111111111,
                    "h": 5.826666666666666,
                    "visible": true,
                    "editable": true,
                    "__text": "End Page",
                    "weight": "normal",
                    "font": "Helvetica",
                    "color": "#000000",
                    "fontstyle": "",
                    "fontsize": 53,
                    "lineHeight": 1.3,
                    "align": "left",
                    "z-index": 0
                }],
                "shape": [],
                "hotspot": [],
                "embed": [],
                "div": [],
                "audio": [],
                "scribble": [],
                "g": []
            }]
        }
    };
    var mydata = {

        "shape": [{
            "x": 20,
            "y": 20,
            "w": 60,
            "h": 60,
            "visible": true,
            "editable": true,
            "type": "roundrect",
            "radius": 10,
            "opacity": 1,
            "fill": "#45b3a5",
            "stroke-width": 1,
            "z-index": 0,
            "id": "textBg"
        }]
    };
    startRenderer(data);

    beforeEach(function(done) {
        //var data = {"theme":{"manifest":{"media":[{"id":"validate","src":"https://sandbox-community.ekstep.in/assets/public/content/btn_ok_highlights_1460705843676.png","type":"image","assetId":"domain_38852"},{"id":"popupTint","src":"https://sandbox-community.ekstep.in/assets/public/content/PopupTint_1460636175572.png","type":"image","assetId":"domain_38606"},{"id":"goodjobBg","src":"https://sandbox-community.ekstep.in/assets/public/content/goodjobBg_1460727428389.png","type":"image","assetId":"domain_38939"},{"id":"retryBg","src":"https://sandbox-community.ekstep.in/assets/public/content/retryBg_1460727370746.png","type":"image","assetId":"domain_38938"},{"id":"retry_audio","src":"https://sandbox-community.ekstep.in/assets/public/content/retry_1460636610607.mp3","type":"sound","assetId":"domain_38624"},{"id":"goodjob_audio","src":"https://sandbox-community.ekstep.in/assets/public/content/goodJob_1460636677521.mp3","type":"sound","assetId":"domain_38625"},{"id":"next","src":"https://sandbox-community.ekstep.in/assets/public/content/btn_back_1461401700215.png","type":"image","assetId":"domain_40358"},{"id":"previous","src":"https://sandbox-community.ekstep.in/assets/public/content/btn_back_1461401700215.png","type":"image","assetId":"domain_40359"},{"id":"submit","src":"https://sandbox-community.ekstep.in/assets/public/content/icon_submit_1459243202199.png","type":"image","assetId":"domain_14524"},{"id":"home","src":"https://sandbox-community.ekstep.in/assets/public/content/icon_home_1459242981364.png","type":"image","assetId":"domain_14519"},{"id":"reload","src":"https://sandbox-community.ekstep.in/assets/public/content/icon_reload_1459243110661.png","type":"image","assetId":"domain_14522"},{"id":"icon_hint","src":"https://sandbox-community.ekstep.in/assets/public/content/icon_hint_1454918891133.png","type":"image","assetId":"domain_799"},{"id":"bg","src":"https://sandbox-community.ekstep.in/assets/public/content/background_1458729298020.png","type":"image"},{"id":"domain_665","type":"image","src":"https://sandbox-community.ekstep.in/assets/public/content/ekstep-placeholder-blue-eye1_1454412631459.png","assetId":"domain_665"}]},"template":[{"text":{"model":"item.title","x":9,"y":7,"w":86,"h":4,"font":"Georgia","fontsize":42},"mcq":{"options":{"layout":"table","x":20,"y":15,"w":70,"h":85,"cols":2,"marginX":10,"marginY":5,"options":"options"},"multi_select":false,"model":"item"},"g":{"image":{"event":{"action":[{"type":"command","command":"stop","asset_model":"item.hints[0].asset"},{"type":"command","command":"toggleShow","asset":"hint"}],"type":"click"},"asset":"speech_bubble","x":0,"y":0,"w":100,"h":100},"text":[{"x":10,"y":20,"w":80,"h":80,"font":"Georgia","weight":"bold","fontsize":150,"__text":"Hint"},{"x":10,"y":40,"w":80,"h":80,"font":"Georgia","fontsize":120,"model":"item.hints[1].asset"}],"x":9,"y":17,"w":20,"h":20,"id":"hint","visible":false},"image":{"event":{"action":[{"type":"command","command":"togglePlay","asset_model":"item.hints[0].asset"},{"type":"command","command":"toggleShow","asset":"hint"}],"type":"click"},"asset":"icon_hint","x":5,"y":35},"id":"mcq_template_1"},{"image":[{"event":{"action":{"type":"command","command":"show","asset":"retryDialog"},"type":"click"},"asset":"popupTint","x":-100,"y":-150,"w":550,"h":600,"visible":true,"id":"popup-Tint"},{"asset":"retryBg","x":0,"y":0,"w":150,"h":150,"visible":true,"id":"right"}],"shape":[{"event":{"action":[{"type":"command","command":"hide","asset":"retryDialog"},{"type":"command","command":"SHOWHTMLELEMENTS","asset":"retry"}],"type":"click"},"type":"roundrect","x":72,"y":25,"w":50,"h":65,"visible":true,"id":"retry","hitArea":true},{"event":{"action":{"type":"command","command":"transitionTo","asset":"theme","param":"next","effect":"fadein","direction":"left","ease":"linear","duration":100},"type":"click"},"type":"roundrect","x":110,"y":100,"w":25,"h":35,"visible":true,"id":"continue","hitArea":true}],"id":"retry"},{"g":{"image":[{"asset":"popupTint","x":0,"y":0,"w":100,"h":100,"visible":true,"id":"popup-Tint"}],"text":[{"x":25,"y":25,"w":50,"h":9,"visible":true,"editable":true,"model":"word.lemma","weight":"normal","font":"helvetica","color":"rgb(0,0,0)","fontstyle":"","fontsize":75,"align":"left","z-index":1,"id":"lemma"},{"x":25,"y":35,"w":50,"h":40,"visible":true,"editable":true,"model":"word.gloss","weight":"normal","font":"helvetica","color":"rgb(0,0,0)","fontstyle":"","fontsize":43,"align":"left","z-index":2,"id":"gloss"}],"shape":[{"x":20,"y":20,"w":60,"h":60,"visible":true,"editable":true,"type":"roundrect","radius":10,"opacity":1,"fill":"#45b3a5","stroke-width":1,"z-index":0,"id":"textBg"}],"x":0,"y":0,"w":100,"h":100,"event":{"action":[{"type":"command","command":"SHOWHTMLELEMENTS","asset":"textBg"},{"type":"command","command":"hide","parent":true}],"type":"click"}},"id":"infoTemplate"},{"image":[{"event":{"action":{"type":"command","command":"show","asset":""},"type":"click"},"asset":"popupTint","x":-100,"y":-150,"w":550,"h":600,"visible":true,"id":"popup-Tint"},{"event":{"action":[{"type":"command","command":"transitionTo","asset":"theme","param":"next","effect":"fadein","direction":"left","ease":"linear","duration":500}],"type":"click"},"asset":"goodjobBg","x":0,"y":0,"w":150,"h":150,"visible":true,"id":"continue"}],"id":"goodjob"}],"controller":[{"name":"dictionary","type":"data","id":"dictionary","__cdata":{}}],"startStage":"scene1","id":"theme","ver":0.3,"stage":[{"id":"scene1","x":0,"y":0,"w":100,"h":100,"param":[{"name":"next","value":"scene10b4a500-f08f-48cb-83db-2a62ebe12de3"}],"events":{"event":[]},"image":[{"x":34.44444444444444,"y":34.66666666666667,"w":23.88888888888889,"h":38,"visible":true,"editable":true,"asset":"domain_665","z-index":1},{"event":{"action":{"type":"command","command":"transitionTo","asset":"theme","param":"next","effect":"fadein","direction":"left","ease":"linear","duration":500},"type":"click"},"asset":"next","x":93,"y":3,"w":5,"h":8.3,"id":"next","visible":true,"editable":true,"z-index":100}],"text":[{"x":39.30555555555556,"y":23.77777777777778,"w":48.61111111111111,"h":5.826666666666666,"visible":true,"editable":true,"__text":"Start Page","weight":"normal","font":"Helvetica","color":"#000000","fontstyle":"","fontsize":53,"lineHeight":1.3,"align":"left","z-index":0}],"shape":[],"hotspot":[],"embed":[],"div":[],"audio":[],"scribble":[],"g":[]},{"id":"scene10b4a500-f08f-48cb-83db-2a62ebe12de3","x":0,"y":0,"w":100,"h":100,"param":[{"name":"previous","value":"scene1"}],"events":{"event":[]},"image":[{"x":37.22222222222222,"y":40.88888888888889,"w":22.083333333333332,"h":34.66666666666667,"visible":true,"editable":true,"asset":"domain_665","z-index":1},{"event":{"action":{"type":"command","command":"transitionTo","asset":"theme","param":"previous","effect":"fadein","direction":"right","ease":"linear","duration":100},"type":"click"},"asset":"previous","x":2,"y":3,"w":5,"h":8.3,"id":"previous","visible":true,"editable":true,"z-index":100}],"text":[{"x":42.916666666666664,"y":30.444444444444446,"w":48.61111111111111,"h":5.826666666666666,"visible":true,"editable":true,"__text":"End Page","weight":"normal","font":"Helvetica","color":"#000000","fontstyle":"","fontsize":53,"lineHeight":1.3,"align":"left","z-index":0}],"shape":[],"hotspot":[],"embed":[],"div":[],"audio":[],"scribble":[],"g":[]}]}};

        var parent = {
            dimensions: function() {
                return {
                    x: 0,
                    y: 0,
                    w: 500,
                    h: 500
                }
            },
            addChild: function() {}
        };



        Renderer.theme = {
            _currentStage: ''
        };
        this.plugin = PluginManager.invoke('shape', mydata, parent);
        spyOn(this.plugin, 'initPlugin').and.callThrough();

        done();
    });

    it('initPlugin', function() {


        this.plugin.initPlugin(mydata);
        expect(this.plugin.initPlugin).toHaveBeenCalled();
        expect(this.plugin.initPlugin.calls.count()).toEqual(1);
    });
    it("fill attribute", function() {


        expect(this.plugin._self.fill).not.toBe(null);
    });
    it("check the mouse is enable or not", function() {
        expect(this.plugin._self.mouseEnabled).toBe(true);
        expect(this.plugin._self.mouseEnabled).not.toBe(false);

    });
    it("comman attribute", function() {
        expect(this.plugin._self.x).toBeDefined();
        expect(this.plugin._self.y).toBeDefined();
        expect(this.plugin._self.x).not.toBeNull();
        expect(this.plugin._self.y).not.toBeNull();
        expect(this.plugin._self.h).not.toBeNull();
        expect(this.plugin._self.w).not.toBeNull();

    });
    it('type attribute', function() {
        expect(this.plugin._self.type).not.toBeNull();
    });

    it('shape instance', function() {
        expect(true).toEqual(this.plugin._self instanceof createjs.Shape);
    });

    it("Stroke ", function() {
        expect(this.plugin._self.stroke).not.toBeNull();
    });
    xit('hitArea', function() {
        expect(true).toEqual(this.plugin._self.hitArea instanceof createjs.Shape);
    });
    it('Opacity', function() {
        expect(this.plugin._self.opacity).not.toBeNull();
    });
    /*it('data type',function(){
        var graphics = this.plugin._self.graphics;
        var dims = this.plugin.relativeDims();
   
        if(data.type==='rect'){
            console.log("yes");
            graphics.dr(0, 0, dims.w, dims.h);
        }else if(data.type==='roundrect'){
            graphics.drawRoundRect(0, 0, dims.w, dims.h, radius);
        }else if(data.type==='circle'){
            graphics.drawRoundRect(0, 0, dims.w, dims.h, radius);
        }
      
    });*/


});