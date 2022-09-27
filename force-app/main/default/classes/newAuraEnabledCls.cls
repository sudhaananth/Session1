public with sharing class newAuraEnabledCls {
    @AuraEnabled
    public static List<Contact> getContacts() {
        List<Contact> contacts = [SELECT Id, Name, AccountId, Phone, Email 
                FROM Contact];
        return contacts;
    }
}