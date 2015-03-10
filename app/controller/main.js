Ext.define('realPneus.controller.main', {
    extend: 'Ext.app.Controller',
    requires: [
    ],
    
    config: {
	routes: {
	    '': 'showMenuIniciar',
	    'index.html':'showMenuIniciar'
	},
	refs: {	   
	    menuIniciar:{
		xtype:'menuiniciar',
		selector: 'menuiniciar',
		autoCreate: true
	    }


	},
	control: {

	    
	}
    },
    init: function () {
	console.log('Controller initialized');
	alert("oi");




    },
    showMenuIniciar: function(){
	Ext.Viewport.setActiveItem(this.getMenuIniciar());
    }
   

});

