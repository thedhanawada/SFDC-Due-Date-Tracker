public with sharing class RecordDataService {

    @AuraEnabled(cacheable=true)
    public static SObject getRecordData(String objectName, String recordId, String fieldToCompare, String comparisonDateField) {
        String query = 'SELECT Id, ' + 
                        fieldToCompare + ', ' + 
                        comparisonDateField + 
                        ' FROM ' + objectName + 
                        ' WHERE Id = :recordId LIMIT 1';
        SObject result = Database.query(query);
        return result;
    }
}
