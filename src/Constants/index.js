const genderOptions = [
  {
    label: '-Select-',
    value: '',
  },
  {
    label: 'Male',
    value: 'M',
  },
  {
    label: 'Female',
    value: 'F',
  },
];

const SELECT_OPTIONS = {
  genderOptions,

  newPatientFields: [
    {
      type: 'input',
      label: 'First Name',
      name: 'firstName',
      rules: {
        required: 'First Name is required',
      },
      length: 30,
    },
    {
      type: 'input',
      label: 'Last Name',
      name: 'lastName',
      rules: {
        required: 'Last Name is required',
      },
      length: 30,
    },

    {
      type: 'DatePicker',
      label: 'Date of Birth',
      name: 'dob',
      rules: {
        required: 'Date of Birth is required',
      },
    },

    {
      type: 'Select',
      label: 'Gender',
      name: 'gender',
      rules: {
        required: 'Gender is required',
      },
      options: genderOptions,
    },

    {
      type: 'input',
      label: 'Cell#',
      name: 'cell',
      rules: {
        required: 'Cell is required',
      },
      length: 20,
    },
    {
      type: 'input',
      label: 'Email',
      name: 'email',
      rules: {
        required: 'Email is required',
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: 'Invalid email address',
        },
      },
      length: 30,
    },

    {
      type: 'input',
      label: 'Address',
      name: 'address',
      rules: {
        required: 'Address is required',
      },
      length: 60,
    },
  ],
  messageTypeOptions: [
    {
      label: 'General Inquiry',
      value: 'general_inquiry',
    },
  ],

  providerOptions: [
    {
      label: 'Dr. John Smith',
      value: 'dr_john_smith',
    },
    {
      label: 'Dr. Emily Johnson',
      value: 'dr_emily_johnson',
    },
    {
      label: 'Dr. Michael Brown',
      alue: 'dr_michael_brown',
    },
    {
      label: 'Dr. John Smith1',
      value: 'dr_john_smith1',
    },
    {
      label: 'Dr. Emily Johnson22',
      value: 'dr_emily_johnson22',
    },
    {
      label: 'Dr. Michael Brown3',
      alue: 'dr_michael_brown3',
    },
    {
      label: 'Dr. John Smith12',
      value: 'dr_john_smith12',
    },
    {
      label: 'Dr. Emily Johnson223',
      value: 'dr_emily_johnson223',
    },
    {
      label: 'Dr. Michael Brown33',
      alue: 'dr_michael_brown33',
    },
  ],

  locationOptions: [
    {
      label: '34 FATA,Tx 3434',
      value: '34_fata_tx_3434',
    },
    {
      label: '55 Main St, NY 10001',
      value: '55_main_st_ny_10001',
    },
  ],

  reasonForScheduleAppointmentOptions: [
    {
      label: 'General Consultation',
      value: 'general_consultation',
    },
    {
      label: 'Follow-up Visit',
      value: 'follow_up_visit',
    },
  ],

  existingPatientFields: [
    {
      type: 'input',
      label: 'First Name',
      name: 'firstName',
      rules: {
        required: 'First Name is required',
      },
      length: 30,
    },
    {
      type: 'input',
      label: 'Last Name',
      name: 'lastName',
      rules: {
        required: 'Last Name is required',
      },
      length: 30,
    },

    {
      type: 'DatePicker',
      label: 'Date of Birth',
      name: 'dob',
      rules: {
        required: 'Date of Birth is required',
      },
    },

    {
      type: 'input',
      label: 'Zip',
      name: 'zip',
      rules: {
        required: 'Zip is required',
      },
      length: 60,
    },

    {
      type: 'input',
      label: 'Cell#',
      name: 'cell',
      rules: {
        required: 'Cell is required',
      },
      length: 20,
    },
    {
      type: 'input',
      label: 'Email',
      name: 'email',
      rules: {
        required: 'Email is required',
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: 'Invalid email address',
        },
      },
      length: 30,
    },
  ],

  activationFieldData: [
    {
      type: 'input',
      label: 'Account Activation Code',
      name: 'activationCode',
      rules: {
        required: 'Account Activation Code is required',
      },
      length: 30,
    },
    {
      type: 'input',
      label: 'Email Address',
      name: 'email',
      rules: {
        required: 'Email Address is required',
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: 'Invalid Email Address',
        },
        length: 30,
      },
    },

    {
      type: 'text',
      label: 'New Password',
      name: 'newPassword',
      rules: {
        required: 'New Password is required',

        minLength: {
          value: 10,
          message: 'Password must be at least 10 characters',
        },
      },
      length: 10,
    },

    {
      type: 'text',
      label: 'Confirm Password',
      name: 'confirmPassword',
      rules: {
        required: 'Confirm Password is required',
        minLength: {
          value: 10,
          message: 'Password must be at least 10 characters',
        },
      },
      length: 10,
    },
  ],
  reasonForVisitOptions: [
    {
      label: 'General Consultation',
      value: 'general_consultation',
    },
    {
      label: 'Follow-up Visit',
      value: 'follow_up_visit',
    },
    {
      label: 'Prescription Refill',
      value: 'prescription_refill',
    },
    {
      label: 'Lab Results Discussion',
      value: 'lab_results_discussion',
    },
  ],
  // Sample data for requested appointments come from api thats why not palce in Constant file
  requestedAppointmentsData: [
    {
      id: '1',
      type: 'Office Visit',
      detail: 'Annual Check-up',
      date: 'Apr 15, 2024',
      time: '10:30 AM',
      doctorName: 'Dr. John Doe',
      name: 'requested',
    },

    {
      id: '2',
      type: 'Tele Visit',
      detail: 'Follow-up Consultation',
      date: 'Apr 15, 2024',
      time: '10:30 AM',
      doctorName: 'Dr. Michael Smith',
      name: 'requested',
    },

    {
      id: '3',
      type: 'OfficeVisit',
      detail: 'Follow-up Consultation',
      date: 'Apr 15, 2024',
      time: '10:30 AM',
      doctorName: 'Dr. John Doe',
      name: 'requested',
    },
    {
      id: '4',
      type: 'Tele Visit',
      detail: 'Follow-up Consultation',
      date: 'Apr 15, 2024',
      time: '10:30 AM',
      doctorName: 'Dr. Sarah Johnson',
      name: 'requested',
    },
    {
      id: '5',
      type: 'Tele Visit',
      detail: 'Follow-up Consultation',
      date: 'Apr 15, 2024',
      time: '10:30 AM',
      doctorName: 'Dr. John Doe',
      name: 'requested',
    },

    {
      id: '6',
      type: 'Office Visit',
      detail: 'Annual Check-up',
      date: 'Apr 15, 2024',
      time: '10:30 AM',
      doctorName: 'Dr. John Doe',
      name: 'requested',
    },
    {
      id: '7',
      type: 'Tele Visit',
      detail: 'Follow-up Consultation',
      date: 'Apr 15, 2024',
      time: '10:30 AM',
      doctorName: 'Dr. Michael Smith',
      name: 'requested',
    },
  ],

  upCommingAppointmentsData: [
    {
      id: '1',
      type: 'Office Visit',
      detail: 'Annual Check-up',
      date: 'Apr 15, 2024',
      time: '10:30 AM',
      doctorName: 'Dr. John Doe',
      name: 'checkIn',
    },

    {
      id: '2',
      type: 'Tele Visit',
      detail: 'Follow-up Consultation',
      date: 'Apr 15, 2024',
      time: '10:30 AM',
      doctorName: 'Dr. Michael Smith',
      name: 'checkIn',
    },

    {
      id: '3',
      type: 'OfficeVisit',
      detail: 'Follow-up Consultation',
      date: 'Apr 15, 2024',
      time: '10:30 AM',
      doctorName: 'Dr. John Doe',
      name: 'checkIn',
    },
    {
      id: '4',
      type: 'Tele Visit',
      detail: 'Follow-up Consultation',
      date: 'Apr 15, 2024',
      time: '10:30 AM',
      doctorName: 'Dr. Sarah Johnson',
      name: 'checkIn',
    },
    {
      id: '5',
      type: 'Tele Visit',
      detail: 'Follow-up Consultation',
      date: 'Apr 15, 2024',
      time: '10:30 AM',
      doctorName: 'Dr. John Doe',
      name: 'checkIn',
    },

    {
      id: '6',
      type: 'Office Visit',
      detail: 'Annual Check-up',
      date: 'Apr 15, 2024',
      time: '10:30 AM',
      doctorName: 'Dr. John Doe',
      name: 'checkIn',
    },
    {
      id: '7',
      type: 'Tele Visit',
      detail: 'Follow-up Consultation',
      date: 'Apr 15, 2024',
      time: '10:30 AM',
      doctorName: 'Dr. Michael Smith',
      name: 'checkIn',
    },
  ],

  pastAppointmentsData: [
    {
      id: '1',
      type: 'Office Visit',
      detail: 'Annual Check-up',
      date: 'Apr 15, 2024',
      time: '10:30 AM',
      doctorName: 'Dr. John Doe',
      name: 'past',
    },

    {
      id: '2',
      type: 'Tele Visit',
      detail: 'Follow-up Consultation',
      date: 'Apr 15, 2024',
      time: '10:30 AM',
      doctorName: 'Dr. Michael Smith',
      name: 'past',
    },

    {
      id: '3',
      type: 'OfficeVisit',
      detail: 'Follow-up Consultation',
      date: 'Apr 15, 2024',
      time: '10:30 AM',
      doctorName: 'Dr. John Doe',
      name: 'past',
    },
    {
      id: '4',
      type: 'Tele Visit',
      detail: 'Follow-up Consultation',
      date: 'Apr 15, 2024',
      time: '10:30 AM',
      doctorName: 'Dr. Sarah Johnson',
      name: 'past',
    },
    {
      id: '5',
      type: 'Tele Visit',
      detail: 'Follow-up Consultation',
      date: 'Apr 15, 2024',
      time: '10:30 AM',
      doctorName: 'Dr. John Doe',
      name: 'past',
    },

    {
      id: '6',
      type: 'Office Visit',
      detail: 'Annual Check-up',
      date: 'Apr 15, 2024',
      time: '10:30 AM',
      doctorName: 'Dr. John Doe',
      name: 'past',
    },
    {
      id: '7',
      type: 'Tele Visit',
      detail: 'Follow-up Consultation',
      date: 'Apr 15, 2024',
      time: '10:30 AM',
      doctorName: 'Dr. Michael Smith',
      name: 'past',
    },
  ],

  activeMessages: [
    {
      id: '1',
      name: 'Dr. James Wilson',
      specialization: 'Cardiologist',
      urgency: 'Urgent',
      timeAgo: '2h ago',
      messageContent:
        'Your recent test results are ready. Please review them and let me know if you have any questions.',
      topic: 'Medication',
    },
    {
      id: '2',
      name: 'Sarah Chen',
      specialization: 'Patient',
      urgency: '',
      timeAgo: 'Yesterday',
      messageContent:
        "Hello Dr. Smith, I've been experiencing severe headaches for the past few days, particularly in the morning. Could we....",
      topic: 'Other',
    },
    {
      id: '3',
      name: 'Dr. Sarah Chen',
      specialization: 'General Physician',
      urgency: '',
      timeAgo: '03/12/2025',
      messageContent:
        'Following up on your last visit. How are you feeling with the new medication?',
      topic: 'Reminder',
    },
    {
      id: '4',
      name: 'Dr. James Wilson',
      specialization: 'Cardiologist',
      urgency: 'Urgent',
      timeAgo: '2h ago',
      messageContent:
        'Your recent test results are ready. Please review them and let me know if you have any questions.',
      topic: 'Medication',
    },
    {
      id: '5',
      name: 'Sarah Chen',
      specialization: 'Patient',
      urgency: '',
      timeAgo: 'Yesterday',
      messageContent:
        "Hello Dr. Smith, I've been experiencing severe headaches for the past few days, particularly in the morning. Could we....",
      topic: 'Other',
    },
    {
      id: '6',
      name: 'Dr. Sarah Chen',
      specialization: 'General Physician',
      urgency: '',
      timeAgo: '03/12/2025',
      messageContent:
        'Following up on your last visit. How are you feeling with the new medication?',
      topic: 'Reminder',
    },
  ],

  resolvedMessages: [
    {
      id: '1',
      name: 'Dr. Sarah Chen',
      specialization: 'Cardiologist',
      urgency: 'Urgent',
      timeAgo: '2h ago',
      messageContent:
        'Your recent test results are ready. Please review them and let me know if you have any questions.',
      topic: 'Medication',
    },
    {
      id: '2',
      name: 'Sarah Chen',
      specialization: 'Patient',
      urgency: '',
      timeAgo: 'Yesterday',
      messageContent:
        "Hello Dr. Smith, I've been experiencing severe headaches for the past few days, particularly in the morning. Could we....",
      topic: 'Other',
    },
    {
      id: '3',
      name: 'Dr. Sarah Chen',
      specialization: 'General Physician',
      urgency: '',
      timeAgo: '03/12/2025',
      messageContent:
        'Following up on your last visit. How are you feeling with the new medication?',
      topic: 'Reminder',
    },
  ],

  representsEmail: [
    {
      label: 'Emma Wilson@gmail.com',
      value: 'Emma Wilson@gmail.com',
    },
    {
      label: 'Emma12Wilson@gmail.com',
      value: 'Emma12Wilson@gmail.com',
    },
    {
      label: 'Emma Wilson@gmail.com',
      value: 'Emma Wilson@gmail.com',
    },
    {
      label: 'Emma12Wilson@gmail.com',
      value: 'Emma12Wilson@gmail.com',
    },
    {
      label: 'Emma Wilson@gmail.com',
      value: 'Emma Wilson@gmail.com',
    },
    {
      label: 'Emma12Wilson@gmail.com',
      value: 'Emma12Wilson@gmail.com',
    },
  ],

  insurancesInfo: [
    {
      name: 'wew',
      dob: '323',
      gender: 'M',
      relationship: 'Self',
      plan: 'AETNA',
      planId: '43434',
      copay: '3434',
      effectiveDate: '01/02/2024',
    },
    {
      name: 'wew',
      dob: '323',
      gender: 'M',
      relationship: 'Self',
      plan: 'AETNA',
      planId: '43434',
      copay: '3434',
      effectiveDate: '01/02/2024',
    },
    {
      name: 'wew',
      dob: '323',
      gender: 'M',
      relationship: 'Self',
      plan: 'AETNA',
      planId: '43434',
      copay: '3434',
      effectiveDate: '01/02/2024',
    },
    {
      name: 'wew',
      dob: '323',
      gender: 'M',
      relationship: 'Self',
      plan: 'AETNA',
      planId: '43434',
      copay: '3434',
      effectiveDate: '01/02/2024',
    },
  ],

  paymentMethods: [
    {
      id: '1',
      cardNumber: 'XXXX XXXX XXXX 4242',
      expiryDate: '12/24',
    },
    {
      id: '2',
      cardNumber: 'XXXX XXXX XXXX 5454',
      expiryDate: '12/28',
    },

    {
      id: '3',
      cardNumber: 'XXXX XXXX XXXX 5847',
      expiryDate: '12/29',
    },
  ],
  stateOptions: [
    {
      label: 'Select State',
      value: '',
    },
    {
      label: 'Alaska',
      value: 'AK',
    },
    {
      label: 'New York',
      value: 'NY',
    },
    {
      label: 'Washington',
      value: 'WA',
    },
    {
      label: 'Texas',
      value: 'TX',
    },
  ],

  primaryContactOptions: [
    {
      label: 'Select',
      value: '',
    },

    {
      label: 'First',
      value: 'F',
    },
    {
      label: 'Second',
      value: 'S',
    },
  ],

  maritalOptions: [
    {
      label: 'Select',
      value: '',
    },

    {
      label: 'Single',
      value: 'S',
    },
    {
      label: 'Married',
      value: 'M',
    },
  ],
};

export default SELECT_OPTIONS;
