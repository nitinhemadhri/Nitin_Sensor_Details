# 🔬 Complete Guide to 46 Industrial Sensors

> Comprehensive technical documentation for industrial sensors used in tire manufacturing and related industries

[![GitHub stars](https://img.shields.io/github/stars/yourusername/sensor-guide?style=social)](https://github.com/yourusername/sensor-guide)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Last Updated](https://img.shields.io/badge/updated-January%202025-green.svg)]()

## 📋 Table of Contents

- [Overview](#overview)
- [Sensor Categories](#sensor-categories)
- [Complete Sensor List](#complete-sensor-list)
- [How to Use This Guide](#how-to-use-this-guide)
- [Contributing](#contributing)

## 🎯 Overview

This repository contains detailed technical information about **46 different types of industrial sensors** commonly used in manufacturing, specifically tire production facilities. Each sensor entry includes:

- ✅ Working principle
- ✅ Medium of operation
- ✅ Specific applications
- ✅ Technical specifications
- ✅ Available manufacturers in India
- ✅ Price ranges
- ✅ Industry sections where used

### Statistics
- **46** Sensor Types
- **250+** Applications
- **150+** Manufacturer Models
- **Sectors**: Mixer, Stock, Extruder, TBM, Curing

---

## 📊 Sensor Categories

| Category | Count | Examples |
|----------|-------|----------|
| **Temperature Sensors** | 8 | PT100 RTD, Infrared, Thermocouples |
| **Flow Meters** | 6 | Electromagnetic, Turbine, Thermal Mass, Coriolis |
| **Pressure Sensors** | 3 | Differential, Absolute, Transmitters |
| **Level Sensors** | 4 | Capacitive, Ultrasonic, Float, Oil Level |
| **Optical/Vision** | 7 | CCTV, Vision Camera, Optical Defect, QR Scanner |
| **Measurement** | 10 | Laser Distance, LVDT, Profilometer, Encoder |
| **Analytical** | 4 | Density, pH, Humidity, Acoustic |
| **Safety/Detection** | 4 | Metal Detector, Current, X-Ray, RFID |

---

## 📖 Complete Sensor List

### 1. QR Code Printer/Scanner

**Type:** Optical Identification  
**Working Principle:**  
Thermal transfer or direct thermal printing creates machine-readable 2D matrix barcodes. Optical CCD/CMOS imaging sensors decode the QR pattern using error correction algorithms.

**Medium of Working:**  
Reflected visible/IR light from printed surface captured by imaging array.

**Applications:**
- Chemical bag detection in charging conveyor
- Batch identification and traceability
- Material tracking during loading
- Auto chemical systems

**Technical Specifications:**
| Parameter | Value |
|-----------|-------|
| Resolution | 203 - 600 DPI |
| Scan Rate | 60 - 100 scans/second |
| Reading Distance | 50mm - 500mm |
| Interface | USB, Ethernet, RS-232, Modbus |
| Barcode Types | QR, Data Matrix, PDF417 |

**Manufacturers Available in India:**

| Manufacturer | Model | Price Range (INR) | Key Features |
|--------------|-------|-------------------|--------------|
| Zebra Technologies | ZT411 | ₹80,000 - ₹1,50,000 | Industrial grade, high resolution |
| TSC Printers | TTP-244 Pro | ₹25,000 - ₹45,000 | Cost-effective, reliable |
| Honeywell | PC42t | ₹35,000 - ₹60,000 | Compact design |
| Datalogic | Matrix 320 | ₹1,20,000 - ₹2,00,000 | Advanced vision system |
| Brother India | TD-4T | ₹30,000 - ₹55,000 | Thermal transfer |

**Industry Section:** Mixer - Auto Chemical Master 1, 2, Final

---

### 2. PT100 RTD Sensor

**Type:** Temperature Measurement  
**Working Principle:**  
Resistance Temperature Detector using platinum element. Resistance changes linearly with temperature following the relationship: R(T) = R₀(1 + αT), where α = 0.00385 Ω/Ω/°C for platinum.

**Medium of Working:**  
Direct thermal contact with measured surface or fluid. Heat conducts to platinum element, changing its electrical resistance.

**Applications:**
- Mill surface temperature monitoring
- Water inlet/outlet temperature
- Motor winding temperature
- Hydraulic oil temperature
- Compound/material temperature
- Transformer winding temperature
- GB motor temperature

**Technical Specifications:**
| Parameter | Value |
|-----------|-------|
| Temperature Range | -200°C to +850°C |
| Accuracy | ±0.15°C to ±0.35°C (Class A/B) |
| Response Time | 0.5 to 5 seconds |
| Base Resistance | 100Ω at 0°C |
| Tolerance | IEC 60751 standard |
| Output | 2-wire, 3-wire, 4-wire |

**Manufacturers Available in India:**

| Manufacturer | Model | Price Range (INR) | Key Features |
|--------------|-------|-------------------|--------------|
| Endress+Hauser | TR10-ABD | ₹3,500 - ₹8,000 | High accuracy, Class A |
| Wika | TR10-B | ₹2,500 - ₹6,000 | Robust construction |
| Omega Engineering | RTD-NPT | ₹4,000 - ₹9,000 | Fast response |
| Pyromation | PT100-Series | ₹3,000 - ₹7,500 | Industrial grade |
| Thermocoax India | PT100-IND | ₹1,800 - ₹4,500 | Cost-effective |
| Jumo India | TR-0401 | ₹3,200 - ₹7,000 | Wide range |

**Industry Section:** Universal - Used across Mixer, Stock, Extruder, TBM, Curing

---

### 3. Electromagnetic Flow Meter

**Type:** Volumetric Flow Measurement  
**Working Principle:**  
Based on Faraday's Law of Electromagnetic Induction. When conductive fluid flows through a magnetic field perpendicular to flow direction, voltage is induced proportional to flow velocity: E = B × D × V (E=voltage, B=magnetic field, D=pipe diameter, V=velocity).

**Medium of Working:**  
Conductive liquids with minimum conductivity of 5 μS/cm. Water, acids, bases, slurries compatible. Not for hydrocarbons, gases.

**Applications:**
- TCU (Temperature Control Unit) water flow
- Cooling water monitoring
- Chemical dosing flow measurement
- Blender bar water flow
- Main motor water flow

**Technical Specifications:**
| Parameter | Value |
|-----------|-------|
| Accuracy | ±0.5% of reading |
| Rangeability | Up to 100:1 turn-down |
| Fluid Conductivity | >5 μS/cm minimum |
| Pipe Sizes | DN15 to DN2000 |
| Output Signals | 4-20mA, HART, Modbus, Profibus |
| Power Supply | 24VDC, 230VAC |

**Manufacturers Available in India:**

| Manufacturer | Model | Price Range (INR) | Key Features |
|--------------|-------|-------------------|--------------|
| Siemens | SITRANS F M MAG 5100W | ₹45,000 - ₹1,20,000 | Compact, HART |
| Endress+Hauser | Promag 50 | ₹55,000 - ₹1,50,000 | High accuracy |
| Yokogawa | ADMAG AXF | ₹50,000 - ₹1,30,000 | Two-wire |
| ABB | ProcessMaster FEP300 | ₹48,000 - ₹1,25,000 | Sanitary design |
| Krohne | OPTIFLUX 4000 | ₹42,000 - ₹1,10,000 | Versatile |
| Emerson Rosemount | 8700M | ₹52,000 - ₹1,35,000 | Smart verification |

**Industry Section:** Mixer, Stock, Extruder - Water/fluid management systems

---

### 4. Density Balance Sensor

**Type:** Density/Specific Gravity Measurement  
**Working Principle:**  
Oscillating U-tube or Coriolis effect principle. Natural frequency of oscillation of a tube filled with sample changes based on mass/density. Frequency measured electronically: ρ = K × T² - C (ρ=density, T=period, K & C=constants).

**Medium of Working:**  
Rubber compounds, slurries, liquids. Sample flows through oscillating measurement cell.

**Applications:**
- Specific gravity of rubber compound
- Batch quality control
- Compound consistency verification
- Mixing uniformity check

**Technical Specifications:**
| Parameter | Value |
|-----------|-------|
| Density Range | 0.5 to 3.0 g/cm³ |
| Accuracy | ±0.001 g/cm³ |
| Temperature Range | -10°C to 150°C (compensated) |
| Sample Volume | 1-5 ml |
| Repeatability | ±0.0001 g/cm³ |
| Viscosity Range | 0.1 to 10,000 mPa·s |

**Manufacturers Available in India:**

| Manufacturer | Model | Price Range (INR) | Key Features |
|--------------|-------|-------------------|--------------|
| Anton Paar | DMA 4500M | ₹8,50,000 - ₹15,00,000 | Laboratory precision |
| Mettler Toledo | DE40 | ₹6,00,000 - ₹12,00,000 | Inline process |
| Emerson Micro Motion | Coriolis Density | ₹7,50,000 - ₹14,00,000 | Mass + density |
| Rudolph Research | DDM 2911 | ₹5,50,000 - ₹10,00,000 | Portable option |

**Industry Section:** Mixer - Batch quality control

---

### 5. Point Laser Sensor System

**Type:** Distance/Thickness Measurement  
**Working Principle:**  
Laser triangulation. Projects focused laser spot onto target. Reflected light captured by position-sensitive detector at angle. Distance calculated from geometric relationship: Distance = f × b / (b - x), where f=focal length, b=baseline, x=spot position on detector.

**Medium of Working:**  
Non-contact optical measurement through air. Works on reflective and diffuse surfaces. Accuracy affected by target color, surface finish, ambient light.

**Applications:**
- Compound gauge measurement
- Nip gauge on calender rolls
- Drum circumference measurement (GT, carcass)
- Bank level sensing
- Material thickness

**Technical Specifications:**
| Parameter | Value |
|-----------|-------|
| Measurement Range | 50mm to 1000mm |
| Resolution | 1 to 10 μm |
| Linearity | ±0.01% to ±0.05% of FSO |
| Sampling Rate | Up to 50 kHz |
| Laser Class | Class 2 (safe for eyes) |
| Output | 4-20mA, 0-10V, RS-485, Ethernet |

**Manufacturers Available in India:**

| Manufacturer | Model | Price Range (INR) | Key Features |
|--------------|-------|-------------------|--------------|
| Keyence | LK-G5000 Series | ₹1,80,000 - ₹3,50,000 | Ultra-high precision |
| Micro-Epsilon | optoNCDT 1420 | ₹1,50,000 - ₹3,00,000 | Blue laser option |
| Sick | OD2-35W075A0 | ₹1,20,000 - ₹2,50,000 | Robust industrial |
| Panasonic | HL-G1 | ₹95,000 - ₹2,00,000 | Compact design |
| Banner Engineering | Q4X | ₹75,000 - ₹1,50,000 | Diffuse mode |

**Industry Section:** Mixer, Stock, TBM - Precision dimensional control

---

### 6. Auto Sampler

**Type:** Automated Sampling System  
**Working Principle:**  
Programmable mechanical or pneumatic sampling mechanism with position tracking. Extracts representative sample from batch at predetermined intervals. Integrated with batch ID system for traceability.

**Medium of Working:**  
Physical extraction of material samples from production batches using grippers, scoops, or suction mechanisms.

**Applications:**
- Sample collection from ~200kg batches
- Batch verification and tracking
- Quality control sample management
- Laboratory testing preparation

**Technical Specifications:**
| Parameter | Value |
|-----------|-------|
| Sample Size | 50g to 500g (adjustable) |
| Accuracy | ±5g |
| Cycle Time | 10-30 seconds |
| Storage Capacity | 10-50 sample positions |
| Control | PLC-based, Modbus/Ethernet |
| Power | Pneumatic + 24VDC |

**Manufacturers Available in India:**

| Manufacturer | Model | Price Range (INR) | Key Features |
|--------------|-------|-------------------|--------------|
| Buehler (ITW) | AutoMet 300 | ₹12,00,000 - ₹25,00,000 | Fully automated |
| Sentry Equipment | Model 910 | ₹8,00,000 - ₹18,00,000 | Process sampling |
| ISCO | 3700 Series | ₹10,00,000 - ₹20,00,000 | Composite sampling |
| Custom Solutions India | Various Models | ₹5,00,000 - ₹12,00,000 | Application-specific |

**Industry Section:** Mixer - Stacker systems

---

### 7. Infrared Temperature Sensor

**Type:** Non-Contact Temperature Measurement  
**Working Principle:**  
Detects infrared radiation emitted by all objects above absolute zero. Based on Stefan-Boltzmann law: Radiated power ∝ T⁴. Sensor measures IR intensity and calculates temperature considering emissivity (ε). Most sensors detect 8-14μm wavelength.

**Medium of Working:**  
Non-contact measurement through air. Measures thermal radiation emitted by target. Affected by emissivity, distance, ambient temperature, and atmospheric absorption.

**Applications:**
- Final compound temperature at laydown
- Tread heating temperature monitoring
- Cutting temperature measurement
- Film/inner liner temperature
- Belt temperature monitoring

**Technical Specifications:**
| Parameter | Value |
|-----------|-------|
| Temperature Range | -40°C to 1000°C |
| Accuracy | ±1°C to ±2°C |
| Response Time | 10-100 milliseconds |
| Distance-to-Spot Ratio | 10:1 to 50:1 |
| Spectral Range | 8-14 μm (long wave) |
| Output | 4-20mA, 0-10V, Digital |

**Manufacturers Available in India:**

| Manufacturer | Model | Price Range (INR) | Key Features |
|--------------|-------|-------------------|--------------|
| Fluke | 572-2 | ₹35,000 - ₹60,000 | Handheld + fixed |
| Raytek (Fluke) | MI3 | ₹45,000 - ₹85,000 | Industrial communicator |
| Optris | CT LT | ₹40,000 - ₹75,000 | Compact design |
| Omega Engineering | OS-MNI Series | ₹30,000 - ₹65,000 | Miniature size |
| LumaSense | IMPAC IN 5 | ₹55,000 - ₹1,10,000 | High precision |
| Testo India | 835 Series | ₹25,000 - ₹50,000 | Portable option |

**Industry Section:** Mixer, Stock-TBR, Stock-PCR, TBM

---

### 8. Platform Weighing Scale

**Type:** Weight/Mass Measurement  
**Working Principle:**  
Strain gauge load cells convert mechanical force to electrical signal. When weight applied, metal deforms slightly, changing resistance of bonded strain gauges. Wheatstone bridge circuit converts resistance change to voltage: ΔV ∝ Weight.

**Medium of Working:**  
Direct mechanical load transfer from platform through load cells. Typically 3 or 4 load cells for large platforms.

**Applications:**
- Compound weight measurement
- Batch weight verification
- Material quantity tracking
- Ingredient weighing

**Technical Specifications:**
| Parameter | Value |
|-----------|-------|
| Capacity | 500kg to 5000kg |
| Accuracy | ±0.1% to ±0.05% of capacity |
| Resolution | 10g to 100g |
| Platform Size | 600×600mm to 1500×1500mm |
| Output | 4-20mA, RS-485, Modbus, Ethernet/IP |
| Protection | IP65-IP68 |

**Manufacturers Available in India:**

| Manufacturer | Model | Price Range (INR) | Key Features |
|--------------|-------|-------------------|--------------|
| Mettler Toledo | IND780 | ₹1,50,000 - ₹4,00,000 | Advanced terminal |
| Avery Weigh-Tronix | ZM303 | ₹1,20,000 - ₹3,00,000 | Stainless steel |
| Essae Teraoka | DS-420 | ₹80,000 - ₹2,00,000 | Local service |
| Sartorius | Combics | ₹1,40,000 - ₹3,50,000 | German precision |
| Phoenix Scales | PS-5000 | ₹60,000 - ₹1,50,000 | Cost-effective |
| Weightron | Platform Series | ₹70,000 - ₹1,80,000 | Customizable |

**Industry Section:** Mixer, Extruder - Stacker and booking areas

---

### 9. CCTV Camera

**Type:** Visual Monitoring System  
**Working Principle:**  
CCD (Charge-Coupled Device) or CMOS (Complementary Metal-Oxide-Semiconductor) image sensor converts optical image to electrical signals. Pixels accumulate charge proportional to light intensity, digitized and transmitted as video stream.

**Medium of Working:**  
Visible light reflected from monitored area. Modern cameras also support IR illumination for low-light/night vision.

**Applications:**
- Compound leftover detection after changeover
- Process monitoring and surveillance
- Quality inspection and verification
- Safety and security monitoring

**Technical Specifications:**
| Parameter | Value |
|-----------|-------|
| Resolution | 2MP to 8MP (1080p to 4K) |
| Frame Rate | 25-60 fps |
| Environment Rating | IP67, explosion-proof available |
| Connectivity | Ethernet (PoE), Wi-Fi, analog |
| Storage | NVR/DVR, cloud, SD card |
| Night Vision | IR up to 50m |

**Manufacturers Available in India:**

| Manufacturer | Model | Price Range (INR) | Key Features |
|--------------|-------|-------------------|--------------|
| Hikvision | DS-2CD2T85G1 | ₹8,000 - ₹25,000 | 8MP, DarkFighter |
| Dahua | IPC-HFW5831E | ₹9,000 - ₹28,000 | Starlight |
| Axis Communications | M3046-V | ₹25,000 - ₹60,000 | Swedish quality |
| Bosch Security | FLEXIDOME IP | ₹20,000 - ₹55,000 | Vandal-resistant |
| CP Plus India | CP-UNC-TA30L3 | ₹6,000 - ₹18,000 | Local support |
| Honeywell | Performance Series | ₹12,000 - ₹35,000 | Wide dynamic range |

**Industry Section:** Mixer - Blender bar, Universal monitoring

---

### 10. Metal Detector

**Type:** Contamination Detection System  
**Working Principle:**  
Electromagnetic induction. Transmitter coil creates electromagnetic field. When metal passes through, eddy currents induced in metal disturb the field. Receiver coils detect disturbance and trigger alarm/rejection. Sensitivity varies by metal type (ferrous, non-ferrous, stainless steel).

**Medium of Working:**  
Electromagnetic field penetrating conveyed material. Detection independent of speed within limits.

**Applications:**
- Metal contamination detection in final compound
- Foreign object detection (wire, staples, clips)
- Product safety and quality assurance
- Regulatory compliance

**Technical Specifications:**
| Parameter | Value |
|-----------|-------|
| Sensitivity | Fe: 0.5mm, Non-Fe: 1.0mm, SS: 1.5mm |
| Aperture Size | 200mm to 600mm (height × width) |
| Belt Speed | Up to 100 m/min |
| Reject System | Pneumatic pusher, belt stop, diverter |
| Frequency | 50-800 kHz (multi-frequency) |
| IP Rating | IP65-IP69K |

**Manufacturers Available in India:**

| Manufacturer | Model | Price Range (INR) | Key Features |
|--------------|-------|-------------------|--------------|
| Mettler Toledo | Safeline Profile | ₹3,50,000 - ₹8,00,000 | Auto-learn, reject verification |
| Loma Systems | IQ4 | ₹4,00,000 - ₹9,00,000 | Multi-frequency |
| Eriez | E-Z Tec DSP | ₹3,00,000 - ₹7,00,000 | Digital signal processing |
| Fortress Technology | Interceptor | ₹3,20,000 - ₹7,50,000 | Stealth technology |
| Nikka India | MD-5075 | ₹1,80,000 - ₹4,50,000 | Local manufacturing |
| Thermo Fisher | Apex | ₹4,50,000 - ₹10,00,000 | Simultaneous multi-frequency |

**Industry Section:** Mixer - Stacker/Final compound QC

---

## 🚀 How to Use This Guide

1. **Browse by Category**: Use the table of contents to navigate to specific sensor types
2. **Search**: Use Ctrl+F to find specific manufacturers, applications, or specifications
3. **Compare**: Use the manufacturer tables to compare prices and features
4. **Reference**: Bookmark this page for quick technical reference

## 📝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Add/update sensor information
3. Verify technical accuracy
4. Submit a pull request

## 📄 License

This documentation is provided under MIT License for educational and reference purposes.

## 📧 Contact

For corrections, additions, or suggestions:
- Open an issue on GitHub
- Email: your.email@example.com

---

**Note:** Prices are approximate and based on Indian market rates as of January 2025. Actual prices may vary based on specifications, quantity, and vendor. Always request formal quotations for procurement.

---

[Continue to next 36 sensors →](SENSORS_11-46.md)