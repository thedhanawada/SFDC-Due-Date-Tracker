@isTest
public class RecordDataServiceTest {

    @isTest
    static void testGetRecordData() {
        Account testAccount = new Account(Name = 'Test Account');
        insert testAccount;

        Account resultAccount = (Account)RecordDataService.getRecordData(
            'Account', testAccount.Id, 'Name', 'Industry'
        );

        System.assertNotEquals(null, resultAccount);
        System.assertEquals('Test Account', resultAccount.Name);
    }
}