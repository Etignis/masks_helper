var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
var is_android = navigator.platform.toLowerCase().indexOf("android") > -1;
if(is_firefox && is_android){
	alert ('Мобильный firefox не отображает все это великолепие')
}

document.addEventListener('DOMContentLoaded', function(){

function randd(min, max) {
  return Math.floor(arguments.length > 1 ? (max - min + 1) * Math.random() + min : (min + 1) * Math.random());
};
function shuffle(o, bRand){
	if(bRand){
    for(var j, x, k = o.length; k; j = Math.floor(Math.random() * k), x = o[--k], o[k] = o[j], o[j] = x);
	}
  return o;
};

function _formatText(sText, oParams){
	if(!sText) {
		return "";
	}

	// if(sText.includes("●")) {
	// 	let aLines = t.split(/●/);
	// 	let sStart = aLines.shift();
	// 	let aList = aLines.map(item=>`<li>${item.trim()}</li>`);
	// 	return `${sStart} <ul>${aList.join("")}</ul>`;
	// }
	
	sText = sText	
		.replace(/<([^#]+)(#[^\>]+)>/ig, `<a href='$2' class='internal'>$1</a>`)
		.replace(/\[([^\[\]]+)\]/g, "<b>$1</b>")
		.replace(/\{([^\{\}]+)\}/g, "<i>$1</i>")							
		.replace(/\%([^\%]+)\%/g, `<mark class='label' data-label='$1'>$1</mark>`);

	if(oParams && oParams.noP) {
		sText = sText		
			.split("||").map(el=>`${el}`).join("<br>\r\n>")
	} else {
		sText = sText	
			.split("||").map(el=>`<p>${el}</p>`).join("\r\n")
	}

	return sText;
}

function parseDie(sDie){
	// nDn+n
	let oDice = sDie.match(/(\d+)?d(\d+)([+-]\d+)?/i); // 1,2,4,5
	
	let nDie = Number(oDice[2]);
	let nCount = Number(oDice[1]);
	let nMod = Number(oDice[3]);
	
	let nResult = 0;

	if(nDie) {
		nResult = randd(1,nDie);
	}
	if(nCount) {
		nResult = nResult*nCount;
	}
	if(nMod) {
		nResult = nResult+nMod;
	}
	return nResult;
}

	////////////////////
	
Vue.component('toggler', {
	props: {		
		title: {
			type: String,
			default: ""
		},	
		active: {
			type: Boolean,
			default: false
		},	
		code: {
			type: String,
			default: ""
		},
		
	},
	data: function(){
		return {};
	},
	methods: {
		toggle: function(){
			this.$emit('toggle', this.code);
		}
		
	},
	computed: {
		_style_class: function(){
			let aClasses = ['toggler'];
			if(this.active) {
				aClasses.push('active');
			}

			return aClasses;
		}
	},
	created: function(){
		
	},
	template: `<button :class="_style_class" @click="toggle">{{this.title}}</button>`
});
	
Vue.component('item', {
	props: {		
		title: {
			type: String,
			default: ""
		},	
		src: {
			type: String,
			default: ""
		},	
		name: {
			type: String,
			default: ""
		},
		checked: {
			type: String,
			default: ""
		},
		ico: {
			type: String,
			default: ""
		},
		type: {
			type: String,
			default: ""
		},
		kind: {
			type: String,
			default: ""
		},
		color: {
			type: String,
			default: ""
		},
		style_class: {
			type: String,
			default: ""
		},
	},
	data: function(){
		return {};
	},
	methods: {
		labelClick: function(oEvent){
			if(this.type == 'group_title') {
				return false;
			}
			let o = {
				src: this.src, 
				name: this.name
			};
			this.$emit('lclick', o);
		},
		
	},
	computed: {
		id: function(){
			return "ch_"+this.val;
		},
		selected: function(){
			return (this.type != 'group_title' && this.checked == this.name)? `selected_${randd(1,6)}`: "";
		},
		group_title: function(){
			return this.type == 'group_title'? 'group_title':"";
		},
		additional: function(){
			return this.style_class || ""
		},
		_type: function(){
			switch(this.type){
				case "default": return "○"; break;
				case "Advanced1": return "•"; break;
				case "Advanced2": return "☀"; break;
			}
			return "";
		},
		_kind: function(){
			switch(this.kind){
				// case "0": return "kind_zero"; break;
				// case "1": return "kind_official"; break;
				// case "2": return "kind_homebrew"; break;
				case "0": return "<span title='Ход отсутсвует в рулбуке, но сформулирован на основе правил'>∅</span>"; break;
				case "1": return "<span title='Официальный материал из рулбука'>✓</span>"; break;
				case "2": return "<span title='Кастомный/фанатский ход'>✧</span>"; break;
			}
			return "";
		},
		_type_title: function(){
			switch(this.type){
				case "default": return "Стартовый"; break;
				case "Advanced1": return "Продвинутый 1-5"; break;
				case "Advanced2": return "Продвинутый 1-10"; break;
			}
			return "";
		}
	},
	created: function(){
		
	},
	template: `<li @click="labelClick" :class='[group_title, selected, additional]'>
	<span :title="_type_title" v-if="_type.length>0">{{_type}}</span>
	<span v-html="title" v-else></span>

	<span v-html="_kind" class='menu_item_kind' v-show='_kind.length>2'></span>
</li>`
});

Vue.component("move_link", {
	props: {
		
	},
	
	data: function(){
		return {}
	},
	methods: {
		
	},
	
	computed: {
		
	},
	
	template: ``
});

Vue.component('move0', {
	props: {		
		title: {
			type: String,
			default: ""
		},	
		src: {
			type: String,
			default: ""
		},	
		name: {
			type: String,
			default: ""
		},
		requirements: {
			type: String,
			default: ""
		},
		replace: {
			type: String,
			default: ""
		},
		condition: {
			type: String,
			default: ""
		},
		results: {
			type: Array,
			default: function(){return []}
		},
		variants: {
			type: [Object, Array],
			default: function(){return {}}
		},
		pc: {
			type: [Object, Array],
			default: function(){return {}}
		},
		npc: {
			type: [Object, Array],
			default: function(){return {}}
		},
		
	},
	data: function(){
		return {};
	},
	methods: {
		show_fail: function(oEvent){
	
			this.$emit('fail', oEvent);
		}		
	},
	computed: {
		isVariants: function(){
			return this.variants /*&& this.variants.list*/
		},
		
		isPC: function(){
			return this.pc;
		},
		isNPC: function(){
			return this.npc;
		},

		_results: function(){
			if(this.results && this.results.length>0) {
				return this.results.map(el=>{
					let oInnerList = el.list? el.list.data.map(el=>el.title) : [];
					return {text: el.title, links: el.links , list: oInnerList}//`${el.title} ${sLinks}`
				})
			}
			return [];
		},
		_condition: function(){
			let sText = _formatText(this.condition)
				/*.replace(/\[([^\[\]]+)\]/g, "<b>$1</b>")
				.replace(/\{([^\[\]]+)\}/g, "<i>$1</i>")*/;
			if(sText.includes("●")) {
				let aLines = sText.split(/●/);
				let sStart = aLines.shift();
				let aList = aLines.map(el=>`<li>${el.trim()}</li>`);
				return `${sStart} <ul>${aList.join("")}</ul>`;
			}
			return sText;
		},
		_requirements_title: function(){
			return (this.requirements)? "Требуется: ":"";
		},
		_replace_title: function(){
			return (this.replace)? "Заменяет: ":"";
		},
		
		_variants_list: function(){
			let aVariants = [];
			if(this.variants) {
				if(Array.isArray(this.variants)) {
					aVariants = this.variants;
				} else if (typeof this.variants === "object"){
					aVariants.push(this.variants);
				}
			}
			return aVariants.map(el=>({
				title: _formatText(el.title),
				list: el.list?el.list.map(item=>({title: _formatText(item.title)})): []
			}));
		},
		
		pc_title: function(){
			return this.pc && this.pc.title || "";  
		},
		npc_title: function(){
			return this.npc && this.npc.title || "";  
		},
		
		_npc_results: function(){
			if(this.npc && this.npc.results && this.npc.results.length>0) {
				return this.npc.results.map(el=>{
					let oInnerList = el.list? el.list.data.map(el=>el.title) : [];
					return {text: el.title, links: el.links , list: oInnerList}//`${el.title} ${sLinks}`
				})
			}
			return [];
		},
		_pc_results: function(){
			if(this.pc && this.pc.results && this.pc.results.length>0) {
				return this.pc.results.map(el=>{
					let oInnerList = el.list? el.list.data.map(el=>el.title) : [];
					return {text: el.title, links: el.links , list: oInnerList}//`${el.title} ${sLinks}`
				})
			}
			return [];
		},
		
		
		_npc_variants_list: function(){
			let aVariants = [];
			if(this.npc && this.npc.variants) {
				if(Array.isArray(this.npc.variants)) {
					aVariants = this.npc.variants;
				} else if (typeof this.npc.variants === "object"){
					aVariants.push(this.npc.variants);
				}
			}
			return aVariants.map(el=>({
				title: _formatText(el.title, {noP:true}),
				list: el.list?el.list.map(item=>({title: _formatText(item.title, {noP:true})})): []
			}));
		},
		_pc_variants_list: function(){
			let aVariants = [];
			if(this.pc && this.pc.variants) {
				if(Array.isArray(this.pc.variants)) {
					aVariants = this.pc.variants;
				} else if (typeof this.pc.variants === "object"){
					aVariants.push(this.pc.variants);
				}
			}
			return aVariants.map(el=>({
				title: _formatText(el.title, {noP:true}),
				list: el.list?el.list.map(item=>({title: _formatText(item.title, {noP:true})})): []
			}));
		},
		/*
		_varinats_title: function(){
			if(!this.variants || !this.variants.title) {
				return "";
			}
			return  _formatText(this.variants.title);
		},
		_variants_list: function(){
			if(this.variants.list && this.variants.list.length>0) {
				let aList = [];
				for (let i=0; i<this.variants.list.length; i++) {
					aList.push(this.variants.list[i]);
					aList[i].title = _formatText(aList[i].title)
				}
				return aList;
			}
			return [];
		}*/
	},
	created: function(){
		
	},
	template: `<article class='move'>
		<h1 class='title'>{{title}}</h1>
		<div class='requirements'>{{_requirements_title}}{{requirements}}</div>
		<div class='replace'>{{_replace_title}}{{replace}}</div>
		<div class='condition' v-html="_condition"></div>
		
		<ul>
			<li v-for="item in _results">
				<span v-html="item.text" data-text="1"></span>
				<ul>
					<li v-for="el in item.list" >
						<span v-html="el" data-list="2"></span>
					</li>
				</ul>
				
				<ul class='fail_links'>
					<li v-for="el in item.links" >
						<a :href="el.href" class='move_link' @click.stop.prevent="show_fail(el)">{{el.title}}</a>
					</li>
				</ul>
			</li>
		</ul>
		<div v-if="isVariants">
			<div v-for="variant in _variants_list">
				<div v-html="variant.title"></div>
				<ul>
					<li v-for="item in variant.list">
						<span v-html="item.title">
						</span>
					</li>
				</ul>
			</div>
			
		</div>
		
		<div v-if="isNPC" class='npc_block'>
			<h2>{{npc_title}}</h2>
			<ul>
				<li v-for="item in _npc_results">
					<span v-html="item.text" data-text="1"></span>
					<ul>
						<li v-for="el in item.list" >
							<span v-html="el" data-list="2"></span>
						</li>
					</ul>
					
					<ul class='fail_links'>
						<li v-for="el in item.links" >
							<a :href="el.href" class='move_link' @click.stop.prevent="show_fail(el)">{{el.title}}</a>
						</li>
					</ul>
				</li>
			</ul>
			<div v-for="variant in _npc_variants_list">
				<div v-html="variant.title"></div>
				<ul>
					<li v-for="item in variant.list">
						<span v-html="item.title">
						</span>
					</li>
				</ul>
			</div>
			
		</div>
		
		<div v-if="isPC" class='pc_block'>
			<h2>{{pc_title}}</h2>
			<ul>
				<li v-for="item in _pc_results">
					<span v-html="item.text" data-text="1"></span>
					<ul>
						<li v-for="el in item.list" >
							<span v-html="el" data-list="2"></span>
						</li>
					</ul>
					
					<ul class='fail_links'>
						<li v-for="el in item.links" >
							<a :href="el.href" class='move_link' @click.stop.prevent="show_fail(el)">{{el.title}}</a>
						</li>
					</ul>
				</li>
			</ul>
			<div v-for="variant in _pc_variants_list">
				<div v-html="variant.title"></div>
				<ul>
					<li v-for="item in variant.list">
						<span v-html="item.title">
						</span>
					</li>
				</ul>
			</div>
			
		</div>
		
</article>`
});

Vue.component('move', {
	props: {		
		title: {
			type: String,
			default: ""
		},	
		// src: {
			// type: String,
			// default: ""
		// },	
		name: {
			type: String,
			default: ""
		},	
		info: {
			type: String,
			default: ""
		},
		after: {
			type: String,
			default: ""
		},
		pre: {
			type: String,
			default: ""
		},
		notes: {
			type: [String, Array],
			default: ""
		},
		translator: {
			type: [String, Array],
			default: ""
		},
		kind: {
			type: String,
			default: ""
		},
		modifier: {
			type: String,
			default: ""
		},
		replace: {
			type: String,
			default: ""
		},
		condition: {
			type: String,
			default: ""
		},		
		
	},
	data: function(){
		return {};
	},
	methods: {
		show_fail: function(oEvent){
	
			this.$emit('fail', oEvent);
		}		
	},
	computed: {		
		_condition: function(){
			let sText = _formatText(this.condition)
				/*.replace(/\[([^\[\]]+)\]/g, "<b>$1</b>")
				.replace(/\{([^\[\]]+)\}/g, "<i>$1</i>")*/;
			if(sText.includes("●")) {
				let aLines = sText.split(/●/);
				let sStart = aLines.shift();
				let aList = aLines.map(el=>`<li>${el.trim()}</li>`);
				return `${sStart} <ul>${aList.join("")}</ul>`;
			}
			return sText;
		},
		_info: function(){
			let sText = _formatText(this.info);//.split("|").join("<br>");
			return sText;
		},
		_after: function(){
			let sText = _formatText(this.after);//.split("|").join("<br>");
			return sText;
		},
		_pre: function(){
			let sText = _formatText(this.pre);//.split("|").join("<br>");
			return sText;
		},
		_replace: function(){
			if(!this.replace) {
				return "";
			}
			let sText = _formatText(this.replace, {noP: true});//.split("|").join("<br>");
			return `Заменяет ход ${sText}`;
		},
		_notes: function(){
			let sText = '';
			if(Array.isArray(this.notes) && this.notes.length) {
				sText = this.notes.map(el=>_formatText(el, {noP: false})).join('\r\n');
			} else if(this.notes && this.notes.length>2){
				sText = _formatText(this.notes);
			}
			
			return sText?`Пояснение из книги правил:<br>`+sText:"";
		},
		_translator: function(){
			let sText = '';
			if(Array.isArray(this.translator) && this.translator.length) {
				sText = this.translator.map(el=>_formatText(el, {noP: false})).join('\r\n');
			} else if(this.translator && this.translator.length>2){
				sText = _formatText(this.translator);
			}
			
			return sText?`Примечание переводчика:<br>`+sText:"";
		},
		_modifier: function(){
			let sText = '';
			if(Array.isArray(this.modifier)) {
				sText = this.modifier.map(el=> _formatText(el), {noP: true}).join('');
			} else {
				sText = _formatText(this.modifier, {noP: true});
			}		 
		
			return sText;
		},
		_requirements_title: function(){
			return (this.requirements)? "Требуется: ":"";
		},
		_replace_title: function(){
			return (this.replace)? "Заменяет: ":"";
		},
		_kind: function(){
			switch(String(this.kind)){
				case "0": return "<span class='symbol'>∅</span> Ход отсутсвует в рулбуке, но сформулирован на основе правил"; break;
				case "1": return "<span class='symbol'>✓</span> Официальный материал из рулбука"; break;
				case "2": return "<span class='symbol'>✧</span> Кастомный/фанатский ход"; break;
			}
			return "";
		},
	},
	created: function(){
		
	},
	template: `<article class='move'>
		<h1 class='title'>{{title}}</h1>
		<div class='kind' v-show='_kind.length>3' v-html='_kind'></div>
		<div class='replace' v-html="_replace" v-show="_replace.length>1"></div>
		<div class='move_info' v-html="_pre" v-show="_pre.length>1"></div>
		<div class='condition' v-html="_condition"></div>
		<div class='modifier' v-html="_modifier" v-if="_modifier.length>2"></div>
		<div class='move_info' v-html="_info" v-show="_info.length>1"></div>
		
		<slot></slot>	
		
		<div class='move_info' v-html="_after" v-show="_after.length>1"></div>	
		
		<div class='notes' v-html="_notes" v-if="_notes.length>2"></div>
		<div class='translator' v-html="_translator" v-if="_translator.length>2"></div>
</article>`
});

Vue.component('move_part', {
	props: {		
		title: {
			type: String,
			default: ""
		},	
		info: {
			type: String,
			default: ""
		},
		after: {
			type: String,
			default: ""
		},
		type: {
			type: String,
			default: ""
		},			
		list: {
			type: [Object, Array],
			default: function(){return {}}
		},			
		params: {
			type: [Object, Array],
			default: function(){return {}}
		},
	},
	data: function(){
		return {};
	},
	methods: {
		
	},
	computed: {	
		_list: function(){
			let aList = [];
			if(this.list) {
				if(Array.isArray(this.list)) {
					aList = this.list
				} else if (typeof this.list === "object" && this.list.data){
					aList = this.list.data;
				}
			}
			
			let aResultList = aList.map(el=>({
				title: _formatText(typeof el=='object'? el.title : el, {noP: true}),
				list: el.list?el.list.map(item=>({title: _formatText(item.title, {noP: true})})): []
			}));
			
			console.dir(aResultList);
			
			return aResultList;
		},
		
		_isList: function(){
			return this._list.length>0;
		},

		_flex_class: function(){
			let aClasses = ['move_part_flex'];
			if(this.params && this.params.list_first) {
				aClasses.push('list_first');
			}

			return aClasses;
		},

		_info: function(){
			return this.info?  _formatText(this.info, {noP: true}) : '';
		},
		_after: function(){
			return this.after?  _formatText(this.after, {noP: true}) : '';
		}
		
		
	},
	created: function(){
		
	},
	template: `<article class='move_part' :data-type="type">
		<h2 class='title' v-show='title.length>0'>{{title}}</h2>
		<span v-show='_info.length>0' class='m_p_info' v-html="_info"></span>
		
		<div :class='_flex_class'>
			<slot></slot>

			<ul v-show="_isList">
				<li v-for="item in _list">
					<span v-html="item.title" data-text="1"></span>
					<ul>
						<li v-for="el in item.list" >
							<span v-html="el" data-list="2"></span>
						</li>
					</ul>				
				</li>
			</ul>
		</div>

		<span v-show='_after.length>0' class='m_p_after' v-html="_after"></span>
		
</article>`
});

Vue.component('card', {
	props: {		
		title: {
			type: String,
			default: ""
		},	
		tags: {
			type: Array,
			default: function(){return []}
		},	
		cost: {
			type: String,
			default: ""
		},
		level: {
			type: Number,
			default: -1
		},
		weight: {
			type: String,
			default: ""
		},
		hold: {
			type: String,
			default: ""
		},
		description: {
			type: String,
			default: ""
		}
		
	},
	data: function(){
		return {};
	},
	methods: {
		show_fail: function(oEvent){
	
			this.$emit('fail', oEvent);
		}		
	},
	computed: {
		_tags: function(){
			return this.tags.map(el=>`<span class='tag'>${el[0].toUpperCase() + el.slice(1)}</span>`).join(", ");
		},
		_description: function(){
			return _formatText(this.description);
		},
		
		_level: function(){
			if(this.level==0) {
				return "фокус";
			}
			if(this.level>0) {
				return `${this.level} уровень`;
			}
			return "";
		}
	},
	created: function(){
		
	},
	template: `<article class='card'>
		<h1 class='title'>{{title}}<span>{{_level}}</span></h1>
		<div class='row tag_row' v-if="tags.length > 0">
			<div v-html="_tags"></div>
		</div>
		<div class="row" v-if="String(cost).length > 0">
			<div>Цена:</div>
			<div>{{cost}} монет</div>
		</div>
		<div class="row" v-if="String(weight).length > 0">
			<div>Вес:</div>
			<div>{{weight}}</div>
		</div>
		<div class="row" v-if="String(hold).length > 0">
			<div>Запас:</div>
			<div>{{hold}}</div>
		</div>
		<div v-if="String(description).length > 0">
			<div class='description' v-html="_description"></div>
		</div>
</article>`
});

Vue.component('chooser', {
	props: {		
		title: {
			type: String,
			default: ""
		},	
		type: {
			type: String,
			default: ""
		},	
		name: {
			type: String,
			default: ""
		},
		val: {
			type: [String, Number]
		},
		selected: {
			type: Boolean,
			default: false
		}
		
	},
	data: function(){
		return {};
	},
	methods: {
		check: function(oEvent){
			let bChecked = !this.selected;
			let o = {
				key: this.name, 
				value: this.val,
				checked: bChecked
			};
			this.$emit('iclick', o);
		}
	},
	computed: {
		
	},
	created: function(){
		
	},
	template: `<li class='no_offset'>
		<span :class='{checkboxer: true, selected: selected }' v-if="type=='checkbox'" @click="check">{{title}}</span>
	</li>`
});

Vue.component('lister', {
	props: {		
		title: {
			type: String,
			default: ""
		},		
		subtitle: {
			type: String,
			default: ""
		},	
		content: {
			
		},
		
	},
	data: function(){
		return {};
	},
	methods: {
		
	},
	computed: {
		_title: function(){
			if(Array.isArray(this.content)) {
				return this.content[0];
			} else if(typeof this.content == 'object') {
				return this.content.title || "";
			} else{
				return this.content;
			}
			
		},
		_subtitle: function(){
			if(Array.isArray(this.content)) {
				return this.content[1];
			} else if(typeof this.content == 'object') {
				return this.content.subtitle || "";
			} 
			return ""
		},
		
	},
	created: function(){
		
	},
	template: `<li class='no_offset lister item'>
		<div v-html="title"></div>
		<div v-html="subtitle" v-if="subtitle.length > 0" style="font-style: italic"></div>
	</li>`
});

	
var app = new Vue({
	el: '#app',
	data: {
		data: {},
		menu: {},
		
		structure: {},
		section: [],
		subsection: [],
		checked: {
			main: "",
			section: "",
			subsection: ""
		},

		filterbar: {
			search: ''
		},
		
		showPreloader: true,
		
		section_actions: [{
			title: "Случайный злодей",
			key: "random_villains",
			from: "villains",
			action: "get_random_villains",
			visible: false,
			showResult: false,
			notes: [
				"Представленный вариант скорее отправная точка для фантазии, чем готовый результат.",
				"У Злодея может быть от 1 до 5 {состояний}. Чем больше состояний, тем более могущественный противник. Всегда можно увеличить или уменьшить количество состяний, чтобы сделать противостоянее сложнее/проще. Когда злодей должен получить новое состояние, но все уже отмечены, он повержен. Злодей может сбежать до того, как его победят.",
				"Когда Злодей получает {состояние}, он сразу же делает соотвествующих ход состояния."
			],
			
			list: [				
				{
					key: "",
					title: "Псевдоним",
					value: "",
					params: `villains/alias`
				},
				// {
				// 	key: "",
				// 	title: "Настоящее имя",
				// 	value: "",
				// 	params: `villains/real_name`
				// },
				{
					key: "",
					title: "Способности",
					value: "",
					params: `villains/abilities`,
					count: [2,3,4]
				},
				{
					key: "",
					title: "Мотивы",
					value: "",
					params: `villains/drives`
				},
				{
					key: "m_1",
					title: "Ход 1",
					value: "",
					params:`villains/moves`
				},
				{
					key: "m_2",
					title: "Ход 2",
					value: "",
					params:`villains/moves`
				},
				{
					key: "m_3",
					title: "Ход 3",
					value: "",
					params:`villains/moves`
				},
				{
					key: "",
					title: "Ход состояния Испуган",
					value: "",
					params: `villains/condition_moves_afraid`
				},			
				{
					key: "",
					title: "Ход состояния Злой",
					value: "",
					params: `villains/condition_moves_angry`
				},			
				{
					key: "",
					title: "Ход состояния Виноватый",
					value: "",
					params: `villains/condition_moves_guilty`
				},			
				{
					key: "",
					title: "Ход состояния Отчаявшийся",
					value: "",
					params: `villains/condition_moves_hopeless`
				},			
				{
					key: "",
					title: "Ход состояния Неуверенный",
					value: "",
					params: `villains/condition_moves_insecure`
				},			
				{
					key: "",
					title: "Происхождение",
					value: "",
					params: `villains/background`,
					count: [2,3]
				}
			]
		},
		],
		
		random: {
			monster: {
				list: []
			},
			person: {
				list: []
			}
		},

		settings: {
			lang: [
				{
					code: 'ru',
					title: "Рус",
					active: true
				},
				{
					code: 'en',
					title: "Eng",
					active: false
				},
			]
		},
		
		libPathValue: {},
		libPathValueLangs: [],
		list_data: {},
		random_list: [],
		options: [],
		enlarge_menu: false,
		smth: 1,
		
		move_fails: [],
		
		dm_helper: {
			active: false,
			show_sources: false,
			sources: [],
			show_prompt: false,
			prompt: "",
			timer: null 
		},
		
		
		oConfig: {},
		bAppIsReady: false,
		bDebug: location.href.includes("debug=true"),
		
		bModalWinShow: false,
		sModalWinCont: ""
	},

	computed: {

		_section :function(){
			if(this.checked.main && this.section.length) {
				return this.section;
			}
			return [];
		},

		_subsection :function(){
			if(this.checked.section && this.subsection.length) {
				return this.subsection;
			}
			return [];
		},
		
		_libContent: function(){
			
		},
		_random_set_notes: function(){
			let oItem = this.section_actions.find(el=> el.showResult == true);
			if(oItem && oItem.notes){
				if(Array.isArray(oItem.notes)) {
					return _formatText(oItem.notes.join('||'));
				} else if (typeof oItem.notes == 'string') {
					return _formatText(oItem.notes);
				} else {
					return '//не удалось отформатировать текст';
				}
			}
			return "";
		},
		_random_set_result: function (){
			let oItem = this.section_actions.find(el=> el.showResult == true);
			if(oItem){
				return oItem.list;
			}
			return [];
		},
		_random_set_title: function(){
			let oItem = this.section_actions.find(el=> el.showResult == true);
			if(oItem){
				return oItem.title;
			}
			return "";
		},
		displayData: function(){
			let oContent = {};
			let sPre = "";
			let aList = [];
			let o = {list: [], pre: ""};
			
			//let sKey = this.checked.subsection;
			oContent = Array.isArray(this.libPathValue)? this.libPathValue[0] : this.libPathValue; 

			this.options = [];

			let bRand = true;
			if(oContent && oContent.type=='list' /* && oContent.data && oContent.data.list && oContent.data.list.data*/){
				bRand = (oContent.list && oContent.list.meta && oContent.list.meta.bShuffle) !==false;
				aList = oContent.list.data.map((el, i)=>{
					if(typeof el == 'string'){
						return {
							key:i, 
							title: el.includes("|")?`<b>${el.split("|")[0].trim()}</b> ${el.split("|")[1].trim()}`: el
						}
					} else {
						return el
					}
				});
					
				o.list = aList;
			}
						
			if(oContent && oContent.pre){
				sPre = oContent.pre;
				o.pre = sPre;
			}
			if(oContent && oContent.list && oContent.list.meta && oContent.list.meta.options){
				let aOpts = aOptions = oContent.list.meta.options;
				o.options = aOpts;
				this.options = aOpts;
			}
			
			return o
		},
		
		displayItem: function(){
			let oData ={};
			let oContent = Array.isArray(this.libPathValue)? this.libPathValue[0] : this.libPathValue; 
			
			if(oContent && oContent.type=='item' ){
				oData = oContent.item.data;
				return oData;
			}
			
			return {};
		},
		
		showItem: function(){
			return !!(this.displayItem.title);
		},
		
		showResult: function(){
			return (this.displayData.list && this.displayData.list.length>0)
		},
		
		random_result: function(){
			if(!this.displayData.list.length || !this.random_list) {
				return "";
			}
			
			return this.random_list.map(el=> { 
				if(typeof el == 'string') {
					let aParts = el.split("|"); return aParts.length>1?`<b>${aParts[0]}</b><br> ${aParts[1]}`:el					
				} else {
					return el.title;
				}
				
			}).join("<hr>");
		},

		
		displayMove: function(){
			let oData = [];
			let oContent = this.libPathValue;
			
			if(oContent && oContent.type=='move'){
				oData = oContent.move.data;
				return oData;
			}
			
			return {};
		},
		
		displayLangsMove: function(){
			let oData=[];
			let aContent = this.libPathValue;
			if(aContent && Array.isArray(aContent)){
				oData = aContent.map(oContent=>{
					if(oContent && oContent.type=='move'){
						oData = oContent.move.data;
						return oData;
					}
				}).filter(el=>el)
			}
			
			return oData;
		},

		showMove: function(){
			let bMove = !!(this.displayMove && this.displayMove.title || this.displayLangsMove.length) ;
			return bMove;
		},
		
		section_action_list: function(){
			return this.section_actions.filter(el=>el.visible != false);
		},
		
		showRandomSet: function(){
			return this._random_set_result.map(el=>el.value).filter(el=>!!el).length>0
		},
		
		listCompact: function(){
			if(this.displayData && this.displayData.list && this.displayData.list.length>20) {
				let nAvr = this.displayData.list.reduce((a, b, i, arr) => a + b.title.length / arr.length, 0);
				if(nAvr<24){
					return true;
				}
			}
			return false;
		},
		
		showInfo: function(){
			return !this.showMove && !this.showResult && !this.showItem && !this.showRandomSet && !this.about_sub;
		},
		
		sources_info: function(){
			if (this.libPathValue && this.libPathValue.sources) {
				return this.libPathValue.sources.map(el=>_formatText(el)).join("\r\n");
			}
			return "";
		},

		about_sub: function(){
			if(this.libPathValue && this.libPathValue[0] && this.libPathValue[0].type=='about' && this.libPathValue[0].info.length){
				return this.libPathValue[0].info.map(el=>_formatText(el)).join("\r\n");
			}
			return "";
		}
	},
	mounted: function() {
		if(this.bDebug) {
				alert('mount start');
			}
		
		if(this.bDebug) {
			alert('lib version: '+lib_MASKS.version)
		}
		this.structure = lib_MASKS.getStructure(null, null, 'ru', this.filterbar.search);
		if(this.bDebug) {
			alert('structure length: '+this.structure.length)
		}
		
		
		this.dm_helper.sources = this.structure[0].sub;
		
		if(this.bDebug) {
			alert('sources length: '+this.dm_helper.sources.length)
		}
		
		this.dm_helper.sources.forEach(el=>{el.active = el.key=='common'});
		
		// this.updateHash();
		//this._setMoveLinks();
		this.getHash();
		
		// let oLoader = document.querySelector("#loader_overflow");
		// if(oLoader) {
			// oLoader.classList.add("hidden");
			// setTimeout(function(){oLoader.remove()}, 600);
		// }
		setTimeout(function(){
			this.showPreloader=false; this.bAppIsReady = true;
			if(this.bDebug) {
				alert('redy: '+this.bAppIsReady);
			}
		}.bind(this), 300);
		
		//this.bAppIsReady = true;		
		
		if(this.bDebug) {
			alert('redy: '+this.bAppIsReady);
		}
		
		window.addEventListener('hashchange',()=>{this.getHash();})
		
		this._random();
	},
	methods: {

		_random: function(){
			this.random_list = lib_MASKS.getResult(
				`${this.checked.main}/${this.checked.section}/${this.checked.subsection}`, 
				{
					options: this.options
										.filter(el => el.checked)
										.map(el=>el.key)
				}
			);
			
			
			this.libPathValue = this._getWithLangs();			
		},
		lang_switch: function(sCode){
			let oLg = this.settings.lang.find(oLang=> oLang.code == sCode);
			if(oLg) {
				oLg.active = !oLg.active
			}
			if(!this.settings.lang.find(oLang=> oLang.active)) {
				this.settings.lang[0].active = true;
			}
			this.libPathValue = this._getWithLangs();
		},
		_getWithLangs: function(){
			let aResults = this.settings.lang.filter(oLang=>oLang.active)
			.map(oLang=>lib_MASKS.getByPath(this.checked.main, this.checked.section, this.checked.subsection, oLang.code) || null)
			.filter(el=>el);
			return aResults;//.length>1? aResults: aResults[0];
		},
		menu_priority: function(bMax){
			this.enlarge_menu = !!bMax;
		},
		_switchSectionAction: function(sKey){
			for (let i=0; i < this.section_actions.length; i++) {
				this.section_actions[i].visible = this.section_actions[i].from == sKey;
			}
		},
		dataClick: function({src, name}){
			this.checked.main = `${name}`;
			this.checked.section = "";
			this.checked.subsection = "";
			this.section = lib_MASKS.getStructure(this.checked.main, null, 'ru', this.filterbar.search);
			this.subsection = [];
			this.updateHash();
			
			this.move_fails = [];
			this._random();
			
			/// actions
			
			this._switchSectionAction(this.checked.main);
			this.section_actions.forEach(oAction => {oAction.list.forEach(oListItem => {oListItem.value = ""})});
			this.libPathValue = {};
		},
		_formatMenuListbyGroups: function(aList, oMetadata){
			if(oMetadata && oMetadata.group) {
				let sProp = oMetadata.group.by;
				aList = aList.sort((a,b) => {return (a[sProp]==undefined?-1:a[sProp])-(b[sProp]==undefined?-1:b[sProp])});
				let aGroupNames = [];
				let oDict = oMetadata.group.rules;
				aList.forEach(el=>{
					if(!aGroupNames.find(item=>item.value == oDict[el[sProp]])){
						//aGroupNames[el[sProp]] = oDict[el[sProp]];
						aGroupNames.push({
							key: el[sProp],
							value: oDict[el[sProp]]
						})
					}
				});
				for(let i=aGroupNames.length-1; i>=0; i--){
					let sGroup = aGroupNames.pop();
					
					let sGroupTitle = sGroup.value;					
					let nGroupIndex = sGroup.key;

					let nIndex = aList.findIndex(el=>el[sProp]==nGroupIndex);
					if(nIndex!=undefined){
						aList.splice(nIndex,0,{
							type:"group_title",
							title: sGroupTitle
						});
					}
				} 
					
			} /*/else {
				if(aList[0] && aList[0].level != undefined){
					aList = aList.sort((a,b) => {return (a.level==undefined?-1:a.level)-(b.level==undefined?-1:b.level)});
					let aGroupNames = [];
					aList.forEach(el=>{
						if(!aGroupNames.includes(el.level)){
							aGroupNames.push(el.level);
						}
					});
					
					for(let i=aGroupNames.length-1; i>=0; i--){
						let sGroup = aGroupNames.pop();
						let nIndex = aList.findIndex(el=>el.level==sGroup);
						if(nIndex!=undefined){
							aList.splice(nIndex,0,{
								type:"group_title",
								title: `Уровень ${sGroup}`
							});
						}
					} 
					
				} else if(String(aList[0] && aList[0].type).length>0) {
					aList = aList.sort((a,b) => {return (a.type==undefined?-1:a.type)-(b.type==undefined?-1:b.type)});
					let aGroupNames = [];
					aList.forEach(el=>{
						if(!aGroupNames.includes(el.type)){
							aGroupNames.push(el.type);
						}
					});
					
					for(let i=aGroupNames.length-1; i>=0; i--){
						let sGroup = aGroupNames.pop();
						let nIndex = aList.findIndex(el=>el.type==sGroup);
						if(nIndex!=undefined){
							let sGroupTitle = "Начальные ходы";
							if(sGroup==1) {
								sGroupTitle = "Ходы уровней <span class='nowrap'>2-5</span>";
							}
							if(sGroup==2) {
								sGroupTitle = "Ходы уровней <span class='nowrap'>6-10</span>";
							}
							aList.splice(nIndex,0,{
								type:"group_title",
								title: sGroupTitle
							});
						}
					}
				}
			}/**/
			
			return aList;
		},
		sectionClick: function({src, name}){
			this.checked.section = `${name}`;
			this.checked.subsection = "";
			this.libPathValue = this._getWithLangs();
			this.updateHash();
			
			this.move_fails = [];
			this._random();
			
			
			this.section_actions.forEach(oAction => {oAction.list.forEach(oListItem => {oListItem.value = ""})});
			this.libPathValue = {};
		},
		section_actionClick: function({src, name}){
			this.checked.section = "";
			this.checked.subsection = "";
			this.libPathValue = {};
			
			this.section_actions.forEach(oAction => {oAction.showResult = false; oAction.list.forEach(oListItem => {oListItem.value = ""})});
			let oSelected = this.section_actions.find(el=>el.key == name);
			oSelected.showResult=true;
			//this.updateHash();
			if(oSelected && oSelected.list){
				//this[oSelected.action].call(this, oSelected);
				
				oSelected.list.forEach(oItem => {
					let nCount = 1;
					if(oItem.count && Array.isArray(oItem.count) && oItem.count.length>0) {
						nCount = shuffle(oItem.count, true)[0];
					}

					let sVal =  lib_MASKS.getResult(
						oItem.params, {options:{count: nCount}}
					);
					
					oItem.value = this._formatTitle(sVal.join('; '));
				});
			}
		},
		subsectionClick: function({src, name}){
			this.checked.subsection = `${name}`;
			this.updateHash();
			
			this.move_fails = [];
			this._random();			
			
			this.section_actions.forEach(oAction => {oAction.list.forEach(oListItem => {oListItem.value = ""})});
			if(!this.checked.subsection) {
				this.libPathValue = {};
			}
		},
		
		
		_formatTitle: function(sText=''){
			let aParts = sText.split("|");
			return aParts.length>1? `<b>${aParts[0]}</b> ${aParts[1]}` : aParts[0];
		},
		
		get_random_villains: function(){
			let aDrives = this.random_list = lib_MASKS.getResult(
				`villain/drives`, {}
				);
			let aMoves = this.random_list = lib_MASKS.getResult(
				`villain/moves`, {}
				);
			
				
				
				this.section_actions.find(el=> el.key == "random_villain").list = [
					{
						key: "",
						title: "Мотивы",
						value: this._formatTitle(aProps[0]),
						params: `frankenstein/drives`
					},
					{
						key: "",
						title: "Ходы",
						value: aTactics[0],
						params:`frankenstein/moves`
					},
					
				];
				
		},
		
		_onRandomGeneratedClick: function(oData){
			let nCount = 1;
			if(oData.count && Array.isArray(oData.count) && oData.count.length>0) {
				nCount = shuffle(oData.count)[0];
			}
			//debugger;
			let aVals = this.random_list = lib_MASKS.getResult(
				oData.params, {options:{count: nCount}}
				);
			let oItem = this.section_actions.find(el=> el.showResult == true);
			if(oItem){				
				oItem.list.find(el=>el.key ? el.key == oData.key : el.params == oData.params).value = this._formatTitle(aVals.join('; '));
			}
		},
		//moves
		
		onChoose: function({key, value, checked}){
			let oContent = {};			
			let sKey = this.checked.subsection || this.checked.section || this.checked.main;			
			let oOption = this.options.find(el=>el.key==key);
			oOption.checked = checked;
			
			this._random();
		},
		
		show_move_fail: function (oLink){
			let aParts = oLink.href.replace("#", "").split("|");
			let sResult = lib_MASKS.getResult(`${aParts[0]}/${aParts[1]}/${aParts[2]}`, {});
			if(this.move_fails.length > 4) {
				this.move_fails.pop();
			}
			this.move_fails.unshift(sResult[0]);
		},
		
		// helper
		_restart_prompt_animation: function(){
			this.dm_helper.active = false;
			setTimeout(function(){this.dm_helper.active = true;}.bind(this), 10);
		},
		get_prompt: function(){
			let aSelected = this.dm_helper.sources.filter(el=>el.active).map(el=>el.key);
			if(aSelected.length>0){
				this._restart_prompt_animation();
				let sStart = "master_moves";
				let sKey = shuffle(aSelected, true)[0];
				//this.list_data = lib_MASKS.getByPath(sStart, sKey);
				console.log(sStart, sKey);
				let aResult = lib_MASKS.getResult(`${sStart}/${sKey}`, {});
				let aParts = aResult[0].split("|");
				return aParts.length>1? `<b>${aParts[0]}</b><br>${aParts[1]}` : aParts[0];
			}
		},
		switch_prompt: function(bShow){
			this.dm_helper.show_prompt = bShow;
			if(bShow) {
				this.dm_helper.prompt = this.get_prompt();//"ewr wer wwerwer wer wer ";				
			}
		},
		switch_helper: function(){			
			let bActive = this.dm_helper.active = !this.dm_helper.active;
			
			this.switch_prompt(bActive);
			
			if(bActive) {
				this.dm_helper.timer = setInterval(function(){
					this.switch_prompt(this.dm_helper.active);
				}.bind(this), 1000*60);				
			} else {
				clearInterval(this.dm_helper.timer);
			}
			
			this.dm_helper.show_sources = false;
		},
		onPressHelperSrc: function(oOpt){
			//debugger;
			let aOptions = [];
			this.dm_helper.sources.forEach(el=>{
				aOptions.push(el);
				if(el.key == oOpt.key) {
					el.active = !el.active;
				}
			});
			this.dm_helper.sources = aOptions;
		},
		next_prompt: function(){
			this.dm_helper.prompt = this.get_prompt();
		},
		
		
		show_start: function(){
			this.checked.main="";
			this.checked.section="";
			this.checked.subsection="";
			this.updateHash();
			this.getHash();
		},
		

		
		updateHash: function() {
			var aHash = [];
			if(this.checked.main) {
				aHash.push(this.checked.main);
				if(this.checked.section) {
					aHash.push(this.checked.section);
					if(this.checked.subsection) {
						aHash.push(this.checked.subsection);
					}
				}
				
			}
			
			
			if(aHash.length>0) {
				window.location.hash = aHash.join("|");
			} else {
				this.removeHash();
				this.structure = lib_MASKS.getStructure(null, null, 'ru', this.filterbar.search);
			}
		},
		removeHash: function(){
			history.pushState("", document.title, window.location.pathname + window.location.search);
			return false;
		},
		getHash: function() {
			var sHash = window.location.hash.slice(1); // /archive#q=Item_name
			sHash = decodeURIComponent(sHash);
			var oHash = {};
			
			let aHash = sHash.split("|");
			if(aHash[0]) {
				this.checked.main = aHash[0];
				this.section = this._formatMenuListbyGroups(
					lib_MASKS.getStructure(this.checked.main, null, 'ru', this.filterbar.search),
					lib_MASKS.getMetadata(this.checked.main)
				);
				this._switchSectionAction(this.checked.main);
				this.section_actions.forEach(oAction => {oAction.list.forEach(oListItem => {oListItem.value = ""})});
				this.libPathValue = {};
			} else {
				// this.checked.main = "";
			}
			
			if(aHash[1]) {
				this.checked.section = aHash[1];
				this.subsection = this._formatMenuListbyGroups(
					lib_MASKS.getStructure(this.checked.main, this.checked.section, 'ru', this.filterbar.search),
					lib_MASKS.getMetadata(this.checked.main, this.checked.section)
				);
			} else {
				// this.checked.section = "";
				// this.section = [];
			}
			
			if(aHash[2]) {
				this.checked.subsection = aHash[2];
			} else {
				// this.checked.subsection = "";
				// this.subsection = []
			}
			
			this.libPathValue = this._getWithLangs();
			
		}
	}
});

});