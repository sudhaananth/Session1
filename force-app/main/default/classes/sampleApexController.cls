public class sampleApexController {
    @Auraenabled
    public static string echoMethod(string inputstr)
    {
        string input= ' Hi   ' + inputstr + ' :  , this is Apex Contoller ,tagged to Apex cmp to expose this method to .';
        return input;
        
    }

}