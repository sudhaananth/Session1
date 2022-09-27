({
	helperAddition: function(component,event,helper)
    { 
        debugger;
      var num1=component.get("v.variable1");
      var num2=component.get("v.variable2");
        console.log('num1 is :' + num1);
      var res=num1+num2;
         component.set("v.result",res);
 	
	},
    
    helperDivision: function(component,event,helper)
    {
      var num1=component.get("v.variable1");
      var num2=component.get("v.variable2");
      var res=num1/num2;
         component.set("v.result",res);
 	
	},
 
    helperSubtraction: function(component,event,helper)
    {
      var num1=component.get("v.variable1");
      var num2=component.get("v.variable2");
      var res=num1-num2;
         component.set("v.result",res);
 	
	},

    helperMultiplcation: function(component,event,helper)
    {
      var num1=component.get("v.variable1");
      var num2=component.get("v.variable2");
      var res=num1*num2;
         component.set("v.result",res);
 	
	}
})