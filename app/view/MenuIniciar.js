Ext.define('realPneus.view.menuIniciar', {
    extend: 'Ext.form.Panel',
     requires: [
	'Ext.Toolbar' 
     ],
    alias: 'widget.menuiniciar',
    
    config: {
	items: [
	    {
		docked: 'top',
		xtype: 'toolbar',
		ui: 'light',
		title: 'Menu Iniciar'
	    }//,
//	    {
//		xtype:'container',
//		height: 15
//	    },
//	    {
//		xtype: 'button',
//		text: 'teste',
//		height: 75,
//		action: 'testesql'
//	    },
//	    {
//		xtype:'container',
//		height: 15
//	    }
	]
    }
});