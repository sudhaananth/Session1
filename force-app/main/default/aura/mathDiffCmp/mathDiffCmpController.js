({
	callDiff : function(component, event, helper) {
		
        var a= event.getParam("eventNum1");
        var b= event.getParam("eventNum2");
        var c= a - b;
        component.set("v.diffResult",c);
    }
        
})