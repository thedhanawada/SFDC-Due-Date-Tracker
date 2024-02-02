import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

const FIELDS = ['StartDate', 'EndDate']; // Use the actual API names of your fields

export default class RecordDue extends LightningElement {
    @api recordId;
    @api fieldToCompare; // Should be set to 'StartDate' in the component's config
    @api comparisonDateField; // Should be set to 'EndDate' in the component's config

    // Keep track of the record data internally
    recordData;

    @wire(getRecord, { recordId: '$recordId', fields: ['$fieldToCompare', '$comparisonDateField'] })
    wiredRecord({ error, data }) {
        if (error) {
            console.error('Error fetching record:', error);
        } else if (data) {
            this.recordData = data;
            console.log('Record data:', data);
        }
    }

    connectedCallback() {
        console.log('Component initialized with recordId:', this.recordId);
        console.log('Field to compare:', this.fieldToCompare);
        console.log('Comparison date field:', this.comparisonDateField);
    }


    get dueDate() {
        const value = getFieldValue(this.recordData, this.fieldToCompare);
        console.log('Due Date:', value);
        return value;
    }
    
    get comparisonDate() {
        const value = getFieldValue(this.recordData, this.comparisonDateField);
        console.log('Comparison Date:', value);
        return value;
    }
    get isBreached() {
        const dueDate = this.dueDate;
        const comparisonDate = this.comparisonDate;
        return dueDate && comparisonDate && new Date(comparisonDate) > new Date(dueDate);
    }

    get daysDifference() {
        const dueDate = this.dueDate;
        const comparisonDate = this.comparisonDate;
        if (!dueDate || !comparisonDate) return 0;

        const dueDateTime = new Date(dueDate).getTime();
        const comparisonDateTime = new Date(comparisonDate).getTime();
        const timeDifference = comparisonDateTime - dueDateTime;
        return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    }

    get message() {
        if (!this.dueDate || !this.comparisonDate) {
            return 'Required fields are not set or available.';
        }

        if (this.isBreached) {
            return `Due date was ${Math.abs(this.daysDifference)} days ago.`;
        } else {
            return `${-this.daysDifference} days remaining until due date.`;
        }
    }

    get messageClass() {
        return this.isBreached ? 'breached' : 'upcoming';
    }
}
