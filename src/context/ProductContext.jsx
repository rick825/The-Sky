import React, { createContext, useState, useContext, useEffect } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

  const allProducts = {
 McAfee: [
  {
    id: '001',
    name: 'McAfee Essential Antivirus',
    desc: 'McAfee Essential Antivirus delivers dependable protection against viruses, malware, and phishing attempts. Designed for everyday users, it runs silently in the background, ensuring safe browsing, email protection, and minimal system interruption.',
    price: '69.99',
    category: 'standard',
    img: 'https://res.cloudinary.com/dcrfks1tq/image/upload/v1747223064/McAfee_Antivirus_Basic_hlwqja_erkwsf.png',
    route: '/mcafee/mcafee-antivirus-basic',
    license: '1 Device / 1 Year',
    compatibility: ['Windows', 'Mac'],
    highlights: [
      'Essential Real-Time Virus & Malware Defense',
      'Smart Web Protection for Safer Browsing',
      'Anti-Phishing Blocker for Fraud Prevention',
      'Light on Resources with Background Scanning',
      'Automatic Threat Database Updates'
    ],
    idealFor: 'Solo users, seniors, entry-level security needs',
    support: 'Email & Chat Assistance'
  },
  {
    id: '002',
    name: 'McAfee Multi-Device Plus',
    desc: 'McAfee Multi-Device Plus offers flexible protection across desktops, smartphones, and tablets. Packed with firewall control, anti-ransomware layers, and optimization tools, it’s built for tech-savvy households and remote professionals.',
    price: '74.99',
    category: 'best-seller',
    img: 'https://res.cloudinary.com/dcrfks1tq/image/upload/v1747223065/McAfee_Antivirus_Plus_hi8bf5_urouud.png',
    route: '/mcafee/mcafee-antivirus-plus',
    license: '5 Devices / 1 Year',
    compatibility: ['Windows', 'Mac', 'Android', 'iOS'],
    highlights: [
      'All-Device Protection with One Subscription',
      'Firewall & Home Network Security',
      'Ransomware & Suspicious App Blocker',
      'Performance Tools for Faster Devices',
      'Web Download & Email Threat Scans'
    ],
    idealFor: 'Families, digital nomads, students',
    support: '24/7 Chat & Call Support'
  },
  {
    id: '003',
    name: 'McAfee Internet Security Suite',
    desc: 'McAfee Internet Security Suite enhances your digital life with identity monitoring, email spam protection, and intelligent parental controls. Ideal for families and professionals who need to manage multiple user profiles securely.',
    price: '79.99',
    img: 'https://res.cloudinary.com/dcrfks1tq/image/upload/v1747223065/McAfee_Internet_Security_cautk3_pshcex.png',
    route: '/mcafee/mcafee-internet-security',
    license: '3 Devices / 1 Year',
    compatibility: ['Windows', 'Mac', 'Android'],
    highlights: [
      'Spam Filtering for Safe Email Communication',
      'Real-Time Identity & Credit Monitoring Alerts',
      'Parental Controls with Web Filtering',
      'Integrated Password Vault',
      'Secure Browsing for Online Transactions'
    ],
    idealFor: 'Parents, working professionals, home users',
    support: 'Priority Email & Chat Support'
  },
  {
    id: '004',
    name: 'McAfee Total Protection Ultimate',
    desc: 'McAfee Total Protection Ultimate offers enterprise-grade protection for personal and family use. With unlimited VPN, encrypted file storage, and dark web surveillance, it defends against today’s most advanced digital threats.',
    price: '109.99',
    category: 'premium',
    img: 'https://res.cloudinary.com/dcrfks1tq/image/upload/v1747223064/267210_ip13ww_weenyp_wh3s4g.png',
    route: '/mcafee/mcafee-total-protection',
    license: 'Unlimited Devices / 1 Year',
    compatibility: ['Windows', 'Mac', 'Android', 'iOS'],
    highlights: [
      'Unlimited VPN for Secure Global Browsing',
      'Encrypted Vault for Sensitive Documents',
      'Dark Web Surveillance for Leaked Info',
      'All-in-One Device Protection Suite',
      'Built-In Password Manager & Private Browser'
    ],
    idealFor: 'Entrepreneurs, large families, power users',
    support: 'Dedicated 24/7 VIP Support'
  },
],
 Avast: [
  {
    id: '101',
    name: 'Avast Pro Antivirus',
    desc: 'Avast Pro Antivirus offers lightweight, intelligent protection against common cyber threats. With real-time scanning, sandbox testing, and home Wi-Fi inspection, it provides peace of mind for personal users without slowing down performance.',
    price: '69.99',
    category: 'best-seller',
    img: 'https://res.cloudinary.com/dcrfks1tq/image/upload/v1747223099/Avast_Pro_Antivirus_lddqyh_ktdnwq.png',
    route: '/avast/avast-pro-antivirus',
    license: '1 Device / 1 Year',
    compatibility: ['Windows', 'Mac'],
    highlights: [
      'Real-Time Virus & Malware Protection',
      'Sandbox for Safe File Testing',
      'Wi-Fi Inspector for Network Weaknesses',
      'Behavior-Based Threat Detection',
      'Scheduled & Silent Background Scanning'
    ],
    idealFor: 'Everyday users, students, and light internet activity',
    support: 'Email & Live Chat Support'
  },
  {
    id: '102',
    name: 'Avast Premium Security',
    desc: 'Avast Premium Security provides full-spectrum defense across multiple devices. It protects your webcam, email, and banking sessions with advanced anti-phishing, ransomware defense, and real-time firewall coverage.',
    price: '89.99',
    img: 'https://res.cloudinary.com/dcrfks1tq/image/upload/v1747223102/s-l1200_crwbl7_g2dsns.png',
    route: '/avast/avast-premium-security',
    license: 'Up to 10 Devices / 1 Year',
    compatibility: ['Windows', 'Mac', 'Android', 'iOS'],
    highlights: [
      'Ransomware & Webcam Blockers',
      'Firewall for Home & Public Networks',
      'Email Attachment & Web URL Scanning',
      'Fake Website Detection for Safer Shopping',
      'Sensitive Data Protection Modules'
    ],
    idealFor: 'Families, online shoppers, and security-conscious users',
    support: '24/7 Priority Support Access'
  },
  {
    id: '103',
    name: 'Avast Ultimate Suite',
    desc: 'Avast Ultimate Suite is an all-in-one security solution that blends antivirus, VPN, cleanup tools, and password protection. Built for digital freedom, it keeps your identity safe while optimizing device performance.',
    price: '109.99',
    img: 'https://res.cloudinary.com/dcrfks1tq/image/upload/v1747223100/Avast_Ultimate_by2hyd_pk5qgu.png',
    route: '/avast/avast-ultimate',
    license: 'Up to 10 Devices / 1 Year',
    compatibility: ['Windows', 'Mac', 'Android', 'iOS'],
    highlights: [
      'Comprehensive Antivirus & Anti-Malware',
      'SecureLine VPN for Encrypted Browsing',
      'System Optimizer & Cleanup Tools',
      'Password Vault & Autofill Protection',
      'Adware & Spyware Removal Engine'
    ],
    idealFor: 'Remote workers, freelancers, and privacy-focused users',
    support: 'VIP Priority Support – 24/7 Access'
  },
  {
    id: '104',
    name: 'Avast Cleanup Premium',
    desc: 'Avast Cleanup Premium is your PC’s performance partner. Designed to remove digital junk, optimize boot time, and monitor real-time performance, it ensures a smoother, faster computing experience across aging or cluttered systems.',
    price: '79.99',
    img: 'https://res.cloudinary.com/dcrfks1tq/image/upload/v1747223099/Avast_Cleanup_Premium_whf2il_ptdigl.png',
    route: '/avast/avast-cleanup-premium',
    license: 'Unlimited PCs / 1 Year',
    compatibility: ['Windows', 'Mac'],
    highlights: [
      'Advanced Junk & Registry Cleanup',
      'Startup Optimizer for Faster Booting',
      'Performance Dashboard & Usage Tracking',
      'Real-Time PC Resource Management',
      'App Sleep Mode to Free Up RAM'
    ],
    idealFor: 'Slow systems, office workstations, maintenance specialists',
    support: 'Standard Technical Support & Guides'
  }
],
  Kaspersky: [
  {
    id: '201',
    name: 'Kaspersky Anti-Virus',
    desc: 'Kaspersky Anti-Virus delivers reliable core protection against common threats such as viruses, worms, trojans, and ransomware. It runs silently in the background, ensuring smooth performance and secure computing for your Windows PC.',
    price: '69.99',
    category: 'best-seller',
    img: 'https://res.cloudinary.com/dcrfks1tq/image/upload/v1747223112/Antivirus_box_zsuuva_k3inan.webp',
    route: '/kaspersky/kaspersky-anti-virus',
    license: 'Up to 3 Devices / 1 Year',
    compatibility: ['Windows'],
    highlights: [
      'Real-Time Virus & Malware Defense',
      'Minimal Impact on System Speed',
      'Auto Updates for Latest Threats',
      'Proactive AI Detection Technology'
    ],
    additionalFeatures: [
      'Silent Mode for Distraction-Free Use',
      'Cloud-Backed Threat Intelligence',
      'Detailed Security Logs & Quarantine',
      'Flexible Scan Scheduling'
    ],
    idealFor: 'Everyday PC users, students, and solo professionals',
    support: '24/7 Technical Support',
    trustedBy: 'Used by over 400 million users worldwide'
  },
  {
    id: '202',
    name: 'Kaspersky Internet Security',
    desc: 'Kaspersky Internet Security offers extended privacy protection across multiple devices. From secure payments to webcam access control, it helps you browse, bank, and shop online with greater confidence.',
    price: '79.99',
    img: 'https://res.cloudinary.com/dcrfks1tq/image/upload/v1747223122/Kaspersky_Total_Security_vl9uil_gnla4s.png',
    route: '/kaspersky/kaspersky-internet-security',
    license: 'Up to 3 Devices / 1 Year',
    compatibility: ['Windows', 'macOS', 'Android', 'iOS'],
    highlights: [
      'Online Banking & Shopping Protection',
      'Privacy Guard with Webcam Controls',
      'Anti-Phishing & Scam Prevention',
      'Seamless Multi-Device Security'
    ],
    additionalFeatures: [
      'Encrypted Browsing via Secure Browser',
      'Virtual Keyboard for Safer Typing',
      'Ad & Tracker Blocker',
      'Customizable Parental Controls'
    ],
    idealFor: 'Online buyers, freelancers, and privacy-focused users',
    support: '24/7 Priority Helpdesk',
    trustedBy: 'Available in over 200+ countries and regions'
  },
  {
    id: '203',
    name: 'Kaspersky Total Security',
    desc: 'Kaspersky Total Security provides all-in-one security and privacy for the whole family. It combines top-tier antivirus protection with advanced parental tools, password management, file encryption, and secure browsing.',
    price: '99.99',
    category: 'best-seller',
    img: 'https://res.cloudinary.com/dcrfks1tq/image/upload/v1747223122/Kaspersky_Total_Security_yd96vv_lzfxp5.png',
    route: '/kaspersky/kaspersky-total-security',
    license: 'Up to 5 Devices / 1 Year',
    compatibility: ['Windows', 'macOS', 'Android', 'iOS'],
    highlights: [
      'All-in-One Protection for Families',
      'Secure File Vault & Password Manager',
      'Online Activity Monitoring for Kids',
      'Safe Browsing & Identity Shield'
    ],
    additionalFeatures: [
      'Data Breach Scanner with Alerts',
      'Encrypted Cloud Storage Integration',
      'External USB Drive Security Checks',
      'Privacy Trace Remover & Optimization'
    ],
    idealFor: 'Families, digital households, and remote workers',
    support: '24/7 Premium Assistance',
    trustedBy: 'PCMag Editor’s Choice for 3 consecutive years'
  },
  {
    id: '204',
    name: 'Kaspersky Security Cloud',
    desc: 'Kaspersky Security Cloud adapts to your behavior and digital lifestyle with intelligent protection. It uses cloud-based data to provide proactive security alerts, breach monitoring, and VPN activation when needed.',
    price: '109.99',
    category: 'premium',
    img: 'https://res.cloudinary.com/dcrfks1tq/image/upload/v1747223122/Kaspersky_Security_Cloud_enycnk_sercha.png',
    route: '/kaspersky/kaspersky-security-cloud',
    license: 'Up to 10 Devices / 1 Year',
    compatibility: ['Windows', 'macOS', 'Android', 'iOS'],
    highlights: [
      'Adaptive Cloud-Based Security Engine',
      'Leak & Breach Notification System',
      'Smart Device Health Checkups',
      'Home Network & Access Controls'
    ],
    additionalFeatures: [
      'Auto VPN Activation on Public Networks',
      'Smart Alerts Based on Device Behavior',
      'Custom Profiles for Each User',
      'Family Activity Dashboard'
    ],
    idealFor: 'Modern families, tech-savvy users, and frequent travelers',
    support: 'Cloud-Based 24/7 VIP Support',
    trustedBy: 'Awarded for Innovation by AV-Comparatives'
  }
],    
     
  Norton: [
  {
    id: '301',
    name: 'Norton AntiVirus Plus',
    desc: 'Norton AntiVirus Plus offers essential protection against viruses, ransomware, and spyware. Designed for simplicity and speed, it includes a Smart Firewall and secure password manager for safer online activities.',
    price: '69.99',
    category: 'best-seller',
    img: 'https://res.cloudinary.com/dcrfks1tq/image/upload/v1747223070/Norton_AntiVirus_Plus_kfl9gy_wp9osz.png',
    route: '/norton/norton-antivirus-plus',
    license: '1 Device / 1 Year',
    compatibility: ['Windows', 'Mac'],
    highlights: [
      'Real-Time Threat Defense',
      'Smart Firewall for Safer Networks',
      'Password Vault for Credentials',
      'Automatic Silent Updates',
      'Cloud-Based Protection Engine'
    ],
    idealFor: 'Students, Solo Professionals & Light Users',
    support: '24/7 Online Helpdesk'
  },
  {
    id: '302',
    name: 'Norton 360 Standard',
    desc: 'Norton 360 Standard combines powerful security with privacy tools. It includes real-time protection, a secure VPN, 10GB of cloud backup, and tools to help keep your identity and browsing safe.',
    price: '79.99',
    img: 'https://res.cloudinary.com/dcrfks1tq/image/upload/v1747223067/Norton-360-Standard_g2dcit_ejoedv.png',
    route: '/norton/norton-360-standard',
    license: '1 Device / 1 Year',
    compatibility: ['Windows', 'Mac', 'Android', 'iOS'],
    highlights: [
      'Unlimited Secure VPN Access',
      'Smart Firewall & Real-Time Defense',
      '10GB Encrypted Cloud Backup',
      'Safe Browsing & Password Manager',
      'Anti-Phishing & Scam Shield'
    ],
    idealFor: 'Remote Workers & Privacy-Conscious Users',
    support: 'Priority Phone & Chat Support'
  },
  {
    id: '303',
    name: 'Norton 360 Deluxe',
    desc: 'Norton 360 Deluxe protects up to 5 devices and includes advanced parental controls, 50GB of cloud backup, secure VPN, and dark web monitoring. It’s a complete digital safety solution for modern families.',
    price: '99.99',
    img: 'https://res.cloudinary.com/dcrfks1tq/image/upload/v1747223069/Norton_Antivirus_Deluxe_c2oovs_fepdlj.png',
    route: '/norton/norton-360-deluxe',
    license: '5 Devices / 1 Year',
    compatibility: ['Windows', 'Mac', 'Android', 'iOS'],
    highlights: [
      'Cross-Device Secure VPN',
      'Parental Controls with Screen Time Tools',
      '50GB Cloud Backup for Files & Docs',
      'Dark Web Monitoring for Sensitive Info',
      'Multi-Device Threat Protection'
    ],
    idealFor: 'Families, Hybrid Workers & Home Offices',
    support: '24/7 Premium Assistance'
  },
  {
    id: '304',
    name: 'Norton 360 Premium',
    desc: 'Norton 360 Premium secures up to 10 devices with top-tier protection, 75GB of cloud backup, full parental control, identity alerts, and unlimited VPN—perfect for households and small teams needing comprehensive coverage.',
    price: '119.99',
    img: 'https://res.cloudinary.com/dcrfks1tq/image/upload/v1747223067/Norton-Security-360-Premium_jbmixw_unvaij.png',
    route: '/norton/norton-360-premium',
    license: '10 Devices / 1 Year',
    compatibility: ['Windows', 'Mac', 'Android', 'iOS'],
    highlights: [
      '75GB Secure Cloud Storage',
      'Unlimited VPN Across All Devices',
      'Full Parental Controls & Monitoring',
      'Identity Protection Alerts',
      'Multi-Device Dashboard & Security'
    ],
    idealFor: 'Large Families, Freelancers & Micro-Teams',
    support: 'VIP 24/7 Expert Help'
  }
],
      
            
 AVG: [
  {
    id: '401',
    name: 'AVG Internet Security',
    desc: 'AVG Internet Security delivers multi-layered protection for your personal and professional data. With real-time malware defense, smart firewall, and phishing safeguards, it ensures safe browsing and online transactions across all your devices.',
    price: '79.99',
    category: 'best-seller',
    img: 'https://res.cloudinary.com/dcrfks1tq/image/upload/v1747223101/avg-internet-security-2-year_qq4dwz_q8p7yq.png',
    route: '/avg/avg-internet-security',
    license: 'Up to 10 Devices / 1 Year',
    compatibility: ['Windows', 'Mac', 'Android'],
    highlights: [
      'Smart Firewall with App & Network Protection',
      'AI-Based Malware & Ransomware Shield',
      'Anti-Phishing & Scam Website Blocker',
      'Webcam Privacy Protection'
    ],
    idealFor: 'Home Networks, Frequent Internet Users, Digital Families',
    support: '24/7 Live Support'
  },
  {
    id: '402',
    name: 'AVG Ultimate',
    desc: 'AVG Ultimate combines strong antivirus protection with advanced privacy and performance tools. With built-in VPN, PC tuning, and cross-platform support, it’s the all-in-one suite for privacy, speed, and security.',
    price: '99.99',
    img: 'https://res.cloudinary.com/dcrfks1tq/image/upload/v1747223102/avg-ultimate_jtp3i0-removebg-preview_coqfnx_nkshau.png',
    route: '/avg/avg-ultimate',
    license: 'Up to 10 Devices / 1 Year',
    compatibility: ['Windows', 'Mac', 'Android', 'iOS'],
    highlights: [
      'Complete Security + Privacy Suite',
      'Unlimited VPN for Anonymous Surfing',
      'Performance Boost Tools with Cleanup',
      'All-in-One Dashboard for Easy Management'
    ],
    idealFor: 'Power Users, Multi-Device Households, Remote Professionals',
    support: 'Priority Email & Chat Support'
  },
  {
    id: '403',
    name: 'AVG Secure VPN',
    desc: 'AVG Secure VPN ensures secure and private browsing with high-speed encrypted servers worldwide. It protects your activity on public networks, enables unrestricted access, and masks your identity for total online privacy.',
    price: '79.99',
    img: 'https://res.cloudinary.com/dcrfks1tq/image/upload/v1747223103/AVG_Secure_VPN_fftnqw_spvkbo.png',
    route: '/avg/avg-secure-vpn',
    license: 'Up to 5 Devices / 1 Year',
    compatibility: ['Windows', 'Mac', 'Android', 'iOS'],
    highlights: [
      'Military-Grade AES-256 Encryption',
      'No-Log Policy & Fast Streaming Access',
      'Auto-On Protection on Public Wi-Fi',
      'Global Server Locations for Speed & Freedom'
    ],
    idealFor: 'Travelers, Streamers & Remote Users',
    support: 'Standard Support Services'
  },
  {
    id: '404',
    name: 'AVG AntiTrack',
    desc: 'AVG AntiTrack stops advertisers and websites from tracking your online behavior. It masks your digital fingerprint, clears tracking cookies, and provides reports on tracking attempts—all in real time.',
    price: '69.99',
    img: 'https://res.cloudinary.com/dcrfks1tq/image/upload/v1747223103/AVG_AntiTrack_osyrzl_fsabki.png',
    route: '/avg/avg-antitrack',
    license: '1 Device / 1 Year',
    compatibility: ['Windows', 'Mac'],
    highlights: [
      'Prevents Online Tracking & Fingerprinting',
      'Automatically Deletes Tracking Cookies',
      'Real-Time Privacy Alerts & Logs',
      'Built-In Privacy Score Dashboard'
    ],
    idealFor: 'Privacy Advocates, Researchers & Secure Browsers',
    support: 'Standard Email & Knowledge Base Support'
  }
],
     
 Bitdefender: [
  {
    id: '501',
    name: 'Bitdefender Antivirus Plus',
    desc: 'Bitdefender Antivirus Plus offers advanced threat detection and lightweight protection for your PC. Featuring AI-based malware defense, ransomware protection, and a built-in VPN, it delivers reliable security without slowing you down.',
    price: '69.99',
    category: 'best-seller',
    img: 'https://res.cloudinary.com/dcrfks1tq/image/upload/v1747223106/Bitdefender_Antivirus_Plus_sfnnz0_dfycyz.png',
    route: '/bitdefender/bitdefender-antivirus-plus',
    license: 'Up to 3 Devices / 1 Year',
    compatibility: ['Windows'],
    highlights: [
      'AI-Driven Malware & Virus Defense',
      '200MB/Day Built-In Secure VPN',
      'Real-Time Ransomware Protection',
      'Vulnerability Scanning Tools',
      'Fast, Silent Operation'
    ],
    idealFor: 'Everyday PC Users & Light Security Needs',
    support: '24/7 Global Support'
  },
  {
    id: '502',
    name: 'Bitdefender Internet Security',
    desc: 'Bitdefender Internet Security provides comprehensive privacy and protection for your digital life. With features like webcam security, firewall, parental controls, and anti-phishing filters, it’s designed to keep your data and identity safe.',
    price: '79.99',
    img: 'https://res.cloudinary.com/dcrfks1tq/image/upload/v1747223106/Bitdefender_Internet_Security_mrpep7_ahhtxc.png',
    route: '/bitdefender/bitdefender-internet-security',
    license: 'Up to 3 Devices / 1 Year',
    compatibility: ['Windows'],
    highlights: [
      'Parental Controls & Monitoring Tools',
      'Webcam & Microphone Privacy Guard',
      'Firewall & Network Intrusion Prevention',
      'VPN Access (200MB/day included)',
      'Advanced Email & Web Filtering'
    ],
    idealFor: 'Parents, Privacy Seekers & Home PCs',
    support: 'Premium 24/7 Support Access'
  },
  {
    id: '503',
    name: 'Bitdefender Total Security',
    desc: 'Bitdefender Total Security offers robust, all-in-one protection across Windows, macOS, Android, and iOS devices. With anti-theft tracking, VPN, password vault, and performance tools, it’s ideal for secure, multi-device lifestyles.',
    price: '99.99',
    category: 'best-seller',
    img: 'https://res.cloudinary.com/dcrfks1tq/image/upload/v1747223107/Bitdefender_Total_Security_x80nf7_en6ebr.png',
    route: '/bitdefender/bitdefender-total-security',
    license: 'Up to 5 Devices / 1 Year',
    compatibility: ['Windows', 'macOS', 'iOS', 'Android'],
    highlights: [
      'Cross-Platform Multi-Device Protection',
      'Anti-Theft Location Tools',
      'Secure VPN (200MB/day)',
      'Battery Saver & System Optimizer',
      'Password Vault & File Shredder'
    ],
    idealFor: 'Professionals, Remote Teams & Power Users',
    support: 'Priority 24/7 Tech Support'
  },
  {
    id: '504',
    name: 'Bitdefender Family Pack',
    desc: 'Bitdefender Family Pack delivers top-tier security for all devices in your household under a single subscription. Protect up to 15 devices with parental controls, screen time management, and secure browsing tools built for families.',
    price: '119.99',
    img: 'https://res.cloudinary.com/dcrfks1tq/image/upload/v1747223106/Bitdefender_Family_Pack_vr2p4a_sd8sra.png',
    route: '/bitdefender/bitdefender-family-pack',
    license: 'Up to 15 Devices / 1 Year',
    compatibility: ['Windows', 'macOS', 'iOS', 'Android'],
    highlights: [
      'Comprehensive Security for 15 Devices',
      'Flexible Parental Control & Reporting',
      'Unlimited VPN for Private Browsing',
      'Time & App Usage Monitoring',
      'Real-Time Threat Blocking'
    ],
    idealFor: 'Digital Families, Large Households & Smart Homes',
    support: 'Dedicated Family Support Team'
  }
],     
   TotalAV: [
  {
    id: '601',
    name: 'TotalAV Pro Antivirus',
    desc: 'TotalAV Pro Antivirus delivers essential, real-time protection against viruses, ransomware, and phishing threats. With system optimization tools and lightweight performance, it’s built for users who want security without compromising speed.',
    price: '69.99',
    img: 'https://res.cloudinary.com/dcrfks1tq/image/upload/v1747223071/TotalAV_Pro_Antivirus_modxld_uvt97q.svg',
    route: '/totalav/totalav-pro-antivirus',
    license: 'Up to 3 Devices / 1 Year',
    compatibility: ['Windows', 'macOS', 'Android', 'iOS'],
    highlights: [
      'Real-Time Virus & Malware Detection',
      'Web Shield for Phishing Site Protection',
      'System Tune-Up & Junk File Cleaner',
      'Minimal System Resource Usage'
    ],
    idealFor: 'Students, First-Time Antivirus Users, Home Devices',
    support: '24/7 Standard Support'
  },
  {
    id: '602',
    name: 'TotalAV Internet Security',
    desc: 'TotalAV Internet Security adds a secure VPN to its powerful malware protection, enabling private browsing, encrypted traffic, and enhanced web safety. It’s perfect for everyday users who value privacy, safe shopping, and ad-free experiences.',
    price: '79.99',
    img: 'https://res.cloudinary.com/dcrfks1tq/image/upload/v1747223071/TotalAV_Internet_Security_cgvk8q_ddifbu.svg',
    route: '/totalav/totalav-internet-security',
    license: 'Up to 5 Devices / 1 Year',
    compatibility: ['Windows', 'macOS', 'Android', 'iOS'],
    highlights: [
      'Secure VPN for Anonymous Browsing',
      'Anti-Adware & Tracking Prevention',
      'Malware, Spyware & Ransomware Protection',
      'Safe Banking & Online Shopping Tools'
    ],
    idealFor: 'Remote Workers, Streamers, Privacy-Conscious Users',
    support: '24/7 Priority Support'
  },
  {
    id: '603',
    name: 'TotalAV Total Security',
    desc: 'TotalAV Total Security is the complete digital privacy suite. It includes everything in Internet Security plus a password manager, identity protection tools, and a central dashboard for managing multi-device security from one place.',
    price: '99.99',
    category: 'best-seller',
    img: 'https://res.cloudinary.com/dcrfks1tq/image/upload/v1747223071/TotalAV_Total_Security_ygfxto_tohe9v.svg',
    route: '/totalav/totalav-total-security',
    license: 'Up to 6 Devices / 1 Year',
    compatibility: ['Windows', 'macOS', 'Android', 'iOS'],
    highlights: [
      'Password Vault & Identity Monitoring',
      'VPN, Ad Blocker & WebShield Integration',
      'Secure Multi-Device Control Panel',
      'All-in-One Protection for Work & Personal Use'
    ],
    idealFor: 'Power Users, Digital Nomads, Security-Focused Professionals',
    support: '24/7 Premium Assistance'
  }
],
     
};


  
  const [products] = useState(allProducts);

  const getDataFromStorage = (key, defaultValue) => {
    try {
      const item = localStorage.getItem(key);
      const parsedItem = item ? JSON.parse(item) : defaultValue;
      
     
      if (key === 'antivCart' && !Array.isArray(parsedItem)) {
        console.error(`Data from localStorage for ${key} is not an array`);
        return defaultValue;
      }
      
      return parsedItem;
    } catch (error) {
      console.error(`Error parsing ${key} from localStorage`, error);
      return defaultValue;
    }
  };


  const [cart, setCart] = useState(() => getDataFromStorage('antivCart', []));
  const [productToShow, setProductToShow] = useState(() => getDataFromStorage('selectedProduct', ''));
  const [selectedAntiv, setSelectedAntiv] = useState(()=>getDataFromStorage('selectedCategory',''));
  const [catenav, setCatenav] = useState(false);



  useEffect(() => {
    localStorage.setItem('selectedProduct', JSON.stringify(productToShow));
  }, [productToShow]);


  useEffect(() => {
    localStorage.setItem('antivCart', JSON.stringify(cart));
  }, [cart]);

  useEffect(()=>{
    localStorage.setItem('selectedCategory', JSON.stringify(selectedAntiv));
  },[selectedAntiv])

  

  return (
    <ProductContext.Provider value={{catenav, setCatenav, products, cart, setCart, productToShow, setProductToShow,selectedAntiv, setSelectedAntiv }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
