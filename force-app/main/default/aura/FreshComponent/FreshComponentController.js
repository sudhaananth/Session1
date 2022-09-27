({
	myAction : function(component, event, helper)  
    {alert("Hello there!")},
            Add : function(component, event, helper) {
var a=component.get("v.num1");
var b=component.get("v.num2");
var total = parseInt(a)+parseInt(b);
component.set("v.total",total);
component.set("v.isAdd",true);
component.set("v.isSub",false);
component.set("v.isMul",false);
                
                var event = $A.get("e.c:mathAppEvent");
                
                event.setParams
                ({
    "eventNum1" : a,
    "eventNum2" : b   
                });
     
    event.fire();

},
Sub : function(component, event, helper) {
var a=component.get("v.num1");
var b=component.get("v.num2");
var total=parseInt(a)-parseInt(b);
component.set("v.total",total);
component.set("v.isAdd",false);
component.set("v.isSub",true);
component.set("v.isMul",false);
},
Mul : function(component, event, helper) {
var a=component.get("v.num1");
var b=component.get("v.num2");
var total=parseInt(a)*parseInt(b);
component.set("v.total",total);
component.set("v.isAdd",false);
component.set("v.isSub",false);
component.set("v.isMul",true);
},
Clear : function(component, event, helper) {
component.set("v.total",0);
component.set("v.num1",0);
component.set("v.num2",0);
component.set("v.isAdd",false);
component.set("v.isSub",false);
component.set("v.isMul",false);


		//now here we r firing the event with values, before that we need to reg to that event in Cmp.
    
     
    
}
	
})