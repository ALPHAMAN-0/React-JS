# Kali Linux Tools Learning Roadmap

## 📅 Timeline: 6-12 Months to Job-Ready

---

## Phase 1: Foundation (Weeks 1-4)

### Week 1: Linux Fundamentals
- **Skills to Master:**
  - Basic Linux commands (ls, cd, pwd, grep, find, chmod)
  - File system navigation
  - User permissions
  - Package management (apt, dpkg)
  
- **Practice:**
  - Set up Kali Linux (VM or dual boot)
  - Navigate terminal confidently
  - Create scripts with bash

### Week 2-3: Networking Basics
- **Concepts:**
  - OSI Model & TCP/IP
  - IP addressing, subnetting
  - Ports and protocols (HTTP, HTTPS, FTP, SSH, DNS)
  - Network troubleshooting

- **Tools to Learn:**
  - `ifconfig` / `ip`
  - `ping`
  - `traceroute`
  - `netstat`
  - `ss`

### Week 4: Security Fundamentals
- **Concepts:**
  - CIA Triad (Confidentiality, Integrity, Availability)
  - Attack vectors and types
  - Ethical hacking methodology
  - Legal and ethical considerations

---

## Phase 2: Information Gathering (Weeks 5-7)

### Essential Tools (3 weeks)

#### Week 5: Network Scanning
- **Nmap** (5-7 days)
  - Port scanning techniques
  - Service version detection
  - OS detection
  - NSE scripts
  - Practice: Scan local network, identify services

#### Week 6: DNS & Web Reconnaissance
- **Tools:**
  - **Whois** (1 day)
  - **Dig** (1 day)
  - **DNSenum** (2 days)
  - **TheHarvester** (2 days)
  - **Maltego** (2 days)

- **Practice:**
  - Gather information about domains
  - Map organization infrastructure
  - OSINT techniques

#### Week 7: Web Fingerprinting
- **Tools:**
  - **Whatweb** (1 day)
  - **Wappalyzer** (1 day)
  - **Sublist3r** (2 days)
  - **Amass** (2 days)
  - **Shodan** (2 days)

---

## Phase 3: Vulnerability Analysis (Weeks 8-10)

#### Week 8-9: Vulnerability Scanners
- **Nessus** (3-4 days)
  - Installation and setup
  - Scan policies
  - Report analysis
  
- **OpenVAS** (3-4 days)
  - Setup and configuration
  - Vulnerability assessment
  
- **Nikto** (2 days)
  - Web server scanning
  
- **Nuclei** (2 days)
  - Template-based scanning

#### Week 10: Manual Testing
- **Burp Suite Community** (7 days)
  - Proxy setup
  - Intercepting requests
  - Repeater and Intruder
  - Spider/Crawler
  - Practice: Test vulnerable web apps (DVWA, WebGoat)

---

## Phase 4: Web Application Attacks (Weeks 11-14)

#### Week 11: SQL Injection
- **SQLmap** (5-7 days)
  - Detection and exploitation
  - Database enumeration
  - Data extraction
  - Practice: SQLi-Labs, DVWA

- **Manual SQLi** (2 days)
  - Union-based, Blind, Time-based

#### Week 12: XSS & CSRF
- **Concepts & Tools:**
  - XSS types (Reflected, Stored, DOM)
  - XSS payloads
  - CSRF tokens
  - Practice: XSS game, PentesterLab

#### Week 13: Web Shells & File Upload
- **Tools:**
  - **Weevely** (2 days)
  - **PHP Reverse Shells** (2 days)
  - File upload bypass techniques (3 days)

#### Week 14: Directory & Parameter Fuzzing
- **Tools:**
  - **Gobuster** (2 days)
  - **Ffuf** (2 days)
  - **Dirbuster** (1 day)
  - **Wfuzz** (2 days)

---

## Phase 5: Password Attacks (Weeks 15-17)

#### Week 15-16: Offline Cracking
- **John the Ripper** (5 days)
  - Hash identification
  - Wordlist attacks
  - Rule-based cracking
  
- **Hashcat** (5 days)
  - GPU acceleration
  - Mask attacks
  - Hybrid attacks
  - Practice: Crack various hash types

#### Week 17: Online Attacks
- **Hydra** (3 days)
  - SSH, FTP, HTTP brute force
  - Custom wordlists
  
- **Medusa** (2 days)
- **CrackMapExec** (2 days)
  - SMB attacks

---

## Phase 6: Network Attacks (Weeks 18-20)

#### Week 18: Wireless Attacks
- **Aircrack-ng Suite** (7 days)
  - Monitor mode
  - Packet capture
  - WEP/WPA/WPA2 cracking
  - Deauth attacks
  - Evil twin setup
  - **Requirement:** Wireless adapter with monitor mode

#### Week 19: Man-in-the-Middle
- **Tools:**
  - **Ettercap** (3 days)
  - **Bettercap** (3 days)
  - **ARP spoofing** (1 day)

#### Week 20: Packet Analysis
- **Wireshark** (7 days)
  - Capture filters
  - Display filters
  - Protocol analysis
  - Traffic reconstruction
  - Practice: Analyze PCAP files

---

## Phase 7: Exploitation (Weeks 21-25)

#### Week 21-23: Metasploit Framework
- **Essential Skills (21 days):**
  - Metasploit architecture
  - Searching exploits
  - Using exploits and payloads
  - Meterpreter usage
  - Post-exploitation
  - Privilege escalation
  - Pivoting
  - Practice: Exploit Metasploitable, HackTheBox

#### Week 24: Manual Exploitation
- **SearchSploit** (2 days)
- **Exploit-DB** (2 days)
- **Modifying exploits** (3 days)

