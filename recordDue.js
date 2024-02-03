import { LightningElement, api, wire, track } from 'lwc';
import getRecordData from '@salesforce/apex/RecordDataService.getRecordData';

export default class RecordDue extends LightningElement {
    @api recordId;
    @api objectName;
    @api fieldToCompare;
    @api comparisonDateField;

    @track record;
    @track error;

    @wire(getRecordData, {
        objectName: '$objectName',
        recordId: '$recordId', 
        fieldToCompare: '$fieldToCompare', 
        comparisonDateField: '$comparisonDateField'
    })
    wiredRecord({ error, data }) {
        if (data) {
            this.record = data;
            console.log('Record data:', JSON.stringify(data, null, 2));
            this.error = undefined;
        } else if (error) {
            this.error = error;
            console.log('Error:', error);
            this.record = undefined;
        }
    }
    get dueDate() {
        return this.record ? this.record.StartDate : null;
    }
    
    get comparisonDate() {
        return this.record ? this.record.EndDate : null;
    }
    
    get isBreached() {
        const startDate = new Date(this.dueDate);
        const endDate = new Date(this.comparisonDate);
        return startDate && endDate && startDate > endDate;
    }
    
    get daysDifference() {
        const startDate = new Date(this.dueDate);
        const endDate = new Date(this.comparisonDate);
        if (!startDate || !endDate) return 0;
        const timeDifference = endDate - startDate;
        return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    }
    
    get message() {
        if (!this.dueDate || !this.comparisonDate) {
            return 'Required fields are not set or available.';
        }
        if (this.isBreached) {
            return `End date was ${Math.abs(this.daysDifference)} days ago.`;
        } else {
            return `${this.daysDifference} days remaining until end date.`;
        }
    }
    
    get messageClass() {
        const messageClass = this.isBreached ? 'breached' : 'upcoming';
        console.log('Message Class:', messageClass);
        return messageClass;
    }
}
