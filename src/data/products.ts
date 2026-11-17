export interface Product {
  id: number;
  sku: string;
  name: string;
  brand: string;
  model: string;
  category: string;
  processor: string;
  generation: string;
  ram: string;
  storage: string;
  display: string;
  graphics: string;
  features: string[];
  image: string;
  description: string;
  price?: number;
  availability: "Available" | "On Request" | "Sold";
}

export const products: Product[] = [
  {
    id: 1,
    sku: "OR-001",
    name: "Dell Inspiron 5559",
    brand: "Dell",
    model: "Inspiron 5559",
    category: "Laptops",
    processor: "Intel Core i5",
    generation: "6th Generation",
    ram: "8GB",
    storage: "256GB SSD",
    display: '15-inch Full HD',
    graphics: "2GB Dedicated Graphics (GPU model to confirm)",
    features: [
      "Backlit Keyboard",
      "HDMI",
      "Ethernet",
      "3 USB Ports",
      "Webcam",
      "Bluetooth",
      "Wi-Fi",
      "Dell Audio",
    ],
    image:
      "/products/WhatsApp%20Image%202026-11-14%20at%205.24.09%20PM.jpeg",
    description:
      "A versatile Dell laptop suitable for everyday computing, productivity, graphics work and selected gaming applications.",
    availability: "Available",
  },

  {
    id: 2,
    sku: "OR-002",
    name: "Dell Inspiron 5559",
    brand: "Dell",
    model: "Inspiron 5559",
    category: "Laptops",
    processor: "Intel Core i5",
    generation: "6th Generation",
    ram: "8GB",
    storage: "256GB SSD",
    display: '15-inch Full HD',
    graphics: "2GB Dedicated Graphics (GPU model to confirm)",
    features: [
      "Backlit Keyboard",
      "HDMI",
      "Ethernet",
      "3 USB Ports",
      "Webcam",
      "Bluetooth",
      "Wi-Fi",
      "Dell Audio",
    ],
    image:
      "/products/WhatsApp%20Image%202026-11-14%20at%205.24.10%20PM.jpeg",
    description:
      "A versatile Dell laptop suitable for everyday computing, productivity, graphics work and selected gaming applications.",
    availability: "Available",
  },

  {
    id: 3,
    sku: "OR-003",
    name: "Lenovo ThinkPad L390",
    brand: "Lenovo",
    model: "ThinkPad L390",
    category: "Laptops",
    processor: "Intel Core i5",
    generation: "8th Generation",
    ram: "8GB",
    storage: "256GB SSD",
    display: '13.3-inch Full HD',
    graphics: "Integrated Intel Graphics",
    features: [
      "2 USB-C Ports",
      "2 USB Ports",
      "SD Card Reader",
      "HDMI",
      "Strong Battery Life",
    ],
    image:
      "/products/WhatsApp%20Image%202026-11-14%20at%205.25.02%20PM.jpeg",
    description:
      "A compact ThinkPad designed for productivity, portability and dependable everyday computing.",
    availability: "Available",
  },

  {
    id: 4,
    sku: "OR-004",
    name: "Acer Aspire V5-591",
    brand: "Acer",
    model: "Aspire V5-591",
    category: "Laptops",
    processor: "Intel Core i5",
    generation: "6th Generation",
    ram: "8GB",
    storage: "256GB SSD",
    display: '15-inch Full HD 1080p',
    graphics: "NVIDIA GeForce GTX 950M 2GB",
    features: [
      "Backlit Keyboard",
      "HDMI",
      "VGA",
      "Ethernet",
      "3 USB Ports",
      "Dedicated Graphics",
    ],
    image:
      "/products/WhatsApp%20Image%202026-11-14%20at%205.25.03%20PM.jpeg",
    description:
      "A performance-oriented Acer laptop with dedicated NVIDIA graphics for selected gaming and graphics applications.",
    availability: "Available",
  },

  {
    id: 5,
    sku: "OR-005",
    name: "Acer Aspire V5-591",
    brand: "Acer",
    model: "Aspire V5-591",
    category: "Laptops",
    processor: "Intel Core i5",
    generation: "6th Generation",
    ram: "8GB",
    storage: "256GB SSD",
    display: '15-inch Full HD 1080p',
    graphics: "NVIDIA GeForce GTX 950M 2GB",
    features: [
      "Backlit Keyboard",
      "HDMI",
      "VGA",
      "Ethernet",
      "3 USB Ports",
      "Dedicated Graphics",
    ],
    image:
      "/products/WhatsApp%20Image%202026-11-14%20at%205.25.43%20PM.jpeg",
    description:
      "A performance-oriented Acer laptop with dedicated NVIDIA graphics for selected gaming and graphics applications.",
    availability: "Available",
  },

  {
    id: 6,
    sku: "OR-006",
    name: "Dell Latitude E7470",
    brand: "Dell",
    model: "Latitude E7470",
    category: "Laptops",
    processor: "Intel Core i5",
    generation: "6th Generation",
    ram: "8GB DDR4",
    storage: "256GB SSD",
    display: '14-inch Full HD',
    graphics: "Integrated Intel Graphics",
    features: [
      "Backlit Keyboard",
      "HDMI",
      "VGA",
      "SD Card Reader",
      "3 USB 3.0 Ports",
      "Bluetooth",
    ],
    image:
      "/products/WhatsApp%20Image%202026-11-14%20at%205.26.30%20PM.jpeg",
    description:
      "A business-class Dell Latitude laptop designed for professional work, productivity and everyday computing.",
    availability: "Available",
  },

  {
    id: 7,
    sku: "OR-007",
    name: "Dell Latitude E5250",
    brand: "Dell",
    model: "Latitude E5250",
    category: "Laptops",
    processor: "Intel Core i5",
    generation: "5th Generation",
    ram: "8GB",
    storage: "128GB SSD / 500GB HDD",
    display: '13-inch Full HD',
    graphics: "Integrated Intel Graphics",
    features: [
      "Backlit Keyboard",
      "Fingerprint Reader",
      "HDMI",
      "SD Card Reader",
      "3 USB Ports",
    ],
    image:
      "/products/WhatsApp%20Image%202026-11-14%20at%205.27.08%20PM.jpeg",
    description:
      "A compact business laptop with practical security and connectivity features for everyday productivity.",
    availability: "Available",
  },

  {
    id: 8,
    sku: "OR-008",
    name: "Lenovo ThinkPad X270 Core i7",
    brand: "Lenovo",
    model: "ThinkPad X270",
    category: "Laptops",
    processor: "Intel Core i7",
    generation: "6th Generation",
    ram: "8GB",
    storage: "256GB SSD",
    display: '13-inch Full HD',
    graphics: "Integrated Intel Graphics",
    features: [
      "USB-C",
      "2 USB Ports",
      "SD Card Reader",
      "HDMI",
      "Ethernet",
      "Carbon Skin",
    ],
    image:
      "/products/WhatsApp%20Image%202026-11-14%20at%205.27.59%20PM.jpeg",
    description:
      "A compact ThinkPad featuring an Intel Core i7 processor, SSD storage and a portable business-focused design.",
    availability: "Available",
  },

  {
    id: 9,
    sku: "OR-009",
    name: "Lenovo ThinkPad X270 Core i5",
    brand: "Lenovo",
    model: "ThinkPad X270",
    category: "Laptops",
    processor: "Intel Core i5",
    generation: "6th Generation",
    ram: "8GB",
    storage: "128GB SSD",
    display: '13-inch Full HD',
    graphics: "Integrated Intel Graphics",
    features: [
      "USB-C",
      "2 USB Ports",
      "SD Card Reader",
      "HDMI",
      "Ethernet",
      "Carbon Skin",
    ],
    image:
      "/products/WhatsApp%20Image%202026-11-14%20at%205.29.46%20PM.jpeg",
    description:
      "A portable ThinkPad designed for business productivity, everyday computing and mobility.",
    availability: "Available",
  },

  {
    id: 10,
    sku: "OR-010",
    name: "Dell Latitude 7420",
    brand: "Dell",
    model: "Latitude 7420",
    category: "Laptops",
    processor: "Intel Core i5",
    generation: "11th Generation",
    ram: "8GB DDR4",
    storage: "256GB SSD",
    display: '14-inch UHD',
    graphics: "Integrated Intel Graphics",
    features: [
      "Backlit Keyboard",
      "Face Recognition (to verify)",
      "Fingerprint Reader",
      "USB-C",
      "HDMI",
      "Carbon Skin",
      "Strong Battery Life",
    ],
    image:
      "/products/WhatsApp%20Image%202026-11-14%20at%205.45.51%20PM.jpeg",
    description:
      "A modern Dell business laptop featuring an 11th-generation processor, premium design and practical security features.",
    availability: "Available",
  },

  {
    id: 11,
    sku: "OR-011",
    name: "Dell Vostro 15 3515",
    brand: "Dell",
    model: "Vostro 15 3515",
    category: "Laptops",
    processor: "AMD Ryzen 5 3450U",
    generation: "To be verified",
    ram: "8GB",
    storage: "256GB SSD",
    display: '15-inch',
    graphics: "AMD Radeon Vega 8 Integrated Graphics",
    features: [
      "HDMI",
      "USB Ports",
      "Wi-Fi",
      "Bluetooth",
      "Original Charger",
      "Strong Battery Life",
    ],
    image:
      "/products/WhatsApp%20Image%202026-11-14%20at%205.46.48%20PM.jpeg",
    description:
      "A Dell Vostro laptop powered by AMD Ryzen technology, suitable for productivity and everyday computing.",
    availability: "Available",
  },

  {
    id: 12,
    sku: "OR-012",
    name: "Lenovo ThinkPad L590",
    brand: "Lenovo",
    model: "ThinkPad L590",
    category: "Laptops",
    processor: "Intel Core i7",
    generation: "8th Generation",
    ram: "8GB DDR4",
    storage: "256GB SSD",
    display: '15-inch Full HD',
    graphics: "Intel UHD Graphics",
    features: [
      "Backlit Keyboard",
      "Numeric Keypad",
      "Webcam",
      "USB-C Charging",
      "Strong Battery Life",
    ],
    image:
      "/products/WhatsApp%20Image%202026-11-14%20at%205.46.49%20PM.jpeg",
    description:
      "A business-focused ThinkPad with a large display, Intel Core i7 processing and practical productivity features.",
    availability: "Available",
  },

  {
    id: 13,
    sku: "OR-013",
    name: "Dell G15 Gaming",
    brand: "Dell",
    model: "G15 Gaming",
    category: "Gaming Laptops",
    processor: "Intel Core i5",
    generation: "10th Generation",
    ram: "16GB DDR4",
    storage: "512GB NVMe SSD",
    display: '15.6-inch Full HD 1080p',
    graphics: "NVIDIA GeForce GTX 1650 4GB GDDR6",
    features: [
      "Red Keyboard Backlight",
      "Dedicated Gaming Graphics",
      "Wireless Connectivity",
      "Strong Battery Life",
    ],
    image:
      "/products/WhatsApp%20Image%202026-11-14%20at%208.01.00%20PM.jpeg",
    description:
      "A dedicated gaming laptop featuring NVIDIA GTX graphics, 16GB RAM and fast NVMe SSD storage.",
    availability: "Available",
  },

  {
    id: 14,
    sku: "OR-014",
    name: "Dell Latitude E5250",
    brand: "Dell",
    model: "Latitude E5250",
    category: "Laptops",
    processor: "Intel Core i5",
    generation: "5th Generation",
    ram: "8GB",
    storage: "128GB SSD / 500GB HDD",
    display: '13-inch Full HD',
    graphics: "Integrated Intel Graphics",
    features: [
      "Backlit Keyboard",
      "Fingerprint Reader",
      "HDMI",
      "SD Card Reader",
      "3 USB Ports",
    ],
    image:
      "/products/WhatsApp%20Image%202026-11-14%20at%208.01.01%20PM.jpeg",
    description:
      "A compact business laptop with practical security and connectivity features for everyday productivity.",
    availability: "Available",
  },

  {
    id: 15,
    sku: "OR-015",
    name: "HP Pro x360 Fortis G11",
    brand: "HP",
    model: "Pro x360 Fortis G11",
    category: "Convertible Laptops",
    processor: "Intel Alder Lake-N Quad-Core",
    generation: "To be verified",
    ram: "8GB",
    storage: "128GB SSD",
    display: '12-inch Full HD 1080p Touchscreen',
    graphics: "Intel Integrated Graphics",
    features: [
      "360-Degree Convertible Design",
      "Touchscreen",
      "USB-C",
      "USB 3.0",
      "Wi-Fi",
      "Bluetooth",
      "Up to 3.4GHz Turbo Frequency",
    ],
    image:
      "/products/WhatsApp%20Image%202026-11-14%20at%208.02.34%20PM.jpeg",
    description:
      "A versatile HP convertible laptop featuring a touchscreen and flexible 360-degree design.",
    availability: "Available",
  },

  {
    id: 16,
    sku: "OR-016",
    name: "Dell Latitude 7390 / 7290",
    brand: "Dell",
    model: "Latitude 7390 / 7290",
    category: "Laptops",
    processor: "Intel Core i5",
    generation: "8th Generation",
    ram: "8GB DDR4",
    storage: "256GB SSD",
    display: '13.3-inch Full HD',
    graphics: "Integrated Intel Graphics",
    features: [
      "Backlit Keyboard",
      "Slim Design",
      "USB-C",
      "HDMI",
      "Webcam",
      "Wi-Fi",
      "Bluetooth",
      "Dolby Audio",
    ],
    image:
      "/products/WhatsApp%20Image%202026-11-14%20at%208.03.25%20PM.jpeg",
    description:
      "A slim Dell Latitude business laptop with SSD storage, Full HD display and useful connectivity options.",
    availability: "Available",
  },

  {
    id: 17,
    sku: "OR-017",
    name: "HP ProBook 640 G4",
    brand: "HP",
    model: "ProBook 640 G4",
    category: "Laptops",
    processor: "Intel Core i5",
    generation: "8th Generation",
    ram: "8GB",
    storage: "256GB SSD",
    display: '14-inch',
    graphics: "Integrated Intel Graphics",
    features: [
      "Backlit Keyboard",
      "Fingerprint Reader",
      "Webcam",
      "Bluetooth",
      "HDMI",
      "USB-C",
      "Good Battery Life",
    ],
    image:
      "/products/WhatsApp%20Image%202026-11-16%20at%2011.49.50%20AM.jpeg",
    description:
      "A professional HP ProBook designed for business use, productivity and everyday computing.",
    availability: "Available",
  },

  {
    id: 18,
    sku: "OR-018",
    name: "HP EliteBook 745 G6",
    brand: "HP",
    model: "EliteBook 745 G6",
    category: "Laptops",
    processor: "AMD Ryzen 5 PRO",
    generation: "To be verified",
    ram: "8GB DDR4",
    storage: "256GB SSD",
    display: '14-inch',
    graphics: "AMD Radeon Vega 8 Integrated Graphics",
    features: [
      "USB-C",
      "Backlit Keyboard",
      "Fingerprint Reader",
      "Webcam",
      "Bluetooth",
      "Strong Battery Life",
    ],
    image:
      "/products/WhatsApp%20Image%202026-11-16%20at%2011.51.34%20AM.jpeg",
    description:
      "An HP EliteBook featuring AMD Ryzen PRO processing, SSD storage and business-focused security features.",
    availability: "Available",
  },

  {
    id: 19,
    sku: "OR-019",
    name: "Apple MacBook Pro 2020",
    brand: "Apple",
    model: "MacBook Pro 2020",
    category: "MacBooks",
    processor: "Intel Core i5",
    generation: "2020 Model",
    ram: "16GB",
    storage: "256GB SSD",
    display: '13.3-inch',
    graphics: "Integrated Intel Graphics",
    features: [
      "Touch Bar",
      "Backlit Keyboard",
      "macOS",
      "Compact Design",
    ],
    image:
      "/products/WhatsApp%20Image%202026-11-17%20at%202.03.20%20AM.jpeg",
    description:
      "An Apple MacBook Pro featuring Intel Core i5 processing, 16GB RAM and a compact professional design.",
    availability: "Available",
  },

  {
    id: 20,
    sku: "OR-020",
    name: "Apple MacBook Pro 2017",
    brand: "Apple",
    model: "MacBook Pro 2017",
    category: "MacBooks",
    processor: "Intel Core i5",
    generation: "2017 Model",
    ram: "8GB",
    storage: "256GB SSD",
    display: '13.3-inch',
    graphics: "Integrated Intel Graphics",
    features: [
      "Touch Bar",
      "Backlit Keyboard",
      "macOS",
      "Compact Design",
    ],
    image:
      "/products/WhatsApp%20Image%202026-11-17%20at%202.04.01%20AM.jpeg",
    description:
      "An Apple MacBook Pro with Intel Core i5 processing, SSD storage and a compact professional design.",
    availability: "Available",
  },
];