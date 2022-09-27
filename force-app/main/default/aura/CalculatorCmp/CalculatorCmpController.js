({
	 Add : function(component, event, helper) 
    {
       	
        var s1=component.get("v.variable1");
        var s2=component.get("v.variable2");
        var s3=component.get("v.variable3");
        var res;
        
        switch(s3)
        {
            case"Addition":
                res=parseInt(s1)+parseInt(s2);
                component.set("v.result",res);
                break;
            case"Subtraction":
                res=s1-s2;
                component.set("v.result",res);
                break;
             case"Multiplication"||"Mul":
                res=s1*s2;
                component.set("v.result",res);
                 break;
             case"Division":
                res=s1/s2;
                component.set("v.result",res);
                break;
            default:
                alert('Please enter only Addition,Subtraction,Multiplication,Division');
                
        }
        	}
})