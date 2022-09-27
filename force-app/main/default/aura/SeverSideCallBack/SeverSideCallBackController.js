({
	callApex : function(component, event, helper)
    {
       var inpstr= component.get("v.inputstr");
       var action= component.get("c.echoMethod");
        
        action.setParams({inputstr : inpstr});
                
        action.setCallback(this, function(response)
        { 
           var responseStr= response.getReturnValue();
           console.log('Response is' + responseStr) ;
            
            component.set("v.returnstr", responseStr);
        });
        
        $A.enqueueAction(action);
        
        
		
	}
})