module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'global-bg': '#F8F9FE',
        'container-bg': '#ffffff',
        'primary-bg-opacity': 'rgba(0, 204, 153, 0.25)', 
        'primary-bg': '#00cc99',
        'secondary-bg': '#ff9900',
        'accent-bg': '#597931',
        'warning-bg': 'rgb(239 68 68)',
      },
      fontSize: {
        'title': '24px',
        'body': '18px',
        'header': '36px',
      },
    },
  },
  plugins: [],
};





{/* 

// how to use for colors

                          <div class="text-global-bg">...</div>

                          <div class="bg-primary-bg">...</div> 

// how to use for font size 

                          <h1 class="text-header">This is a header</h1>

                          <h2 class="text-title">This is a title</h2>

                          <p class="text-body">This is body text</p>


*/}

{/* 

// patient


ng g c patient/dashboard
ng g c patient/health-record
ng g c patient/medications
ng g c patient/appointment-scheduling
ng g c patient/messaging
ng g c patient/chatbot
ng g c patient/forum
ng g c patient/educational-resources
ng g c patient/self-assessment-tools


// caregiver

ng g c caregiver/dashboard
ng g c caregiver/courses
ng g c caregiver/workshops
ng g c caregiver/appointment-scheduling
ng g c caregiver/forum
ng g c caregiver/educational-resources


//gcu portal

ng g c gcu-portal/dashboard
ng g c gcu-portal/decision-support
ng g c gcu-portal/analytics-and-reporting
ng g c gcu-portal/virtual-room
ng g c gcu-portal/telehealth-integration
ng g c gcu-portal/messaging
ng g c gcu-portal/calendar-and-scheduling


ng g c shared/dashboard
ng g c shared/dashboard/sidebar
ng g c shared/dashboard/header

ng g c shared/components/dashboard/calendar
ng g c shared/components/dashboard/reminders
ng g c shared/components/dashboard/welcome-header
ng g c shared/components/dashboard/body-content

*/}




