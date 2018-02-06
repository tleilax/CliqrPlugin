webpackJsonp([1],{368:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(20),l=(i.n(n),function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return t.pop(),new n.SafeString(t.join(""))});t.default=l},371:function(e,t,i){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}function l(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=i(11),r=i.n(a),o=i(16),s=i.n(o),u=i(36),h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=e.get("id"),n=d(e,t),l=t.toJSON(),c=s.a.reduce(n,function(e,t){return e+t},0);return h({},l,{task:s.a.first(l.test.tasks),isRunning:t.isRunning(),answers:s.a.map(e.get("task").answers,function(e,t){return h({},e,{id:i+"-"+t,isCorrect:!!e.score,votes_count:n[t],percent:c?Math.floor(n[t]/c*100):0})}),isSingleSelect:"single"===e.get("task").type,votes_count:c})},d=function(e,t){for(var i=[],n=0,l=e.get("task").answers.length;n<l;++n)i[n]=0;return s.a.reduce(t&&t.get("responses"),function(e,t){return s.a.each(t.answer,function(t){return e[t]++}),e},i)},m=u.a.extend({tagName:"section",className:"cliqr--multiple-choice-assignment-view",initialize:function(e){var t=e.voting;u.a.prototype.initialize.call(this),this.voting=t,this.listenTo(this.voting,"change",this.render)},template:i(399),context:function(){return p(this.model,this.voting)},afterTemplate:function(){this.voting.isRunning()||this.postRender()},postRender:function(){this.voting.isRunning()||this.enhanceChart(this.context());var e=window.MathJax.Hub;this.$(".cliqr--mc-description, td.text").each(function(t,i){return e.Queue(["Typeset",e,i])})},enhanceChart:function(e){this.$(".chart").remove();var t=e.answers,i=s.a.max(s.a.pluck(t,"votes_count")),n=s.a.map(t,function(e){return i>0?e.votes_count/i*150:0});this.$(".graph").append(function(e){return t[e].votes_count?r.a.$('<span class="chart"></span>').css({width:n[e],marginLeft:i?150-n[e]:0}):null})}}),f=m,v=u.a.extend({tagName:"div",className:"cliqr--component-wysiwyg",events:{"keypress textarea":"onTextUpdate","change textarea":"onTextUpdate","input textarea":"onTextUpdate"},initialize:function(e){u.a.prototype.initialize.call(this),this.key=e.key,this.listenTo(this.model,"change:"+this.key,this.onModelChange)},remove:function(){this.removeWysiwyg(),u.a.prototype.remove.call(this)},editor:null,removeWysiwyg:function(){this.editor&&(this.editor.removeAllListeners(),this.editor=null)},template:i(400),context:function(){return{key:this.key,value:this.model.get(this.key)}},afterTemplate:function(){var e=this.$("textarea").get(0);if(e&&window.STUDIP.wysiwyg){window.STUDIP.wysiwyg.replace(e);var t=window.CKEDITOR.dom.element.get(e);t&&(this.editor=t.getEditor(),this.editor.on("change",this.onEditorChange,this),this.editor.once("focus",this.onEditorFocus,this))}},onEditorChange:function(e){var t=e.editor;this.model.set(this.key,t.getData(),{silent:!0})},onEditorFocus:function(e){var t=e.editor;this.$(".cke_toolbox_collapser_min").length&&t.execCommand("toolbarCollapse")},onTextUpdate:function(e){var t=r.a.$(e.target).val();this.model.set(this.key,t,{silent:!0})},onModelChange:function(){this.render()}}),g=v,w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},q=[{id:"custom",text:"Individuell"},{id:"yesno",text:"Ja·Nein"},{id:"truefalse",text:"Wahr·Falsch"},{id:"evaluation",text:"Evaluation"},{id:"grading",text:"Benotung"}],b=u.a.extend({tagName:"section",$selectedSubtype:"custom",$custom:null,events:{"click .js-add":"onClickAdd","click .js-remove":"onClickRemove","submit form":"onSubmitForm","click .js-cancel":"onClickCancel","keypress input.choice":"onChoiceUpdate","change input.choice":"onChoiceUpdate","input input.choice":"onChoiceUpdate",'change input[name="select-type"]':"onChangeMultiSingle","click .cliqr--mc-subtypes button":"onSelectSubtype"},initialize:function(e){var t=this;u.a.prototype.initialize.call(this),this.type=e.type,this.taskGroup=e.taskGroup;var i=new g({model:this.model,key:"description"});this.setView(".cliqr--mc-description",i),this.listenTo(this.model,"change",this.render),this.listenTo(this.model,"invalid",function(){return t.render({force:!0})})},template:i(401),context:function(){var e=this;return{taskGroup:this.taskGroup&&this.taskGroup.toJSON(),task:this.model.toJSON(),error:this.model.validationError||null,singleSelect:"single"===this.model.getSelectType(),$selectedSubtype:this.$selectedSubtype,subtypes:q.map(function(t){return w({},t,{selected:t.id===e.$selectedSubtype})})}},afterTemplate:function(){},onClickAdd:function(e){e.preventDefault(),this.model.addAnswer()},onClickRemove:function(e){e.preventDefault();var t=parseInt(r.a.$(e.target).closest(".choice-input").find("input[name]").attr("name").match(/\d+/)[0],10);this.model.removeAnswer(t)},onChoiceUpdate:function(e){var t=r.a.$(e.target),i=parseInt(t.attr("name").match(/\d+/)[0],10),n=t.val();this.model.updateAnswer(i,{text:n})},onChangeMultiSingle:function(e){var t=e.target,i=r.a.$(t).prop("checked")?"multiple":"single";this.model.setSelectType(i)},onSelectSubtype:function(e){var t=e.target,i=[].concat(n(t.classList)).filter(function(e){return e.match(/^js-type-/)});if(i.length){var l=i[0].substr(8);q.some(function(e){return e.id===l})&&this.selectSubtype(l)}},selectSubtype:function(e){var t=this.$selectedSubtype;if(e!==t){switch(this.$selectedSubtype=e,"custom"===t&&(this.$custom=w({},this.model.attributes)),e){case"custom":this.model.set(w({},this.$custom));break;case"yesno":this.fillWithSubtype(["ja","nein"]);break;case"truefalse":this.fillWithSubtype(["wahr","falsch"]);break;case"evaluation":this.fillWithSubtype(["trifft voll zu","trifft eher zu","weder noch","trifft eher nicht zu","trifft gar nicht zu"]);break;case"grading":this.fillWithSubtype(["sehr gut","gut","befriedigend","ausreichend","mangelhaft","ungenügend"])}this.render()}},fillWithSubtype:function(e){var t=this;this.model.clearAnswers(),this.model.setSelectType("single"),e.forEach(function(e){return t.model.addAnswer({text:e})})}}),x=b,y=x.extend({className:"cliqr--multiple-choice-create-view",onSubmitForm:function(e){e.preventDefault(),this.model.isValid()&&(window.STUDIP.editor_enabled&&this.model.set("description",window.STUDIP.wysiwyg.markAsHtml(this.model.get("description")),{silent:!0}),this.trigger("newTask",this.model))},onClickCancel:function(e){e.preventDefault(),this.trigger("cancel")}}),k=y,S=x.extend({className:"cliqr--multiple-choice-edit-view",onSubmitForm:function(e){e.preventDefault(),this.model.isValid()&&this.trigger("editTask",this.model)},onClickCancel:function(e){e.preventDefault(),this.trigger("cancel",this.model)}}),C=S,A=function(e,t){var i=t.getTask();return{response:e.toJSON(),voting:s.a.omit(t.toJSON(),"task"),task:i.toJSON(),answers:i.get("task").answers,isSingleSelect:"single"===i.get("task").type}},T=u.a.extend({className:"cliqr--multiple-choice-poll-view",events:{"submit form":"onSubmitForm"},initialize:function(e){u.a.prototype.initialize.call(this),this.voting=e.voting},template:i(402),context:function(){return A(this.model,this.voting)},postRender:function(){var e=window.MathJax.Hub;this.$(".description, .text").each(function(t,i){return e.Queue(["Typeset",e,i])})},onSubmitForm:function(e){e.preventDefault();var t=r.a.$(e.target).closest("form").serializeArray();this.model.set("response",{answer:s.a.map(t,function(e){return parseInt(e.value,10)})}),this.voting.trigger("newResponse",this.model,this.voting)}}),_=T,E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},O=function(e){var t=e.get("id");return E({},e.toJSON(),{answers:s.a.map(e.get("task").answers,function(e,i){return E({},e,{id:t+"-"+i,isCorrect:!!e.score})}),isSingleSelect:"single"===e.get("task").type})},z=r.a.View.extend({tagName:"section",className:"cliqr--multiple-choice-show-view",render:function(){var e=i(403);return this.$el.html(e(O(this.model))),this},postRender:function(){var e=window.MathJax.Hub;this.$(".cliqr--mc-description, td.text").each(function(t,i){return e.Queue(["Typeset",e,i])})}}),D=z,$=i(106),j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},M=$.a.extend({defaults:{type:"multiple-choice",task:{type:"single",answers:[]}},validate:function(e,t){var i=e.description,n=e.task;if(!i||s.a.isEmpty(i))return"Der Fragetext darf nicht leer sein.";if(window.STUDIP.wysiwyg&&i.trim()===window.STUDIP.wysiwyg.htmlMarker)return"Der Fragetext darf nicht leer sein.";if(!n)return"Task fehlt.";var l=n.answers,c=void 0!==l&&l;return!c||s.a.isEmpty(c)?"Es wird mindestens eine Antwort benötigt.":null},addAnswer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=this.get("task"),n=[].concat(l(i.answers),[j({text:"",score:0,feedback:""},e)]);this.set("task",j({},i,{answers:n}),t)},removeAnswer:function(e){var t=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],this.get("task")),i=[].concat(l(t.answers.slice(0,e)),l(t.answers.slice(e+1)));this.set("task",j({},t,{answers:i}))},updateAnswer:function(e,t){var i=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],this.get("task")),n=i.answers[e],c=[].concat(l(i.answers.slice(0,e)),[j({},n,t)],l(i.answers.slice(e+1)));this.set("task",j({},i,{answers:c}),{silent:!0})},getAnswers:function(){return this.get("task").answers},setAnswers:function(e){this.set("task",j({},this.get("task"),{answers:e}),{silent:!0})},clearAnswers:function(){this.setAnswers([])},setSelectType:function(e){"single"!==e&&"multiple"!==e||this.set("task",j({},this.get("task"),{type:e}),{silent:!0})},getSelectType:function(){return this.get("task").type}}),N=M,P=i(397),U=P.a.extend({defaults:{}}),R=U,F=(i(404),function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}()),I=function(){function e(t){c(this,e),this.task=t}return F(e,[{key:"getAssignmentView",value:function(e){return new f({model:this.task,voting:e,type:this})}},{key:"getShowView",value:function(){return new D({model:this.task,type:this})}},{key:"getEditView",value:function(){return new C({model:this.wrapTask(this.task),type:this})}},{key:"getCreateView",value:function(e){return new k({model:this.createTask(),taskGroup:e,type:this})}},{key:"getPollView",value:function(e){return new _({model:this.createResponse(e),voting:e,type:this})}},{key:"createTask",value:function(e){var t=new N;return s.a.times(4,function(){return t.addAnswer()}),t}},{key:"wrapTask",value:function(e){return new N(e.attributes)}},{key:"createResponse",value:function(e){return new R({voting_id:e.id,task_id:e.getTask().id})}}]),e}();s.a.extend(I.prototype,r.a.Events);t.default=I},395:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(20),l=(i.n(n),"A".charCodeAt(0)),c=function(e){return String.fromCharCode(l+parseInt(e,10)%26)};t.default=c},396:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(20),l=(i.n(n),function(e,t){t.hash;return e=Object(n.escapeExpression)(e),new n.SafeString(e)});t.default=l},397:function(e,t,i){"use strict";var n=i(11),l=i.n(n),c=i(16),a=i.n(c),r={create:"create",update:"update",delete:"destroy",read:"show"},o=l.a.Model.extend({sync:function(e,t,i){return a.a.extend(i,{url:"function"==typeof t.url?t.url(r[e]):void 0}),l.a.sync(e,t,i)},url:function(e){var t=null!=this.id?"/"+this.id:"";return cliqr.config.PLUGIN_URL+"responses/"+e+t}});t.a=o},399:function(e,t,i){function n(e){return e&&(e.__esModule?e.default:e)}var l=i(20);e.exports=(l.default||l).template({1:function(e,t,l,c,a,r,o){var s,u=null!=t?t:e.nullContext||{},h=e.escapeExpression;return'                <tr>\n                    <td class="nominal"> '+h(n(i(395)).call(u,a&&a.index,{name:"nominal",hash:{},data:a}))+' </td>\n                    <td class="text"> '+h(e.lambda(null!=t?t.text:t,t))+" </td>\n\n"+(null!=(s=l.unless.call(u,null!=o[1]?o[1].isRunning:o[1],{name:"unless",hash:{},fn:e.program(2,a,0,r,o),inverse:e.noop,data:a}))?s:"")+"                </tr>\n"},2:function(e,t,i,n,l){var c;return'                        <td class="graph"></td>\n                        <td class="count">'+e.escapeExpression(e.lambda(null!=t?t.votes_count:t,t))+'</td>\n                        <td class="percent">\n                            '+(null!=(c=i.if.call(null!=t?t:e.nullContext||{},null!=t?t.votes_count:t,{name:"if",hash:{},fn:e.program(3,l,0),inverse:e.noop,data:l}))?c:"")+"\n                        </td>\n"},3:function(e,t,i,n,l){return e.escapeExpression(e.lambda(null!=t?t.percent:t,t))+"%"},compiler:[7,">= 4.0.0"],main:function(e,t,i,n,l,c,a){var r;return'<header>\n    <h1>Abstimmung:</h1>\n    <div class="cliqr--mc-description">'+(null!=(r=e.lambda(null!=(r=null!=t?t.task:t)?r.description_html:r,t))?r:"")+"</div>\n</header>\n\n<main>\n    <table>\n        <tbody>\n"+(null!=(r=i.each.call(null!=t?t:e.nullContext||{},null!=t?t.answers:t,{name:"each",hash:{},fn:e.program(1,l,0,c,a),inverse:e.noop,data:l}))?r:"")+"        </tbody>\n    </table>\n</main>\n"},useData:!0,useDepths:!0})},400:function(e,t,i){var n=i(20);e.exports=(n.default||n).template({compiler:[7,">= 4.0.0"],main:function(e,t,i,n,l){var c,a=null!=t?t:e.nullContext||{},r=i.helperMissing,o=e.escapeExpression;return'<textarea name="'+o((c=null!=(c=i.key||(null!=t?t.key:t))?c:r,"function"==typeof c?c.call(a,{name:"key",hash:{},data:l}):c))+'" class="x-wysiwyg" required="required">'+o((c=null!=(c=i.value||(null!=t?t.value:t))?c:r,"function"==typeof c?c.call(a,{name:"value",hash:{},data:l}):c))+"</textarea>\n"},useData:!0})},401:function(e,t,i){function n(e){return e&&(e.__esModule?e.default:e)}var l=i(20);e.exports=(l.default||l).template({1:function(e,t,i,n,l){return'        <div class="messagebox messagebox_error">\n            Fehler: '+e.escapeExpression(e.lambda(null!=t?t.error:t,t))+"\n        </div>\n"},3:function(e,t,i,n,l){var c,a=null!=t?t:e.nullContext||{};return(null!=(c=i.if.call(a,null!=t?t.selected:t,{name:"if",hash:{},fn:e.program(4,l,0),inverse:e.noop,data:l}))?c:"")+(null!=(c=i.if.call(a,null!=t?t.selected:t,{name:"if",hash:{},fn:e.noop,inverse:e.program(6,l,0),data:l}))?c:"")},4:function(e,t,l,c,a){var r=null!=t?t:e.nullContext||{};return"              "+e.escapeExpression(n(i(30)).call(r,n(i(368)).call(r,"type-",null!=t?t.id:t,{name:"concat",hash:{},data:a}),null!=t?t.text:t,{name:"button",hash:{class:"active"},data:a}))+"\n"},6:function(e,t,l,c,a){var r=null!=t?t:e.nullContext||{};return"            "+e.escapeExpression(n(i(30)).call(r,n(i(368)).call(r,"type-",null!=t?t.id:t,{name:"concat",hash:{},data:a}),null!=t?t.text:t,{name:"button",hash:{},data:a}))+"\n"},8:function(e,t,l,c,a){var r=null!=t?t:e.nullContext||{},o=e.escapeExpression,s=e.lambda;return'                    <div class="choice-input">\n                        <span class="nominal">'+o(n(i(395)).call(r,a&&a.index,{name:"nominal",hash:{},data:a}))+'</span>\n\n                        <input\n                            class="choice no-hint" maxlength="100" type="text"\n                            name="answers['+o(s(a&&a.index,t))+']"\n                            value="'+o(s(null!=t?t.text:t,t))+'" required>\n\n                        <span class="cliqr--mc-choice-actions">\n                            '+o(n(i(54)).call(r,"remove","Entfernen","trash",{name:"fab",hash:{},data:a}))+"\n                            \x3c!-- "+o(n(i(54)).call(r,"upload","Bild hochladen","upload",{name:"fab",hash:{},data:a}))+" --\x3e\n                            \x3c!-- "+o(n(i(54)).call(r,"options","Optionen","tools",{name:"fab",hash:{},data:a}))+" --\x3e\n                        </span>\n                    </div>\n"},10:function(e,t,l,c,a){return'                    <div class="choices-required">\n                        <select required oninvalid="setCustomValidity(\''+e.escapeExpression(n(i(396)).call(null!=t?t:e.nullContext||{},"Mindestens eine Antwort wird benötigt.",{name:"i18n",hash:{},data:a}))+"')\"></select>\n                    </div>\n"},12:function(e,t,i,n,l){return" checked"},compiler:[7,">= 4.0.0"],main:function(e,t,l,c,a){var r,o=null!=t?t:e.nullContext||{},s=e.escapeExpression;return'<form class="default" method="post" accept-char="UTF-8">\n\n'+(null!=(r=l.if.call(o,null!=t?t.error:t,{name:"if",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a}))?r:"")+'\n    <fieldset>\n        <legend>Multiple-Choice-Frage</legend>\n        <label>\n            Was möchten Sie fragen?\n            <div class="cliqr--mc-description"></div>\n        </label>\n    </fieldset>\n\n    <fieldset>\n        <legend>Antwortmöglichkeiten</legend>\n\n        <div class="cliqr--mc-subtypes button-group">\n'+(null!=(r=l.each.call(o,null!=t?t.subtypes:t,{name:"each",hash:{},fn:e.program(3,a,0),inverse:e.noop,data:a}))?r:"")+'        </div>\n\n        <label>\n            Tragen Sie die Antworten ein\n\n            <div class="choices">\n'+(null!=(r=l.each.call(o,null!=(r=null!=(r=null!=t?t.task:t)?r.task:r)?r.answers:r,{name:"each",hash:{},fn:e.program(8,a,0),inverse:e.noop,data:a}))?r:"")+"\n                "+s(n(i(30)).call(o,"add","Antwort hinzufügen",{name:"button",hash:{class:"choice-add",icon:"add"},data:a}))+"\n\n"+(null!=(r=l.unless.call(o,null!=(r=null!=(r=null!=t?t.task:t)?r.task:r)?r.answers:r,{name:"unless",hash:{},fn:e.program(10,a,0),inverse:e.noop,data:a}))?r:"")+'            </div>\n        </label>\n    </fieldset>\n\n    <fieldset class="collapsable collapsed">\n        <legend>Optionen</legend>\n\n        <label>\n            <input type="checkbox" name="select-type" value="multi"'+(null!=(r=l.unless.call(o,null!=t?t.singleSelect:t,{name:"unless",hash:{},fn:e.program(12,a,0),inverse:e.noop,data:a}))?r:"")+">\n            Nutzer dürfen mehr als eine Antwort ankreuzen\n        </label>\n    </fieldset>\n\n    <footer>\n        "+s(n(i(30)).call(o,"save","Speichern",{name:"button",hash:{type:"submit",icon:"accept"},data:a}))+"\n        "+s(n(i(30)).call(o,"cancel","Abbrechen",{name:"button",hash:{icon:"decline"},data:a}))+"\n    </footer>\n</form>\n"},useData:!0})},402:function(e,t,i){function n(e){return e&&(e.__esModule?e.default:e)}var l=i(20);e.exports=(l.default||l).template({1:function(e,t,i,n,l){var c;return'                <p class="lead"> '+e.escapeExpression(e.lambda(null!=(c=null!=t?t.task:t)?c.title:c,t))+" </p>\n"},3:function(e,t,l,c,a,r,o){var s,u=null!=t?t:e.nullContext||{},h=e.escapeExpression;return'                        <li class="list-group-item">\n                            <label>\n'+(null!=(s=l.if.call(u,null!=o[1]?o[1].isSingleSelect:o[1],{name:"if",hash:{},fn:e.program(4,a,0,r,o),inverse:e.program(6,a,0,r,o),data:a}))?s:"")+'                                <span class="nominal">'+h(n(i(395)).call(u,a&&a.index,{name:"nominal",hash:{},data:a}))+':</span>\n                                <span class="text">'+h(e.lambda(null!=t?t.text:t,t))+"</span>\n                            </label>\n                        </li>\n"},4:function(e,t,i,n,l){return'                                    <input type="radio" name="choice" value="'+e.escapeExpression(e.lambda(l&&l.index,t))+'" required>\n'},6:function(e,t,i,n,l){var c=e.lambda,a=e.escapeExpression;return'                                    <input type="checkbox" name="choice['+a(c(l&&l.index,t))+']" value="'+a(c(l&&l.index,t))+'">\n'},compiler:[7,">= 4.0.0"],main:function(e,t,i,n,l,c,a){var r,o=null!=t?t:e.nullContext||{};return'<section class="cliqr--multiple-choice-poll">\n    <div class="jumbotron">\n        <div class="container">\n'+(null!=(r=i.if.call(o,null!=(r=null!=t?t.task:t)?r.title:r,{name:"if",hash:{},fn:e.program(1,l,0,c,a),inverse:e.noop,data:l}))?r:"")+'\n            <div class="description">'+(null!=(r=e.lambda(null!=(r=null!=t?t.task:t)?r.description_html:r,t))?r:"")+'</div>\n        </div>\n    </div>\n\n    <div class="container">\n        <form action="" method="post">\n\n            <div class="form-group">\n                <ul class="list-group">\n'+(null!=(r=i.each.call(o,null!=t?t.answers:t,{name:"each",hash:{},fn:e.program(3,l,0,c,a),inverse:e.noop,data:l}))?r:"")+'                </ul>\n            </div>\n\n\n            <div class="form-group">\n                <button class="btn btn-primary btn-block" type="submit">Antwort abschicken</button>\n            </div>\n        </form>\n\n    </div>\n</section>\n'},useData:!0,useDepths:!0})},403:function(e,t,i){function n(e){return e&&(e.__esModule?e.default:e)}var l=i(20);e.exports=(l.default||l).template({1:function(e,t,l,c,a){var r=e.escapeExpression;return'                <tr>\n                    <td class="nominal"> '+r(n(i(395)).call(null!=t?t:e.nullContext||{},a&&a.index,{name:"nominal",hash:{},data:a}))+' </td>\n                    <td class="text"> '+r(e.lambda(null!=t?t.text:t,t))+" </td>\n                </tr>\n"},compiler:[7,">= 4.0.0"],main:function(e,t,i,n,l){var c;return'<header>\n    <h1>Frage:</h1>\n    <div class="cliqr--mc-description">'+(null!=(c=e.lambda(null!=t?t.description_html:t,t))?c:"")+"</div>\n</header>\n\n<main>\n    <table>\n        <tbody>\n"+(null!=(c=i.each.call(null!=t?t:e.nullContext||{},null!=t?t.answers:t,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l}))?c:"")+"        </tbody>\n    </table>\n</main>\n"},useData:!0})},404:function(e,t,i){var n=i(405);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0};l.transform=void 0;i(370)(n,l);n.locals&&(e.exports=n.locals)},405:function(e,t,i){t=e.exports=i(369)(!1),t.push([e.i,"#cliqr-container .cliqr--votings-compare .cliqr--multiple-choice-assignment-view h1,#cliqr-poll-container .cliqr--votings-compare .cliqr--multiple-choice-assignment-view h1{display:none}#cliqr-container .cliqr--multiple-choice-assignment-view .cliqr--mc-description,#cliqr-poll-container .cliqr--multiple-choice-assignment-view .cliqr--mc-description{font-weight:400;font-size:2.75em}#cliqr-container .cliqr--multiple-choice-assignment-view table,#cliqr-poll-container .cliqr--multiple-choice-assignment-view table{font-size:2em;line-height:1.5;overflow:hidden;border-collapse:collapse}#cliqr-container .cliqr--multiple-choice-assignment-view table td,#cliqr-poll-container .cliqr--multiple-choice-assignment-view table td{padding-top:.75em}#cliqr-container .cliqr--multiple-choice-assignment-view table .nominal,#cliqr-poll-container .cliqr--multiple-choice-assignment-view table .nominal{color:#999;width:1em}#cliqr-container .cliqr--multiple-choice-assignment-view table .graph,#cliqr-container .cliqr--multiple-choice-assignment-view table .percent,#cliqr-container .cliqr--multiple-choice-assignment-view table .text,#cliqr-poll-container .cliqr--multiple-choice-assignment-view table .graph,#cliqr-poll-container .cliqr--multiple-choice-assignment-view table .percent,#cliqr-poll-container .cliqr--multiple-choice-assignment-view table .text{padding-left:.75em}#cliqr-container .cliqr--multiple-choice-assignment-view .chart,#cliqr-poll-container .cliqr--multiple-choice-assignment-view .chart{display:inline-block;background-color:#ffbd33;-webkit-box-shadow:1px 1px 1px 0 #f26e00;box-shadow:1px 1px 1px 0 #f26e00;height:1.5em;margin-left:.5em;vertical-align:middle}#cliqr-container .cliqr--multiple-choice-assignment-view .count,#cliqr-poll-container .cliqr--multiple-choice-assignment-view .count{padding-left:.25em;color:#f26e00;text-align:right}#cliqr-container .cliqr--multiple-choice-assignment-view .percent,#cliqr-poll-container .cliqr--multiple-choice-assignment-view .percent{color:#999}#cliqr-container .cliqr--multiple-choice-show-view .cliqr--mc-description,#cliqr-poll-container .cliqr--multiple-choice-show-view .cliqr--mc-description{font-weight:400;font-size:2.75em}#cliqr-container .cliqr--multiple-choice-show-view table,#cliqr-poll-container .cliqr--multiple-choice-show-view table{font-size:2em;line-height:1.5;overflow:hidden;border-collapse:collapse}#cliqr-container .cliqr--multiple-choice-show-view table td,#cliqr-poll-container .cliqr--multiple-choice-show-view table td{padding-top:.75em}#cliqr-container .cliqr--multiple-choice-show-view table .nominal,#cliqr-poll-container .cliqr--multiple-choice-show-view table .nominal{color:#999;width:1em}#cliqr-container .cliqr--multiple-choice-show-view table .text,#cliqr-poll-container .cliqr--multiple-choice-show-view table .text{padding-left:.75em}#cliqr-container .cliqr--multiple-choice-create-view .cliqr--mc-description .cke_contents,#cliqr-container .cliqr--multiple-choice-edit-view .cliqr--mc-description .cke_contents,#cliqr-poll-container .cliqr--multiple-choice-create-view .cliqr--mc-description .cke_contents,#cliqr-poll-container .cliqr--multiple-choice-edit-view .cliqr--mc-description .cke_contents{font-size:2.75em}#cliqr-container .cliqr--multiple-choice-create-view .choices .choice-input,#cliqr-container .cliqr--multiple-choice-edit-view .choices .choice-input,#cliqr-poll-container .cliqr--multiple-choice-create-view .choices .choice-input,#cliqr-poll-container .cliqr--multiple-choice-edit-view .choices .choice-input{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}#cliqr-container .cliqr--multiple-choice-create-view .choices input,#cliqr-container .cliqr--multiple-choice-edit-view .choices input,#cliqr-poll-container .cliqr--multiple-choice-create-view .choices input,#cliqr-poll-container .cliqr--multiple-choice-edit-view .choices input{-webkit-box-flex:1;-ms-flex:1;flex:1;margin:0;padding:4px 6px;border:1px solid #ccc;-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.024);box-shadow:inset 0 1px 2px rgba(0,0,0,.024)}#cliqr-container .cliqr--multiple-choice-create-view .choices span.nominal,#cliqr-container .cliqr--multiple-choice-edit-view .choices span.nominal,#cliqr-poll-container .cliqr--multiple-choice-create-view .choices span.nominal,#cliqr-poll-container .cliqr--multiple-choice-edit-view .choices span.nominal{line-height:3em;display:inline-block;background-color:#e7ebf1;padding:0 .5em}#cliqr-container .cliqr--multiple-choice-create-view .choices .choice-input+.choice-input,#cliqr-container .cliqr--multiple-choice-edit-view .choices .choice-input+.choice-input,#cliqr-poll-container .cliqr--multiple-choice-create-view .choices .choice-input+.choice-input,#cliqr-poll-container .cliqr--multiple-choice-edit-view .choices .choice-input+.choice-input{margin-top:.5em}#cliqr-container .cliqr--multiple-choice-create-view .choices .choice-input input,#cliqr-container .cliqr--multiple-choice-edit-view .choices .choice-input input,#cliqr-poll-container .cliqr--multiple-choice-create-view .choices .choice-input input,#cliqr-poll-container .cliqr--multiple-choice-edit-view .choices .choice-input input{display:inline-block}#cliqr-container .cliqr--multiple-choice-create-view .choices .cliqr--mc-choice-actions,#cliqr-container .cliqr--multiple-choice-edit-view .choices .cliqr--mc-choice-actions,#cliqr-poll-container .cliqr--multiple-choice-create-view .choices .cliqr--mc-choice-actions,#cliqr-poll-container .cliqr--multiple-choice-edit-view .choices .cliqr--mc-choice-actions{margin-left:8px}#cliqr-container .cliqr--multiple-choice-create-view .choices .choices-required,#cliqr-container .cliqr--multiple-choice-edit-view .choices .choices-required,#cliqr-poll-container .cliqr--multiple-choice-create-view .choices .choices-required,#cliqr-poll-container .cliqr--multiple-choice-edit-view .choices .choices-required{position:relative}#cliqr-container .cliqr--multiple-choice-create-view .choices .choices-required select,#cliqr-container .cliqr--multiple-choice-edit-view .choices .choices-required select,#cliqr-poll-container .cliqr--multiple-choice-create-view .choices .choices-required select,#cliqr-poll-container .cliqr--multiple-choice-edit-view .choices .choices-required select{position:absolute;left:0;top:-25px;z-index:-1;border:none}#cliqr-container .cliqr--multiple-choice-poll-view .description,#cliqr-poll-container .cliqr--multiple-choice-poll-view .description{font-size:2em}#cliqr-container .cliqr--multiple-choice-poll-view li,#cliqr-poll-container .cliqr--multiple-choice-poll-view li{padding:0}#cliqr-container .cliqr--multiple-choice-poll-view label,#cliqr-poll-container .cliqr--multiple-choice-poll-view label{display:block;padding:.75rem 1.25rem;margin:0}",""])}});
//# sourceMappingURL=task-type.multiple-choice.chunk.js.map