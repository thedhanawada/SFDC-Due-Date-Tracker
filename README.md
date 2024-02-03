# Due Date Tracker

The Due Date Tracker is a Salesforce Lightning Web Component (LWC) designed to display the status of a due date on a record page. It calculates the difference between a specified start date and end date, and presents whether the due date is upcoming or has been breached.

## Features

- Dynamically fetches record data using an Apex class.
- Calculates the days remaining until the due date or the days past the due date.
- Displays a message indicating the due date status.
- Applies conditional styling based on whether the due date is upcoming or breached.

## Installation

Deploy the LWC and the associated Apex class to your Salesforce org using your preferred deployment method. TBC.

## Configuration

After deployment, the component can be dragged onto any record page in the Lightning App Builder. The following properties need to be set in the component's configuration:

- **Object Name**: API name of the Salesforce object.
- **Field to Compare**: API name of the start date field on the object.
- **Comparison Date Field**: API name of the end date field on the object.

Example:
- Object Name: `Campaign`
- Field to Compare: `startDate`
- Comparison Date Field: `endDate`

## Usage

Once configured, the component will display on the record page with a message such as "5 days remaining until end date" or "3 days past the end date" based on the logic defined in the component's JavaScript.

## Styling

The component uses standard SLDS classes and custom CSS for styling. The appearance can be customized by modifying the `.css` file in the LWC bundle.

## Component Files

- **recordDue.js**: The main JavaScript controller for the LWC.
- **recordDue.html**: The HTML template for the LWC.
- **recordDue.css**: The styles for the LWC.
- **recordDue.xml**: The metadata configuration file for the LWC.

## Apex Class

The `RecordDataService` Apex class is used to fetch the data for the component.

## Notes

- Ensure that the field API names used in the component configuration match those in your Salesforce org, including correct casing.
- This component assumes that the record page where it's placed provides the `recordId` context.
