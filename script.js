// Complete sensor database with all 46 sensors
const sensorsData = [
    {
        id: 1,
        name: "QR Code Printer/Scanner",
        type: "Optical Identification",
        category: "optical",
        principle: "Thermal transfer printing with CCD/CMOS imaging for 2D barcode reading",
        medium: "Reflected light from printed surface",
        applications: ["Chemical bag detection", "Batch traceability", "Material identification"],
        specs: {
            resolution: "203-600 DPI",
            scanRate: "60-100 scans/s",
            distance: "50-500mm",
            interface: "USB, Ethernet, RS-232"
        },
        manufacturers: [
            { name: "Zebra", model: "ZT411", price: "₹80,000-1,50,000" },
            { name: "TSC", model: "TTP-244", price: "₹25,000-45,000" },
            { name: "Honeywell", model: "PC42t", price: "₹35,000-60,000" },
            { name: "Datalogic", model: "Matrix 320", price: "₹1,20,000-2,00,000" }
        ],
        industry: "Mixer - Auto Chemical Systems"
    },
    {
        id: 2,
        name: "PT100 RTD Sensor",
        type: "Temperature Measurement",
        category: "temperature",
        principle: "Platinum resistance changes linearly with temperature (0.385Ω/°C)",
        medium: "Direct contact - thermal conduction",
        applications: ["Mill surface temp", "Motor winding temp", "Hydraulic oil temp", "Water inlet/outlet temp"],
        specs: {
            range: "-200 to +850°C",
            accuracy: "±0.15-0.35°C",
            response: "0.5-5 sec",
            output: "2/3/4-wire, 4-20mA"
        },
        manufacturers: [
            { name: "Endress+Hauser", model: "TR10-ABD", price: "₹3,500-8,000" },
            { name: "Wika", model: "TR10-B", price: "₹2,500-6,000" },
            { name: "Omega", model: "RTD-NPT", price: "₹4,000-9,000" },
            { name: "Thermocoax", model: "PT100-IND", price: "₹1,800-4,500" }
        ],
        industry: "Universal - All sections"
    },
    {
        id: 3,
        name: "Electromagnetic Flow Meter",
        type: "Flow Measurement",
        category: "flow",
        principle: "Faraday's Law - voltage induced proportional to flow velocity",
        medium: "Conductive liquids (>5 μS/cm)",
        applications: ["TCU water flow", "Cooling water", "Chemical dosing", "Process water"],
        specs: {
            accuracy: "±0.5%",
            rangeability: "100:1",
            output: "4-20mA, HART, Modbus",
            pipeSizes: "DN15-DN2000"
        },
        manufacturers: [
            { name: "Siemens", model: "SITRANS F M", price: "₹45,000-1,20,000" },
            { name: "Endress+Hauser", model: "Promag 50", price: "₹55,000-1,50,000" },
            { name: "Yokogawa", model: "ADMAG AXF", price: "₹50,000-1,30,000" },
            { name: "ABB", model: "FEP300", price: "₹48,000-1,25,000" }
        ],
        industry: "Mixer, Stock, Extruder"
    },
    {
        id: 4,
        name: "Density Balance Sensor",
        type: "Density Measurement",
        category: "measurement",
        principle: "Oscillating U-tube frequency varies with fluid density",
        medium: "Rubber compounds, slurries",
        applications: ["Specific gravity of compound", "Quality control", "Batch consistency"],
        specs: {
            range: "0.5-3.0 g/cm³",
            accuracy: "±0.001 g/cm³",
            volume: "1-5 ml",
            tempRange: "-10 to 150°C"
        },
        manufacturers: [
            { name: "Anton Paar", model: "DMA 4500M", price: "₹8,50,000-15,00,000" },
            { name: "Mettler Toledo", model: "DE40", price: "₹6,00,000-12,00,000" },
            { name: "Emerson", model: "Coriolis", price: "₹7,50,000-14,00,000" }
        ],
        industry: "Mixer - Batch QC"
    },
    {
        id: 5,
        name: "Point Laser Sensor",
        type: "Distance/Thickness",
        category: "measurement",
        principle: "Laser triangulation - measures reflected angle for distance",
        medium: "Non-contact optical",
        applications: ["Compound gauge", "Nip gauge", "Drum circumference", "Bank level"],
        specs: {
            range: "50-1000mm",
            resolution: "1-10 μm",
            accuracy: "±0.01-0.05%",
            scanRate: "Up to 50 kHz"
        },
        manufacturers: [
            { name: "Keyence", model: "LK-G5000", price: "₹1,80,000-3,50,000" },
            { name: "Micro-Epsilon", model: "optoNCDT", price: "₹1,50,000-3,00,000" },
            { name: "Sick", model: "OD2", price: "₹1,20,000-2,50,000" }
        ],
        industry: "Mixer, Stock, TBM"
    },
    {
        id: 6,
        name: "Auto Sampler",
        type: "Automated Sampling",
        category: "measurement",
        principle: "Programmable mechanical extraction with tracking",
        medium: "Physical material sampling",
        applications: ["Batch sampling (~200kg)", "QC sample collection", "Traceability"],
        specs: {
            sampleSize: "50-500g",
            accuracy: "±5g",
            cycleTime: "10-30s",
            storage: "10-50 positions"
        },
        manufacturers: [
            { name: "Buehler", model: "AutoMet 300", price: "₹12,00,000-25,00,000" },
            { name: "Sentry", model: "910", price: "₹8,00,000-18,00,000" },
            { name: "Custom India", model: "Various", price: "₹5,00,000-12,00,000" }
        ],
        industry: "Mixer - Stacker"
    },
    {
        id: 7,
        name: "Infrared Temperature Sensor",
        type: "Non-Contact Temperature",
        category: "temperature",
        principle: "Detects IR radiation - energy proportional to T⁴",
        medium: "Thermal radiation (8-14 μm)",
        applications: ["Compound temp at laydown", "Tread heating", "Film temperature"],
        specs: {
            range: "-40 to 1000°C",
            accuracy: "±1-2°C",
            response: "10-100ms",
            spotRatio: "10:1 to 50:1"
        },
        manufacturers: [
            { name: "Fluke", model: "572-2", price: "₹35,000-60,000" },
            { name: "Raytek", model: "MI3", price: "₹45,000-85,000" },
            { name: "Optris", model: "CT LT", price: "₹40,000-75,000" }
        ],
        industry: "Mixer, Stock, TBM"
    },
    {
        id: 8,
        name: "Platform Weighing Scale",
        type: "Weight Measurement",
        category: "measurement",
        principle: "Load cell strain gauges - resistance changes with weight",
        medium: "Direct mechanical load",
        applications: ["Compound weight", "Batch verification", "Material quantity"],
        specs: {
            capacity: "500-5000kg",
            accuracy: "±0.05-0.1%",
            resolution: "10-100g",
            protection: "IP65-IP68"
        },
        manufacturers: [
            { name: "Mettler Toledo", model: "IND780", price: "₹1,50,000-4,00,000" },
            { name: "Avery", model: "ZM303", price: "₹1,20,000-3,00,000" },
            { name: "Essae", model: "DS-420", price: "₹80,000-2,00,000" }
        ],
        industry: "Mixer, Extruder"
    },
    {
        id: 9,
        name: "CCTV Camera",
        type: "Visual Monitoring",
        category: "optical",
        principle: "CCD/CMOS converts light to electrical signals",
        medium: "Visible light",
        applications: ["Compound leftover detection", "Process monitoring", "Quality inspection"],
        specs: {
            resolution: "2-8MP",
            frameRate: "25-60 fps",
            protection: "IP67",
            nightVision: "IR up to 50m"
        },
        manufacturers: [
            { name: "Hikvision", model: "DS-2CD2T85", price: "₹8,000-25,000" },
            { name: "Dahua", model: "IPC-HFW5831", price: "₹9,000-28,000" },
            { name: "Axis", model: "M3046-V", price: "₹25,000-60,000" }
        ],
        industry: "Universal - Monitoring"
    },
    {
        id: 10,
        name: "Metal Detector",
        type: "Contamination Detection",
        category: "measurement",
        principle: "Electromagnetic induction - metal disturbs magnetic field",
        medium: "EM field through material",
        applications: ["Metal contamination detection", "Foreign object detection", "Product safety"],
        specs: {
            sensitivity: "Fe:0.5mm, SS:1.0mm",
            aperture: "200-600mm",
            speed: "100 m/min",
            frequency: "50-800 kHz"
        },
        manufacturers: [
            { name: "Mettler Toledo", model: "Safeline", price: "₹3,50,000-8,00,000" },
            { name: "Loma", model: "IQ4", price: "₹4,00,000-9,00,000" },
            { name: "Eriez", model: "E-Z Tec", price: "₹3,00,000-7,00,000" }
        ],
        industry: "Mixer - Final QC"
    },
    // Continue with sensors 11-46...
    {
        id: 11,
        name: "Turbine Flow Meter",
        type: "Volumetric Flow",
        category: "flow",
        principle: "Turbine rotation proportional to flow - magnetic pickup counts pulses",
        medium: "Clean, low-viscosity liquids (oils)",
        applications: ["GB oil flow", "Hydraulic oil flow", "Lubrication monitoring"],
        specs: {
            range: "0.5-500 LPM",
            accuracy: "±0.5-1%",
            viscosity: "<100 cSt",
            output: "Pulse, 4-20mA"
        },
        manufacturers: [
            { name: "Emerson", model: "8800D", price: "₹65,000-1,40,000" },
            { name: "Sponsler", model: "Flow-Sentry", price: "₹55,000-1,20,000" },
            { name: "Preciso", model: "TFM-200", price: "₹35,000-75,000" }
        ],
        industry: "Mixer, Stock - GB systems"
    },
    {
        id: 12,
        name: "Capacitive Level + RTD",
        type: "Level & Temperature",
        category: "level",
        principle: "Capacitance varies with oil level + PT100 temperature",
        medium: "Non-conductive oils",
        applications: ["GB oil level & temp", "Combined monitoring", "Leak detection"],
        specs: {
            levelRange: "100-2000mm",
            tempRange: "-50 to 200°C",
            accuracy: "±5mm / ±0.3°C",
            output: "4-20mA dual"
        },
        manufacturers: [
            { name: "Endress+Hauser", model: "Liquicap M", price: "₹45,000-95,000" },
            { name: "Vega", model: "VEGACAP 65", price: "₹40,000-85,000" },
            { name: "Siemens", model: "Pointek", price: "₹42,000-90,000" }
        ],
        industry: "Mixer - GB, TSS"
    },
    {
        id: 13,
        name: "Differential Pressure Sensor",
        type: "Pressure Difference",
        category: "pressure",
        principle: "Diaphragm deflection measures pressure differential",
        medium: "Air/gas across filters",
        applications: ["Bag filter ΔP", "Filter clogging detection", "Air flow monitoring"],
        specs: {
            range: "0-100 mbar to 10 bar",
            accuracy: "±0.5% FS",
            overpressure: "2-10x",
            output: "4-20mA, HART"
        },
        manufacturers: [
            { name: "Endress+Hauser", model: "Deltabar", price: "₹35,000-75,000" },
            { name: "Rosemount", model: "3051S", price: "₹40,000-85,000" },
            { name: "Yokogawa", model: "EJX110A", price: "₹38,000-80,000" }
        ],
        industry: "Mixer - Carbon/Filters"
    },
    {
        id: 14,
        name: "Thermal Mass Flow Meter",
        type: "Mass Flow",
        category: "flow",
        principle: "Heat dissipation from sensor - cooling rate ∝ mass flow",
        medium: "Gases (air, nitrogen)",
        applications: ["Air consumption", "Carbon air flow", "Dust collector diagnostics"],
        specs: {
            range: "0-10 to 5000 Nm³/h",
            accuracy: "±1-2%",
            response: "<1s",
            output: "4-20mA, Modbus"
        },
        manufacturers: [
            { name: "Sierra", model: "QuadraTherm", price: "₹1,20,000-2,50,000" },
            { name: "Endress+Hauser", model: "t-mass 65F", price: "₹1,40,000-2,80,000" },
            { name: "Bronkhorst", model: "IFM", price: "₹95,000-2,00,000" }
        ],
        industry: "Mixer - Air systems"
    },
    {
        id: 15,
        name: "Magnetic Flow Meter (Slurry)",
        type: "Flow (Slurry)",
        category: "flow",
        principle: "Faraday induction for conductive slurries",
        medium: "Carbon slurries, conductive fluids",
        applications: ["Carbon charging flowrate", "Slurry flow measurement"],
        specs: {
            accuracy: "±0.5-1%",
            conductivity: ">5 μS/cm",
            liner: "Ceramic, PU, Rubber",
            output: "4-20mA, HART"
        },
        manufacturers: [
            { name: "Siemens", model: "MAG 6000", price: "₹50,000-1,30,000" },
            { name: "Krohne", model: "OPTIFLUX", price: "₹45,000-1,20,000" },
            { name: "ABB", model: "FXE4000", price: "₹48,000-1,25,000" }
        ],
        industry: "Mixer - Carbon handling"
    },
    {
        id: 16,
        name: "Temperature & Vibration Sensor",
        type: "Condition Monitoring",
        category: "temperature",
        principle: "Combined PT100 + piezoelectric/MEMS accelerometer",
        medium: "Contact (temp) + mechanical vibration",
        applications: ["Fume collector motor monitoring", "Bearing condition", "Predictive maintenance"],
        specs: {
            tempRange: "-50 to 200°C",
            vibration: "0-25 kHz",
            acceleration: "±50 to ±500 g",
            output: "4-20mA + digital"
        },
        manufacturers: [
            { name: "SKF", model: "CMSS 2200", price: "₹85,000-1,80,000" },
            { name: "Emerson CSI", model: "6500", price: "₹95,000-2,00,000" },
            { name: "IFM", model: "VSE", price: "₹55,000-1,20,000" }
        ],
        industry: "Mixer - Motors"
    },
    {
        id: 17,
        name: "Lux Sensor",
        type: "Light Intensity",
        category: "measurement",
        principle: "Photodiode current proportional to illuminance",
        medium: "Visible light",
        applications: ["Lighting level monitoring", "Energy management", "Safety compliance"],
        specs: {
            range: "0-200,000 lux",
            accuracy: "±3-5%",
            spectral: "380-780nm",
            output: "4-20mA, I²C"
        },
        manufacturers: [
            { name: "BH1750", model: "Module", price: "₹300-1,500" },
            { name: "Extech", model: "LT300", price: "₹8,000-15,000" },
            { name: "Fluke", model: "941", price: "₹18,000-35,000" }
        ],
        industry: "General - All areas"
    },
    {
        id: 18,
        name: "Acoustic Sensor",
        type: "Noise Monitoring",
        category: "measurement",
        principle: "Microphone - pressure waves to electrical signal",
        medium: "Airborne sound",
        applications: ["Noise level monitoring", "Safety compliance", "Leak detection"],
        specs: {
            range: "30-130 dB",
            frequency: "20 Hz-20 kHz",
            accuracy: "±1.5 dB",
            weighting: "A, C, Z"
        },
        manufacturers: [
            { name: "Brüel & Kjær", model: "2250", price: "₹1,50,000-3,50,000" },
            { name: "Extech", model: "407768", price: "₹15,000-35,000" },
            { name: "PCE", model: "318", price: "₹12,000-25,000" }
],
industry: "General - All areas"
},
{
id: 19,
name: "Optical Dust Sensor",
type: "Particle Detection",
category: "optical",
principle: "Light scattering - intensity ∝ concentration",
medium: "Air particulates",
applications: ["Dust level monitoring", "Air quality", "Environmental compliance"],
specs: {
range: "0-1000 μg/m³",
particles: "0.3-10 μm",
response: "<10s",
output: "UART, PWM"
},
manufacturers: [
{ name: "Plantower", model: "PMS5003", price: "₹1,500-3,500" },
{ name: "Nova SDS", model: "SDS011", price: "₹1,200-3,000" },
{ name: "Honeywell", model: "HPMA115", price: "₹2,500-5,000" }
],
industry: "General - All areas"
},
{
id: 20,
name: "Sheet Laser System",
type: "2D Profile/Thickness",
category: "measurement",
principle: "Laser line projection with CCD imaging",
medium: "Non-contact optical",
applications: ["Compound gauge", "Sheet thickness", "Profile measurement"],
specs: {
range: "0.1-50mm",
resolution: "±5 μm",
scanWidth: "50-500mm",
frequency: "100-4000 Hz"
},
manufacturers: [
{ name: "Keyence", model: "LJ-X8000", price: "₹3,50,000-7,00,000" },
{ name: "Micro-Epsilon", model: "scanCONTROL", price: "₹2,80,000-6,00,000" },
{ name: "Sick", model: "Ranger3", price: "₹2,50,000-5,50,000" }
],
industry: "Stock - Feed Mill"
}


// Complete sensor database with all 46 sensors
const sensorsData = [
    // Sensors 1-20 (already provided above, keep them)
    // ... (keep sensors 1-20 from previous code)
    
    // SENSORS 21-46 - ADD THESE:
    {
        id: 21,
        name: "Force/Tension Sensor",
        type: "Force Measurement",
        category: "measurement",
        principle: "Strain gauge load cell - resistance changes with force",
        medium: "Direct mechanical tension force",
        applications: ["Creel wire tension", "Liner tension", "Material tension control", "Wind-up tension feedback"],
        specs: {
            range: "0-100 N to 50 kN",
            accuracy: "±0.02-0.1% FS",
            output: "mV/V, 4-20mA",
            overload: "150-200% safe"
        },
        manufacturers: [
            { name: "HBM", model: "C16", price: "₹45,000-1,20,000" },
            { name: "Honeywell", model: "Model 41", price: "₹35,000-90,000" },
            { name: "Interface", model: "SSM", price: "₹40,000-1,00,000" },
            { name: "FUTEK", model: "LSB200", price: "₹50,000-1,15,000" }
        ],
        industry: "Stock - 4 Roll Creel, Wind Up"
    },
    {
        id: 22,
        name: "Vision Camera",
        type: "Machine Vision",
        category: "optical",
        principle: "High-resolution imaging with AI/pattern recognition",
        medium: "Visible light imaging",
        applications: ["Fabric width measurement", "Splice detection", "Defect inspection", "Belt flaring detection", "Component positioning"],
        specs: {
            resolution: "1-20 MP",
            frameRate: "30-120 fps",
            interface: "GigE, USB3, Camera Link",
            shutter: "Global or rolling"
        },
        manufacturers: [
            { name: "Cognex", model: "In-Sight", price: "₹1,50,000-4,00,000" },
            { name: "Keyence", model: "CV-X", price: "₹1,80,000-4,50,000" },
            { name: "Basler", model: "ace", price: "₹80,000-2,50,000" },
            { name: "Omron", model: "FH Series", price: "₹1,60,000-3,80,000" }
        ],
        industry: "Stock, TBM - Inspection"
    },
    {
        id: 23,
        name: "Ultrasonic Level Sensor",
        type: "Level Measurement",
        category: "level",
        principle: "Time-of-flight - ultrasonic pulse reflection",
        medium: "Air gap above liquid",
        applications: ["Hydraulic oil level", "Tank level", "Liner damage detection", "Bulk material level"],
        specs: {
            range: "0.3-15m",
            accuracy: "±0.25% FS",
            frequency: "20-200 kHz",
            output: "4-20mA, HART"
        },
        manufacturers: [
            { name: "Endress+Hauser", model: "FMU30", price: "₹35,000-75,000" },
            { name: "Siemens", model: "SITRANS LU", price: "₹32,000-68,000" },
            { name: "Vega", model: "VEGASON 61", price: "₹38,000-80,000" },
            { name: "Banner", model: "T30UX", price: "₹25,000-55,000" }
        ],
        industry: "Stock - 4 Roll Pre-Calender"
    },
    {
        id: 24,
        name: "LVDT Sensor",
        type: "Linear Position/Displacement",
        category: "measurement",
        principle: "Linear Variable Differential Transformer - electromagnetic induction",
        medium: "Electromagnetic coupling",
        applications: ["Calender roll cross-axis distance", "Picker roll position", "Brush bar position", "Cushion gauge", "Bead set measurement"],
        specs: {
            range: "±1mm to ±500mm",
            linearity: "±0.05-0.25% FS",
            resolution: "Infinite",
            output: "±10V, 4-20mA"
        },
        manufacturers: [
            { name: "TE Connectivity", model: "MHR Series", price: "₹35,000-85,000" },
            { name: "Honeywell", model: "LDT Series", price: "₹30,000-75,000" },
            { name: "Omega", model: "LD620", price: "₹28,000-65,000" },
            { name: "Althen", model: "Linear LVDT", price: "₹32,000-70,000" }
        ],
        industry: "Stock - 4 Roll Calender, TBM"
    },
    {
        id: 25,
        name: "Pressure Transmitter",
        type: "Absolute/Gauge Pressure",
        category: "pressure",
        principle: "Piezoresistive/capacitive diaphragm transducer",
        medium: "Hydraulic oil, air, process fluids",
        applications: ["Nip pressure", "Hydraulic pressure", "Water inlet pressure", "Extruder pressure", "Splicer pressure"],
        specs: {
            range: "0-1 bar to 0-1000 bar",
            accuracy: "±0.075-0.5% FS",
            output: "4-20mA, HART, Profibus",
            protection: "IP65-IP68"
        },
        manufacturers: [
            { name: "Rosemount", model: "3051T", price: "₹38,000-82,000" },
            { name: "Endress+Hauser", model: "Cerabar", price: "₹35,000-78,000" },
            { name: "Yokogawa", model: "EJA530", price: "₹40,000-85,000" },
            { name: "Siemens", model: "SITRANS P", price: "₹32,000-72,000" }
        ],
        industry: "Stock, Extruder, TBM"
    },
    {
        id: 26,
        name: "Optical Defect Sensor",
        type: "Surface Inspection",
        category: "optical",
        principle: "Line scan camera with illumination - detects contrast anomalies",
        medium: "Reflected/transmitted light",
        applications: ["Defect detection on calendered material", "Surface quality inspection", "Contamination detection"],
        specs: {
            resolution: "Up to 0.1mm defects",
            scanSpeed: "Up to 600 m/min",
            width: "Up to 3000mm",
            output: "Ethernet, alarm relay"
        },
        manufacturers: [
            { name: "ISRA Vision", model: "SMASH", price: "₹8,00,000-20,00,000" },
            { name: "Cognex", model: "SmartView", price: "₹6,50,000-18,00,000" },
            { name: "BST eltromat", model: "WebInspector", price: "₹7,00,000-19,00,000" }
        ],
        industry: "Stock - 4 Roll Calender"
    },
    {
        id: 27,
        name: "X-Ray Sensor",
        type: "Penetrating Radiation Inspection",
        category: "measurement",
        principle: "X-ray absorption varies with material density/composition",
        medium: "X-ray radiation through material",
        applications: ["Steel cord distribution/EPI measurement", "Belt integrity inspection", "Wire positioning"],
        specs: {
            energy: "50-160 kV",
            resolution: "0.1mm wire detection",
            penetration: "Up to 50mm rubber",
            safety: "Lead shielding, interlocks"
        },
        manufacturers: [
            { name: "Yxlon", model: "Y.Cougar", price: "₹25,00,000-60,00,000" },
            { name: "Smithers Rapra", model: "X-Ray System", price: "₹20,00,000-50,00,000" },
            { name: "Nikon Metrology", model: "XT H 225", price: "₹30,00,000-70,00,000" }
        ],
        industry: "Stock - 4 Roll Post Calender"
    },
    {
        id: 28,
        name: "Optical Sensor (General)",
        type: "Presence/Color Detection",
        category: "optical",
        principle: "Photoelectric - through-beam, retro-reflective, or diffuse",
        medium: "Visible/IR light",
        applications: ["Bleeder yarn validation/color", "Door interlock", "Roll gap safety", "Material presence"],
        specs: {
            range: "5mm to 50m (varies by type)",
            response: "0.5-5ms",
            output: "PNP/NPN, relay",
            protection: "IP67-IP69K"
        },
        manufacturers: [
            { name: "Sick", model: "W4S, WTB4", price: "₹3,500-18,000" },
            { name: "Keyence", model: "PZ-G Series", price: "₹4,500-22,000" },
            { name: "Banner", model: "Q4X", price: "₹5,000-20,000" },
            { name: "Omron", model: "E3Z", price: "₹3,000-15,000" }
        ],
        industry: "Stock - 4 Roll Safety/Detection"
    },
    {
        id: 29,
        name: "Humidity Sensor",
        type: "Relative Humidity",
        category: "measurement",
        principle: "Capacitive/resistive hygrometer - moisture absorption changes properties",
        medium: "Ambient air",
        applications: ["External humidity monitoring", "Environmental control", "Process air quality"],
        specs: {
            range: "0-100% RH",
            accuracy: "±2-3% RH",
            tempRange: "-40 to 85°C",
            output: "4-20mA, 0-10V"
        },
        manufacturers: [
            { name: "Vaisala", model: "HMP110", price: "₹25,000-55,000" },
            { name: "E+E Elektronik", model: "EE23", price: "₹18,000-42,000" },
            { name: "Rotronic", model: "HC2A", price: "₹22,000-50,000" },
            { name: "Honeywell", model: "HIH Series", price: "₹15,000-38,000" }
        ],
        industry: "General - All areas"
    },
    {
        id: 30,
        name: "Profilometer",
        type: "Surface Profile/Thickness",
        category: "measurement",
        principle: "Laser triangulation scanning across width",
        medium: "Non-contact optical",
        applications: ["Profile measurement", "Inner liner thickness", "Tread profile", "Surface topology"],
        specs: {
            range: "0.1-100mm thickness",
            resolution: "±10-50 μm",
            scanWidth: "Up to 1500mm",
            scanRate: "100-2000 Hz"
        },
        manufacturers: [
            { name: "Keyence", model: "LJ-X8000", price: "₹4,00,000-8,00,000" },
            { name: "Micro-Epsilon", model: "scanCONTROL", price: "₹3,50,000-7,50,000" },
            { name: "Cognex", model: "3D-A5000", price: "₹3,80,000-7,80,000" }
        ],
        industry: "Stock-TBR, Stock-PCR, Extruder"
    },
    {
        id: 31,
        name: "Width Sensor",
        type: "Edge Detection/Width",
        category: "measurement",
        principle: "Laser/ultrasonic edge detection on both sides",
        medium: "Non-contact optical/ultrasonic",
        applications: ["Width detection of squeeze", "Cushion width", "Cut material width", "Web width"],
        specs: {
            range: "50mm to 3000mm",
            accuracy: "±0.5mm to ±2mm",
            response: "<100ms",
            output: "4-20mA, Ethernet"
        },
        manufacturers: [
            { name: "Beta LaserMike", model: "LaserSpeed", price: "₹2,50,000-5,50,000" },
            { name: "Sick", model: "Bulkscan LMS", price: "₹2,00,000-4,80,000" },
            { name: "Limab", model: "Width Gauge", price: "₹1,80,000-4,20,000" }
        ],
        industry: "Stock-TBR, Extruder"
    },
    {
        id: 32,
        name: "Encoder (Rotary)",
        type: "Position/Speed Measurement",
        category: "measurement",
        principle: "Optical/magnetic pattern generates pulses - counts rotation",
        medium: "Shaft coupling - rotational motion",
        applications: ["Booking length measurement", "Speed feedback", "Position tracking", "Synchronization"],
        specs: {
            resolution: "100-10,000 PPR",
            speed: "Up to 12,000 RPM",
            output: "TTL, HTL, SSI, EnDat",
            protection: "IP65-IP67"
        },
        manufacturers: [
            { name: "Sick", model: "DFS60", price: "₹15,000-45,000" },
            { name: "Baumer", model: "HOG 10", price: "₹18,000-50,000" },
            { name: "Heidenhain", model: "ROD 426", price: "₹25,000-65,000" },
            { name: "Omron", model: "E6B2", price: "₹12,000-35,000" }
        ],
        industry: "Stock-TBR - Chaffer Slitter"
    },
    {
        id: 33,
        name: "Current Sensor",
        type: "AC/DC Current Measurement",
        category: "measurement",
        principle: "Hall effect or current transformer - magnetic field detection",
        medium: "Non-contact around conductor",
        applications: ["Chimney detection", "Motor current monitoring", "Power monitoring", "Overload detection"],
        specs: {
            range: "0-10A to 0-1000A",
            accuracy: "±0.5-2%",
            bandwidth: "DC to 100 kHz",
            output: "4-20mA, 0-5V"
        },
        manufacturers: [
            { name: "LEM", model: "LT Series", price: "₹8,000-25,000" },
            { name: "Phoenix Contact", model: "MCR-SL-CUC", price: "₹6,500-20,000" },
            { name: "ABB", model: "CS Series", price: "₹7,500-22,000" },
            { name: "Schneider", model: "PowerLogic", price: "₹9,000-28,000" }
        ],
        industry: "Stock Extruder - Quintoplex"
    },
    {
        id: 34,
        name: "pH Sensor",
        type: "Acidity/Alkalinity",
        category: "measurement",
        principle: "Glass electrode - ion-selective membrane generates potential",
        medium: "Direct contact with liquid (cooling water)",
        applications: ["Cooling line water pH", "Process water quality", "Chemical monitoring"],
        specs: {
            range: "pH 0-14",
            accuracy: "±0.01-0.05 pH",
            tempRange: "0-100°C",
            output: "4-20mA, Profibus"
        },
        manufacturers: [
            { name: "Endress+Hauser", model: "Orbisint CPS11", price: "₹35,000-75,000" },
            { name: "Mettler Toledo", model: "InPro 4260i", price: "₹32,000-70,000" },
            { name: "Yokogawa", model: "PH8EFP", price: "₹30,000-65,000" },
            { name: "Hach", model: "pHD", price: "₹28,000-60,000" }
        ],
        industry: "Stock Extruder - Cooling lines"
    },
    {
        id: 35,
        name: "RFID System",
        type: "Radio Frequency Identification",
        category: "optical",
        principle: "RF transponder communication - unique ID read/write",
        medium: "Radio frequency (125 kHz, 13.56 MHz, UHF)",
        applications: ["Die and preformer identification", "Tool tracking", "Component identification", "Process verification"],
        specs: {
            frequency: "125 kHz, 13.56 MHz, 860-960 MHz",
            range: "10mm to 10m (varies)",
            memory: "64 bytes to 8KB",
            interface: "RS-232, Ethernet, Profinet"
        },
        manufacturers: [
            { name: "Siemens", model: "RF600", price: "₹45,000-1,20,000" },
            { name: "Balluff", model: "BIS M", price: "₹40,000-1,00,000" },
            { name: "Turck", model: "RFID System", price: "₹38,000-95,000" },
            { name: "Pepperl+Fuchs", model: "IQC21", price: "₹42,000-1,10,000" }
        ],
        industry: "Stock Extruder - Die identification"
    },
    {
        id: 36,
        name: "Inkjet Pattern Printing",
        type: "Marking/Coding",
        category: "optical",
        principle: "DOD (Drop-on-Demand) or CIJ (Continuous Inkjet) printing",
        medium: "Ink droplets on moving surface",
        applications: ["Tread pattern printing", "Color ID verification", "Batch marking", "Date/code printing"],
        specs: {
            resolution: "300-600 DPI",
            speed: "Up to 300 m/min",
            colors: "1-4 colors",
            substrate: "Rubber, fabric, metal"
        },
        manufacturers: [
            { name: "Domino", model: "Ax Series", price: "₹3,50,000-8,00,000" },
            { name: "Videojet", model: "1860", price: "₹3,80,000-8,50,000" },
            { name: "Markem-Imaje", model: "9450", price: "₹4,00,000-9,00,000" },
            { name: "KGK", model: "Alpha Jet", price: "₹2,80,000-6,50,000" }
        ],
        industry: "Stock Extruder - Quintoplex"
    },
    {
        id: 37,
        name: "Weighing Scale (Booking)",
        type: "Batch Weight Measurement",
        category: "measurement",
        principle: "Load cell based platform scale",
        medium: "Direct mechanical load",
        applications: ["SW/SP weighing", "Batch weight verification", "Material quantity tracking"],
        specs: {
            capacity: "50kg to 2000kg",
            accuracy: "±0.05-0.1%",
            resolution: "5g to 50g",
            output: "4-20mA, RS-485"
        },
        manufacturers: [
            { name: "Mettler Toledo", model: "ICS Series", price: "₹80,000-2,50,000" },
            { name: "Avery", model: "BSA Series", price: "₹65,000-1,80,000" },
            { name: "Essae", model: "EA Series", price: "₹45,000-1,20,000" },
            { name: "Sartorius", model: "Midrics", price: "₹75,000-2,00,000" }
        ],
        industry: "Stock Extruder - Quadraplex"
    },
    {
        id: 38,
        name: "Oil Level Sensor (Capacitive/Float)",
        type: "Level Detection",
        category: "level",
        principle: "Capacitive proximity or float switch mechanism",
        medium: "Hydraulic/gear box oil",
        applications: ["Power pack oil level", "Leak detection", "Low level alarm", "Overfill protection"],
        specs: {
            type: "Point level switch",
            output: "Relay, PNP/NPN",
            pressure: "Up to 100 bar",
            temp: "-40 to 150°C"
        },
        manufacturers: [
            { name: "Endress+Hauser", model: "Liquipoint FTW23", price: "₹12,000-30,000" },
            { name: "Vega", model: "VEGAPOINT 11", price: "₹10,000-25,000" },
            { name: "Gems", model: "LS-7", price: "₹8,000-20,000" },
            { name: "Madison", model: "Float Switch", price: "₹5,000-15,000" }
        ],
        industry: "Curing-PCR - Hydraulic presses"
    },
    {
        id: 39,
        name: "Portable Acoustic Sensor",
        type: "Ultrasonic Leak Detection",
        category: "measurement",
        principle: "Ultrasonic microphone detects high-frequency hiss (25-40 kHz)",
        medium: "Airborne ultrasound from leaks",
        applications: ["Steam leak detection", "Nitrogen leakage", "Compressed air leaks", "Valve integrity"],
        specs: {
            frequency: "20-100 kHz (ultrasonic)",
            sensitivity: "-40 to 0 dB",
            display: "LCD with dB reading",
            power: "Battery operated"
        },
        manufacturers: [
            { name: "UE Systems", model: "Ultraprobe 15000", price: "₹1,20,000-2,50,000" },
            { name: "SDT", model: "SDT270", price: "₹1,40,000-2,80,000" },
            { name: "Fluke", model: "ii900", price: "₹2,50,000-4,50,000" },
            { name: "PCE", model: "LD 1", price: "₹80,000-1,80,000" }
        ],
        industry: "Curing-PCR, Curing-TBR"
    },
    {
        id: 40,
        name: "Coriolis Flow Meter",
        type: "Mass Flow/Density",
        category: "flow",
        principle: "Coriolis force on oscillating tubes - phase shift ∝ mass flow",
        medium: "Any fluid - gas, liquid, slurry",
        applications: ["Steam mass flow", "Precise weight measurement", "Multi-variable measurement", "Batch dosing"],
        specs: {
            accuracy: "±0.1-0.5% mass flow",
            rangeability: "100:1 to 200:1",
            density: "±0.0005 g/cm³",
            output: "4-20mA, HART, Profibus"
        },
        manufacturers: [
            { name: "Emerson Micro Motion", model: "F-Series", price: "₹2,50,000-6,00,000" },
            { name: "Endress+Hauser", model: "Promass 83", price: "₹2,80,000-6,50,000" },
            { name: "Siemens", model: "MASS 6000", price: "₹2,60,000-6,20,000" },
            { name: "Krohne", model: "OPTIMASS 6400", price: "₹2,40,000-5,80,000" }
        ],
        industry: "Curing-PCR, Curing-TBR"
    },
    {
        id: 41,
        name: "2D Profilometer",
        type: "2D Surface Profile",
        category: "measurement",
        principle: "Laser line scan imaging - creates cross-sectional profile",
        medium: "Non-contact optical scanning",
        applications: ["GT centering - T Ring expansion", "Surface topology", "Tread profile verification"],
        specs: {
            resolution: "±20-100 μm",
            scanWidth: "100-2000mm",
            scanRate: "100-1000 Hz",
            output: "Ethernet, image data"
        },
        manufacturers: [
            { name: "Keyence", model: "LJ-X8000 Series", price: "₹4,50,000-9,00,000" },
            { name: "Cognex", model: "3D-A5000", price: "₹4,00,000-8,50,000" },
            { name: "Micro-Epsilon", model: "scanCONTROL 3000", price: "₹3,80,000-8,00,000" }
        ],
        industry: "TBM-PCR - Shaping drum"
    },
    {
        id: 42,
        name: "Auto Laser Light (Alignment)",
        type: "Alignment/Centering",
        category: "optical",
        principle: "Laser line projection for visual alignment reference",
        medium: "Visible laser line",
        applications: ["B&T drum centering", "Component alignment", "Reference line projection"],
        specs: {
            laserClass: "Class 2 (eye-safe)",
            lineLength: "50-500mm",
            wavelength: "635nm (red) or 520nm (green)",
            power: "24VDC or battery"
        },
        manufacturers: [
            { name: "Laser Tools", model: "Alignment Laser", price: "₹15,000-45,000" },
            { name: "Banner", model: "LE550 Laser", price: "₹20,000-55,000" },
            { name: "Omron", model: "ZG2 Laser", price: "₹18,000-50,000" },
            { name: "Sick", model: "OLM100", price: "₹22,000-60,000" }
        ],
        industry: "TBM-PCR - 2nd stage"
    },
    {
        id: 43,
        name: "Component Spotting Sensor (TBD)",
        type: "Component Detection",
        category: "optical",
        principle: "To be determined - likely vision/laser based detection",
        medium: "Visual/optical detection",
        applications: ["Component spotting on drum", "Position verification", "Presence detection"],
        specs: {
            status: "To be defined",
            application: "2nd stage building",
            technology: "Vision or laser (TBD)",
            output: "Digital I/O"
        },
        manufacturers: [
            { name: "TBD", model: "Custom Solution", price: "To be quoted" },
            { name: "System Integrator", model: "Application Specific", price: "Project based" }
        ],
        industry: "TBM-PCR - 2nd stage building"
    },
    {
        id: 44,
        name: "Electromagnetic Flow Meter with Integrated Temperature",
        type: "Flow + Temperature",
        category: "flow",
        principle: "EMF for flow + PT100/PT1000 for temperature in single device",
        medium: "Conductive liquids",
        applications: ["Water outlet flow + temperature", "Cooling systems", "Process water monitoring"],
        specs: {
            flowAccuracy: "±0.5%",
            tempAccuracy: "±0.3°C",
            output: "Dual 4-20mA or digital",
            communication: "HART, Profibus, Modbus"
        },
        manufacturers: [
            { name: "Siemens", model: "SITRANS FM MAG 6000", price: "₹55,000-1,40,000" },
            { name: "Endress+Hauser", model: "Promag W", price: "₹60,000-1,50,000" },
            { name: "Yokogawa", model: "ADMAG AXW", price: "₹58,000-1,45,000" },
            { name: "Krohne", model: "OPTIFLUX 5300 C", price: "₹52,000-1,35,000" }
        ],
        industry: "Stock - 4 Roll, Extruder"
    },
    {
        id: 45,
        name: "Ultrasonic Sensor (Defect Detection)",
        type: "Flaw Detection",
        category: "measurement",
        principle: "Ultrasonic pulse-echo - reflections from internal defects",
        medium: "Ultrasound through material",
        applications: ["Liner damage detection", "Internal flaw detection", "Delamination detection", "Thickness verification"],
        specs: {
            frequency: "1-15 MHz",
            penetration: "Up to 500mm (material dependent)",
            resolution: "0.1-1mm defect size",
            method: "Pulse-echo, through-transmission"
        },
        manufacturers: [
            { name: "Olympus", model: "38DL PLUS", price: "₹1,80,000-3,50,000" },
            { name: "GE Inspection", model: "USM 36", price: "₹2,00,000-4,00,000" },
            { name: "Sonatest", model: "Veo+", price: "₹1,50,000-3,20,000" },
            { name: "NDT Systems", model: "Flaw Detector", price: "₹1,20,000-2,80,000" }
        ],
        industry: "Stock - 4 Roll Liner Rerolling"
    },
    {
        id: 46,
        name: "Float Level Sensor (Oil/Capacitive)",
        type: "Level Switch",
        category: "level",
        principle: "Magnetic float actuates reed switch or capacitive detection",
        medium: "Hydraulic/gear box oil",
        applications: ["Oil level detection", "High/low level alarm", "Pump control", "Leak detection"],
        specs: {
            type: "Float switch or capacitive",
            output: "SPDT relay, PNP/NPN",
            pressure: "Up to 100 bar",
            temperature: "-40 to 150°C"
        },
        manufacturers: [
            { name: "Madison", model: "M1000 Series", price: "₹3,500-12,000" },
            { name: "Gems Sensors", model: "LS-1900", price: "₹5,000-15,000" },
{ name: "Dwyer", model: "Series V6", price: "₹4,500-13,000" },
{ name: "Finetek", model: "SV10", price: "₹6,000-18,000" }
],
industry: "Curing-PCR - Hydraulic presses"
}
];



















];
// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
const sensorGrid = document.getElementById('sensorGrid');
const modal = document.getElementById('sensorModal');
const closeBtn = document.querySelector('.close');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
let currentFilter = 'all';
let searchTerm = '';

