import { Patient } from "../types/patient";

export const patientsData: Patient[] = [
    {
        id: "1",
        patientName: "Aarav Sharma",
        contact: "+91 9876543210",
        parent: "Priya Sharma",
        immediateActions: [
            {
                id: "1",
                type: "vaccine",
                status: "overdue",
                dueDate: "2024-03-01",
                description: "Polio Vaccine Due",
            },
            {
                id: "2",
                type: "followup",
                status: "pending",
                dueDate: "2024-03-15",
                description: "Regular Checkup",
            },
        ],
    },
    {
        id: "2",
        patientName: "Ishita Gupta",
        contact: "+91 9876543211",
        parent: "Anjali Gupta",
        immediateActions: [
            {
                id: "1",
                type: "lab",
                status: "pending",
                dueDate: "2024-03-10",
                description: "Blood Test",
            },
        ],
    },
    {
        id: "3",
        patientName: "Kabir Verma",
        contact: "+91 9876543212",
        parent: "Rahul Verma",
        immediateActions: [
            {
                id: "1",
                type: "vaccine",
                status: "pending",
                dueDate: "2024-03-20",
                description: "Hepatitis B Vaccine",
            },
            {
                id: "2",
                type: "followup",
                status: "overdue",
                dueDate: "2024-03-05",
                description: "Eye Checkup",
            },
        ],
    },
    {
        id: "4",
        patientName: "Riya Malhotra",
        contact: "+91 9876543213",
        parent: "Sneha Malhotra",
        immediateActions: [
            {
                id: "1",
                type: "lab",
                status: "pending",
                dueDate: "2024-03-12",
                description: "Urine Test",
            },
        ],
    },
    {
        id: "5",
        patientName: "Dev Patel",
        contact: "+91 9876543214",
        parent: "Amit Patel",
        immediateActions: [
            {
                id: "1",
                type: "vaccine",
                status: "overdue",
                dueDate: "2024-02-28",
                description: "DTaP Vaccine",
            },
            {
                id: "2",
                type: "followup",
                status: "pending",
                dueDate: "2024-03-18",
                description: "General Checkup",
            },
        ],
    },
    {
        id: "6",
        patientName: "Meera Nair",
        contact: "+91 9876543215",
        parent: "Vishal Nair",
        immediateActions: [
            {
                id: "1",
                type: "followup",
                status: "pending",
                dueDate: "2024-03-22",
                description: "Dental Checkup",
            },
        ],
    },
    {
        id: "7",
        patientName: "Arjun Reddy",
        contact: "+91 9876543216",
        parent: "Kavita Reddy",
        immediateActions: [
            {
                id: "1",
                type: "vaccine",
                status: "overdue",
                dueDate: "2024-03-03",
                description: "BCG Vaccine",
            },
        ],
    },
    {
        id: "8",
        patientName: "Neha Joshi",
        contact: "+91 9876543217",
        parent: "Manoj Joshi",
        immediateActions: [
            {
                id: "1",
                type: "lab",
                status: "pending",
                dueDate: "2024-03-14",
                description: "Thyroid Test",
            },
        ],
    },
    {
        id: "9",
        patientName: "Saanvi Agarwal",
        contact: "+91 9876543218",
        parent: "Rekha Agarwal",
        immediateActions: [
            {
                id: "1",
                type: "vaccine",
                status: "pending",
                dueDate: "2024-03-25",
                description: "Measles Vaccine",
            },
        ],
    },
    {
        id: "10",
        patientName: "Aryan Singh",
        contact: "+91 9876543219",
        parent: "Rajesh Singh",
        immediateActions: [
            {
                id: "1",
                type: "followup",
                status: "overdue",
                dueDate: "2024-03-02",
                description: "Routine Health Checkup",
            },
            {
                id: "2",
                type: "lab",
                status: "pending",
                dueDate: "2024-03-12",
                description: "Liver Function Test",
            },
        ],
    },
    {
        id: "11",
        patientName: "Aditi Patel",
        contact: "+91 9876543220",
        parent: "Vinod Patel",
        immediateActions: [
            {
                id: "1",
                type: "vaccine",
                status: "pending",
                dueDate: "2024-03-08",
                description: "Influenza Vaccine",
            },
        ],
    },
    {
        id: "12",
        patientName: "Vikram Yadav",
        contact: "+91 9876543221",
        parent: "Radhika Yadav",
        immediateActions: [
            {
                id: "1",
                type: "followup",
                status: "pending",
                dueDate: "2024-03-13",
                description: "Orthopedic Checkup",
            },
        ],
    },
    {
        id: "13",
        patientName: "Simran Kaur",
        contact: "+91 9876543222",
        parent: "Baljit Kaur",
        immediateActions: [
            {
                id: "1",
                type: "lab",
                status: "pending",
                dueDate: "2024-03-17",
                description: "Blood Sugar Test",
            },
        ],
    },
    {
        id: "14",
        patientName: "Karan Mehta",
        contact: "+91 9876543223",
        parent: "Sunita Mehta",
        immediateActions: [
            {
                id: "1",
                type: "vaccine",
                status: "overdue",
                dueDate: "2024-02-22",
                description: "Hepatitis A Vaccine",
            },
            {
                id: "2",
                type: "followup",
                status: "pending",
                dueDate: "2024-03-19",
                description: "Cardiac Checkup",
            },
        ],
    },
    {
        id: "15",
        patientName: "Ayesha Khan",
        contact: "+91 9876543224",
        parent: "Zahid Khan",
        immediateActions: [
            {
                id: "1",
                type: "followup",
                status: "pending",
                dueDate: "2024-03-20",
                description: "Skin Checkup",
            },
        ],
    },
    {
        id: "16",
        patientName: "Rohit Bansal",
        contact: "+91 9876543225",
        parent: "Aarti Bansal",
        immediateActions: [
            {
                id: "1",
                type: "lab",
                status: "pending",
                dueDate: "2024-03-21",
                description: "Vitamin D Test",
            },
        ],
    },
    {
        id: "17",
        patientName: "Pooja Verma",
        contact: "+91 9876543226",
        parent: "Vikas Verma",
        immediateActions: [
            {
                id: "1",
                type: "vaccine",
                status: "overdue",
                dueDate: "2024-02-29",
                description: "Rotavirus Vaccine",
            },
        ],
    },
    {
        id: "18",
        patientName: "Ananya Desai",
        contact: "+91 9876543227",
        parent: "Devendra Desai",
        immediateActions: [
            {
                id: "1",
                type: "followup",
                status: "pending",
                dueDate: "2024-03-28",
                description: "General Health Checkup",
            },
        ],
    },
    {
        id: "19",
        patientName: "Siddharth Kumar",
        contact: "+91 9876543228",
        parent: "Ravinder Kumar",
        immediateActions: [
            {
                id: "1",
                type: "vaccine",
                status: "pending",
                dueDate: "2024-03-10",
                description: "Chickenpox Vaccine",
            },
        ],
    },
    {
        id: "20",
        patientName: "Maya Soni",
        contact: "+91 9876543229",
        parent: "Suresh Soni",
        immediateActions: [
            {
                id: "1",
                type: "lab",
                status: "pending",
                dueDate: "2024-03-11",
                description: "Complete Blood Count",
            },
        ],
    },
];

