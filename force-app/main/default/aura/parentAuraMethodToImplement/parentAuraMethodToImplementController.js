({
	myAction : function(component, event, helper) 
    {
        var childCmp = component.find("childComp");
        var retMsg = childCmp.exposeMethod('Hai', 'Universe');
            alert('return Message is :'+ retMsg) ;                                 
		
	}
})