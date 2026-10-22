export type SizeChartRow = {
  /** Diameter in mm. */
  diameter: string;
  /** Screw gauge or imperial size, e.g. "#8" or "1/4″". */
  gauge?: string;
  /** Lengths in mm. */
  lengths: number[];
  /** Imperial equivalents, matched to `lengths` by position. */
  inches?: string[];
};

export type SizeChart = {
  id: string;
  name: string;
  shortName: string;
  description?: string;
  rows: SizeChartRow[];
};

export const sizeCharts: SizeChart[] = [
  {
    id: "hex-sds",
    name: "Hex SDS Screws",
    shortName: "Hex SDS",
    description: "Hex head, self-drilling",
    rows: [
      { diameter: "4.2", gauge: "#8", lengths: [13, 16, 19, 25, 32, 38, 50] },
      { diameter: "4.8", gauge: "#10", lengths: [19, 25, 32, 38, 50, 60, 75] },
      {
        diameter: "5.5",
        gauge: "#12",
        lengths: [25, 32, 38, 50, 65, 75, 100, 125, 150],
      },
      {
        diameter: "6.3",
        gauge: "1/4″",
        lengths: [25, 38, 50, 65, 75, 100, 125, 150],
      },
    ],
  },
  {
    id: "chipboard",
    name: "Chipboard Screws",
    shortName: "Chipboard",
    rows: [
      { diameter: "3.0", lengths: [12, 16, 20, 25, 30, 35, 40] },
      { diameter: "3.5", lengths: [16, 20, 25, 30, 35, 40, 45, 50] },
      { diameter: "4.0", lengths: [16, 20, 25, 30, 35, 40, 45, 50, 60, 70] },
      { diameter: "4.5", lengths: [25, 30, 35, 40, 45, 50, 60, 70, 80] },
      { diameter: "5.0", lengths: [30, 35, 40, 45, 50, 60, 70, 80, 90, 100] },
      { diameter: "6.0", lengths: [50, 60, 70, 80, 90, 100, 120, 150] },
    ],
  },
  {
    id: "ss-philips-self-tapping",
    name: "SS Philips Self-Tapping Screws",
    shortName: "SS Self-Tapping",
    description: "Stainless steel, Philips head",
    rows: [
      { diameter: "2.9", gauge: "#4", lengths: [9.5, 13, 16, 19, 25] },
      { diameter: "3.5", gauge: "#6", lengths: [9.5, 13, 16, 19, 25, 32, 38] },
      {
        diameter: "4.2",
        gauge: "#8",
        lengths: [13, 16, 19, 25, 32, 38, 50, 60, 75],
      },
      {
        diameter: "4.8",
        gauge: "#10",
        lengths: [13, 16, 19, 25, 32, 38, 50, 60, 75, 100],
      },
    ],
  },
  {
    id: "csk-sds",
    name: "CSK SDS Screws",
    shortName: "CSK SDS",
    description: "Countersunk head, self-drilling",
    rows: [
      { diameter: "3.9", gauge: "#7", lengths: [19, 25, 32, 38] },
      { diameter: "4.2", gauge: "#8", lengths: [19, 25, 32, 38, 50] },
      { diameter: "4.8", gauge: "#10", lengths: [25, 32, 38, 50, 60, 75] },
    ],
  },
  {
    id: "truss-head-sds",
    name: "Truss Head SDS Screws",
    shortName: "Truss Head SDS",
    description: "Truss head, self-drilling",
    rows: [
      { diameter: "4.2", gauge: "#8", lengths: [13, 16, 19, 25, 32, 38, 50] },
      { diameter: "4.8", gauge: "#10", lengths: [13, 16, 19, 25, 32, 38, 50] },
    ],
  },
  {
    id: "pan-head-sds",
    name: "Pan Head SDS Screws",
    shortName: "Pan Head SDS",
    description: "Pan head, self-drilling",
    rows: [
      { diameter: "3.5", gauge: "#6", lengths: [13, 16, 19, 25] },
      { diameter: "4.2", gauge: "#8", lengths: [13, 16, 19, 25, 32, 38, 50] },
      {
        diameter: "4.8",
        gauge: "#10",
        lengths: [13, 16, 19, 25, 32, 38, 50, 65, 75],
      },
    ],
  },
  {
    id: "carriage-bolt",
    name: "Carriage Bolts",
    shortName: "Carriage Bolt",
    description: "Lengths in mm, with inch sizes",
    rows: [
      {
        diameter: "6",
        gauge: "1/4″",
        lengths: [37, 45, 50, 63, 75, 100],
        inches: ["1½″", "1¾″", "2″", "2½″", "3″", "4″"],
      },
    ],
  },
];
