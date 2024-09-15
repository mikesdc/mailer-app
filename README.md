# BV - Sample Logistics Emailer App

## Purpose

This app aims to support the Campo Sample Logistics operation by streamlining email notifications. Rather than multiple steps to draft and send an email, the user simply needs to specify information that may vary depending on the notification type and the job in progress.

## Workflow

1. Log In
   - LIMS Initials and 4-digit pin number
     - App needs a way to verify users and add new users
     - App needs to carry the current logged in user through different pages (session memory)
       - eg. if the user needs to send a different email, have an option to navigate to another page
2. Navigate to the right emailer page
   - The emailer page includes a description of the purpose of that emailer.
     - The description is collapsable.
3. Enter necessary information
4. Click send
   - This navigates to a confirmation page
   - Repeats the entered data
     - Instructs user to confirm that this information is correct
       - If no, send a recall email (manually)
     - Provides the option to navigate to home, or enter a navigation code to proceed to the appropriate emailer page

## Versions (newest changes at the top)

1. first-version

- completed

- in progress


# mailer-app
