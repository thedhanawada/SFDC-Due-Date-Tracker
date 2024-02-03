# Due Date Tracker LWC

The Due Date Tracker is a Salesforce Lightning Web Component (LWC) that displays due date information on record pages.

![screenshot](https://github.com/thedhanawada/SFDC-Due-Date-Tracker/assets/13751641/f65491b7-4e5b-478e-8805-138abf762670)

## Issues and Support

If you encounter any issues with this LWC, please raise an issue on this repository, and I will look into the issue ASAP.

## Features

- Fetches record data dynamically using an Apex class.
- Calculates days remaining until the due date or days past the due date.
- Displays status messages with conditional styling.

## Installation

1. Deploy the LWC and associated Apex class to your Salesforce org.

## Configuration

1. Drag and drop the component onto any record page in Lightning App Builder.
2. Configure the following properties:
   - **Object Name**: API name of the Salesforce object.
   - **Field to Compare**: API name of the start date field.
   - **Comparison Date Field**: API name of the end date field.

Example:
- Object Name: `Campaign`
- Field to Compare: `startDate`
- Comparison Date Field: `endDate`

## Usage

- The component will display on the record page, showing status messages based on due date logic.

## Styling

- Customize appearance using standard SLDS classes and custom CSS in the `.css` file.

## Component Files

- **recordDue.js**: JavaScript controller.
- **recordDue.html**: HTML template.
- **recordDue.css**: Custom styles.
- **recordDue.xml**: Metadata configuration.

## Apex Class

- The `RecordDataService` Apex class fetches data for the component.

## Test Classes

- Test classes are available for the `RecordDataService` Apex class.
- Double-check test coverage during deployment.

## Notes

- Ensure field API names in the component configuration match your Salesforce org.