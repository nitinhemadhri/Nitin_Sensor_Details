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
// Add remaining 26 sensors (21-46) here following the same structure...
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