#### Week 25: Buffer Overflows (Advanced)
- **Concepts & Tools:**
  - Stack overflows
  - Immunity Debugger / GDB
  - Fuzzing with Boofuzz
  - Shellcode generation with msfvenom
  - Practice: TryHackMe Buffer Overflow room

---

## Phase 8: Post-Exploitation (Weeks 26-28)

#### Week 26-27: Privilege Escalation
- **Linux PrivEsc (7 days):**
  - LinPEAS, LinEnum
  - SUID/SGID exploitation
  - Kernel exploits
  - Cron jobs, PATH hijacking
  
- **Windows PrivEsc (7 days):**
  - WinPEAS, PowerUp
  - Service misconfigurations
  - DLL hijacking
  - Token impersonation

#### Week 28: Persistence & Cleanup
- **Techniques:**
  - Backdoors
  - Rootkits basics
  - Log cleaning
  - Anti-forensics

---

## Phase 9: Specialized Topics (Weeks 29-32)

#### Week 29: Active Directory Attacks
- **Tools:**
  - **BloodHound** (3 days)
  - **Mimikatz** (2 days)
  - **Rubeus** (2 days)

#### Week 30: Social Engineering
- **Tools:**
  - **SET (Social Engineering Toolkit)** (4 days)
  - **Phishing campaigns** (3 days)

#### Week 31: Reverse Engineering Basics
- **Tools:**
  - **Ghidra** (4 days)
  - **Radare2** (3 days)

#### Week 32: Mobile Security Intro
- **Tools:**
  - **APKTool** (2 days)
  - **Drozer** (2 days)
  - **MobSF** (3 days)

---

## Phase 10: Practice & Certification Prep (Weeks 33-40)

### Hands-On Practice Platforms
- **TryHackMe** (Daily practice)
  - Complete paths: Complete Beginner, Offensive Pentesting
  
- **HackTheBox** (Weekly challenges)
  - Start with Easy machines
  - Progress to Medium
  
- **VulnHub** (Weekend practice)
  - Download VMs and practice locally

- **DVWA, WebGoat, Mutillidae** (Web app practice)

### Week 37-40: Mock Penetration Tests
- **Practice:**
  - Full penetration test on vulnerable VMs
  - Write professional reports
  - Document findings with PoC
  - Remediation recommendations

---

## Certification Paths (After Phase 10)

### Entry Level
- **eJPT** (eLearnSecurity Junior Penetration Tester)
  - Duration: 2-3 months prep
  - Cost: ~$200-400

### Intermediate
- **OSCP** (Offensive Security Certified Professional)
  - Duration: 3-6 months prep
  - Cost: ~$1,500
  - Most recognized certification

### Advanced
- **OSEP** (Offensive Security Experienced Penetration Tester)
- **OSWE** (Offensive Security Web Expert)
- **OSWP** (Offensive Security Wireless Professional)

---

## 📚 Essential Resources

### Free Learning Platforms
- TryHackMe (tryhackme.com)
- HackTheBox (hackthebox.com)
- PentesterLab (pentesterlab.com)
- PortSwigger Web Security Academy

### YouTube Channels
- NetworkChuck
- John Hammond
- IppSec (HTB walkthroughs)
- The Cyber Mentor
- LiveOverflow

### Books
- "The Web Application Hacker's Handbook"
- "Penetration Testing: A Hands-On Introduction to Hacking"
- "Metasploit: The Penetration Tester's Guide"
- "RTFM: Red Team Field Manual"

### Communities
- Reddit: r/netsec, r/hacking, r/AskNetsec
- Discord: TryHackMe, HackTheBox servers
- Twitter: Follow infosec professionals

---

## 💡 Daily Learning Routine

### Weekdays (3-4 hours/day)
- **Morning (1 hour):** Theory & reading
- **Evening (2-3 hours):** Hands-on practice with current tool

### Weekends (4-6 hours/day)
- **Lab challenges** (TryHackMe, HackTheBox)
- **Review & consolidation**
- **Build your own vulnerable lab**

---

## ✅ Progress Tracking

### Create Weekly Goals
```markdown
## Week X: [Tool/Topic]
- [ ] Install and configure tool
- [ ] Complete tutorial/documentation
- [ ] Practice on vulnerable lab
- [ ] Document learnings
- [ ] Create cheat sheet
```

### Monthly Review
- What tools mastered?
- What challenges faced?
- Adjust timeline if needed
- Update portfolio/GitHub

---

## 🎯 Key Success Tips

1. **Focus on fundamentals** - Don't skip Phase 1
2. **Practice daily** - Consistency beats intensity
3. **Document everything** - Keep notes and write-ups
4. **Join communities** - Learn from others
5. **Build a home lab** - Practice safely
6. **Write reports** - Communication is crucial
7. **Stay legal** - Only test with permission
8. **Update skills** - Security evolves constantly

---

## 🚀 Career Readiness Checklist

After 6-12 months, you should have:
- [ ] Completed 50+ TryHackMe rooms
- [ ] Rooted 20+ HackTheBox machines
- [ ] Written 10+ penetration test reports
- [ ] Created GitHub portfolio with write-ups
- [ ] Obtained at least eJPT or equivalent
- [ ] Built personal lab environment
- [ ] Created blog/portfolio website
- [ ] LinkedIn profile with certifications
- [ ] Network with infosec professionals

---

## 📍 You Are Here: Week 1

**Next Steps:**
1. Install Kali Linux (VM or dual boot)
2. Learn basic Linux commands
3. Start TryHackMe "Complete Beginner" path
4. Set up note-taking system (Obsidian/Notion/Markdown)

**Good luck on your journey! 🔐**

---

*Last Updated: December 31, 2025*
