import AI from "@/components/technologies/AI";
import AWS from "@/components/technologies/AWS";
import ECharts from "@/components/technologies/ECharts";
import ExpressJs from "@/components/technologies/ExpressJs";
import Github from "@/components/technologies/Github";
import MongoDB from "@/components/technologies/MongoDB";
import NextJs from "@/components/technologies/NextJs";
import NodeJs from "@/components/technologies/NodeJs";
import OpenAI from "@/components/technologies/OpenAI";
import ParseIcon from "@/components/technologies/ParseIcon";
import PostgreSQL from "@/components/technologies/PostgreSQL";
import Puppeteer from "@/components/technologies/Puppeteer";
import RadixUI from "@/components/technologies/RadixUI";
import ReactFlow from "@/components/technologies/ReactFlow";
import ReactIcon from "@/components/technologies/ReactIcon";
import Redux from "@/components/technologies/Redux";
import Sequelize from "@/components/technologies/Sequelize";
import Shadcn from "@/components/technologies/Shadcn";
import SocketIo from "@/components/technologies/SocketIo";
import Stripe from "@/components/technologies/Stripe";
import TailwindCss from "@/components/technologies/TailwindCss";
import TypeScript from "@/components/technologies/TypeScript";
import Vite from "@/components/technologies/Vite";
import Web3 from "@/components/technologies/Web3";
import Zod from "@/components/technologies/Zod";
import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Total Liquor",
    description:
      "A comprehensive multi-platform liquor e-commerce ecosystem featuring a web storefront, admin dashboard, store management portal, and React Native mobile app with Stripe Connect payment processing for multi-vendor marketplace functionality.",
    image: "/project/total-liquor.png",
    // link: 'https://github.com/yourusername/total-liquor',
    technologies: [
      { name: "React", icon: <ReactIcon />, href: "https://react.dev" },
      {
        name: "React Native",
        icon: <ReactIcon />,
        href: "https://reactnative.dev",
      },
      { name: "Node.js", icon: <NodeJs />, href: "https://nodejs.org" },
      {
        name: "Express.js",
        icon: <ExpressJs />,
        href: "https://expressjs.com",
      },
      {
        name: "PostgreSQL",
        icon: <PostgreSQL />,
        href: "https://postgresql.org",
      },
      { name: "Sequelize", icon: <Sequelize />, href: "https://sequelize.org" },
      {
        name: "Redux Toolkit",
        icon: <Redux />,
        href: "https://redux-toolkit.js.org",
      },
      {
        name: "Tailwind CSS",
        icon: <TailwindCss />,
        href: "https://tailwindcss.com",
      },
      { name: "Stripe", icon: <Stripe />, href: "https://stripe.com" },
      { name: "Vite", icon: <Vite />, href: "https://vitejs.dev" },
      { name: "Radix UI", icon: <RadixUI />, href: "https://radix-ui.com" },
      { name: "Zod", icon: <Zod />, href: "https://zod.dev" },
    ],
    // live: 'https://total-liquor.netlify.app',
    details: true,
    projectDetailsPageSlug: "/projects/total-liquor",
    isWorking: false,
    role: "Full Stack Developer",
    status: "in-progress",
    featured: true,
    challenges: [
      "Implementing Stripe Connect for multi-vendor marketplace with split payments and 10% platform fee calculation",
      "Building a bulk product import system that parses Excel files, validates data, and creates hierarchical relationships (Categories → Brands → Products → Variants)",
      "Designing a role-based access control system with separate authentication flows for customers, store owners, and administrators",
      "Managing complex order state machine with multiple statuses (Pending → Preparing → Ready → Delivered) across different user roles",
      "Synchronizing inventory management across multiple stores with real-time stock tracking and variant-level pricing",
    ],
    learnings: [
      "Mastered Stripe Connect Express accounts for marketplace payment splitting and vendor onboarding flows",
      "Gained expertise in building scalable multi-tenant architectures with Sequelize ORM and PostgreSQL",
      "Learned to implement complex form validation using Zod schemas with React Hook Form across web and mobile",
      "Developed proficiency in building cross-platform applications sharing business logic between React and React Native",
      "Understood the importance of transaction management in e-commerce checkout flows to maintain data integrity",
    ],
    isPublished: true,
    content: [
      { type: "heading", level: 2, text: "Overview" },
      {
        type: "paragraph",
        text: "Total Liquor is a **full-stack multi-platform e-commerce solution** designed for the liquor retail industry. The platform enables liquor stores to manage their inventory, process orders, and accept payments through a unified system. Built with a **microservices-inspired architecture**, it consists of three interconnected applications: a customer-facing web storefront, a comprehensive admin dashboard, and a React Native mobile app for on-the-go shopping.",
      },
      {
        type: "highlight",
        variant: "info",
        text: "This project implements Stripe Connect for marketplace functionality, allowing multiple liquor stores to onboard, manage their products, and receive payments with automatic platform fee deduction.",
      },
      { type: "heading", level: 2, text: "Key Features" },
      {
        type: "features",
        items: [
          {
            title: "Multi-Vendor Marketplace",
            description:
              "Store owners can register, complete Stripe onboarding, manage their inventory, and receive payments directly to their connected accounts with automatic 10% platform fee.",
          },
          {
            title: "Bulk Product Import",
            description:
              "Excel-based product import system that automatically creates categories, brands, products, and variants with intelligent data parsing and validation.",
          },
          {
            title: "Real-time Order Management",
            description:
              "Complete order lifecycle management with status tracking (Pending → Preparing → Ready → Delivered), supporting both delivery and in-store pickup options.",
          },
          {
            title: "Cross-Platform Mobile App",
            description:
              "React Native mobile application with NativeWind styling, featuring product browsing, cart management, Stripe payment integration via WebView, and order tracking.",
          },
          {
            title: "Comprehensive Admin Dashboard",
            description:
              "Full administrative control over users, stores, products, categories, brands, inventory, orders, payments, discount codes, and blog content management.",
          },
        ],
      },
      { type: "heading", level: 2, text: "Technical Implementation" },
      {
        type: "paragraph",
        text: "The backend is built with **Express.js 5** and uses **Sequelize ORM** with PostgreSQL for data persistence. The architecture follows a service-controller pattern with comprehensive validation using **Joi**. Authentication is handled via **JWT tokens** with role-based middleware protecting routes for customers, store owners, and administrators.",
      },
      {
        type: "list",
        items: [
          "**Database Design**: 18+ interconnected models including User, Store, Product, ProductVariant, Inventory, Order, CartItem, Payment, and Discount with complex associations",
          "**Payment Processing**: Stripe Connect Express integration with automatic account creation, onboarding sessions, payment intents, and transfer data for split payments",
          "**State Management**: Redux Toolkit with RTK Query for efficient API caching, optimistic updates, and automatic refetching on the frontend",
          "**Form Handling**: Zod schema validation with React Hook Form for type-safe form management across both web and mobile platforms",
          "**File Processing**: XLSX library for parsing Excel uploads with header normalization, data validation, and batch database operations",
        ],
      },
    ],
  },

  {
    title: "Game Admin Portal",
    description:
      "A comprehensive gaming platform administration system with real-time balance management, hierarchical user management, transaction reporting, and AI-powered chatbot support for casino-style games.",
    image: "/project/game-admin-portal.png",
    // link: 'https://github.com/yourusername/game-admin-portal',
    technologies: [
      { name: "React", icon: <ReactIcon />, href: "https://reactjs.org" },
      { name: "Node.js", icon: <NodeJs />, href: "https://nodejs.org" },
      {
        name: "Express.js",
        icon: <ExpressJs />,
        href: "https://expressjs.com",
      },
      {
        name: "Parse Server",
        icon: <ParseIcon />,
        href: "https://parseplatform.org",
      },
      { name: "MongoDB", icon: <MongoDB />, href: "https://mongodb.com" },
      { name: "Socket.IO", icon: <SocketIo />, href: "https://socket.io" },
      { name: "AWS S3", icon: <AWS />, href: "https://aws.amazon.com/s3" },
      { name: "OpenAI", icon: <OpenAI />, href: "https://openai.com" },
      {
        name: "React Admin",
        icon: <ReactIcon />,
        href: "https://marmelab.com/react-admin",
      },
      {
        name: "ECharts",
        icon: <ECharts />,
        href: "https://echarts.apache.org",
      },
    ],
    // live: "https://game-admin-portal.example.com",
    details: true,
    projectDetailsPageSlug: "/projects/game-admin-portal",
    isWorking: false,
    role: "Full Stack Developer",
    status: "in-progress",
    featured: true,
    challenges: [
      "Implementing real-time balance synchronization across multiple game sessions using WebSocket with encrypted payloads to prevent tampering and ensure data integrity",
      "Building a complex hierarchical user management system with 7 role levels (Super-User, Game-Owner, Master-Distributor, Distributor, Sub-Distributor, Agent, Player) with cascading permissions",
      "Designing efficient MongoDB aggregation pipelines for transaction reporting and game statistics that handle millions of records with date-range filtering",
      "Creating a secure device ID verification system to prevent multi-device fraud while maintaining seamless user experience across platforms",
      "Optimizing cron jobs for batch processing of game coin statistics and transaction reports without impacting real-time game performance",
    ],
    learnings: [
      "Mastered Parse Server cloud functions for building scalable BaaS solutions with custom authentication and role-based access control",
      "Gained deep expertise in WebSocket event handling for real-time gaming applications with encrypted message protocols",
      "Learned to implement efficient caching strategies and cursor-based pagination for large-scale data aggregation jobs",
      "Developed skills in building multi-tenant admin dashboards with React Admin framework and dynamic permission-based UI rendering",
      "Understood the importance of transaction atomicity and rollback mechanisms in financial gaming applications",
    ],
    isPublished: true,
    content: [
      { type: "heading", level: 2, text: "Overview" },
      {
        type: "paragraph",
        text: "The **Game Admin Portal** is a full-stack gaming administration platform designed to manage casino-style games, user hierarchies, and financial transactions. It provides a **real-time dashboard** for monitoring game statistics, player activities, and revenue metrics across a multi-level distribution network. The system supports multiple game integrations including Vegas-style slots and Tada games with configurable RTP (Return to Player) settings.",
      },
      {
        type: "highlight",
        variant: "info",
        text: "This platform handles real-time balance updates via WebSocket connections with AES encryption, ensuring secure and instant synchronization between game clients and the backend server.",
      },
      { type: "heading", level: 2, text: "Key Features" },
      {
        type: "features",
        items: [
          {
            title: "Hierarchical User Management",
            description:
              "7-tier role system (Super-User → Player) with cascading permissions, management tree visualization, and automated subordinate tracking for commission calculations.",
          },
          {
            title: "Real-Time Balance System",
            description:
              "WebSocket-powered balance updates with encrypted payloads, batch spin processing, device ID verification, and automatic fraud detection mechanisms.",
          },
          {
            title: "Comprehensive Reporting",
            description:
              "Transaction reports, agent performance analytics, game coin statistics, and daily automated email reports with configurable date ranges and export functionality.",
          },
          {
            title: "AI-Powered Support Chatbot",
            description:
              "OpenAI GPT-3.5 integrated chatbot with role-based context awareness, conversation history, and relevance filtering to provide accurate portal-specific assistance.",
          },
          {
            title: "Game RTP Configuration",
            description:
              "Dynamic Return-to-Player settings with reel configuration, slot management, and support for multiple game types including standard slots, Firelink, and Keno games.",
          },
        ],
      },
      { type: "heading", level: 2, text: "Technical Implementation" },
      {
        type: "paragraph",
        text: "The backend is built on **Parse Server** with Express.js, providing a robust BaaS foundation with custom cloud functions for business logic. The frontend uses **React Admin** for rapid admin dashboard development with Material-UI components. Real-time features are powered by **Socket.IO** with custom encryption utilities for secure game communications.",
      },
      {
        type: "list",
        items: [
          "**Parse Cloud Functions**: 20+ custom functions handling authentication, transactions, reporting, and game session management",
          "**WebSocket Events**: Real-time balance updates, maintenance alerts, user status synchronization, and encrypted game communications",
          "**Cron Jobs**: Automated daily reports, game statistics aggregation, leaderboard updates, and guest user cleanup",
          "**AWS S3 Integration**: Secure file storage for support ticket attachments with pre-signed URLs",
          "**Rate Limiting**: Bottleneck-based request throttling to prevent API abuse and ensure fair resource allocation",
          "**MongoDB Aggregation**: Complex pipelines for transaction summaries, game coin calculations, and hierarchical data queries",
        ],
      },
    ],
  },

  {
    title: "Getways",
    description:
      "A full-stack fintech platform enabling players to recharge, redeem, and cashout funds through multiple payment gateways, while providing admins with comprehensive transaction management, analytics, and KYC verification tools.",
    image: "/project/getways.png",
    // link: 'https://github.com/yourusername/getways',
    technologies: [
      { name: "React", icon: <ReactIcon />, href: "https://reactjs.org" },
      {
        name: "React-Admin",
        icon: <ReactIcon />,
        href: "https://marmelab.com/react-admin",
      },
      {
        name: "Parse Server",
        icon: <ParseIcon />,
        href: "https://parseplatform.org",
      },
      { name: "Express", icon: <ExpressJs />, href: "https://expressjs.com" },
      { name: "Stripe", icon: <Stripe />, href: "https://stripe.com" },
      {
        name: "ECharts",
        icon: <ECharts />,
        href: "https://echarts.apache.org",
      },
      { name: "Web3", icon: <Web3 />, href: "https://web3js.org" },
    ],
    // live: "https://getways.yourdomain.com",
    details: true,
    projectDetailsPageSlug: "/projects/getways",
    isWorking: false,
    role: "Full Stack Developer",
    status: "in-progress",
    featured: true,
    challenges: [
      "Integrating multiple payment gateways (Stripe, PayARC, Fiserv, Authorize.Net, Wert, Coinbase) with unified transaction handling",
      "Building a secure player wallet system supporting recharge, redeem, and cashout workflows",
      "Implementing real-time cryptocurrency payments via Web3 and Wert widget integration",
      "Designing role-based access control for Super-User, Master-Agent, Agent, and Player hierarchies",
      "Creating comprehensive analytics dashboards with ECharts for transaction monitoring and reporting",
    ],
    learnings: [
      "Deep understanding of multi-gateway payment processing and PCI compliance requirements",
      "Building scalable fintech applications with Parse Server cloud functions",
      "Implementing KYC verification workflows with SEON integration",
      "Creating interactive analytics dashboards using ECharts for real-time data visualization",
      "Designing hierarchical role-based access control systems for complex user permissions",
    ],
    isPublished: true,
    content: [
      { type: "heading", level: 2, text: "Overview" },
      {
        type: "paragraph",
        text: "Getways is a **full-stack fintech platform** that enables players to recharge, redeem, and cashout funds through multiple payment gateways. The platform provides admins with **comprehensive transaction management**, real-time analytics, and KYC verification tools. Built with React-Admin and Parse Server, it delivers a seamless experience for both end-users and administrators.",
      },
      {
        type: "highlight",
        variant: "info",
        text: "The platform integrates 6+ payment providers including Stripe, PayARC, Fiserv, Authorize.Net, Wert, and Coinbase, with crypto payment support via Web3.",
      },
      { type: "heading", level: 2, text: "Key Features" },
      {
        type: "features",
        items: [
          {
            title: "Multi-Gateway Payment Processing",
            description:
              "Unified integration with Stripe, PayARC, Fiserv, Authorize.Net, Wert, and Coinbase for flexible payment options and regional coverage.",
          },
          {
            title: "Player Wallet System",
            description:
              "Complete wallet functionality with recharge, redeem, and cashout capabilities, including transaction history and balance tracking.",
          },
          {
            title: "Crypto Payment Integration",
            description:
              "Web3-powered cryptocurrency payments with Wert widget integration for seamless fiat-to-crypto conversions.",
          },
          {
            title: "Admin Dashboard & Analytics",
            description:
              "Comprehensive transaction monitoring with ECharts-powered analytics, real-time reporting, and data visualization.",
          },
          {
            title: "Role-Based Access Control",
            description:
              "Four-tier permission system (Super-User, Master-Agent, Agent, Player) with customized dashboards and feature access.",
          },
          {
            title: "KYC Verification System",
            description:
              "Integrated SEON verification for identity validation, compliance tracking, and fraud prevention.",
          },
        ],
      },
      { type: "heading", level: 2, text: "Technical Implementation" },
      {
        type: "paragraph",
        text: "The backend leverages **Parse Server** with Express.js for scalable cloud functions and real-time data sync. The frontend uses **React-Admin** for rapid admin interface development with custom data providers. Analytics are powered by **ECharts** for interactive visualizations.",
      },
      {
        type: "list",
        items: [
          "**Parse Server Backend** - Cloud functions for transaction processing, wallet management, and automated cron jobs",
          "**React-Admin Frontend** - Custom auth and data providers with role-based UI rendering",
          "**Payment Gateway Modules** - Isolated integrations for Stripe, PayARC, Fiserv, Authorize.Net, Wert, and Coinbase",
          "**ECharts Analytics** - Interactive dashboards for transaction trends, revenue analysis, and user metrics",
          "**SEON KYC Integration** - Identity verification with compliance tracking and fraud detection",
          "**Web3 Crypto Payments** - Blockchain transaction verification and wallet connectivity",
        ],
      },
    ],
  },

  {
    title: "HRMS",
    description:
      "A comprehensive HRMS platform for managing employees, attendance, payroll, recruitment, and organizational workflows with real-time updates.",
    image: "/project/hrms.png",
    // link: 'https://github.com/yourusername/hrms',
    technologies: [
      { name: "React", icon: <ReactIcon />, href: "https://react.dev" },
      {
        name: "Redux Toolkit",
        icon: <Redux />,
        href: "https://redux-toolkit.js.org",
      },
      { name: "Node.js", icon: <NodeJs />, href: "https://nodejs.org" },
      {
        name: "Express.js",
        icon: <ExpressJs />,
        href: "https://expressjs.com",
      },
      { name: "MongoDB", icon: <MongoDB />, href: "https://mongodb.com" },
      {
        name: "Tailwind CSS",
        icon: <TailwindCss />,
        href: "https://tailwindcss.com",
      },
      { name: "Socket.IO", icon: <SocketIo />, href: "https://socket.io" },
      {
        name: "React Flow",
        icon: <ReactFlow />,
        href: "https://reactflow.dev",
      },
      { name: "Vite", icon: <Vite />, href: "https://vitejs.dev" },
      { name: "Radix UI", icon: <RadixUI />, href: "https://radix-ui.com" },
    ],
    // live: 'https://hrms.yourdomain.com',
    details: true,
    projectDetailsPageSlug: "/projects/hrms",
    isWorking: true,
    role: "Full Stack Developer",
    status: "completed",
    featured: true,
    challenges: [
      "Implementing AES-256-GCM encryption for sensitive employee data including salaries, bank details, and bonus information with secure key derivation using PBKDF2",
      "Building a complex payroll calculation system that handles working days, holidays, leave deductions, salary adjustments, and supports multiple employment types (Full-Time, Part-Time, Intern, Freelance)",
      "Designing a real-time notification system using Socket.IO for instant updates on leave approvals, attendance corrections, and payroll generation across multiple user roles",
      "Creating a flexible leave management system with multi-level approval workflows, retroactive leave auto-approval, and dynamic leave balance tracking with minimum balance limits",
      "Implementing role-based access control (RBAC) with hierarchical permissions for Admin, HR, Manager, and Employee roles with protected routes and API middleware",
    ],
    learnings: [
      "Mastered field-level encryption strategies for protecting sensitive data at rest while maintaining query capabilities through MongoDB aggregation pipelines",
      "Gained expertise in building cron job schedulers for automated tasks like attendance marking, leave expiration, and holiday management using node-cron",
      "Learned to implement Google OAuth 2.0 authentication with Passport.js alongside traditional JWT-based authentication for flexible login options",
      "Developed skills in building interactive org chart visualizations with React Flow for displaying organizational hierarchy and reporting structures",
      "Understood the importance of proper date handling across timezones using Luxon and Moment.js for accurate attendance and payroll calculations",
    ],
    isPublished: true,
    content: [
      { type: "heading", level: 2, text: "Overview" },
      {
        type: "paragraph",
        text: "HRMS is a **comprehensive Human Resource Management System** designed to streamline HR operations for organizations. Built with a modern tech stack featuring React and Express, it provides a complete solution for managing employees, attendance, payroll, recruitment, and organizational workflows. The platform features **role-based dashboards** with real-time updates powered by Socket.IO.",
      },
      {
        type: "highlight",
        variant: "info",
        text: "The platform implements enterprise-grade security with AES-256-GCM encryption for all sensitive employee data including salaries, bank details, and performance bonuses.",
      },
      { type: "heading", level: 2, text: "Key Features" },
      {
        type: "features",
        items: [
          {
            title: "Employee Management",
            description:
              "Complete employee profiles with document storage, performance evaluations, designation history tracking, and Google Drive integration for secure file management.",
          },
          {
            title: "Real-time Attendance Tracking",
            description:
              "Automated attendance system with clock-in/out functionality, break management, attendance correction requests, and comprehensive reporting with cron-based automation.",
          },
          {
            title: "Payroll Management",
            description:
              "Automated payroll processing with configurable salary adjustments, bonus tracking, LOP calculations, and PDF report generation using PDFKit.",
          },
          {
            title: "Leave Management",
            description:
              "Comprehensive leave system with multi-level approval workflows, multiple leave types, retroactive applications, and dynamic balance tracking.",
          },
          {
            title: "Recruitment Pipeline",
            description:
              "Job posting management, applicant tracking system, public job application portal, and candidate evaluation workflow for streamlined hiring.",
          },
          {
            title: "Interactive Org Chart",
            description:
              "Visual organizational hierarchy using React Flow for displaying reporting structures, department relationships, and team compositions.",
          },
          {
            title: "Real-time Notifications",
            description:
              "Socket.IO powered instant notifications for leave approvals, attendance updates, payroll generation, and system alerts with persistent storage.",
          },
        ],
      },
      { type: "heading", level: 2, text: "Technical Implementation" },
      {
        type: "paragraph",
        text: "The application follows a **clean architecture pattern** with separate layers for controllers, services, models, and validations. The backend implements comprehensive input validation using Joi schemas, while the frontend uses Zod with React Hook Form for form validation.",
      },
      {
        type: "list",
        items: [
          "**State Management**: Redux Toolkit with RTK Query for efficient server state caching and automatic refetching",
          "**Authentication**: Dual authentication system supporting JWT tokens and Google OAuth 2.0 via Passport.js",
          "**Data Security**: Field-level AES-256-GCM encryption with PBKDF2 key derivation for sensitive employee data",
          "**UI Components**: Radix UI primitives with Tailwind CSS for accessible, customizable component library",
          "**Background Jobs**: Node-cron scheduled tasks for attendance marking, leave expiration, and holiday management",
          "**Org Visualization**: React Flow integration for interactive organizational chart with drag-and-drop capabilities",
          "**Real-time Updates**: Socket.IO for bidirectional communication enabling instant notifications across all connected clients",
        ],
      },
    ],
  },

  {
    title: "Winbid AI",
    description:
      "An intelligent proposal generation system leveraging multiple AI/LLMs to automate RFP responses and create professional bid documents from government procurement sources.",
    image: "/project/winbid-ai.png",
    // link: 'https://github.com/yourusername/winbid',
    technologies: [
      { name: "React", icon: <ReactIcon />, href: "https://react.dev" },
      { name: "Node.js", icon: <NodeJs />, href: "https://nodejs.org" },
      { name: "Express", icon: <ExpressJs />, href: "https://expressjs.com" },
      { name: "MongoDB", icon: <MongoDB />, href: "https://mongodb.com" },
      { name: "Grok AI", icon: <AI />, href: "https://x.ai" },
      { name: "DeepSeek", icon: <AI />, href: "https://deepseek.com" },
      { name: "Llama", icon: <AI />, href: "https://llama.meta.com" },
      { name: "Puppeteer", icon: <Puppeteer />, href: "https://pptr.dev" },
      { name: "Socket.io", icon: <SocketIo />, href: "https://socket.io" },
    ],
    // live: 'https://winbid.netlify.app',
    details: true,
    projectDetailsPageSlug: "/projects/winbid-ai",
    isWorking: false,
    role: "Full Stack Developer",
    status: "in-progress",
    featured: true,
    challenges: [
      "Implementing multi-source RFP aggregation with web scraping from SAM.gov, OpenGov, DemandStar, and Bonfire APIs with different authentication methods and data formats",
      "Building a multi-agent AI pipeline using multiple LLMs (Grok, DeepSeek, Llama) for intelligent proposal generation with scope analysis, solution generation, and document creation",
      "Handling complex document parsing for PDFs, DOCX, and Excel files to extract RFP requirements and generate structured proposals",
      "Implementing real-time progress tracking with Socket.io for long-running AI document generation tasks with cancellation support",
      "Creating a dynamic proposal builder with section-by-section AI regeneration, content improvement, and professional DOCX export with custom templates",
    ],
    learnings: [
      "Mastered multi-agent AI architecture patterns using multiple LLMs (Grok, DeepSeek, Llama) for complex document generation workflows",
      "Gained deep experience with government procurement APIs (SAM.gov, OpenGov, DemandStar, Bonfire) including authentication, rate limiting, and data transformation",
      "Learned advanced document processing techniques for parsing and generating professional DOCX documents with custom templates",
      "Implemented sophisticated real-time communication with Socket.io for progress tracking and operation cancellation",
      "Developed expertise in template management systems for different proposal types and client requirements",
    ],
    isPublished: true,
    content: [
      { type: "heading", level: 2, text: "Overview" },
      {
        type: "paragraph",
        text: "Winbid AI is an **intelligent proposal generation system** that leverages multiple AI/LLMs including **Grok, DeepSeek, and Llama** to automate RFP responses and create professional bid documents. The platform aggregates government contract opportunities from **SAM.gov, Bonfire, DemandStar, and OpenGov**, providing businesses with a streamlined workflow for discovering opportunities and generating winning proposals automatically.",
      },
      {
        type: "highlight",
        variant: "info",
        text: "Winbid AI reduces proposal writing time by up to 80% through its multi-agent AI pipeline that analyzes RFP requirements and generates comprehensive, compliant proposal documents.",
      },
      { type: "heading", level: 2, text: "Key Features" },
      {
        type: "features",
        items: [
          {
            title: "Multi-Agent AI Pipeline",
            description:
              "Intelligent proposal generation using multiple LLMs (Grok, DeepSeek, Llama) for scope analysis, solution generation, blueprint creation, and final document production.",
          },
          {
            title: "Automated RFP Discovery",
            description:
              "Aggregates and normalizes RFP data from SAM.gov, Bonfire, DemandStar, and OpenGov with advanced filtering and search capabilities.",
          },
          {
            title: "Professional DOCX Generation",
            description:
              "Creates polished proposal documents with custom templates, company branding, and professional formatting ready for submission.",
          },
          {
            title: "Real-Time Progress Tracking",
            description:
              "WebSocket-based live updates during AI document generation with operation cancellation support and instant UI feedback.",
          },
          {
            title: "Section-by-Section AI Improvement",
            description:
              "Granular control over AI-generated content with the ability to regenerate or improve individual sections based on specific requirements.",
          },
          {
            title: "Template Management",
            description:
              "Flexible template system supporting different proposal types, industries, and client requirements for consistent, professional outputs.",
          },
        ],
      },
      { type: "heading", level: 2, text: "Technical Implementation" },
      {
        type: "paragraph",
        text: "The platform is built on a **React frontend** with a **Node.js/Express backend** and **MongoDB** for data persistence. The AI system uses a **multi-agent pipeline** leveraging multiple LLMs (Grok, DeepSeek, Llama) for different stages of proposal generation. **Puppeteer** handles web scraping for RFP aggregation, while **Socket.io** enables real-time communication for progress tracking during long-running AI operations.",
      },
      {
        type: "list",
        items: [
          "**Multi-LLM Integration**: Leverages Grok, DeepSeek, and Llama models for different aspects of proposal generation and content optimization",
          "**Automated RFP Scraping**: Puppeteer-based web scraping from SAM.gov, Bonfire, DemandStar, and OpenGov with data normalization",
          "**Real-Time WebSockets**: Socket.io for bidirectional communication enabling live progress tracking and operation cancellation",
          "**Document Generation**: Professional DOCX output with custom templates, company logos, and structured formatting",
          "**Template System**: Flexible template management for different proposal types and client requirements",
        ],
      },
    ],
  },

  {
    title: "DineFlow",
    description:
      "A comprehensive restaurant management platform with multi-tenant architecture, featuring interactive floor plan design, drag-and-drop menu builder, and role-based access control for restaurant chains.",
    image: "/project/dineflow.png",
    // link: 'https://github.com/yourusername/dineflow',
    technologies: [
      { name: "React", icon: <ReactIcon />, href: "https://react.dev" },
      {
        name: "TypeScript",
        icon: <TypeScript />,
        href: "https://www.typescriptlang.org",
      },
      { name: "Node.js", icon: <NodeJs />, href: "https://nodejs.org" },
      {
        name: "Express.js",
        icon: <ExpressJs />,
        href: "https://expressjs.com",
      },
      { name: "MongoDB", icon: <MongoDB />, href: "https://www.mongodb.com" },
      {
        name: "Redux Toolkit",
        icon: <Redux />,
        href: "https://redux-toolkit.js.org",
      },
      {
        name: "Tailwind CSS",
        icon: <TailwindCss />,
        href: "https://tailwindcss.com",
      },
      { name: "Next.js", icon: <NextJs />, href: "https://nextjs.org" },
      { name: "Vite", icon: <Vite />, href: "https://vitejs.dev" },
      { name: "Radix UI", icon: <RadixUI />, href: "https://www.radix-ui.com" },
    ],
    // live: 'https://dineflow.app',
    details: true,
    projectDetailsPageSlug: "/projects/dineflow",
    isWorking: false,
    role: "Full Stack Developer",
    status: "in-progress",
    featured: true,
    challenges: [
      "Implementing a real-time interactive floor plan editor with Konva.js, handling complex drag-and-drop interactions, collision detection, and table positioning with visual feedback",
      "Building a hierarchical drag-and-drop menu builder supporting nested sections, categories, and dishes with dynamic reordering and display order management using dnd-kit",
      "Designing a multi-tenant architecture supporting restaurant chains with multiple outlets, each with independent menus, tables, and staff while sharing common resources",
      "Implementing granular role-based access control (RBAC) with Admin, Owner, and Manager roles, each with different permissions across restaurants and outlets",
      "Managing complex state synchronization between local UI state and server data, handling optimistic updates with pending changes tracking and bulk save operations",
    ],
    learnings: [
      "Mastered canvas-based UI development with React-Konva for building interactive 2D floor plan editors with drag, rotate, and resize capabilities",
      "Gained deep expertise in dnd-kit library for implementing complex nested drag-and-drop interfaces with custom collision detection algorithms",
      "Learned effective patterns for RTK Query with automatic cache invalidation, optimistic updates, and efficient data fetching strategies",
      "Developed skills in building scalable multi-tenant SaaS architectures with MongoDB, handling data isolation and shared resources",
      "Improved understanding of form validation patterns using Zod schemas with React Hook Form for type-safe, reusable validation logic",
    ],
    isPublished: true,
    content: [
      { type: "heading", level: 2, text: "Overview" },
      {
        type: "paragraph",
        text: "DineFlow is a **full-stack restaurant management platform** designed for restaurant chains and multi-outlet operations. It provides a centralized dashboard for managing restaurants, outlets, staff, menus, tables, and orders with **role-based access control** ensuring the right people have access to the right features.",
      },
      {
        type: "highlight",
        variant: "info",
        text: "Built with a modern tech stack featuring React 19, TypeScript, Express 5, and MongoDB, DineFlow demonstrates advanced patterns in state management, real-time UI interactions, and multi-tenant architecture design.",
      },
      { type: "heading", level: 2, text: "Key Features" },
      {
        type: "features",
        items: [
          {
            title: "Interactive Floor Plan Designer",
            description:
              "Canvas-based table layout editor using React-Konva with drag-and-drop positioning, collision detection, table shapes (circle/rectangle), rotation, and real-time status visualization (available, occupied, reserved, inactive).",
          },
          {
            title: "Drag-and-Drop Menu Builder",
            description:
              "Hierarchical menu construction with sections, categories, and dishes. Supports nested drag-and-drop reordering, custom pricing per menu, and dynamic display order management using dnd-kit.",
          },
          {
            title: "Multi-Tenant Restaurant Management",
            description:
              "Support for restaurant chains with multiple outlets. Each outlet has independent menus, floor plans, and staff while sharing dishes, categories, and addons at the restaurant level.",
          },
          {
            title: "Role-Based Access Control",
            description:
              "Granular permissions system with Admin, Owner, and Manager roles. Route-level guards and API-level authorization ensure secure access to features based on user roles and organizational hierarchy.",
          },
          {
            title: "Comprehensive Dish & Addon Management",
            description:
              "Full CRUD operations for dishes with support for dietary types (veg, non-veg, egg), preparation time, serving size, pricing, and customizable addons that can be attached to multiple dishes.",
          },
        ],
      },
      { type: "heading", level: 2, text: "Technical Implementation" },
      {
        type: "paragraph",
        text: "The application follows a **clean architecture pattern** with separate frontend (React + Vite), marketing site (Next.js), and backend (Express + MongoDB) applications. State management leverages **Redux Toolkit with RTK Query** for efficient API caching and automatic refetching.",
      },
      {
        type: "list",
        items: [
          "**Frontend Architecture**: React 19 with TypeScript, Vite for fast HMR, shadcn/ui components built on Radix primitives, and Tailwind CSS for styling",
          "**State Management**: Redux Toolkit with RTK Query for API state, custom slices for UI state, and optimistic updates with rollback support",
          "**Backend Design**: Express 5 with service-layer architecture, Mongoose ODM for MongoDB, JWT authentication, and Joi validation",
          "**Canvas Rendering**: React-Konva for 2D floor plan rendering with custom event handlers for drag, click, and collision detection",
          "**Drag-and-Drop**: dnd-kit library with custom collision detection, sortable contexts, and drag overlays for visual feedback",
          "**Form Handling**: React Hook Form with Zod schema validation for type-safe forms with reusable validators across frontend and backend",
          "**Theming**: next-themes integration with system preference detection and persistent theme storage",
        ],
      },
    ],
  },

  {
    title: "Organization Management System",
    description:
      "An internal management platform to organize departments, teams, projects, tasks, and employee grievances with real-time collaboration.",
    image: "/project/Organization_Management_System.png",
    github:
      "https://github.com/Arth-02/Organizational-Grievance-Support-System",
    technologies: [
      { name: "React", icon: <ReactIcon />, href: "https://react.dev/" },
      { name: "shadcn/ui", icon: <Shadcn />, href: "https://ui.shadcn.com/" },
      { name: "Node.js", icon: <NodeJs />, href: "https://nodejs.org/" },
      {
        name: "Express.js",
        icon: <ExpressJs />,
        href: "https://expressjs.com/",
      },
      { name: "MongoDB", icon: <MongoDB />, href: "https://www.mongodb.com/" },
      { name: "Socket.io", icon: <SocketIo />, href: "https://socket.io/" },
      { name: "Github", icon: <Github />, href: "https://github.com/" },
    ],
    // live: "#",
    details: true,
    projectDetailsPageSlug: "/projects/organization-management-system",
    isWorking: false,
    role: "Full Stack Developer",
    status: "completed",
    featured: true,
    challenges: [
      "Building real-time collaboration features with Socket.io",
      "Designing a scalable department hierarchy system",
      "Implementing role-based access control for different user types",
    ],
    learnings: [
      "Architecting complex organizational data structures",
      "Real-time WebSocket communication patterns",
      "Building scalable grievance management workflows",
    ],
    isPublished: true,
    content: [
      { type: "heading", level: 2, text: "Overview" },
      {
        type: "paragraph",
        text: "Organization Management System is a **comprehensive internal platform** designed to streamline organizational workflows. It enables efficient management of departments, teams, projects, tasks, and employee grievances with real-time collaboration features.",
      },
      {
        type: "highlight",
        variant: "info",
        text: "This project was built to solve real-world organizational challenges, focusing on **scalability** and **real-time updates**.",
      },
      { type: "heading", level: 2, text: "Key Features" },
      {
        type: "features",
        items: [
          {
            title: "Department Management",
            description:
              "Create and manage organizational hierarchy with nested departments",
          },
          {
            title: "Team Collaboration",
            description:
              "Assign team members to projects with role-based permissions",
          },
          {
            title: "Task Tracking",
            description:
              "Create, assign, and track tasks with status updates and deadlines",
          },
          {
            title: "Grievance System",
            description:
              "Anonymous grievance submission with tracking and resolution workflow",
          },
        ],
      },
      { type: "heading", level: 2, text: "Technical Implementation" },
      {
        type: "paragraph",
        text: "The system uses a React frontend with `shadcn/ui` components for a modern, accessible interface. The backend is built with **Node.js** and **Express.js**, with MongoDB for flexible document storage.",
      },
      {
        type: "highlight",
        variant: "success",
        text: "**Socket.io** enables real-time communication across all connected clients, ensuring instant updates for collaborative features.",
      },
      { type: "heading", level: 3, text: "Architecture Highlights" },
      {
        type: "list",
        items: [
          "**RESTful API** design with proper error handling and validation",
          "Real-time event broadcasting using **Socket.io rooms**",
          "MongoDB with Mongoose for **schema validation** and indexing",
          "JWT-based authentication with **role-based access control**",
        ],
      },
    ],
  },

  {
    title: "Runner Spikes",
    description:
      "India's premier e-commerce platform for track & field spikes, running shoes, and athletic gear with Razorpay payments.",
    image: "/project/runnerspikes.png",
    link: 'https://www.runnerspikes.in',
    technologies: [
      { name: "React", icon: <ReactIcon />, href: "https://react.dev/" },
      { name: "Node.js", icon: <NodeJs />, href: "https://nodejs.org/" },
      {
        name: "Express.js",
        icon: <ExpressJs />,
        href: "https://expressjs.com/",
      },
      { name: "MongoDB", icon: <MongoDB />, href: "https://www.mongodb.com/" },
      {
        name: "TypeScript",
        icon: <TypeScript />,
        href: "https://typescriptlang.org/",
      },
      {
        name: "Tailwind CSS",
        icon: <TailwindCss />,
        href: "https://tailwindcss.com/",
      },
      { name: "AWS", icon: <AWS />, href: "https://aws.amazon.com/" },
    ],
    live: 'https://www.runnerspikes.in',
    details: true,
    projectDetailsPageSlug: "/projects/runner-spikes",
    isWorking: true,
    role: "Full Stack Developer",
    status: "completed",
    featured: true,
    challenges: [
      "Building a scalable product variant system with size-color dependencies",
      "Implementing secure Razorpay payment integration with order verification",
      "Creating responsive mobile-first UI with swipeable product galleries",
      "Managing complex filter state with URL synchronization for shareable product searches",
      "Optimizing image delivery with Cloudinary and AWS S3 integration",
    ],
    learnings: [
      "Deep understanding of e-commerce payment flows and order lifecycle management",
      "Building role-based access control for admin dashboards",
      "Implementing infinite scroll with intersection observers",
      "Managing complex Redux state with RTK Query caching strategies",
      "SEO optimization with dynamic Open Graph meta tags for product sharing",
    ],
    isPublished: true,
    content: [
      { type: "heading", level: 2, text: "Overview" },
      {
        type: "paragraph",
        text: "Runner Spikes is a **full-featured e-commerce platform** built specifically for India's track and field athletes. The platform provides World Athletics approved spikes, running shoes, and competition-ready athletic gear.",
      },
      {
        type: "highlight",
        variant: "info",
        text: "This project delivers a complete shopping experience with advanced filtering, cart management, secure Razorpay payments, and order tracking.",
      },
      { type: "heading", level: 2, text: "Key Features" },
      {
        type: "features",
        items: [
          {
            title: "Product Filtering",
            description:
              "Browse products by category, brand, tags, size, color, and price range with real-time filtering",
          },
          {
            title: "Size Charts",
            description:
              "Brand-specific size charts for Nike, Adidas, Puma, and General sizing",
          },
          {
            title: "Secure Payments",
            description:
              "Complete purchases securely through Razorpay payment gateway",
          },
          {
            title: "Order Tracking",
            description:
              "Track orders and view order history with delivery status updates",
          },
          {
            title: "Admin Dashboard",
            description:
              "Manage products, categories, brands, orders, users, coupons, and reviews",
          },
        ],
      },
      { type: "heading", level: 2, text: "Technical Implementation" },
      {
        type: "paragraph",
        text: "Built with **React 19 + Vite** for fast frontend development. **Redux Toolkit with RTK Query** handles state management and API caching. Backend uses **Express 5 + MongoDB** for a scalable REST API.",
      },
      {
        type: "list",
        items: [
          "**Razorpay** for secure Indian payment processing",
          "**Cloudinary + AWS S3** for optimized image storage and delivery",
          "**Twilio** for OTP-based phone authentication",
          "**JWT + Helmet** for authentication and API security",
        ],
      },
    ],
  },
];