// Display sensors
function displaySensors(sensors) {
    sensorGrid.innerHTML = '';
    sensors.forEach(sensor => {
        const card = document.createElement('div');
        card.className = 'sensor-card';
        card.innerHTML = `
            <div class="sensor-header">
                <div class="sensor-number">${sensor.id}</div>
                <h3>${sensor.name}</h3>
            </div>
            <span class="sensor-type">${sensor.type}</span>
            <p><strong>Principle:</strong> ${sensor.principle}</p>
            <p><strong>Applications:</strong> ${sensor.applications.slice(0, 2).join(', ')}...</p>
        `;
        card.addEventListener('click', () => showModal(sensor));
        sensorGrid.appendChild(card);
    });
}

// Show modal with sensor details
function showModal(sensor) {
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    modalTitle.textContent = `${sensor.id}. ${sensor.name}`;

    modalBody.innerHTML = `
        <div class="info-section">
            <h4>📋 Type & Classification</h4>
            <p><strong>Type:</strong> ${sensor.type}</p>
            <p><strong>Category:</strong> ${sensor.category}</p>
        </div>

        <div class="info-section">
            <h4>⚙️ Working Principle</h4>
            <p>${sensor.principle}</p>
        </div>

        <div class="info-section">
            <h4>🔬 Medium of Working</h4>
            <p>${sensor.medium}</p>
        </div>

        <div class="info-section">
            <h4>🎯 Applications</h4>
            <ul>
                ${sensor.applications.map(app => `<li>${app}</li>`).join('')}
            </ul>
        </div>

        <div class="info-section">
            <h4>📊 Technical Specifications</h4>
            <div class="spec-grid">
                ${Object.entries(sensor.specs).map(([key, value]) => `
                    <div class="spec-item">
                        <div class="spec-label">${key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        <div class="spec-value">${value}</div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="info-section">
            <h4>🏭 Manufacturers Available in India</h4>
            <table>
                <thead>
                    <tr>
                        <th>Manufacturer</th>
                        <th>Model</th>
                        <th>Price Range (INR)</th>
                    </tr>
                </thead>
                <tbody>
                    ${sensor.manufacturers.map(mfg => `
                        <tr>
                            <td>${mfg.name}</td>
                            <td>${mfg.model}</td>
                            <td>${mfg.price}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        <div class="info-section">
            <h4>🏗️ Industry Section</h4>
            <p>${sensor.industry}</p>
        </div>
    `;

    modal.style.display = 'block';
}

// Filter and search functionality
function filterSensors() {
    let filtered = sensorsData;

    // Apply category filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(s => s.category === currentFilter);
    }

    // Apply search
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(s => 
            s.name.toLowerCase().includes(term) ||
            s.type.toLowerCase().includes(term) ||
            s.principle.toLowerCase().includes(term) ||
            s.applications.some(app => app.toLowerCase().includes(term))
        );
    }

    displaySensors(filtered);
}

// Event listeners
searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    filterSensors();
});

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        filterSensors();
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Initial display
displaySensors(sensorsData);
});
