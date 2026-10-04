import AWS from "@/components/technologies/AWS";
import ECharts from "@/components/technologies/ECharts";
import ExpressJs from "@/components/technologies/ExpressJs";
import MongoDB from "@/components/technologies/MongoDB";
import NodeJs from "@/components/technologies/NodeJs";
import OpenAI from "@/components/technologies/OpenAI";
import ParseIcon from "@/components/technologies/ParseIcon";
import ReactIcon from "@/components/technologies/ReactIcon";
import SocketIo from "@/components/technologies/SocketIo";
import Stripe from "@/components/technologies/Stripe";
import Web3 from "@/components/technologies/Web3";
import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Total Liquor",
    description:
      "B2B ordering, fulfillment, and Finix payments for licensed Texas liquor stores and hospitality businesses.",
    image: "/project/total-liquor-ai.webp",
    // link: "https://github.com/DeveloperBilions/total-liquor-frontend",
    technologies: [
  {
    "name": "React",
    "href": "https://react.dev",
    "icon": null
  },
  {
    "name": "Express",
    "href": "https://expressjs.com",
    "icon": null
  },
  {
    "name": "PostgreSQL",
    "href": "https://postgresql.org",
    "icon": null
  },
  {
    "name": "Sequelize",
    "href": "https://sequelize.org",
    "icon": null
  },
  {
    "name": "Socket.IO",
    "href": "https://socket.io",
    "icon": null
  },
  {
    "name": "Finix",
    "href": "https://finix.com",
    "icon": null
  },
  {
    "name": "AWS S3",
    "href": "https://aws.amazon.com/s3",
    "icon": null
  }
],
    // live: "https://totalliquor.com",
    details: true,
    projectDetailsPageSlug: "/projects/total-liquor",
    isWorking: false,
    timeline: "6+ months",
    role: "Full Stack Developer",
    team: "3 developers",
    status: "in-progress",
    featured: true,
    challenges: [
      "Implementing a two-step payment flow (authorization → capture) with Finix split transfers to automatically divide funds between store merchants and the platform, including idempotent webhook processing for transfer confirmations and fee reconciliation.",
      "Building a real-time order lifecycle management system using Socket.IO that synchronizes order state transitions (placed → accepted → ready → in_transit → delivered) across buyer, seller, and admin dashboards with instant notifications and live board updates.",
      "Designing a dynamic dual-flow pricing engine (Flow A / Flow B) with configurable seller margins, platform markups, and per-store overrides that recalculates prices in real-time via WebSocket broadcasts when admin settings change.",
      "Architecting TABC (Texas Alcoholic Beverage Commission) license compliance automation with live API verification, scheduled cron-based license sync, expiration monitoring with automated email alerts, and order-blocking for non-compliant businesses.",
      "Engineering a unified order acceptance system supporting full accept, partial modifications (item removal/quantity adjustment), order splitting for high-value orders (>$3,000 threshold), and store-initiated cancellations — each with corresponding payment adjustments (void/refund/re-authorization)."
    ],
    learnings: [
      "Mastered financial platform architecture including double-entry ledger accounting, split payment processing, settlement reconciliation, and zero-fee merchant profile management with Finix payment gateway.",
      "Gained deep experience with B2B marketplace multi-tenancy patterns — county-based store assignment, role-based access control (owner/manager/staff/admin), and business-type routing guards for buyer vs. seller experiences.",
      "Learned to implement robust cron-based background job orchestration with mutex guards for concurrent execution prevention, covering TABC license sync, Finix fee reconciliation, payout status sync, and auto-delivery marking.",
      "Developed expertise in building production-grade checkout flows with card tokenization (Finix.js SDK), tokenized payment instrument storage, authorization hold management, and graceful failure recovery with cart preservation.",
      "Understood the complexity of building compliance-driven e-commerce — sticker management for regulatory tracking, TABC license verification workflows, county serviceability checks, and audit logging for every business-critical action."
    ],
    isPublished: true,
    content: [
      {
        "type": "heading",
        "level": 2,
        "text": "Overview"
      },
      {
        "type": "paragraph",
        "text": "**Total Liquor** is a B2B liquor marketplace platform operating in **Texas** that connects **buyers** (restaurants, bars, and hospitality businesses) with **licensed liquor stores** (sellers) for wholesale liquor ordering with delivery. The platform handles the entire order lifecycle from product browsing and cart management through checkout, payment processing, order fulfillment, and settlement — all while enforcing **TABC (Texas Alcoholic Beverage Commission)** compliance at every step."
      },
      {
        "type": "highlight",
        "variant": "info",
        "text": "The platform processes payments via Finix with a two-step authorization → capture flow and automated split transfers, ensuring stores receive their earnings while the platform retains its commission. A double-entry ledger system tracks every financial transaction for complete audit transparency."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Key Features"
      },
      {
        "type": "features",
        "items": [
          {
            "title": "Multi-Role B2B Marketplace",
            "description": "Three distinct user experiences — Buyer Portal for browsing products with advanced filtering (category, brand, spirit type, price range), Store Dashboard with real-time live order board and analytics, and Admin Panel with comprehensive platform management, user oversight, and financial reporting."
          },
          {
            "title": "Finix Payment Processing & Split Transfers",
            "description": "Complete payment lifecycle management with card tokenization via Finix.js SDK, two-step auth/capture flow, automated split transfers dividing funds between merchant and platform, webhook-driven confirmation, and support for voids, full/partial refunds, and dispute handling."
          },
          {
            "title": "Real-Time Order Management",
            "description": "Socket.IO-powered live order board enabling instant state transitions (placed → accepted → ready → in_transit → delivered), unified order acceptance with modification/splitting capabilities, sub-order management, and real-time price update broadcasting across all connected clients."
          },
          {
            "title": "TABC Compliance & License Automation",
            "description": "Automated TABC license verification via live API checks during registration and checkout, scheduled daily license sync cron jobs, expiration monitoring with staged email alerts (warning → expired → reactivation), sticker management for regulatory tracking, and automatic order blocking for non-compliant businesses."
          },
          {
            "title": "Financial Platform & Analytics",
            "description": "Double-entry platform ledger tracking order revenue, processing fees, and store payouts. Comprehensive admin analytics with revenue trends, store performance comparisons, peak ordering hours, conversion rates, and customer LTV. Automated settlement reconciliation running daily with full P&L reporting."
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Technical Implementation"
      },
      {
        "type": "paragraph",
        "text": "The application follows a **modern full-stack architecture** with a React 19 SPA frontend (Vite + TailwindCSS v4) communicating with an Express.js v4 REST API backed by PostgreSQL via Sequelize ORM. State management uses **RTK Query** with automated cache invalidation triggered by Socket.IO events, ensuring real-time data freshness without manual refetching. The backend employs Sequelize models spanning the full domain — from core entities (users, businesses, orders, products) to financial models (payments, splits, ledger entries, settlements) and compliance models (licenses, stickers, audit logs)."
      },
      {
        "type": "list",
        "items": [
          "**Frontend Stack:** React 19 + Vite 7 + TailwindCSS v4, Radix UI primitives, RTK Query for API state management, React Hook Form + Zod validation, Recharts for analytics dashboards, and Socket.IO client for real-time updates.",
          "**Backend Stack:** Express.js v4 on Node 18+, PostgreSQL with Sequelize ORM, Redis caching via ioredis, JWT authentication (15min access + 7d refresh tokens with automatic rotation), and rate limiting.",
          "**Payment Infrastructure:** Finix payment gateway with seller KYB onboarding, card tokenization, auth/capture split-transfer flow, webhook processing with HMAC signature verification, zero-fee profile management, and automated fee reconciliation cron jobs.",
          "**Background Jobs:** Six concurrent cron jobs — TABC license sync (daily), Finix fee reconciliation (every minute), capture retry for stuck payments (every 5 minutes), finance reconciliation (daily at 2 AM CST), payout status sync (every 30 minutes), and auto-delivery marking — all with mutex guards preventing concurrent execution.",
          "**Cloud Services:** AWS S3 with presigned URLs for license document and product image storage, Nodemailer for transactional emails (OTP verification, license alerts, order notifications), and PDFKit/jsPDF for invoice and receipt generation.",
          "**DevOps & Infrastructure:** Frontend deployed on Netlify with SPA redirects, backend on Render, GitHub for source control with PR-based workflow, and comprehensive environment-based configuration management."
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Engineering Decisions and Recovery"
      },
      {
        "type": "paragraph",
        "text": "Authorization and capture are separate stages because acceptance, item changes, and cancellations affect the final charge. Webhook deduplication and reconciliation handle asynchronous transfer outcomes; amounts are represented in cents to keep financial calculations consistent."
      },
      {
        "type": "paragraph",
        "text": "Scheduled jobs reconcile external payment and license state. The license integration includes circuit-breaker handling when the provider is unavailable, while Socket.IO keeps operational boards connected to backend order changes."
      }
    ],
  ownership: "company",
platforms: [
  "Web",
  "Backend"
],
contribution: "I worked across buyer, seller, and admin interfaces, order APIs, pricing, payments, and integrations.",
},
  {
    title: "AOG",
    description:
      "A rewards platform spanning web dashboards, React Native/Expo mobile journeys, and wallet accounting.",
    image: "/project/aog-ai.webp",
    // link: "https://www.aogcoin.club",
    technologies: [
  {
    "name": "React",
    "href": "https://react.dev",
    "icon": null
  },
  {
    "name": "Redux Toolkit",
    "href": "https://redux-toolkit.js.org",
    "icon": null
  },
  {
    "name": "React Native",
    "href": "https://reactnative.dev",
    "icon": null
  },
  {
    "name": "Expo",
    "href": "https://expo.dev",
    "icon": null
  },
  {
    "name": "Express",
    "href": "https://expressjs.com",
    "icon": null
  },
  {
    "name": "MySQL",
    "href": "https://mysql.com",
    "icon": null
  },
  {
    "name": "Socket.IO",
    "href": "https://socket.io",
    "icon": null
  }
],
    // live: "https://www.aogcoin.club",
    details: true,
    projectDetailsPageSlug: "/projects/aog-coin",
    isWorking: true,
    timeline: "6+ months",
    role: "Full Stack Developer",
    team: "2 developers",
    status: "in-progress" as const,
    featured: true,
    challenges: [
      "Integrating multiple payment gateways (Finix, CommerceHub, Fiserv DDP, Link.money) with webhook-driven transaction lifecycle management, idempotent processing, and cron-based polling for pending settlements.",
      "Building a secure game provider integration layer with token-based authentication, MD5 secure-key generation, real-time balance synchronization, and seamless bet/win transaction settlement across the TADA game API.",
      "Implementing a dual-currency sweepstakes model (Gold Coins & Sweepstakes Coins) with separate balance ledgers, escrow-based redemption workflows, and prize redemption rules.",
      "Designing a multi-role access control system (Player, Agent, Admin, Super Admin) with role-based routing, JWT session management, session versioning for forced single-device login, and real-time Socket.IO force-logout events.",
      "Architecting a referral fraud prevention system with signup-attempt tracking, automated fraud detection heuristics, and admin review workflows to prevent coordinated abuse of referral bonus programs.",
      "Coordinating mobile navigation, secure session storage, WebView lifecycle, and recovery from interrupted network requests."
    ],
    learnings: [
      "Mastered webhook-driven payment architectures with Finix and Fiserv, learning to handle asynchronous settlement flows, retry logic, and reconciliation between multiple payment providers.",
      "Gained deep experience with sweepstakes compliance models — understanding the legal distinction between Gold Coins (entertainment value) and Sweepstakes Coins (prize-redeemable) and implementing the dual-currency ledger accordingly.",
      "Learned to build robust real-time systems using Socket.IO with JWT-authenticated rooms, enabling instant balance updates, force-logout across devices, and live transaction status notifications.",
      "Developed expertise in identity verification workflows by integrating SEON for KYC document verification, Google reCAPTCHA for bot prevention, and multi-step verification bonuses tied to email/phone/document validation.",
      "Advanced understanding of database evolution at scale — managing incremental SQL migrations to iteratively add agent accounting, game catalog management, referral fraud detection, and transaction logging.",
      "Handling native app lifecycle and device-specific behavior alongside shared web and backend workflows."
    ],
    isPublished: true,
    content: [
      {
        "type": "heading",
        "level": 2,
        "text": "Overview"
      },
      {
        "type": "paragraph",
        "text": "AOG is a sweepstakes-style gaming and rewards platform built for Bilions. Its dual-currency model distinguishes Gold Coins for entertainment gameplay from Sweepstakes Coins used in redemption workflows. The platform connects a TADA game catalog, package purchases, wallet accounting, KYC review, redemption processing, and multi-role administration. I worked across the web applications, Express/MySQL backend, and React Native/Expo mobile application."
      },
      {
        "type": "highlight",
        "variant": "info",
        "text": "Separate balances and ledgers represent gameplay and redemption state. Promotional rules, identity review, and restricted-location controls are implemented as product workflows; this case study does not assert legal certification."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Key Features"
      },
      {
        "type": "features",
        "items": [
          {
            "title": "Dual-Currency Game Lobby",
            "description": "Players browse a dynamic game catalog (slots, fishing, bingo, table games) fetched from the TADA game provider API. Games launch in-browser via a tokenized session with real-time GC/SC balance synchronization, bet/win settlement, and session tracking. Players can toggle between Gold Coin and Sweepstakes Coin wallets."
          },
          {
            "title": "Multi-Gateway Payment Processing & Redemptions",
            "description": "Full purchase-to-payout lifecycle supporting Finix (card tokenization), CommerceHub, and Fiserv DDP for GC package purchases. SC redemptions go through admin review → ACH payout via Finix payouts or Link.money, with webhook-driven status updates, automatic refunds on failure, and cron-based settlement polling."
          },
          {
            "title": "Multi-Role Admin Dashboard & Agent System",
            "description": "Role-based dashboards for Players, Agents, Admins, and Super Admins. Admins manage users, review KYC documents, oversee transactions, handle support tickets, and configure GC packages. Agents have dedicated accounting panels, balance logs, referral link management, and player-specific transaction views."
          },
          {
            "title": "Player Engagement & Rewards Engine",
            "description": "Comprehensive engagement system including daily login bonuses with streak tracking, tiered verification bonuses (email → phone → KYC), referral programs with fraud prevention, first-purchase mega offers, VIP club tiers, and an interactive onboarding walkthrough for new players."
          },
          {
            "title": "Identity Verification & Security Infrastructure",
            "description": "Multi-layer security: SEON-powered KYC document verification, geo-fencing for restricted jurisdictions, Google reCAPTCHA bot prevention, session versioning with Socket.IO force-logout for single-device enforcement, rate limiting, dev-tools detection, and inactivity-based auto-logout."
          },
          {
            "title": "React Native / Expo Mobile Application",
            "description": "Mobile screens use React Navigation, SecureStore for credentials, and WebView-based game sessions. Game screens coordinate landscape orientation and app lifecycle behavior; query recovery handles interrupted connections."
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Technical Implementation"
      },
      {
        "type": "paragraph",
        "text": "The platform includes a Node.js/Express REST API with MySQL, React/Vite web applications, and a React Native/Expo mobile application. The backend uses a layered MVC architecture (routes → controllers → services → DB utilities) with service modules for authentication, payments, game integration, and administration. The frontend employs RTK Query for API state management, Socket.IO hooks for real-time events, and Radix UI + Tailwind CSS v4 for the component library."
      },
      {
        "type": "list",
        "items": [
          "Authentication: JWT-based auth with Passport.js strategies for Google, Discord, and Twitch OAuth. Session versioning ensures single-device login enforcement with Socket.IO-triggered force-logout events.",
          "Payment Architecture: Webhook-driven flow with idempotent processing. Purchases: user selects package → Finix/CommerceHub tokenizes card → backend creates transfer → webhook confirms → credits GC + bonus SC. Redemptions: user requests SC cashout → SC escrow → admin review → Finix payout/Link.money ACH → webhook settles.",
          "Game Integration: TADA API integration with MD5 secure-key generation, token-based session management, and a /bet endpoint that validates balances, executes bet/win settlement, and updates the user's wallet atomically via the AOG Club API.",
          "Real-Time System: Socket.IO server with JWT middleware, role-based room assignments (user_{id}, member_{id}, admins), enabling live balance updates on purchases/bets, force-logout on concurrent sessions, and real-time transaction status notifications.",
          "Database: MySQL with incremental SQL migrations covering the full schema evolution — from the initial sweepstake casino schema to agent accounting, game catalogs, referral fraud prevention, dispute management, and transaction logging.",
          "Frontend Architecture: React 19 + Vite 6 SPA with React Router v7, Redux Toolkit with RTK Query (23 API service files), custom hooks (socket connections, SEO, inactivity logout, dev-tools detection), and a PWA manifest with service worker support.",
          "DevOps & SEO: Netlify deployment with SPA redirects, structured data (Organization + WebSite schema), Open Graph/Twitter cards, Google Analytics + Microsoft Clarity integration, and Google reCAPTCHA v2 for form protection."
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Mobile Engineering"
      },
      {
        "type": "paragraph",
        "text": "The mobile client shares backend APIs with the web applications but handles device-specific concerns explicitly. SecureStore persists credentials, React Navigation organizes journeys, and WebView game screens coordinate lifecycle and orientation rather than relying on desktop layout behavior."
      },
      {
        "type": "list",
        "items": [
          "**Session handling:** Keep mobile credentials in SecureStore and coordinate authenticated API requests with navigation state.",
          "**Game experience:** Manage WebView lifecycle and landscape behavior around provider-hosted game journeys.",
          "**Recovery:** Handle failed subscribed queries and retry or recover data when connectivity returns.",
          "**Notifications:** Backend FCM integration delivers mobile notifications alongside web Socket.IO events."
        ]
      }
    ],
  ownership: "company",
platforms: [
  "Web",
  "Mobile",
  "Backend"
],
contribution: "I worked across React web applications, the Express backend, and the React Native/Expo application, including React Navigation, secure token storage, and WebView game journeys.",
},

  {
    title: "Game Admin Portal",
    description:
      "A comprehensive gaming platform administration system with real-time balance management, hierarchical user management, transaction reporting, and AI-powered chatbot support for casino-style games.",
    image: "/project/game-admin-portal-ai.webp",
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
    image: "/project/getways-ai.webp",
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
      "Employee administration, attendance, payroll, and organization workflows.",
    image: "/project/hrms-ai.webp",
    // link: 'https://github.com/yourusername/hrms',
    technologies: [
  {
    "name": "React",
    "href": "https://react.dev",
    "icon": null
  },
  {
    "name": "Express",
    "href": "https://expressjs.com",
    "icon": null
  },
  {
    "name": "MongoDB",
    "href": "https://mongodb.com",
    "icon": null
  },
  {
    "name": "Redux Toolkit",
    "href": "https://redux-toolkit.js.org",
    "icon": null
  },
  {
    "name": "React Flow",
    "href": "https://reactflow.dev",
    "icon": null
  }
],
    // live: 'https://hrms.yourdomain.com',
    details: true,
    projectDetailsPageSlug: "/projects/hrms",
    isWorking: true,
    role: "Full Stack Developer",
    status: "completed",
    featured: false,
    challenges: [
      "Implementing AES-256-GCM encryption for sensitive employee data including salaries, bank details, and bonus information with secure key derivation using PBKDF2",
      "Building a complex payroll calculation system that handles working days, holidays, leave deductions, salary adjustments, and supports multiple employment types (Full-Time, Part-Time, Intern, Freelance)",
      "Designing a real-time notification system using Socket.IO for instant updates on leave approvals, attendance corrections, and payroll generation across multiple user roles",
      "Creating a flexible leave management system with multi-level approval workflows, retroactive leave auto-approval, and dynamic leave balance tracking with minimum balance limits",
      "Implementing role-based access control (RBAC) with hierarchical permissions for Admin, HR, Manager, and Employee roles with protected routes and API middleware"
    ],
    learnings: [
      "Mastered field-level encryption strategies for protecting sensitive data at rest while maintaining query capabilities through MongoDB aggregation pipelines",
      "Gained expertise in building cron job schedulers for automated tasks like attendance marking, leave expiration, and holiday management using node-cron",
      "Learned to implement Google OAuth 2.0 authentication with Passport.js alongside traditional JWT-based authentication for flexible login options",
      "Developed skills in building interactive org chart visualizations with React Flow for displaying organizational hierarchy and reporting structures",
      "Understood the importance of proper date handling across timezones using Luxon and Moment.js for accurate attendance and payroll calculations"
    ],
    isPublished: true,
    content: [
      {
        "type": "heading",
        "level": 2,
        "text": "Overview"
      },
      {
        "type": "paragraph",
        "text": "HRMS is a **comprehensive Human Resource Management System** designed to streamline HR operations for organizations. Built with a modern tech stack featuring React and Express, it provides a complete solution for managing employees, attendance, payroll, recruitment, and organizational workflows. The platform features **role-based dashboards** with real-time updates powered by Socket.IO."
      },
      {
        "type": "highlight",
        "variant": "info",
        "text": "The platform implements enterprise-grade security with AES-256-GCM encryption for all sensitive employee data including salaries, bank details, and performance bonuses."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Key Features"
      },
      {
        "type": "features",
        "items": [
          {
            "title": "Employee Management",
            "description": "Complete employee profiles with document storage, performance evaluations, designation history tracking, and Google Drive integration for secure file management."
          },
          {
            "title": "Real-time Attendance Tracking",
            "description": "Automated attendance system with clock-in/out functionality, break management, attendance correction requests, and comprehensive reporting with cron-based automation."
          },
          {
            "title": "Payroll Management",
            "description": "Automated payroll processing with configurable salary adjustments, bonus tracking, LOP calculations, and PDF report generation using PDFKit."
          },
          {
            "title": "Leave Management",
            "description": "Comprehensive leave system with multi-level approval workflows, multiple leave types, retroactive applications, and dynamic balance tracking."
          },
          {
            "title": "Recruitment Pipeline",
            "description": "Job posting management, applicant tracking system, public job application portal, and candidate evaluation workflow for streamlined hiring."
          },
          {
            "title": "Interactive Org Chart",
            "description": "Visual organizational hierarchy using React Flow for displaying reporting structures, department relationships, and team compositions."
          },
          {
            "title": "Real-time Notifications",
            "description": "Socket.IO powered instant notifications for leave approvals, attendance updates, payroll generation, and system alerts with persistent storage."
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Technical Implementation"
      },
      {
        "type": "paragraph",
        "text": "The application follows a **clean architecture pattern** with separate layers for controllers, services, models, and validations. The backend implements comprehensive input validation using Joi schemas, while the frontend uses Zod with React Hook Form for form validation."
      },
      {
        "type": "list",
        "items": [
          "**State Management**: Redux Toolkit with RTK Query for efficient server state caching and automatic refetching",
          "**Authentication**: Dual authentication system supporting JWT tokens and Google OAuth 2.0 via Passport.js",
          "**Data Security**: Field-level AES-256-GCM encryption with PBKDF2 key derivation for sensitive employee data",
          "**UI Components**: Radix UI primitives with Tailwind CSS for accessible, customizable component library",
          "**Background Jobs**: Node-cron scheduled tasks for attendance marking, leave expiration, and holiday management",
          "**Org Visualization**: React Flow integration for interactive organizational chart with drag-and-drop capabilities",
          "**Real-time Updates**: Socket.IO for bidirectional communication enabling instant notifications across all connected clients"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Employment History and Integration Decisions"
      },
      {
        "type": "paragraph",
        "text": "Employment-period helpers support attendance and payroll calculations as employee status changes. Historical records and cached mirrors need consistent updates so a current profile change does not silently alter the meaning of past employment periods. Google Drive/OAuth integration connects document workflows to employee administration."
      }
    ],
  ownership: "company",
platforms: [
  "Web",
  "Backend"
],
contribution: "I worked on employee and organization interfaces, APIs, attendance and payroll workflows, and Google Drive/OAuth integration.",
},

  {
    title: "Winbid",
    description:
      "Procurement discovery and AI-assisted proposal preparation.",
    image: "/project/winbid-cover-ai.webp",
    // link: 'https://github.com/yourusername/winbid',
    technologies: [
  {
    "name": "React",
    "href": "https://react.dev",
    "icon": null
  },
  {
    "name": "Express",
    "href": "https://expressjs.com",
    "icon": null
  },
  {
    "name": "MongoDB",
    "href": "https://mongodb.com",
    "icon": null
  },
  {
    "name": "Ollama",
    "href": "https://ollama.com",
    "icon": null
  },
  {
    "name": "Puppeteer",
    "href": "https://pptr.dev",
    "icon": null
  },
  {
    "name": "Socket.IO",
    "href": "https://socket.io",
    "icon": null
  }
],
    // live: 'https://winbid.netlify.app',
    details: true,
    projectDetailsPageSlug: "/projects/winbid-ai",
    isWorking: false,
    role: "Full Stack Developer",
    status: "in-progress",
    featured: false,
    challenges: [
      "Implementing multi-source RFP aggregation with web scraping from SAM.gov, OpenGov, DemandStar, and Bonfire APIs with different authentication methods and data formats",
      "Coordinating document download, parsing, generation, and export with visible progress and cancellation",
      "Handling complex document parsing for PDFs, DOCX, and Excel files to extract RFP requirements and generate structured proposals",
      "Implementing real-time progress tracking with Socket.io for long-running AI document generation tasks with cancellation support",
      "Creating a dynamic proposal builder with section-by-section AI regeneration, content improvement, and professional DOCX export with custom templates"
    ],
    learnings: [
      "Gained experience integrating LLM-backed generation into a staged document-processing workflow",
      "Gained deep experience with government procurement APIs (SAM.gov, OpenGov, DemandStar, Bonfire) including authentication, rate limiting, and data transformation",
      "Learned advanced document processing techniques for parsing and generating professional DOCX documents with custom templates",
      "Implemented sophisticated real-time communication with Socket.io for progress tracking and operation cancellation",
      "Developed expertise in template management systems for different proposal types and client requirements"
    ],
    isPublished: true,
    content: [
      {
        "type": "heading",
        "level": 2,
        "text": "Overview"
      },
      {
        "type": "paragraph",
        "text": "Winbid is an AI-assisted proposal preparation platform that combines procurement discovery, document processing, and proposal editing. It brings opportunities from sources including SAM.gov, Bonfire, DemandStar, and OpenGov into a React interface, then connects selected requirements to a staged document-generation workflow. The document service uses Llama through Ollama; separate DeepSeek and Grok integration helpers also exist in the backend."
      },
      {
        "type": "highlight",
        "variant": "info",
        "text": "The workflow connects opportunity discovery, downloaded requirements, generation progress, editable proposal sections, and DOCX export. Socket.IO reports progress and supports cancellation during long-running processing."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Key Features"
      },
      {
        "type": "features",
        "items": [
          {
            "title": "Staged AI Document Workflow",
            "description": "Document processing separates download, parsing, generation, and final DOCX export. Llama is called through Ollama in the document service; model integration helpers remain separate modules."
          },
          {
            "title": "Automated RFP Discovery",
            "description": "Aggregates and normalizes RFP data from SAM.gov, Bonfire, DemandStar, and OpenGov with advanced filtering and search capabilities."
          },
          {
            "title": "Professional DOCX Generation",
            "description": "Creates polished proposal documents with custom templates, company branding, and professional formatting ready for submission."
          },
          {
            "title": "Real-Time Progress Tracking",
            "description": "WebSocket-based live updates during AI document generation with operation cancellation support and instant UI feedback."
          },
          {
            "title": "Section-by-Section AI Improvement",
            "description": "Granular control over AI-generated content with the ability to regenerate or improve individual sections based on specific requirements."
          },
          {
            "title": "Template Management",
            "description": "Flexible template system supporting different proposal types, industries, and client requirements for consistent, professional outputs."
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Technical Implementation"
      },
      {
        "type": "paragraph",
        "text": "The platform is built on a **React frontend** with a **Node.js/Express backend** and **MongoDB** for data persistence. The document service runs a **staged processing workflow**, calling Llama through Ollama for generation, with separate DeepSeek and Grok helpers in the codebase. **Puppeteer** handles web scraping for RFP aggregation, while **Socket.io** enables real-time communication for progress tracking during long-running AI operations."
      },
      {
        "type": "list",
        "items": [
          "**Model Integration**: Llama through Ollama in the document service, with separate Grok and DeepSeek integration helpers",
          "**Automated RFP Scraping**: Puppeteer-based web scraping from SAM.gov, Bonfire, DemandStar, and OpenGov with data normalization",
          "**Real-Time WebSockets**: Socket.io for bidirectional communication enabling live progress tracking and operation cancellation",
          "**Document Generation**: Professional DOCX output with custom templates, company logos, and structured formatting",
          "**Template System**: Flexible template management for different proposal types and client requirements"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "External Services and Failure Handling"
      },
      {
        "type": "paragraph",
        "text": "Procurement requests can fail or take longer than document editing interactions. SAM.gov integration includes request timeouts and retries, while provider-specific scraping and normalization stay behind backend modules. Progress events let the interface distinguish processing stages and give users cancellation controls."
      }
    ],
  ownership: "company",
platforms: [
  "Web",
  "Backend"
],
contribution: "I worked across procurement discovery, document processing, proposal generation, API integrations, and the React interface.",
},

  {
    title: "Runner Spikes",
    description:
      "A footwear storefront with catalog administration, checkout, and shipment tracking.",
    image: "/project/runner-spikes-ai.webp",
    link: "https://www.runnerspikes.in",
    technologies: [
  {
    "name": "React",
    "href": "https://react.dev",
    "icon": null
  },
  {
    "name": "Redux Toolkit",
    "href": "https://redux-toolkit.js.org",
    "icon": null
  },
  {
    "name": "Express",
    "href": "https://expressjs.com",
    "icon": null
  },
  {
    "name": "MongoDB",
    "href": "https://mongodb.com",
    "icon": null
  },
  {
    "name": "Razorpay",
    "href": "https://razorpay.com",
    "icon": null
  },
  {
    "name": "Cloudinary",
    "href": "https://cloudinary.com",
    "icon": null
  }
],
    live: "https://www.runnerspikes.in",
    details: true,
    projectDetailsPageSlug: "/projects/runner-spikes",
    isWorking: true,
    role: "Full Stack Developer",
    status: "completed",
    featured: false,
    challenges: [
      "Building a scalable product variant system with size-color dependencies",
      "Implementing secure Razorpay payment integration with order verification",
      "Creating responsive mobile-first UI with swipeable product galleries",
      "Managing complex filter state with URL synchronization for shareable product searches",
      "Optimizing image delivery with Cloudinary and AWS S3 integration"
    ],
    learnings: [
      "Deep understanding of e-commerce payment flows and order lifecycle management",
      "Building role-based access control for admin dashboards",
      "Implementing infinite scroll with intersection observers",
      "Managing complex Redux state with RTK Query caching strategies",
      "SEO optimization with dynamic Open Graph meta tags for product sharing"
    ],
    isPublished: true,
    content: [
      {
        "type": "heading",
        "level": 2,
        "text": "Overview"
      },
      {
        "type": "paragraph",
        "text": "Runner Spikes is a **full-featured e-commerce platform** built specifically for India's track and field athletes. This freelance project connects a footwear catalog, product variants, checkout, and administration for the store."
      },
      {
        "type": "highlight",
        "variant": "info",
        "text": "This project delivers a complete shopping experience with advanced filtering, cart management, secure Razorpay payments, and order tracking."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Key Features"
      },
      {
        "type": "features",
        "items": [
          {
            "title": "Product Filtering",
            "description": "Browse products by category, brand, tags, size, color, and price range with real-time filtering"
          },
          {
            "title": "Size Charts",
            "description": "Brand-specific size charts for Nike, Adidas, Puma, and General sizing"
          },
          {
            "title": "Secure Payments",
            "description": "Complete purchases securely through Razorpay payment gateway"
          },
          {
            "title": "Order Tracking",
            "description": "Track orders and view order history with delivery status updates"
          },
          {
            "title": "Admin Dashboard",
            "description": "Manage products, categories, brands, orders, users, coupons, and reviews"
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Technical Implementation"
      },
      {
        "type": "paragraph",
        "text": "Built with **React 19 + Vite** for fast frontend development. **Redux Toolkit with RTK Query** handles state management and API caching. Backend uses **Express 5 + MongoDB** for a scalable REST API."
      },
      {
        "type": "list",
        "items": [
          "**Razorpay** for secure Indian payment processing",
          "**Cloudinary + AWS S3** for optimized image storage and delivery",
          "**Twilio** for OTP-based phone authentication",
          "**JWT + Helmet** for authentication and API security"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Checkout and Inventory Decisions"
      },
      {
        "type": "paragraph",
        "text": "Cart operations check the selected variant and its stock quantity before adding or increasing items. The backend creates Razorpay orders and verifies the payment signature before recording payment completion, keeping client checkout results separate from server-side payment validation."
      },
      {
        "type": "paragraph",
        "text": "Address, coupon, order, and shipment modules connect the purchase workflow to fulfillment. Product media and catalog administration support the customer storefront without requiring catalog content to be hardcoded in the frontend."
      }
    ],
  ownership: "freelance",
platforms: [
  "Web",
  "Backend"
],
contribution: "I built the storefront and backend for this freelance project, including products, variants, categories, addresses, coupons, carts, and orders.",
},

  {
    title: "DineFlow",
    description:
      "A restaurant management product centered on outlets and structured digital menus.",
    image: "/project/dineflow-ai.webp",
    // link: 'https://github.com/yourusername/dineflow',
    technologies: [
  {
    "name": "React",
    "href": "https://react.dev",
    "icon": null
  },
  {
    "name": "TypeScript",
    "href": "https://typescriptlang.org",
    "icon": null
  },
  {
    "name": "Redux Toolkit",
    "href": "https://redux-toolkit.js.org",
    "icon": null
  },
  {
    "name": "Express",
    "href": "https://expressjs.com",
    "icon": null
  },
  {
    "name": "MongoDB",
    "href": "https://mongodb.com",
    "icon": null
  },
  {
    "name": "dnd-kit",
    "href": "https://dndkit.com",
    "icon": null
  },
  {
    "name": "Joi",
    "href": "https://joi.dev",
    "icon": null
  }
],
    // live: 'https://dineflow.app',
    details: true,
    projectDetailsPageSlug: "/projects/dineflow",
    isWorking: false,
    role: "Full Stack Developer",
    status: "in-progress",
    featured: false,
    challenges: [
      "Building a hierarchical drag-and-drop menu builder supporting nested sections, categories, and dishes with dynamic reordering and display order management using dnd-kit",
      "Designing a multi-tenant architecture supporting restaurant chains with multiple outlets, each with independent menus, tables, and staff while sharing common resources",
      "Implementing granular role-based access control (RBAC) with Admin, Owner, and Manager roles, each with different permissions across restaurants and outlets",
      "Managing complex state synchronization between local UI state and server data, handling optimistic updates with pending changes tracking and bulk save operations"
    ],
    learnings: [
      "Gained deep expertise in dnd-kit library for implementing complex nested drag-and-drop interfaces with custom collision detection algorithms",
      "Learned effective patterns for RTK Query with automatic cache invalidation, optimistic updates, and efficient data fetching strategies",
      "Developed skills in building scalable multi-tenant SaaS architectures with MongoDB, handling data isolation and shared resources",
      "Improved understanding of form validation patterns using Zod schemas with React Hook Form for type-safe, reusable validation logic"
    ],
    isPublished: true,
    content: [
      {
        "type": "heading",
        "level": 2,
        "text": "Overview"
      },
      {
        "type": "paragraph",
        "text": "DineFlow is my personal full-stack restaurant management product for restaurant and multi-outlet operations. Its dashboard connects restaurants, outlets, staff, menus, dishes, addons, and tables, with role-based access for administrators, owners, and managers. I built the application frontend, marketing frontend, and Express/MongoDB backend."
      },
      {
        "type": "highlight",
        "variant": "info",
        "text": "Built with a modern tech stack featuring React 19, TypeScript, Express 5, and MongoDB, DineFlow demonstrates advanced patterns in state management, real-time UI interactions, and multi-tenant architecture design."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Key Features"
      },
      {
        "type": "features",
        "items": [
          {
            "title": "Outlet Table Management",
            "description": "Create, update, and manage tables for restaurant outlets, with searchable table lists and outlet-aware views."
          },
          {
            "title": "Drag-and-Drop Menu Builder",
            "description": "Hierarchical menu construction with sections, categories, and dishes. Supports nested drag-and-drop reordering, custom pricing per menu, and dynamic display order management using dnd-kit."
          },
          {
            "title": "Multi-Tenant Restaurant Management",
            "description": "Support for restaurant chains with multiple outlets. Each outlet has independent menus, tables, and staff while sharing dishes, categories, and addons at the restaurant level."
          },
          {
            "title": "Role-Based Access Control",
            "description": "Granular permissions system with Admin, Owner, and Manager roles. Route-level guards and API-level authorization ensure secure access to features based on user roles and organizational hierarchy."
          },
          {
            "title": "Comprehensive Dish & Addon Management",
            "description": "Full CRUD operations for dishes with support for dietary types (veg, non-veg, egg), preparation time, serving size, pricing, and customizable addons that can be attached to multiple dishes."
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Technical Implementation"
      },
      {
        "type": "paragraph",
        "text": "The application follows a **clean architecture pattern** with separate frontend (React + Vite), marketing frontend (React + Vite), and backend (Express + MongoDB) applications. State management leverages **Redux Toolkit with RTK Query** for efficient API caching and automatic refetching."
      },
      {
        "type": "list",
        "items": [
          "**Frontend Architecture**: React 19 with TypeScript, Vite for fast HMR, shadcn/ui components built on Radix primitives, and Tailwind CSS for styling",
          "**State Management**: Redux Toolkit with RTK Query for API state, custom slices for UI state, and optimistic updates with rollback support",
          "**Backend Design**: Express 5 with service-layer architecture, Mongoose ODM for MongoDB, JWT authentication, and Joi validation",
          "**Drag-and-Drop**: dnd-kit library with custom collision detection, sortable contexts, and drag overlays for visual feedback",
          "**Form Handling**: React Hook Form with Zod schema validation for type-safe forms with reusable validators across frontend and backend",
          "**Theming**: next-themes integration with system preference detection and persistent theme storage"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Menu Data Model and Outlet Boundaries"
      },
      {
        "type": "paragraph",
        "text": "Menu placement is represented by a flat collection of items with parent IDs and display order. The service builds an ordered tree and populates section, category, and dish references, separating reusable dish data from where it appears in a particular menu."
      },
      {
        "type": "paragraph",
        "text": "Role checks assign different restaurant and outlet scopes to administrators, owners, and managers. Joi validates backend menu operations, while the frontend uses React Hook Form and Zod. This case study focuses on the implemented management flows rather than treating order models as a complete live ordering system."
      }
    ],
  ownership: "personal",
platforms: [
  "Web",
  "Backend"
],
contribution: "I created DineFlow across its React application, marketing frontend, Express API, and MongoDB models.",
},

  {
    title: "Org-X",
    description:
      "An organization workspace for scoped teams, task boards, and collaboration.",
    image: "/project/org-x-ai.webp",
    // github:
    //   "https://github.com/Arth-02/Organizational-Grievance-Support-System",
    technologies: [
  {
    "name": "React",
    "href": "https://react.dev",
    "icon": null
  },
  {
    "name": "Redux Toolkit",
    "href": "https://redux-toolkit.js.org",
    "icon": null
  },
  {
    "name": "Express",
    "href": "https://expressjs.com",
    "icon": null
  },
  {
    "name": "MongoDB",
    "href": "https://mongodb.com",
    "icon": null
  },
  {
    "name": "Socket.IO",
    "href": "https://socket.io",
    "icon": null
  },
  {
    "name": "Jest",
    "href": "https://jestjs.io",
    "icon": null
  },
  {
    "name": "fast-check",
    "href": "https://fast-check.dev",
    "icon": null
  }
],
    link: "https://org-x.vercel.app",
    live: "https://org-x.vercel.app",
    details: true,
    projectDetailsPageSlug: "/projects/organization-management-system",
    isWorking: false,
    role: "Full Stack Developer",
    status: "completed",
    featured: false,
    challenges: [
      "Building real-time collaboration features with Socket.io",
      "Designing a scalable department hierarchy system",
      "Implementing role-based access control for different user types",
      "Preserving task ordering across moves while enforcing organization-scoped access."
    ],
    learnings: [
      "Architecting complex organizational data structures",
      "Real-time WebSocket communication patterns",
      "Building scalable grievance management workflows",
      "Using property-based tests to exercise ordering invariants beyond individual examples."
    ],
    isPublished: true,
    content: [
      {
        "type": "heading",
        "level": 2,
        "text": "Overview"
      },
      {
        "type": "paragraph",
        "text": "Org-X is a **comprehensive internal platform** designed to streamline organizational workflows. It enables efficient management of departments, teams, projects, tasks, and employee grievances with real-time collaboration features."
      },
      {
        "type": "highlight",
        "variant": "info",
        "text": "This project was built to solve real-world organizational challenges, focusing on **scalability** and **real-time updates**."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Key Features"
      },
      {
        "type": "features",
        "items": [
          {
            "title": "Department Management",
            "description": "Create and manage organizational hierarchy with nested departments"
          },
          {
            "title": "Team Collaboration",
            "description": "Assign team members to projects with role-based permissions"
          },
          {
            "title": "Task Tracking",
            "description": "Create, assign, and track tasks with status updates and deadlines"
          },
          {
            "title": "Grievance System",
            "description": "Anonymous grievance submission with tracking and resolution workflow"
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Technical Implementation"
      },
      {
        "type": "paragraph",
        "text": "The system uses a React frontend with `shadcn/ui` components for a modern, accessible interface. The backend is built with **Node.js** and **Express.js**, with MongoDB for flexible document storage."
      },
      {
        "type": "highlight",
        "variant": "success",
        "text": "**Socket.io** enables real-time communication across all connected clients, ensuring instant updates for collaborative features."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Architecture Highlights"
      },
      {
        "type": "list",
        "items": [
          "**RESTful API** design with proper error handling and validation",
          "Real-time event broadcasting using **Socket.io rooms**",
          "MongoDB with Mongoose for **schema validation** and indexing",
          "JWT-based authentication with **role-based access control**"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Task Boards and Ordering"
      },
      {
        "type": "paragraph",
        "text": "Task boards connect assignments, comments, and attachments to organization-scoped membership. LexoRank-style ranks support reordering tasks without renumbering an entire board. Backend authorization checks organization and role scope rather than relying on client-side visibility."
      },
      {
        "type": "list",
        "items": [
          "**Validation:** Joi schemas validate task, board, project, department, and grievance operations.",
          "**Testing:** Jest and fast-check exercise task ordering properties and edge cases.",
          "**Collaboration:** Socket.IO rooms deliver notifications and workspace updates to the relevant participants."
        ]
      }
    ],
  ownership: "personal",
platforms: [
  "Web",
  "Backend"
],
contribution: "I created Org-X, including the React workspace, Express API, MongoDB models, and collaboration workflows.",
},
{
  "title": "CineVault",
  "description": "An entertainment and social product for tracking media and sharing collections.",
  "ownership": "personal",
  "platforms": [
    "Web",
    "Backend"
  ],
  "featured": true,
  "role": "Full Stack Developer",
  "contribution": "I built CineVault across its Next.js frontend and modular Express backend, including authentication, media tracking, collections, and social relationships.",
  "challenges": [
      "Modeling collections, follows, saved content, and collaboration without duplicating externally sourced media metadata.",
      "Coordinating cached remote data, local interaction state, and live social notifications.",
      "Persisting drag-and-drop collection order while keeping membership and ownership rules in the backend."
    ],
  "learnings": [
      "Separating product-owned relational data from third-party discovery metadata.",
      "Using server-state caching and client-state stores for different responsibilities.",
      "Connecting refresh-token sessions, Redis-backed infrastructure, and user-specific real-time events."
    ],
  "technologies": [
    {
      "name": "Next.js",
      "href": "https://nextjs.org",
      "icon": null
    },
    {
      "name": "TypeScript",
      "href": "https://typescriptlang.org",
      "icon": null
    },
    {
      "name": "React",
      "href": "https://react.dev",
      "icon": null
    },
    {
      "name": "Express",
      "href": "https://expressjs.com",
      "icon": null
    },
    {
      "name": "PostgreSQL",
      "href": "https://postgresql.org",
      "icon": null
    },
    {
      "name": "Prisma",
      "href": "https://prisma.io",
      "icon": null
    },
    {
      "name": "Redis",
      "href": "https://redis.io",
      "icon": null
    },
    {
      "name": "TanStack Query",
      "href": "https://tanstack.com/query",
      "icon": null
    },
    {
      "name": "Zustand",
      "href": "https://zustand.docs.pmnd.rs",
      "icon": null
    },
    {
      "name": "Socket.IO",
      "href": "https://socket.io",
      "icon": null
    }
  ],
  "content": [
      {
        "type": "heading",
        "level": 2,
        "text": "Overview"
      },
      {
        "type": "paragraph",
        "text": "CineVault is my personal entertainment and social product for discovering media, maintaining a personal library, and sharing collections. I built the Next.js frontend and modular Express backend, including authentication, media tracking, collection management, social relationships, and collaboration."
      },
      {
        "type": "highlight",
        "variant": "info",
        "text": "TMDB supplies discovery metadata. PostgreSQL stores the product-specific relationships: what a user tracks, saves, organizes, and shares with other people."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Key Features"
      },
      {
        "type": "features",
        "items": [
          {
            "title": "Media Discovery and Tracking",
            "description": "Connect external media discovery to user-owned media entries and a personal entertainment library."
          },
          {
            "title": "Collections and Ordering",
            "description": "Organize media into collections, manage collection items, and use drag-and-drop interactions to persist their order."
          },
          {
            "title": "Social Relationships",
            "description": "Follow other users and connect social activity to saved content and notifications."
          },
          {
            "title": "Collection Collaboration",
            "description": "Model collaborative collections and their participants separately from personal library entries."
          },
          {
            "title": "Personal Notifications",
            "description": "Use authenticated Socket.IO rooms to deliver events to the relevant user rather than broadcasting all activity to every client."
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Technical Implementation"
      },
      {
        "type": "paragraph",
        "text": "The Next.js/React frontend uses TypeScript, TanStack Query for server data, and Zustand for local interaction state. A modular Express API handles product operations; Prisma maps the PostgreSQL schema for users, media entries, collections, follows, saved content, and collaboration."
      },
      {
        "type": "list",
        "items": [
          "**Relational persistence:** Collection items and social relationships are product-owned database records, distinct from TMDB metadata.",
          "**Remote data:** TanStack Query coordinates fetching and cache updates for API-backed screens.",
          "**Client state:** Zustand keeps transient UI state separate from persisted server records.",
          "**Interactions:** Drag-and-drop collection management connects UI ordering to backend persistence.",
          "**Authentication:** JWT refresh flows support authenticated sessions.",
          "**Infrastructure:** Redis supports caching and the Socket.IO adapter; Cloudinary handles media uploads."
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Architecture and Tradeoffs"
      },
      {
        "type": "paragraph",
        "text": "External media lookup and local social state change for different reasons. Keeping them separate prevents a third-party catalog response from becoming the authority for user-created collection membership or collaboration. Server-data caching and local UI state also have different lifecycles, so they use separate tools."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Real-Time Updates and Session Handling"
      },
      {
        "type": "paragraph",
        "text": "Personal Socket.IO rooms target notifications to the intended recipient. The Redis adapter coordinates socket events, while session and cache handling remain backend responsibilities. Client events complement persisted API state rather than replacing authorization or database records."
      }
    ],
  "image": "/project/cinevault-ai.webp",
  "projectDetailsPageSlug": "/projects/cinevault",
  "live": "https://cinevault-entertain.netlify.app/",
  "details": true,
  "status": "in-progress",
  "isPublished": true
},
{
  "title": "Rentra",
  "description": "A booking platform with owner operations, availability controls, and payment processing.",
  "ownership": "personal",
  "platforms": [
    "Web",
    "Backend"
  ],
  "featured": true,
  "role": "Full Stack Developer",
  "contribution": "I built booking and owner workflows across Next.js, Express, and PostgreSQL.",
  "challenges": [
      "Preventing overlapping reservations when multiple requests compete for the same availability.",
      "Reconciling asynchronous payment events safely when providers retry delivery or workers restart.",
      "Keeping per-request Next.js state isolated while preserving cookies, redirects, and revalidation behavior."
    ],
  "learnings": [
      "Using database constraints and transaction locks as the final protection for booking availability.",
      "Designing deduplicated webhook processing and leased jobs for recoverable background work.",
      "Separating server-rendered state initialization from long-lived client state."
    ],
  "technologies": [
    {
      "name": "Next.js",
      "href": "https://nextjs.org",
      "icon": null
    },
    {
      "name": "TypeScript",
      "href": "https://typescriptlang.org",
      "icon": null
    },
    {
      "name": "React",
      "href": "https://react.dev",
      "icon": null
    },
    {
      "name": "Redux Toolkit",
      "href": "https://redux-toolkit.js.org",
      "icon": null
    },
    {
      "name": "Express",
      "href": "https://expressjs.com",
      "icon": null
    },
    {
      "name": "PostgreSQL",
      "href": "https://postgresql.org",
      "icon": null
    },
    {
      "name": "Drizzle",
      "href": "https://orm.drizzle.team",
      "icon": null
    },
    {
      "name": "Razorpay",
      "href": "https://razorpay.com",
      "icon": null
    }
  ],
  "content": [
      {
        "type": "heading",
        "level": 2,
        "text": "Overview"
      },
      {
        "type": "paragraph",
        "text": "Rentra is my personal booking platform connecting booking journeys with owner operations, availability management, and administrative workflows. I built its Next.js frontend, Express backend, and PostgreSQL data layer, including booking controls and payment-processing infrastructure."
      },
      {
        "type": "highlight",
        "variant": "info",
        "text": "Booking correctness is enforced at the database layer. The Razorpay integration in the supplied implementation uses test mode; the case study does not imply live payment volume or production payout results."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Key Features"
      },
      {
        "type": "features",
        "items": [
          {
            "title": "Booking and Availability",
            "description": "Connect booking requests to inventory and availability checks, protecting reservations against conflicting date ranges."
          },
          {
            "title": "Owner Workspace",
            "description": "Provide owner dashboards, availability calendar interactions, and operational guidance, including narrow-screen workflows."
          },
          {
            "title": "Scoped Operations",
            "description": "Separate administrator, client, and staff capabilities so booking and operational actions use the appropriate permissions."
          },
          {
            "title": "Payment Event Processing",
            "description": "Verify raw-body webhook signatures and deduplicate events before applying payment-related state changes."
          },
          {
            "title": "Recoverable Background Jobs",
            "description": "Use leased work and retries to recover pending processing when a worker fails or a provider response is delayed."
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Technical Implementation"
      },
      {
        "type": "paragraph",
        "text": "The frontend uses Next.js, React, TypeScript, and Redux Toolkit. Express coordinates API operations, while PostgreSQL and Drizzle support relational persistence and explicit SQL where transactional behavior matters."
      },
      {
        "type": "list",
        "items": [
          "**Concurrency control:** Row locks protect shared inventory during booking operations.",
          "**Overlap protection:** PostgreSQL exclusion constraints reject conflicting reservation ranges even when application requests race.",
          "**Consistent reads:** Repeatable-read snapshots support operations that need a stable view of related records.",
          "**Payment integrity:** Raw-body signature verification and event deduplication handle provider callbacks.",
          "**Job recovery:** Leased jobs, SKIP LOCKED, and retries coordinate pending work without requiring each worker to claim the same job.",
          "**SSR state:** Per-render Redux stores prevent state from leaking between server requests."
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Architecture and Tradeoffs"
      },
      {
        "type": "paragraph",
        "text": "Availability shown in the browser is useful feedback, but it cannot be the final guard against conflicting requests. Database locks and overlap constraints protect the booking invariant at commit time. Payment callbacks are similarly asynchronous: delivery can repeat or arrive after another operation, so event identity and recoverable processing matter more than assuming a single successful request."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Next.js Integration Boundaries"
      },
      {
        "type": "paragraph",
        "text": "Compatibility adapters preserve cookies, redirects, and revalidation while backend modules evolve. Per-render stores initialize request-specific state without sharing it across visitors; the client then manages its own ongoing interactions."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Owner Workflow Evidence"
      },
      {
        "type": "paragraph",
        "text": "The gallery contains actual development captures of the owner dashboard, calendar dialog, and mobile owner guidance. The records are demonstration data, and the images can be opened to inspect the full workflow captures."
      }
    ],
  "image": "/project/rentra-ai.webp",
  "projectDetailsPageSlug": "/projects/rentra",
  "live": "https://rentrafarm.vercel.app/",
  "details": true,
  "status": "in-progress",
  "isPublished": true,
  "gallery": [
    {
      "src": "/project/screens/rentra-dashboard.webp",
      "alt": "Rentra owner dashboard with demonstration bookings",
      "caption": "Owner dashboard: development screenshot with demo data.",
      "width": 1280,
      "height": 3776
    },
    {
      "src": "/project/screens/rentra-calendar.webp",
      "alt": "Rentra availability calendar dialog",
      "caption": "Availability calendar: development screenshot.",
      "width": 1280,
      "height": 900
    },
    {
      "src": "/project/screens/rentra-mobile.webp",
      "alt": "Rentra owner guidance at a mobile viewport",
      "caption": "Mobile owner guidance: development screenshot.",
      "width": 360,
      "height": 3067
    }
  ]
},
];
